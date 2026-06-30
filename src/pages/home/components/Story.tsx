export default function Story() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-foreground-950 text-background-50 section-pad py-24 md:py-28"
    >
      <div
        className="absolute inset-0 bg-rays opacity-30"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary-500 px-4 py-1.5 text-sm md:text-base font-medium text-background-50 whitespace-nowrap">
          <i className="ri-sparkling-2-fill" /> 이제, 공개합니다!
        </span>
        <h4 className="mt-6 font-heading text-4xl md:text-6xl text-primary-500 leading-tight">
          <a href="#story" className="cursor-pointer">
            그동안 꽁꽁 숨겨왔던
            <br />
            진짜 공부 이야기
          </a>
        </h4>
        <p className="mt-6 text-sm md:text-base text-background-200">
          국내·해외 국제학교 학생들과 오랜 시간 쌓아온 맞춤 공부법,
          <br />
          이제는 누구나 만나볼 수 있어요
        </p>
      </div>
    </section>
  );
}