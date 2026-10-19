/*
 * Generates static "해외 학군 가이드" pages for kukje-gwaoe.co.kr under
 * /guide/, one per overseas region/school-district, from
 * overseas-districts-data.cjs.
 *
 * These are informational guides about where Korean expat/immigrant
 * families live abroad and which local public (or Korean international)
 * schools their children attend — NOT a claim that this business currently
 * teaches students at any specific named school. See the data file's header
 * comment for why this is a separate system from generate-schools.cjs.
 *
 * Plain static HTML served directly by Vercel (see the "guide/" exclusion
 * in vercel.json's SPA rewrite) for the same crawlability reason as
 * /schools/ pages.
 *
 * Re-run with `node scripts/generate-district-guides.cjs` after editing
 * overseas-districts-data.cjs. Do not hand-edit files under public/guide/.
 */
const fs = require('fs');
const path = require('path');
const { US_DISTRICTS, UK_DISTRICTS, SEA_DISTRICTS } = require('./overseas-districts-data.cjs');

const ROOT = path.join(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'public', 'guide');
const SITE = 'https://kukje-gwaoe.co.kr';
const PHONE = '010-3951-0535';

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

const COUNTRY_LABEL = { us: '미국', uk: '영국', sea: '동남아' };

function schoolItem(s) {
  const tagLabel = s.tag === 'selective' ? '선발형' : s.tag;
  return `<li>${esc(s.name)}${tagLabel ? ` <span class="tag">${esc(tagLabel)}</span>` : ''}</li>`;
}

function relatedLinks(allDistricts, countryKey, currentId) {
  return allDistricts
    .filter((d) => d.countryKey === countryKey && d.id !== currentId)
    .map((d) => `<a href="/guide/${esc(d.id)}.html">${esc(d.title)}</a>`)
    .join('\n          ');
}

function pageTemplate(district, allDistricts) {
  const title = `${district.title} 한인 학군 가이드 | 국제학교 전문과외`;
  const desc = `${district.title} 지역 한국 주재원·교포 가정의 자녀 교육 가이드. ${district.intro.slice(0, 60)}...`;
  const canonical = `${SITE}/guide/${district.id}.html`;
  const related = relatedLinks(allDistricts, district.countryKey, district.id);

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
<link rel="canonical" href="${canonical}">
<link rel="stylesheet" href="/schools/assets/school.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Noto+Sans+KR:wght@400;500;600;700&display=swap" rel="stylesheet">
<meta property="og:type" content="article">
<meta property="og:site_name" content="국제학교전문과외">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${SITE}/og-image.jpg">
<meta property="og:url" content="${canonical}">
<style>.tag{display:inline-block; margin-left:8px; padding:2px 9px; border-radius:999px; background:#eef1f8; color:#4a5168; font-size:12px; font-weight:600;} .note-box{margin:18px 0; padding:14px 18px; border-left:4px solid #c9a44c; background:#fbf7ee; border-radius:8px; font-size:14px;} .school-list{list-style:none; padding:0; margin:0; display:grid; gap:10px;} .school-list li{padding:12px 16px; background:#f7f8fb; border-radius:10px; font-weight:600;}</style>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "홈", "item": "${SITE}/"},
    {"@type": "ListItem", "position": 2, "name": "해외 학군 가이드", "item": "${SITE}/guide/"},
    {"@type": "ListItem", "position": 3, "name": "${esc(district.title)}", "item": "${canonical}"}
  ]
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
    <a href="/guide/">해외 학군 가이드</a><span class="sep">/</span>
    <span>${esc(district.title)}</span>
  </div>

  <div class="hero">
    <div class="eyebrow">${esc(district.eyebrow)}</div>
    <h1>${esc(district.title)}</h1>
    <p>${esc(district.intro)}</p>
  </div>

  ${district.note ? `<div class="note-box">※ ${esc(district.note)}</div>` : ''}

  <div class="section">
    <h2>주요 학교</h2>
    <ul class="school-list">
      ${district.schools.map(schoolItem).join('\n      ')}
    </ul>
    <p style="margin-top:14px; font-size:13px; color:var(--slate, #6b7280);">※ 위 목록은 해당 지역 공립·국제학교 현황을 안내하는 참고 정보입니다. 특정 학교 재학생 수업 여부를 의미하지 않습니다.</p>
  </div>

  <div class="section">
    <h2>어떻게 도와드리나요</h2>
    <p>어느 학교에 재학 중이시든, 1:1 화상 수업으로 학교 진도·숙제·내신 관리부터 미국·영국 대학 진학을 위한 에세이·입시 준비까지 국제학교전문과외가 도와드립니다. 시차에 맞춰 수업 시간을 조율하며, 해당 지역·학교의 학사 일정에 맞춘 상담도 가능합니다.</p>
  </div>

  <div class="cta-box">
    <p>${esc(district.title)} 거주 중이시라면, 무료 모의수업으로 먼저 확인해보세요.</p>
    <div class="btns">
      <a class="btn-gold" href="/trial">무료 모의수업 신청</a>
      <a class="btn-outline" href="tel:${PHONE.replace(/-/g, '')}">전화 상담</a>
    </div>
  </div>

  ${related ? `<div class="section">
    <h2>같은 권역의 다른 지역</h2>
    <div class="related-grid">
      ${related}
    </div>
    <p style="margin-top:14px;"><a href="/guide/" style="color:var(--accent-700); font-weight:600;">해외 학군 가이드 전체 목록 →</a></p>
  </div>` : ''}
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

function hubTemplate(allDistricts) {
  const byCountry = { us: [], uk: [], sea: [] };
  for (const d of allDistricts) byCountry[d.countryKey].push(d);

  const groups = Object.entries(byCountry).map(([key, list]) => {
    if (list.length === 0) return '';
    const links = list.map((d) => `<a href="/guide/${esc(d.id)}.html">${esc(d.title)}</a>`).join('\n          ');
    return `      <div class="related-group" style="margin-bottom:22px;">
        <h3>${esc(COUNTRY_LABEL[key])}</h3>
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
<title>해외 학군 가이드 — 한국 주재원·교포 자녀 교육 정보 | 국제학교 전문과외</title>
<meta name="description" content="미국·영국·동남아 한국 주재원·교포 자녀가 많이 다니는 지역별 공립학교·국제학교 정보를 모았습니다. 어느 지역에 거주하시든 화상으로 과외를 도와드립니다.">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${SITE}/guide/">
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
  <div class="breadcrumb"><a href="/">홈</a><span class="sep">/</span><span>해외 학군 가이드</span></div>
  <div class="hero">
    <div class="eyebrow">지역별 가이드</div>
    <h1>해외 학군 가이드</h1>
    <p>한국 주재원·교포 자녀가 많이 다니는 지역의 공립학교·국제학교 정보를 모았습니다. 어느 지역·학교에 재학 중이시든 화상으로 과외를 도와드립니다.</p>
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

const allDistricts = [
  ...US_DISTRICTS.map((d) => ({ ...d, countryKey: 'us' })),
  ...UK_DISTRICTS.map((d) => ({ ...d, countryKey: 'uk' })),
  ...SEA_DISTRICTS.map((d) => ({ ...d, countryKey: 'sea' })),
];

let pageCount = 0;
const urls = [];
for (const district of allDistricts) {
  const html = pageTemplate(district, allDistricts);
  fs.writeFileSync(path.join(OUT_DIR, `${district.id}.html`), html, 'utf8');
  urls.push(`${SITE}/guide/${district.id}.html`);
  pageCount++;
}
fs.writeFileSync(path.join(OUT_DIR, 'index.html'), hubTemplate(allDistricts), 'utf8');
fs.writeFileSync(path.join(__dirname, 'guide-urls.json'), JSON.stringify(urls, null, 2), 'utf8');

console.log(`Generated ${pageCount} district guide pages + 1 hub page.`);
