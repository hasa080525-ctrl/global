import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Traits from "./components/Traits";
import Teachers from "./components/Teachers";
import Subjects from "./components/Subjects";
import Ranking from "./components/Ranking";
import Reviews from "./components/Reviews";
import Chart from "./components/Chart";
import Pain from "./components/Pain";
import Process from "./components/Process";
import Story from "./components/Story";
import Badge from "./components/Badge";
import FAQ from "./components/FAQ";
import Apply from "./components/Apply";
import Footer from "./components/Footer";
import StickyBar from "./components/StickyBar";
import JsonLd from "@/components/base/JsonLd";
import { FAQS } from "@/mocks/faq";

const siteUrl = import.meta.env.VITE_SITE_URL || "https://example.com";

const OG_IMAGE = `${import.meta.env.VITE_SITE_URL || "https://kukje-gwaoe.co.kr"}/og-image.jpg`;

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <main className="bg-background-50 text-foreground-950">
      <title>국제학교전문과외 | IB·AP·SAT·IGCSE 화상 과외 무료체험</title>
      <meta name="description" content="IB·AP·IGCSE·SAT·A-Level 국제학교 전문 1:1 화상 과외. 서울·강남·제주·송도 8~15년 경력 강사진과 무료 모의수업으로 성적을 올려보세요." />
      <meta name="keywords" content="국제학교 과외, IB 과외, AP 과외, IGCSE 과외, SAT 과외, ACT 과외, A-Level 과외, 국제학교 수학 과외, IB 수학 과외, IB Math AA 과외, IB Math AI 과외, IB 영어 과외, 국제학교 에세이 과외, IB EE 과외, TOK 과외, IB DP 과외, IB MYP 과외, 화상 과외, 온라인 과외, 1:1 맞춤 과외, 서울 국제학교 과외, 강남 국제학교 과외, 제주 국제학교 과외, 송도 국제학교 과외, NLCS 과외, 채드윅 과외, KIS 과외, SJA 과외, BFS 과외, GSIS 과외, 외국인학교 과외, 국제학교 내신 관리, 국제학교 GPA 향상, 국제학교 과외 비용, 무료 체험 수업, 국제학교 전문과외, 국제학교 1:1 과외, IB 과외 추천, 국제학교 편입 과외, 국제학교 유학 상담, 국제학교 온라인 과외 후기, 국제학교입학, 국제학교전학, 국제학교준비, 국제학교입시, 국제학교내신, GPA관리, 국제학교수학, 국제학교영어, 에세이첨삭, 아이비리그준비, 아이비리그, 입학인터뷰, SSAT대비, SSAT 과외, MAP테스트, MAP 테스트 대비, 알지브라과외, 지오메트리 과외" />
      <link rel="canonical" href={siteUrl} />
      <meta property="og:title" content="국제학교전문과외 | IB·AP·SAT·IGCSE 화상 과외 무료체험" />
      <meta property="og:description" content="IB·AP·IGCSE·SAT·A-Level 국제학교 전문 1:1 화상 과외. 서울·강남·제주·송도 8~15년 경력 강사진과 무료 모의수업으로 성적을 올려보세요." />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="국제학교전문과외" />
      <meta property="og:locale" content="ko_KR" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="국제학교전문과외 | IB·AP·SAT·IGCSE 화상 과외 무료체험" />
      <meta name="twitter:description" content="IB·AP·IGCSE·SAT·A-Level 국제학교 전문 1:1 화상 과외. 서울·강남·제주·송도 8~15년 경력 강사진과 무료 모의수업으로 성적을 올려보세요." />
      <meta name="twitter:image" content={OG_IMAGE} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "국제학교 전문과외",
        "alternateName": ["국제학교전문과외", "서울 국제학교 과외", "Kukje School Tutoring"],
        "description": "서울 국제학교전문과외 - 국내·해외 국제학교 학생을 위한 1:1 맞춤 화상 과외 서비스. IB, AP, IGCSE, SAT, GPA 내신까지 국제학교 커리큘럼을 완벽하게 대비합니다.",
        "url": siteUrl,
        "inLanguage": "ko-KR",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${siteUrl}/news?search={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "국제학교 전문과외 - 홈", "item": siteUrl }
        ]
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "국제학교 전문과외",
        "alternateName": ["국제학교전문과외", "서울 국제학교 과외", "Kukje School Tutoring"],
        "description": "서울 국제학교전문과외 - IB, AP, IGCSE, SAT, GPA 내신 등 국제학교 커리큘럼에 특화된 1:1 맞춤 화상 과외 서비스. 평균 경력 8~15년차 전문 강사진이 실시간 1:1 화상 수업을 제공합니다.",
        "url": siteUrl,
        "logo": "https://static.readdy.ai/image/396c131664f132186cce247becf0fbc5/f689f6902db8633945364b676e8e94f8.png",
        "image": "https://static.readdy.ai/image/396c131664f132186cce247becf0fbc5/ad4235205082cb96d6197d180c581ff8.png",
        "telephone": "+82-10-3951-0535",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "서울",
          "addressCountry": "KR"
        },
        "areaServed": [
          { "@type": "Country", "name": "South Korea" },
          { "@type": "Country", "name": "International" }
        ],
        "foundingDate": "2015",
        "priceRange": "상담 문의"
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "국제학교 전문과외",
        "alternateName": ["국제학교전문과외", "국제학교 과외", "서울 국제학교 과외", "Kukje School Tutoring"],
        "description": "서울 국제학교전문과외 - 국내·해외 국제학교 전문 1:1 실시간 화상 과외 서비스. IB, AP, IGCSE, SAT, GPA 내신 등 국제학교 커리큘럼 완벽 대비. 8~15년 경력 전문 강사진.",
        "url": siteUrl,
        "telephone": "+82-10-3951-0535",
        "currenciesAccepted": "KRW",
        "priceRange": "상담 문의",
        "areaServed": [
          { "@type": "City", "name": "서울" },
          { "@type": "City", "name": "경기" },
          { "@type": "City", "name": "인천" },
          { "@type": "City", "name": "제주" },
          { "@type": "Country", "name": "International" }
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "서울특별시",
          "addressCountry": "KR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "37.5665",
          "longitude": "126.9780"
        },
        "openingHours": "Mo-Fr 09:00-22:00",
        "foundingDate": "2015",
        "knowsLanguage": ["ko", "en"],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "과외 과목",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "IB 과외" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AP 과외" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "IGCSE 과외" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SAT 과외" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "국제학교 내신 GPA 관리" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "국제학교 입학·전학 준비" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SSAT 대비" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "MAP 테스트 대비" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "입학 인터뷰 대비" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "에세이 첨삭" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "아이비리그 진학 준비" } }
          ]
        }
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQS.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }} />
      <Navbar />
      <Hero />
      <Traits />
      <Teachers />
      <Subjects />
      <Ranking />
      <Reviews />
      <Chart />
      <Pain />
      <Process />
      <Story />
      <Badge />
      <FAQ />
      <Apply />
      <Footer />
      <StickyBar />
    </main>
  );
}