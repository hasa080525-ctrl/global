import { useState } from "react";

interface Country {
  code: string;
  flag: string;
  name: string;
  summary: string;
}

const COUNTRIES: Country[] = [
  {
    code: "kr",
    flag: "🇰🇷",
    name: "한국 (국내 국제학교)",
    summary:
      "영미식 커리큘럼과 IB가 함께 쓰입니다. NLCS 제주·Dulwich College Seoul 등 영국식 학교는 IB DP를 중심으로, KIS·SIS 등 미국식 학교는 AP를 폭넓게 다루며, Chadwick International·Branksome Hall Asia 같은 IB 학교는 PYP-MYP-DP 전 과정을 운영합니다.",
  },
  {
    code: "us",
    flag: "🇺🇸",
    name: "미국",
    summary:
      "국가 공통시험 없이 학교별 커리큘럼에 AP(과목당 4~8개 이수)를 폭넓게 활용합니다. SAT·ACT는 상위권 대학 지원 시 여전히 중요하며, 아이비리그급 대학은 다시 점수 제출을 요구하는 추세입니다. 보딩스쿨은 250개 이상이고 유학생 비중이 약 15%입니다.",
  },
  {
    code: "uk",
    flag: "🇬🇧",
    name: "영국",
    summary:
      "보딩스쿨은 보통 13세에 Common Entrance(또는 ISEB Pre-Test)로 입학하며, 14~16세에 GCSE, 16~18세(식스폼)에 A-Level을 이수합니다. GCSE 성적이 A-Level 과목 선택에 영향을 주고, A-Level 성적은 대학 지원 시스템 UCAS로 직결됩니다.",
  },
  {
    code: "sg",
    flag: "🇸🇬",
    name: "싱가포르",
    summary:
      "국제학교 대부분이 IB 또는 영국식 IGCSE/A-Level을 채택하며, 그중 IB가 가장 널리 쓰입니다. 현지 학생이 다니는 국공립 트랙은 PSLE 이후 별도 편제로 나뉘어, 국제학교와는 완전히 다른 시스템으로 운영됩니다.",
  },
  {
    code: "hk",
    flag: "🇨🇳",
    name: "중국·홍콩",
    summary:
      "홍콩 국제학교는 IB 또는 영국식 IGCSE/A-Level을 운영하며 글로벌 대학 인정도가 높아 선호됩니다. 현지 트랙은 HKDSE(3-3-4 학제)이며, 일부 학교는 HKDSE반과 국제(IB/IGCSE)반을 동시에 운영합니다.",
  },
  {
    code: "vn",
    flag: "🇻🇳",
    name: "베트남",
    summary:
      "호치민·하노이를 중심으로 60개 이상의 국제학교가 있으며, 영국·미국·IB·싱가포르식 케임브리지 커리큘럼이 모두 존재합니다(IB World School만 약 18개). 영국식 IGCSE에 IB DP를 얹거나, 미국식 AP와 IB DP를 함께 운영하는 학교도 많습니다.",
  },
  {
    code: "my",
    flag: "🇲🇾",
    name: "말레이시아",
    summary:
      "등록된 국제학교가 약 258개로 동남아 지역 허브 역할을 하며, 케임브리지(IGCSE/A-Level) 또는 IB가 주류입니다. IGB International School처럼 PYP~DP 전 과정을 운영하는 학교도 있습니다.",
  },
  {
    code: "ae",
    flag: "🇦🇪",
    name: "두바이·UAE",
    summary:
      "모든 사립학교가 KHDA(두바이 교육청)의 연례 평가·등급(Outstanding~Very Weak)을 받습니다. 영국식 IGCSE/A-Level이 가장 큰 비중(약 37~40%)을 차지하고, IB를 함께 운영하는 학교도 많습니다.",
  },
  {
    code: "ca",
    flag: "🇨🇦",
    name: "캐나다",
    summary:
      "사립학교가 가장 많은 온타리오주 기준, 대다수가 OSSD(온타리오 고교 졸업장)를 발급하며 여기에 AP나 IB를 더해 경쟁력을 높입니다. 특히 토론토 광역권 상위권 사립·보딩스쿨에서 IB가 널리 쓰입니다. (주별로 학제가 다를 수 있습니다)",
  },
];

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
  const [active, setActive] = useState(COUNTRIES[0].code);
  const activeCountry = COUNTRIES.find((c) => c.code === active)!;

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

      {/* Country guide */}
      <div className="mx-auto mt-16 max-w-4xl text-center">
        <h5 className="font-heading text-2xl md:text-3xl text-foreground-950">
          나라별 국제학교 가이드
        </h5>
        <p className="mt-3 text-sm md:text-base text-foreground-700">
          국가마다 커리큘럼과 입시 방식이 다릅니다. 자녀가 있는(또는 계획 중인) 국가를 눌러보세요.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {COUNTRIES.map((c) => (
            <button
              key={c.code}
              type="button"
              onClick={() => setActive(c.code)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition cursor-pointer whitespace-nowrap ${
                active === c.code
                  ? "border-primary-500 bg-primary-500 text-foreground-950"
                  : "border-background-300 bg-background-100 text-foreground-800 hover:border-primary-400 hover:bg-primary-50"
              }`}
            >
              <span className="text-base">{c.flag}</span> {c.name}
            </button>
          ))}
        </div>
        <div className="mt-6 text-left rounded-3xl border border-background-300/70 bg-background-100 p-6 md:p-8">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{activeCountry.flag}</span>
            <h3 className="font-heading text-xl md:text-2xl text-foreground-950">{activeCountry.name}</h3>
          </div>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-foreground-800">
            {activeCountry.summary}
          </p>
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
