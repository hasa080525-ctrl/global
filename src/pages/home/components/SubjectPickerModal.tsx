import { useState, type FormEvent } from "react";

type Step = 1 | 2 | 3;

const SUBJECTS: { label: string; icon: string }[] = [
  { label: "수학", icon: "ri-calculator-line" },
  { label: "영어", icon: "ri-book-2-line" },
  { label: "과학", icon: "ri-flask-line" },
  { label: "제2외국어", icon: "ri-translate-2" },
  { label: "에세이", icon: "ri-quill-pen-line" },
  { label: "입시", icon: "ri-graduation-cap-line" },
  { label: "내신", icon: "ri-bar-chart-2-line" },
  { label: "SAT", icon: "ri-file-list-3-line" },
];

const GRADES = [
  "초등",
  "중등",
  "고등 9학년",
  "고등 10학년",
  "고등 11학년",
  "고등 12학년",
  "해외 국제학교",
];

export default function SubjectPickerModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState<Step>(1);
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const close = () => setIsOpen(false);

  const pickSubject = (label: string) => {
    setSubject(label);
    setStep(2);
  };

  const backToStep1 = () => {
    setStep(1);
    setGrade("");
    setError("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!grade) {
      setError("학년을 선택해주세요.");
      return;
    }
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const note = String(formData.get("note") || "").trim();

    if (!name || !phone) {
      setError("학생 이름과 연락처를 입력해주세요.");
      return;
    }

    setSubmitting(true);
    setError("");

    fetch(
      "https://script.google.com/macros/s/AKfycbwOqTTLkqZ_frFyT6N0QcjYZT3jsG0puhq9wRmrQSPxhFgn0fXET3AoGVj4PiHMNHcg/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          site: "국제학교전문과외",
          name,
          phone,
          grade,
          subject,
          message: note || "(없음)",
        }),
      },
    ).catch((err) => console.error("구글시트 전송 실패:", err));

    setSubmitting(false);
    setStep(3);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground-950/65 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="relative w-full max-w-md max-h-[88vh] overflow-y-auto rounded-3xl bg-background-50 p-6 md:p-8 text-left text-foreground-900">
        <button
          type="button"
          onClick={close}
          aria-label="닫기"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-foreground-700 hover:bg-background-200 cursor-pointer"
        >
          <i className="ri-close-line text-xl" />
        </button>

        {step === 1 && (
          <>
            <h3 className="font-heading text-xl md:text-2xl text-foreground-950">
              어떤 과목이 궁금하세요?
            </h3>
            <p className="mt-1.5 text-sm text-foreground-700">
              과목만 고르시면 맞는 선생님을 찾아 연락드립니다
            </p>
            <div className="mt-6 grid grid-cols-2 gap-2.5">
              {SUBJECTS.map((s) => (
                <button
                  key={s.label}
                  type="button"
                  onClick={() => pickSubject(s.label)}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-background-300 bg-background-50 px-3 py-5 text-sm font-bold text-foreground-900 transition hover:border-primary-500 hover:bg-primary-100/40 cursor-pointer"
                >
                  <i className={`${s.icon} text-2xl text-accent-500`} />
                  {s.label}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit}>
            <button
              type="button"
              onClick={backToStep1}
              className="mb-3 inline-flex items-center gap-1 text-sm font-semibold text-foreground-700 hover:text-foreground-950 cursor-pointer"
            >
              <i className="ri-arrow-left-line" /> 다시 고르기
            </button>
            <h3 className="font-heading text-xl text-foreground-950">{subject}</h3>
            <p className="mt-1 text-sm text-foreground-700">
              학년과 연락처를 남겨주시면 맞는 선생님을 연결해드립니다
            </p>

            <p className="mt-5 text-xs font-bold uppercase tracking-wide text-foreground-600">
              학년
            </p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {GRADES.map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGrade(g)}
                  className={`rounded-lg border px-3 py-2.5 text-sm font-semibold cursor-pointer transition ${
                    grade === g
                      ? "border-foreground-950 bg-foreground-950 text-primary-500"
                      : "border-background-300 bg-background-50 text-foreground-900 hover:border-foreground-950"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-wide text-foreground-600">
              연락처
            </p>
            <div className="mt-2 grid gap-3 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold">학생/학부모 이름 *</span>
                <input
                  type="text"
                  name="name"
                  placeholder="홍길동"
                  className="mt-1 w-full rounded-lg border border-background-300 bg-background-50 px-4 py-2.5 text-sm outline-none focus:border-foreground-950"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold">연락처 *</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="010-0000-0000"
                  className="mt-1 w-full rounded-lg border border-background-300 bg-background-50 px-4 py-2.5 text-sm outline-none focus:border-foreground-950"
                />
              </label>
            </div>
            <label className="mt-3 block">
              <span className="text-sm font-semibold">남기실 말씀 (선택)</span>
              <textarea
                name="note"
                rows={2}
                placeholder="현재 학교, 희망 일정 등을 자유롭게 적어주세요"
                className="mt-1 w-full rounded-lg border border-background-300 bg-background-50 px-4 py-2.5 text-sm outline-none focus:border-foreground-950 resize-none"
              />
            </label>

            {error && (
              <div className="mt-3 rounded-lg bg-secondary-100 px-4 py-2.5 text-sm font-medium text-secondary-900">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="mt-5 w-full rounded-full bg-foreground-950 px-6 py-3.5 text-base font-medium text-primary-500 transition hover:bg-foreground-900 disabled:opacity-60 cursor-pointer"
            >
              {submitting ? "전송 중..." : "바로 신청하기"}
            </button>
          </form>
        )}

        {step === 3 && (
          <div className="text-center">
            <div className="text-4xl">🎉</div>
            <h3 className="mt-2 font-heading text-xl text-foreground-950">
              신청이 접수됐어요!
            </h3>
            <p className="mt-2 text-sm text-foreground-700">
              신청 내용이 정상적으로 접수됐습니다.
              <br />
              확인 후 빠르게 연락드리겠습니다.
            </p>
            <a
              href="tel:01039510535"
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-foreground-950 px-6 py-3.5 text-base font-medium text-primary-500 transition hover:bg-foreground-900 cursor-pointer"
            >
              <i className="ri-phone-fill" /> 바로 전화 상담하기 · 010-3951-0535
            </a>
            <a
              href="https://open.kakao.com/o/sOXeVnpi"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 flex items-center justify-center gap-2 rounded-full bg-[#FEE500] px-6 py-3.5 text-base font-bold text-[#191919] transition hover:bg-[#FFD900] cursor-pointer"
            >
              <i className="ri-kakao-talk-fill" /> 카카오톡으로 상담하기
            </a>
            <button
              type="button"
              onClick={close}
              className="mt-4 text-sm font-semibold text-foreground-700 hover:text-foreground-950 cursor-pointer"
            >
              홈페이지 더 둘러보기 →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
