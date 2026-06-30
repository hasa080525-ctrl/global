export default function StickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-background-800 bg-foreground-950 text-background-50">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-3 py-3 text-sm md:gap-3 md:px-4 md:text-base">
        <span className="flex items-center gap-1.5 whitespace-nowrap md:gap-2">
          <i className="ri-graduation-cap-fill text-primary-500" />
          국제학교 전문과외 문의
        </span>
        <a
          href="tel:01039510535"
          className="inline-flex items-center gap-1.5 rounded-full bg-primary-500 px-3 py-2 text-sm tracking-normal text-foreground-950 transition hover:bg-primary-400 whitespace-nowrap cursor-pointer md:gap-2 md:px-5 md:text-base md:tracking-wider"
        >
          <i className="ri-phone-fill" /> 010-3951-0535
        </a>
      </div>
    </div>
  );
}