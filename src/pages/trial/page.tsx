import { useState, type FormEvent } from "react";
import JsonLd from "@/components/base/JsonLd";

const siteUrl = import.meta.env.VITE_SITE_URL || "https://example.com";

const FORM_ENDPOINT = "https://readdy.ai/api/form/d8v0psv43hkdi0qge8b0";

type Status = "idle" | "submitting" | "success" | "error";

export default function TrialPage() {
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
    const note = String(formData.get("note") || "").trim();
    const preferredDate = String(formData.get("preferred_date") || "").trim();
    const preferredTime = String(formData.get("preferred_time") || "").trim();

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
    body.append("grade", grade);
    body.append("subjects", subjects.join(", "));
    if (preferredDate) body.append("preferred_date", preferredDate);
    if (preferredTime) body.append("preferred_time", preferredTime);
    if (note) body.append("note", note);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error("network");
      setStatus("success");
      setMessage("무료 모의수업 신청이 완료되었습니다. 24시간 내 연락드리겠습니다.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("일시적인 오류입니다. 잠시 후 다시 시도해주세요.");
    }
  };

  return (
    <main className="bg-background-50 text-foreground-950">
      <title>무료 모의수업 신청 | 서울 국제학교전문과외 – IB·SAT 1:1 화상 체험</title>
      <meta name="description" content="서울 국제학교전문과외 - 1시간 내외의 실제 국제학교 과외 수업을 무료로 체험하세요. IB·AP·IGCSE·SAT 커리큘럼에 맞춘 1:1 화상 모의수업으로 학생의 현재 수준 진단과 맞춤 학습 계획을 제시합니다. 지금 바로 무료 모의수업을 신청하세요." />
      <meta name="keywords" content="무료 체험 수업, 국제학교 과외 무료, IB 과외 무료 체험, AP 과외 무료, IGCSE 무료 체험, A-Level 무료 체험, SAT 과외 무료, ACT 과외 무료, 화상 과외 체험, 온라인 과외 체험, 국제학교 1:1 과외, 무료 모의수업, 국제학교 과외 비용, 국제학교 내신 무료 상담, IB Math AA 무료 체험, IB Math AI 무료 체험" />
      <link rel="canonical" href={`${siteUrl}/trial`} />
      <meta property="og:title" content="무료 모의수업 신청 | 서울 국제학교전문과외 – IB·SAT 1:1 화상 체험" />
      <meta property="og:description" content="100% 무료 1:1 화상 모의수업. IB·AP·IGCSE·SAT 맞춤 수업을 체험하고 선생님과의 궁합을 확인하세요. 지금 바로 신청하세요." />
      <meta property="og:url" content={`${siteUrl}/trial`} />
      <meta property="og:image" content="https://kukje-gwaoe.co.kr/og-image.png" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="국제학교전문과외" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="무료 모의수업 신청 | 서울 국제학교전문과외 – IB·SAT 1:1 화상 체험" />
      <meta name="twitter:description" content="100% 무료 1:1 화상 모의수업. IB·AP·IGCSE·SAT 맞춤 수업을 체험하고 선생님과의 궁합을 확인하세요. 지금 바로 신청하세요." />
      <meta name="twitter:image" content="https://kukje-gwaoe.co.kr/og-image.png" />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "무료 모의수업 신청 - 서울 국제학교전문과외",
        "description": "서울 국제학교전문과외 - IB·AP·IGCSE·SAT 맞춤 1:1 화상 무료 모의수업. 학생의 현재 수준과 학교 진도에 맞춰 1시간 내외로 진행되며 선생님과의 궁합을 확인할 수 있습니다.",
        "url": `${siteUrl}/trial`,
        "about": {
          "@type": "Service",
          "name": "무료 모의수업",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "국제학교 전문과외",
            "telephone": "+82-10-3951-0535",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "서울",
              "addressCountry": "KR"
            }
          },
          "description": "서울 국제학교전문과외 - IB·AP·IGCSE·SAT 등 국제학교 커리큘럼에 특화된 1:1 맞춤형 무료 화상 모의수업. 학생의 현재 수준과 학교 진도에 맞춰 1시간 내외로 진행됩니다.",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "KRW",
            "description": "무료 체험 수업",
            "availability": "https://schema.org/InStock"
          },
          "areaServed": [
            { "@type": "Country", "name": "South Korea" },
            { "@type": "Country", "name": "International" }
          ],
          "termsOfService": "전화 상담 후 학생 맞춤형 모의수업이 준비됩니다."
        }
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "국제학교 전문과외", "item": siteUrl },
          { "@type": "ListItem", "position": 2, "name": "무료 모의수업 신청", "item": `${siteUrl}/trial` }
        ]
      }} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground-950 text-background-50 section-pad pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-polka opacity-80" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-4 py-1.5 text-xs md:text-sm font-bold text-foreground-950">
            <i className="ri-gift-fill" /> 100% 무료
          </span>
          <h1 className="mt-5 font-heading text-4xl md:text-6xl text-primary-500">
            <a href="#" className="cursor-pointer">무료 모의수업<br />신청하기</a>
          </h1>
          <p className="mt-4 text-sm md:text-base text-background-200">
            1시간 내외의 실제 수업을 체험하며,<br />
            선생님과의 궁합과 학습 방향을 확인해보세요
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-pad py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                icon: "ri-user-voice-line",
                title: "1:1 맞춤 수업",
                desc: "학생의 현재 수준과 학교 진도에 맞춰 1시간 실제 수업을 진행합니다.",
              },
              {
                icon: "ri-route-line",
                title: "커리큘럼 제안",
                desc: "수업 후 학생의 강점과 약점을 분석하여 맞춤 학습 계획을 제시합니다.",
              },
              {
                icon: "ri-shield-check-line",
                title: "부담 없는 선택",
                desc: "모의수업만으로도 수업 스타일과 궁합을 확인한 뒤 결정하세요.",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="rounded-3xl border border-background-300/70 bg-background-50 p-6 md:p-8 text-center transition hover:-translate-y-1"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500 text-foreground-950">
                  <i className={`${b.icon} text-2xl`} />
                </div>
                <h3 className="mt-4 font-heading text-lg md:text-xl text-foreground-950">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm text-foreground-700">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-background-100 section-pad py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h4 className="text-center font-heading text-3xl md:text-4xl text-foreground-950">
            <a href="#" className="cursor-pointer">무료 모의수업 신청</a>
          </h4>
          <p className="mt-3 text-center text-sm md:text-base text-foreground-700">
            아래 내용을 작성해주시면 상담 전문가가 연락드립니다
          </p>

          <form
            data-readdy-form
            id="trial-form"
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
                <span className="text-sm font-semibold">학생/학부모 이름 *</span>
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

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold">희망 날짜</span>
                <input
                  type="date"
                  name="preferred_date"
                  className="mt-1 w-full rounded-lg border border-background-300 bg-background-50 px-4 py-2.5 text-sm outline-none focus:border-foreground-950 cursor-pointer"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold">희망 시간대</span>
                <select
                  name="preferred_time"
                  defaultValue=""
                  className="mt-1 w-full rounded-lg border border-background-300 bg-background-50 px-4 py-2.5 text-sm outline-none focus:border-foreground-950 cursor-pointer"
                >
                  <option value="" disabled>시간대 선택</option>
                  <option value="오전 (09:00-12:00)">오전 (09:00-12:00)</option>
                  <option value="오후 (12:00-15:00)">오후 (12:00-15:00)</option>
                  <option value="오후 (15:00-18:00)">오후 (15:00-18:00)</option>
                  <option value="저녁 (18:00-21:00)">저녁 (18:00-21:00)</option>
                  <option value="협의">협의</option>
                </select>
              </label>
            </div>

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
              <span className="text-sm font-semibold">추가 문의</span>
              <textarea
                name="note"
                rows={4}
                maxLength={500}
                placeholder="현재 학교, 학습 상황, 희망 일정 등을 자유롭게 적어주세요 (최대 500자)"
                className="mt-1 w-full rounded-lg border border-background-300 bg-background-50 px-4 py-2.5 text-sm outline-none focus:border-foreground-950 resize-none"
              />
            </label>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 rounded-full bg-foreground-950 px-6 py-3.5 text-base font-bold text-primary-500 transition hover:bg-foreground-900 disabled:opacity-60 whitespace-nowrap cursor-pointer"
            >
              {status === "submitting" ? "전송 중..." : "무료 모의수업 신청하기"}
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

      {/* Trust signals */}
      <section className="bg-accent-900 text-background-50 section-pad py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { num: "350+", label: "누적 수업 학생" },
              { num: "85%", label: "목표 성적 달성" },
              { num: "8~15", label: "강사 평균 경력" },
              { num: "0", label: "무료 모의수업 비용" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-heading text-3xl md:text-4xl text-primary-500">
                  {s.num}
                </div>
                <div className="mt-1 text-xs md:text-sm font-medium text-background-300">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-500 section-pad py-16 md:py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground-950">
            더 궁금한 점이 있으신가요?
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground-950 px-8 py-4 text-base font-bold text-primary-500 transition hover:bg-foreground-900 whitespace-nowrap"
            >
              <i className="ri-message-3-line" /> 1:1 문의하기
            </a>
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-foreground-950 px-8 py-4 text-base font-bold text-primary-500 transition hover:bg-foreground-900 whitespace-nowrap"
            >
              <i className="ri-arrow-left-line" /> 홈으로
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}