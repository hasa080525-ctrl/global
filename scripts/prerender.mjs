// Post-build step: crawls every known client route in a real headless Chrome
// instance and writes the fully-rendered DOM to dist/<route>/index.html.
//
// Why: this app is a pure client-rendered SPA (no SSR). Vercel's SPA-fallback
// rewrite serves the same near-empty index.html for every path, so Googlebot's
// first-pass crawl sees identical, contentless HTML on every URL, which is a
// well-known cause of "Crawled - currently not indexed" in Search Console.
// Prerendering gives every route its own static HTML with the real title,
// meta tags and body content already in place; the client bundle still boots
// on top of it for interactivity (no hydration - see main.tsx).
import { readFileSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const DIST_DIR = fileURLToPath(new URL("../dist/", import.meta.url));
const NEWS_SRC = fileURLToPath(new URL("../src/mocks/news.ts", import.meta.url));
// The SPA-fallback shell must stay untouched by our own output writes below
// (route "/" writes to dist/index.html) - otherwise later routes served by
// the fallback would boot on top of an already-rendered previous page's DOM
// instead of the pristine empty-root shell, corrupting their <head> tags.
const SHELL_PATH = join(DIST_DIR, "__shell.html");
const PORT = 4173;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".json": "application/json",
  ".xml": "application/xml",
  ".txt": "text/plain",
  ".ico": "image/x-icon",
};

function newsIds() {
  const src = readFileSync(NEWS_SRC, "utf-8");
  return [...src.matchAll(/id:\s*"(\d+)"/g)].map((m) => m[1]);
}

function staticRoutes() {
  return ["/", "/contact", "/trial", "/news", "/camp"];
}

function outputPathFor(route) {
  if (route === "/") return join(DIST_DIR, "index.html");
  return join(DIST_DIR, route.replace(/^\//, ""), "index.html");
}

function startServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      const urlPath = decodeURIComponent(req.url.split("?")[0]);
      let filePath = join(DIST_DIR, urlPath);
      const isAssetLike = extname(urlPath) !== "";
      try {
        if (!isAssetLike) throw new Error("not-a-file-path");
        const data = readFileSync(filePath);
        res.writeHead(200, { "Content-Type": MIME[extname(filePath)] || "application/octet-stream" });
        res.end(data);
      } catch {
        // Mirrors vercel.json's SPA-fallback rewrite for /((?!assets/|schools/).*)
        const shell = readFileSync(SHELL_PATH);
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(shell);
      }
    });
    server.listen(PORT, () => resolve(server));
  });
}

// React hoists a route's <title> to the front of <head> but never removes the
// static default <title> baked into index.html, so every captured page ends
// up with two <title> tags. Keep only the first (React's, and the one both
// document.title and crawlers use) so the shipped HTML is valid.
function dedupeTitleTag(html) {
  let seen = false;
  return html.replace(/<title>[\s\S]*?<\/title>/g, (match) => {
    if (seen) return "";
    seen = true;
    return match;
  });
}

async function prerenderRoute(page, route) {
  const url = `http://localhost:${PORT}${route}`;
  await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
  await page.waitForFunction(
    () => {
      const root = document.getElementById("root");
      return !!root && root.children.length > 0 && document.title.length > 0;
    },
    { timeout: 15000 }
  );
  const html = dedupeTitleTag(await page.content());
  const outPath = outputPathFor(route);
  mkdirSync(join(outPath, ".."), { recursive: true });
  writeFileSync(outPath, html);
  console.log(`prerendered ${route} -> ${outPath.replace(DIST_DIR, "dist/")}`);
}

async function main() {
  const routes = [...staticRoutes(), ...newsIds().map((id) => `/news/${id}`)];
  writeFileSync(SHELL_PATH, readFileSync(join(DIST_DIR, "index.html")));
  const server = await startServer();
  // --no-sandbox is required in most CI/build containers (incl. Vercel),
  // which don't grant the namespace permissions Chrome's sandbox needs.
  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"] });
  try {
    const page = await browser.newPage();
    for (const route of routes) {
      await prerenderRoute(page, route);
    }
  } finally {
    await browser.close();
    server.close();
    rmSync(SHELL_PATH, { force: true });
  }
  console.log(`\nPrerendered ${routes.length} routes.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
