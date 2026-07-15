import { DOMESTIC_SCHOOLS, OVERSEAS_SCHOOLS } from "./AboutSection";

function shortName(name: string) {
  return name.replace(/\s*\([^)]*\)\s*/g, "").trim();
}

const SCHOOL_TICKER = Array.from(
  new Set([
    ...DOMESTIC_SCHOOLS.flatMap((r) => r.schools.map(shortName)),
    ...OVERSEAS_SCHOOLS.flatMap((r) => r.schools.map(shortName)),
  ])
);

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-foreground-950 text-background-50"
    >
      <div className="absolute inset-0 bg-polka opacity-90" />
      <div className="relative section-pad mx-auto max-w-5xl py-20 md:py-28 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-4 py-1.5 text-sm md:text-base font-medium text-foreground-950 whitespace-nowrap">
          <i className="ri-graduation-cap-fill" />
          국내 · 해외 국제학교 전문
        </span>

        <h1 className="mt-6 font-heading text-primary-500 leading-[0.95] tracking-tight">
          <a href="#hero" className="block text-6xl md:text-8xl">
            국제학교
            <br />
            전문과외
          </a>
        </h1>

        <div className="mt-8 inline-block rounded-2xl border-2 border-primary-500 bg-foreground-950/40 px-6 py-4 text-base md:text-lg text-background-50">
          <p className="font-semibold">
            "학생에게 딱 맞는 공부 방식,
            <br />
            실시간 1:1 화상 수업으로"
          </p>
        </div>

        <div className="relative mx-auto mt-10 h-40 w-40 md:h-48 md:w-48">
          <div className="absolute inset-0 rounded-full bg-primary-500/20 blur-2xl" />
          <div className="relative flex h-full w-full items-center justify-center rounded-[2rem] bg-primary-500 text-foreground-950 animate-wiggle">
            <i className="ri-user-smile-fill text-7xl md:text-8xl" />
          </div>
        </div>

        <div className="mt-10">
          <a
            href="#apply"
            className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-8 py-4 text-base md:text-lg font-medium text-foreground-950 transition hover:bg-primary-400 whitespace-nowrap cursor-pointer"
          >
            무료 모의수업 신청
            <i className="ri-arrow-right-line" />
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden border-t border-background-50/10 bg-foreground-950/60 py-4">
        <p className="text-center text-xs md:text-sm font-medium text-background-300 mb-3">
          이런 학교 학생들이 함께합니다
        </p>
        <div
          className="flex w-max animate-marquee gap-x-8 whitespace-nowrap will-change-transform"
          aria-hidden="false"
        >
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-x-8 pr-8" aria-hidden={dup === 1}>
              {SCHOOL_TICKER.map((school, i) => (
                <span
                  key={`${dup}-${school}-${i}`}
                  className="flex items-center gap-x-8 text-sm md:text-base font-medium text-background-100/80"
                >
                  {school}
                  <span className="text-primary-500/50">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}