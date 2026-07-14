import Navbar from "@/pages/home/components/Navbar";
import Footer from "@/pages/home/components/Footer";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-background-50">
      <title>페이지를 찾을 수 없습니다 | 국제학교전문과외</title>
      <meta name="robots" content="noindex, follow" />
      <Navbar />
      <div className="flex flex-1 flex-col items-center justify-center px-4 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-500 text-foreground-950">
          <i className="ri-map-pin-2-line text-3xl" />
        </div>
        <h1 className="mt-6 font-heading text-4xl md:text-5xl text-foreground-950">페이지를 찾을 수 없습니다</h1>
        <p className="mt-3 text-sm md:text-base text-foreground-700">
          요청하신 페이지는 존재하지 않거나 이동되었습니다.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="/" className="inline-flex items-center gap-2 rounded-full bg-foreground-950 px-6 py-3 text-sm font-bold text-primary-500 transition hover:bg-foreground-900 whitespace-nowrap">
            <i className="ri-arrow-left-line" /> 홈으로 돌아가기
          </a>
          <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-bold text-foreground-950 transition hover:bg-primary-400 whitespace-nowrap">
            <i className="ri-message-3-line" /> 문의하기
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}