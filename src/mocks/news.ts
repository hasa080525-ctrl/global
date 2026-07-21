export interface NewsSection {
  heading: string;
  body: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  /** Short (<=80 char) description for meta/OG tags. Falls back to `summary` when omitted. */
  metaDescription?: string;
  sections: NewsSection[];
  image: string;
}

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "34",
    title: "UAT-UK(ESAT·TARA·TMUA) 예약 7월 20일 시작 — 옥스포드·케임브리지·임페리얼 공통시험",
    category: "입시",
    date: "2026-07-21",
    summary:
      "옥스포드가 자체 입학시험을 폐지하고 도입하는 UAT-UK 공통시험(ESAT·TARA·TMUA)의 예약 접수가 7월 20일 시작됐습니다. 계정 생성은 6월 1일부터 가능했고, 예약 마감은 9월 28일, 시험은 10월에 치러집니다.",
    metaDescription:
      "UAT-UK(ESAT·TARA·TMUA) 시험 예약이 7월 20일 시작됐습니다. 마감은 9월 28일, 시험은 10월입니다.",
    sections: [
      {
        heading: "예약 접수, 7월 20일부터",
        body: "옥스포드·케임브리지·임페리얼 칼리지 런던이 공동 도입하는 UAT-UK(University Admissions Test UK) 시험의 예약 접수가 2026년 7월 20일 시작됐습니다. 앞서 6월 1일부터 계정 생성은 가능했지만, 실제 시험 일정 예약은 이번 주부터 가능해진 것입니다.",
      },
      {
        heading: "예약 마감 9월 28일, 시험은 10월",
        body: "예약은 9월 28일 마감되며, 응시가 필요한 모든 지원자는 2026년 10월 중 Pearson VUE 시험장에서 컴퓨터 기반으로 응시합니다. 옥스포드 지원 시 UCAS 마감(10월 15일)보다 시험 예약 마감이 먼저 돌아오므로, 지원 대학과 전공을 이미 정했다면 예약을 서두르는 것이 안전합니다.",
      },
      {
        heading: "전공별로 셋 중 하나",
        body: "공학·과학 계열은 ESAT(Engineering and Science Admissions Test), 학문적 추론 역량을 보는 전형은 TARA(Test of Academic Reasoning for Admissions), 수학 계열은 TMUA(Test of Mathematics for University Admission) 중 지원 전공에 맞는 시험을 응시합니다. 의학·법학 전형에 쓰이는 UCAT·LNAT는 이번 개편과 무관하게 기존대로 유지됩니다.",
      },
      {
        heading: "국제학교 학생이 지금 할 것",
        body: "옥스포드·케임브리지·임페리얼 등 UAT-UK 시험을 요구하는 대학에 지원할 예정이라면, 계정을 아직 만들지 않았다면 지금 바로 만들고 전공에 맞는 시험 종류(ESAT/TARA/TMUA)를 확인한 뒤 예약을 진행하세요. 같은 시험을 요구하는 여러 대학에 지원하더라도 응시는 1회로 충분합니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Student%20registering%20for%20university%20admissions%20test%20on%20laptop%20with%20UK%20university%20brochures%2C%20Oxford%20Cambridge%20application%20concept%2C%20professional%20educational%20photography%2C%20bright%20natural%20lighting&width=400&height=250&seq=news-34&orientation=landscape",
  },
  {
    id: "33",
    title: "U.S. News 2026-27 세계대학순위 발표 — 옥스퍼드 4위·칭화대 첫 톱10 진입",
    category: "유학",
    date: "2026-07-21",
    summary:
      "U.S. News & World Report가 6월 16일 발표한 2026-27 Best Global Universities 순위에서 옥스퍼드(4위)·케임브리지(5위)가 톱10을 지켰고, 칭화대가 처음으로 톱10에 진입했습니다. QS 순위와는 평가 기준이 달라 함께 참고할 만합니다.",
    metaDescription:
      "U.S. News 2026-27 세계대학순위, 옥스퍼드 4위·칭화대 첫 톱10 진입 — QS와 평가 기준이 다릅니다.",
    sections: [
      {
        heading: "무엇이 발표됐나",
        body: "U.S. News & World Report가 6월 16일 2026-27 Best Global Universities 순위를 발표했습니다. 100개국 이상 2,250개 이상 대학을 연구 실적과 학술 평판 중심으로 평가한 순위로, 앞서 소개된 QS 순위(취업률·평판 등 종합 지표 중심)와는 평가 방법론이 다릅니다.",
      },
      {
        heading: "상위권, 대체로 안정적",
        body: "상위 5개교는 전년과 큰 변화가 없었습니다. 옥스퍼드가 4위, 케임브리지가 5위로 톱10을 유지했습니다. 다만 그 아래 순위권에서는 상당한 변동이 있었습니다.",
      },
      {
        heading: "칭화대, 첫 톱10 진입 — 아시아권 강세",
        body: "칭화대가 처음으로 톱10에 진입해 UC버클리·예일·컬럼비아 등을 제치고 6위를 차지했습니다. 미국 대학 대부분이 순위를 낮춘 반면, 아시아·중동 소재 대학들이 두드러진 상승세를 보였습니다.",
      },
      {
        heading: "두 순위를 함께 보는 법",
        body: "이 순위는 연구·학술 실적에 무게를 둔 지표라, 학부 입시나 실제 학업 환경을 보려면 QS·THE 등 다른 순위와 함께 비교하는 것이 정확합니다. 대학원·연구 중심 진로를 고려하는 학생이라면 이번 U.S. News 순위의 학과별·분야별 세부 순위도 참고할 만합니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=World%20university%20rankings%20report%20on%20laptop%20screen%20with%20global%20map%2C%20academic%20research%20concept%2C%20professional%20educational%20photography%2C%20bright%20natural%20lighting&width=400&height=250&seq=news-33&orientation=landscape",
  },
  {
    id: "32",
    title: "케임브리지 인터내셔널 6월 시험 결과, 8월 11일 발표 — 디지털 응시 얼리어답터 확대",
    category: "커리큘럼",
    date: "2026-07-21",
    summary:
      "케임브리지 인터내셔널의 2026년 6월 시험 세션 결과가 8월 11일(영국 서머타임 기준 오전 6시) 발표됩니다. IGCSE 일부 과목의 디지털 응시 얼리어답터 프로그램도 유럽·중동·북아프리카·미국 지역으로 확대되고 있습니다.",
    metaDescription:
      "케임브리지 인터내셔널 6월 시험 결과가 8월 11일 발표됩니다. 디지털 응시 얼리어답터도 확대됩니다.",
    sections: [
      {
        heading: "결과 발표, 8월 11일",
        body: "2026년 6월 시험 세션에 응시한 케임브리지 IGCSE·AS/A 레벨 학생들의 성적이 8월 11일(화) 영국 서머타임 기준 오전 6시부터 순차 공개됩니다. 학교를 통해 성적을 확인할 수 있으며, 재채점(Enquiry about Results) 신청 마감일도 함께 안내되므로 학교 공지를 미리 확인해두는 것이 좋습니다.",
      },
      {
        heading: "디지털 응시, 얼리어답터 프로그램 확대",
        body: "앞서 도입이 발표된 디지털 시험이 얼리어답터 프로그램(Early Adopter Programme)을 통해 유럽·중동·북아프리카(MENA)·미국 지역 학교로 확대되고 있습니다. IGCSE 생물·화학·물리·회계·경제 객관식 문항을 노트북으로 응시하는 방식이며, 참여는 학교가 신청한 경우에만 적용됩니다.",
      },
      {
        heading: "국제학교 학생이 확인할 것",
        body: "6월 시험에 응시했다면 8월 11일 성적 발표 전까지 학교의 EAR(재채점) 신청 마감일을 미리 확인해두세요. 소속 학교가 디지털 응시 얼리어답터 프로그램에 참여하는지도 학교 측에 문의해두면, 다음 시험 준비 방식을 미리 계획할 수 있습니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Student%20checking%20Cambridge%20IGCSE%20exam%20results%20on%20laptop%20with%20calendar%2C%20international%20school%20results%20day%20concept%2C%20professional%20educational%20photography%2C%20bright%20natural%20lighting&width=400&height=250&seq=news-32&orientation=landscape",
  },
  {
    id: "31",
    title: "美 연방 학자금대출 개편 7월 시행 — 페어런트 플러스 첫 상한, 그래드 플러스 폐지",
    category: "유학",
    date: "2026-07-21",
    summary:
      "2025년 제정된 '하나의 크고 아름다운 법안(OBBBA)'에 따른 미국 연방 학자금대출 개편이 7월 1일부터 시행됐습니다. 부모 대상 페어런트 플러스 대출에 사상 최초로 상한이 생기고, 대학원생용 그래드 플러스 대출은 신규 차입이 폐지됩니다.",
    metaDescription:
      "美 페어런트 플러스 대출에 첫 상한이 생기고 그래드 플러스는 폐지됩니다. 7월 1일 시행된 변경사항을 정리했습니다.",
    sections: [
      {
        heading: "무엇이 바뀌었나 — 7월 1일부로 시행",
        body: "2025년 7월 서명된 '하나의 크고 아름다운 법안(One Big Beautiful Bill Act)'에 따른 연방 학자금대출 개편이 2026년 7월 1일부터 실제 적용되기 시작했습니다. 기존에는 등록금 총액(Cost of Attendance) 한도까지 제한 없이 빌릴 수 있었던 부모 대상 '페어런트 플러스(Parent PLUS)' 대출에 사상 처음으로 상한이 생겼고, 대학원생이 직접 빌리는 '그래드 플러스(Grad PLUS)' 대출은 신규 차입이 아예 막혔습니다.",
      },
      {
        heading: "페어런트 플러스, 연 2만 달러·평생 6만 5천 달러로 제한",
        body: "새 규정에서 페어런트 플러스 대출은 자녀 1인당 연 2만 달러, 평생 누적 6만 5천 달러까지만 빌릴 수 있습니다. 학비가 이보다 높은 사립대·기숙형 유학 비용을 대출로 메워온 가정이라면, 부족분을 저축이나 다른 재원으로 대체할 계획을 다시 세워야 합니다.",
      },
      {
        heading: "그래드 플러스 폐지, 기존 차입자는 최대 3년 경과규정",
        body: "그래드 플러스 대출은 2026년 7월부로 신규 대출이 전면 폐지됩니다. 이미 대출을 받아온 재학생은 기존 조건으로 최대 3년, 또는 과정을 마칠 때까지 중 먼저 도래하는 시점까지는 계속 대출받을 수 있는 경과 규정이 적용됩니다.",
      },
      {
        heading: "F-1 유학생과는 무관 — 대상은 시민권·영주권자",
        body: "이번 개편은 미국 연방 학자금대출 제도 자체의 변경으로, F-1 학생비자로 유학하는 국제학생은 애초에 연방 대출 자격이 없어 직접적인 영향이 없습니다. 다만 미국 시민권·영주권을 보유한 국제학교 재학생이나 그 부모가 시민권·영주권자인 가정이라면 새 상한선이 실제 학비 조달 계획에 영향을 줄 수 있습니다.",
      },
      {
        heading: "국제학교 학생·학부모가 확인할 것",
        body: "자녀가 미국 시민권·영주권을 보유해 미국 대학 진학을 계획 중이라면, 목표 대학의 예상 등록금과 새로 제한된 대출 한도의 차액을 미리 계산해 저축·장학금·민간 학자금 대출 등 대체 재원 계획을 세워두는 것이 안전합니다. 신분에 따라 적용 여부가 달라지므로 정확한 자격은 지원 대학 재정지원처(Financial Aid Office)에 직접 확인하는 것이 가장 확실합니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=US%20federal%20student%20loan%20documents%20and%20calculator%20on%20desk%20with%20American%20flag%2C%20financial%20aid%20planning%20concept%2C%20professional%20editorial%20photography%2C%20clean%20natural%20lighting&width=400&height=250&seq=news-31&orientation=landscape",
  },
  {
    id: "30",
    title: "ETS, ACT 인수 완료 — SAT·ACT 두 시험 모두 한 회사 손에",
    category: "입시",
    date: "2026-06-30",
    summary:
      "ETS가 6월 30일 ACT를 인수했습니다. 시험 형식·응시료·일정에 당장의 변화는 없지만, SAT와 ACT를 사실상 한 회사가 함께 운영하게 되는 첫 사례입니다.",
    metaDescription:
      "ETS가 6월 30일 ACT를 인수했습니다. 시험 형식·응시료·일정에 당장의 변화는 없습니다.",
    sections: [
      {
        heading: "인수 배경 — 흔들리는 응시자 수와 SAT 위탁 상실",
        body: "ACT 응시자는 2019년 178만 명에서 2025년 138만 명으로 줄었고, 2023년 대규모 감원과 2024년 사모펀드 넥서스캐피탈 인수를 거쳤습니다. ETS 역시 2년 전 College Board와의 SAT 운영 위탁 계약을 잃고 GRE·TOEFL 응시자도 줄어드는 상황이라, 두 기관 모두 표준화 시험 시장 재편 압박을 받아왔습니다.",
      },
      {
        heading: "당장 바뀌는 것은 없다",
        body: "ETS는 이번 인수로 시험 형식, 응시료, 일정에 즉각적인 변화는 없다고 밝혔습니다. ETS CEO는 '교육 접근성과 취업 기회 확대'를 목표로 한다고 언급했지만, 구체적인 통합 계획은 아직 공개되지 않았습니다.",
      },
      {
        heading: "ACT는 이미 'Enhanced ACT'로 개편 중",
        body: "ACT는 이번 인수와 별개로 2025년 9월(전국 주말 시험) 및 2026년 4월(스쿨데이 시험)부터 과학 영역을 완전 선택과목으로 전환했습니다. 새 종합점수는 과학을 제외한 영어·수학·독해 3개 영역 평균으로 계산되며, 과학을 추가로 응시하면 별도 점수와 STEM 점수를 받습니다.",
      },
      {
        heading: "국제학교 학생이 지켜볼 것",
        body: "당장 응시 전략을 바꿀 필요는 없지만, SAT와 ACT를 모두 보유하게 된 ETS가 향후 두 시험을 어떻게 통합하거나 차별화할지에 따라 선택의 셈법이 달라질 수 있습니다. 올해 응시를 앞둔 학생은 우선 현재 발표된 일정과 형식 그대로 준비하면 됩니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=SAT%20and%20ACT%20exam%20answer%20sheets%20side%20by%20side%20on%20desk%20with%20pencil%2C%20standardized%20testing%20concept%2C%20clean%20professional%20educational%20photography%2C%20bright%20natural%20lighting&width=400&height=250&seq=news-30&orientation=landscape",
  },
  {
    id: "29",
    title: "옥스포드, 2027학년도 입시부터 자체 입학시험 폐지 — UAT-UK 공통시험으로",
    category: "유학",
    date: "2026-02-06",
    summary:
      "옥스포드가 2027학년도 입시부터 MAT·PAT 등 8개 자체 시험을 없애고, 임페리얼·케임브리지와 함께 만든 UAT-UK 공통시험(ESAT·TARA·TMUA)으로 전환합니다.",
    metaDescription:
      "옥스포드가 2027학년도 입시부터 자체 시험을 없애고 UAT-UK 공통시험으로 전환합니다.",
    sections: [
      {
        heading: "8개 자체 시험 폐지, UAT-UK로 통합",
        body: "AHCAAT, BMSAT, CAT, MAT, MLAT, PAT, PhilAT, TSA 등 옥스포드가 자체 운영해온 8개 입학시험이 2026학년도를 끝으로 폐지됩니다. 대신 임페리얼 칼리지 런던과 케임브리지 대학이 설립한 비영리 UAT-UK(University Admissions Test UK)의 컴퓨터 기반 시험으로 전환하며, 최소 3년간 이 체제로 운영될 예정입니다.",
      },
      {
        heading: "전공별로 ESAT·TARA·TMUA 중 하나",
        body: "16개 과정 지원자는 전공에 따라 공학·과학 계열은 ESAT, 학문적 추론 역량을 보는 TARA, 수학 계열은 TMUA 중 하나를 응시하게 됩니다. 의학·의학대학원 전형은 기존대로 UCAT을, 법학 전형은 LNAT을 그대로 유지합니다.",
      },
      {
        heading: "시험은 Pearson VUE 센터에서, 응시는 1회로 충분",
        body: "새 시험은 전 세계 Pearson VUE 시험장에서 온라인으로 치러집니다. 같은 UAT-UK 시험을 요구하는 여러 대학에 동시 지원하는 경우, 시험을 한 번만 봐도 모든 지원 대학에 그대로 인정됩니다.",
      },
      {
        heading: "2027학년도 지원생이 확인할 것",
        body: "2026년 10월 시험 응시가 필수이며, 전형별 세부 등록·예약 절차는 UAT-UK 공식 사이트에서 확인해야 합니다. 국제학교 재학생 중 옥스포드 공학·자연과학·수학 계열을 목표로 한다면 여름 방학 중 새 시험 유형(ESAT/TARA/TMUA)에 맞춘 기출문제 연습을 시작하는 것이 좋습니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Oxford%20University%20historic%20building%20with%20students%20walking%2C%20UK%20university%20admissions%20concept%2C%20professional%20educational%20photography%2C%20warm%20natural%20lighting&width=400&height=250&seq=news-29&orientation=landscape",
  },
  {
    id: "28",
    title: "컬럼비아대 SAT·ACT 필수 부활 — 아이비리그 8개교 전원 표준시험 요구",
    category: "입시",
    date: "2026-07-18",
    summary:
      "컬럼비아대학교가 2027-28학년도 입시부터 SAT·ACT 제출을 다시 의무화하며, 팬데믹 이후 시험선택제를 유지해온 아이비리그 8개교가 모두 표준화 시험을 필수 요건으로 되돌렸습니다.",
    metaDescription:
      "컬럼비아대가 2027-28학년도 입시부터 SAT·ACT를 재의무화하며 아이비리그 8개교 전원이 표준시험을 요구합니다.",
    sections: [
      {
        heading: "2027-28학년도부터 시험 의무화",
        body: "컬럼비아대는 6월 중순 공식 발표를 통해 SAT 또는 ACT 점수 제출을 다시 필수화한다고 밝혔습니다. 다만 시행은 2027년 8월 지원분(2027-28학년도)부터이며, 그 전인 2026-27 입시 사이클까지는 기존 시험선택제가 유지됩니다.",
      },
      {
        heading: "아이비리그 8개교 전원 시험 필수화",
        body: "컬럼비아는 코로나19 이후 시험선택제를 유지해 온 아이비리그 중 마지막으로 시험 필수 요건을 되돌린 학교입니다. 이로써 하버드·예일·프린스턴·브라운·코넬·다트머스·유펜에 이어 아이비리그 8개교 모두가 SAT·ACT 점수를 다시 요구하게 됐습니다.",
      },
      {
        heading: "예외(waiver) 신청 제도는 유지",
        body: "재정적 어려움, 시험장 접근성 문제, 자연재해 등 개인 사정이 있는 지원자는 점수 제출 예외를 신청할 수 있으며, 신청 자체가 불이익으로 이어지지는 않는다고 학교 측은 밝혔습니다.",
      },
      {
        heading: "국제학교 재학생이 챙길 것",
        body: "2027-28 입시(현재 고1~고2 학생)를 목표로 하는 국제학교 재학생이라면 SAT·ACT 응시 계획을 다시 세워야 합니다. IB·AP 내신뿐 아니라 표준화 시험 준비를 병행하는 학습 전략이 다시 중요해졌습니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Ivy%20League%20university%20campus%20building%20with%20students%20walking%2C%20autumn%20academic%20atmosphere%2C%20SAT%20test%20preparation%20books%20on%20desk%2C%20professional%20educational%20photography%2C%20warm%20natural%20lighting&width=400&height=250&seq=news-28&orientation=landscape",
  },
  {
    id: "27",
    title: "IB 5월 2026 시험 결과 발표 — 역대 최대 20만 9천여 명 응시, 평균점수 상승",
    category: "입시",
    date: "2026-07-18",
    summary:
      "국제바칼로레아(IB)가 5월 시험 세션 결과를 발표했습니다. 전 세계 20만 9,607명이 결과를 받아 전년 대비 3.7% 증가했고, 평균 점수와 합격률도 함께 올랐습니다.",
    metaDescription:
      "IB 5월 2026 시험, 전 세계 20만 9,607명 응시로 역대 최대 규모를 기록하며 평균 점수도 상승했습니다.",
    sections: [
      {
        heading: "역대 최대 규모, 점수도 상승",
        body: "전 세계 3,442개교 소속 20만 9,607명의 DP·CP 학생이 결과를 받아 전년 대비 3.7% 늘었습니다. 전 세계 평균 점수는 45점 만점에 30.88점으로 2025년 30.58점보다 소폭 상승했고, 합격률은 82.61%를 기록했습니다.",
      },
      {
        heading: "40점 이상 최상위권 1만 명 돌파",
        body: "1만 526명이 40점 이상을 받아 최상위권 성과를 냈습니다. 특히 영국 학생 평균은 35.11점, 합격률 94.8%로 전 세계 평균을 크게 웃돌았습니다.",
      },
      {
        heading: "중동 지역은 비시험 비상조치 적용",
        body: "지역 분쟁으로 정상적인 시험 응시가 어려웠던 중동 일부 학교 학생들은 IB의 '비시험 비상조치(NECM)'를 통해 과제물·교사 예측 등급 등을 종합한 방식으로 성적을 받았습니다.",
      },
      {
        heading: "대입 지원 앞둔 학생이 확인할 것",
        body: "5월 시험 응시생은 이미 결과를 확인했겠지만, 대입 지원 시 성적표 제출 시점과 지원 대학별 IB 점수 환산 기준을 다시 점검해볼 시점입니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Diploma%20certificate%20and%20graduation%20cap%20on%20desk%20with%20world%20map%2C%20international%20baccalaureate%20exam%20results%20concept%2C%20professional%20educational%20photography%2C%20soft%20natural%20lighting&width=400&height=250&seq=news-27&orientation=landscape",
  },
  {
    id: "26",
    title: "케임브리지 인터내셔널, 2026년 디지털 시험 도입 및 실라버스 25개 이상 개정",
    category: "커리큘럼",
    date: "2026-07-18",
    summary:
      "케임브리지 인터내셔널이 2026년 6월부터 일부 IGCSE·AS 레벨 과목에 디지털 시험을 처음 도입했고, 2026년부터 25개 이상의 개정 실라버스로 수업을 시작합니다.",
    metaDescription:
      "케임브리지 인터내셔널이 2026년 디지털 시험을 첫 도입하고 실라버스 25개 이상을 개정합니다.",
    sections: [
      {
        heading: "디지털 시험 1단계 시행",
        body: "케임브리지는 2026년 6월부터 유럽·중동·북아프리카·미국 지역 학교를 시작으로 AS 레벨 English General Paper와 IGCSE 회계·경제·생물·화학·물리의 객관식 문항을 노트북으로 응시하는 방식을 단계적으로 도입했습니다. 2033년까지 주요 자격시험의 85%에 디지털 응시 옵션이 도입될 예정입니다.",
      },
      {
        heading: "25개 이상 실라버스 개정, 첫 시험은 2028년",
        body: "IGCSE 현대외국어 11개 과목을 포함해 25개 이상의 실라버스가 2026년부터 개정판으로 수업을 시작하며, 해당 과목들의 첫 시험은 2028년에 치러집니다. 디자인&테크놀로지 과목은 지속가능성 관련 내용이 강화됐습니다.",
      },
      {
        heading: "영문학, 오픈텍스트 시험으로 전환",
        body: "IGCSE·O 레벨 영문학 과목은 산문·희곡 원문을 시험장에 가져갈 수 있는 오픈텍스트 방식으로 바뀝니다. 케임브리지는 개방형·폐쇄형 시험 간 성취도 차이가 없었고, 학생들이 암기보다 본문 분석 역량을 더 잘 보여줬다는 연구 결과를 근거로 들었습니다.",
      },
      {
        heading: "IGCSE·A-Level 재학생이 확인할 것",
        body: "소속 학교가 디지털 응시 얼리어답터 프로그램에 참여하는지, 2026학년도부터 개정 실라버스가 적용되는 과목이 있는지 학교 측에 미리 확인해두는 것이 좋습니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Student%20taking%20digital%20exam%20on%20laptop%20in%20classroom%2C%20modern%20international%20school%20testing%20environment%2C%20focused%20studying%20atmosphere%2C%20professional%20educational%20photography%2C%20bright%20natural%20lighting&width=400&height=250&seq=news-26&orientation=landscape",
  },
  {
    id: "25",
    title: "美 유학생 '체류기간' 제도 폐지 — 최대 4년 고정기간, 출국유예 30일로 단축",
    category: "유학",
    date: "2026-07-18",
    summary:
      "미국 국토안보부가 F-1 학생비자 등에 적용되던 '체류기간' 제도를 폐지하고, 최대 4년의 고정 체류기간과 30일 출국유예기간을 도입하는 최종 규정을 7월 17일 공식 게재했습니다.",
    metaDescription:
      "美 국토안보부가 유학생 체류기간 제도를 폐지, 최대 4년 고정기간과 30일 출국유예를 도입합니다.",
    sections: [
      {
        heading: "무기한 체류에서 최대 4년 고정기간으로",
        body: "기존에는 F-1(학생)·J-1(교환방문) 비자 소지자가 프로그램이 끝날 때까지 별도 기한 제한 없이 체류할 수 있었습니다. 새 규정에서는 재학 기간에 맞춰 최대 4년의 고정 체류기간이 부여되며, 이를 넘는 프로그램(학·석사 통합과정, 박사과정 등)에 등록한 학생은 이민국에 별도로 체류연장을 신청해야 합니다.",
      },
      {
        heading: "출국유예기간 60일 → 30일로 단축",
        body: "학업 종료 후 미국을 떠나야 하는 유예기간이 기존 60일에서 30일로 줄었습니다. 취업연수(OPT) 신청, 짐 정리, 졸업 행사 참석 등을 준비할 시간이 그만큼 빠듯해졌습니다.",
      },
      {
        heading: "시행일은 9월 15일",
        body: "이번 규정은 2026년 7월 17일 연방관보에 게재됐으며, 실제 시행일은 2026년 9월 15일입니다.",
      },
      {
        heading: "미국 유학 준비생이 챙길 것",
        body: "프로그램 기간이 4년을 넘을 가능성이 있다면 체류연장 절차와 필요 서류를 미리 확인해두어야 하며, 졸업·OPT 신청 일정도 단축된 유예기간에 맞춰 다시 계획하는 것이 안전합니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=US%20passport%20and%20student%20visa%20documents%20on%20desk%20with%20American%20flag%2C%20international%20student%20immigration%20concept%2C%20professional%20editorial%20photography%2C%20clean%20lighting&width=400&height=250&seq=news-25&orientation=landscape",
  },
  {
    id: "24",
    title: "2026-27학년도 Common App, 8월 1일 오픈 — 에세이 문항은 그대로",
    category: "입시",
    date: "2026-07-15",
    summary:
      "미국 대학 지원 플랫폼 Common App이 8월 1일 새 학년도 원서 접수를 시작합니다. 에세이 7개 문항은 이번에도 변경 없이 유지됩니다.",
    sections: [
      {
        heading: "8월 1일, 새 사이클 오픈",
        body: "2026-27학년도(2027년 가을 입학) Common App이 8월 1일 열립니다. 개설 당일은 접속자가 몰려 사이트 지연·오류가 흔하니 여유를 두고 접속하는 것이 좋습니다.",
      },
      {
        heading: "에세이 문항 7개, 이번에도 동일",
        body: "Common App은 학생·카운슬러·대학 모두의 긍정적 반응을 이유로 기존 7개 에세이 문항을 그대로 유지한다고 공식 발표했습니다. 분량은 250~650단어이며 650단어가 상한입니다.",
      },
      {
        heading: "이월되는 것과 안 되는 것",
        body: "아이디·비밀번호, 대학 리스트, 'My Common Application' 답변, 카운슬러 초대 내역은 새 사이클로 이월됩니다. 반면 추천서 초대 내역, FERPA 동의, 다이렉트 어드미션 제안, 대학별 추가 질문 답변은 이월되지 않아 다시 작성해야 합니다.",
      },
      {
        heading: "얼리 지원 일정 되짚기",
        body: "대부분 대학의 ED·EA 마감은 11월 1일, 정시(RD)는 1월 1일~15일 사이에 몰려 있어, 에세이 초안은 8월 안에 시작해두는 것이 안전합니다.",
      },
      {
        heading: "지금부터 준비할 것",
        body: "8월 1일 전에 개인정보·학교 정보를 미리 정리해두고, 추천서를 부탁할 교사·카운슬러 명단을 확정해두면 개설 당일 바로 초대장을 보낼 수 있어 시간을 아낄 수 있습니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Student%20filling%20out%20college%20application%20on%20laptop%20with%20Common%20App%20website%20open%2C%20organized%20desk%20with%20notes%20and%20checklist%2C%20focused%20planning%20atmosphere%2C%20professional%20educational%20photography%2C%20warm%20natural%20lighting&width=400&height=250&seq=news-24&orientation=landscape",
  },
  {
    id: "23",
    title: "영국 A-Level·GCSE 결과 발표일 확정 — 8월 13일·20일",
    category: "입시",
    date: "2026-07-15",
    summary:
      "2026년 A-Level 결과는 8월 13일, GCSE 결과는 8월 20일 발표됩니다. Ofqual은 채점 기준이 2025년과 동일하게 유지된다고 밝혔습니다.",
    metaDescription:
      "2026년 A-Level 결과는 8월 13일, GCSE 결과는 8월 20일 발표되며 채점 기준은 작년과 동일합니다.",
    sections: [
      {
        heading: "확정된 결과 발표 일정",
        body: "A-Level(GCE) 결과는 8월 13일(목), GCSE 결과는 8월 20일(목) 발표됩니다. 학교·칼리지에는 각각 하루 전(8월 12일, 8월 19일) 제한적으로 먼저 공개됩니다.",
      },
      {
        heading: "시험 일정 되짚어보기",
        body: "응시 접수 마감은 2월 21일이었고, 시험은 GCE 5월 7일~6월 17일, GCSE 5월 7일~6월 23일 진행되었습니다(예비일 6월 24일).",
      },
      {
        heading: "채점 기준, 올해와 동일",
        body: "Ofqual은 2026년 등급 산정 기준이 2025년 여름 수준과 동일하게 유지된다고 공식 발표했고, 특정 등급에 정원(쿼터)을 두지 않는다는 점도 재확인했습니다.",
      },
      {
        heading: "클리어링(Clearing) 준비",
        body: "A-Level 결과 발표 당일부터 대학 미충원 정원을 배정받는 클리어링 절차가 시작되므로, 목표 대학의 최소 요구 성적을 다시 확인하고 대안 리스트를 미리 준비해두는 것이 안전합니다.",
      },
      {
        heading: "국제학교 학생이 챙길 것",
        body: "영국 대학을 UCAS로 지원한 학생은 결과 발표 당일 UCAS Track에서 합격 확정 여부를 바로 확인할 수 있으니, 발표일 아침 로그인 정보를 미리 점검해두는 것이 좋습니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Student%20opening%20A-Level%20exam%20results%20envelope%20with%20anxious%20excited%20expression%2C%20UK%20school%20setting%2C%20clean%20modern%20background%2C%20professional%20educational%20photography%2C%20bright%20natural%20lighting&width=400&height=250&seq=news-23&orientation=landscape",
  },
  {
    id: "22",
    title: "College Board, 2026-27학년도 AP 신규 과목 2개 출시 — 비즈니스·사이버보안",
    category: "커리큘럼",
    date: "2026-07-15",
    summary:
      "College Board가 'AP Career Kickstart' 트랙의 일환으로 AP Business with Personal Finance, AP Cybersecurity 2개 신규 과목을 2026-27학년도부터 정식 도입합니다. 코딩 지식이 없어도 수강 가능합니다.",
    metaDescription:
      "College Board가 2026-27학년도 AP 신규 과목 2개(비즈니스·사이버보안)를 도입합니다.",
    sections: [
      {
        heading: "AP Career Kickstart, 새 진로 연계 트랙",
        body: "2025-26학년도 파일럿을 거쳐 2026-27학년도부터 전국 정식 도입됩니다. 대학 전공 탐색과 실무 역량을 동시에 익히는 새로운 AP 계열입니다.",
      },
      {
        heading: "AP Business with Personal Finance",
        body: "프로젝트 기반 수업으로 창업·마케팅·재무·회계·경영을 다루며, 학생이 직접 사업계획서를 작성하고 재무설계사 역할을 시뮬레이션합니다.",
      },
      {
        heading: "AP Cybersecurity",
        body: "코딩 사전지식이 필요 없는 입문형 과목으로, 위험 분석과 사이버 공격 탐지 등 실무 역량을 배웁니다. College Board는 상시 사이버보안 관련 일자리가 50만 개에 달한다는 점을 도입 배경으로 제시했습니다.",
      },
      {
        heading: "2026년 시험 형식도 계속 디지털화",
        body: "계산기 허용 AP 시험(AP Statistics 포함) 전체에 Bluebook 내장 Desmos 계산기가 제공되며, 2027년 5월부터는 AP 중국어·프랑스어·독일어·이탈리아어·일본어·스페인어와 AP Statistics가 완전 디지털로 전환됩니다.",
      },
      {
        heading: "국제학교 학생에게 의미",
        body: "전통적 STEM·인문계열 외에 실무형 진로를 대학 지원 전부터 탐색하고 싶다면 새 과목을 검토할 만합니다. 다만 신규 과목이라 학교별 개설 여부가 다르므로 담당 카운슬러에게 개설 계획을 먼저 확인해야 합니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Student%20working%20on%20business%20plan%20and%20cybersecurity%20project%20on%20laptop%2C%20modern%20classroom%20setting%20with%20charts%20and%20code%20on%20screen%2C%20engaged%20focused%20expression%2C%20professional%20educational%20photography%2C%20bright%20lighting&width=400&height=250&seq=news-22&orientation=landscape",
  },
  {
    id: "21",
    title: "TOEFL iBT, 2026년 1월부터 대개편 — 시험시간 단축·새 밴드 점수제",
    category: "입시",
    date: "2026-07-15",
    summary:
      "ETS가 2026년 1월 21일부터 TOEFL iBT를 전면 개편합니다. 리딩·리스닝이 적응형(adaptive) 방식으로 바뀌고, 기존 120점 만점과 함께 1~6 밴드 점수가 병행 표기됩니다.",
    metaDescription:
      "ETS가 2026년 1월부터 TOEFL iBT를 전면 개편, 적응형 시험과 새 밴드 점수제를 도입합니다.",
    sections: [
      {
        heading: "언제, 무엇이 바뀌나",
        body: "2026년 1월 21일부터 시험장 응시와 자택 응시 모두 새 형식이 적용됩니다. 리딩·리스닝이 응시자의 정답률에 따라 문제 난이도가 조정되는 적응형(multistage adaptive) 방식으로 바뀝니다.",
      },
      {
        heading: "새로운 밴드 점수제, 2년간 병행",
        body: "기존 0~120점과 함께 CEFR 기준에 맞춘 1~6 밴드 점수가 함께 표기되며, 2026~2028년 2년간 두 점수 체계를 동시 운영해 학교들이 비교할 수 있게 합니다.",
      },
      {
        heading: "시험시간 단축, 결과는 더 빨리",
        body: "전체 응시 시간이 크게 줄어들고, 성적은 응시 후 72시간 이내에 발표됩니다(기존 4~6일에서 단축).",
      },
      {
        heading: "문항 구성도 달라진다",
        body: "그룹 토론·프로젝트형 시나리오 등 협업 중심 문항이 강의·지문 독해 문항과 함께 출제되어, 특정 문화권에 유리하지 않도록 설계되었습니다.",
      },
      {
        heading: "국제학교 학생이 준비할 것",
        body: "응시 예정이라면 1월 21일 전후로 시험 일정을 잡을 때 신·구 버전 여부를 확인하고, 정답률에 따라 문제 난이도가 바뀌는 새 적응형 방식에 맞춘 실전 연습을 미리 익혀두는 것이 좋습니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Student%20taking%20TOEFL%20test%20on%20computer%20with%20headphones%2C%20focused%20concentration%20in%20quiet%20test%20center%2C%20clean%20minimalist%20background%2C%20professional%20educational%20photography%2C%20bright%20natural%20lighting&width=400&height=250&seq=news-21&orientation=landscape",
  },
  {
    id: "20",
    title: "2027년 5월부터 바뀌는 IB DP 커리큘럼 — EE·심리·컴공·디자인테크·미술",
    category: "커리큘럼",
    date: "2026-07-15",
    summary:
      "IB가 심리학·컴퓨터과학·디자인테크놀로지·미술 4개 과목과 Extended Essay를 개편해 2027년 5월 시험부터 적용합니다. 지금 DP2이거나 올가을 DP1을 시작하는 학생이 해당됩니다.",
    metaDescription:
      "IB가 2027년 5월부터 심리학·컴공·디자인테크·미술·EE 등 DP 커리큘럼을 개편합니다.",
    sections: [
      {
        heading: "무엇이, 누구부터 바뀌나",
        body: "2027년 5월이 새 지침의 첫 평가입니다. 즉 2025년 8월 DP1을 시작해 지금 DP2인 학생과, 올가을 DP1을 새로 시작하는 학생 모두 해당됩니다. 2026년 5월 시험은 기존 지침 그대로 치러지므로, 지금 DP2를 마무리하는 학생은 이번 개편과 무관합니다.",
      },
      {
        heading: "Extended Essay, 가장 큰 변화",
        body: "기존 World Studies EE가 없어지고, 한 과목을 깊이 파는 'Subject-Focused EE'와 5개 프레임워크 중 하나를 골라 두 과목을 엮는 'Interdisciplinary EE' 중 선택하는 구조로 바뀝니다. 지도교사 면담은 여전히 3회지만, 기존 3개였던 성찰 진술서가 하나의 최종 성찰 진술서로 통합됩니다.",
      },
      {
        heading: "컴퓨터과학·디자인테크놀로지",
        body: "컴퓨터과학은 Java·Python을 모두 지원하도록 바뀌고 기존 선택 옵션이 폐지되며, 내부평가 시간이 5시간 늘어납니다. 디자인테크놀로지는 2020년 이후 가장 큰 개편으로, 지속가능성·포용적 설계·자동화 등 실제 산업 실무 관행에 맞춰 재설계됩니다.",
      },
      {
        heading: "심리학·미술",
        body: "심리학은 과목 내용 자체는 크게 바뀌지 않지만, 평가 강조점이 단순 암기에서 응용과 주제 간 연결로 옮겨가고 실습 활동이 새로 추가됩니다. 미술은 전통과 혁신의 균형을 다시 맞춰, 실천·맥락·성찰을 통합한 진정성 있는 예술 활동을 더 중요하게 평가합니다.",
      },
      {
        heading: "지금 무엇을 준비해야 할까",
        body: "위 4개 과목을 수강 중이거나 EE를 준비하는 학생이라면, 학교 IB 코디네이터에게 신·구 지침 중 어느 쪽이 적용되는지 먼저 확인하세요. EE는 주제를 정하기 전에 Subject-Focused와 Interdisciplinary 중 자신의 관심사·강점에 맞는 경로를 미리 가늠해보는 것이 좋습니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Student%20reviewing%20updated%20IB%20Diploma%20curriculum%20documents%20with%20laptop%2C%20focused%20planning%20session%2C%20modern%20study%20desk%20with%20notebook%2C%20warm%20natural%20lighting%2C%20professional%20educational%20photography&width=400&height=250&seq=news-20&orientation=landscape",
  },
  {
    id: "19",
    title: "2026년 5월 IB 시험 결과 발표 — 전 세계 평균 30.88점",
    category: "입시",
    date: "2026-07-14",
    summary:
      "7월 6일 발표된 2026년 5월 IB 세션 결과, 전 세계 응시생 20만 9,607명의 평균 점수는 30.88점이었습니다. 지역별 평균과 내 점수 해석법, 재채점 절차를 정리했습니다.",
    metaDescription:
      "2026년 5월 IB 시험 결과, 전 세계 평균 30.88점 — 지역별 평균과 재채점 절차를 정리했습니다.",
    sections: [
      {
        heading: "2026년 5월 세션, 이렇게 마감됐다",
        body: "159개국 20만 9,607명이 응시한 이번 5월 세션의 전 세계 평균 점수는 30.88점(45점 만점)으로 집계됐습니다. 결과는 7월 6일 오후(GMT 기준 낮 12시)부터 IBIS 응시생 웹사이트를 통해 개인 코드와 PIN으로 확인할 수 있었습니다.",
      },
      {
        heading: "지역별 평균 점수, 왜 차이가 클까",
        body: "홍콩 37.02점, 싱가포르 35.67점, 영국 35.11점으로 전 세계 평균을 크게 웃돈 반면, UAE는 34.5점(통과율 98.32%)을 기록했습니다. 이런 차이는 학교 유형(사립 국제학교 비중), 응시생 선발 기준, 응시 규모가 달라 생기는 것으로, 절대적인 국가 간 실력 비교로 해석하기보다는 각 지역 상위 국제학교군의 평균으로 이해하는 것이 정확합니다.",
      },
      {
        heading: "내 점수, 어떻게 해석해야 할까",
        body: "30점대 초중반이면 전 세계 평균 이상으로, 대부분의 상위권 대학 지원 요건을 충족하는 수준입니다. 다만 대학별 최소 요구 점수와 특정 과목 성적 조건이 다르므로, 총점만이 아니라 지원 대학의 세부 요건과 비교해 판단해야 합니다.",
      },
      {
        heading: "기대보다 낮게 나왔다면",
        body: "결과 발표 후 3주 이내에 'Enquiry upon Results(EuR)'로 재채점을 신청할 수 있습니다. 재채점은 점수가 오르거나 내려갈 수 있는 양방향 절차이므로, 조건부 합격 대학의 최소 요구 점수와의 격차, EE·TOK 보너스 포인트 반영 여부를 먼저 확인한 뒤 신청 여부를 결정하는 것이 좋습니다.",
      },
      {
        heading: "대학 제출, 잊지 말아야 할 것",
        body: "조건부 합격(Conditional Offer)을 받은 학생은 요구 점수 충족 여부를 즉시 확인하고, IBIS를 통해 성적 증명서를 지원 대학에 공식 발송해야 합니다. 대학마다 제출 마감일이 다르므로 입학처 안내를 다시 한번 확인하세요.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Student%20checking%20IB%20diploma%20exam%20results%20on%20laptop%20with%20relieved%20expression%2C%20world%20map%20and%20statistics%20chart%20on%20screen%2C%20clean%20modern%20desk%2C%20professional%20educational%20photography%2C%20bright%20natural%20lighting&width=400&height=250&seq=news-19&orientation=landscape",
  },
  {
    id: "18",
    title: "2026-27학년도 SAT, 대기자 명단·Bluebook 신기능 도입",
    category: "입시",
    date: "2026-07-13",
    summary:
      "College Board가 2026년 가을 SAT부터 대기자 명단 자동 배정, Bluebook 계산기 크기 조절 등 새 기능을 도입합니다. 국제학교 학생이 응시 전 미리 알아둬야 할 변경사항을 정리했습니다.",
    metaDescription:
      "College Board가 2026-27학년도 SAT에 대기자 자동배정, Bluebook 신기능을 도입합니다.",
    sections: [
      {
        heading: "가을 학기부터 달라지는 SAT",
        body: "College Board가 2026-27학년도 SAT 시행 방식에 몇 가지 변화를 예고했습니다. 시험 자체의 난이도나 구성이 바뀌는 것은 아니지만, 응시 신청 과정과 Bluebook 앱 사용성에 영향을 주는 변경이라 미리 확인해두는 것이 좋습니다. 2026년 가을 시험 등록은 이미 시작된 상태입니다.",
      },
      {
        heading: "대기자 명단(Waitlist) 자동 배정",
        body: "2026년 가을부터 미국 내 응시자를 대상으로 대기자 명단 기능이 도입됩니다. 원하는 시험일이나 고사장이 마감됐을 때 대기 등록을 해두면, 해당 지역에 자리가 생길 경우 자동으로 배정됩니다. 한국에서 응시하는 학생에게 직접 적용되는 기능은 아니지만, 미국 현지에서 응시를 계획 중이라면 참고할 만합니다.",
      },
      {
        heading: "Bluebook 계산기·참고자료 사용성 개선",
        body: "디지털 SAT 응시 앱 Bluebook에서 수학 영역에 내장된 계산기 창 크기를 자유롭게 조절할 수 있게 됩니다. 참고자료 레이아웃도 개선되어 차트나 그래프를 확대·이동(줌/팬)하며 볼 수 있습니다. 늦여름에는 PSAT/NMSQT, PSAT 10, PSAT 8/9의 새로운 전체 길이 연습시험도 Bluebook에 추가될 예정이라, 실전과 동일한 환경에서 미리 연습해볼 수 있습니다.",
      },
      {
        heading: "편의 지원(Accommodations) 대상 학생은 준비물 확인",
        body: "음성 지원(Text-to-Speech)이나 화면 읽기 기능 승인을 받은 학생은 이제 반드시 유선 헤드폰(블루투스 제외)을 지참해야 합니다. 또한 음성 지원 승인 학생은 온라인이 아닌 테스트 센터에서 주말 시험에 응시해야 하므로, 편의 지원을 신청한 경우 시험 장소와 준비물을 다시 한번 점검하세요.",
      },
      {
        heading: "지금 준비해야 할 것",
        body: "2026년 가을 시험 응시를 계획 중이라면 등록 마감일과 고사장 정원을 서둘러 확인하는 것이 좋습니다. 이번 학기부터 Bluebook을 처음 쓰는 학생이라면, 늦여름 업데이트로 추가되는 연습시험을 활용해 계산기·참고자료 조작법에 미리 익숙해지는 것을 추천합니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Student%20taking%20digital%20SAT%20exam%20on%20laptop%20using%20Bluebook%20testing%20app%2C%20focused%20concentration%2C%20modern%20minimalist%20study%20desk%2C%20clean%20background%2C%20professional%20educational%20photography%2C%20bright%20natural%20lighting&width=400&height=250&seq=news-18&orientation=landscape",
  },
  {
    id: "17",
    title: "2026 AP 시험 성적, 오늘부터 확인 가능 — 발표 첫날 체크리스트",
    category: "입시",
    date: "2026-07-07",
    summary:
      "College Board가 예고했던 2026 AP 성적이 오늘부터 My AP 포털에서 순차 공개됩니다. 발표 당일 학생과 학부모가 놓치지 말아야 할 사항을 정리했습니다.",
    metaDescription:
      "2026 AP 성적이 오늘부터 My AP 포털에서 공개됩니다. 발표 당일 체크리스트를 정리했습니다.",
    sections: [
      {
        heading: "성적 확인, 지금 바로 해야 할 일",
        body: "My AP 계정에 로그인해 과목별 점수를 확인하세요. 여러 과목을 응시했다면 점수가 동시에 뜨지 않고 순차적으로 업데이트될 수 있으니, 하루 이틀 간격을 두고 다시 확인해보는 것이 좋습니다. 점수와 함께 표시되는 백분위(Percentile)도 함께 기록해두면 이후 대학 크레딧 신청 시 참고가 됩니다.",
      },
      {
        heading: "포털 접속이 몰릴 때 대처법",
        body: "발표 당일에는 접속자가 몰려 페이지 로딩이 느려지거나 오류가 뜰 수 있습니다. 이런 경우 브라우저 캐시를 지우고 재시도하거나, 새벽·늦은 밤 시간대에 다시 접속하면 대부분 해결됩니다. 여러 번 시도해도 계정 자체가 안 열리는 경우에만 College Board 고객센터에 문의하세요.",
      },
      {
        heading: "점수별 다음 단계",
        body: "5점·4점을 받았다면 대학별 크레딧 인정 기준표에서 전공 필수 과목 면제 여부를 바로 확인하세요. 3점 이하라면 해당 과목이 전공에 필수적인지 따져보고, 필요하다면 내년 5월 재시험 등록을 고려할 수 있습니다. 재시험 점수는 이전 점수와 별개로 기록되어 더 유리한 점수만 대학에 제출할 수 있습니다.",
      },
      {
        heading: "대학 제출 마감일 다시 확인하기",
        body: "조건부 합격(Conditional Offer)을 받은 학생이라면 AP 점수 제출 마감일을 다시 한번 확인해야 합니다. 대학마다 마감일이 다르므로, 입학처 웹사이트의 'AP Score Requirement' 페이지에서 정확한 날짜와 제출 방법(Send Score Report)을 재확인하세요.",
      },
      {
        heading: "2학기 학습 계획 세우기",
        body: "성적 발표를 계기로 남은 여름방학 동안 2학기 커리큘럼을 미리 점검하는 것도 좋습니다. 특히 올해 성적이 기대에 못 미쳤던 과목은 2학기 시작 전에 기초 개념부터 다시 정리해두면 새 학기 부담을 크게 줄일 수 있습니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Student%20checking%20AP%20exam%20score%20results%20on%20laptop%20screen%2C%20mixed%20anticipation%20and%20relief%20expression%2C%20modern%20study%20desk%20with%20notebook%2C%20warm%20natural%20window%20light%2C%20academic%20achievement%20concept%2C%20professional%20educational%20photography&width=400&height=250&seq=news-17&orientation=landscape",
  },
  {
    id: "16",
    title: "국제학교 2학기 준비, 여름방학 마지막 3주가 좌우한다",
    category: "커리큘럼",
    date: "2026-07-05",
    summary:
      "여름방학이 절반 가까이 지난 지금, 2학기 개강 전 남은 3주를 어떻게 쓰느냐가 성적을 좌우합니다. 과목별 점검 포인트를 정리했습니다.",
    sections: [
      {
        heading: "왜 '마지막 3주'가 중요한가",
        body: "방학 초반의 여유로운 계획은 흐지부지되기 쉽지만, 개강을 코앞에 둔 마지막 3주는 실제로 2학기 출발선을 결정합니다. 이 시기에 부족한 과목을 정리하지 않으면 새 학기 진도를 따라가는 데 곱절의 시간이 들 수 있습니다.",
      },
      {
        heading: "IB·AP 학생: 미완성 과제부터 마무리",
        body: "여름방학 초에 시작만 해두고 미뤄둔 IA, Extended Essay 초안, AP Summer Assignment가 있다면 지금이 마무리할 마지막 기회입니다. 개강 첫 주는 새로운 진도로 곧바로 바빠지므로, 미완성 과제를 방학 중에 끝내두는 것이 훨씬 유리합니다.",
      },
      {
        heading: "내신·GPA 학생: 지난 학기 취약 단원 복습",
        body: "지난 학기 성적표에서 낮았던 단원을 골라 핵심 개념만 다시 훑어보세요. 전 범위를 복습하기보다 취약한 2~3개 단원에 집중하는 것이 남은 기간 안에 효과를 볼 수 있는 현실적인 방법입니다.",
      },
      {
        heading: "생활 패턴, 개강 1주 전부터 되돌리기",
        body: "방학 중 늦어진 수면·기상 시간을 개강 1주 전부터 학기 중 패턴으로 서서히 되돌려야 합니다. 개강 당일부터 갑자기 바꾸려 하면 첫 1~2주 동안 수업 집중도가 떨어지는 경우가 많습니다.",
      },
      {
        heading: "지금 상담을 시작해야 하는 이유",
        body: "남은 3주 동안 무엇을 우선순위로 둘지는 학생마다 다릅니다. 과목별 진단을 통해 부족한 부분을 짚어내고, 개강 전까지 실행 가능한 계획을 세우는 것이 이 시기 학습 관리의 핵심입니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Student%20reviewing%20study%20notes%20and%20calendar%20at%20desk%20preparing%20for%20new%20school%20semester%2C%20organized%20workspace%20with%20textbooks%2C%20warm%20late%20summer%20afternoon%20light%2C%20focused%20academic%20planning%20concept%2C%20professional%20educational%20photography&width=400&height=250&seq=news-16&orientation=landscape",
  },
  {
    id: "13",
    title: "2026 IB 5월 시험 성적 발표 — 국제학교 학생 필독 대응 가이드",
    category: "커리큘럼",
    date: "2026-07-01",
    summary:
      "IBO가 2026년 5월 시험 성적을 7월 첫째 주에 발표합니다. 점수 확인부터 이의신청, 대학 합격자 성적 제출까지 단계별 대응법을 정리했습니다.",
    metaDescription:
      "IB가 2026년 5월 시험 성적을 7월 첫째 주 발표합니다. 점수 확인부터 이의신청까지 정리했습니다.",
    sections: [
      {
        heading: "IB 5월 시험 결과, 언제 어떻게 확인하나",
        body: "2026년 IB 디플로마 5월 시험 성적은 7월 5일(현지 기준) IBO 공식 포털 IBIS에서 발표됩니다. 학생은 학교에서 발급받은 IBIS 계정으로 로그인하면 과목별 점수와 최종 디플로마 취득 여부를 확인할 수 있습니다. 총점 24점 이상, 필수 과목 최소 점수 충족, TOK·EE 합산 보너스 포인트를 모두 통과해야 디플로마가 수여됩니다.",
      },
      {
        heading: "기대 점수보다 낮게 나왔다면 — 이의신청 절차",
        body: "성적에 이의가 있는 경우 결과 발표 후 3주 이내에 'Enquiry upon Results(EuR)'를 신청할 수 있습니다. 재채점(Re-mark)과 리포트 요청으로 나뉘며, 재채점 결과 점수가 오를 수도, 내려갈 수도 있습니다. 비용은 과목당 약 USD 130~260 수준이며, 결과는 신청 후 4~6주 이내에 통보됩니다. 대학 입학에 영향을 미칠 수 있으므로 담당 코디네이터와 충분히 상의한 뒤 결정하세요.",
      },
      {
        heading: "대학에 성적 제출하는 방법",
        body: "IB 성적을 지원 대학에 공식 제출하려면 IBO 포털에서 'Transcript Request'를 통해 직접 대학으로 발송해야 합니다. 예비 합격(Conditional Offer)을 받은 학생은 요구 점수 충족 여부를 즉시 확인하고, 대학 입학처에 성적을 제출해야 합격이 확정됩니다. 제출 기한은 대학마다 다르지만 보통 7월 말이므로 서두르는 것이 좋습니다.",
      },
      {
        heading: "점수가 예상보다 높게 나왔다면",
        body: "목표 점수를 초과 달성했다면 더 높은 순위의 대학에 추가 지원하는 'Clearing' 또는 'Adjustment' 전형을 활용할 수 있습니다. 영국 대학의 경우 UCAS 시스템을 통해 7월 중 Adjustment 신청이 가능하며, 미국 대학은 대기자 명단(Waitlist) 전환 요청을 이메일로 직접 보내볼 수 있습니다.",
      },
      {
        heading: "내년 5월 시험을 준비하는 학생들에게",
        body: "올해 결과를 보며 방향을 잡고 있는 예비 수험생이라면, 지금이 전략을 세울 최적의 시점입니다. 고득점자들이 공통적으로 강조하는 것은 '예제 시험지(Past Papers) 반복 풀이'와 '채점 기준(Markscheme) 분석'입니다. 과목별 IA는 1학기가 시작되는 9월 이전에 주제를 확정하고 데이터 수집을 시작하는 것이 이상적입니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Student%20checking%20exam%20results%20on%20laptop%20with%20relieved%20happy%20expression%2C%20clean%20modern%20desk%20with%20IB%20textbooks%2C%20warm%20natural%20window%20light%2C%20academic%20achievement%20concept%2C%20professional%20educational%20photography&width=400&height=250&seq=news-13&orientation=landscape",
  },
  {
    id: "14",
    title: "AP 2026 점수 발표 D-2주 — 재시험·대학 크레딧 활용 완벽 정리",
    category: "입시",
    date: "2026-06-30",
    summary:
      "2026 AP 점수가 7월 중순 발표됩니다. 점수별 대응 전략, 대학 크레딧 인정 기준, 재시험 신청 방법을 미리 알아두세요.",
    sections: [
      {
        heading: "2026 AP 점수 발표 일정",
        body: "College Board는 2026년 AP 시험 점수를 7월 둘째 주(예정)에 순차 공개합니다. My AP 포털에 로그인하면 과목별 1~5점 결과를 확인할 수 있습니다. 발표 날짜는 과목마다 다를 수 있으며, 이메일 알림을 미리 설정해두면 편리합니다.",
      },
      {
        heading: "점수별 대응 전략 — 3점 이하라면",
        body: "AP 점수 3점 이하는 대부분의 대학에서 크레딧을 인정하지 않습니다. 해당 과목이 전공 필수 과목이거나 진학 후 재수강이 부담된다면, 2027년 5월 재시험 등록을 고려해보세요. AP 재시험은 이전 점수와 별개로 기록되며, 더 높은 점수를 대학에 제출할 수 있습니다.",
      },
      {
        heading: "대학 크레딧 인정 — 학교마다 기준이 다르다",
        body: "AP 점수 4~5점을 받았더라도 대학마다 크레딧 인정 기준이 다릅니다. MIT와 Caltech은 AP 크레딧을 거의 인정하지 않는 반면, 대부분의 주립대와 리버럴 아츠 칼리지는 4점 이상이면 해당 과목 수강을 면제해줍니다. 진학 예정 대학의 AP Credit Policy 페이지에서 과목별 인정 기준을 반드시 확인하세요.",
      },
      {
        heading: "점수 공식 제출 — 언제, 어떻게",
        body: "AP 점수를 지원 대학에 공식 제출하려면 College Board 포털에서 'Send Score Report'를 클릭하면 됩니다. 최초 1개 대학은 무료이고 추가 대학은 USD 15입니다. 입학 허가(Admission)와 장학금 요건에 AP 점수가 포함된 경우, 대학이 지정한 마감일 이전에 제출해야 합니다.",
      },
      {
        heading: "IB와 AP 동시 수강 학생을 위한 조언",
        body: "IB DP와 AP를 병행하는 학생이라면 두 시험 일정이 맞물리는 5월이 특히 힘든 시기입니다. AP 점수가 기대에 못 미쳤더라도 IB 점수와 함께 종합적으로 평가되므로 너무 낙담하지 않아도 됩니다. 다만 특정 대학의 조건부 합격이 AP 점수에 연결되어 있다면 빠르게 입학처에 상황을 설명하고 대안을 논의하는 것이 중요합니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Student%20anxiously%20waiting%20for%20exam%20score%20results%20on%20phone%2C%20AP%20exam%20preparation%20books%20on%20desk%2C%20focused%20study%20environment%2C%20warm%20indoor%20lighting%2C%20academic%20tension%20and%20anticipation%20concept%2C%20professional%20educational%20photography&width=400&height=250&seq=news-14&orientation=landscape",
  },
  {
    id: "15",
    title: "2027학년도 미국 명문대 조기전형 일정 공개 — 지금 준비해야 할 것들",
    category: "유학",
    date: "2026-06-29",
    summary:
      "하버드·예일·스탠퍼드 등 주요 대학의 2027학년도 조기전형(ED/EA) 일정이 발표됐습니다. 7월부터 본격 시작해야 할 원서 준비 로드맵을 공개합니다.",
    metaDescription:
      "하버드·예일·스탠퍼드 등 2027학년도 조기전형 일정 발표 — 7월부터 준비할 것들을 정리했습니다.",
    sections: [
      {
        heading: "2027학년도 조기전형 주요 마감일",
        body: "하버드·프린스턴·MIT·예일의 Restrictive Early Action(REA) 및 Early Action(EA) 마감은 11월 1일, 얼리 디시전(ED)을 운영하는 대부분의 대학(컬럼비아·노스웨스턴·밴더빌트 등)은 11월 1~15일입니다. 스탠퍼드 REA도 11월 1일 마감으로, 결과는 12월 중순에 발표됩니다. 지금부터 역산하면 에세이 초안 완성까지 12~14주밖에 남지 않았습니다.",
      },
      {
        heading: "7월에 반드시 해야 할 것",
        body: "7월은 원서 준비의 골든타임입니다. Common App 계정을 개설하고 기본 정보를 입력해두세요. 가장 중요한 것은 650단어 Personal Statement(Common App Essay) 주제를 확정하는 일입니다. 7가지 프롬프트 중 자신의 이야기를 가장 잘 담을 수 있는 주제를 골라 초안을 3개 이상 써보세요. 이 과정만으로 한 달이 소요되는 경우가 많습니다.",
      },
      {
        heading: "추천서 요청은 지금 당장",
        body: "추천서는 교사가 충분히 준비할 시간을 드려야 합니다. 담임 및 과목 교사 2명에게 7월 중 정식으로 요청하고, 자신의 활동 목록(Brag Sheet)과 지원 대학 리스트를 함께 전달하세요. 학교 카운슬러 추천서도 필요한 경우가 많으니 미리 약속을 잡아두는 것이 좋습니다.",
      },
      {
        heading: "ED vs EA vs REA — 어떤 전형이 유리할까",
        body: "얼리 디시전(ED)은 합격 시 반드시 등록해야 하는 구속력 있는 전형으로, 합격률이 정시보다 1.5~2배 높은 경우가 많습니다. 재정 지원이 필요한 학생은 여러 학교의 패키지를 비교할 수 없으므로 신중해야 합니다. EA와 REA는 구속력이 없어 합격 후에도 다른 학교에 지원할 수 있지만, REA는 타 사립대 조기전형 동시 지원이 제한됩니다.",
      },
      {
        heading: "국제학교 학생이 원서에서 강조해야 할 것",
        body: "IB·AP·A-Level 고득점은 학업 역량을 입증하는 기본 조건입니다. 여기에 더해 다국어·다문화 환경에서 쌓은 경험, 지역사회 기여 활동, 자기 주도 프로젝트를 구체적인 수치와 스토리로 녹여내야 차별화됩니다. 활동(Activities) 섹션은 150자 제한이 있으므로 동사로 시작하는 임팩트 있는 문장으로 압축하는 연습이 필요합니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Student%20working%20on%20college%20application%20essay%20at%20laptop%20with%20prestigious%20university%20brochures%20nearby%2C%20organized%20modern%20study%20desk%2C%20calm%20focused%20atmosphere%2C%20warm%20ambient%20lighting%2C%20academic%20planning%20concept%2C%20professional%20educational%20photography&width=400&height=250&seq=news-15&orientation=landscape",
  },
  {
    id: "10",
    title: "IB, 영국서 10년 새 급성장 — 128개교 10만 명 재학, 3분의 2가 비선발형",
    category: "커리큘럼",
    date: "2026-06-30",
    summary:
      "국제바칼로레아기구(IBO)의 새 보고서에 따르면 영국 내 IB 학교가 128곳, 재학생은 약 10만 명으로 늘었습니다. 남동부 지역은 2015년 이후 70% 성장했습니다.",
    metaDescription:
      "영국 내 IB 학교가 128곳, 재학생 약 10만 명으로 늘었다는 IBO 새 보고서가 나왔습니다.",
    sections: [
      {
        heading: "IBO 보고서 개요",
        body: "국제바칼로레아기구(IBO)는 2026년 6월 'Growth, Access and Outcomes: The International Baccalaureate in the United Kingdom' 보고서를 발표했습니다. 영국 내 IB 월드스쿨은 128곳, 운영 프로그램은 179개(PYP·MYP·DP·CP 포함)이며, 재학생은 약 10만 명에 달합니다.",
      },
      {
        heading: "남동부 지역이 가장 빠르게 성장",
        body: "잉글랜드가 영국 전체 IB 학교의 약 95%를 차지하며, 그중 남동부(South East) 지역이 가장 빠르게 성장해 2015년 이후 IB 프로그램 수가 70% 늘었습니다. 스코틀랜드(4%)와 웨일스(2%)는 비중이 낮고, 북아일랜드에는 아직 IB 월드스쿨이 없습니다.",
      },
      {
        heading: "IB는 더 이상 '소수 사립학교의 전유물'이 아니다",
        body: "IB가 소수 사립·국제학교만의 프로그램이라는 통념과 달리, 보고서는 영국 내 IB 월드스쿨의 67%가 비선발형(non-selective) 입학 정책을 운영하며, 무상급식 대상 학생도 8,400명 이상 재학 중이라고 밝혔습니다.",
      },
      {
        heading: "국제학교 IB 재학생이 참고할 점",
        body: "IB DP 졸업생이 A-Level 이수자보다 영국 상위 20위권 대학 진학률이 3배 높다는 기존 조사 결과에 더해, 이번 보고서로 영국 내 IB 학교 인프라와 대학의 수용 기반도 꾸준히 넓어지고 있음이 확인됐습니다. 국제학교에서 IB DP를 이수 중인 학생에게는 영국 대입 경로로서의 신뢰도를 뒷받침하는 소식입니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=British%20international%20school%20students%20studying%20together%20in%20classroom%2C%20UK%20school%20building%20exterior%2C%20growth%20of%20international%20baccalaureate%20programme%2C%20professional%20educational%20photography%2C%20natural%20daylight&width=400&height=250&seq=news-10-v2&orientation=landscape",
  },
  {
    id: "11",
    title: "QS 2027 세계대학순위 발표 — MIT 15년 연속 1위, 中·홍콩 대약진",
    category: "유학",
    date: "2026-06-18",
    summary:
      "QS가 2026년 6월 발표한 2027 세계대학순위에서 MIT가 15년 연속 1위를 지켰고, 중국·홍콩 대학의 순위 상승이 두드러졌습니다.",
    metaDescription:
      "QS 2027 세계대학순위에서 MIT가 15년 연속 1위, 중국·홍콩 대학이 큰 폭으로 순위를 올렸습니다.",
    sections: [
      {
        heading: "발표 개요",
        body: "QS(Quacquarelli Symonds)는 2026년 6월 18일 2027 세계대학순위를 공개했습니다. 이번 판에는 106개국 고등교육 시스템에서 1,504개 대학이 포함됐으며, 신규 진입 대학은 98개교였습니다.",
      },
      {
        heading: "상위권 결과",
        body: "MIT가 15년 연속 세계 1위를 유지했고, 스탠퍼드대(2위)와 임페리얼칼리지런던(2위, 공동)이 뒤를 이었습니다. 옥스퍼드대 4위, 하버드대 5위, 케임브리지대 6위 순이었으며, 예일대(16위)와 존스홉킨스대(20위)가 20위권에 재진입했습니다.",
      },
      {
        heading: "아시아권의 부상",
        body: "중국 본토 대학의 72%가 순위 상승을 기록했고 신규 진입 13개교를 배출해 전 세계에서 가장 많은 상승 사례를 만들어냈습니다. 홍콩도 대학의 78%가 순위 상승했으며 일부는 20위권에 진입했습니다.",
      },
      {
        heading: "국제학교 학생이 참고할 점",
        body: "전체 순위에 포함된 미국 대학은 184개교로 국가별 최다였고 영국(93개교), 중국 본토(85개교)가 뒤를 이었습니다. 미국이 여전히 최상위권을 지배하지만, 진학 대상 국가를 넓혀 아시아·유럽 상위권 대학까지 폭넓게 검토해볼 만한 시점입니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=World%20university%20ranking%20concept%2C%20prestigious%20campus%20building%20with%20global%20map%20overlay%2C%20graduation%20cap%20on%20desk%2C%20professional%20educational%20photography%2C%20bright%20natural%20lighting&width=400&height=250&seq=news-11-v2&orientation=landscape",
  },
  {
    id: "12",
    title: "AP 캡스톤 응시료, 일반 AP와 동일하게 인하 — 해외 응시생 최대 48달러 절감",
    category: "입시",
    date: "2026-06-15",
    summary:
      "2025-26학년도부터 AP 세미나·AP 리서치 응시료가 일반 AP와 같아져, 해외 국제학교 응시생은 과목당 최대 48달러를 절감하게 됐습니다.",
    metaDescription:
      "AP 캡스톤 응시료가 2025-26학년도부터 일반 AP와 동일해져 해외 응시생 부담이 줄었습니다.",
    sections: [
      {
        heading: "인하 내용",
        body: "College Board는 2025-26학년도부터 AP 캡스톤(AP 세미나·AP 리서치) 응시료를 다른 모든 AP 시험과 동일하게 조정했다고 공지했습니다. 그동안 두 과목은 별도의 더 높은 응시료가 부과돼 왔습니다.",
      },
      {
        heading: "구체적 금액",
        body: "미국·캐나다·미국령·DoDEA 소재 학교는 과목당 99달러, 그 외 지역(한국 등 해외 국제학교 포함)은 과목당 129달러로 통일됐습니다. 기존 캡스톤 응시료 대비 최대 48달러 인하된 금액입니다.",
      },
      {
        heading: "첫 적용 시점",
        body: "인하된 요금이 처음 적용된 것은 2026년 5월 시험이며, 2026-27학년도 수강생에게도 동일하게 적용됩니다.",
      },
      {
        heading: "AP 캡스톤이란",
        body: "AP 캡스톤은 세미나·리서치를 모두 이수하고 다른 AP 시험 4개 이상에서 3점 이상을 받으면 'AP 캡스톤 디플로마'를 받는 프로그램입니다. 이번 인하로 국제학교 학생의 참여 문턱이 한층 낮아질 전망입니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Student%20reviewing%20AP%20exam%20registration%20receipt%20and%20payment%20on%20laptop%2C%20academic%20planning%20desk%2C%20clean%20professional%20educational%20photography%2C%20bright%20natural%20lighting&width=400&height=250&seq=news-12-v2&orientation=landscape",
  },
  {
    id: "7",
    title: "美 F-1 학생비자 비용 785달러로 급증 — '비자 진실성 수수료' 250달러 신설",
    category: "유학",
    date: "2026-05-19",
    summary:
      "2026년 신설된 '비자 진실성 수수료' 250달러가 F-1 학생비자에 추가되며 총 발급 비용이 785달러로 늘었습니다.",
    metaDescription:
      "美 신설 '비자 진실성 수수료' 250달러로 F-1 학생비자 총 비용이 785달러로 늘었습니다.",
    sections: [
      {
        heading: "새 수수료의 배경",
        body: "2025년 7월 서명된 예산조정법에 따라 미국 국토안보부가 신설한 '비자 진실성 수수료(Visa Integrity Fee)' 250달러가 F-1, J-1, H-1B 등 거의 모든 비이민 비자에 부과됩니다. 이 수수료는 2026 회계연도(2025년 10월 1일)부터 시행됐으며 매년 소비자물가지수에 따라 인상됩니다.",
      },
      {
        heading: "실제 부과 현황",
        body: "보스턴대 국제학생처(ISSO)가 2026년 5월 19일 공지한 바에 따르면, 일부 영사관에서 이미 이 수수료를 실제로 징수하기 시작했으나 시행 시기와 절차는 공관마다 차이가 있습니다. 기존 SEVIS·MRV 수수료와 달리 인터뷰 이전이 아니라 비자가 최종 승인된 시점에 징수됩니다.",
      },
      {
        heading: "총 비용 증가",
        body: "F-1 학생비자 신청자는 이제 SEVIS 수수료 350달러, MRV(비자 신청) 수수료 185달러, 비자 진실성 수수료 250달러를 합쳐 총 785달러를 준비해야 합니다. 규정상 비자 조건을 준수하면 만료 시 환급받을 수 있다고 명시돼 있지만, 구체적 환급 절차는 아직 완전히 확정되지 않았습니다.",
      },
      {
        heading: "인터뷰 면제 축소도 동시 진행",
        body: "2025년 10월 1일부터 미 국무부는 F/M/J 비자 신청자에 대한 인터뷰 면제 제도를 사실상 폐지해, 갱신 신청자를 포함한 대다수가 영사 대면 인터뷰를 다시 거쳐야 합니다. 비용 증가와 함께 인터뷰 예약 대기까지 길어질 수 있어 조기 준비가 더욱 중요해졌습니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=US%20student%20visa%20application%20documents%20and%20passport%20on%20desk%20with%20American%20flag%2C%20international%20student%20immigration%20fee%20concept%2C%20professional%20editorial%20photography%2C%20clean%20lighting&width=400&height=250&seq=news-7-v3&orientation=landscape",
  },
  {
    id: "8",
    title: "美 대학 신규 유학생 등록 20% 급감 — 조사 대학 84% '비자 정책이 원인'",
    category: "유학",
    date: "2026-05-11",
    summary:
      "2026년 봄학기 미국 대학 신규 유학생 등록이 전년 대비 20% 줄었고, 조사 대상 대학의 84%가 비자 정책을 주요 원인으로 꼽았습니다.",
    metaDescription:
      "美 대학 신규 유학생 등록이 20% 감소, 84%가 비자 정책을 주요 원인으로 지목했습니다.",
    sections: [
      {
        heading: "조사 개요",
        body: "국제교육자협회(NAFSA)가 149개 미국 대학을 대상으로 실시한 조사 결과가 2026년 5월 11일 발표됐습니다. 이는 2025년 11월 IIE '오픈도어스' 보고서가 밝힌 신규 유학생 등록 17% 감소에 이은 후속 조사로, 감소세가 더 뚜렷해졌음을 보여줍니다.",
      },
      {
        heading: "세부 수치",
        body: "조사에 따르면 2026년 봄학기 신규 학부 유학생 등록은 평균 20% 감소했고, 대학원 신규 등록은 24% 줄었습니다. 전미학생정보센터 자료로는 2026년 봄학기 국제 대학원생 등록이 전년 대비 4.3% 감소했으며, 특히 주립 4년제 대학에서는 9.2% 급감했습니다.",
      },
      {
        heading: "원인 분석",
        body: "조사 대상 149개 대학 중 84%가 '제한적인 비자 정책'을 유학생 유치의 주요 장애 요인으로 꼽았습니다. 이는 5개월 전 조사에서 같은 응답을 한 68%보다 크게 늘어난 수치입니다.",
      },
      {
        heading: "한국 학생에게 시사점",
        body: "경쟁 구도가 바뀌는 국면인 만큼, 지원 대학의 국제학생 비율 변화나 장학금 정책을 미리 확인할 필요가 있습니다. 인터뷰 면제 축소와 맞물려 비자 신청·인터뷰 일정을 예년보다 훨씬 여유 있게 준비하는 것이 중요해졌습니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Empty%20lecture%20hall%20with%20declining%20enrollment%20concept%2C%20university%20campus%20building%2C%20international%20student%20statistics%20chart%20overlay%2C%20professional%20editorial%20photography%2C%20clean%20lighting&width=400&height=250&seq=news-8-v2&orientation=landscape",
  },
  {
    id: "9",
    title: "서울 IB 후보학교 106곳으로 확대 — '한국형 바칼로레아' 본격 추진",
    category: "입시",
    date: "2026-04-14",
    summary:
      "서울시교육청이 2026년 IB 후보학교 91곳을 신규 지정, 참여 학교가 106곳으로 늘며 '한국형 바칼로레아' 도입을 본격화했습니다.",
    metaDescription:
      "서울 IB 후보학교가 106곳으로 늘며 '한국형 바칼로레아' 도입이 본격화되고 있습니다.",
    sections: [
      {
        heading: "확대 규모",
        body: "서울시교육청은 2026년 91개 학교를 IB 후보학교로 신규 지정했으며, 관심·후보·인증 단계를 합쳐 IB 프로그램에 참여하는 서울 소재 학교는 총 106곳으로 늘었습니다.",
      },
      {
        heading: "'한국형 바칼로레아' 구상",
        body: "서울시교육청은 IB 프레임워크를 한국 공교육에 맞게 현지화한 '한국형 바칼로레아'를 추진 중이며, 미래 역량 중심으로 교육과정·수업·평가 방식을 개편하는 것이 목표입니다.",
      },
      {
        heading: "교사·학교 지원 방안",
        body: "교육과정 개발을 위한 대학원 수준 교사 연구 트랙 신설, IB 교육자 자격증 프로그램 확대, 4개 권역별 학교 네트워크 구축, 과목·급별 맞춤 연수 제공 등이 제시됐습니다.",
      },
      {
        heading: "국제학교 재학생·학부모가 참고할 점",
        body: "공교육에서도 IB 후보학교가 빠르게 늘면서, 국제학교의 IB DP 교육과정에 대한 국내 대입·인식 기반도 함께 넓어지는 흐름입니다. 앞으로 국내 대학의 IB 성적 활용 전형이 확대될 가능성에도 주목할 만합니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Korean%20high%20school%20building%20exterior%20in%20Seoul%2C%20students%20in%20classroom%20discussion%2C%20international%20baccalaureate%20concept%2C%20professional%20educational%20photography%2C%20bright%20natural%20lighting&width=400&height=250&seq=news-9-v2&orientation=landscape",
  },
  {
    id: "1",
    title: "AP 세계 언어 6과목, 2027년 전면 디지털 전환 — 필수 '코스 프로젝트' 신설",
    category: "커리큘럼",
    date: "2026-03-16",
    summary:
      "프랑스어·독일어·이탈리아어·일본어·중국어·스페인어 AP가 2027년 5월부터 종이 없이 전면 디지털로 전환되고 필수 코스 프로젝트가 새로 추가됩니다.",
    metaDescription:
      "AP 세계 언어 6과목이 2027년 5월부터 전면 디지털로 전환되고 코스 프로젝트가 신설됩니다.",
    sections: [
      {
        heading: "대상 과목과 시점",
        body: "College Board는 6개 AP 세계 언어와 문화 과목의 프레임워크를 개정합니다. 2026-27학년도부터 새 커리큘럼이 적용되고, 2027년 5월 시험부터 Bluebook을 통한 전면 디지털 시험으로 전환되며 종이 시험은 폐지됩니다.",
      },
      {
        heading: "새로운 '코스 프로젝트'",
        body: "실제 원어 자료를 활용하는 필수 코스 프로젝트가 신설됩니다. 2026-27학년도 주제는 '예술과 창의성'(Unit 3)으로, 음악을 통해 목표 언어권의 문화적 산물·관행·관점을 탐구합니다.",
      },
      {
        heading: "시험 방식 변화",
        body: "학생은 CD플레이어 대신 마이크 달린 유선 헤드셋으로 Bluebook에 말하기 답변을 녹음합니다. 기존 자유응답형 말하기 문항은 새 말하기 과제로 대체되며, 시험 전에는 '개인 프로젝트 개요서(PPR)'만 제출합니다.",
      },
      {
        heading: "세부 일정",
        body: "2026년 여름 새 모의고사가 배포되고, 2027년 1월 코스 프로젝트 패킷이 공개되며, 2027년 4월 30일 PPR 제출이 마감됩니다. 해당 언어 AP를 준비 중인 국제학교 학생은 새 형식에 맞춘 말하기·프로젝트 연습을 미리 시작하는 것이 좋습니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Student%20practicing%20language%20speaking%20test%20with%20headset%20and%20laptop%2C%20digital%20exam%20preparation%2C%20modern%20study%20desk%2C%20professional%20educational%20photography%2C%20bright%20natural%20lighting&width=400&height=250&seq=news-1-v2&orientation=landscape",
  },
  {
    id: "2",
    title: "캐나다, 2026년 유학허가서 발급 대폭 축소 — 대학원생은 예외",
    category: "유학",
    date: "2025-12-20",
    summary:
      "캐나다 이민부가 2026년 스터디퍼밋 신청 상한을 30만9670건으로 정하고, 석·박사 과정생은 주정부 승인서 없이 신청 가능하도록 예외를 뒀습니다.",
    metaDescription:
      "캐나다가 2026년 스터디퍼밋 상한을 축소했지만, 석·박사 과정생은 예외를 인정했습니다.",
    sections: [
      {
        heading: "2026년 쿼터 개요",
        body: "캐나다 관보가 2025년 12월 20일 게재한 공식 고시에 따르면, 2026년 스터디퍼밋 신청 상한은 30만9670건입니다. IRCC는 신규 15만5000건, 갱신 25만3000건 등 총 40만8000건의 퍼밋 발급을 목표로 하며, 이는 2025년 대비 7%, 2024년 대비 16% 감소한 수치입니다.",
      },
      {
        heading: "석·박사 과정 예외 신설",
        body: "2026년 1월 1일부터 공립 지정교육기관(DLI)의 석사·박사 과정에 지원하는 유학생은 주/준주 승인서(PAL) 제출 의무에서 면제됩니다. 초·중·고교생, 교환학생 등도 예외 대상에 포함됐습니다.",
      },
      {
        heading: "근로·동반비자 관련 변경",
        body: "2026년 4월 1일부터는 프로그램 필수 실습이 전체 과정의 50% 이하인 경우 코업(co-op) 워크퍼밋 없이 현장 실습이 가능해집니다. 배우자 동반취업허가는 특정 석사·박사·전문학위 과정에만 적용되며, 단기 디플로마·컬리지 과정은 더 이상 대상이 아닙니다.",
      },
      {
        heading: "국제학교 학생에게 의미",
        body: "캐나다 정부가 일시체류자 비중을 줄이려는 정책 기조 속에 나온 조치로, 학부보다 대학원 유학을 계획 중인 학생에게는 행정 부담이 줄어드는 반면 전체 신규 발급 규모는 계속 축소되는 추세입니다. 캐나다 학부 유학을 준비한다면 지원을 서두르는 것이 안전합니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Canadian%20university%20campus%20with%20maple%20leaf%20flag%2C%20study%20permit%20documents%20on%20desk%2C%20international%20student%20visa%20concept%2C%20professional%20editorial%20photography%2C%20clean%20natural%20lighting&width=400&height=250&seq=news-2-v2&orientation=landscape",
  },
  {
    id: "3",
    title: "영국 명문 사립교 3곳, 2026년 8월 나란히 방콕 신규 진출",
    category: "학교 소식",
    date: "2025-12-09",
    summary:
      "덜위치칼리지, 하이게이트, 위컴애비 등 영국 명문 사립학교 3곳이 2026년 8월 방콕·촌부리에 잇따라 신규 캠퍼스를 엽니다.",
    metaDescription:
      "영국 명문 사립교 3곳이 2026년 8월 나란히 방콕·촌부리에 신규 캠퍼스를 엽니다.",
    sections: [
      {
        heading: "덜위치칼리지 방콕",
        body: "덜위치칼리지 인터내셔널이 방콕 방나 지역에 2026년 8월 개교하는 신규 캠퍼스로, 1단계에서는 만 3~11세 유아·초등 과정 최대 1000명을 수용하며 이후 중고등 과정을 더해 최대 1800명 규모로 확대할 계획입니다.",
      },
      {
        heading: "하이게이트 인터내셔널 스쿨 타일랜드",
        body: "영국 하이게이트 스쿨의 첫 해외 캠퍼스로, 태국 시암모터스그룹과의 협력으로 촌부리 시암컨트리클럽 인근에 2026년 8월 개교합니다. 만 2~18세를 대상으로 향후 최대 1400명까지 수용 가능하며 IGCSE·A레벨 등 영국 교육과정을 따릅니다.",
      },
      {
        heading: "위컴애비 인터내셔널 스쿨 방콕",
        body: "영국 위컴애비, BE Education, 태국 래빗홀딩스 3자 협력으로 설립되는 이 학교는 수완나품 국제공항 인근 기존 VERSO 인터내셔널 스쿨 부지에서 2026년 8월 개교하며, 유아부터 만 18세까지 통학·기숙 과정을 모두 제공합니다.",
      },
      {
        heading: "시사점",
        body: "세 학교 모두 영국식 IGCSE·A레벨 커리큘럼을 표방하며 같은 달 동시에 방콕·촌부리 지역에 문을 열어, 태국 내 영국계 사립 국제학교 선택지가 단기간에 크게 늘어나는 것으로 확인됩니다. 동남아 국제학교 유학을 고려하는 가정이라면 참고할 만한 소식입니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=British%20international%20boarding%20school%20campus%20in%20Southeast%20Asia%2C%20tropical%20setting%20with%20modern%20school%20building%2C%20professional%20educational%20photography%2C%20bright%20natural%20lighting&width=400&height=250&seq=news-3-v2&orientation=landscape",
  },
  {
    id: "4",
    title: "美 유학생 117만 명 역대 최다 — 인도, 처음으로 중국 제치고 1위",
    category: "유학",
    date: "2025-11-17",
    summary:
      "IIE 오픈도어스 2025 보고서에 따르면 2024/25학년도 미국 내 외국인 유학생이 117만 7,766명으로 전년 대비 5% 늘어 역대 최고치를 기록했습니다.",
    metaDescription:
      "美 유학생이 117만 7,766명으로 역대 최다를 기록, 인도가 처음 중국을 제쳤습니다.",
    sections: [
      {
        heading: "전체 규모",
        body: "국제교육연구소(IIE)가 2025년 11월 17일 발표한 오픈도어스 2025 보고서에 따르면, 2024/25학년도 미국 고등교육기관에 재학한 외국인 유학생은 200여 개국 출신 117만 7,766명으로 전년 대비 5% 증가해 역대 최다치를 경신했습니다.",
      },
      {
        heading: "출신국 순위 변화",
        body: "인도 출신이 36만 3,019명(전년 대비 10%↑)으로 처음으로 중국을 제치고 1위에 올랐고, 중국은 26만 5,919명(4%↓)으로 2위를 기록했습니다. 상위 25개 출신국 중 인도, 베트남, 방글라데시 등 12개국이 역대 최다치를 새로 썼습니다.",
      },
      {
        heading: "전공 및 학위과정 동향",
        body: "유학생의 57%가 STEM 전공이며, 수학·컴퓨터과학이 26%로 가장 큰 비중을 차지했습니다. 학사과정은 4% 증가해 팬데믹 이후 처음으로 유의미하게 늘었고, 대학원과정은 3년 연속 증가 후 처음 3% 감소했습니다.",
      },
      {
        heading: "2025년 가을학기 조짐",
        body: "보고서에 포함된 '2025 가을학기 스냅샷'에서는 2025/26학년도 초반 유학생 총수가 전년 대비 1% 감소한 것으로 나타나, 최근 비자 심사 강화에 대한 우려가 반영된 것으로 분석됩니다. 역대 최고치를 찍은 뒤 꺾이기 시작한 흐름이므로, 미국 유학을 준비 중이라면 최신 동향을 계속 확인하는 것이 좋습니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Diverse%20international%20students%20walking%20on%20US%20university%20campus%2C%20autumn%20academic%20atmosphere%2C%20professional%20educational%20photography%2C%20warm%20natural%20lighting&width=400&height=250&seq=news-4-v3&orientation=landscape",
  },
  {
    id: "5",
    title: "영국 졸업생 취업비자, 2027년부터 2년→18개월로 단축",
    category: "유학",
    date: "2025-10-14",
    summary:
      "영국 정부가 2025년 10월 이민규칙 개정을 통해 학사·석사 졸업생의 그래주에이트 비자를 2027년 1월부터 2년에서 18개월로 줄입니다.",
    metaDescription:
      "영국 그래주에이트 비자가 2027년부터 2년에서 18개월로 단축됩니다.",
    sections: [
      {
        heading: "개정 내용",
        body: "영국 내무부는 2025년 10월 14일 발표한 이민규칙 개정안(HC 1333)을 통해 그래주에이트 루트 비자의 체류 기간을 학사·석사 학위 취득자 기준 기존 2년에서 18개월로 단축한다고 밝혔습니다. 박사 학위 취득자는 기존과 같이 3년이 유지됩니다.",
      },
      {
        heading: "적용 시점",
        body: "새 규정은 2027년 1월 1일 이후 접수되는 그래주에이트 비자 신청부터 적용됩니다. 2026년 12월 31일까지 신청하는 졸업생은 기존과 같이 2년 체류 자격을 그대로 인정받습니다.",
      },
      {
        heading: "배경",
        body: "이번 조치는 2025년 5월 영국 정부가 발표한 이민 백서의 후속 조치로, 그래주에이트 비자 취득자 상당수가 취지에 맞는 전문직 일자리로 이어지지 못하고 있다는 정부 분석이 배경으로 제시됐습니다. 같은 개정안에는 학생비자 신청자의 생활비 증빙 기준 인상도 포함됐습니다.",
      },
      {
        heading: "유학 준비생에게 의미",
        body: "2026년 안에 영국 학위를 마치고 졸업 후 취업을 노리는 학생은 기존 2년 체류 혜택을 받을 수 있지만, 2027년 이후 졸업 예정자는 취업 준비 기간이 18개월로 줄어드는 점을 감안해 인턴십·취업 연계가 강한 대학·전공을 미리 살펴볼 필요가 있습니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=UK%20graduate%20student%20holding%20visa%20documents%2C%20London%20skyline%20in%20background%2C%20professional%20editorial%20photography%2C%20clean%20natural%20lighting&width=400&height=250&seq=news-5-v3&orientation=landscape",
  },
  {
    id: "6",
    title: "호주, 2026년 국제학생 입학 계획수준 29만5000명으로 확대",
    category: "유학",
    date: "2025-08-04",
    summary:
      "호주 정부가 2026년 국제학생 신규 입학 계획수준을 29만5000명으로 발표, 2025년보다 2만5000명 늘렸습니다.",
    metaDescription:
      "호주가 2026년 국제학생 입학 계획수준을 29만5000명으로 확대 발표했습니다.",
    sections: [
      {
        heading: "발표 개요",
        body: "호주 정부는 2025년 8월 4일, 2026년 국가계획수준(National Planning Level)을 29만5000명으로 발표했습니다. 이는 2025년(27만 명) 대비 2만5000명, 약 9% 증가한 수치입니다.",
      },
      {
        heading: "NPL의 실제 성격",
        body: "NPL은 학생비자 발급을 제한하는 '쿼터'가 아니라 비자 심사의 우선순위를 정하는 장치입니다. 각 교육기관이 배정된 NPL 물량에 도달하기 전까지는 신속 심사가 이뤄지고, 물량 소진 후 신청도 계속 접수되지만 심사 속도가 느려지는 구조입니다.",
      },
      {
        heading: "대학 대상 신규 예외",
        body: "2026년부터 호주 내에서 고등학교를 마치고 진학하는 학생, 인가된 경로기관이나 TAFE를 거쳐 대학에 진학하는 학생은 해당 대학의 NPL 산정에서 제외됩니다.",
      },
      {
        heading: "국제학교 학생에게 의미",
        body: "태평양 도서국·동티모르 출신 학생, 호주 정부 장학생 등은 계속 우선 비자 심사 대상으로 유지됩니다. 미국·영국 비자 정책이 까다로워지는 가운데, 호주는 상대적으로 입학 규모를 늘리는 흐름이어서 대안 유학지로 검토해볼 만합니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Australian%20university%20campus%20building%20with%20Sydney%20skyline%2C%20international%20students%20walking%20on%20campus%2C%20professional%20educational%20photography%2C%20bright%20natural%20lighting&width=400&height=250&seq=news-6-v2&orientation=landscape",
  },
];

export const NEWS_CATEGORIES = [
  "전체",
  "입시",
  "커리큘럼",
  "유학",
  "학교 소식",
];