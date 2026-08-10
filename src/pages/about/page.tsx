import JsonLd from "@/components/base/JsonLd";
import Navbar from "@/pages/home/components/Navbar";
import AboutSection from "@/pages/home/components/AboutSection";
import Footer from "@/pages/home/components/Footer";

const siteUrl = import.meta.env.VITE_SITE_URL || "https://example.com";

export default function AboutPage() {
  return (
    <main className="bg-background-50 text-foreground-950">
      <title>수업중인 학교 | 국내·해외 국제학교 전문과외</title>
      <meta
        name="description"
        content="채드윅 송도, NLCS 제주, 서울외국인학교부터 해외 각국 국제학교까지 - 국내·해외 국제학교별 수업 현황을 확인해보세요."
      />
      <meta
        name="keywords"
        content="국제학교 과외, 송도 국제학교 과외, 제주 국제학교 과외, NLCS 과외, 채드윅 과외, 외국인학교 과외, 국제학교전문과외, 해외 주재원 자녀 과외, 베트남 국제학교 과외, 태국 국제학교 과외, 말레이시아 국제학교 과외, 중국 국제학교 과외, 일본 국제학교 과외"
      />
      <link rel="canonical" href={`${siteUrl}/about`} />
      <meta property="og:title" content="수업중인 학교 | 국내·해외 국제학교 전문과외" />
      <meta
        property="og:description"
        content="채드윅 송도, NLCS 제주, 서울외국인학교부터 해외 각국 국제학교까지 - 국내·해외 국제학교별 수업 현황을 확인해보세요."
      />
      <meta property="og:url" content={`${siteUrl}/about`} />
      <meta property="og:image" content="https://kukje-gwaoe.co.kr/og-image.jpg" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="국제학교전문과외" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="수업중인 학교 | 국내·해외 국제학교 전문과외" />
      <meta
        name="twitter:description"
        content="채드윅 송도, NLCS 제주, 서울외국인학교부터 해외 각국 국제학교까지 - 국내·해외 국제학교별 수업 현황을 확인해보세요."
      />
      <meta name="twitter:image" content="https://kukje-gwaoe.co.kr/og-image.jpg" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "국제학교 전문과외", item: siteUrl },
            { "@type": "ListItem", position: 2, name: "수업중인 학교", item: `${siteUrl}/about` },
          ],
        }}
      />
      <Navbar />
      <section className="relative overflow-hidden bg-foreground-950 text-background-50 section-pad pt-32 pb-10 md:pt-40 md:pb-14">
        <div className="absolute inset-0 bg-polka opacity-80" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-3xl md:text-5xl text-primary-500">
            수업중인 학교
          </h1>
          <p className="mt-4 text-sm md:text-base text-background-200">
            국내·해외 국제학교를 지역별로 확인해보세요
          </p>
        </div>
      </section>
      <AboutSection />
      <section className="section-pad py-16 md:py-20 text-center bg-background-100">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-heading text-2xl md:text-3xl text-foreground-950">
            우리 아이 학교, 목록에 없나요?
          </h2>
          <p className="mt-3 text-sm md:text-base text-foreground-700">
            목록에 없는 학교도 문의해주시면 커리큘럼 확인 후 안내해드립니다.
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
