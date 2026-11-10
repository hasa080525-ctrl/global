import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const SITE = "국제학교전문과외";
const ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwOqTTLkqZ_frFyT6N0QcjYZT3jsG0puhq9wRmrQSPxhFgn0fXET3AoGVj4PiHMNHcg/exec";
const INTEREST_THRESHOLD = 30; // seconds of foreground time before "관심 높음"

function detectSource(): string {
  const utm = new URLSearchParams(location.search).get("utm_source");
  if (utm) return utm;
  if (document.referrer) {
    try {
      return new URL(document.referrer).hostname;
    } catch {
      return document.referrer;
    }
  }
  return "다이렉트";
}

function detectDevice(): string {
  const ua = navigator.userAgent;
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(ua);
  const os = /Android/i.test(ua)
    ? "안드로이드"
    : /iPhone|iPad|iPod/i.test(ua)
      ? "iOS"
      : /Windows/i.test(ua)
        ? "Windows"
        : /Mac/i.test(ua)
          ? "Mac"
          : "기타";
  return (isMobile ? "모바일" : "데스크톱") + "(" + os + ")";
}

function send(stage: "visit" | "interest", extra: Record<string, unknown>) {
  const payload = {
    type: "visit_alert",
    stage,
    site: SITE,
    title: document.title,
    path: location.pathname + location.search,
    source: detectSource(),
    device: detectDevice(),
    ts: new Date().toISOString(),
    ...extra,
  };
  fetch(ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify(payload),
  }).catch(() => {});
}

let cachedLocation: Promise<string> | null = null;
function getLocation(): Promise<string> {
  if (!cachedLocation) {
    cachedLocation = fetch("https://get.geojs.io/v1/ip/geo.json")
      .then((r) => r.json())
      .then((geo) => (geo && (geo.city || geo.region)) || "")
      .catch(() => "");
  }
  return cachedLocation;
}

export default function VisitAlert() {
  const { pathname, search } = useLocation();
  const pathKey = pathname + search;
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    // skip headless/automated browsers (e.g. the puppeteer-based prerender build step)
    if (navigator.webdriver) return;

    let cancelled = false;
    // let React's own <title>/<meta> updates for this route commit first
    const t = setTimeout(() => {
      if (cancelled) return;
      getLocation().then((loc) => {
        if (cancelled) return;
        send("visit", { location: loc });

        let elapsed = 0;
        let lastTick = Date.now();
        let fired = false;
        const timer = setInterval(() => {
          if (document.visibilityState === "visible") {
            elapsed += (Date.now() - lastTick) / 1000;
          }
          lastTick = Date.now();
          if (!fired && elapsed >= INTEREST_THRESHOLD) {
            fired = true;
            send("interest", { location: loc, duration: Math.round(elapsed) });
            clearInterval(timer);
          }
        }, 2000);
        const onVisibility = () => {
          lastTick = Date.now();
        };
        document.addEventListener("visibilitychange", onVisibility);

        cleanupRef.current = () => {
          clearInterval(timer);
          document.removeEventListener("visibilitychange", onVisibility);
        };
      });
    }, 80);

    return () => {
      cancelled = true;
      clearTimeout(t);
      cleanupRef.current?.();
      cleanupRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathKey]);

  return null;
}
