import { TEACHERS } from "@/mocks/teachers";
import JsonLd from "@/components/base/JsonLd";
import Navbar from "@/pages/home/components/Navbar";
import Footer from "@/pages/home/components/Footer";

const siteUrl = import.meta.env.VITE_SITE_URL || "https://example.com";

const TONE_MAP: Record<string, { bg: string; icon: string }> = {
  primary: { bg: "bg-primary-500", icon: "text-primary-500" },
  accent: { bg: "bg-accent-500", icon: "text-accent-500" },
  secondary: { bg: "bg-secondary-500", icon: "text-secondary-500" },
};

const toneCycle = ["primary", "accent", "secondary"] as const;

export default function TeachersPage() {
  return (
    <main className="bg-background-50 text-foreground-950">
      <title>전담 강사진 | IB·AP·SAT 과목별 화상 과외 선생님</title>
      <meta name="description" content="IB Math·IB 영어·AP·IGCSE·SAT·ACT 과목별 전담 강사진. 평균 8~15년 경력, 1:1 맞춤 화상 과외로 성적 향상을 돕습니다." />
      <meta name="keywords" content="국제학교 과외 강사, IB 과외 선생님, AP 과외 강사, IGCSE 과외, SAT 과외, ACT 과외, A-Level 과외, IB 수학 과외, IB Math AA 과외, IB Math AI 과외, IB 영어 과외, AP 물리 과외, IB EE 과외, TOK 과외, 화상 과외 강사, 온라인 과외 강사, 국제학교 1:1 과외, NLCS 과외, 채드윅 과외, KIS 과외, SJA 과외, BFS 과외, GSIS 과외, 외국인학교 과외 강사, 국제학교 과목별 과외 선생님, 국제학교 과외 강사 매칭" />
      <link rel="canonical" href={`${siteUrl}/faculty`} />
      <meta property="og:title" content="전담 강사진 | IB·AP·SAT 과목별 화상 과외 선생님" />
      <meta property="og:description" content="IB Math·IB 영어·AP·IGCSE·SAT·ACT 과목별 전담 강사진. 평균 8~15년 경력, 1:1 맞춤 화상 과외로 성적 향상을 돕습니다." />
      <meta property="og:url" content={`${siteUrl}/faculty`} />
      <meta property="og:image" content="https://kukje-gwaoe.co.kr/og-image.jpg" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="국제학교전문과외" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="전담 강사진 | IB·AP·SAT 과목별 화상 과외 선생님" />
      <meta name="twitter:description" content="IB Math·IB 영어·AP·IGCSE·SAT·ACT 과목별 전담 강사진. 평균 8~15년 경력, 1:1 맞춤 화상 과외로 성적 향상을 돕습니다." />
      <meta name="twitter:image" content="https://kukje-gwaoe.co.kr/og-image.jpg" />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "서울 국제학교전문과외 - 과목별 전담 강사진",
        "description": "서울 국제학교전문과외 - IB, AP, IGCSE, SAT 등 국제학교 커리큘럼에 특화된 평균 8~15년 경력의 검증된 전문 강사진. 1:1 화상 맞춤 과외.",
        "url": `${siteUrl}/faculty`,
        "numberOfItems": TEACHERS.length,
        "itemListElement": TEACHERS.map((t, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "item": {
            "@type": "Person",
            "name": t.name.replace(" 선생님", ""),
            "jobTitle": `${t.subject} 전담 강사`,
            "description": t.tagline,
            "image": t.image,
            "url": `${siteUrl}/faculty`
          }
        }))
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "국제학교 전문과외", "item": siteUrl },
          { "@type": "ListItem", "position": 2, "name": "과목별 전담 강사진", "item": `${siteUrl}/faculty` }
        ]
      }} />
      <Navbar />
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground-950 text-background-50 section-pad pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-polka opacity-80" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-4 py-1.5 text-xs md:text-sm font-bold text-foreground-950">
            <i className="ri-graduation-cap-fill" /> 평균 경력 8~15년
          </span>
          <h1 className="mt-5 font-heading text-4xl md:text-6xl text-primary-500">
            <a href="#" className="cursor-pointer">과목별 전담 강사진</a>
          </h1>
          <p className="mt-4 text-sm md:text-base text-background-200">
            국내·해외 국제학교 커리큘럼에 최적화된 전문 강사진이
            <br />
            학생의 성적 향상을 위해 함께합니다
          </p>
        </div>
      </section>

      {/* Teacher Cards */}
      <section className="section-pad py-16 md:py-20">
        <div className="mx-auto max-w-5xl space-y-16 md:space-y-20">
          {TEACHERS.map((t, idx) => {
            const tone =
              TONE_MAP[toneCycle[idx % toneCycle.length]];
            const isEven = idx % 2 === 0;
            return (
              <a
                key={t.id}
                href="tel:01039510535"
                aria-label={`${t.name} 상담 전화 연결 010-3951-0535`}
                className={`flex flex-col gap-6 md:gap-10 rounded-3xl border border-background-300/70 bg-background-50 p-6 md:p-8 transition hover:-translate-y-1 cursor-pointer ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Photo */}
                <div className="shrink-0">
                  <div className="relative mx-auto lg:mx-0 h-64 w-64 md:h-72 md:w-72 overflow-hidden rounded-3xl">
                    <img
                      src={t.image}
                      alt={t.name}
                      title={t.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div
                      className={`absolute left-4 top-4 rounded-full px-4 py-1.5 text-xs font-bold text-foreground-950 ${tone.bg}`}
                    >
                      {t.subject} 전담
                    </div>
                    <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-foreground-950 text-primary-500">
                      <i className="ri-phone-fill text-base" />
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-3">
                    <h2 className="font-heading text-2xl md:text-3xl text-foreground-950">
                      {t.name}
                    </h2>
                    <span className="inline-flex items-center gap-1 rounded-full bg-accent-100 px-3 py-1 text-xs font-bold text-accent-700">
                      <i className="ri-briefcase-fill" /> {t.years}년
                    </span>
                  </div>
                  <p className="mt-1 text-sm md:text-base font-medium text-primary-600">
                    {t.tagline}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {t.specialties.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-background-300/70 bg-background-100 px-3 py-1 text-xs font-medium text-foreground-800"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-6 space-y-2 text-sm md:text-base text-foreground-700">
                    {t.career.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <i className={`${tone.icon} ri-check-line mt-0.5 shrink-0`} />
                        {c}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 rounded-xl bg-background-100 p-4 text-sm md:text-base leading-relaxed text-foreground-800">
                    <i className="ri-chat-quote-line mr-1 text-primary-500" />
                    {t.style}
                  </div>

                  <div className="mt-auto pt-5">
                    <span className="inline-flex items-center gap-2 rounded-full bg-foreground-950 px-4 py-2 text-sm font-bold text-primary-500">
                      <i className="ri-trophy-fill" /> {t.stat}
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary-500 section-pad py-16 md:py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground-950">
            지금 바로 맞는 선생님을 찾아보세요
          </h2>
          <p className="mt-3 text-sm md:text-base font-medium">
            무료 모의수업으로 선생님과의 궁합을 직접 확인해보세요
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/success"
              className="inline-flex items-center gap-2 rounded-full bg-foreground-950 px-8 py-4 text-base font-bold text-primary-500 transition hover:bg-foreground-900 whitespace-nowrap"
            >
              <i className="ri-trophy-line" /> 합격 사례 보기
            </a>
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-foreground-950 px-8 py-4 text-base font-bold text-primary-500 transition hover:bg-foreground-900 whitespace-nowrap"
            >
              <i className="ri-arrow-left-line" /> 홈으로 돌아가기
            </a>
            <a
              href="tel:01039510535"
              className="inline-flex items-center gap-2 rounded-full bg-foreground-950 px-8 py-4 text-base font-bold text-primary-500 transition hover:bg-foreground-900 whitespace-nowrap"
            >
              <i className="ri-phone-fill" /> 010-3951-0535
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}