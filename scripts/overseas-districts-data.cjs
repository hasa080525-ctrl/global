/*
 * "해외 학군 가이드" (/guide/ 아래 정적 페이지) 데이터.
 *
 * 이 페이지들은 school-curriculum-data.cjs의 /schools/ 페이지와 성격이
 * 다르다 — /schools/는 "지금 실제로 가르치고 있는 학교"에 대한 검증된
 * 커리큘럼 주장이고, 여기는 "한국 주재원·교포 자녀가 많이 다니는 해외
 * 지역/학군"에 대한 리서치 기반 정보 가이드다.
 *
 * 절대 "이 학교 학생을 지금 가르치고 있다"는 식의 재학생 관련 주장을
 * 하지 않는다 — 대신 "어느 학교에 다니든 화상으로 지원 가능합니다"라는,
 * 원격 과외 서비스 자체의 사실(위치 무관 서비스 가능)만 말한다.
 *
 * 필드:
 *   id       — URL 슬러그
 *   country  — 'us' | 'uk' | 'sea'
 *   title    — 페이지 제목에 쓰일 지역명
 *   eyebrow  — 상단 보조 타이틀(국가·카테고리)
 *   intro    — 지역 소개 1~2문단
 *   note     — 선택: 지역 특이사항(※ 표시 등 원문의 강조 포인트)
 *   schools  — [{ name, tag }] tag: 'selective'(선발형) 등 참고 표시
 */

const US_DISTRICTS = [
  {
    id: 'irvine', title: '어바인 (캘리포니아 남부)', eyebrow: '미국 · 캘리포니아 남부 · 한인 최대 거주지',
    intro: '오렌지카운티 어바인 통합교육구는 한국 주재원이 가장 많이 거주하는 지역 중 하나입니다. 우수한 공립학군으로 알려져 있어 주재원 발령 시 1순위로 고려되는 곳입니다.',
    note: '주재원 1순위 거주지',
    schools: [
      { name: '유니버시티 고등학교 (University HS)' },
      { name: '노스우드 고등학교 (Northwood HS)' },
      { name: '어바인 고등학교 (Irvine HS)' },
      { name: '우드브리지 고등학교 (Woodbridge HS)' },
      { name: '포톨라 고등학교 (Portola HS)' },
      { name: '벡맨 고등학교 (Beckman HS)', tag: '터스틴 통합교육구, 어바인 생활권' },
    ],
  },
  {
    id: 'fullerton', title: '풀러턴·부에나파크 (캘리포니아 남부)', eyebrow: '미국 · 캘리포니아 남부',
    intro: '풀러턴 조인트 유니언 고등학군은 어바인 인근의 한인 밀집 지역으로, 선발제 매그닛 스쿨인 트로이 고등학교가 있어 학업 수준이 높은 지역으로 알려져 있습니다.',
    schools: [
      { name: '트로이 고등학교 (Troy HS)', tag: 'selective', },
      { name: '서니힐스 고등학교 (Sunny Hills HS)' },
      { name: '풀러턴 유니언 고등학교 (Fullerton Union HS)' },
      { name: '라미라다 고등학교 (La Mirada HS)' },
    ],
  },
  {
    id: 'torrance-pv', title: '토랜스·팔로스버디스 (사우스베이, 캘리포니아)', eyebrow: '미국 · 캘리포니아 남부 · 사우스베이',
    intro: 'LA 사우스베이 지역의 토랜스와 팔로스버디스는 바다를 끼고 있는 주거 선호 지역으로, 한인 주재원과 교포 가정이 함께 거주합니다.',
    schools: [
      { name: '웨스트 고등학교 (West HS)', tag: '토랜스 통합교육구' },
      { name: '사우스 고등학교 (South HS)', tag: '토랜스 통합교육구' },
      { name: '팔로스버디스 페닌슐라 고등학교 (Palos Verdes Peninsula HS)' },
      { name: '팔로스버디스 고등학교 (Palos Verdes HS)' },
    ],
  },
  {
    id: 'cupertino', title: '쿠퍼티노·서니베일 (실리콘밸리)', eyebrow: '미국 · 캘리포니아 북부 · IT 주재원',
    intro: '실리콘밸리 IT 기업 주재원이 밀집한 지역입니다. 프리몬트 유니언 고등학군은 학업 경쟁이 치열하기로 잘 알려져 있습니다.',
    schools: [
      { name: '몬타비스타 고등학교 (Monta Vista HS)' },
      { name: '린브룩 고등학교 (Lynbrook HS)' },
      { name: '쿠퍼티노 고등학교 (Cupertino HS)' },
      { name: '홈스테드 고등학교 (Homestead HS)' },
    ],
  },
  {
    id: 'palo-alto', title: '팔로알토·프리몬트 (베이 에어리어)', eyebrow: '미국 · 캘리포니아 북부',
    intro: '팔로알토와 프리몬트는 베이 에어리어의 대표적인 한인 주재원 거주지로, 각각 독자적인 명문 공립 학군을 갖고 있습니다.',
    schools: [
      { name: '팔로알토 고등학교 (Palo Alto HS, Paly)' },
      { name: '건 고등학교 (Gunn HS)' },
      { name: '미션 산호세 고등학교 (Mission San Jose HS)', tag: '프리몬트 통합교육구' },
      { name: '어빙턴 고등학교 (Irvington HS)', tag: '프리몬트 통합교육구' },
      { name: '새러토가 고등학교 (Saratoga HS)' },
    ],
  },
  {
    id: 'fort-lee', title: '포트리·팰리세이즈파크 (뉴저지 버겐카운티)', eyebrow: '미국 · 뉴저지 · 한인 비율 최고 지역',
    intro: '뉴욕 통근권인 뉴저지 버겐카운티는 동부 최대 한인 밀집지입니다. 그중에서도 포트리·팰리세이즈파크 일대는 한인 비율이 가장 높은 지역으로 꼽힙니다.',
    note: '한인 비율 최고 지역',
    schools: [
      { name: '포트리 고등학교 (Fort Lee HS)' },
      { name: '팰리세이즈파크 고등학교 (Palisades Park HS)' },
      { name: '레오니아 고등학교 (Leonia HS)' },
      { name: '리지필드 메모리얼 고등학교 (Ridgefield Memorial HS)' },
    ],
  },
  {
    id: 'tenafly', title: '테너플라이·크레스킬·데마레스트 (뉴저지)', eyebrow: '미국 · 뉴저지 버겐카운티',
    intro: '포트리 인근의 테너플라이·크레스킬 지역은 조용한 주거 환경과 안정적인 공립 학군으로 한국 주재원 가정이 선호하는 지역입니다.',
    schools: [
      { name: '테너플라이 고등학교 (Tenafly HS)' },
      { name: '크레스킬 고등학교 (Cresskill HS)' },
      { name: '노던밸리 리저널 데마레스트 (Northern Valley Regional HS at Demarest)' },
      { name: '노던밸리 리저널 올드태판 (Northern Valley Regional HS at Old Tappan)' },
    ],
  },
  {
    id: 'paramus-bca', title: '파라무스·해컨색 (뉴저지)', eyebrow: '미국 · 뉴저지 버겐카운티',
    intro: '파라무스 일대와, 카운티 단위 선발제 명문고인 버겐카운티 아카데미(BCA)가 있는 해컨색 지역입니다.',
    schools: [
      { name: '파라무스 고등학교 (Paramus HS)' },
      { name: '리버델 리저널 고등학교 (River Dell Regional HS)' },
      { name: '리지우드 고등학교 (Ridgewood HS)' },
      { name: '버겐카운티 아카데미 (Bergen County Academies, BCA)', tag: 'selective' },
    ],
  },
  {
    id: 'great-neck', title: '그레이트넥·맨해셋 (롱아일랜드, 뉴욕)', eyebrow: '미국 · 뉴욕 · 나소카운티',
    intro: '뉴욕 롱아일랜드 나소카운티의 그레이트넥·맨해셋 일대는 뉴욕 한인 주재원 가정이 많이 거주하는 학군입니다.',
    schools: [
      { name: '그레이트넥 노스 고등학교 (Great Neck North HS)' },
      { name: '그레이트넥 사우스 고등학교 (Great Neck South HS)' },
      { name: '맨해셋 고등학교 (Manhasset HS)' },
      { name: '제리코 고등학교 (Jericho HS)' },
      { name: '시오셋 고등학교 (Syosset HS)' },
      { name: '헤릭스 고등학교 (Herricks HS)' },
      { name: '로슬린 고등학교 (Roslyn HS)' },
    ],
  },
  {
    id: 'fairfax', title: '페어팩스카운티 (버지니아, 워싱턴DC 근교)', eyebrow: '미국 · 버지니아 · 정부·방산·컨설팅',
    intro: '워싱턴DC 근교 버지니아 페어팩스카운티는 정부기관·방산·컨설팅 분야 주재원이 많이 거주하며, 선발제 과학고 TJHSST로도 잘 알려진 지역입니다. 애넌데일은 교포 한인타운이 형성되어 있습니다.',
    schools: [
      { name: '토머스 제퍼슨 과학기술고 (TJHSST)', tag: 'selective' },
      { name: '랭글리 고등학교 (Langley HS)' },
      { name: '매클레인 고등학교 (McLean HS)' },
      { name: '오크턴 고등학교 (Oakton HS)' },
      { name: '챈틸리 고등학교 (Chantilly HS)' },
      { name: '센터빌 고등학교 (Centreville HS)' },
      { name: '웨스트필드 고등학교 (Westfield HS)' },
      { name: '매디슨 고등학교 (Madison HS)', tag: '비엔나' },
      { name: '우드슨 고등학교 (Woodson HS)' },
      { name: '애넌데일 고등학교 (Annandale HS)', tag: '한인타운 인접' },
    ],
  },
  {
    id: 'ellicott-city', title: '엘리콧시티 (하워드카운티, 메릴랜드)', eyebrow: '미국 · 메릴랜드 · 한인 밀집',
    intro: '워싱턴DC·볼티모어 중간에 위치한 하워드카운티 엘리콧시티는 메릴랜드 지역 한인이 밀집한 명문 학군입니다.',
    schools: [
      { name: '리버힐 고등학교 (River Hill HS)' },
      { name: '센테니얼 고등학교 (Centennial HS)' },
      { name: '매리어츠리지 고등학교 (Marriotts Ridge HS)' },
    ],
  },
  {
    id: 'plano', title: '플레이노 (텍사스, 댈러스 북부)', eyebrow: '미국 · 텍사스 · 삼성·제조업 주재원',
    intro: '삼성·제조업 주재원이 빠르게 늘고 있는 댈러스 북부 플레이노 지역입니다. 플레이노 ISD는 11·12학년만 다니는 "Senior High" 구조라 일반적인 9~12학년 고등학교와 학제가 다릅니다.',
    note: '11~12학년만 다니는 Senior High 구조',
    schools: [
      { name: '플레이노 웨스트 시니어 (Plano West Senior HS)' },
      { name: '플레이노 시니어 (Plano Senior HS)' },
      { name: '플레이노 이스트 시니어 (Plano East Senior HS)' },
      { name: '코펠 고등학교 (Coppell HS)' },
      { name: '히브론 고등학교 (Hebron HS)', tag: '루이스빌 ISD, 캐롤턴 인접' },
    ],
  },
  {
    id: 'austin', title: '오스틴·라운드록 (텍사스)', eyebrow: '미국 · 텍사스 · 삼성 테일러 공장',
    intro: '삼성 테일러 반도체 공장 가동 이후 오스틴·라운드록 지역의 한인 주재원 가정이 빠르게 늘고 있습니다.',
    schools: [
      { name: '웨스트우드 고등학교 (Westwood HS)', tag: '라운드록 ISD' },
      { name: '웨스트레이크 고등학교 (Westlake HS)' },
      { name: '밴더그리프트 고등학교 (Vandegrift HS)', tag: '리앤더 ISD' },
    ],
  },
  {
    id: 'bellevue', title: '벨뷰 (워싱턴주, 시애틀)', eyebrow: '미국 · 워싱턴주 · MS·아마존',
    intro: '시애틀 인근 벨뷰는 마이크로소프트·아마존 등 IT 기업 주재원이 많이 거주하는 지역입니다.',
    schools: [
      { name: '뉴포트 고등학교 (Newport HS)' },
      { name: '인터레이크 고등학교 (Interlake HS)', tag: 'IB' },
      { name: '벨뷰 고등학교 (Bellevue HS)' },
      { name: '새머미시 고등학교 (Sammamish HS)' },
    ],
  },
  {
    id: 'johns-creek', title: '존스크릭·둘루스 (애틀랜타, 조지아)', eyebrow: '미국 · 조지아 · 현대·기아·SK·한화',
    intro: '현대·기아차와 협력업체, SK·한화 등 동남부 진출 기업 주재원이 모여 사는 애틀랜타 북부 지역입니다. 둘루스는 한인타운이 형성되어 있습니다.',
    schools: [
      { name: '노스뷰 고등학교 (Northview HS)' },
      { name: '존스크릭 고등학교 (Johns Creek HS)' },
      { name: '채터후치 고등학교 (Chattahoochee HS)' },
      { name: '알파레타 고등학교 (Alpharetta HS)' },
      { name: '피치트리리지 고등학교 (Peachtree Ridge HS)' },
      { name: '노스귀넷 고등학교 (North Gwinnett HS)' },
      { name: '둘루스 고등학교 (Duluth HS)', tag: '한인타운' },
      { name: '램버트 고등학교 (Lambert HS)', tag: '포사이스카운티' },
      { name: '귀넷 수학과학기술고 (GSMST)', tag: 'selective' },
    ],
  },
  {
    id: 'northbrook', title: '노스브룩·글렌뷰 (시카고 북부)', eyebrow: '미국 · 일리노이 · 시카고 북부',
    intro: '시카고 북부 교외의 명문 공립 학군으로, 한인 주재원 가정이 꾸준히 거주해온 지역입니다.',
    schools: [
      { name: '글렌브룩 노스 고등학교 (Glenbrook North HS)' },
      { name: '글렌브룩 사우스 고등학교 (Glenbrook South HS)' },
    ],
  },
  {
    id: 'novi', title: '노바이·노스빌·트로이 (디트로이트 근교, 미시간)', eyebrow: '미국 · 미시간 · 현대·LG·자동차 부품',
    intro: '현대·LG 등 자동차 부품 관련 주재원이 거주하는 디트로이트 근교 지역입니다.',
    schools: [
      { name: '노바이 고등학교 (Novi HS)' },
      { name: '노스빌 고등학교 (Northville HS)' },
      { name: '트로이 고등학교 (Troy HS)' },
      { name: '트로이 애선스 고등학교 (Troy Athens HS)' },
    ],
  },
];

const UK_DISTRICTS = [
  {
    id: 'new-malden-kingston', title: '뉴몰든·킹스턴 어폰 템스 (런던 남서부)', eyebrow: '영국 · 런던 남서부 · 한인 최대 밀집',
    intro: '뉴몰든은 유럽 최대 한인타운이 있는 지역이며, 인접한 킹스턴 어폰 템스는 일반 공립학교와 더불어 11+ 시험으로 입학하는 그래머스쿨 티핀 스쿨·티핀 걸즈 스쿨이 있어 한국 가정에게 가장 인기 있는 학군입니다.',
    note: '한국 가정 최고 인기 학군, 11+ 경쟁 매우 치열',
    schools: [
      { name: '쿰 보이즈 스쿨 (Coombe Boys\' School)', tag: '공립, 뉴몰든' },
      { name: '쿰 걸즈 스쿨 (Coombe Girls\' School)', tag: '공립, 뉴몰든' },
      { name: '리처드 챌로너 스쿨 (Richard Challoner School)', tag: '공립, 가톨릭 남학교' },
      { name: '홀리 크로스 스쿨 (Holy Cross School)', tag: '공립, 가톨릭 여학교' },
      { name: '킹스턴 아카데미 (The Kingston Academy)', tag: '공립' },
      { name: '티핀 스쿨 (Tiffin School)', tag: 'selective', },
      { name: '더 티핀 걸즈 스쿨 (The Tiffin Girls\' School)', tag: 'selective' },
    ],
  },
  {
    id: 'sutton-grammar', title: '서튼·월링턴 그래머스쿨 (런던 남부)', eyebrow: '영국 · 런던 남부 · 선발형 공립 밀집',
    intro: '서튼·월링턴 일대는 11+ 시험으로 입학하는 그래머스쿨이 밀집한 지역으로, 공립이면서도 입시 경쟁력이 높아 한국 학부모들이 선호합니다. 인근 윔블던·머튼 지역의 일반 공립학교도 함께 소개합니다.',
    schools: [
      { name: '서튼 그래머스쿨 (Sutton Grammar School)', tag: 'selective, 남' },
      { name: '윌슨스 스쿨 (Wilson\'s School)', tag: 'selective, 남' },
      { name: '월링턴 카운티 그래머 (Wallington County Grammar School)', tag: 'selective, 남' },
      { name: '넌서치 하이스쿨 (Nonsuch High School for Girls)', tag: 'selective, 여' },
      { name: '월링턴 걸즈 하이스쿨 (Wallington High School for Girls)', tag: 'selective, 여' },
      { name: '리카즈 로지 (Ricards Lodge High School)', tag: '공립, 여, 윔블던' },
      { name: '루틀리시 스쿨 (Rutlish School)', tag: '공립, 남, 윔블던' },
    ],
  },
  {
    id: 'surrey-esher-weybridge', title: '서리 — 에셔·웨이브리지·코밤 (삼성·LG 주재원)', eyebrow: '영국 · 서리 · 삼성(처트시)·LG(웨이브리지) 주재원',
    intro: '삼성전자 유럽법인이 있는 처트시와 LG전자가 있는 웨이브리지 일대는 한국 기업 주재원이 밀집한 서리 지역입니다. 공립학교와 함께, 주재원 자녀가 많이 다니는 국제학교(ACS, TASIS)도 함께 소개합니다.',
    schools: [
      { name: '에셔 하이스쿨 (Esher Church of England High School)', tag: '공립' },
      { name: '히스사이드 스쿨 (Heathside School)', tag: '공립, 웨이브리지' },
      { name: '힌칠리 우드 스쿨 (Hinchley Wood School)', tag: '공립' },
      { name: 'ACS 인터내셔널 스쿨 코밤 (ACS Cobham)', tag: '국제학교, 미국식·IB' },
      { name: 'ACS 인터내셔널 스쿨 에검 (ACS Egham)', tag: '국제학교, IB' },
      { name: 'TASIS 잉글랜드 (TASIS The American School in England)', tag: '국제학교, 소프' },
    ],
  },
];

const SEA_DISTRICTS = [
  {
    id: 'korean-international-schools', title: '동남아 한국국제학교 비교 (싱가포르·KL·호치민·하노이·방콕·마닐라·자카르타)', eyebrow: '동남아 · 재외한국학교',
    intro: '한국국제학교는 교육부가 인가한 재외한국학교로, 한국 교육과정을 기본으로 하면서 영어·현지어 수업을 병행합니다. 귀국 후 한국 학교로 편입하기 쉬워 동남아 주재원 가정이 많이 선택합니다.',
    schools: [
      { name: '싱가포르한국국제학교 (Singapore Korean International School)' },
      { name: '말레이시아한국국제학교 (Korean International School Malaysia, 쿠알라룸푸르 암팡)' },
      { name: '호치민시한국국제학교 (KISHCM, 7군)' },
      { name: '하노이한국국제학교 (KISH, 미딩)' },
      { name: '방콕한국국제학교 (Korean International School Bangkok)' },
      { name: '필리핀한국국제학교 (Korean International School Philippines, 마닐라 타기그)' },
      { name: '자카르타한국국제학교 (JIKS, 남부 자카르타)', tag: '동남아 최대 규모 한국학교' },
    ],
  },
  {
    id: 'hanoi-factory-area', title: '베트남 북부 공장지역 — 하노이 통학 안내 (박닌·하이퐁·타이응우옌)', eyebrow: '베트남 · 삼성·LG 공장지역',
    intro: '삼성·LG 공장이 있는 박닌·하이퐁·타이응우옌 지역은 그 자체로는 국제학교 선택지가 많지 않아, 많은 주재원 가정이 하노이 소재 학교로 통학하거나 하노이한국국제학교를 선택합니다.',
    schools: [
      { name: 'UNIS 하노이 (United Nations International School of Hanoi)', tag: 'IB' },
      { name: '브리티시 인터내셔널 스쿨 하노이 (BIS Hanoi)', tag: '영국식·IB' },
      { name: '하노이 인터내셔널 스쿨 (HIS)', tag: 'IB' },
      { name: '컨코디아 하노이 (Concordia International School Hanoi)', tag: '미국식' },
      { name: '세인트 폴 아메리칸 스쿨 하노이 (St. Paul American School Hanoi)', tag: '미국식' },
      { name: '하노이한국국제학교 (KISH, 미딩)' },
    ],
  },
];

module.exports = { US_DISTRICTS, UK_DISTRICTS, SEA_DISTRICTS };
