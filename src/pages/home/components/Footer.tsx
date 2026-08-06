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
                    수업중인 학교
                  </a>
                </li>
                <li>
                  <a href="/schools/" className="hover:text-primary-300 cursor-pointer">
                    학교별 과외 전체 목록
                  </a>
                </li>
                <li>
                  <a href="/camp" className="hover:text-primary-300 cursor-pointer">
                    2027 겨울캠프
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

        <div className="mt-12 space-y-2 border-t border-accent-700 pt-6 text-xs leading-loose text-background-400">
          <p>
            <b className="mr-2 font-semibold text-background-200">국제학교 정보</b>
            국제학교란 · 국제학교 종류 · 국제학교 순위 · 국제학교 학비 · 국제학교 장단점 · 외국인학교 차이 · 국제학교 vs 특목고
          </p>
          <p>
            <b className="mr-2 font-semibold text-background-200">입학 준비</b>
            국제학교 입학조건 · 입학나이 · 편입 · 전학 · 입학시험 · 인터뷰 준비 · 에세이 작성
          </p>
          <p>
            <b className="mr-2 font-semibold text-background-200">자녀 배경별 상담</b>
            주재원 자녀 교육 · 해외 파견 자녀 · 귀국 자녀 적응 · 이중국적 자녀 · 다문화가정 자녀
          </p>
          <p>
            <b className="mr-2 font-semibold text-background-200">학부모 고민</b>
            영어 조기교육 고민 · 조기유학 고민 · 전학 학습공백 · 해외이주 준비
          </p>
          <p>
            <b className="mr-2 font-semibold text-background-200">송도 해외대학 입시대비</b>
            한국뉴욕주립대학교(Stony Brook) · 한국뉴욕주립대학교(FIT) · 한국조지메이슨대학교 · 유타대학교 아시아캠퍼스 · 겐트대학교 글로벌캠퍼스
          </p>
          <p>
            <b className="mr-2 font-semibold text-background-200">해외 온라인스쿨</b>
            Stanford Online High School · University of Nebraska High School · ASU Prep Digital · The Davidson Academy · Dwight Global Online School · Mt. Everest Academy · iUniversity Prep
          </p>
          <p>
            <b className="mr-2 font-semibold text-background-200">입시 제도</b>
            재외국민전형 · 특례입학 · 해외고교 졸업자 전형 · 영주권자 전형
          </p>
          <p>
            <b className="mr-2 font-semibold text-background-200">과목·시험 과외</b>
            국제학교 과외 · IB 과외 · AP 과외 · IGCSE 과외 · SAT 과외 · ACT 과외 · A-Level 과외 · IB Math AA 과외 · IB Math AI 과외 · IB EE 과외 · TOK 과외 · IB DP 과외 · IB MYP 과외 · 국제학교 지오메트리과외 · 국제학교 프리캘큘러스과외 · IB Literature 과외 · SAT Writing 과외 · IB 물리 과외 · IB 화학 과외 · IB 생물 과외 · AP Physics 과외 · AP Chemistry 과외 · AP Biology 과외 · AP Calculus BC 과외 · IB IA 첨삭 · 국제학교 중국어 과외 · 국제학교 일본어 과외 · 국제학교 스페인어 과외
          </p>
          <p>
            <b className="mr-2 font-semibold text-background-200">지역별 과외</b>
            서울 · 강남 · 제주 · 송도 · 대구 · 부산 · 대전 국제학교 과외
          </p>
          <p>
            <b className="mr-2 font-semibold text-background-200">국내 국제학교</b>
            NLCS · 채드윅 · KIS · SJA · BFS · GSIS · 브랭섬홀아시아 · 청라달튼외국인학교 · 드와이트외국인학교 · 광주국제학교 · 세종 페이스튼 · 오사카 KIS
          </p>
          <p>
            <b className="mr-2 font-semibold text-background-200">해외 국가·도시별 과외</b>
            베트남 · 태국 · 인도네시아 · 말레이시아 · 중국 · 일본 · 미국 · 캐나다 · 유럽 · 두바이 · 하노이 · 호치민 · 방콕 · 자카르타 · 상하이 · 도쿄 국제학교 과외 · 마닐라 국제학교 과외
          </p>
          <p>
            <b className="mr-2 font-semibold text-background-200">겨울·방학 캠프</b>
            겨울캠프 · 방학캠프 · 해외 방학캠프 · 캐나다 겨울캠프 · 캐나다 홈스테이 캠프 · 뉴질랜드 어학캠프 · 뉴질랜드 홈스테이 캠프 · 일본 어학캠프 · 일본 교토 캠프 · 나이아가라폴스 캠프 · 오클랜드 홈스테이 캠프 · Waiuku College 캠프 · Calvary Christian School 캠프 · 세인트캐서린 캠프 · 아이비리그 대학 탐방 캠프 · 마오리 문화 체험 캠프
          </p>
          <p>
            <b className="mr-2 font-semibold text-background-200">합격사례 대학</b>
            하버드 · 스탠포드 · MIT · 예일 · 컬럼비아 · Cornell University · UC Berkeley · NYU · University of Chicago · Johns Hopkins University · Duke University · Brown University · Princeton University · University of Michigan · University of Tokyo · Northwestern University 합격 과외 · 아이비리그 합격 사례 · Top 20 대학 합격 사례
          </p>
          <p>
            <b className="mr-2 font-semibold text-background-200">선생님 자격·특징</b>
            IB Examiner 선생님 과외 · Cambridge CELTA 과외 · IB Extended Essay Examiner 과외 · IB Math HL Examiner 과외 · 원어민 과외
          </p>
          <p>
            <b className="mr-2 font-semibold text-background-200">입시·상담 서비스</b>
            국제학교 편입 과외 · 국제학교 전학 과외 · 국제학교 입학 인터뷰 대비 · SSAT 대비 과외 · MAP 테스트 대비 과외 · IB Internal Assessment 과외 · 국제학교 조기유학 · 국제학교 대입 컨설팅 · 방학 집중 과외 · 유학상품 상담 · Common App Essay 컨설팅 · 전학 적응 과외
          </p>
          <p>
            <b className="mr-2 font-semibold text-background-200">입시 연도·서비스</b>
            2026 입시 · 2027 입시 · 2026 IB DP · 2027 IB DP · 2026-27 Common App · 무료 체험 수업 · 국제학교 내신 관리 · 국제학교 GPA 향상 · 국제학교 과외 비용 · 국제학교 유학 상담 · 국제학교 온라인 과외 후기 · 국제학교 학생 대상 수업
          </p>
          <p>
            <b className="mr-2 font-semibold text-background-200">해외연수 캠프 유형</b>
            해외 공립학교 체험 캠프 · 학생 해외연수 캠프 · 초등 해외캠프 · 중고등 해외캠프
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-accent-700 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 국제학교 전문과외. All rights reserved.</span>
          <span>개인정보 처리방침 · 이용약관</span>
        </div>
      </div>
    </footer>
  );
}