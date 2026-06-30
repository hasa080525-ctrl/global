const RANK = [
  "국제학교 전문과외",
  "학원 단체수업",
  "인터넷 강의",
  "혼자서 자습",
  "친구와 스터디",
];

export default function Ranking() {
  return (
    <section
      id="ranking"
      className="bg-accent-700 section-pad py-20 md:py-24 text-background-50"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h4 className="font-heading text-3xl md:text-4xl text-primary-500">
          <a href="#ranking" className="cursor-pointer">
            국제학교 내신 전문과외
          </a>
        </h4>
        <p className="mt-3 text-sm md:text-base text-background-200">
          성적 향상 요인 중 가장 중요한 순위는?
        </p>

        <div className="mt-10 space-y-3">
          {RANK.map((name, idx) => {
            const isTop = idx === 0;
            return (
              <div
                key={name}
                className={`flex items-center gap-4 rounded-xl px-5 py-4 text-left transition ${
                  isTop
                    ? "bg-primary-500 text-foreground-950 -translate-y-0"
                    : "bg-accent-800/80 text-background-100 hover:bg-accent-600"
                }`}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-heading text-lg ${
                    isTop
                      ? "bg-foreground-950 text-primary-500"
                      : "bg-background-50/10 text-background-50"
                  }`}
                >
                  {idx + 1}
                </span>
                <span className="font-medium text-sm md:text-base">{name}</span>
                {isTop && (
                  <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-foreground-950 px-3 py-1 text-xs font-medium text-primary-500 whitespace-nowrap">
                    <i className="ri-fire-fill" /> 1위
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}