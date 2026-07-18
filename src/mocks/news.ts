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
  sections: NewsSection[];
  image: string;
}

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "28",
    title: "컬럼비아대 SAT·ACT 필수 부활 — 아이비리그 8개교 전원 표준시험 요구",
    category: "입시",
    date: "2026-07-18",
    summary:
      "컬럼비아대학교가 2027-28학년도 입시부터 SAT·ACT 제출을 다시 의무화하며, 팬데믹 이후 시험선택제를 유지해온 아이비리그 8개교가 모두 표준화 시험을 필수 요건으로 되돌렸습니다.",
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
    title: "2026 하반기 국제학교 교육 트렌드: AI·에듀테크가 바꾸는 교실",
    category: "커리큘럼",
    date: "2026-06-28",
    summary:
      "2026년 하반기, 국제학교 교실에 AI 기반 맞춤형 학습과 에듀테크 도구가 본격 도입되고 있습니다. 변화하는 교육 환경에 적응하는 법을 알아보세요.",
    sections: [
      {
        heading: "AI가 바꾸는 국제학교 교실",
        body: "2026년 하반기, 국제학교 교육 현장에 AI 기반 학습 도구가 전면 도입되기 시작했습니다. 기존의 일률적인 강의식 수업에서 벗어나, 학생 개개인의 학습 속도와 이해도에 맞춘 적응형 학습이 가능해졌습니다. 특히 ChatGPT, Khanmigo, Duolingo Max 같은 AI 튜터 도구들은 학생들이 수업 시간 외에도 개인 맞춤형 피드백을 받을 수 있게 해줍니다.",
      },
      {
        heading: "IB·AP 평가에도 AI 활용 본격화",
        body: "IB와 AP 평가에서도 AI 활용이 늘어나는 추세입니다. IB는 2026년부터 일부 과목의 IA 평가에 AI 유사도 검사 도구를 도입했으며, 학생들에게도 연구 보조 도구로서의 AI 사용을 제한적으로 허용하기 시작했습니다. 단순히 AI가 쓴 글을 제출하는 것이 아니라, AI를批判적으로 활용하는 능력 자체가 평가 요소로 자리잡고 있습니다.",
      },
      {
        heading: "에듀테크 도구, 선택이 아닌 필수",
        body: "Notion, Obsidian, Quizlet, Anki 같은 디지털 학습 도구들은 이제 국제학교 학생들에게 선택이 아닌 필수가 되었습니다. 특히 IB Extended Essay나 AP 리서치 페이퍼를 작성할 때, 디지털 노트 정리 도구와 인용 관리 도구(Zotero, Mendeley)를 능숙하게 다루는 능력이 학업 성취도를 크게 좌우합니다. 학교 측에서도 디지털 리터러시 교육을 정규 커리큘럼에 포함하는 추세입니다.",
      },
      {
        heading: "개인 맞춤형 학습 경로의 시대",
        body: "AI와 러닝 애널리틱스의 결합으로, 학생 개인에게 최적화된 학습 경로를 제공하는 것이 가능해졌습니다. 학생의 강점과 약점을 데이터로 분석하여, 어떤 과목에서 어떤 유형의 추가 학습이 필요한지 자동으로 추천해주는 시스템이 국제학교에 도입되고 있습니다. 이는 기존의 '모두가 같은 진도를 따라가는' 교육 모델을 근본적으로 바꾸는 변화입니다.",
      },
      {
        heading: "학부모가 알아야 할 디지털 학습 전략",
        body: "에듀테크 도구가 넘쳐나는 시대일수록, 학부모의 역할은 더 중요해집니다. 무분별한 도구 사용보다는, 학생의 학습 스타일과 목표에 맞는 도구를 선택하는 안목이 필요합니다. 또한 화면 시간 관리와 전통적인 독서·필사 학습의 균형을 유지하는 것도 중요합니다. 학교와의 소통을 통해 학교에서 권장하는 에듀테크 도구와 활용법을 숙지하는 것이 좋습니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Modern%20international%20school%20classroom%20with%20AI%20learning%20tools%20on%20tablets%20and%20laptops%2C%20diverse%20students%20collaborating%20with%20technology%2C%20bright%20futuristic%20educational%20environment%2C%20clean%20design%2C%20natural%20daylight%2C%20professional%20educational%20photography%20with%20warm%20tones&width=400&height=250&seq=news-10&orientation=landscape",
  },
  {
    id: "11",
    title: "국제학교 여름방학 캠프 & 인턴십 완벽 가이드 2026",
    category: "학교 소식",
    date: "2026-06-27",
    summary:
      "방학을 알차게 보내기 위한 국제학교 추천 여름 캠프, 인턴십, 봉사활동 프로그램을 총정리했습니다. 대학 원서에 강력한 스토리를 더하세요.",
    sections: [
      {
        heading: "방학 활동, 대학 원서의 숨은 무기",
        body: "국제학교 학생들에게 여름방학은 단순한 휴식 기간이 아닙니다. 대학 입학사정관은 학생이 방학을 어떻게 보냈는지를 통해 학문적 열정, 리더십, 사회적 기여도를 평가합니다. 잘 선택한 여름 캠프나 인턴십 경험은 대학 원서에서 강력한 차별화 포인트가 됩니다. 중요한 것은 '무엇을 했는가'보다 '왜 했는지, 무엇을 배웠는지'입니다.",
      },
      {
        heading: "STEM 분야 추천 프로그램",
        body: "과학·기술·공학·수학에 관심 있는 학생이라면 MIT RSI(Research Science Institute), Stanford SIMR(Summer Institutes in Medicine and Research), UC COSMOS 프로그램을 주목하세요. 국내에서는 KAIST 사이언스 캠프, 포스텍 영재 프로그램이 알차고 경쟁력 있습니다. 실제 연구실에서 멘토와 함께 프로젝트를 수행하는 경험은 대학 원서에서 가장 강력한 스토리가 됩니다.",
      },
      {
        heading: "인문·사회·비즈니스 분야 프로그램",
        body: "인문사회 분야에서는 Yale Young Global Scholars, Georgetown Summer High School Programs, UPenn Social Justice Research Academy가 대표적입니다. 비즈니스와 리더십에 관심 있다면 Wharton Leadership in the Business World, Brown Leadership Institute를 추천합니다. 이 프로그램들은 해당 대학의 실제 교수진이 강의를 진행하여, 진학 후에도 큰 도움이 됩니다.",
      },
      {
        heading: "지역사회 봉사와 자체 프로젝트",
        body: "꼭 해외 명문 프로그램이 아니더라도, 지역사회에서 의미 있는 활동을 기획하고 실행하는 것도 큰 가치가 있습니다. 지역 도서관에서 영어 독서 멘토링을 운영하거나, 환경 보호 캠페인을 기획하거나, 코딩을 가르치는 무료 워크숍을 여는 등 스스로 기획한 프로젝트는 오히려 더 진정성 있게 평가됩니다. 중요한 것은 '지속성'과 '영향력'입니다.",
      },
      {
        heading: "프로그램 선택 시 체크리스트",
        body: "프로그램을 선택할 때는 다음을 확인하세요: ① 자신의 진로 목표와 연결되는가, ② 단순 체험이 아닌 실질적인 배움이 있는가, ③ 지원 마감일과 준비 기간은 충분한가, ④ 프로그램 수료 후 대학 원서에 어떻게 녹여낼 수 있는가. 또한 프로그램 비용 대비 가치도 고려해야 합니다. 무료이거나 장학금이 있는 프로그램도 많으니, 적극적으로 찾아보세요.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Diverse%20high%20school%20students%20participating%20in%20summer%20camp%20program%2C%20collaborative%20outdoor%20learning%20environment%2C%20bright%20summer%20atmosphere%2C%20engaging%20educational%20activities%2C%20modern%20campus%20setting%2C%20professional%20educational%20photography%2C%20warm%20natural%20lighting%20with%20vibrant%20colors&width=400&height=250&seq=news-11&orientation=landscape",
  },
  {
    id: "12",
    title: "해외 대학 2027 입시 에세이 트렌드: '진정성'이 키워드다",
    category: "유학",
    date: "2026-06-26",
    summary:
      "2027학년도 해외 대학 입시 에세이의 핵심 키워드는 '진정성'입니다. 스펙 나열보다 개인의 이야기를 담아내는 에세이 전략을 공개합니다.",
    sections: [
      {
        heading: "2027 입시 에세이, 무엇이 달라졌나",
        body: "2027학년도 해외 대학 입시에서 에세이의 중요성이 그 어느 때보다 커졌습니다. 팬데믹 이후 표준화 시험의 비중이 줄어들면서, 입학사정관은 에세이를 통해 지원자의 인성, 가치관, 성장 가능성을 더 깊이 평가하고 있습니다. 특히 AI가 쓴 에세이를 걸러내기 위한 검증 시스템이 강화되며, '진정성'이 합격을 가르는 결정적 요소가 되었습니다.",
      },
      {
        heading: "입학사정관이 찾는 3가지 요소",
        body: "2027년 입시에서 입학사정관이 에세이에서 찾는 핵심 요소는 세 가지입니다. 첫째, 자기 인식 — 자신의 강점과 약점을 솔직하게 이해하고 있는가. 둘째, 지적 호기심 — 단순한 성적 이상으로 배움을 향한 진정한 열정이 있는가. 셋째, 기여 의지 — 캠퍼스 커뮤니티에 어떤 방식으로 기여할 수 있는가. 이 세 가지를 자신만의 구체적인 경험과 연결하여 풀어내는 것이 중요합니다.",
      },
      {
        heading: "AI 시대의 에세이, 절대 하면 안 되는 것",
        body: "ChatGPT 같은 AI 도구에 에세이를 대신 쓰게 하는 것은 절대 금물입니다. 대학들은 이미 AI 생성 텍스트를 탐지하는 시스템을 도입했으며, 적발 시 불합격은 물론 블랙리스트에 오를 수도 있습니다. AI는 브레인스토밍 파트너나 문법 교정 도구로만 제한적으로 활용하고, 에세이의 핵심 내용은 반드시 자신의 경험과 생각으로 채워야 합니다.",
      },
      {
        heading: "성공적인 에세이를 위한 5단계 전략",
        body: "효과적인 에세이 작성을 위한 5단계 전략을 소개합니다: ① 자신의 인생에서 전환점이 된 순간 5개 리스트업하기, ② 각 순간에서 배운 교훈과 성장 포인트 정리하기, ③ 그 경험이 왜 지원하는 대학과 전공으로 이어졌는지 연결하기, ④ 초안을 3개 이상 버전으로 작성한 후 비교하기, ⑤ 최소 3명 이상에게 피드백을 받은 후 최종 수정하기. 이 과정에 최소 4~6주를 투자해야 완성도 높은 에세이가 나옵니다.",
      },
      {
        heading: "국제학교 학생만의 강점 살리기",
        body: "국제학교 학생들은 다문화 환경에서 자란 독특한 경험을 가지고 있습니다. 여러 언어와 문화를 넘나들며 형성된 유연한 사고방식, 다양한 국적의 친구들과 협업한 경험, 글로벌 이슈에 대한 폭넓은 시야는 강력한 에세이 소재입니다. 자신의 문화적 배경을 '핸디캡'이 아닌 '자산'으로 바라보고, 그것이 캠퍼스에 어떤 다양성을 더할 수 있을지 설득력 있게 풀어내세요.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=International%20student%20thoughtfully%20writing%20college%20application%20essay%20in%20cozy%20modern%20study%20room%2C%20warm%20ambient%20lighting%2C%20notebook%20and%20pen%20on%20wooden%20desk%2C%20plants%20and%20bookshelves%20in%20background%2C%20calm%20and%20reflective%20atmosphere%2C%20professional%20editorial%20photography%20with%20natural%20tones&width=400&height=250&seq=news-12&orientation=landscape",
  },
  {
    id: "7",
    title: "2026 여름방학, 국제학교 학생을 위한 학습 로드맵",
    category: "커리큘럼",
    date: "2026-06-25",
    summary:
      "국제학교 학생들에게 여름방학은 다음 학기를 준비하는 골든타임입니다. IB, AP, SAT 과목별 여름방학 학습 전략을 공개합니다.",
    sections: [
      {
        heading: "여름방학, 왜 중요한가",
        body: "국제학교 학생들에게 여름방학은 단순한 휴식 기간이 아닙니다. 평소 학기 중에는 시간이 부족해 깊이 있게 다루지 못했던 과목을 보충하고, 다음 학기 커리큘럼을 미리 준비할 수 있는 전략적 시기입니다. 특히 IB 디플로마 과정이나 AP 과목을 앞둔 학생이라면 이 방학을 어떻게 보내느냐에 따라 2학기 성적이 크게 달라질 수 있습니다.",
      },
      {
        heading: "IB 학생: IA·EE 집중 대비",
        body: "IB 학생들은 여름방학을 이용해 내부 평가 과제를 먼저 준비하는 것이 효과적입니다. 과학 과목 실험 주제를 선정하고 예비 조사를 진행하거나, 수학 IA의 데이터 수집과 분석 방향을 설계하세요. 확장 에세이의 경우 주제를 확정하고 최소 1,000단어 이상의 초안을 작성해두면 개학 후 큰 부담을 덜 수 있습니다.",
      },
      {
        heading: "AP 학생: 취약 과목 집중 보강",
        body: "AP 시험을 앞둔 학생들은 취약 과목에 집중하는 것이 핵심입니다. AP Calculus, AP Physics 같은 계산 중심 과목은 매일 1시간씩 꾸준히 문제를 풀며 개념을 복습하고, AP English, AP History 같은 읽기·쓰기 중심 과목은 매주 에세이 1편씩 작성하며 표현력을 키우세요. 여름방학 8주 동안 하루 2~3시간의 집중 학습만으로도 큰 차이를 만들 수 있습니다.",
      },
      {
        heading: "SAT·ACT: 여름이 최적의 준비 시기",
        body: "SAT나 ACT를 준비하는 학생에게 여름방학은 최적의 시기입니다. 학기 중에는 학교 과제와 병행하기 어려웠던 모의시험을 주 1회 이상 풀고, 오답 패턴을 분석하여 취약 유형을 파악하세요. 특히 2024년부터 디지털 전환된 SAT의 경우, 새로운 시험 환경에 익숙해지는 것이 중요하므로 디지털 플랫폼에서의 실전 연습을 충분히 해야 합니다.",
      },
      {
        heading: "균형 잡힌 방학 계획의 비결",
        body: "여름방학 학습 계획은 과하지 않아야 합니다. 하루 3~4시간의 집중 학습과 충분한 휴식을 병행하는 것이 장기적인 학습 효율을 높입니다. 주말에는 리딩 리스트에 있는 책을 읽거나, 관심 분야의 온라인 코스를 수강하며 지적 호기심을 키우는 것도 좋습니다. 중요한 것은 '꾸준함'이지 '양'이 아닙니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Student%20planning%20summer%20study%20schedule%20with%20colorful%20calendar%20and%20notebook%20on%20desk%2C%20organized%20academic%20workspace%2C%20bright%20natural%20lighting%20through%20window%2C%20warm%20and%20clean%20modern%20interior%2C%20educational%20planning%20concept%2C%20professional%20educational%20photography%2C%20bright%20atmosphere&width=400&height=250&seq=news-7-v2&orientation=landscape",
  },
  {
    id: "8",
    title: "2027학년도 국제학교 입시 일정 총정리",
    category: "입시",
    date: "2026-06-24",
    summary:
      "2027학년도 국제학교 입시 일정이 속속 발표되고 있습니다. 주요 국제학교별 원서 마감일과 전형 일정을 확인하고 미리 준비하세요.",
    sections: [
      {
        heading: "2027학년도 입시, 벌써 시작됐다",
        body: "2027학년도 국제학교 입시 일정이 주요 학교들을 중심으로 발표되기 시작했습니다. 많은 학부모들이 입시를 연말부터 준비하지만, 실제로는 여름방학이 시작되는 7월부터 본격적인 준비에 들어가야 합니다. 서류 준비, 면접 대비, 영어 인터뷰 연습 등 준비할 것이 많기 때문에 미리 일정을 파악하는 것이 중요합니다.",
      },
      {
        heading: "주요 국제학교 원서 마감일",
        body: "대부분의 주요 국제학교는 1차 원서 마감일을 11월에서 12월 사이에 설정합니다. 학교에 따라 9~10월에 조기 전형을 실시하는 곳도 있고, 1~2월에 2차 추가 모집을 진행하는 곳도 있습니다. 희망하는 학교의 홈페이지를 통해 공식 일정을 반드시 확인하고, 원서 마감 최소 2주 전에는 모든 서류를 준비 완료하는 것이 안전합니다.",
      },
      {
        heading: "서류 준비 체크리스트",
        body: "입시 서류 준비는 생각보다 많은 시간이 소요됩니다. 영문 성적 증명서, 재학 증명서, 추천서, 자기소개서, 포트폴리오, 공인 영어 성적까지 준비해야 합니다. 특히 추천서는 담임 선생님과 과목 선생님께 최소 한 달 전에 요청하는 것이 예의이며, 자기소개서는 여러 번의 퇴고를 거쳐 완성도를 높여야 합니다.",
      },
      {
        heading: "면접과 배치고사 대비 전략",
        body: "국제학교 입시에서는 면접과 배치고사가 핵심 전형입니다. 면접은 주로 영어로 진행되며, 학생의 의사소통 능력, 사고력, 학교와의 적합성을 평가합니다. 배치고사는 영어, 수학을 중심으로 학교별 난이도가 다르므로, 지원 학교의 기출 유형을 사전에 파악하고 대비하는 것이 효과적입니다.",
      },
      {
        heading: "합격 가능성을 높이는 조기 준비",
        body: "입시 성공의 핵심은 조기 준비에 있습니다. 여름방학 동안 자기소개서 초안을 작성하고, 영어 인터뷰 연습을 시작하며, 부족한 과목을 보강하세요. 또한 학교 설명회와 캠퍼스 투어에 참석하여 학교에 대한 이해도를 높이고, 지원 동기를 구체화하는 것도 면접에서 큰 도움이 됩니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Modern%20international%20school%20admission%20office%20with%20application%20documents%20on%20desk%2C%20organized%20professional%20setting%2C%20warm%20natural%20lighting%2C%20clean%20educational%20environment%2C%20school%20brochure%20and%20forms%2C%20professional%20photography%20with%20bright%20atmosphere&width=400&height=250&seq=news-8&orientation=landscape",
  },
  {
    id: "9",
    title: "해외 대학 서머 프로그램, 국제학교 학생이 꼭 알아야 할 5가지",
    category: "유학",
    date: "2026-06-22",
    summary:
      "아이비리그와 명문대에서 제공하는 서머 프로그램은 대학 진학에 큰 도움이 됩니다. 선정 기준과 지원 전략을 알아보세요.",
    sections: [
      {
        heading: "서머 프로그램, 왜 중요한가",
        body: "해외 명문대가 주최하는 서머 프로그램은 단순한 체험 이상의 가치를 가집니다. 대학 진학 원서에서 지원자의 학문적 열정과 탐구 정신을 입증할 수 있는 강력한 증거가 되며, 해당 대학의 학풍과 커리큘럼을 미리 경험할 수 있는 기회이기도 합니다. 특히 아이비리그와 Oxbridge의 서머 프로그램은 입학사정관에게 긍정적인 인상을 남깁니다.",
      },
      {
        heading: "어떤 프로그램이 가치 있을까",
        body: "단순한 투어나 문화 체험 위주의 프로그램보다는, 실제 대학 강의를 수강하거나 연구 프로젝트에 참여하는 학술 중심 프로그램이 가치가 높습니다. Harvard Secondary School Program, Stanford Summer Session, Yale Young Global Scholars, MIT LaunchX 등은 대학 진학에 실질적인 도움이 되는 대표적인 프로그램입니다.",
      },
      {
        heading: "지원 자격과 선정 기준",
        body: "대부분의 명문대 서머 프로그램은 에세이, 추천서, 학교 성적, 공인 영어 점수를 요구합니다. TOEFL 100점 이상 또는 IELTS 7.0 이상이 기본 요건이며, 프로그램에 따라 SAT 점수나 포트폴리오를 추가로 요구하기도 합니다. 선정 과정은 실제 대학 입시와 유사한 수준으로 진행되므로 철저한 준비가 필요합니다.",
      },
      {
        heading: "지원 시기와 마감일",
        body: "서머 프로그램 지원은 보통 전년도 11월부터 당해 2월까지 진행됩니다. 인기 프로그램은 조기 마감되거나 경쟁률이 높으므로, 12월까지 지원을 완료하는 것이 유리합니다. 합격자 발표는 3~4월에 이루어지며, 이후 비자 발급과 항공 예약 등의 실무 준비에 최소 2개월이 소요됩니다.",
      },
      {
        heading: "참가 경험을 원서에 활용하는 법",
        body: "서머 프로그램 참가 경험은 단순히 '참가했다'는 사실만으로는 부족합니다. 프로그램에서 무엇을 배웠고, 어떤 프로젝트를 수행했으며, 그 경험이 자신의 진로 목표와 어떻게 연결되는지 구체적으로 서술할 수 있어야 합니다. 프로그램 수료 후에는 반드시 참가 소감과 배운 점을 기록해두고, 대학 원서 작성 시 구체적인 사례로 활용하세요.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=International%20students%20participating%20in%20summer%20academic%20program%20at%20prestigious%20university%20campus%2C%20collaborative%20learning%20environment%2C%20bright%20summer%20atmosphere%2C%20modern%20classroom%20with%20diverse%20students%2C%20professional%20educational%20photography%2C%20warm%20natural%20lighting&width=400&height=250&seq=news-9&orientation=landscape",
  },
  {
    id: "1",
    title: "2026년 IB 시험 개편안 발표... 주목해야 할 변화 3가지",
    category: "커리큘럼",
    date: "2026-06-20",
    summary:
      "2026년부터 IB 디플로마 프로그램 일부 과목에서 평가 방식이 변경됩니다. 학생과 학부모가 미리 알아야 할 핵심 변경사항을 정리했습니다.",
    sections: [
      {
        heading: "개편 개요",
        body: "2026년 IB 시험 개편안이 발표되었습니다. 이번 개편에서는 주로 과목별 내부 평가(IA) 비중 조정과 일부 과목의 시험 형식 변경이 포함됩니다. 과학, 수학, 영어 등 주요 과목에서 중요한 변화가 예고되어 있어, 학생과 학부모의 주목이 필요합니다.",
      },
      {
        heading: "과학 과목: 실험 평가 방식 개선",
        body: "과학 과목(물리, 화학, 생물)의 실험 평가 방식이 개선됩니다. 기존의 단순 실험 보고서에서 벗어나, 문제 해결 중심의 탐구 과제로 전환됩니다. 학생들은 단순히 실험 결과를 기록하는 것이 아니라, 주어진 문제를 분석하고 해결 방안을 제시하는 능력을 평가받게 됩니다.",
      },
      {
        heading: "수학: 실생활 적용 문제 강화",
        body: "수학 AA 및 AI의 시험 문제 유형이 다양화됩니다. 실생활 적용 문제 비중이 늘어나고, 단순 계산보다는 해석과 분석 능력을 평가하는 방향으로 변화합니다. 학생들은 수학적 개념을 실제 상황에 적용하고, 데이터를 해석하여 결론을 도출하는 능력이 더 중요해집니다.",
      },
      {
        heading: "영어 A: 비평적 관점 평가 강화",
        body: "영어 A 문학 에세이의 평가 기준이 더 세분화됩니다. 텍스트 분석의 깊이와 비평적 관점의 제시가 더 중요하게 평가됩니다. 학생들은 단순한 줄거리 요약이 아닌, 문학적 장치와 작가의 의도를 심층적으로 분석하고 자신만의 비평적 관점을 제시해야 합니다.",
      },
      {
        heading: "대비 전략",
        body: "이러한 변화에 대비하기 위해서는 학생들이 평가 기준을 정확히 이해하고, 새로운 유형의 문제에 익숙해질 필요가 있습니다. 선행 학습보다는 비판적 사고와 분석 능력을 키우는 것이 핵심이며, 평가 기준 변화에 맞춰 학습 전략을 조정해야 합니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Students%20taking%20international%20exam%20in%20modern%20classroom%2C%20focused%20academic%20atmosphere%2C%20test%20papers%20on%20desk%2C%20professional%20educational%20photography%2C%20clean%20neutral%20background%2C%20bright%20lighting&width=400&height=250&seq=news-1&orientation=landscape",
  },
  {
    id: "2",
    title: "국제학교 입시, 2026년 상반기 합격 전략 가이드",
    category: "입시",
    date: "2026-06-15",
    summary:
      "2026년 상반기 국제학교 입시가 시작됩니다. 서류 전형과 면접에서 높은 평가를 받기 위한 핵심 전략을 공개합니다.",
    sections: [
      {
        heading: "2026년 입시 전망",
        body: "2026년 상반기 국제학교 입시가 본격적으로 시작됩니다. 올해 입시는 전년 대비 경쟁률이 다소 상승할 것으로 예상되며, 특히 영재학급과 IB 프로그램 지원자가 증가하고 있습니다. 학교별 정원 변화와 새로운 선발 기준을 미리 파악하는 것이 중요합니다.",
      },
      {
        heading: "서류 전형: 학업 역량을 입증하라",
        body: "서류 전형에서 핵심은 학생의 학업적 역량과 잠재력을 명확히 보여주는 것입니다. 단순한 성적 나열이 아닌, 과목별 학습 성취도와 개선 과정을 구체적으로 서술해야 합니다. 특히 IB나 AP 과목에서의 성과, 학교 내외 대회 수상 경력, 그리고 학생의 학습 태도를 보여줄 수 있는 추천서가 중요합니다.",
      },
      {
        heading: "면접 준비: 의사소통과 사고력",
        body: "면접 준비에서는 학생의 의사소통 능력과 비판적 사고력을 평가합니다. 학교의 교육 철학과 커리큘럼에 대한 이해를 바탕으로, 자신의 학습 목표와 연결 지어 설명하는 것이 중요합니다. 암기식 답변보다는 자신의 경험과 생각을 논리적으로 표현하는 연습이 필요합니다.",
      },
      {
        heading: "과외 활동: 깊이 있는 경험",
        body: "과외 활동과 봉사 활동의 질도 평가 요소입니다. 다양한 활동을 나열하는 것보다는 한 분야에서 깊이 있는 경험과 성과를 보여주는 것이 유리합니다. 예술, 스포츠, 학술, 봉사 등 한 분야에서 2년 이상 지속한 활동과 그 과정에서의 성장과 성과를 구체적으로 서술하세요.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Student%20and%20parent%20meeting%20with%20school%20counselor%2C%20professional%20consultation%2C%20modern%20office%20setting%2C%20educational%20guidance%2C%20warm%20lighting%2C%20neutral%20background%2C%20professional%20photography&width=400&height=250&seq=news-2&orientation=landscape",
  },
  {
    id: "3",
    title: "AP 과목 선택 가이드: 미래 전공과 연계하는 방법",
    category: "커리큘럼",
    date: "2026-06-10",
    summary:
      "AP 과목은 단순히 많이 응시하는 것보다, 미래 전공과 연계하여 전략적으로 선택하는 것이 중요합니다.",
    sections: [
      {
        heading: "AP 과목 선택의 핵심 원칙",
        body: "AP 과목 선택은 미국 대학 진학을 준비하는 학생에게 매우 중요한 결정입니다. 단순히 AP 과목을 많이 응시한다고 해서 유리한 것은 아닙니다. 대학은 학생이 선택한 과목의 난이도와 미래 전공과의 연계성을 평가합니다. 전략적인 선택이 필요합니다.",
      },
      {
        heading: "공학·자연과학 계열",
        body: "미래 전공이 공학이나 자연과학 계열이라면 AP Calculus BC와 AP Physics C가 필수적입니다. AP Chemistry나 AP Biology도 강력한 추천 과목입니다. 특히 AP Physics C는 대학에서 물리학 기초 과목을 면제받을 수 있어, 공학 진학을 준비하는 학생에게 매우 유리합니다.",
      },
      {
        heading: "경영학·경제학 계열",
        body: "경영학이나 경제학을 희망한다면 AP Microeconomics, AP Macroeconomics, AP Statistics를 추천합니다. AP Psychology도 인문·사회 계열 전공과 연계하여 유용합니다. AP Statistics는 데이터 분석 능력을 보여줄 수 있어, 현대 경영학과 경제학에서 필수적인 역량을 입증할 수 있습니다.",
      },
      {
        heading: "인문학·예술 계열",
        body: "인문학이나 예술 계열을 지망하는 학생은 AP English Literature, AP History 계열, AP Art History 등을 선택하여 학문적 깊이를 보여줄 수 있습니다. AP English Literature는 대학 에세이 작성 능력을 향상시키는 데도 큰 도움이 됩니다.",
      },
      {
        heading: "균형 잡힌 수업 계획",
        body: "과목 선택 시 학생의 현재 학업 수준과 시간 관리 능력도 고려해야 합니다. 한 학기에 3~4과목을 준비하면서 기존 학교 과목 학습을 소홀히 하지 않도록 균형 잡힌 계획이 필요합니다. 학교 성적과 AP 성적의 균형이 중요합니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Student%20planning%20academic%20courses%20on%20laptop%2C%20course%20selection%20screen%2C%20modern%20study%20desk%2C%20organized%20planner%2C%20educational%20planning%2C%20bright%20clean%20background%2C%20professional%20photography&width=400&height=250&seq=news-3&orientation=landscape",
  },
  {
    id: "4",
    title: "해외 명문대 진학, 조기 준비가 핵심입니다",
    category: "유학",
    date: "2026-06-05",
    summary:
      "아이비리그, Oxbridge 등 해외 명문대 진학을 목표로 한다면 10학년부터 체계적인 준비가 필요합니다.",
    sections: [
      {
        heading: "명문대 진학, 종합적인 평가",
        body: "해외 명문대 진학은 단순히 좋은 성적만으로 가능한 것이 아닙니다. 학업 역량, 과외 활동, 리더십, 사회적 기여도 등 다양한 요소를 종합적으로 평가합니다. 각 요소를 균형 있게 준비하는 전략이 필요합니다.",
      },
      {
        heading: "10학년: 기초 학업 역량 다지기",
        body: "10학년부터는 기초 학업 역량을 다지는 시기입니다. IB나 AP 과목에서 높은 예상 등급을 받을 수 있도록 수학과 영어 기초를 확실히 다져야 합니다. 또한, 다양한 과외 활동을 탐색하며 자신의 관심 분야를 찾는 것이 중요합니다.",
      },
      {
        heading: "11학년: 본격적인 준비 시작",
        body: "11학년은 본격적인 준비 시기입니다. SAT/ACT 시험 준비, 과외 활동 심화, 학교 리더십 활동, 그리고 진학 상담을 시작해야 합니다. 이 시기에 선택한 활동과 성과가 대학 원서의 핵심 소재가 됩니다.",
      },
      {
        heading: "12학년: 원서 작성과 마무리",
        body: "12학년 1학기에는 대학 원서 작성이 집중됩니다. 에세이는 학생의 개성과 성장 과정을 보여주는 핵심 자료이므로, 여러 차례 수정을 거쳐 완성도를 높여야 합니다. 또한, 대학 방문과 입학 설명회 참석, 현지 학생 인터뷰 등을 통해 학교에 대한 깊은 이해를 보여주는 것도 중요합니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=International%20students%20researching%20university%20applications%20in%20modern%20academic%20counseling%20center%2C%20college%20brochures%20and%20laptops%20on%20desk%2C%20focused%20collaborative%20atmosphere%2C%20warm%20natural%20lighting%20through%20large%20windows%2C%20clean%20modern%20interior%2C%20professional%20educational%20photography%2C%20bright%20academic%20environment&width=400&height=250&seq=news-4-v2&orientation=landscape",
  },
  {
    id: "5",
    title: "국제학교 vs 일반고: 어떤 선택이 내게 맞을까?",
    category: "학교 소식",
    date: "2026-05-28",
    summary:
      "국제학교와 일반 고등학교의 교육 방식, 커리큘럼, 진학 경로를 비교하여 학생에게 맞는 선택을 도와드립니다.",
    sections: [
      {
        heading: "두 학교의 근본적인 차이",
        body: "국제학교와 일반 고등학교는 전혀 다른 교육 철학과 학습 환경을 제공합니다. 학생의 성향, 학업 목표, 향후 진학 계획에 따라 적합한 선택이 달라집니다. 객관적인 비교를 통해 본인에게 맞는 환경을 찾아보세요.",
      },
      {
        heading: "국제학교: 자기 주도 학습",
        body: "국제학교는 IB, AP, A-Level 등 국제 인증 커리큘럼을 기반으로 합니다. 비판적 사고, 자기 주도 학습, 토론 중심 수업이 특징이며, 영어로 모든 수업이 진행됩니다. 해외 대학 진학을 목표로 하는 학생에게 최적화된 환경입니다.",
      },
      {
        heading: "일반 고등학교: 체계적 수능 대비",
        body: "일반 고등학교는 한국 교육과정을 따르며, 수능 중심의 체계적인 학습이 강점입니다. 내신 관리와 수능 대비에 최적화되어 있으며, 교육비가 상대적으로 저렴합니다. 국내 대학 진학을 목표로 하는 학생에게 안정적인 선택입니다.",
      },
      {
        heading: "학생의 역량과 목표에 따른 선택",
        body: "국제학교 진학을 고려한다면, 학생의 영어 능력과 자기 주도 학습 능력이 중요합니다. 또한, 해외 대학 진학을 목표로 한다면 국제학교의 커리큘럼이 더 유리할 수 있습니다. 반면, 국내 대학을 목표로 하고 체계적인 관리와 안정적인 학습 환경을 선호한다면 일반 고등학교가 적합할 수 있습니다.",
      },
      {
        heading: "결론: 장기 목표에 맞춰 선택하라",
        body: "결국 중요한 것은 학생의 장기적인 목표와 현재 역량을 객관적으로 분석하여, 그에 맞는 환경을 선택하는 것입니다. 학교의 명성보다는 학생의 성장과 발전에 가장 적합한 환경을 선택하는 것이 중요합니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Students%20studying%20in%20modern%20international%20school%20library%20with%20diverse%20learning%20materials%2C%20collaborative%20study%20environment%2C%20bookshelves%20and%20digital%20screens%2C%20warm%20natural%20lighting%2C%20clean%20modern%20interior%2C%20professional%20educational%20photography%2C%20bright%20academic%20atmosphere&width=400&height=250&seq=news-5-v2&orientation=landscape",
  },
  {
    id: "6",
    title: "영어 에세이 쓰기, 국제학교 학생의 필수 역량",
    category: "커리큘럼",
    date: "2026-05-20",
    summary:
      "IB나 AP 영어 과목에서 높은 점수를 받기 위한 에세이 작성 노하우와 학습 전략을 공개합니다.",
    sections: [
      {
        heading: "에세이: 학문적 역량의 핵심",
        body: "영어 에세이 작성은 국제학교 학생에게 필수적인 학문적 역량입니다. IB English A나 AP English Language에서 높은 점수를 받기 위해서는 단순히 문법을 잘하는 것만으로는 부족합니다. 비판적 사고, 분석 능력, 그리고 논리적 표현력이 모두 필요합니다.",
      },
      {
        heading: "텍스트 분석 능력 기르기",
        body: "첫째, 텍스트 분석 능력을 키워야 합니다. 문학 작품이나 비문학 텍스트의 주제, 문체,修辭적 장치를 식별하고, 이를 작품의 전반적인 의미와 연결하여 분석할 수 있어야 합니다. 텍스트의 겉으로 드러난 내용뿐만 아니라, 작가가 전달하려는 깊은 의미와 사회적 맥락을 파악하는 능력이 중요합니다.",
      },
      {
        heading: "논리적 구성의 중요성",
        body: "둘째, 논리적 구성이 중요합니다. 서론에서 논제를 명확히 제시하고, 본론에서 근거와 분석을 체계적으로 전개하며, 결론에서 논의를 정리하는 구조를 익혀야 합니다. 각 단락이 하나의 중심 주제를 다루고, 단락 간 전환이 자연스럽게 이루어지도록 연습해야 합니다.",
      },
      {
        heading: "학술적 어휘와 표현력",
        body: "셋째, 학술적 어휘와 표현을 사용해야 합니다. 일상적인 표현보다는 정확하고 학술적인 언어를 사용하여 논증의 설득력을 높여야 합니다. 텍스트 분석에 특화된 전문 용어를 적절히 사용하고, 다양한 문장 구조를 활용하여 글의 품격을 높이는 연습이 필요합니다.",
      },
      {
        heading: "지속적인 연습과 피드백",
        body: "에세이 실력은 단기간에 향상되지 않습니다. 꾸준한 독서, 분석 연습, 그리고 피드백을 반영한 수정 과정을 통해 점진적으로 발전시켜야 합니다. 전문 강사의 피드백을 받으며 작성한 에세이를 여러 번 다듬는 과정이 실력 향상에 가장 효과적입니다.",
      },
    ],
    image:
      "https://readdy.ai/api/search-image?query=Student%20writing%20essay%20in%20notebook%2C%20creative%20writing%20process%2C%20academic%20desk%20with%20pen%20and%20paper%2C%20focused%20study%20atmosphere%2C%20clean%20modern%20background%2C%20professional%20educational%20photography%2C%20warm%20lighting&width=400&height=250&seq=news-6&orientation=landscape",
  },
];

export const NEWS_CATEGORIES = [
  "전체",
  "입시",
  "커리큘럼",
  "유학",
  "학교 소식",
];