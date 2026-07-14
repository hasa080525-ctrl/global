import { useState } from "react";

interface Country {
  code: string;
  flag: string;
  name: string;
  summary: string;
}

const COUNTRIES: Country[] = [
  {
    code: "kr",
    flag: "🇰🇷",
    name: "한국 (국내 국제학교)",
    summary:
      "영미식 커리큘럼과 IB가 함께 쓰입니다. NLCS 제주·Dulwich College Seoul 등 영국식 학교는 IB DP를 중심으로, KIS·SIS 등 미국식 학교는 AP를 폭넓게 다루며, Chadwick International·Branksome Hall Asia 같은 IB 학교는 PYP-MYP-DP 전 과정을 운영합니다.",
  },
  {
    code: "us",
    flag: "🇺🇸",
    name: "미국",
    summary:
      "국가 공통시험 없이 학교별 커리큘럼에 AP(과목당 4~8개 이수)를 폭넓게 활용합니다. SAT·ACT는 상위권 대학 지원 시 여전히 중요하며, 아이비리그급 대학은 다시 점수 제출을 요구하는 추세입니다. 보딩스쿨은 250개 이상이고 유학생 비중이 약 15%입니다.",
  },
  {
    code: "uk",
    flag: "🇬🇧",
    name: "영국",
    summary:
      "보딩스쿨은 보통 13세에 Common Entrance(또는 ISEB Pre-Test)로 입학하며, 14~16세에 GCSE, 16~18세(식스폼)에 A-Level을 이수합니다. GCSE 성적이 A-Level 과목 선택에 영향을 주고, A-Level 성적은 대학 지원 시스템 UCAS로 직결됩니다.",
  },
  {
    code: "sg",
    flag: "🇸🇬",
    name: "싱가포르",
    summary:
      "국제학교 대부분이 IB 또는 영국식 IGCSE/A-Level을 채택하며, 그중 IB가 가장 널리 쓰입니다. 현지 학생이 다니는 국공립 트랙은 PSLE 이후 별도 편제로 나뉘어, 국제학교와는 완전히 다른 시스템으로 운영됩니다.",
  },
  {
    code: "hk",
    flag: "🇨🇳",
    name: "중국·홍콩",
    summary:
      "홍콩 국제학교는 IB 또는 영국식 IGCSE/A-Level을 운영하며 글로벌 대학 인정도가 높아 선호됩니다. 현지 트랙은 HKDSE(3-3-4 학제)이며, 일부 학교는 HKDSE반과 국제(IB/IGCSE)반을 동시에 운영합니다.",
  },
  {
    code: "vn",
    flag: "🇻🇳",
    name: "베트남",
    summary:
      "호치민·하노이를 중심으로 60개 이상의 국제학교가 있으며, 영국·미국·IB·싱가포르식 케임브리지 커리큘럼이 모두 존재합니다(IB World School만 약 18개). 영국식 IGCSE에 IB DP를 얹거나, 미국식 AP와 IB DP를 함께 운영하는 학교도 많습니다.",
  },
  {
    code: "my",
    flag: "🇲🇾",
    name: "말레이시아",
    summary:
      "등록된 국제학교가 약 258개로 동남아 지역 허브 역할을 하며, 케임브리지(IGCSE/A-Level) 또는 IB가 주류입니다. IGB International School처럼 PYP~DP 전 과정을 운영하는 학교도 있습니다.",
  },
  {
    code: "ae",
    flag: "🇦🇪",
    name: "두바이·UAE",
    summary:
      "모든 사립학교가 KHDA(두바이 교육청)의 연례 평가·등급(Outstanding~Very Weak)을 받습니다. 영국식 IGCSE/A-Level이 가장 큰 비중(약 37~40%)을 차지하고, IB를 함께 운영하는 학교도 많습니다.",
  },
  {
    code: "ca",
    flag: "🇨🇦",
    name: "캐나다",
    summary:
      "사립학교가 가장 많은 온타리오주 기준, 대다수가 OSSD(온타리오 고교 졸업장)를 발급하며 여기에 AP나 IB를 더해 경쟁력을 높입니다. 특히 토론토 광역권 상위권 사립·보딩스쿨에서 IB가 널리 쓰입니다. (주별로 학제가 다를 수 있습니다)",
  },
];

export default function CountryGuide() {
  const [active, setActive] = useState(COUNTRIES[0].code);
  const activeCountry = COUNTRIES.find((c) => c.code === active)!;

  return (
    <section id="countries" className="bg-background-100 section-pad py-20 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h4 className="font-heading text-3xl md:text-4xl text-foreground-950">
          <a href="#countries" className="cursor-pointer">
            나라별 국제학교 가이드
          </a>
        </h4>
        <p className="mt-3 text-sm md:text-base text-foreground-700">
          국가마다 커리큘럼과 입시 방식이 다릅니다. 자녀가 있는(또는 계획 중인) 국가를 눌러보세요.
        </p>
      </div>

      <div className="mt-10 mx-auto max-w-4xl flex flex-wrap justify-center gap-2.5">
        {COUNTRIES.map((c) => (
          <button
            key={c.code}
            type="button"
            onClick={() => setActive(c.code)}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition cursor-pointer whitespace-nowrap ${
              active === c.code
                ? "border-primary-500 bg-primary-500 text-foreground-950"
                : "border-background-300 bg-background-50 text-foreground-800 hover:border-primary-400 hover:bg-primary-50"
            }`}
          >
            <span className="text-base">{c.flag}</span> {c.name}
          </button>
        ))}
      </div>

      <div className="mt-8 mx-auto max-w-3xl rounded-3xl border border-background-300/70 bg-background-50 p-6 md:p-8">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{activeCountry.flag}</span>
          <h3 className="font-heading text-xl md:text-2xl text-foreground-950">{activeCountry.name}</h3>
        </div>
        <p className="mt-4 text-sm md:text-base leading-relaxed text-foreground-800">
          {activeCountry.summary}
        </p>
      </div>
    </section>
  );
}
