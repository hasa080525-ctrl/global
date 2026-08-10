import JsonLd from "@/components/base/JsonLd";
import Navbar from "@/pages/home/components/Navbar";
import FAQ from "@/pages/home/components/FAQ";
import Footer from "@/pages/home/components/Footer";
import { FAQS } from "@/mocks/faq";

const siteUrl = import.meta.env.VITE_SITE_URL || "https://example.com";

export default function FaqPage() {
  return (
    <main className="bg-background-50 text-foreground-950">
      <title>자주 묻는 질문 | 국제학교전문과외</title>
      <meta
        name="description"
        content="수업 방식, 수업 과목, 비용, 결과까지 - 국제학교전문과외에 자주 묻는 질문과 답변을 확인해보세요."
      />
      <meta
        name="keywords"
        content="국제학교 과외 비용, 국제학교 과외 문의, 국제학교 편입 과외, IB vs AP, 국제학교 온라인 과외, 국제학교 전문과외"
      />
      <link rel="canonical" href={`${siteUrl}/faq`} />
      <meta property="og:title" content="자주 묻는 질문 | 국제학교전문과외" />
      <meta
        property="og:description"
        content="수업 방식, 수업 과목, 비용, 결과까지 - 국제학교전문과외에 자주 묻는 질문과 답변을 확인해보세요."
      />
      <meta property="og:url" content={`${siteUrl}/faq`} />
      <meta property="og:image" content="https://kukje-gwaoe.co.kr/og-image.jpg" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="국제학교전문과외" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="자주 묻는 질문 | 국제학교전문과외" />
      <meta
        name="twitter:description"
        content="수업 방식, 수업 과목, 비용, 결과까지 - 국제학교전문과외에 자주 묻는 질문과 답변을 확인해보세요."
      />
      <meta name="twitter:image" content="https://kukje-gwaoe.co.kr/og-image.jpg" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "국제학교 전문과외", item: siteUrl },
            { "@type": "ListItem", position: 2, name: "FAQ", item: `${siteUrl}/faq` },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />
      <Navbar />
      <section className="relative overflow-hidden bg-foreground-950 text-background-50 section-pad pt-32 pb-10 md:pt-40 md:pb-14">
        <div className="absolute inset-0 bg-polka opacity-80" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-3xl md:text-5xl text-primary-500">
            자주 묻는 질문
          </h1>
          <p className="mt-4 text-sm md:text-base text-background-200">
            궁금하신 점이 있다면 언제든지 문의해주세요
          </p>
        </div>
      </section>
      <FAQ />
      <Footer />
    </main>
  );
}
