import { useState } from "react";
import { FAQS } from "@/mocks/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-background-100 section-pad py-20 md:py-24"
    >
      <div className="mx-auto max-w-4xl"
      >
        <h4 className="text-center font-heading text-3xl md:text-4xl text-foreground-950"
        >
          <a href="#faq" className="cursor-pointer"
          >자주 묻는 질문</a>
        </h4>
        <p className="mt-3 text-center text-sm md:text-base text-foreground-700"
        >
          궁금하신 점이 있다면 언제든지 문의해주세요
        </p>

        <div className="mt-12 space-y-3"
        >
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-background-300/70 bg-background-50 transition"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-3 px-5 py-4 md:px-6 md:py-5 text-left cursor-pointer"
                >
                  <span className="flex items-center gap-3 text-sm md:text-base font-medium text-foreground-950 tracking-tight"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-500 font-heading text-sm text-foreground-950"
                    >
                      {idx + 1}
                    </span>
                    {item.question}
                  </span>
                  <i
                    className={`shrink-0 text-lg text-foreground-600 transition-transform ${
                      isOpen ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-5 pb-5 md:px-6 md:pb-6 text-sm md:text-base leading-relaxed text-foreground-700"
                  >
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}