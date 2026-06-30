import { useState, type FormEvent } from "react";

const FORM_ENDPOINT = "https://readdy.ai/api/form/d8v0psv43hkdi0qge8b0";

type Status = "idle" | "submitting" | "success" | "error";

export default function Apply() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
    const honeypot = String(formData.get("website_alt") || "").trim();

    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const grade = String(formData.get("grade") || "").trim();
    const subjects = formData.getAll("subjects").map(String);
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
      // Silent success for bots
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
    if (note) body.append("note", note);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      });
      if (!res.ok) throw new Error("network");
      setStatus("success");
      setMessage("신청이 접수되었습니다. 곧 연락드리겠습니다.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("일시적인 오류로 신청에 실패했습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  return (
    <section
      id="apply"
      className="bg-primary-500 section-pad py-24 md:py-28 text-foreground-950"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h4 className="font-heading text-3xl md:text-5xl leading-tight">
          <a href="#apply" className="cursor-pointer">
            학생들이 직접 선택한
            <br />
            국제학교 전문과외
          </a>
        </h4>
        <p className="mt-4 text-sm md:text-base font-semibold">
          무료 모의수업 신청
        </p>

        <a
          href="tel:01039510535"
          className="mt-6 inline-flex items-center gap-3 rounded-full bg-foreground-950 px-8 py-4 text-lg md:text-2xl font-heading text-primary-500 transition hover:bg-foreground-900 whitespace-nowrap cursor-pointer"
        >
          <i className="ri-phone-fill" /> 010-3951-0535
        </a>
        <p className="mt-3 text-xs md:text-sm font-medium">
          클릭하면 바로 전화 연결됩니다
        </p>

        <form
          data-readdy-form
          id="apply-form"
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto mt-12 grid gap-4 rounded-3xl bg-background-50 p-6 md:p-8 text-left text-foreground-900"
        >
          <h5 className="font-heading text-xl md:text-2xl text-foreground-950 text-center">
            온라인 신청서 작성하기
          </h5>

          {/* honeypot */}
          <div className="field-alt-extra" aria-hidden="true">
            <label>
              Website
              <input
                type="text"
                name="website_alt"
                tabIndex={-1}
                autoComplete="off"
              />
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
              <option value="" disabled>
                학년을 선택해주세요
              </option>
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
            <span className="text-sm font-semibold">문의 내용</span>
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
            className="mt-2 rounded-full bg-foreground-950 px-6 py-3.5 text-base font-medium text-primary-500 transition hover:bg-foreground-900 disabled:opacity-60 whitespace-nowrap cursor-pointer"
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
  );
}