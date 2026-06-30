const TRAITS = [
  "국내·해외 국제학교 학생을 대상으로 한 수업 노하우",
  "국내교과 과목 수업방식과 다른 국제학교 전문 교습법",
  "영어로 수학 수업도 진행 가능 (타과목도 OK)",
  "실력 검증을 마친 전문 강사진만 배정",
  "평균 경력 8~15년차 선생님",
];

export default function Traits() {
  return (
    <section
      id="traits"
      className="bg-background-100 section-pad py-20 md:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-block rounded-full bg-foreground-950 px-6 py-2.5 text-primary-500 font-heading text-xl md:text-2xl">
          이런 선생님이 가르칩니다
        </div>

        <div className="mt-10 space-y-3.5">
          {TRAITS.map((text, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 rounded-xl border border-background-300/70 bg-background-50 px-5 py-4 text-left transition hover:-translate-y-0.5 hover:border-primary-400"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary-500 font-heading text-background-50">
                {idx + 1}
              </span>
              <p className="text-sm md:text-base font-medium text-foreground-900">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}