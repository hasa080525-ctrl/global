import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { NEWS_ITEMS } from "@/mocks/news";

interface SimpleLink {
  label: string;
  href: string;
  isPage?: boolean;
}

interface NavLinkItem extends Partial<SimpleLink> {
  label: string;
  highlight?: boolean;
  hasNewsDropdown?: boolean;
  dropdownItems?: SimpleLink[];
}

const NAV_LINKS: NavLinkItem[] = [
  { label: "홈", href: "#hero" },
  {
    label: "나라별 가이드",
    dropdownItems: [
      { label: "학교 소개", href: "#about" },
      { label: "강사진", href: "#teachers" },
      { label: "성적 사례", href: "#success" },
      { label: "후기", href: "#reviews" },
      { label: "과목", href: "#subjects" },
    ],
  },
  { label: "뉴스", href: "/news", isPage: true, hasNewsDropdown: true },
  { label: "FAQ", href: "#faq" },
  { label: "문의", href: "/contact", isPage: true },
  { label: "신청", href: "/trial", isPage: true, highlight: true },
];

const LATEST_NEWS = NEWS_ITEMS.slice(0, 4);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const newsRef = useRef<HTMLDivElement>(null);
  const guideRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const insideNews = newsRef.current?.contains(target);
      const insideGuide = guideRef.current?.contains(target);
      if (!insideNews && !insideGuide) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClick = (e: React.MouseEvent, href: string, isPage?: boolean) => {
    e.preventDefault();
    if (isPage) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (location.pathname !== "/") {
      navigate(`/${href}`);
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-foreground-950/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 md:px-6 py-3 md:py-4">
        <a
          href="#hero"
          onClick={(e) => handleClick(e, "#hero", false)}
          className="flex items-center gap-2.5 text-base md:text-lg text-background-50 font-normal tracking-wide"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500 text-foreground-950">
            <i className="ri-graduation-cap-fill" />
          </span>
          국제학교 전문과외
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            if (link.hasNewsDropdown) {
              return (
                <div key={link.label} className="relative" ref={newsRef}>
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    className="flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium transition whitespace-nowrap cursor-pointer text-background-50 hover:bg-background-50/10"
                  >
                    {link.label}
                    <i className={`ri-arrow-down-s-line text-xs transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                  </button>

                  {openDropdown === link.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 rounded-2xl bg-foreground-950 border border-background-50/10 shadow-xl overflow-hidden">
                      <div className="p-3 border-b border-background-50/10">
                        <span className="text-xs font-bold text-primary-500 uppercase tracking-wider">최신 뉴스</span>
                      </div>
                      <div className="divide-y divide-background-50/10">
                        {LATEST_NEWS.map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => {
                              navigate(`/news/${item.id}`);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                              setOpenDropdown(null);
                            }}
                            className="w-full flex gap-3 p-3 text-left hover:bg-background-50/5 transition cursor-pointer"
                          >
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-14 h-14 rounded-lg object-cover shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <span className="inline-block rounded-full bg-primary-500/20 text-primary-400 text-xs font-bold px-2 py-0.5 mb-1">
                                {item.category}
                              </span>
                              <p className="text-sm text-background-100 font-medium line-clamp-2 leading-snug">
                                {item.title}
                              </p>
                              <p className="text-xs text-background-400 mt-1">{item.date}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={(e) => handleClick(e, link.href!, link.isPage)}
                        className="w-full p-3 text-center text-sm font-bold text-primary-500 hover:bg-background-50/5 transition cursor-pointer border-t border-background-50/10"
                      >
                        전체 뉴스 보기 <i className="ri-arrow-right-line" />
                      </button>
                    </div>
                  )}
                </div>
              );
            }

            if (link.dropdownItems) {
              return (
                <div key={link.label} className="relative" ref={guideRef}>
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    className="flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium transition whitespace-nowrap cursor-pointer text-background-50 hover:bg-background-50/10"
                  >
                    {link.label}
                    <i className={`ri-arrow-down-s-line text-xs transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                  </button>

                  {openDropdown === link.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 rounded-2xl bg-foreground-950 border border-background-50/10 shadow-xl overflow-hidden py-1.5">
                      {link.dropdownItems.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={(e) => handleClick(e, item.href, item.isPage)}
                          className="block px-4 py-2.5 text-sm text-background-100 hover:bg-background-50/10 hover:text-background-50 transition cursor-pointer"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleClick(e, link.href!, link.isPage)}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition whitespace-nowrap cursor-pointer ${
                  link.highlight
                    ? "bg-primary-500 text-foreground-950 hover:bg-primary-400"
                    : "text-background-50 hover:bg-background-50/10"
                }`}
              >
                {link.label}
              </a>
            );
          })}
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
        <div className="lg:hidden border-t border-background-50/10 bg-foreground-950/95 backdrop-blur-md">
          <div className="flex flex-col gap-1 px-4 py-3">
            {NAV_LINKS.map((link) => {
              if (link.dropdownItems) {
                return (
                  <div key={link.label} className="pt-1">
                    <p className="px-3 py-1 text-xs font-bold text-background-400 uppercase tracking-wider">
                      {link.label}
                    </p>
                    {link.dropdownItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => handleClick(e, item.href, item.isPage)}
                        className="block rounded-lg px-3 py-2.5 text-sm font-medium text-background-50 hover:bg-background-50/10 transition"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href!, link.isPage)}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                    link.highlight
                      ? "bg-primary-500 text-foreground-950"
                      : "text-background-50 hover:bg-background-50/10"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            {/* 모바일 최신 뉴스 */}
            <div className="mt-2 border-t border-background-50/10 pt-2">
              <p className="text-xs font-bold text-primary-500 px-3 py-1 uppercase tracking-wider">최신 뉴스</p>
              {LATEST_NEWS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    navigate(`/news/${item.id}`);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setMobileOpen(false);
                  }}
                  className="w-full flex gap-3 rounded-lg px-3 py-2 text-left hover:bg-background-50/5 transition cursor-pointer"
                >
                  <img src={item.image} alt={item.title} className="w-10 h-10 rounded-lg object-cover shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-background-100 font-medium line-clamp-2 leading-snug">{item.title}</p>
                    <p className="text-xs text-background-400 mt-0.5">{item.date}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
