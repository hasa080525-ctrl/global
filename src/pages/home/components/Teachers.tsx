import { TEACHERS } from "@/mocks/teachers";

const TONE_MAP: Record<string, { bg: string; icon: string }> = {
  primary: { bg: "bg-primary-500", icon: "text-primary-500" },
  accent: { bg: "bg-accent-500", icon: "text-accent-500" },
  secondary: { bg: "bg-secondary-500", icon: "text-secondary-500" },
};

const toneCycle = ["primary", "accent", "secondary"] as const;

export default function Teachers() {
  return (
    <section
      id="teachers"
      className="relative bg-accent-950 text-background-50 py-20 md:py-24"
    >
      <div className="absolute inset-0 bg-polka opacity-40" />
      <div className="relative">
        <div className="mx-auto max-w-5xl text-center section-pad">
          <h4 className="font-heading text-3xl md:text-4xl text-primary-500">
            <a href="#teachers" className="cursor-pointer">
              이래서 믿고 맡깁니다
            </a>
          </h4>
          <p className="mt-3 text-sm md:text-base text-background-200">
            과목별 전담 선생님이 따로 있어요
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-5xl section-pad space-y-10 md:space-y-14">
          {TEACHERS.map((t, idx) => {
            const tone = TONE_MAP[toneCycle[idx % toneCycle.length]];
            const isEven = idx % 2 === 0;
            return (
              <a
                key={t.id}
                href="tel:01039510535"
                aria-label={`${t.name} 상담 전화 연결 010-3951-0535`}
                className={`flex flex-col gap-6 md:gap-10 rounded-3xl bg-accent-900 p-6 md:p-8 transition hover:-translate-y-1 cursor-pointer ${
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
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div
                      className={`absolute left-4 top-4 rounded-full px-4 py-1.5 text-xs font-bold text-foreground-950 ${tone.bg}`}
                    >
                      {t.subject} 전담
                    </div>
                    <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-primary-500 text-foreground-950">
                      <i className="ri-phone-fill text-base" />
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-3">
                    <h3 className="font-heading text-2xl md:text-3xl text-background-50">
                      {t.name}
                    </h3>
                    <span className="inline-flex items-center gap-1 rounded-full bg-accent-700 px-3 py-1 text-xs font-bold text-background-100">
                      <i className="ri-briefcase-fill" /> {t.years}년
                    </span>
                  </div>
                  <p className="mt-1 text-sm md:text-base font-medium text-primary-400">
                    {t.tagline}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {t.specialties.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-background-50/20 bg-accent-800 px-3 py-1 text-xs font-medium text-background-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-6 space-y-2 text-sm md:text-base text-background-200">
                    {t.career.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <i className={`${tone.icon} ri-check-line mt-0.5 shrink-0`} />
                        {c}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 rounded-xl bg-accent-800 p-4 text-sm md:text-base leading-relaxed text-background-100">
                    <i className="ri-chat-quote-line mr-1 text-primary-500" />
                    {t.style}
                  </div>

                  <div className="mt-auto pt-5">
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-4 py-2 text-sm font-bold text-foreground-950">
                      <i className="ri-trophy-fill" /> {t.stat}
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
