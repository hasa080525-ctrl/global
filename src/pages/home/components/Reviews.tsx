const REVIEWS = [
  {
    text: "학교 시험 범위에 맞춰 핵심만 짚어주셔서 시험기간이 훨씬 편해졌어요.",
    who: "국제학교 10학년 학부모",
  },
  {
    text: "영어로 진행되는 수학 수업이 처음엔 걱정됐는데 금방 익숙해졌어요.",
    who: "국제학교 8학년",
  },
  {
    text: "에세이 첨삭을 받을 때마다 논리가 점점 또렷해지는 게 느껴져요.",
    who: "국제학교 11학년",
  },
  {
    text: "아이 학습 패턴을 정확히 파악하고 수업해주셔서 믿고 맡기고 있어요.",
    who: "학부모",
  },
  {
    text: "Living in Shanghai, time zone was a huge concern — but the online sessions fit perfectly into our schedule. My son's IB Math went from a B to A+ in one semester.",
    who: "Shanghai American School 학부모",
  },
  {
    text: "AP Chemistry was a nightmare before I started tutoring. Now I actually enjoy the subject and my grade jumped from C+ to A-. The tutor explains concepts way better than school lectures.",
    who: "Singapore American School 11학년",
  },
  {
    text: "한국어와 영어를 넘나들며 설명해주셔서 처음엔 반신반의했는데, 확실히 국제학교 커리큘럼을 깊이 이해하고 계세요. GPA 3.0에서 3.7까지 올랐어요.",
    who: "Hong Kong International School 학부모",
  },
  {
    text: "My SAT score plateaued at 1280 for months. After just 8 weeks of targeted sessions, I hit 1510. The test-taking strategies were game-changing — no generic prep, all tailored to my weak spots.",
    who: "Bangkok Patana School 12학년",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-background-100 section-pad py-20 md:py-24"
    >
      <div className="mx-auto max-w-5xl text-center">
        <h4 className="font-heading text-3xl md:text-4xl text-foreground-950">
          <a href="#reviews" className="cursor-pointer">
            학생과 학부모님이 보내주신 후기
          </a>
        </h4>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 text-left">
          {REVIEWS.map((r, idx) => (
            <article
              key={idx}
              className="relative rounded-2xl border border-background-300/70 bg-background-50 p-6 transition hover:-translate-y-1 hover:border-primary-400"
            >
              <i className="ri-double-quotes-l absolute -top-3 left-5 text-3xl text-primary-500" />
              <p className="text-sm md:text-base leading-relaxed text-foreground-800">
                {r.text}
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs md:text-sm font-semibold text-foreground-600">
                <span className="inline-block h-1 w-6 rounded-full bg-primary-500" />
                {r.who}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <a
            href="/success"
            className="inline-flex items-center gap-2 rounded-full bg-foreground-950 px-6 py-3 text-sm font-bold text-primary-500 transition hover:bg-foreground-900 whitespace-nowrap cursor-pointer"
          >
            더 많은 성공 사례 보기 <i className="ri-arrow-right-line" />
          </a>
        </div>
      </div>
    </section>
  );
}