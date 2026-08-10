import JsonLd from "@/components/base/JsonLd";
import Navbar from "@/pages/home/components/Navbar";
import Subjects from "@/pages/home/components/Subjects";
import Footer from "@/pages/home/components/Footer";

const siteUrl = import.meta.env.VITE_SITE_URL || "https://example.com";

export default function SubjectsPage() {
  return (
    <main className="bg-background-50 text-foreground-950">
      <title>국제학교 과목 안내 | IB·AP·SAT 전 과목 과외</title>
      <meta
        name="description"
        content="수학(IB·AP Algebra/Geometry/Calculus)부터 영어, 과학, 제2외국어, 입학·전학 준비까지 - 국제학교 학생을 위한 과목별 과외 안내."
      />
      <meta
        name="keywords"
        content="국제학교 수학 과외, IB 수학 과외, IB Math AA 과외, IB Math AI 과외, 국제학교 알지브라과외, 국제학교 지오메트리과외, 국제학교 프리캘큘러스과외, 국제학교 영어 과외, IB 물리 과외, IB 화학 과외, IB 생물 과외, AP Physics 과외, AP Chemistry 과외, 국제학교 중국어 과외, 국제학교 일본어 과외, 국제학교 스페인어 과외, SSAT 대비 과외, MAP 테스트 대비 과외, 국제학교 입학 인터뷰 대비"
      />
      <link rel="canonical" href={`${siteUrl}/subjects`} />
      <meta property="og:title" content="국제학교 과목 안내 | IB·AP·SAT 전 과목 과외" />
      <meta
        property="og:description"
        content="수학(IB·AP Algebra/Geometry/Calculus)부터 영어, 과학, 제2외국어, 입학·전학 준비까지 - 국제학교 학생을 위한 과목별 과외 안내."
      />
      <meta property="og:url" content={`${siteUrl}/subjects`} />
      <meta property="og:image" content="https://kukje-gwaoe.co.kr/og-image.jpg" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="국제학교전문과외" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="국제학교 과목 안내 | IB·AP·SAT 전 과목 과외" />
      <meta
        name="twitter:description"
        content="수학(IB·AP Algebra/Geometry/Calculus)부터 영어, 과학, 제2외국어, 입학·전학 준비까지 - 국제학교 학생을 위한 과목별 과외 안내."
      />
      <meta name="twitter:image" content="https://kukje-gwaoe.co.kr/og-image.jpg" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "국제학교 전문과외", item: siteUrl },
            { "@type": "ListItem", position: 2, name: "과목", item: `${siteUrl}/subjects` },
          ],
        }}
      />
      <Navbar />
      <section className="relative overflow-hidden bg-foreground-950 text-background-50 section-pad pt-32 pb-10 md:pt-40 md:pb-14">
        <div className="absolute inset-0 bg-polka opacity-80" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-3xl md:text-5xl text-primary-500">
            국제학교 과목
          </h1>
          <p className="mt-4 text-sm md:text-base text-background-200">
            학생이 다니는 학교의 진도와 평가 방식에 맞춘 과목별 과외
          </p>
        </div>
      </section>
      <Subjects />
      <section className="section-pad py-16 md:py-20 text-center bg-background-100">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-heading text-2xl md:text-3xl text-foreground-950">
            찾는 과목이 목록에 없나요?
          </h2>
          <p className="mt-3 text-sm md:text-base text-foreground-700">
            학교별 커리큘럼에 맞춰 과목을 확인 후 안내해드립니다.
          </p>
          <a
            href="/trial"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground-950 px-6 py-3 text-sm font-bold text-primary-500 transition hover:bg-foreground-900 cursor-pointer"
          >
            무료 모의수업 신청하기 <i className="ri-arrow-right-line" />
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
