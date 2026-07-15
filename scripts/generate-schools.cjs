/*
 * Generates static SEO landing pages for kukje-gwaoe.co.kr under /schools/,
 * one per (school x keyword) combination, using verified curriculum data
 * from school-curriculum-data.cjs so no page makes a false claim about a
 * real school's actual program.
 *
 * These are plain static HTML files served directly by Vercel (see the
 * "schools/" exclusion added to vercel.json's SPA rewrite) — NOT part of
 * the React app — because the React app is client-rendered and we want
 * these long-tail pages reliably crawlable without depending on JS
 * execution.
 *
 * Re-run with `node scripts/generate-schools.cjs` after editing
 * school-curriculum-data.cjs. Do not hand-edit files under public/schools/.
 */
const fs = require('fs');
const path = require('path');
const { DOMESTIC_SCHOOLS, OVERSEAS_SCHOOLS } = require('./school-curriculum-data.cjs');

const ROOT = path.join(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'public', 'schools');
const SITE = 'https://kukje-gwaoe.co.kr';
const PHONE = '010-3951-0535';

function cleanForSlug(s) {
  return s.replace(/\([^)]*\)/g, '').replace(/[^\p{L}\p{N}]/gu, '').trim();
}
function displayName(s) {
  return s.replace(/\s*\([^)]*\)\s*/g, '').trim();
}
const REGION_SLUG_OVERRIDES = {
  '서울·경기': '서울경기',
  '울산·경남': '울산경남',
  'UAE (아부다비·두바이)': 'UAE',
};
function regionSlug(region) {
  return REGION_SLUG_OVERRIDES[region] || cleanForSlug(region);
}

// keyword definitions: id, suffix (used in slug + as page-content "topic"),
// eligibility predicate, and copy generator
const KEYWORDS = [
  {
    id: 'general', suffix: '과외', eligible: () => true,
    body: (name) => `${name} 학생을 위한 1:1 맞춤 과외입니다. 국제학교 커리큘럼에 정통한 강사진이 학교 진도와 평가 방식에 맞춰 지도합니다.`,
  },
  {
    id: 'math', suffix: '수학과외', eligible: () => true,
    body: (name) => `${name} 수학 수업의 진도와 평가 방식에 맞춘 1:1 수학과외입니다. 개념 이해부터 문제 풀이 전략까지 학교 커리큘럼에 맞춰 지도합니다.`,
  },
  {
    id: 'eng', suffix: '영어과외', eligible: () => true,
    body: (name) => `${name} 영어(English/Language Arts) 수업과 에세이 과제에 맞춘 1:1 영어과외입니다. 읽기·쓰기·토론 능력을 함께 키웁니다.`,
  },
  {
    id: 'essay', suffix: '에세이', eligible: (s) => s.tier === 'full',
    body: (name) => `${name} 학생의 대입 지원 에세이(Personal Statement, Common App Essay 등)를 함께 준비합니다. 학생의 목소리를 살리면서 논리적 구성을 다듬는 데 집중합니다.`,
  },
  {
    id: 'admission', suffix: '입학준비', eligible: () => true,
    body: (name) => `${name} 입학 및 편입을 준비하는 학생을 위한 컨설팅형 과외입니다. 입학 시험·인터뷰·학업 이력 준비를 함께 진행합니다.`,
  },
  {
    id: 'ib', suffix: 'IB', eligible: (s) => s.hasIB,
    body: (name) => `${name}의 IB(International Baccalaureate) 커리큘럼에 맞춘 과외입니다. 과목별 개념 정리부터 IA(Internal Assessment), EE(Extended Essay)까지 지원합니다.`,
  },
  {
    id: 'sat', suffix: 'SAT수업', eligible: (s) => s.hasAmerican,
    body: (name) => `${name} 학생을 위한 SAT 대비 수업입니다. Reading, Writing, Math 영역별 전략과 실전 문제풀이로 목표 점수를 준비합니다.`,
  },
  {
    id: 'mathEn', suffix: 'math과외', eligible: (s) => s.hasAmerican,
    body: (name) => `${name}의 Math 수업 진도에 맞춘 수학과외입니다. 미국식 커리큘럼의 수학 용어와 문제 유형에 익숙해지도록 지도합니다.`,
  },
  {
    id: 'algebra', suffix: '알지브라과외', eligible: (s) => s.hasAmerican,
    body: (name) => `${name}의 Algebra(대수) 과정에 맞춘 과외입니다. 방정식·함수·다항식 등 대수 개념을 체계적으로 정리합니다.`,
  },
  {
    id: 'geometry', suffix: '지오메트리수업', eligible: (s) => s.hasAmerican,
    body: (name) => `${name}의 Geometry(기하) 과정에 맞춘 수업입니다. 도형의 증명과 정리를 이해하고 적용하는 연습을 함께합니다.`,
  },
];

function factLine(s) {
  const bits = [];
  if (s.hasIB) bits.push('IB(International Baccalaureate) 프로그램을 운영합니다');
  if (s.hasAmerican) bits.push('미국식 AP 커리큘럼을 운영합니다');
  if (bits.length === 0) return null;
  return bits.join(', ');
}

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function slugFor(regionSlugStr, schoolSlugStr, kw) {
  return `${regionSlugStr}-${schoolSlugStr}${kw.suffix}`;
}

function relatedForSchool(regionSlugStr, schoolSlugStr, name, eligibleKeywords, currentId) {
  return eligibleKeywords
    .filter((k) => k.id !== currentId)
    .map((k) => `<a href="/schools/${encodeURIComponent(slugFor(regionSlugStr, schoolSlugStr, k))}.html">${esc(name)}${esc(k.suffix)}</a>`)
    .join('\n          ');
}

function pageTemplate({ school, regionName, regionSlugStr, schoolSlugStr, kw, eligibleKeywords, country }) {
  const name = displayName(school.name);
  const title = `${name}${kw.suffix} | 국제학교 전문과외`;
  const desc = `${name} 학생을 위한 ${kw.suffix} 안내. IB·AP 등 국제학교 커리큘럼 전문 1:1 화상 과외 국제학교전문과외가 도와드립니다.`;
  const slug = slugFor(regionSlugStr, schoolSlugStr, kw);
  const canonical = `${SITE}/schools/${encodeURIComponent(slug)}.html`;
  const fact = factLine(school);
  const related = relatedForSchool(regionSlugStr, schoolSlugStr, name, eligibleKeywords, kw.id);
  const kwList = eligibleKeywords.map((k) => `${name}${k.suffix}`).join(', ');

  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<meta name="theme-color" content="#101a33">
<link rel="icon" type="image/png" href="https://static.readdy.ai/image/396c131664f132186cce247becf0fbc5/f689f6902db8633945364b676e8e94f8.png">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
<meta name="keywords" content="${esc(kwList)}">
<link rel="canonical" href="${canonical}">
<link rel="stylesheet" href="/schools/assets/school.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Noto+Sans+KR:wght@400;500;600;700&display=swap" rel="stylesheet">
<meta property="og:type" content="website">
<meta property="og:site_name" content="국제학교전문과외">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${SITE}/og-image.jpg">
<meta property="og:url" content="${canonical}">
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "홈", "item": "${SITE}/"},
    {"@type": "ListItem", "position": 2, "name": "학교별 과외", "item": "${SITE}/schools/"},
    {"@type": "ListItem", "position": 3, "name": "${esc(name)}", "item": "${SITE}/schools/#${encodeURIComponent(name)}"},
    {"@type": "ListItem", "position": 4, "name": "${esc(name)}${esc(kw.suffix)}", "item": "${canonical}"}
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "${esc(`${name} ${kw.suffix}`)}",
  "serviceType": "${esc(kw.suffix)}",
  "provider": {"@type": "EducationalOrganization", "name": "국제학교 전문과외", "url": "${SITE}/"},
  "url": "${canonical}"
}
</script>
</head>
<body>
<nav class="top">
  <div class="inner">
    <a class="brand" href="/"><span class="mark">국</span>국제학교 전문과외</a>
    <a class="cta" href="tel:${PHONE.replace(/-/g, '')}">상담 신청</a>
  </div>
</nav>

<div class="wrap">
  <div class="breadcrumb">
    <a href="/">홈</a><span class="sep">/</span>
    <a href="/schools/">학교별 과외</a><span class="sep">/</span>
    <span>${esc(name)}${esc(kw.suffix)}</span>
  </div>

  <div class="hero">
    <div class="eyebrow">${esc(country)} · ${esc(regionName)}</div>
    <h1>${esc(name)} ${esc(kw.suffix)}</h1>
    <p>국내·해외 국제학교 학생을 위한 1:1 맞춤 과외 국제학교전문과외가 ${esc(name)} 학생을 위한 ${esc(kw.suffix)}를 안내합니다.</p>
  </div>

  ${fact ? `<div class="fact-box"><b>${esc(name)}</b>는 ${esc(fact)}.</div>` : ''}

  <div class="section">
    <h2>${esc(name)} ${esc(kw.suffix)} 안내</h2>
    <p>${esc(kw.body(name))}</p>
  </div>

  <div class="cta-box">
    <p>${esc(name)} ${esc(kw.suffix)}, 무료 모의수업으로 먼저 확인해보세요.</p>
    <div class="btns">
      <a class="btn-gold" href="/trial">무료 모의수업 신청</a>
      <a class="btn-outline" href="tel:${PHONE.replace(/-/g, '')}">전화 상담</a>
    </div>
  </div>

  <div class="section">
    <h2>관련 페이지</h2>
    <div class="related-grid">
      <div class="related-group">
        <h3>${esc(name)}의 다른 과외 안내</h3>
        ${related}
      </div>
    </div>
    <p style="margin-top:14px;"><a href="/schools/" style="color:var(--accent-700); font-weight:600;">전체 학교별 과외 목록 →</a></p>
  </div>
</div>

<footer>
  <div class="wrap">
    <div class="flogo">국제학교 전문과외</div>
    <p style="font-size:13px;">IB, AP, IGCSE 등 국제학교 커리큘럼에 특화된 1:1 맞춤 과외 서비스.</p>
    <div class="fbottom">
      <span>© 2026 국제학교 전문과외. All rights reserved.</span>
      <a href="/">홈으로</a>
    </div>
  </div>
</footer>
</body>
</html>
`;
}

function hubTemplate(allRegions) {
  const groups = allRegions.map(({ country, region, schools }) => {
    if (schools.length === 0) return '';
    const links = schools.map(({ school, regionSlugStr, schoolSlugStr, eligibleKeywords }) => {
      const name = displayName(school.name);
      const first = eligibleKeywords[0];
      return `<a href="/schools/${encodeURIComponent(slugFor(regionSlugStr, schoolSlugStr, first))}.html">${esc(name)}</a>`;
    }).join('\n          ');
    return `      <div class="related-group" id="${encodeURIComponent(region)}" style="margin-bottom:22px;">
        <h3>${esc(country)} · ${esc(region)}</h3>
        <div class="related-grid">
          ${links}
        </div>
      </div>`;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<meta name="theme-color" content="#101a33">
<link rel="icon" type="image/png" href="https://static.readdy.ai/image/396c131664f132186cce247becf0fbc5/f689f6902db8633945364b676e8e94f8.png">
<title>학교별 과외 전체 목록 | 국제학교 전문과외</title>
<meta name="description" content="국내·해외 국제학교별 1:1 맞춤 과외 안내 페이지 모음입니다. 학교를 찾아 들어가시면 IB·AP 등 커리큘럼에 맞는 과외 안내를 확인하실 수 있습니다.">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${SITE}/schools/">
<link rel="stylesheet" href="/schools/assets/school.css">
<link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Noto+Sans+KR:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
<nav class="top">
  <div class="inner">
    <a class="brand" href="/"><span class="mark">국</span>국제학교 전문과외</a>
    <a class="cta" href="tel:${PHONE.replace(/-/g, '')}">상담 신청</a>
  </div>
</nav>

<div class="wrap">
  <div class="breadcrumb"><a href="/">홈</a><span class="sep">/</span><span>학교별 과외</span></div>
  <div class="hero">
    <div class="eyebrow">전체 학교 목록</div>
    <h1>학교별 과외 전체 목록</h1>
    <p>국내·해외 수업 중인 국제학교별로 안내 페이지를 모았습니다. 학교를 찾아 들어가 보세요.</p>
  </div>
  <div class="section">
${groups}
  </div>
</div>

<footer>
  <div class="wrap">
    <div class="flogo">국제학교 전문과외</div>
    <div class="fbottom">
      <span>© 2026 국제학교 전문과외. All rights reserved.</span>
      <a href="/">홈으로</a>
    </div>
  </div>
</footer>
</body>
</html>
`;
}

fs.mkdirSync(OUT_DIR, { recursive: true });

const allGroups = [
  ...DOMESTIC_SCHOOLS.map((r) => ({ country: '국내', ...r })),
  ...OVERSEAS_SCHOOLS.map((r) => ({ country: '해외', ...r })),
];

let pageCount = 0;
let excludedCount = 0;
const urls = [];
const hubData = [];

for (const group of allGroups) {
  const regionSlugStr = regionSlug(group.region);
  const hubSchools = [];
  for (const school of group.schools) {
    if (school.hasProgram === false) {
      excludedCount++;
      continue;
    }
    const eligibleKeywords = KEYWORDS.filter((k) => k.eligible(school));
    const schoolSlugStr = cleanForSlug(displayName(school.name));
    for (const kw of eligibleKeywords) {
      const html = pageTemplate({
        school, regionName: group.region, regionSlugStr, schoolSlugStr, kw, eligibleKeywords, country: group.country,
      });
      const filename = `${slugFor(regionSlugStr, schoolSlugStr, kw)}.html`;
      fs.writeFileSync(path.join(OUT_DIR, filename), html, 'utf8');
      urls.push(`${SITE}/schools/${encodeURIComponent(filename)}`);
      pageCount++;
    }
    hubSchools.push({ school, regionSlugStr, schoolSlugStr, eligibleKeywords });
  }
  hubData.push({ country: group.country, region: group.region, schools: hubSchools });
}

fs.writeFileSync(path.join(OUT_DIR, 'index.html'), hubTemplate(hubData), 'utf8');
fs.writeFileSync(path.join(__dirname, 'school-urls.json'), JSON.stringify(urls, null, 2), 'utf8');

console.log(`Generated ${pageCount} school pages + 1 hub page. Excluded ${excludedCount} unverified schools.`);
