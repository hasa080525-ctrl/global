import { useParams, useNavigate } from "react-router-dom";
import { NEWS_ITEMS } from "@/mocks/news";
import JsonLd from "@/components/base/JsonLd";

const siteUrl = import.meta.env.VITE_SITE_URL || "https://example.com";

export default function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = NEWS_ITEMS.find((n) => n.id === id);

  if (!item) {
    return (
      <main className="bg-background-50 text-foreground-950 min-h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <i className="ri-error-warning-line text-5xl text-foreground-500 mb-5 block" />
          <h1 className="font-heading text-3xl font-medium text-foreground-950 tracking-tight">
            뉴스를 찾을 수 없습니다
          </h1>
          <p className="mt-3 text-lg text-foreground-700">
            존재하지 않는 뉴스입니다.
          </p>
          <button
            type="button"
            onClick={() => navigate("/news")}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-500 px-7 py-3.5 text-base font-bold text-foreground-950 transition hover:bg-primary-400 cursor-pointer"
          >
            <i className="ri-arrow-left-line" /> 뉴스 목록으로
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-background-50 text-foreground-950">
      <title>{item.title} | 서울 국제학교전문과외</title>
      <meta name="description" content={item.summary} />
      <meta name="keywords" content={`국제학교, ${item.category}, IB, AP, SAT, 화상 과외, 국제학교전문과외`} />
      <link rel="canonical" href={`${siteUrl}/news/${item.id}`} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: item.title,
          datePublished: item.date,
          dateModified: item.date,
          description: item.summary,
          articleSection: item.category,
          keywords: [
            item.category,
            "국제학교",
            "국제학교 입시",
            "IB",
            "AP",
            "SAT",
            "화상 과외",
            "서울 국제학교전문과외",
          ],
          articleBody: item.sections
            .map((s) => s.heading + ": " + s.body)
            .join("\n\n"),
          wordCount: item.sections.reduce(
            (acc, s) => acc + s.body.split(/\s+/).filter(Boolean).length,
            0
          ),
          inLanguage: "ko-KR",
          isAccessibleForFree: true,
          url: `${siteUrl}/news/${item.id}`,
          image: [
            {
              "@type": "ImageObject",
              url: item.image,
              width: 800,
              height: 500,
              caption: item.title,
            },
          ],
          thumbnailUrl: item.image,
          author: {
            "@type": "Organization",
            name: "국제학교 전문과외",
            url: siteUrl,
          },
          publisher: {
            "@type": "Organization",
            name: "국제학교 전문과외",
            url: siteUrl,
            logo: {
              "@type": "ImageObject",
              url: "https://static.readdy.ai/image/396c131664f132186cce247becf0fbc5/f689f6902db8633945364b676e8e94f8.png",
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${siteUrl}/news/${item.id}`,
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", "position": 1, "name": "국제학교 전문과외", "item": siteUrl },
            { "@type": "ListItem", "position": 2, "name": "뉴스 & 소식", "item": `${siteUrl}/news` },
            { "@type": "ListItem", "position": 3, "name": item.title, "item": `${siteUrl}/news/${item.id}` },
          ],
        }}
      />

      {/* Hero */}
      <section className="relative h-[320px] md:h-[440px] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          title={`${item.title} - 국제학교 뉴스`}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30" />
      </section>

      {/* Content */}
      <section className="section-pad py-12 md:py-20">
        <div className="mx-auto max-w-3xl">
          <button
            type="button"
            onClick={() => navigate("/news")}
            className="mb-8 inline-flex items-center gap-1 text-base font-bold text-foreground-600 hover:text-primary-500 transition cursor-pointer"
          >
            <i className="ri-arrow-left-line" /> 뉴스 목록
          </button>

          <div className="flex items-center gap-3 mb-5">
            <span className="inline-block rounded-full bg-secondary-100 px-3.5 py-1.5 text-sm font-bold text-secondary-900">
              {item.category}
            </span>
            <span className="text-base font-medium text-foreground-500">{item.date}</span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl font-medium text-foreground-950 leading-tight tracking-tight">
            {item.title}
          </h1>

          <div className="mt-3 text-base md:text-lg text-foreground-700 font-medium">
            {item.summary}
          </div>

          <div className="mt-10 space-y-10">
            {item.sections.map((section, idx) => (
              <div key={idx} className="border-l-4 border-primary-500 pl-6 md:pl-8">
                <h2 className="font-heading text-2xl md:text-3xl font-medium text-foreground-950 tracking-tight">
                  {section.heading}
                </h2>
                <p className="mt-4 text-base md:text-lg text-foreground-900 leading-[1.8]">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          {/* Related links */}
          <div className="mt-12 rounded-2xl border border-background-300/70 bg-background-100 p-6 md:p-8">
            <h3 className="font-heading text-lg text-foreground-950">관련 정보 더 보기</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="/faculty" className="inline-flex items-center gap-2 rounded-full bg-background-50 border border-background-300/70 px-4 py-2.5 text-sm font-bold text-foreground-800 hover:border-primary-500 hover:text-primary-600 transition whitespace-nowrap cursor-pointer">
                <i className="ri-team-line" /> 전문 강사진 보기
              </a>
              <a href="/success" className="inline-flex items-center gap-2 rounded-full bg-background-50 border border-background-300/70 px-4 py-2.5 text-sm font-bold text-foreground-800 hover:border-primary-500 hover:text-primary-600 transition whitespace-nowrap cursor-pointer">
                <i className="ri-trophy-line" /> 성적 향상 사례
              </a>
              <a href="/trial" className="inline-flex items-center gap-2 rounded-full bg-background-50 border border-background-300/70 px-4 py-2.5 text-sm font-bold text-foreground-800 hover:border-primary-500 hover:text-primary-600 transition whitespace-nowrap cursor-pointer">
                <i className="ri-gift-line" /> 무료 모의수업 신청
              </a>
              <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-background-50 border border-background-300/70 px-4 py-2.5 text-sm font-bold text-foreground-800 hover:border-primary-500 hover:text-primary-600 transition whitespace-nowrap cursor-pointer">
                <i className="ri-message-3-line" /> 문의하기
              </a>
            </div>
          </div>

          <div className="mt-14 pt-8 border-t border-background-300/70">
            <button
              type="button"
              onClick={() => navigate("/news")}
              className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-7 py-3.5 text-base font-bold text-foreground-950 transition hover:bg-primary-400 cursor-pointer"
            >
              <i className="ri-arrow-left-line" /> 다른 뉴스 보기
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}