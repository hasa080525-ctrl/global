import { useState, useMemo } from "react";
import { FAQS } from "@/mocks/faq";

const CATEGORIES = ["전체", "수업방식", "수업과목", "비용", "결과"] as const;

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<(typeof CATEGORIES)[number]>("전체");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = useMemo(
    () => (activeCategory === "전체" ? FAQS : FAQS.filter((item) => item.category === activeCategory)),
    [activeCategory],
  );

  const handleCategoryClick = (category: (typeof CATEGORIES)[number]) => {
    setActiveCategory(category);
    setOpenIndex(0);
  };

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

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryClick(category)}
              className={`rounded-full px-4 py-2 text-xs md:text-sm font-bold transition cursor-pointer whitespace-nowrap ${
                activeCategory === category
                  ? "bg-primary-500 text-foreground-950"
                  : "bg-background-50 text-foreground-600 border border-background-300/70 hover:border-primary-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 space-y-3"
        >
          {filteredFaqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-background-300/70 bg-background-50 transition"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-3 px-5 py-4 md:px-6 md:py-5 text-left cursor-pointer"
                >
                  <span className="flex items-center gap-3 text-sm md:text-base font-medium text-foreground-950 tracking-tight"
                  >
                    <span className="shrink-0 rounded-full bg-accent-100 px-2.5 py-1 text-[11px] font-bold text-accent-700"
                    >
                      {item.category}
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
