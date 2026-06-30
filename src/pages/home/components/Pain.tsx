const PAINS = [
  { text: "숙제가 너무 많아서 공부할 시간이 없어요", align: "left" },
  { text: "암기 과목은 시험만 보면 머리가 하얘져요", align: "right" },
  { text: "다른 친구들 모르게 성적을 올리고 싶어요", align: "left" },
  { text: "개념 정리가 안 된 채로 진도만 나가고 있어요", align: "right" },
];

export default function Pain() {
  return (
    <section
      id="pain"
      className="bg-background-100 section-pad py-20 md:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <h4 className="text-center font-heading text-3xl md:text-4xl text-foreground-950">
          <a href="#pain" className="cursor-pointer">
            이런 고민, 있으신가요?
          </a>
        </h4>

        <div className="mt-12 flex flex-col gap-5">
          {PAINS.map((p, idx) => (
            <div
              key={idx}
              className={`flex ${
                p.align === "right" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`relative max-w-[85%] rounded-2xl px-5 py-4 text-sm md:text-base font-medium ${
                  p.align === "right"
                    ? "bg-primary-500 text-foreground-950 rounded-tr-sm"
                    : "bg-background-50 border border-background-300/70 text-foreground-900 rounded-tl-sm"
                }`}
              >
                {p.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}