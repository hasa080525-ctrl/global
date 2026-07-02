import { TEACHERS } from "@/mocks/teachers";
import JsonLd from "@/components/base/JsonLd";

const siteUrl = import.meta.env.VITE_SITE_URL || "https://example.com";

const TONE_MAP: Record<string, { bg: string; icon: string }> = {
  primary: { bg: "bg-primary-500", icon: "text-primary-500" },
  accent: { bg: "bg-accent-500", icon: "text-accent-500" },
  secondary: { bg: "bg-secondary-500", icon: "text-secondary-500" },
};

const toneCycle = ["primary", "accent", "secondary"] as const;

export default function AboutPage() {
  return (
    <main className="bg-background-50 text-foreground-950">
      <title>소개 | 국제학교전문과외 2015년 설립 검증된 강사진</title>
      <meta name="description" content="2015년 설립, 누적 학생 350명+ 국제학교 전문과외. IB·AP·IGCSE·SAT 커리큘럼에 특화된 8~15년 경력 강사진을 소개합니다." />
      <meta name="keywords" content="국제학교 전문과외, 국제학교 과외 추천, IB 과외, AP 과외, IGCSE 과외, A-Level 과외, IB DP 과외, IB MYP 과외, 화상 과외, 온라인 과외, 서울 국제학교 과외, 국제학교 1:1 과외, 강남 국제학교 과외, 제주 국제학교 과외, 송도 국제학교 과외, 국제학교 과외 비용, 국제학교 내신 관리, 외국인학교 과외, 국제학교 GPA 향상, 국제학교 과외 후기, 국제학교전문과외 소개, 국제학교 과외 업체 비교" />
      <link rel="canonical" href={`${siteUrl}/about`} />
      <meta property="og:title" content="소개 | 국제학교전문과외 2015년 설립 검증된 강사진" />
      <meta property="og:description" content="2015년 설립, 누적 학생 350명+ 국제학교 전문과외. IB·AP·IGCSE·SAT 커리큘럼에 특화된 8~15년 경력 강사진을 소개합니다." />
      <meta property="og:url" content={`${siteUrl}/about`} />
      <meta property="og:image" content="https://kukje-gwaoe.co.kr/og-image.png" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="국제학교전문과외" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="소개 | 국제학교전문과외 2015년 설립 검증된 강사진" />
      <meta name="twitter:description" content="2015년 설립, 누적 학생 350명+ 국제학교 전문과외. IB·AP·IGCSE·SAT 커리큘럼에 특화된 8~15년 경력 강사진을 소개합니다." />
      <meta name="twitter:image" content="https://kukje-gwaoe.co.kr/og-image.png" />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "서울 국제학교전문과외 소개",
        "description": "서울 국제학교전문과외 - 2015년부터 국내·해외 국제학교 학생을 위한 1:1 화상 과외 서비스. IB, AP, IGCSE, SAT, GPA 내신까지 국제학교 커리큘럼 완벽 대비.",
        "url": `${siteUrl}/about`,
        "about": {
          "@type": "EducationalOrganization",
          "name": "국제학교 전문과외",
          "foundingDate": "2015",
          "description": "서울 국제학교전문과외 - IB, AP, IGCSE, SAT, GPA 내신 등 국제학교 커리큘럼에 특화된 1:1 맞춤 화상 과외 서비스",
          "telephone": "+82-10-3951-0535",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "서울",
            "addressCountry": "KR"
          }
        }
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "국제학교 전문과외", "item": siteUrl },
          { "@type": "ListItem", "position": 2, "name": "소개", "item": `${siteUrl}/about` }
        ]
      }} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground-950 text-background-50 section-pad pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-polka opacity-80" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-4 py-1.5 text-xs md:text-sm font-bold text-foreground-950">
            <i className="ri-graduation-cap-fill" /> Since 2015
          </span>
          <h1 className="mt-5 font-heading text-4xl md:text-6xl text-primary-500">
            <a href="#" className="cursor-pointer">국제학교 전문<br />1:1 화상 과외</a>
          </h1>
          <p className="mt-4 text-sm md:text-base text-background-200">
            국내·해외 국제학교 학생을 위한 1:1 맞춤 과외 서비스입니다
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-pad py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h4 className="font-heading text-3xl md:text-4xl text-foreground-950">
            <a href="#" className="cursor-pointer">우리의 교육 철학</a>
          </h4>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                icon: "ri-user-heart-line",
                title: "학생 중심",
                desc: "학생의 현재 수준과 성향을 정확히 파악하여, 학생에게 맞는 학습 방식을 제시합니다. 획일적인 교육이 아닌, 개인별 맞춤 접근을 핵심으로 합니다.",
              },
              {
                icon: "ri-award-line",
                title: "전문성",
                desc: "IB, AP, IGCSE 등 국제학교 커리큘럼에 특화된 전문 강사진만 배정합니다. 평균 8~15년 경력의 검증된 강사가 직접 지도합니다.",
              },
              {
                icon: "ri-line-chart-line",
                title: "성과 중심",
                desc: "수업만으로 끝내지 않습니다. 매 수업 후 진도 체크, 학습 관리, 학부모 소통을 통해 체계적으로 성과를 관리합니다.",
              },
            ].map((m) => (
              <div
                key={m.title}
                className="rounded-3xl border border-background-300/70 bg-background-50 p-6 md:p-8 text-center transition hover:-translate-y-1"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500 text-foreground-950">
                  <i className={`${m.icon} text-2xl`} />
                </div>
                <h3 className="mt-4 font-heading text-lg md:text-xl text-foreground-950">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm text-foreground-700 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="bg-background-100 section-pad py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h4 className="text-center font-heading text-3xl md:text-4xl text-foreground-950">
            <a href="#" className="cursor-pointer">우리의 여정</a>
          </h4>
          <div className="mt-12 relative">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-background-300" />
            <div className="space-y-8">
              {[
                {
                  year: "2015",
                  title: "서비스 시작",
                  desc: "국내 국제학교 학생 3명과 함께 1:1 과외 서비스를 시작했습니다. 이후 해외 국제학교 학생까지 수업을 확대했습니다.",
                },
                {
                  year: "2018",
                  title: "강사진 확대",
                  desc: "과목별 전담 강사 체계를 도입하고, 수학·영어·과학 전문 강사를 추가 배정했습니다.",
                },
                {
                  year: "2021",
                  title: "해외 학생 대응",
                  desc: "코로나 이후 온라인 수업 체계를 구축하고, 해외 국제학교 학생까지 수업을 확대했습니다.",
                },
                {
                  year: "2024",
                  title: "350명 돌파",
                  desc: "누적 수업 학생 350명, Top 20 대학 합격 120건을 돌파하며 국제학교 과외 전문 브랜드로 자리매김했습니다.",
                },
              ].map((h) => (
                <div key={h.year} className="relative flex gap-4 md:gap-6">
                  <div className="relative z-10 flex h-12 w-12 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-2xl bg-foreground-950 text-primary-500 font-heading text-sm md:text-base">
                    {h.year}
                  </div>
                  <div className="rounded-2xl border border-background-300/70 bg-background-50 p-5 md:p-6 flex-1">
                    <h3 className="font-heading text-lg md:text-xl text-foreground-950">
                      {h.title}
                    </h3>
                    <p className="mt-1 text-sm md:text-base text-foreground-700">
                      {h.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team preview */}
      <section className="section-pad py-16 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h4 className="font-heading text-3xl md:text-4xl text-foreground-950">
            <a href="#" className="cursor-pointer">전문 강사진</a>
          </h4>
          <p className="mt-3 text-sm md:text-base text-foreground-700">
            평균 경력 8~15년, 검증된 전문 강사진이 함께합니다
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-5">
            {TEACHERS.map((t, idx) => {
              const tone = TONE_MAP[toneCycle[idx % toneCycle.length]];
              return (
                <a
                  key={t.id}
                  href="/faculty"
                  className="group rounded-2xl border border-background-300/70 bg-background-50 p-4 transition hover:-translate-y-1"
                >
                  <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src={t.image}
                      alt={t.name}
                      title={t.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3 font-heading text-sm md:text-base text-foreground-950">
                    {t.name}
                  </div>
                  <div className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-bold text-foreground-950 ${tone.bg}`}>
                    {t.subject}
                  </div>
                </a>
              );
            })}
          </div>

          <a
            href="/faculty"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground-950 px-6 py-3 text-sm font-bold text-primary-500 transition hover:bg-foreground-900 whitespace-nowrap"
          >
            <i className="ri-arrow-right-line" /> 강사진 전체 보기
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-500 section-pad py-16 md:py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground-950">
            지금 바로 시작해보세요
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/trial"
              className="inline-flex items-center gap-2 rounded-full bg-foreground-950 px-8 py-4 text-base font-bold text-primary-500 transition hover:bg-foreground-900 whitespace-nowrap"
            >
              <i className="ri-gift-line" /> 무료 모의수업 신청
            </a>
            <a
              href="/faculty"
              className="inline-flex items-center gap-2 rounded-full bg-foreground-950 px-8 py-4 text-base font-bold text-primary-500 transition hover:bg-foreground-900 whitespace-nowrap"
            >
              <i className="ri-team-line" /> 강사진 보기
            </a>
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-foreground-950 px-8 py-4 text-base font-bold text-primary-500 transition hover:bg-foreground-900 whitespace-nowrap"
            >
              <i className="ri-arrow-left-line" /> 홈으로
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}