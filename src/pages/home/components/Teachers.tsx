const TEACHERS = [
  { role: "수학 전담", icon: "ri-function-line", tone: "primary" },
  { role: "영어 전담", icon: "ri-translate-2", tone: "accent" },
  { role: "과학 전담", icon: "ri-flask-line", tone: "secondary" },
  { role: "내신관리 전담", icon: "ri-book-open-line", tone: "primary" },
  { role: "에세이 전담", icon: "ri-quill-pen-line", tone: "secondary" },
  { role: "입시 전담", icon: "ri-trophy-line", tone: "accent" },
];

const toneMap: Record<string, { bg: string; iconBg: string; text: string }> = {
  primary: {
    bg: "bg-primary-500",
    iconBg: "bg-foreground-950 text-primary-500",
    text: "text-foreground-950",
  },
  accent: {
    bg: "bg-accent-500",
    iconBg: "bg-background-50 text-accent-600",
    text: "text-background-50",
  },
  secondary: {
    bg: "bg-secondary-500",
    iconBg: "bg-background-50 text-secondary-600",
    text: "text-background-50",
  },
};

export default function Teachers() {
  return (
    <section
      id="teachers"
      className="relative bg-accent-950 text-background-50 section-pad py-20 md:py-24"
    >
      <div className="absolute inset-0 bg-polka opacity-40" />
      <div className="relative mx-auto max-w-5xl text-center">
        <h4 className="font-heading text-3xl md:text-4xl text-primary-500">
          <a href="#teachers" className="cursor-pointer">
            이래서 믿고 맡깁니다
          </a>
        </h4>
        <p className="mt-3 text-sm md:text-base text-background-200">
          과목별 전담 선생님이 따로 있어요
        </p>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
          {TEACHERS.map((t) => {
            const tone = toneMap[t.tone];
            return (
              <div
                key={t.role}
                className={`group flex flex-col items-center gap-3 rounded-2xl ${tone.bg} ${tone.text} p-5 md:p-6 transition hover:-translate-y-1`}
              >
                <div
                  className={`flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full ${tone.iconBg}`}
                >
                  <i className={`${t.icon} text-2xl md:text-3xl`} />
                </div>
                <div className="font-heading text-base md:text-lg">
                  {t.role}
                </div>
              </div>
            );
          })}
        </div>
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
