export default function Footer() {
  return (
    <footer className="bg-accent-900 section-pad pt-16 pb-28 text-background-200">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500 text-foreground-950">
                <i className="ri-graduation-cap-fill text-xl" />
              </span>
              <span className="font-heading text-xl text-background-50">
                국제학교 전문과외
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed">
              국내·해외 국제학교 학생을 위한 1:1 맞춤 과외 서비스. IB / AP /
              IGCSE 전 과목 대응 가능한 전문 강사진이 함께합니다.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm">
            <div>
              <h5 className="font-heading text-base text-primary-500">바로가기</h5>
              <ul className="mt-3 space-y-2">
                <li>
                  <a href="/#about" className="hover:text-primary-300 cursor-pointer">
                    소개
                  </a>
                </li>
                <li>
                  <a href="/#teachers" className="hover:text-primary-300 cursor-pointer">
                    강사진
                  </a>
                </li>
                <li>
                  <a href="/#success" className="hover:text-primary-300 cursor-pointer">
                    성적 사례
                  </a>
                </li>
                <li>
                  <a href="/news" className="hover:text-primary-300 cursor-pointer">
                    뉴스
                  </a>
                </li>
                <li>
                  <a href="/trial" className="hover:text-primary-300 cursor-pointer">
                    무료 모의수업 신청
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-heading text-base text-primary-500">문의</h5>
              <ul className="mt-3 space-y-2">
                <li className="flex items-center gap-2">
                  <i className="ri-phone-fill text-primary-400" />
                  <a href="tel:01039510535" className="cursor-pointer hover:text-primary-300">
                    010-3951-0535
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-time-line text-primary-400" />
                  매일 09:00 - 22:00
                </li>
                <li>
                  <a href="/contact" className="hover:text-primary-300 cursor-pointer">
                    문의하기
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-accent-700 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 국제학교 전문과외. All rights reserved.</span>
          <span>개인정보 처리방침 · 이용약관</span>
        </div>
      </div>
    </footer>
  );
}