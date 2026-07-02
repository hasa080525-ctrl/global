const BARS = [
  { label: "시작", grade: "C+", height: "h-24" },
  { label: "1개월", grade: "B", height: "h-40" },
  { label: "2개월", grade: "B+", height: "h-56" },
  { label: "3개월", grade: "A-", height: "h-72" },
];

export default function Chart() {
  return (
    <section id="chart" className="bg-background-50 section-pad py-20 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h4 className="font-heading text-3xl md:text-4xl text-foreground-950">
          <a href="#chart" className="cursor-pointer">
            꾸준히 올라가는 성적 변화
          </a>
        </h4>
        <p className="mt-3 text-sm md:text-base text-foreground-700">
          혼자 공부할 땐 막막했던 국제학교 내신, 학습 방법을 바꾸자 결과가
          달라졌어요
        </p>

        <div className="mt-14 rounded-2xl border border-background-300/70 bg-background-100/60 p-6 md:p-10">
          <div className="flex items-end justify-center gap-5 md:gap-10 h-96">
            {BARS.map((b, idx) => (
              <div key={b.label} className="flex flex-col items-center">
                <span className="mb-2 font-heading text-lg md:text-2xl text-foreground-950">
                  {b.grade}
                </span>
                <div
                  className={`w-14 md:w-20 rounded-t-xl ${b.height} ${
                    idx === BARS.length - 1
                      ? "bg-secondary-500"
                      : "bg-accent-500"
                  } relative overflow-hidden`}
                >
                  <div className="absolute inset-x-0 top-0 h-2 bg-background-50/20" />
                </div>
                <span className="mt-3 text-xs md:text-sm font-medium text-foreground-700">
                  {b.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-5 text-xs md:text-sm text-foreground-600">
          ※ 예시 그래프이며 학생별 학습 속도에 따라 결과는 다를 수 있습니다
        </p>
        <div className="mt-6">
          <a
            href="/success"
            className="inline-flex items-center gap-2 rounded-full border border-foreground-300 px-5 py-2.5 text-sm font-bold text-foreground-700 transition hover:border-primary-500 hover:text-primary-600 whitespace-nowrap cursor-pointer"
          >
            실제 성적 향상 사례 보기 <i className="ri-arrow-right-line" />
          </a>
        </div>
      </div>
    </section>
  );
}