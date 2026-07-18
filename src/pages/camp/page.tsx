import JsonLd from "@/components/base/JsonLd";
import Navbar from "@/pages/home/components/Navbar";
import Footer from "@/pages/home/components/Footer";

const siteUrl = import.meta.env.VITE_SITE_URL || "https://example.com";

interface CampProgram {
  country: string;
  flag: string;
  duration: string;
  schedule: string;
  region: string;
  season: string;
  target: string;
  org: string;
  features: string[];
  stay: string;
  cost: string;
  costNote: string;
  flight: string;
}

const CAMPS: CampProgram[] = [
  {
    country: "캐나다 3주",
    flag: "🇨🇦",
    duration: "3주",
    schedule: "27년 1월 9일 ~ 29일",
    region: "캐나다 온타리오주 나이아가라폴스",
    season: "겨울",
    target: "신청 시 학년 기준 초4~고2, 총 35명 · 출국·귀국 시 인솔자 동행",
    org: "캐나다 나이아가라 카톨릭교육청 산하 공립학교",
    features: [
      "캐나다 공립학교 정규과정 체험",
      "토론토, 나이아가라폴스 여행",
      "하키관람, 스키 등 겨울 스포츠 체험",
      "4박5일 미국 아이비리그대학 탐방 여행",
    ],
    stay: "2인 1가정 홈스테이",
    cost: "890만원",
    costNote: "항공료 별도 (모집 마감 후 항공료 확정, 결제 안내)",
    flight: "에어캐나다 이용 예정, 토론토 직항",
  },
  {
    country: "캐나다 7주",
    flag: "🇨🇦",
    duration: "7주",
    schedule: "27년 1월 9일 ~ 2월 27일",
    region: "캐나다 온타리오주 세인트캐서린",
    season: "겨울",
    target: "신청 시 학년 기준 초4~중2, 총 15명 · 귀국 시 인솔자 없이 항공사 서비스 이용 가능",
    org: "캐나다 사립학교 Calvary Christian School",
    features: [
      "캐나다 사립학교 정규과정 체험",
      "토론토, 나이아가라폴스 여행",
      "하키관람, 스키 등 겨울 스포츠 체험",
      "4박5일 미국 아이비리그대학 탐방 여행",
    ],
    stay: "2인 1가정 홈스테이",
    cost: "1,290만원",
    costNote: "항공료 별도 (모집 마감 후 항공료 확정, 결제 안내)",
    flight: "에어캐나다 이용 예정, 토론토 직항",
  },
  {
    country: "뉴질랜드 3주",
    flag: "🇳🇿",
    duration: "3주",
    schedule: "27년 1월 9일 ~ 30일",
    region: "뉴질랜드 오클랜드 와이우쿠",
    season: "여름",
    target: "신청 시 학년 기준 초4~고2, 10명 · 귀국 시 인솔자 없이 항공사 서비스 이용 가능",
    org: "뉴질랜드 공립학교 Waiuku College",
    features: [
      "영어 학습, 다양한 문화 체험",
      "마오리 문화 체험",
      "와이헤케아일랜드 투어, 팜투어",
      "오클랜드 워터뮤지엄 투어, 쇼핑",
    ],
    stay: "2인 1가정 홈스테이",
    cost: "690만원",
    costNote: "항공료 별도 (모집 마감 후 항공료 확정, 결제 안내)",
    flight: "대한항공 이용 예정, 오클랜드 직항",
  },
  {
    country: "뉴질랜드 4주",
    flag: "🇳🇿",
    duration: "4주",
    schedule: "27년 1월 29일 ~ 2월 27일",
    region: "뉴질랜드 오클랜드 와이우쿠",
    season: "여름",
    target: "신청 시 학년 기준 초6~고2, 10명",
    org: "뉴질랜드 공립학교 Waiuku College",
    features: [
      "영어 학습, 정규과정 체험",
      "다양한 문화, 마오리 문화 체험",
      "오클랜드 투어, 럭비게임 관람, 카트체험",
      "학교 체육대회 참여",
    ],
    stay: "2인 1가정 홈스테이",
    cost: "810만원",
    costNote: "항공료 별도 (모집 마감 후 항공료 확정, 결제 안내)",
    flight: "대한항공 이용 예정, 오클랜드 직항",
  },
  {
    country: "뉴질랜드 7주",
    flag: "🇳🇿",
    duration: "7주",
    schedule: "27년 1월 9일 ~ 2월 27일",
    region: "뉴질랜드 오클랜드 와이우쿠",
    season: "여름",
    target: "신청 시 학년 기준 초6~고2, 25명",
    org: "뉴질랜드 공립학교 Waiuku College",
    features: [
      "영어 학습, 정규과정 체험",
      "다양한 문화, 마오리 문화 체험",
      "와이헤케아일랜드 투어, 팜투어",
      "오클랜드 워터뮤지엄 투어, 호비튼 투어",
    ],
    stay: "2인 1가정 홈스테이",
    cost: "1,190만원",
    costNote: "항공료 별도 (모집 마감 후 항공료 확정, 결제 안내)",
    flight: "대한항공 이용 예정, 오클랜드 직항",
  },
  {
    country: "일본 2주",
    flag: "🇯🇵",
    duration: "2주",
    schedule: "27년 2월 14일 ~ 27일",
    region: "일본 교토",
    season: "겨울",
    target: "중1~고2, 총 20명 · 출국·귀국 시 인솔자 동행",
    org: "경기어학원",
    features: [
      "일본어 학습, 일본문화 교류",
      "캠프 지역 랜드마크 투어",
      "유니버설스튜디오 투어",
      "유카타 체험, 돈키호테 쇼핑, 오사카·나라 등 도시 체험",
    ],
    stay: "2인 1가정 홈스테이",
    cost: "594만원",
    costNote: "항공료 포함",
    flight: "대한항공 이용 예정, 간사이 직항",
  },
];

export default function CampPage() {
  return (
    <main className="bg-background-50 text-foreground-950">
      <title>2027 겨울캠프 모집 | 캐나다·뉴질랜드·일본 국제학교 캠프</title>
      <meta
        name="description"
        content="2027 겨울캠프 모집 안내. 캐나다·뉴질랜드 공립학교 정규과정 체험, 일본 어학연수까지, 초등~고등 학생 대상 해외 캠프 프로그램."
      />
      <meta
        name="keywords"
        content="겨울캠프, 2027 겨울캠프, 캐나다 겨울캠프, 뉴질랜드 겨울캠프, 일본 겨울캠프, 해외 어학연수, 초등 해외캠프, 중등 해외캠프, 고등 해외캠프, 홈스테이 캠프, 공립학교 정규과정 체험, 조기유학 캠프, 국제학교 전문과외 캠프"
      />
      <link rel="canonical" href={`${siteUrl}/camp`} />
      <meta property="og:title" content="2027 겨울캠프 모집 | 캐나다·뉴질랜드·일본 국제학교 캠프" />
      <meta
        property="og:description"
        content="2027 겨울캠프 모집 안내. 캐나다·뉴질랜드 공립학교 정규과정 체험, 일본 어학연수까지, 초등~고등 학생 대상 해외 캠프 프로그램."
      />
      <meta property="og:url" content={`${siteUrl}/camp`} />
      <meta property="og:image" content="https://kukje-gwaoe.co.kr/og-image.jpg" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="국제학교전문과외" />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "국제학교 전문과외", item: siteUrl },
            { "@type": "ListItem", position: 2, name: "2027 겨울캠프", item: `${siteUrl}/camp` },
          ],
        }}
      />

      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground-950 text-background-50 section-pad pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 bg-polka opacity-80" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-4 py-1.5 text-sm md:text-base font-medium text-foreground-950">
            <i className="ri-flight-takeoff-line" /> 2027 겨울캠프 모집 시작
          </span>
          <h1 className="mt-5 font-heading text-4xl md:text-6xl text-primary-500">
            2027 겨울캠프
          </h1>
          <p className="mt-4 text-sm md:text-base text-background-200">
            캐나다·뉴질랜드 공립학교 정규과정 체험부터 일본 어학연수까지,
            <br className="hidden md:block" />
            초등~고등 학생을 위한 해외 캠프 프로그램 모집이 시작됩니다.
          </p>
        </div>
      </section>

      {/* Program cards */}
      <section className="section-pad py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {CAMPS.map((c) => (
              <div
                key={c.country}
                className="flex flex-col rounded-3xl border border-background-300/70 bg-background-100 p-6 md:p-7"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">{c.flag}</span>
                  <h3 className="font-heading text-xl md:text-2xl text-foreground-950">
                    {c.country}
                  </h3>
                  <span className="ml-auto rounded-full bg-primary-500 px-3 py-1 text-xs font-bold text-foreground-950">
                    {c.season}
                  </span>
                </div>

                <dl className="mt-5 space-y-2.5 text-sm">
                  <div className="flex gap-2">
                    <dt className="w-16 shrink-0 font-semibold text-foreground-600">일정</dt>
                    <dd className="text-foreground-800">{c.schedule}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="w-16 shrink-0 font-semibold text-foreground-600">지역</dt>
                    <dd className="text-foreground-800">{c.region}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="w-16 shrink-0 font-semibold text-foreground-600">대상</dt>
                    <dd className="text-foreground-800">{c.target}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="w-16 shrink-0 font-semibold text-foreground-600">기관</dt>
                    <dd className="text-foreground-800">{c.org}</dd>
                  </div>
                </dl>

                <div className="mt-4 rounded-2xl bg-background-50 p-4">
                  <p className="text-xs font-bold text-primary-600">주요 특징</p>
                  <ul className="mt-2 space-y-1.5 text-sm text-foreground-800">
                    {c.features.map((f) => (
                      <li key={f} className="flex gap-1.5">
                        <i className="ri-check-line mt-0.5 shrink-0 text-primary-600" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <dl className="mt-4 space-y-2.5 text-sm">
                  <div className="flex gap-2">
                    <dt className="w-16 shrink-0 font-semibold text-foreground-600">숙박</dt>
                    <dd className="text-foreground-800">{c.stay}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="w-16 shrink-0 font-semibold text-foreground-600">항공</dt>
                    <dd className="text-foreground-800">{c.flight}</dd>
                  </div>
                </dl>

                <div className="mt-5 border-t border-background-300/70 pt-4">
                  <p className="font-heading text-2xl text-foreground-950">{c.cost}</p>
                  <p className="mt-0.5 text-xs text-foreground-600">{c.costNote}</p>
                </div>

                <a
                  href="/trial"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-foreground-950 px-6 py-3.5 text-sm font-medium text-primary-500 transition hover:bg-foreground-900 cursor-pointer"
                >
                  자료 신청하기 <i className="ri-arrow-right-line" />
                </a>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-foreground-600">
            * 위 일정·비용은 모집 상황에 따라 변경될 수 있으며, 정확한 안내는 상담을 통해 확인하실 수 있습니다.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-500 section-pad py-16 md:py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground-950">
            겨울캠프 자세한 자료가 궁금하다면
          </h2>
          <p className="mt-3 text-sm md:text-base text-foreground-800">
            전화 또는 카카오톡으로 문의하시면 캠프별 상세 자료를 안내해드립니다.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:01039510535"
              className="inline-flex items-center gap-2 rounded-full bg-foreground-950 px-8 py-4 text-base font-medium text-primary-500 transition hover:bg-foreground-900 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-phone-fill" /> 010-3951-0535
            </a>
            <a
              href="https://open.kakao.com/o/sOXeVnpi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground-950 px-8 py-4 text-base font-medium text-primary-500 transition hover:bg-foreground-900 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-kakao-talk-fill" /> 카카오톡 상담
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
