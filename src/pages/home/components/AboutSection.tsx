const MISSION = [
  {
    icon: "ri-user-heart-line",
    title: "학생 중심",
    desc: "학생의 현재 수준과 성향을 정확히 파악하여, 학생에게 맞는 학습 방식을 제시합니다. 획일적인 교육이 아닌, 개인별 맞춤 접근을 핵심으로 합니다.",
  },
  {
    icon: "ri-award-line",
    title: "전문성",
    desc: "IB, AP, IGCSE 등 국제학교 커리큘럼에 특화된 전문 강사진만 배정합니다. 평균 8~15년 경력의 검증된 강사가 직접 지도합니다.",
  },
  {
    icon: "ri-line-chart-line",
    title: "성과 중심",
    desc: "수업만으로 끝내지 않습니다. 매 수업 후 진도 체크, 학습 관리, 학부모 소통을 통해 체계적으로 성과를 관리합니다.",
  },
];

const SCHOOLS = [
  "NLCS 제주",
  "Chadwick International (송도)",
  "Korea International School (KIS)",
  "Branksome Hall Asia",
  "Dulwich College Seoul",
  "Seoul Foreign School (SFS)",
  "Yongsan International School (YISS)",
  "St. Johnsbury Academy Jeju (SJA)",
];

const HISTORY = [
  {
    year: "2015",
    title: "서비스 시작",
    desc: "국내 국제학교 학생 3명과 함께 1:1 과외 서비스를 시작했습니다. 이후 해외 국제학교 학생까지 수업을 확대했습니다.",
  },
  {
    year: "2018",
    title: "강사진 확대",
    desc: "과목별 전담 강사 체계를 도입하고, 수학·영어·과학 전문 강사를 추가 배정했습니다.",
  },
  {
    year: "2021",
    title: "해외 학생 대응",
    desc: "코로나 이후 온라인 수업 체계를 구축하고, 해외 국제학교 학생까지 수업을 확대했습니다.",
  },
  {
    year: "2024",
    title: "350명 돌파",
    desc: "누적 수업 학생 350명, Top 20 대학 합격 120건을 돌파하며 국제학교 과외 전문 브랜드로 자리매김했습니다.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-background-50 section-pad py-20 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-4 py-1.5 text-xs md:text-sm font-bold text-foreground-950">
          <i className="ri-graduation-cap-fill" /> Since 2015
        </span>
        <h4 className="mt-5 font-heading text-3xl md:text-4xl text-foreground-950">
          <a href="#about" className="cursor-pointer">
            국제학교 전문 1:1 화상 과외
          </a>
        </h4>
        <p className="mt-3 text-sm md:text-base text-foreground-700">
          국내·해외 국제학교 학생을 위한 1:1 맞춤 과외 서비스입니다
        </p>
      </div>

      {/* Mission */}
      <div className="mx-auto mt-14 max-w-4xl text-center">
        <h5 className="font-heading text-2xl md:text-3xl text-foreground-950">
          우리의 교육 철학
        </h5>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {MISSION.map((m) => (
            <div
              key={m.title}
              className="rounded-3xl border border-background-300/70 bg-background-100 p-6 md:p-8 text-center transition hover:-translate-y-1"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500 text-foreground-950">
                <i className={`${m.icon} text-2xl`} />
              </div>
              <h3 className="mt-4 font-heading text-lg md:text-xl text-foreground-950">
                {m.title}
              </h3>
              <p className="mt-2 text-sm text-foreground-700 leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Schools */}
      <div className="mx-auto mt-16 max-w-4xl text-center">
        <h5 className="font-heading text-2xl md:text-3xl text-foreground-950">
          이런 학교 학생들이 함께합니다
        </h5>
        <p className="mt-3 text-sm md:text-base text-foreground-700">
          국내 국제학교 재학생부터 해외(싱가포르·상하이·홍콩 등) 국제학교 재학생까지,
          국제학교 입학·전학을 준비하는 학생도 함께합니다
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {SCHOOLS.map((school) => (
            <span
              key={school}
              className="rounded-full border border-background-300/70 bg-background-100 px-4 py-2 text-xs md:text-sm font-medium text-foreground-800"
            >
              {school}
            </span>
          ))}
        </div>
      </div>

      {/* History */}
      <div className="mx-auto mt-16 max-w-4xl">
        <h5 className="text-center font-heading text-2xl md:text-3xl text-foreground-950">
          우리의 여정
        </h5>
        <div className="mt-10 relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-background-300" />
          <div className="space-y-6">
            {HISTORY.map((h) => (
              <div key={h.year} className="relative flex gap-4 md:gap-6">
                <div className="relative z-10 flex h-12 w-12 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-2xl bg-foreground-950 text-primary-500 font-heading text-sm md:text-base">
                  {h.year}
                </div>
                <div className="rounded-2xl border border-background-300/70 bg-background-100 p-5 md:p-6 flex-1">
                  <h3 className="font-heading text-lg md:text-xl text-foreground-950">
                    {h.title}
                  </h3>
                  <p className="mt-1 text-sm md:text-base text-foreground-700">
                    {h.desc}
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
