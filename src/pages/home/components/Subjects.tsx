const ROWS = [
  {
    subject: "수학",
    detail: "IB / AP / 알지브라 / 지오메트리 / 프리캘큘러스",
  },
  {
    subject: "영어",
    detail: "ESSAY 첨삭, LITERATURE, SAT WRITING",
  },
  {
    subject: "과학",
    detail: "PHYSICS, BIOLOGY, CHEMISTRY",
  },
  {
    subject: "제2외국어",
    detail:
      "중국어: IGCSE / IB CHINESE B 대비\n일본어: IB JAPANESE B / BEGINNER 대비\n스페인어: IB SPANISH AB INITIO / SL",
  },
  {
    subject: "입학·전학 준비",
    detail:
      "국제학교 입학·전학 준비: SSAT 대비 / MAP 테스트 대비 / 입학 인터뷰 대비 / 아이비리그 진학 준비",
  },
];

export default function Subjects() {
  return (
    <section
      id="subjects"
      className="bg-background-50 section-pad py-20 md:py-24"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h4 className="font-heading text-3xl md:text-4xl text-foreground-950">
          <a href="#subjects" className="cursor-pointer">
            국제학교 과목
          </a>
        </h4>
        <p className="mt-3 text-sm md:text-base text-foreground-700">
          국제학교 학생이 대상으로 진행하는 모든 학습 전 영역을 전담합니다
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-background-300/70 bg-background-50 text-left">
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr className="bg-primary-500 text-foreground-950">
                <th className="w-32 md:w-44 px-4 md:px-6 py-4 font-heading">
                  과목
                </th>
                <th className="px-4 md:px-6 py-4 font-heading">특징</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, idx) => (
                <tr
                  key={row.subject}
                  className={
                    idx % 2 === 0 ? "bg-background-50" : "bg-background-100"
                  }
                >
                  <td className="px-4 md:px-6 py-4 align-top font-medium text-foreground-950">
                    {row.subject}
                  </td>
                  <td className="px-4 md:px-6 py-4 whitespace-pre-line text-foreground-800">
                    {row.detail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8">
          <a
            href="/trial"
            className="inline-flex items-center gap-2 rounded-full bg-foreground-950 px-6 py-3 text-sm font-bold text-primary-500 transition hover:bg-foreground-900 whitespace-nowrap cursor-pointer"
          >
            무료 모의수업 신청하기 <i className="ri-arrow-right-line" />
          </a>
        </div>
      </div>
    </section>
  );
}