const STEPS = [
  {
    title: "전화 상담",
    desc: "학생의 현재 상황과 목표를 자세히 들어요",
    icon: "ri-phone-line",
  },
  {
    title: "무료 모의수업",
    desc: "실제 수업 방식을 미리 경험해볼 수 있어요",
    icon: "ri-presentation-line",
  },
  {
    title: "맞춤 커리큘럼 설계",
    desc: "학교 진도와 평가 기준에 맞춰 계획을 세워요",
    icon: "ri-route-line",
  },
  {
    title: "1:1 맞춤 수업 진행",
    desc: "학생 성향에 맞는 선생님이 직접 지도해요",
    icon: "ri-user-voice-line",
  },
  {
    title: "진도별 학습 관리",
    desc: "매 수업 후 진도와 과제를 꼼꼼히 체크해요",
    icon: "ri-check-double-line",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-background-50 section-pad py-20 md:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <h4 className="text-center font-heading text-3xl md:text-4xl text-foreground-950">
          <a href="#process" className="cursor-pointer">
            국내·해외 어디서나, 화상 과외는 이렇게 진행됩니다
          </a>
        </h4>

        <div className="mt-12 relative">
          <div className="absolute left-7 top-0 bottom-0 w-px bg-background-300/80 md:left-10" />
          <div className="space-y-5">
            {STEPS.map((s, idx) => (
              <div
                key={s.title}
                className="relative flex gap-4 md:gap-6 rounded-2xl border border-background-300/70 bg-background-50 p-5 md:p-6 transition hover:-translate-y-0.5 hover:border-primary-400"
              >
                <div className="relative z-10 flex h-14 w-14 md:h-20 md:w-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-foreground-950 text-primary-500">
                  <span className="font-heading text-xl md:text-2xl">
                    {idx + 1}
                  </span>
                  <i className={`${s.icon} text-base md:text-xl`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg md:text-xl text-foreground-950">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm md:text-base text-foreground-700">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}