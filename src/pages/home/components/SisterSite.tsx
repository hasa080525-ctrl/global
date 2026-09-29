interface SisterSiteEntry {
  icon: string;
  title: string;
  description: string;
  url: string;
  ctaLabel: string;
}

const SITES: SisterSiteEntry[] = [
  {
    icon: "ri-book-open-line",
    title: "영어 전문 사이트, 잉글리시이지",
    description:
      "파닉스부터 회화, 내신·수능, 토익까지 — 국제학교 커리큘럼이 아닌 일반 영어 학습이 필요하다면 함께 확인해보세요.",
    url: "https://englisheasy.co.kr/",
    ctaLabel: "잉글리시이지 바로가기",
  },
  {
    icon: "ri-code-s-slash-line",
    title: "코딩 전문 사이트, 코딩미",
    description:
      "자바스크립트로 앱·게임을 만들고 파이썬으로 데이터를 분석하는 초중고 1:1 코딩 수업이 필요하다면 함께 확인해보세요.",
    url: "https://coding.me.kr/",
    ctaLabel: "코딩미 바로가기",
  },
];

export default function SisterSite() {
  return (
    <section className="bg-primary-50 section-pad py-12">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        {SITES.map((site) => (
          <div
            key={site.url}
            className="flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-500 text-foreground-950">
                <i className={`${site.icon} text-2xl`} />
              </span>
              <div>
                <p className="font-heading text-lg text-foreground-950">
                  {site.title}
                </p>
                <p className="mt-1 text-sm text-foreground-600">
                  {site.description}
                </p>
              </div>
            </div>
            <a
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-full bg-primary-500 px-6 py-3 text-sm font-medium text-foreground-950 transition hover:bg-primary-400 cursor-pointer"
            >
              {site.ctaLabel}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
