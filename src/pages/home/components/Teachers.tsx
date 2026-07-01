import { TEACHERS } from "@/mocks/teachers";

const toneCycle = ["primary", "accent", "secondary"] as const;

const toneMap = {
  primary:   { badge: "bg-primary-500 text-foreground-950",  border: "border-primary-500",  icon: "text-primary-500" },
  accent:    { badge: "bg-accent-400 text-background-50",    border: "border-accent-400",    icon: "text-accent-400" },
  secondary: { badge: "bg-secondary-400 text-background-50", border: "border-secondary-400", icon: "text-secondary-400" },
};

export default function Teachers() {
  return (
    <section
      id="teachers"
      className="relative bg-accent-950 text-background-50 section-pad py-20 md:py-24"
    >
      <div className="absolute inset-0 bg-polka opacity-40" />
      <div className="relative mx-auto max-w-6xl text-center">
        <h4 className="font-heading text-3xl md:text-4xl text-primary-500">
          <a href="#teachers" className="cursor-pointer">
            이래서 믿고 맡깁니다
          </a>
        </h4>
        <p className="mt-3 text-sm md:text-base text-background-200">
          과목별 전담 선생님이 따로 있어요
        </p>

        {/* 가로 스크롤 */}
        <div className="mt-12 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 md:-mx-6 md:px-6">
          {TEACHERS.map((t, idx) => {
            const tone = toneMap[toneCycle[idx % toneCycle.length]];
            return (
              <a
                key={t.id}
                href="/faculty"
                className={`group shrink-0 w-52 snap-start rounded-2xl border-2 ${tone.border} bg-accent-900/70 overflow-hidden transition hover:-translate-y-1`}
              >
                {/* 프로필 사진 */}
                <div className="aspect-[3/4] w-full overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    title={t.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* 이름 · 과목 */}
                <div className="px-4 pt-4 pb-1 text-center">
                  <div className="font-heading text-sm text-background-50 leading-snug">
                    {t.name}
                  </div>
                  <span className={`mt-1.5 inline-block rounded-full px-2.5 py-0.5 text-xs font-bold ${tone.badge}`}>
                    {t.subject} 전담
                  </span>
                  <p className="mt-2 text-xs text-background-300 italic leading-snug line-clamp-2">
                    {t.tagline}
                  </p>
                </div>

                {/* 이력 */}
                <ul className="px-4 pb-4 mt-3 space-y-1.5 text-left">
                  {t.career.slice(0, 3).map((c, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs text-background-200 leading-snug">
                      <i className={`${tone.icon} ri-check-line shrink-0 mt-0.5`} />
                      {c}
                    </li>
                  ))}
                </ul>
              </a>
            );
          })}
        </div>

        {/* 스크롤 힌트 */}
        <p className="mt-2 text-xs text-background-400 md:hidden">
          <i className="ri-arrow-right-line" /> 옆으로 밀어서 더 보기
        </p>

        <div className="mt-8">
          <a
            href="/faculty"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary-500 px-6 py-3 text-sm font-bold text-primary-500 transition hover:bg-primary-500 hover:text-foreground-950 whitespace-nowrap cursor-pointer"
          >
            전체 강사진 보기 <i className="ri-arrow-right-line" />
          </a>
        </div>
      </div>
    </section>
  );
}
