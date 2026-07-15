import { useState } from "react";

interface OverseasRegion {
  code: string;
  flag: string;
  name: string;
  schools: string[];
}

const OVERSEAS_SCHOOLS: OverseasRegion[] = [
  {
    code: "vn",
    flag: "🇻🇳",
    name: "베트남",
    schools: ["UNIS Hanoi", "BIS Hanoi", "HIS", "Concordia", "SSIS", "BIS HCMC", "TAS", "ISHCMC", "AIS", "하노이 KIS", "호치민 KIS"],
  },
  {
    code: "th",
    flag: "🇹🇭",
    name: "태국",
    schools: ["ISB", "NIST", "Shrewsbury", "St. Andrews", "Harrow", "방콕 KIS"],
  },
  {
    code: "id",
    flag: "🇮🇩",
    name: "인도네시아",
    schools: ["JIS (Jakarta Intercultural School)", "BSJ", "ACG", "SPH", "자카르타 KIS"],
  },
  {
    code: "my",
    flag: "🇲🇾",
    name: "말레이시아",
    schools: ["Mont'Kiara", "Garden", "Alice Smith", "IGB", "Nexus", "말레이시아 KIS"],
  },
  {
    code: "ph",
    flag: "🇵🇭",
    name: "필리핀",
    schools: ["ISM", "Brent", "British School Manila", "Reedley", "마닐라 KIS"],
  },
  {
    code: "cn",
    flag: "🇨🇳",
    name: "중국",
    schools: ["SAS", "Dulwich", "YCIS", "Wellington", "Concordia", "WAB", "ISB", "상하이 KIS", "베이징 KIS", "청도 KIS", "천진 KIS", "대련 KIS"],
  },
  {
    code: "jp",
    flag: "🇯🇵",
    name: "일본",
    schools: ["ASIJ", "St. Mary's", "Seisen", "Nishimachi", "BST", "도쿄 KIS", "오사카 KIS", "교토 KIS"],
  },
  {
    code: "us",
    flag: "🇺🇸",
    name: "미국",
    schools: ["Irvine Unified", "Cupertino", "Palo Alto", "Fairfax County", "Phillips Exeter", "Phillips Andover", "Choate", "Hotchkiss", "Deerfield"],
  },
  {
    code: "eu",
    flag: "🇪🇺",
    name: "유럽",
    schools: ["Frankfurt International School (FIS)", "파리 한국국제학교", "EIB"],
  },
  {
    code: "ae",
    flag: "🇦🇪",
    name: "UAE (아부다비·두바이)",
    schools: ["GEMS 계열 학교", "Dubai International Academy"],
  },
  {
    code: "ca",
    flag: "🇨🇦",
    name: "캐나다",
    schools: ["Vancouver School Board", "Burnaby", "West Vancouver", "TDSB", "York Region District"],
  },
];

interface DomesticRegion {
  code: string;
  name: string;
  schools: string[];
}

const DOMESTIC_SCHOOLS: DomesticRegion[] = [
  {
    code: "seoul-gg",
    name: "서울·경기",
    schools: [
      "서울외국인학교 (SFS)",
      "서울용산국제학교 (YISS)",
      "서울드와이트외국인학교 (Dwight)",
      "덜위치칼리지서울영국학교 (Dulwich)",
      "한국외국인학교 (KIS 서울/판교캠퍼스)",
      "서울국제학교 (SIS)",
      "경기수원외국인학교 (GSIS)",
      "아시아퍼시픽국제외국인학교 (APIS)",
      "코리아외국인학교 (KFS)",
      "한국켄트외국인학교 (KKFS)",
      "페이스튼 용산캠퍼스",
      "베일러국제학교 (안성)",
      "세인트폴 아카데미 (강남·대치)",
      "코너스톤 서울아카데미",
      "한국외대 HIFS",
    ],
  },
  {
    code: "incheon",
    name: "인천",
    schools: ["채드윅 송도국제학교 (Chadwick International)", "청라달튼외국인학교 (CDS)"],
  },
  {
    code: "jeju",
    name: "제주",
    schools: [
      "NLCS 제주 (North London Collegiate School Jeju)",
      "브랭섬홀 아시아 (BHA)",
      "세인트존스베리아카데미 제주 (SJA Jeju)",
      "한국국제학교 제주캠퍼스 (KIS Jeju)",
      "칼빈매니토바국제학교",
    ],
  },
  {
    code: "daejeon",
    name: "대전",
    schools: ["외국인학교 (TCIS)"],
  },
  {
    code: "daegu",
    name: "대구",
    schools: ["대구국제학교 (DIS)"],
  },
  {
    code: "busan",
    name: "부산",
    schools: ["부산국제외국인학교 (ISB)"],
  },
  {
    code: "gwangju",
    name: "광주",
    schools: ["광주외국인학교 (GIS)"],
  },
  {
    code: "ulsan-gn",
    name: "울산·경남",
    schools: ["현대외국인학교 (울산)", "경남국제외국인학교 (사천)", "애서튼국제외국인학교 (거제)"],
  },
  {
    code: "sejong",
    name: "세종",
    schools: ["페이스튼 세종캠퍼스"],
  },
  {
    code: "etc",
    name: "기타",
    schools: ["글로벌비전크리스천학교 (GVCS)"],
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
  const [activeDomestic, setActiveDomestic] = useState(DOMESTIC_SCHOOLS[0].code);
  const activeDomesticRegion = DOMESTIC_SCHOOLS.find((c) => c.code === activeDomestic)!;
  const [activeOverseas, setActiveOverseas] = useState(OVERSEAS_SCHOOLS[0].code);
  const activeOverseasRegion = OVERSEAS_SCHOOLS.find((c) => c.code === activeOverseas)!;

  return (
    <section id="about" className="bg-background-50 section-pad py-20 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-4 py-1.5 text-xs md:text-sm font-bold text-foreground-950">
          <i className="ri-graduation-cap-fill" /> Since 2015
        </span>
        <h4 className="mt-5 font-heading text-3xl md:text-4xl text-foreground-950">
          <a href="#about" className="cursor-pointer">
            수업중인 학교
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

      {/* Domestic schools */}
      <div className="mx-auto mt-16 max-w-4xl text-center">
        <h5 className="font-heading text-2xl md:text-3xl text-foreground-950">
          이런 학교 학생들이 함께합니다
        </h5>
        <p className="mt-3 text-sm md:text-base text-foreground-700">
          지역을 눌러보시면 현재 수업 중인 국내 국제학교를 확인하실 수 있습니다.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {DOMESTIC_SCHOOLS.map((r) => (
            <button
              key={r.code}
              type="button"
              onClick={() => setActiveDomestic(r.code)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition cursor-pointer whitespace-nowrap ${
                activeDomestic === r.code
                  ? "border-primary-500 bg-primary-500 text-foreground-950"
                  : "border-background-300 bg-background-100 text-foreground-800 hover:border-primary-400 hover:bg-primary-50"
              }`}
            >
              {r.name}
            </button>
          ))}
        </div>
        <div className="mt-6 text-left rounded-3xl border border-background-300/70 bg-background-100 p-6 md:p-8">
          <h3 className="font-heading text-xl md:text-2xl text-foreground-950">{activeDomesticRegion.name}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {activeDomesticRegion.schools.map((school) => (
              <span
                key={school}
                className="rounded-full border border-background-300/70 bg-background-50 px-3.5 py-1.5 text-xs md:text-sm font-medium text-foreground-800"
              >
                {school}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Overseas schools */}
      <div className="mx-auto mt-16 max-w-4xl text-center">
        <h5 className="font-heading text-2xl md:text-3xl text-foreground-950">
          해외 수업중인 학교
        </h5>
        <p className="mt-3 text-sm md:text-base text-foreground-700">
          지역을 눌러보시면 현재 수업 중인 학교를 확인하실 수 있습니다.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {OVERSEAS_SCHOOLS.map((r) => (
            <button
              key={r.code}
              type="button"
              onClick={() => setActiveOverseas(r.code)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition cursor-pointer whitespace-nowrap ${
                activeOverseas === r.code
                  ? "border-primary-500 bg-primary-500 text-foreground-950"
                  : "border-background-300 bg-background-100 text-foreground-800 hover:border-primary-400 hover:bg-primary-50"
              }`}
            >
              <span className="text-base">{r.flag}</span> {r.name}
            </button>
          ))}
        </div>
        <div className="mt-6 text-left rounded-3xl border border-background-300/70 bg-background-100 p-6 md:p-8">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{activeOverseasRegion.flag}</span>
            <h3 className="font-heading text-xl md:text-2xl text-foreground-950">{activeOverseasRegion.name}</h3>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {activeOverseasRegion.schools.map((school) => (
              <span
                key={school}
                className="rounded-full border border-background-300/70 bg-background-50 px-3.5 py-1.5 text-xs md:text-sm font-medium text-foreground-800"
              >
                {school}
              </span>
            ))}
          </div>
        </div>
        <p className="mt-4 text-sm">
          <a href="/schools/" className="font-semibold text-primary-600 hover:text-primary-700">
            학교별 과외 전체 목록 보기 →
          </a>
        </p>
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
