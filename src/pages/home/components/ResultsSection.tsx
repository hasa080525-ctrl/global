import { useState, useMemo } from "react";
import { RESULTS, UNIVERSITY_ACCEPTANCES, UNIQUE_RESULT_UNIVERSITIES } from "@/mocks/results";

export default function ResultsSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState<string | null>(null);

  const filteredResults = useMemo(() => {
    let results = RESULTS;

    if (selectedUniversity) {
      results = results.filter((r) => r.university === selectedUniversity);
    }

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

  const highlightedUniversities = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.trim().toLowerCase();
    return UNIQUE_RESULT_UNIVERSITIES.filter((u) => u.toLowerCase().includes(q));
  }, [searchQuery]);

  return (
    <section id="success" className="bg-background-50 section-pad py-20 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h4 className="font-heading text-3xl md:text-4xl text-foreground-950">
          <a href="#success" className="cursor-pointer">
            합격생 &amp; 성적 향상 사례
          </a>
        </h4>
        <p className="mt-3 text-sm md:text-base text-foreground-700">
          국제학교 전문과외와 함께한 학생들의 실제 성적 변화와 입시 결과를 공개합니다
        </p>
      </div>

      {/* Stats bar */}
      <div className="mt-10 mx-auto max-w-5xl rounded-2xl bg-accent-900 text-background-50 py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {[
            { num: "350+", label: "누적 수업 학생" },
            { num: "85%", label: "목표 성적 달성" },
            { num: "120+", label: "Top 20 합격" },
            { num: "1.5", label: "평균 성적 향상" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-heading text-3xl md:text-4xl text-primary-500">{s.num}</div>
              <div className="mt-1 text-xs md:text-sm font-medium text-background-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Search */}
      <div className="mt-14 mx-auto max-w-xl relative">
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

        {searchQuery && highlightedUniversities.length > 0 && (
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs text-foreground-500 font-medium whitespace-nowrap">관련 대학:</span>
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

      {(searchQuery || selectedUniversity) && (
        <p className="mt-4 text-center text-sm text-foreground-500">
          검색 결과: <strong className="text-foreground-950">{filteredResults.length}</strong>건
        </p>
      )}

      {/* Results grid */}
      <div className="mt-8 mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
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
                <div className="text-xs font-bold text-foreground-600">Before</div>
                <div className="mt-1 font-heading text-xl text-foreground-700">{r.before}</div>
              </div>
              <i className="ri-arrow-right-line text-2xl text-primary-500" />
              <div className="flex-1 rounded-xl bg-primary-100 p-4 text-center">
                <div className="text-xs font-bold text-foreground-600">After</div>
                <div className="mt-1 font-heading text-xl text-primary-700">{r.after}</div>
              </div>
              <div className="shrink-0 text-center">
                <div className="text-xs font-bold text-foreground-600">기간</div>
                <div className="mt-1 font-heading text-lg text-foreground-950">{r.period}</div>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-foreground-800">{r.detail}</p>

            <div className="mt-5 rounded-xl border-l-4 border-primary-500 bg-background-100 p-4">
              <p className="text-sm italic text-foreground-700">&ldquo;{r.testimonial}&rdquo;</p>
              <div className="mt-2 text-xs font-bold text-foreground-500">— {r.testimonialBy}</div>
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
          <p className="mt-5 text-lg font-medium text-foreground-700">검색 결과가 없습니다</p>
          <p className="mt-2 text-sm text-foreground-500">다른 키워드로 다시 검색해보세요</p>
          <button
            type="button"
            onClick={clearAll}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-foreground-950 px-6 py-3 text-sm font-bold text-primary-500 hover:bg-foreground-900 transition cursor-pointer whitespace-nowrap"
          >
            <i className="ri-refresh-line" /> 전체 보기
          </button>
        </div>
      )}

      {/* University acceptances */}
      <div className="mt-16 mx-auto max-w-5xl rounded-2xl bg-background-100 p-8 md:p-10 text-center">
        <h5 className="font-heading text-2xl md:text-3xl text-foreground-950">학생들이 합격한 대학</h5>
        <p className="mt-3 text-sm md:text-base text-foreground-700">
          지난 5년간 합격 지도한 주요 대학 리스트입니다
          <br />
          <span className="text-xs text-foreground-500 mt-1 inline-block">
            대학명을 클릭하면 해당 합격 사례만 모아볼 수 있어요
          </span>
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
                  className={
                    isActive
                      ? "ri-map-pin-2-fill text-foreground-950"
                      : hasResults
                        ? "ri-map-pin-2-line text-primary-500"
                        : "ri-map-pin-2-line text-foreground-400"
                  }
                />{" "}
                {u}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
