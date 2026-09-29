export default function SisterSite() {
  return (
    <section className="bg-primary-50 section-pad py-12">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-500 text-foreground-950">
            <i className="ri-book-open-line text-2xl" />
          </span>
          <div>
            <p className="font-heading text-lg text-foreground-950">
              영어 전문 사이트, 잉글리시이지
            </p>
            <p className="mt-1 text-sm text-foreground-600">
              파닉스부터 회화, 내신·수능, 토익까지 — 국제학교 커리큘럼이
              아닌 일반 영어 학습이 필요하다면 함께 확인해보세요.
            </p>
          </div>
        </div>
        <a
          href="https://englisheasy.co.kr/"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap rounded-full bg-primary-500 px-6 py-3 text-sm font-medium text-foreground-950 transition hover:bg-primary-400 cursor-pointer"
        >
          잉글리시이지 바로가기
        </a>
      </div>
    </section>
  );
}
