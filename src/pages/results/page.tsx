import { useState, useMemo } from "react";
import { RESULTS, UNIVERSITY_ACCEPTANCES, UNIQUE_RESULT_UNIVERSITIES } from "@/mocks/results";
import JsonLd from "@/components/base/JsonLd";

const siteUrl = import.meta.env.VITE_SITE_URL || "https://example.com";

export default function ResultsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState<string | null>(null);

  const filteredResults = useMemo(() => {
    let results = RESULTS;

    // 대학명 필터
    if (selectedUniversity) {
      results = results.filter((r) => r.university === selectedUniversity);
    }

    // 키워드 검색 (학교명, 과목, 대학명, 상세내용, 후기 등에서 매칭)
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      results = results.filter(
        (r) =>
          r.school.toLowerCase().includes(q) ||
          r.subject.toLowerCase().includes(q) ||
          r.university.toLowerCase().includes(q) ||
          r.detail.toLowerCase().includes(q) ||
          r.testimonial.toLowerCase().includes(q) ||
          r.student.toLowerCase().includes(q) ||
          r.highlight.toLowerCase().includes(q),
      );
    }

    return results;
  }, [searchQuery, selectedUniversity]);

  const handleUniversityClick = (univ: string) => {
    if (selectedUniversity === univ) {
      setSelectedUniversity(null);
    } else {
      setSelectedUniversity(univ);
      setSearchQuery("");
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (selectedUniversity) setSelectedUniversity(null);
  };

  const clearAll = () => {
    setSearchQuery("");
    setSelectedUniversity(null);
  };

  // 검색어 있으면 모든 대학 중 매칭되는 것 하이라이트
  const highlightedUniversities = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.trim().toLowerCase();
    return UNIQUE_RESULT_UNIVERSITIES.filter((u) =>
      u.toLowerCase().includes(q),
    );
  }, [searchQuery]);

  return (
    <main className="bg-background-50 text-foreground-950">
      <title>합격 사례 &amp; 성적 향상 | IB·AP·SAT 국제학교전문과외</title>
      <meta name="description" content="누적 수업 350명+, Top 20 대학 합격 120건. IB·AP·SAT 국제학교 학생들의 실제 성적 향상 사례와 합격 후기를 확인하세요." />
      <meta name="keywords" content="국제학교 합격, IB 성적 향상, IB 7점 과외, AP 과외 결과, 국제학교 과외 후기, Top 20 대학 합격, 아이비리그 합격, 미국 대학 합격, 영국 대학 합격, 국제학교 1:1 과외, 국제학교 과외 비용, NLCS 합격, 채드윅 합격, KIS 합격, 화상 과외 추천, 온라인 과외 추천, 국제학교 내신 향상, GPA 향상 사례, 국제학교 과외 성공 사례, SAT 점수 향상" />
      <link rel="canonical" href={`${siteUrl}/success`} />
      <meta property="og:title" content="합격 사례 & 성적 향상 | IB·AP·SAT 국제학교전문과외" />
      <meta property="og:description" content="누적 수업 350명+, Top 20 대학 합격 120건. IB·AP·SAT 국제학교 학생들의 실제 성적 향상 사례와 합격 후기를 확인하세요." />
      <meta property="og:url" content={`${siteUrl}/success`} />
      <meta property="og:image" content="https://kukje-gwaoe.co.kr/og-image.jpg" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="국제학교전문과외" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="합격 사례 & 성적 향상 | IB·AP·SAT 국제학교전문과외" />
      <meta name="twitter:description" content="누적 수업 350명+, Top 20 대학 합격 120건. IB·AP·SAT 국제학교 학생들의 실제 성적 향상 사례와 합격 후기를 확인하세요." />
      <meta name="twitter:image" content="https://kukje-gwaoe.co.kr/og-image.jpg" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "서울 국제학교전문과외 합격생 및 성적 향상 사례",
          description:
            "서울 국제학교전문과외와 함께한 학생들의 실제 성적 변화와 입시 결과. 누적 수업 학생 350명, Top 20 대학 합격 120건 이상. IB·AP·IGCSE·SAT 맞춤 화상 과외.",
          url: `${siteUrl}/success`,
          hasPart: RESULTS.map((r) => ({
            "@type": "Review",
            name: `${r.student} - ${r.subject} 성적 향상`,
            reviewBody: r.testimonial,
            author: { "@type": "Person", name: r.testimonialBy },
            itemReviewed: {
              "@type": "Service",
              name: "국제학교 전문과외",
              description: r.subject,
            },
            reviewRating: {
              "@type": "Rating",
              bestRating: "5",
              ratingValue: "5",
            },
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", "position": 1, "name": "국제학교 전문과외", "item": siteUrl },
            { "@type": "ListItem", "position": 2, "name": "합격생 & 성적 향상 사례", "item": `${siteUrl}/success` },
          ],
        }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground-950 text-background-50 section-pad pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-polka opacity-80" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-4 py-1.5 text-xs md:text-sm font-bold text-foreground-950">
            <i className="ri-graduation-cap-fill" /> 실제 성적 향상 사례
          </span>
          <h1 className="mt-5 font-heading text-4xl md:text-6xl text-primary-500">
            <a href="#" className="cursor-pointer">
              합격생 & 성적 향상
            </a>
          </h1>
          <p className="mt-4 text-sm md:text-base text-background-200">
            국제학교 전문과외와 함께한 학생들의
            <br />
            실제 성적 변화와 입시 결과를 공개합니다
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-accent-900 text-background-50 section-pad py-10 md:py-12">
        <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {[
            { num: "350+", label: "누적 수업 학생" },
            { num: "85%", label: "목표 성적 달성" },
            { num: "120+", label: "Top 20 합격" },
            { num: "1.5", label: "평균 성적 향상" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-heading text-3xl md:text-4xl text-primary-500">
                {s.num}
              </div>
              <div className="mt-1 text-xs md:text-sm font-medium text-background-300">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case studies */}
      <section className="section-pad py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h4 className="font-heading text-3xl md:text-4xl text-foreground-950 text-center">
            <a href="#" className="cursor-pointer">
              학생 성적 사례
            </a>
          </h4>
          <p className="mt-3 text-center text-sm md:text-base text-foreground-700">
            비슷한 상황의 학생들은 어떻게 성적을 올렸을까요?
          </p>

          {/* Search bar */}
          <div className="mt-8 mx-auto max-w-xl relative">
            <div className="relative">
              <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-lg text-foreground-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="대학명, 학교명, 과목 등 키워드로 검색"
                className="w-full rounded-full border border-background-300/70 bg-background-50 py-3 pl-11 pr-10 text-sm text-foreground-950 placeholder:text-foreground-400 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex h-6 w-6 items-center justify-center rounded-full bg-background-200 text-foreground-500 hover:bg-background-300 transition cursor-pointer"
                  aria-label="검색어 지우기"
                >
                  <i className="ri-close-line text-sm" />
                </button>
              )}
            </div>

            {/* 검색어 매칭 대학 빠른 선택 */}
            {searchQuery && highlightedUniversities.length > 0 && (
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="text-xs text-foreground-500 font-medium whitespace-nowrap">
                  관련 대학:
                </span>
                {highlightedUniversities.map((u) => (
                  <button
                    key={u}
                    type="button"
                    onClick={() => handleUniversityClick(u)}
                    className="inline-flex items-center gap-1 rounded-full border border-primary-300 bg-primary-100 px-2.5 py-1 text-xs font-bold text-primary-700 hover:bg-primary-200 transition cursor-pointer whitespace-nowrap"
                  >
                    {u}
                    <i className="ri-arrow-right-line" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Active filter badge */}
          {selectedUniversity && (
            <div className="mt-6 flex items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-primary-500 px-4 py-2 text-sm font-bold text-foreground-950">
                <i className="ri-map-pin-2-fill" /> {selectedUniversity}
              </span>
              <button
                type="button"
                onClick={clearAll}
                className="inline-flex items-center gap-1 rounded-full bg-background-200 px-3 py-2 text-xs font-bold text-foreground-600 hover:bg-background-300 transition cursor-pointer whitespace-nowrap"
              >
                <i className="ri-close-line" /> 전체 보기
              </button>
            </div>
          )}

          {/* Results count */}
          {(searchQuery || selectedUniversity) && (
            <p className="mt-4 text-center text-sm text-foreground-500">
              검색 결과:{" "}
              <strong className="text-foreground-950">
                {filteredResults.length}
              </strong>
              건
            </p>
          )}

          {/* Results grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {filteredResults.map((r) => (
              <article
                key={r.id}
                className="rounded-3xl border border-background-300/70 bg-background-50 p-6 md:p-8 transition hover:-translate-y-1"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary-500 px-3 py-1 text-xs font-bold text-foreground-950">
                    <i className="ri-graduation-cap-line" /> {r.school}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-accent-100 px-3 py-1 text-xs font-bold text-accent-700">
                    <i className="ri-user-line" /> {r.grade}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-secondary-100 px-3 py-1 text-xs font-bold text-secondary-700">
                    <i className="ri-book-open-line" /> {r.subject}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-accent-500 px-3 py-1 text-xs font-bold text-background-50">
                    <i className="ri-map-pin-2-fill" /> {r.university}
                  </span>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <div className="flex-1 rounded-xl bg-background-100 p-4 text-center">
                    <div className="text-xs font-bold text-foreground-600">
                      Before
                    </div>
                    <div className="mt-1 font-heading text-xl text-foreground-700">
                      {r.before}
                    </div>
                  </div>
                  <i className="ri-arrow-right-line text-2xl text-primary-500" />
                  <div className="flex-1 rounded-xl bg-primary-100 p-4 text-center">
                    <div className="text-xs font-bold text-foreground-600">
                      After
                    </div>
                    <div className="mt-1 font-heading text-xl text-primary-700">
                      {r.after}
                    </div>
                  </div>
                  <div className="shrink-0 text-center">
                    <div className="text-xs font-bold text-foreground-600">
                      기간
                    </div>
                    <div className="mt-1 font-heading text-lg text-foreground-950">
                      {r.period}
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-foreground-800">
                  {r.detail}
                </p>

                <div className="mt-5 rounded-xl border-l-4 border-primary-500 bg-background-100 p-4">
                  <p className="text-sm italic text-foreground-700">
                    &ldquo;{r.testimonial}&rdquo;
                  </p>
                  <div className="mt-2 text-xs font-bold text-foreground-500">
                    — {r.testimonialBy}
                  </div>
                </div>

                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-foreground-950 px-4 py-2 text-sm font-bold text-primary-500">
                  <i className="ri-trophy-fill" /> {r.highlight}
                </div>
              </article>
            ))}
          </div>

          {filteredResults.length === 0 && (
            <div className="mt-12 text-center py-16">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-background-100">
                <i className="ri-search-line text-3xl text-foreground-400" />
              </div>
              <p className="mt-5 text-lg font-medium text-foreground-700">
                검색 결과가 없습니다
              </p>
              <p className="mt-2 text-sm text-foreground-500">
                다른 키워드로 다시 검색해보세요
              </p>
              <button
                type="button"
                onClick={clearAll}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-foreground-950 px-6 py-3 text-sm font-bold text-primary-500 hover:bg-foreground-900 transition cursor-pointer whitespace-nowrap"
              >
                <i className="ri-refresh-line" /> 전체 보기
              </button>
            </div>
          )}
        </div>
      </section>

      {/* University acceptances */}
      <section className="bg-background-100 section-pad py-16 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h4 className="font-heading text-3xl md:text-4xl text-foreground-950">
            <a href="#" className="cursor-pointer">
              학생들이 합격한 대학
            </a>
          </h4>
          <p className="mt-3 text-sm md:text-base text-foreground-700">
            지난 5년간 합격 지도한 주요 대학 리스트입니다
            <br />
            <span className="text-xs text-foreground-500 mt-1 inline-block">
              대학명을 클릭하면 해당 합격 사례만 모아볼 수 있어요
            </span>
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {UNIVERSITY_ACCEPTANCES.map((u) => {
              const isActive = selectedUniversity === u;
              const hasResults = UNIQUE_RESULT_UNIVERSITIES.includes(u);
              return (
                <button
                  key={u}
                  type="button"
                  onClick={() => handleUniversityClick(u)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "border-primary-500 bg-primary-500 text-foreground-950"
                      : hasResults
                        ? "border-background-300 bg-background-50 text-foreground-800 hover:border-primary-400 hover:bg-primary-50"
                        : "border-background-200 bg-background-100 text-foreground-400"
                  }`}
                >
                  <i
                    className={`${
                      isActive
                        ? "ri-map-pin-2-fill text-foreground-950"
                        : hasResults
                          ? "ri-map-pin-2-line text-primary-500"
                          : "ri-map-pin-2-line text-foreground-400"
                    }`}
                  />{" "}
                  {u}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-500 section-pad py-16 md:py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground-950">
            당신도 성적 향상의 주인공이 될 수 있습니다
          </h2>
          <p className="mt-3 text-sm md:text-base font-medium">
            무료 모의수업으로 지금 시작해보세요
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
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
    </main>
  );
}