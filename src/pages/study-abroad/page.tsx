import JsonLd from "@/components/base/JsonLd";
import Navbar from "@/pages/home/components/Navbar";
import Footer from "@/pages/home/components/Footer";

const siteUrl = import.meta.env.VITE_SITE_URL || "https://example.com";

interface AbroadProgram {
  tag: string;
  name: string;
  region: string;
  bullets: string[];
  link?: string;
}

const PROGRAMS: AbroadProgram[] = [
  {
    tag: "미국·영국 사립 보딩스쿨",
    name: "EF Academy",
    region: "뉴욕 · 캘리포니아 · 옥스포드",
    bullets: [
      "대상: 만 14~19세",
      "지원자격: 주요과목 C등급 이상(국내 6등급 이상), EF 영어테스트·인터뷰 통과",
      "영어 사전과정(1월 30주 · 4월 17주 · 6월 9주) 수료 후 정규과정 진입",
      "연간 비용 약 US$76,600 (변경될 수 있음)",
      "12월 15일까지 등록 시 1월학기 최대 $10,000 / 9월학기 최대 $20,000 장학금(미국), 영국 최대 £15,000",
    ],
    link: "https://m.site.naver.com/2kgan",
  },
  {
    tag: "관리형 유학",
    name: "캐나다 중고등 유학",
    region: "나이아가라폴스 · 현지인 가정 홈스테이",
    bullets: [
      "대상: 중2~고2",
      "2027년 2월, 9월 학기 시작",
      "영어 ESL 수업부터 시작, 현지 관리자 지원으로 학부모 소통",
      "연간 비용 중3 이상 약 3,700만원 / 중2 이하 약 3,600만원 (변경될 수 있음)",
      "11월 등록 시 50만원 할인",
    ],
    link: "https://m.site.naver.com/295V5",
  },
  {
    tag: "공립학교 유학",
    name: "뉴질랜드 유학",
    region: "와이우쿠",
    bullets: [
      "대상: 중2~고2",
      "텀제 운영으로 2·4·7·10월 중 원하는 시기 시작 가능",
      "전자비자로 진행, 현지에서 유학비자 전환 가능",
      "영어 ESL 수업부터 시작, 교내 국제학생관리팀 지원",
      "11월 등록 시 50만원 할인",
    ],
    link: "https://m.site.naver.com/295Tb",
  },
  {
    tag: "사립 기숙학교",
    name: "미국 사립 기숙학교",
    region: "캘리포니아 · 뉴욕",
    bullets: [
      "대상: 중3~고1",
      "1월, 9월 학기 시작",
      "3인실 기숙사 생활, 영어 ESL 수업부터 시작",
      "교내 관리자 지원으로 적응·학부모 소통",
    ],
  },
];

export default function StudyAbroadPage() {
  return (
    <main className="bg-background-50 text-foreground-950">
      <title>해외 중고등 유학 안내 | 국제학교 전문과외</title>
      <meta
        name="description"
        content="국제학교 전문과외에서 제휴를 통해 안내하는 해외 중고등 유학 정보 — EF Academy 보딩스쿨, 캐나다·뉴질랜드 공립학교, 미국 사립 기숙학교까지 쏠루트유학을 통해 확인하세요."
      />
      <meta
        name="keywords"
        content="해외 유학, 중고등 유학, 보딩스쿨, EF Academy, 캐나다 유학, 뉴질랜드 유학, 미국 사립학교, 유학 상담, 국제학교 전문과외"
      />
      <link rel="canonical" href={`${siteUrl}/study-abroad`} />
      <meta property="og:title" content="해외 중고등 유학 안내 | 국제학교 전문과외" />
      <meta
        property="og:description"
        content="국제학교 전문과외에서 제휴를 통해 안내하는 해외 중고등 유학 정보 — EF Academy 보딩스쿨, 캐나다·뉴질랜드 공립학교, 미국 사립 기숙학교까지 쏠루트유학을 통해 확인하세요."
      />
      <meta property="og:url" content={`${siteUrl}/study-abroad`} />
      <meta property="og:image" content="https://kukje-gwaoe.co.kr/og-image.jpg" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="국제학교전문과외" />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "국제학교 전문과외", item: siteUrl },
            { "@type": "ListItem", position: 2, name: "해외유학 안내", item: `${siteUrl}/study-abroad` },
          ],
        }}
      />

      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground-950 text-background-50 section-pad pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 bg-polka opacity-80" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-4 py-1.5 text-sm md:text-base font-medium text-foreground-950">
            <i className="ri-earth-line" /> 제휴 서비스
          </span>
          <h1 className="mt-5 font-heading text-4xl md:text-6xl text-primary-500">
            해외 중고등 유학 안내
          </h1>
          <p className="mt-4 text-sm md:text-base text-background-200">
            국제학교 전문과외는 국내 1:1 과외 외에도, 유학 전문업체 쏠루트유학과의 제휴를 통해
            <br className="hidden md:block" />
            해외 중고등 유학에 관심 있는 학생·학부모님께 아래 프로그램 정보를 안내해드립니다.
          </p>
        </div>
      </section>

      {/* Program cards */}
      <section className="section-pad py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-foreground-700">
            실제 상담과 진행은 쏠루트유학에서 직접 담당하며, 아래 내용은 참고용 안내이니 정확한
            비용·일정·선발 기준은 상담을 통해 다시 확인해주세요. 캠프 형태의 단기 체험 프로그램은{" "}
            <a href="/camp" className="underline hover:text-primary-600">
              2027 겨울캠프 페이지
            </a>
            에서 별도로 확인하실 수 있습니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROGRAMS.map((p) => (
              <div
                key={p.name}
                className="flex flex-col rounded-3xl border border-background-300/70 bg-background-100 p-6 md:p-7"
              >
                <span className="inline-flex w-fit items-center rounded-full bg-foreground-950 px-3 py-1 text-xs font-medium text-primary-500">
                  {p.tag}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl text-foreground-950">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-foreground-600">{p.region}</p>

                <ul className="mt-4 space-y-1.5 text-sm text-foreground-800">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-1.5">
                      <i className="ri-check-line mt-0.5 shrink-0 text-primary-600" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary-700 underline hover:text-primary-600"
                  >
                    자료 보기 <i className="ri-arrow-right-line" />
                  </a>
                )}
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-foreground-700">
            서울 대치동에서 미국 교과과정을 공부하는 세인트폴아카데미(1월 학기 시작, 중2 이상 신청)도
            함께 모집 중입니다.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background-100 section-pad py-16 md:py-20">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-foreground-950">
            유학 상담이 궁금하신가요?
          </h2>
          <p className="mt-3 text-sm md:text-base text-foreground-700">
            정확한 비용·일정·장학금 조건은 쏠루트유학과의 상담을 통해 확인하실 수 있습니다.
          </p>
          <a
            href="tel:02-3668-0448"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-foreground-950 px-7 py-3.5 text-sm font-medium text-primary-500 transition hover:bg-foreground-900 cursor-pointer"
          >
            쏠루트유학 상담 02-3668-0448 <i className="ri-arrow-right-line" />
          </a>
          <p className="mt-3 text-xs text-foreground-600">
            카카오톡 채널 검색 "쏠루트유학"으로도 문의하실 수 있습니다.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
