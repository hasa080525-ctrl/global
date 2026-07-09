import { useState, type FormEvent } from "react";
import JsonLd from "@/components/base/JsonLd";

const siteUrl = import.meta.env.VITE_SITE_URL || "https://example.com";

const FORM_ENDPOINT = "https://readdy.ai/api/form/d8v0psv43hkdi0qge8b0";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const honeypot = String(formData.get("website_alt") || "").trim();
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const grade = String(formData.get("grade") || "").trim();
    const subjects = formData.getAll("subjects").map(String);
    const address = String(formData.get("address") || "").trim();
    const note = String(formData.get("note") || "").trim();

    if (note.length > 500) {
      setStatus("error");
      setMessage("문의 내용은 500자 이내로 작성해주세요.");
      return;
    }
    if (!name || !phone || !grade) {
      setStatus("error");
      setMessage("이름, 연락처, 학년은 필수 입력입니다.");
      return;
    }

    setStatus("submitting");

    if (honeypot) {
      setTimeout(() => {
        setStatus("success");
        setMessage("신청이 접수되었습니다. 곧 연락드리겠습니다.");
        form.reset();
      }, 600);
      return;
    }

    const body = new URLSearchParams();
    body.append("name", name);
    body.append("phone", phone);
    if (grade) body.append("grade", grade);
    if (subjects.length > 0) subjects.forEach((s) => body.append("subjects", s));
    if (address) body.append("address", address);
    if (note) body.append("note", note);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error("network");
      setStatus("success");
      setMessage("문의가 접수되었습니다. 곧 연락드리겠습니다.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("일시적인 오류입니다. 잠시 후 다시 시도해주세요.");
    }
  };

  return (
    <main className="bg-background-50 text-foreground-950">
      <title>상담 문의 | 국제학교전문과외 전화·카카오톡 무료상담</title>
      <meta name="description" content="IB·AP·IGCSE·SAT 국제학교 과외 비용, 커리큘럼 상담을 전화·카카오톡·온라인으로 받아보세요. 24시간 내 답변드립니다." />
      <meta name="keywords" content="국제학교 과외 상담, IB 과외 문의, AP 과외 비용, IGCSE 과외 상담, A-Level 과외 상담, SAT 과외 비용, ACT 과외 비용, 화상 과외 상담, 온라인 과외 상담, 국제학교 과외 추천, 국제학교 1:1 과외, 서울 국제학교 과외, 국제학교 내신 관리, 국제학교 GPA 향상 상담, 무료 과외 상담, 국제학교 과외 카카오톡 문의, 국제학교 과외 전화상담" />
      <link rel="canonical" href={`${siteUrl}/contact`} />
      <meta property="og:title" content="상담 문의 | 국제학교전문과외 전화·카카오톡 무료상담" />
      <meta property="og:description" content="IB·AP·IGCSE·SAT 국제학교 과외 비용, 커리큘럼 상담을 전화·카카오톡·온라인으로 받아보세요. 24시간 내 답변드립니다." />
      <meta property="og:url" content={`${siteUrl}/contact`} />
      <meta property="og:image" content="https://kukje-gwaoe.co.kr/og-image.jpg" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="국제학교전문과외" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="상담 문의 | 국제학교전문과외 전화·카카오톡 무료상담" />
      <meta name="twitter:description" content="IB·AP·IGCSE·SAT 국제학교 과외 비용, 커리큘럼 상담을 전화·카카오톡·온라인으로 받아보세요. 24시간 내 답변드립니다." />
      <meta name="twitter:image" content="https://kukje-gwaoe.co.kr/og-image.jpg" />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "서울 국제학교전문과외 문의하기",
        "description": "서울 국제학교전문과외 - IB·AP·IGCSE·SAT 1:1 화상 과외 상담. 궁금한 점을 편하게 문의하세요. 24시간 내 답변드립니다.",
        "url": `${siteUrl}/contact`,
        "about": {
          "@type": "EducationalOrganization",
          "name": "국제학교 전문과외",
          "telephone": "+82-10-3951-0535",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "서울",
            "addressCountry": "KR"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+82-10-3951-0535",
            "contactType": "customer service",
            "availableLanguage": ["Korean", "English"],
            "hoursAvailable": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "09:00",
                "closes": "22:00"
              }
            ]
          }
        }
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "국제학교 전문과외", "item": siteUrl },
          { "@type": "ListItem", "position": 2, "name": "문의하기", "item": `${siteUrl}/contact` }
        ]
      }} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground-950 text-background-50 section-pad pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-polka opacity-80" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-4 py-1.5 text-sm md:text-base font-medium text-foreground-950">
            <i className="ri-graduation-cap-fill" /> 24시간 내 답변
          </span>
          <h1 className="mt-5 font-heading text-4xl md:text-6xl text-primary-500">
            <a href="#" className="cursor-pointer">문의하기</a>
          </h1>
          <p className="mt-4 text-sm md:text-base text-background-200">
            수업에 대한 궁금한 점, 언제든지 편하게 문의해주세요
          </p>
        </div>
      </section>

      {/* Contact info */}
      <section className="section-pad py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                icon: "ri-phone-fill",
                title: "전화 상담",
                desc: "010-3951-0535",
                sub: "클릭하면 바로 연결",
                href: "tel:01039510535",
              },
              {
                icon: "ri-time-fill",
                title: "상담 시간",
                desc: "매일 09:00 - 22:00",
                sub: "연중무휴",
                href: null,
              },
              {
                icon: "ri-kakao-talk-fill",
                title: "카카오톡",
                desc: "카카오톡 상담",
                sub: "실시간 1:1 상담",
                href: "https://open.kakao.com/o/sOXeVnpi",
                external: true,
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-3xl border border-background-300/70 bg-background-50 p-6 md:p-8 text-center transition hover:-translate-y-1"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500 text-foreground-950">
                  <i className={`${c.icon} text-2xl`} />
                </div>
                <h3 className="mt-4 font-heading text-lg md:text-xl text-foreground-950">
                  {c.title}
                </h3>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className="mt-2 inline-block text-base md:text-lg font-medium text-primary-600 hover:text-primary-700 cursor-pointer"
                  >
                    {c.desc}
                  </a>
                ) : (
                  <p className="mt-2 text-base md:text-lg font-medium text-foreground-950">
                    {c.desc}
                  </p>
                )}
                <p className="mt-1 text-xs md:text-sm text-foreground-600">
                  {c.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-background-100 section-pad py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h4 className="text-center font-heading text-3xl md:text-4xl text-foreground-950">
            <a href="#" className="cursor-pointer">온라인 문의 작성</a>
          </h4>
          <p className="mt-3 text-center text-sm md:text-base text-foreground-700">
            아래 내용을 작성해주시면 24시간 내 답변드립니다
          </p>

          <form
            data-readdy-form
            id="contact-form"
            onSubmit={handleSubmit}
            noValidate
            className="mx-auto mt-10 grid gap-4 rounded-3xl bg-background-50 p-6 md:p-8"
          >
            {/* honeypot */}
            <div className="field-alt-extra" aria-hidden="true">
              <label>
                Website
                <input type="text" name="website_alt" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold">이름 *</span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="홍길동"
                  className="mt-1 w-full rounded-lg border border-background-300 bg-background-50 px-4 py-2.5 text-sm outline-none focus:border-foreground-950"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold">연락처 *</span>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="010-0000-0000"
                  className="mt-1 w-full rounded-lg border border-background-300 bg-background-50 px-4 py-2.5 text-sm outline-none focus:border-foreground-950"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-sm font-semibold">학년 *</span>
              <select
                name="grade"
                required
                defaultValue=""
                className="mt-1 w-full rounded-lg border border-background-300 bg-background-50 px-4 py-2.5 text-sm outline-none focus:border-foreground-950 cursor-pointer"
              >
                <option value="" disabled>학년을 선택해주세요</option>
                <option value="초등">초등</option>
                <option value="중등">중등</option>
                <option value="고등 9학년">고등 9학년</option>
                <option value="고등 10학년">고등 10학년</option>
                <option value="고등 11학년">고등 11학년</option>
                <option value="고등 12학년">고등 12학년</option>
                <option value="해외 국제학교">해외 국제학교</option>
              </select>
            </label>

            <fieldset className="block">
              <legend className="text-sm font-semibold">관심 과목 (복수 선택)</legend>
              <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-2">
                {["수학", "영어", "과학", "제2외국어", "에세이", "입시", "내신", "SAT"].map(
                  (s) => (
                    <label
                      key={s}
                      className="flex items-center gap-2 rounded-lg border border-background-300 bg-background-50 px-3 py-2 text-sm cursor-pointer hover:border-foreground-950"
                    >
                      <input
                        type="checkbox"
                        name="subjects"
                        value={s}
                        className="accent-foreground-950"
                      />
                      {s}
                    </label>
                  ),
                )}
              </div>
            </fieldset>

            <label className="block">
              <span className="text-sm font-semibold">주소</span>
              <input
                type="text"
                name="address"
                placeholder="서울시 강남구"
                className="mt-1 w-full rounded-lg border border-background-300 bg-background-50 px-4 py-2.5 text-sm outline-none focus:border-foreground-950"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold">문의 내용</span>
              <textarea
                name="note"
                rows={5}
                maxLength={500}
                placeholder="궁금하신 내용을 자유롭게 작성해주세요 (최대 500자)"
                className="mt-1 w-full rounded-lg border border-background-300 bg-background-50 px-4 py-2.5 text-sm outline-none focus:border-foreground-950 resize-none"
              />
            </label>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 rounded-full bg-foreground-950 px-6 py-3.5 text-base font-medium text-primary-500 transition hover:bg-foreground-900 disabled:opacity-60 whitespace-nowrap cursor-pointer"
            >
              {status === "submitting" ? "전송 중..." : "문의 보내기"}
            </button>

            {message && (
              <div
                role="status"
                className={`rounded-lg px-4 py-3 text-sm font-medium ${
                  status === "success"
                    ? "bg-accent-100 text-accent-900"
                    : "bg-secondary-100 text-secondary-900"
                }`}
              >
                {message}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-500 section-pad py-16 md:py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground-950">
            지금 바로 무료 모의수업을 신청하세요
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-foreground-950 px-8 py-4 text-base font-medium text-primary-500 transition hover:bg-foreground-900 whitespace-nowrap"
            >
              <i className="ri-arrow-left-line" /> 홈으로
            </a>
            <a
              href="tel:01039510535"
              className="inline-flex items-center gap-2 rounded-full bg-foreground-950 px-8 py-4 text-base font-medium text-primary-500 transition hover:bg-foreground-900 whitespace-nowrap"
            >
              <i className="ri-phone-fill" /> 010-3951-0535
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}