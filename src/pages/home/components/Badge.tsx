export default function Badge() {
  return (
    <section
      id="badge"
      className="bg-background-100 section-pad py-24 md:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto flex h-40 w-40 md:h-48 md:w-48 flex-col items-center justify-center rounded-full border-[8px] border-secondary-500 bg-background-50 text-secondary-600">
          <span className="font-heading text-4xl md:text-5xl">No.1</span>
          <span className="mt-1 text-sm md:text-base font-medium tracking-widest">
            EDUCATION
          </span>
        </div>
        <h4 className="mt-10 font-heading text-3xl md:text-5xl text-foreground-950 leading-tight">
          <a href="#badge" className="cursor-pointer">
            1등이 되는 순간까지,
            <br />
            함께 갑니다
          </a>
        </h4>
      </div>
    </section>
  );
}