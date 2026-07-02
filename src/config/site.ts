import type { NavItem } from "@/types";

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://adresult.kr";
const url = rawUrl.replace(/\/$/, "");

export const siteConfig = {
	name: "애드리절트",
	nameKo: "애드리절트",
	nameEn: "ADRESULT",
	title: "병원마케팅 애드리절트(ADRESULT) | 결과로 말하는 광고회사",
	description:
		"애드리절트(ADRESULT)는 업력 11년, 누적 1,272곳의 병원마케팅 전문 대행사입니다. 상품에 병원을 맞추지 않고, 진료과별 1:1 맞춤 전략으로 신환을 늘립니다. 병원 AI마케팅·숏폼·바이럴·유튜브까지 한 곳에서.",
	keywords: [
		// 브랜드
		"애드리절트",
		"adresult",
		"결과로 말하는 광고회사",
		// 병원마케팅 통합
		"병원마케팅",
		"병원마케팅 대행사",
		"병원 광고",
		"병원 홍보",
		"의료마케팅",
		"병원마케팅 에이전시",
		// 서비스 유형
		"병원 AI마케팅",
		"병원 숏폼 마케팅",
		"병원 바이럴 마케팅",
		"병원 유튜브",
		"병원 블로그 마케팅",
		"진료과별 마케팅",
		// 진료과
		"피부과 마케팅",
		"정형외과 마케팅",
		"성형외과 마케팅",
		"치과 마케팅",
		"한의원 마케팅",
		"안과 마케팅",
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
			href: "/services/professional",
			matchPrefix: "/services",
			children: [
				{
					label: "병원 통합 마케팅",
					href: "/services/professional",
					icon: "Users",
				},
				{
					label: "숏폼·영상 마케팅",
					href: "/services/shortform",
					icon: "Zap",
				},
				{
					label: "바이럴·블로그",
					href: "/services/blog",
					icon: "Search",
				},
			],
		},
		{ label: "블로그", href: "/blog" },
		{ label: "팀", href: "/team" },
		{ label: "FAQ", href: "/faq" },
	] as NavItem[],
};
