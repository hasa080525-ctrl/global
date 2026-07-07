const REVIEWS = [
  {
    text: "IB 내부평가 마감 때마다 방향을 못 잡았는데, 체크리스트로 순서를 짚어주시니 훨씬 수월했어요.",
    who: "서울국제학교 12학년 학부모",
  },
  {
    text: "과학 개념을 우리말로 먼저 이해시켜주고 나서 영어 용어로 연결해주셔서 헷갈리지 않았어요.",
    who: "부산국제학교 9학년",
  },
  {
    text: "발표 수업 전에 리허설까지 봐주셔서 자신감 있게 발표할 수 있었어요.",
    who: "대전외국인학교 10학년",
  },
  {
    text: "전학 온 지 얼마 안 돼 진도를 따라가기 힘들어했는데, 학교 커리큘럼에 맞춰 빠르게 보충해주셨어요.",
    who: "대구국제학교 학부모",
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