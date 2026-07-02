import { TEACHERS } from "../../../mocks/teachers";

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

        {/* Horizontal scroll */}
        <div className="mt-10 flex gap-5 overflow-x-auto scroll-smooth pb-6 px-6 md:px-10 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {TEACHERS.map((t) => (
            <a
              key={t.id}
              href="tel:01039510535"
              aria-label={`${t.name} 상담 전화 연결 010-3951-0535`}
              className="flex-none w-64 md:w-72 snap-start rounded-2xl bg-accent-800 overflow-hidden cursor-pointer transition hover:-translate-y-1"
            >
              <div className="relative w-full h-56 md:h-64 overflow-hidden">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover object-top"
                />
                <span className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary-500 text-foreground-950">
                  <i className="ri-phone-fill text-base" />
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold bg-primary-500 text-foreground-950 rounded-full px-2 py-0.5">
                    {t.subject}
                  </span>
                  <span className="text-xs text-background-300">{t.years}년 경력</span>
                </div>
                <div className="font-heading text-base text-background-50 mb-3">{t.name}</div>
                <ul className="space-y-1">
                  {t.career.slice(0, 3).map((c, i) => (
                    <li key={i} className="flex items-start gap-1.5 text-xs text-background-300">
                      <i className="ri-check-line text-primary-500 mt-0.5 flex-none" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-6 text-center">
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
