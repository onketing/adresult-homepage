import type { NavItem } from "@/types";

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://adresult.kr";
const url = rawUrl.replace(/\/$/, "");

export const siteConfig = {
	name: "애드리절트",
	nameKo: "애드리절트",
	nameEn: "ADRESULT",
	title: "병원마케팅 대행사 애드리절트(ADRESULT) | 결과로 말하는 광고회사",
	description:
		"병원마케팅 대행사 애드리절트 — 진료과별 1:1 맞춤 AIO·숏폼·바이럴 마케팅으로 신환을 늘립니다. 업력 11년·누적 1,272곳.",
	keywords: [
		// 브랜드
		"애드리절트",
		"adresult",
		"결과로 말하는 광고회사",
		// 병원마케팅 통합 (헤드 키워드)
		"병원마케팅",
		"병원마케팅회사",
		"병원마케팅 대행사",
		"병원마케팅대행사",
		"병원마케팅업체",
		"병원마케팅 전문업체",
		"병원온라인마케팅",
		"병원광고회사",
		"병원홍보대행사",
		"병원마케팅비용",
		"병원마케팅성공사례",
		"병원신규환자마케팅",
		"의료마케팅",
		// 서비스 유형
		"병원 AIO마케팅",
		"병원AI검색마케팅",
		"병원GEO마케팅",
		"병원AI노출마케팅",
		"병원 숏폼 마케팅",
		"병원릴스마케팅",
		"병원쇼츠마케팅",
		"병원 유튜브 쇼츠 마케팅",
		"병원 바이럴 마케팅",
		"병원 블로그 마케팅",
		"병원 인스타 마케팅",
		// 진료과
		"피부과마케팅회사",
		"성형외과마케팅회사",
		"정형외과마케팅회사",
		"통증의학과 마케팅",
		"치과마케팅회사",
		"한의원마케팅회사",
		"한방병원 마케팅",
		"교통사고한의원마케팅",
		"다이어트한의원마케팅",
		// 의도
		"신환 마케팅",
		"병원 신규환자",
		"병원 매출 상승",
	],
	url,
	ogImage: `${url}/og-image.png`,
	locale: "ko_KR",
	authors: [{ name: "애드리절트", url }],
	creator: "애드리절트",
	contact: {
		tel: "1661-4829",
		email: "mail@adresult.kr",
		address: "서울 강남구 헌릉로618길 9 (세곡동) 1층",
		owner: "이승민",
		businessName: "애드리절트",
		businessNumber: "889-88-00231",
		fax: "070-8622-5300",
		youtube: "https://www.youtube.com/channel/UCrmK0tiaWRuZYlrm5CabtBA",
		kakaoOpenChat: "https://pf.kakao.com/_nPghV/chat",
		naverBlog: "https://blog.naver.com/9fdc_8190",
		instagram: "https://www.instagram.com/jinsim_ii/",
		businessHours: "24시간 문의 접수 · 연중무휴",
	},
	nav: [
		{
			label: "회사소개",
			href: "/about",
			matchPrefix: "/about",
			children: [
				{ label: "ABOUT", href: "/about", icon: "Building2" },
				{ label: "HISTORY", href: "/history", icon: "History" },
				{ label: "CEO", href: "/ceo", icon: "User" },
				{ label: "PEOPLE", href: "/people", icon: "UsersRound" },
			],
		},
		{
			label: "마케팅",
			href: "/services/aio",
			matchPrefix: "/services",
			children: [
				{
					label: "AIO마케팅",
					href: "/services/aio",
					icon: "Sparkles",
				},
				{
					label: "끝장숏폼",
					href: "/services/shortform",
					icon: "Zap",
				},
			],
		},
		{
			label: "고객사례",
			href: "/cases",
			matchPrefix: "/cases",
			children: [
				{ label: "성공사례", href: "/cases", icon: "FileText" },
				{ label: "고객후기", href: "/reviews", icon: "Star" },
			],
		},
		{ label: "FAQ", href: "/faq" },
	] as NavItem[],
};
