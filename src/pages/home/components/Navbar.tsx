import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NAV_LINKS = [
  { label: "홈", href: "#hero" },
  { label: "소개", href: "/about", isPage: true },
  { label: "강사진", href: "/faculty", isPage: true },
  { label: "성적 사례", href: "/success", isPage: true },
  { label: "뉴스", href: "/news", isPage: true },
  { label: "과목", href: "#subjects" },
  { label: "후기", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "문의", href: "/contact", isPage: true },
  { label: "신청", href: "/trial", isPage: true, highlight: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent,
    href: string,
    isPage?: boolean,
  ) => {
    if (isPage) {
      e.preventDefault();
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setMobileOpen(false);
      return;
    }
    // Anchor link
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-foreground-950/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 md:px-6 py-3 md:py-4"
      >
        <a
          href="#hero"
          onClick={(e) => handleClick(e, "#hero", false)}
          className="flex items-center gap-2.5 text-base md:text-lg text-background-50 font-normal tracking-wide"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500 text-foreground-950"
          >
            <i className="ri-graduation-cap-fill" />
          </span>
          국제학교 전문과외
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link.href, link.isPage)}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition whitespace-nowrap cursor-pointer ${
                link.highlight
                  ? "bg-primary-500 text-foreground-950 hover:bg-primary-400"
                  : "text-background-50 hover:bg-background-50/10"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg text-background-50 hover:bg-background-50/10"
          aria-label="메뉴"
        >
          <i className={mobileOpen ? "ri-close-line text-xl" : "ri-menu-line text-xl"} />
        </button>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-background-50/10 bg-foreground-950/95 backdrop-blur-md"
        >
          <div className="flex flex-col gap-1 px-4 py-3"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleClick(e, link.href, link.isPage)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                  link.highlight
                    ? "bg-primary-500 text-foreground-950"
                    : "text-background-50 hover:bg-background-50/10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}