/*
 * Curriculum classification for every school listed on the homepage's
 * "수업중인 학교" section (see src/pages/home/components/AboutSection.tsx).
 *
 * This is the compiled result of 5 background research passes (WebSearch +
 * WebFetch against official school sites, IBO.org's authorized-school
 * directory, and accreditation bodies), done specifically so that SEO
 * landing pages naming these real schools don't attach a false curriculum
 * claim to a real institution.
 *
 * Fields per school:
 *   name        — exact string as it appears in AboutSection.tsx (must match
 *                 for the two lists to stay in sync)
 *   hasIB       — confirmed IB program (PYP/MYP/DP), high-enough confidence
 *                 to publish an "{school}IB" landing page
 *   hasAmerican — confirmed American/AP-track curriculum, high-enough
 *                 confidence to publish SAT수업/math과외/알지브라과외/
 *                 지오메트리수업 pages
 *   tier        — 'full' = eligible for the full keyword set (과외/수학과외/
 *                 영어과외/에세이/입학준비 + conditionally IB/American);
 *                 'basic' = only 과외/수학과외/영어과외/입학준비 (no essay/
 *                 IB/American claims — used for Korean-national-curriculum
 *                 schools, ambiguous school names, schools with no upper-
 *                 secondary program, or low-confidence curriculum research)
 *   note        — why a school is 'basic' tier or excluded, for future
 *                 reference when this data needs updating
 *
 * Schools with hasProgram:false are EXCLUDED from page generation entirely
 * — no real, findable program to attribute any claim to.
 */

const DOMESTIC_SCHOOLS = [
  {
    region: '서울·경기',
    schools: [
      { name: '서울외국인학교 (SFS)', hasIB: true, hasAmerican: false, tier: 'full' },
      { name: '서울용산국제학교 (YISS)', hasIB: false, hasAmerican: true, tier: 'full' },
      { name: '서울드와이트외국인학교 (Dwight)', hasIB: true, hasAmerican: false, tier: 'full' },
      { name: '덜위치칼리지서울영국학교 (Dulwich)', hasIB: true, hasAmerican: false, tier: 'full' },
      { name: '한국외국인학교 (KIS 서울/판교캠퍼스)', hasIB: true, hasAmerican: true, tier: 'full' },
      { name: '서울국제학교 (SIS)', hasIB: false, hasAmerican: true, tier: 'full' },
      { name: '경기수원외국인학교 (GSIS)', hasIB: true, hasAmerican: false, tier: 'full' },
      { name: '아시아퍼시픽국제외국인학교 (APIS)', hasIB: false, hasAmerican: true, tier: 'full' },
      { name: '코리아외국인학교 (KFS)', hasIB: false, hasAmerican: false, tier: 'basic', note: 'IB is PYP-only (not MYP/DP); secondary track is Cambridge, not American' },
      { name: '한국켄트외국인학교 (KKFS)', hasIB: false, hasAmerican: false, tier: 'basic', note: 'AP claim only medium-confidence secondary sources; not confirmed on official site' },
      { name: '베일러국제학교 (안성)', hasIB: false, hasAmerican: true, tier: 'full' },
      { name: '세인트폴 아카데미 (강남·대치)', hasIB: false, hasAmerican: true, tier: 'full' },
      { name: '코너스톤 서울아카데미', hasIB: false, hasAmerican: true, tier: 'full' },
      { name: '페이스튼 용산캠퍼스', hasProgram: false, note: 'UNVERIFIED — no "Yongsan campus" found anywhere; likely a mix-up with Fayston Yongin/Bundang/etc. Confirm with client before re-adding.' },
      { name: '한국외대 HIFS', hasProgram: false, note: 'Early-childhood/elementary academy only; secondary program page marked "under construction" on official site — no curriculum to advertise yet.' },
    ],
  },
  {
    region: '인천',
    schools: [
      { name: '채드윅 송도국제학교 (Chadwick International)', hasIB: true, hasAmerican: true, tier: 'full' },
      { name: '청라달튼외국인학교 (CDS)', hasIB: false, hasAmerican: true, tier: 'full' },
    ],
  },
  {
    region: '제주',
    schools: [
      { name: 'NLCS 제주 (North London Collegiate School Jeju)', hasIB: true, hasAmerican: false, tier: 'full' },
      { name: '브랭섬홀 아시아 (BHA)', hasIB: true, hasAmerican: false, tier: 'full' },
      { name: '세인트존스베리아카데미 제주 (SJA Jeju)', hasIB: false, hasAmerican: true, tier: 'full' },
      { name: '한국국제학교 제주캠퍼스 (KIS Jeju)', hasIB: false, hasAmerican: true, tier: 'full' },
      { name: '칼빈매니토바국제학교', hasIB: false, hasAmerican: false, tier: 'basic', note: 'Manitoba (Canadian) curriculum, not American — AP is an exam option bolted onto Manitoba courses, not the core track' },
    ],
  },
  {
    region: '대전',
    schools: [
      { name: '외국인학교 (TCIS)', hasIB: true, hasAmerican: false, tier: 'full' },
    ],
  },
  {
    region: '대구',
    schools: [
      { name: '대구국제학교 (DIS)', hasIB: false, hasAmerican: true, tier: 'full' },
    ],
  },
  {
    region: '부산',
    schools: [
      { name: '부산국제외국인학교 (ISB)', hasIB: true, hasAmerican: false, tier: 'full', note: 'Confirmed IB-only; does NOT offer AP (do not confuse with the separate Busan Foreign School)' },
    ],
  },
  {
    region: '광주',
    schools: [
      { name: '광주외국인학교 (GIS)', hasIB: false, hasAmerican: true, tier: 'full' },
    ],
  },
  {
    region: '울산·경남',
    schools: [
      { name: '현대외국인학교 (울산)', hasIB: false, hasAmerican: false, tier: 'basic', note: 'No high school division currently (K–middle only); IB/American/essay claims not applicable yet' },
      { name: '경남국제외국인학교 (사천)', hasIB: true, hasAmerican: false, tier: 'full' },
      { name: '애서튼국제외국인학교 (거제)', hasIB: false, hasAmerican: false, tier: 'basic', note: 'British/Cambridge curriculum (IGCSE + A-Level), not IB or American' },
    ],
  },
  {
    region: '세종',
    schools: [
      { name: '페이스튼 세종캠퍼스', hasIB: false, hasAmerican: false, tier: 'basic', note: 'Campus opened 2025, currently grades 1-8 only — no AP/SAT-taking cohort yet even though the parent school (Yongin) is American/AP-focused' },
    ],
  },
  {
    region: '기타',
    schools: [
      { name: '글로벌비전크리스천학교 (GVCS)', hasIB: false, hasAmerican: true, tier: 'full' },
    ],
  },
];

const OVERSEAS_SCHOOLS = [
  {
    region: '베트남',
    schools: [
      { name: 'UNIS Hanoi', hasIB: true, hasAmerican: false, tier: 'full' },
      { name: 'BIS Hanoi', hasIB: true, hasAmerican: false, tier: 'full' },
      { name: 'HIS', hasIB: true, hasAmerican: false, tier: 'full' },
      { name: 'Concordia', hasIB: false, hasAmerican: true, tier: 'full' },
      { name: 'SSIS', hasIB: true, hasAmerican: true, tier: 'full' },
      { name: 'BIS HCMC', hasIB: true, hasAmerican: false, tier: 'full' },
      { name: 'TAS', hasIB: false, hasAmerican: true, tier: 'full', note: 'IB DP is "Candidate" status only (not yet authorized) — do not claim IB' },
      { name: 'ISHCMC', hasIB: true, hasAmerican: false, tier: 'full' },
      { name: 'AIS', hasIB: true, hasAmerican: false, tier: 'full' },
      { name: '하노이 KIS', hasIB: false, hasAmerican: false, tier: 'basic', note: 'Korean national curriculum school' },
      { name: '호치민 KIS', hasIB: false, hasAmerican: false, tier: 'basic', note: 'Korean national curriculum school' },
    ],
  },
  {
    region: '태국',
    schools: [
      { name: 'ISB', hasIB: true, hasAmerican: true, tier: 'full' },
      { name: 'NIST', hasIB: true, hasAmerican: false, tier: 'full' },
      { name: 'Shrewsbury', hasIB: false, hasAmerican: false, tier: 'basic', note: 'British curriculum (IGCSE + A-Level) exclusively, no IB' },
      { name: 'St. Andrews', hasIB: true, hasAmerican: false, tier: 'full', note: 'Multiple campuses (Sukhumvit/Sathorn/Green Valley) — confirm campus before quoting IB details' },
      { name: 'Harrow', hasIB: false, hasAmerican: false, tier: 'basic', note: 'British curriculum exclusively' },
      { name: '방콕 KIS', hasIB: false, hasAmerican: false, tier: 'basic', note: 'AMBIGUOUS — two unrelated schools share this name in Bangkok (KIS International School = full IB; Korean International School of Bangkok = Korean curriculum). Confirm with client which one before adding curriculum claims.' },
    ],
  },
  {
    region: '인도네시아',
    schools: [
      { name: 'JIS (Jakarta Intercultural School)', hasIB: true, hasAmerican: true, tier: 'full' },
      { name: 'BSJ', hasIB: true, hasAmerican: false, tier: 'full', note: 'Despite "British School" branding, no longer offers IGCSE/A-Level at secondary — IB MYP+DP only' },
      { name: 'ACG', hasIB: true, hasAmerican: false, tier: 'full' },
      { name: 'SPH', hasIB: true, hasAmerican: false, tier: 'full', note: 'Multiple campuses; Cambridge track also offered in parallel at some campuses' },
      { name: '자카르타 KIS', hasIB: false, hasAmerican: false, tier: 'basic', note: 'Korean national curriculum school' },
    ],
  },
  {
    region: '말레이시아',
    schools: [
      { name: "Mont'Kiara", hasIB: true, hasAmerican: false, tier: 'full', note: 'Issues a hybrid US diploma alongside IB but no dedicated AP program confirmed' },
      { name: 'Garden', hasIB: false, hasAmerican: false, tier: 'basic', note: 'British curriculum (IGCSE + A-Level) exclusively' },
      { name: 'Alice Smith', hasIB: false, hasAmerican: false, tier: 'basic', note: 'British A-Level Sixth Form; some third-party directories incorrectly tag it "IB" — official site does not confirm IB' },
      { name: 'IGB', hasIB: true, hasAmerican: false, tier: 'full' },
      { name: 'Nexus', hasIB: true, hasAmerican: false, tier: 'full' },
      { name: '말레이시아 KIS', hasIB: false, hasAmerican: false, tier: 'basic', note: 'Korean national curriculum school' },
    ],
  },
  {
    region: '필리핀',
    schools: [
      { name: 'ISM', hasIB: true, hasAmerican: false, tier: 'full', note: 'Primarily IB (85% full diploma); AP offered only as supplementary courses, not a core American track' },
      { name: 'Brent', hasIB: true, hasAmerican: true, tier: 'full' },
      { name: 'British School Manila', hasIB: true, hasAmerican: false, tier: 'full' },
      { name: 'Reedley', hasIB: false, hasAmerican: true, tier: 'full' },
      { name: '마닐라 KIS', hasIB: false, hasAmerican: false, tier: 'basic', note: 'Korean national curriculum school' },
    ],
  },
  {
    region: '중국',
    schools: [
      { name: 'SAS', hasIB: true, hasAmerican: true, tier: 'full' },
      { name: 'Dulwich', hasIB: true, hasAmerican: false, tier: 'full', note: 'Refers to "Dulwich College" brand (IB+IGCSE); distinct from "Dulwich International High School" brand (IGCSE/A-Level only, no IB) — confirm which if ever relevant' },
      { name: 'YCIS', hasIB: true, hasAmerican: false, tier: 'full' },
      { name: 'Wellington', hasIB: false, hasAmerican: false, tier: 'basic', note: 'IB only confirmed at the Shanghai campus, not Tianjin/Hangzhou/Nantong — generic "Wellington" entry kept conservative pending campus confirmation' },
      { name: 'Concordia', hasIB: false, hasAmerican: true, tier: 'full' },
      { name: 'WAB', hasIB: true, hasAmerican: false, tier: 'full', note: 'AP claim is low-confidence (US-accredited diploma issued alongside IB, no dedicated AP track found)' },
      { name: 'ISB', hasIB: true, hasAmerican: false, tier: 'full', note: 'International School of Beijing — very limited real AP (AP Seminar only); do not market as an AP school' },
      { name: '상하이 KIS', hasIB: false, hasAmerican: false, tier: 'basic', note: 'Korean national curriculum school' },
      { name: '베이징 KIS', hasIB: false, hasAmerican: false, tier: 'basic', note: 'Weakest sourcing of all KIS entries — treated as Korean curriculum by default, recommend direct confirmation' },
      { name: '청도 KIS', hasIB: false, hasAmerican: false, tier: 'basic', note: 'Korean national curriculum school — do not confuse with unrelated Qingdao IB schools (YCIS Qingdao, Qingdao Daewon, etc.)' },
      { name: '천진 KIS', hasIB: false, hasAmerican: false, tier: 'basic', note: 'Korean national curriculum school — do not confuse with unrelated "Tianjin International School" (American) or "International School of Tianjin" (IB)' },
      { name: '대련 KIS', hasIB: false, hasAmerican: false, tier: 'basic', note: 'Korean national curriculum school' },
    ],
  },
  {
    region: '일본',
    schools: [
      { name: 'ASIJ', hasIB: true, hasAmerican: true, tier: 'full' },
      { name: "St. Mary's", hasIB: true, hasAmerican: true, tier: 'full' },
      { name: 'Seisen', hasIB: true, hasAmerican: false, tier: 'full' },
      { name: 'Nishimachi', hasIB: false, hasAmerican: false, tier: 'basic', note: 'School ends at Grade 9 — no upper-secondary/diploma program to attribute IB/AP/SAT claims to' },
      { name: 'BST', hasIB: true, hasAmerican: false, tier: 'full', note: 'DP added from August 2025' },
      { name: '도쿄 KIS', hasIB: false, hasAmerican: false, tier: 'basic', note: 'Korean national curriculum school' },
      { name: '오사카 KIS', hasIB: true, hasAmerican: false, tier: 'full', note: 'Distinct from other "KIS" entries — this is a bilingual Korean/Japanese school genuinely IB DP-authorized since 2017' },
      { name: '교토 KIS', hasIB: false, hasAmerican: false, tier: 'basic', note: 'Japanese Article-1 (1条校) school under Japanese national curriculum, not IB/AP' },
    ],
  },
  {
    region: '미국',
    schools: [
      { name: 'Irvine Unified', hasIB: false, hasAmerican: true, tier: 'full' },
      { name: 'Cupertino', hasIB: false, hasAmerican: false, tier: 'basic', note: 'Cupertino Union School District is K-8 only, no AP/SAT relevance — the actual AP-relevant district is Fremont Union HSD; kept conservative under the original "Cupertino" label pending client clarification' },
      { name: 'Palo Alto', hasIB: false, hasAmerican: true, tier: 'full' },
      { name: 'Fairfax County', hasIB: true, hasAmerican: true, tier: 'full', note: 'IB offered at 8 of its many high schools, AP at 16 — district-wide claim reasonable but not every FCPS school has both' },
      { name: 'Phillips Exeter', hasIB: false, hasAmerican: true, tier: 'full' },
      { name: 'Phillips Andover', hasIB: false, hasAmerican: true, tier: 'full' },
      { name: 'Choate', hasIB: false, hasAmerican: true, tier: 'full' },
      { name: 'Hotchkiss', hasIB: false, hasAmerican: true, tier: 'full' },
      { name: 'Deerfield', hasIB: false, hasAmerican: true, tier: 'full' },
    ],
  },
  {
    region: '유럽',
    schools: [
      { name: 'Frankfurt International School (FIS)', hasIB: true, hasAmerican: false, tier: 'full' },
      { name: '파리 한국국제학교', hasProgram: false, note: 'No matching full-time, curriculum-granting school found — only a weekend Korean heritage-language school ("파리한글학교") turned up in research. Confirm with client what institution this entry is meant to refer to.' },
      { name: 'EIB', hasIB: false, hasAmerican: false, tier: 'basic', note: 'Curriculum varies by EIB campus — main EIB campuses follow the French Baccalauréat, only a related ICS Paris campus offers IBDP. Kept conservative pending clarification of which campus.' },
    ],
  },
  {
    region: 'UAE (아부다비·두바이)',
    schools: [
      { name: 'GEMS 계열 학교', hasIB: false, hasAmerican: false, tier: 'basic', note: 'Generic group name — GEMS operates many campuses with different curricula (IB/American/British depending on campus); cannot attribute one curriculum without naming a specific campus' },
      { name: 'Dubai International Academy', hasIB: true, hasAmerican: false, tier: 'full' },
    ],
  },
  {
    region: '캐나다',
    schools: [
      { name: 'Vancouver School Board', hasIB: true, hasAmerican: true, tier: 'full', note: 'District covers many schools; IB/AP offered at specific schools within it, not district-wide uniformly' },
      { name: 'Burnaby', hasIB: false, hasAmerican: true, tier: 'full', note: 'IB was discontinued and has not been reinstated; AP is confirmed (largest AP program in Canada)' },
      { name: 'West Vancouver', hasIB: true, hasAmerican: true, tier: 'full', note: 'IB only at West Vancouver Secondary School; AP at the district’s other 3 high schools' },
      { name: 'TDSB', hasIB: true, hasAmerican: true, tier: 'full', note: 'IB and AP are offered at different, non-overlapping schools within the district' },
      { name: 'York Region District', hasIB: true, hasAmerican: true, tier: 'full' },
    ],
  },
];

module.exports = { DOMESTIC_SCHOOLS, OVERSEAS_SCHOOLS };
