import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NEWS_ITEMS, NEWS_CATEGORIES } from "@/mocks/news";
import JsonLd from "@/components/base/JsonLd";

const siteUrl = import.meta.env.VITE_SITE_URL || "https://example.com";

const LATEST_NEWS = NEWS_ITEMS.slice(0, 4);

function LatestNewsSlider({ onNavigate }: { onNavigate: (id: string) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = LATEST_NEWS.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading text-2xl md:text-3xl font-medium text-foreground-950 tracking-tight">
          <i className="ri-fire-line text-accent-500 mr-2" />
          최신 기사
        </h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prevSlide}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-background-100 text-foreground-700 hover:bg-background-200 transition cursor-pointer"
            aria-label="이전"
          >
            <i className="ri-arrow-left-s-line text-lg" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-background-100 text-foreground-700 hover:bg-background-200 transition cursor-pointer"
            aria-label="다음"
          >
            <i className="ri-arrow-right-s-line text-lg" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {LATEST_NEWS.map((item) => (
            <div
              key={item.id}
              className="w-full shrink-0 cursor-pointer"
              onClick={() => onNavigate(item.id)}
            >
              <div className="relative h-[220px] md:h-[300px] overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  title={`${item.title} - 국제학교 뉴스`}
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-block rounded-full bg-accent-500 px-3 py-1 text-xs font-bold text-background-50">
                      {item.category}
                    </span>
                    <span className="text-sm font-medium text-white/80">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl md:text-3xl font-medium text-white leading-snug tracking-tight drop-shadow-lg">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 flex items-center gap-1.5">
          {LATEST_NEWS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                idx === currentIndex
                  ? "w-6 bg-primary-500"
                  : "w-2 bg-white/60 hover:bg-white"
              }`}
              aria-label={`슬라이드 ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("전체");
  const navigate = useNavigate();

  const filtered =
    activeCategory === "전체"
      ? NEWS_ITEMS
      : NEWS_ITEMS.filter((n) => n.category === activeCategory);

  return (
    <main className="bg-background-50 text-foreground-950">
      <title>뉴스 &amp; 소식 | 국제학교 입시·IB·AP·SAT 최신 정보</title>
      <meta name="description" content="국제학교 입시, IB·AP·IGCSE·SAT 시험 일정과 준비 전략, 유학 트렌드까지 학생과 학부모를 위한 최신 교육 소식을 전합니다." />
      <meta name="keywords" content="국제학교 입시, IB 입시, AP 시험 준비, SAT 준비, IGCSE 시험, 국제학교 뉴스, 국제학교 과외 정보, 국제학교 유학, 화상 과외 추천, IB 시험 일정, AP 시험 일정, 국제학교 수시 정시, 국제학교 유학 정보, ED 입시 캘린더" />
      <link rel="canonical" href={`${siteUrl}/news`} />
      <meta property="og:title" content="뉴스 & 소식 | 국제학교 입시·IB·AP·SAT 최신 정보" />
      <meta property="og:description" content="국제학교 입시, IB·AP·IGCSE·SAT 시험 일정과 준비 전략, 유학 트렌드까지 학생과 학부모를 위한 최신 교육 소식을 전합니다." />
      <meta property="og:url" content={`${siteUrl}/news`} />
      <meta property="og:image" content="https://kukje-gwaoe.co.kr/og-image.png" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="국제학교전문과외" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="뉴스 & 소식 | 국제학교 입시·IB·AP·SAT 최신 정보" />
      <meta name="twitter:description" content="국제학교 입시, IB·AP·IGCSE·SAT 시험 일정과 준비 전략, 유학 트렌드까지 학생과 학부모를 위한 최신 교육 소식을 전합니다." />
      <meta name="twitter:image" content="https://kukje-gwaoe.co.kr/og-image.png" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "국제학교 뉴스 & 소식",
          description:
            "서울 국제학교전문과외 - 국제학교 입시, IB·AP·IGCSE·SAT 커리큘럼, 유학 정보 등 최신 교육 소식을 제공합니다.",
          url: `${siteUrl}/news`,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", "position": 1, "name": "국제학교 전문과외", "item": siteUrl },
            { "@type": "ListItem", "position": 2, "name": "뉴스 & 소식", "item": `${siteUrl}/news` },
          ],
        }}
      />

      {/* Hero */}
      <section className="relative h-[320px] md:h-[440px] overflow-hidden">
        <img
          src="https://readdy.ai/api/search-image?query=Modern%20international%20school%20campus%20with%20students%20studying%20in%20library%2C%20bright%20and%20clean%20educational%20environment%2C%20professional%20photography%2C%20warm%20lighting%2C%20neutral%20background%2C%20high%20quality&width=1600&height=500&seq=news-header&orientation=landscape"
          alt="국제학교 뉴스"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
        <div className="relative flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="font-heading text-4xl md:text-6xl font-medium text-white tracking-tight drop-shadow-lg">
            국제학교 뉴스 & 소식
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/90 max-w-xl font-medium drop-shadow">
            입시, 커리큘럼, 유학 등 국제학교 학생과 학부모를 위한 최신 정보
          </p>
        </div>
      </section>

      {/* Latest News Slider */}
      <section className="section-pad pt-10 md:pt-14 pb-4 md:pb-6">
        <LatestNewsSlider onNavigate={(id) => navigate(`/news/${id}`)} />
      </section>

      {/* Filter */}
      <section className="section-pad pt-6 md:pt-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {NEWS_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2.5 text-sm md:text-base font-bold transition whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? "bg-primary-500 text-foreground-950"
                    : "bg-background-100 text-foreground-800 hover:bg-background-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="section-pad py-12 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filtered.map((item) => (
              <article
                key={item.id}
                className="group rounded-2xl border border-background-300/70 bg-background-50 overflow-hidden transition hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                onClick={() => navigate(`/news/${item.id}`)}
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    title={`${item.title} - 국제학교 뉴스`}
                    className="h-full w-full object-cover object-top transition group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 md:p-7">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block rounded-full bg-secondary-100 px-3 py-1 text-xs font-bold text-secondary-900">
                      {item.category}
                    </span>
                    <span className="text-sm font-medium text-foreground-500">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-medium text-foreground-950 line-clamp-2 leading-snug tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-foreground-800 line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>
                  <div className="mt-5 flex items-center gap-1 text-sm font-bold text-primary-600">
                    <span>더 읽기</span>
                    <i className="ri-arrow-right-line" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-foreground-500">
              <i className="ri-file-list-line text-4xl mb-4 block" />
              <p className="text-lg font-medium">해당 카테고리의 뉴스가 없습니다.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}