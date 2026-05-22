import type { NavItem } from "@/types";

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://onketing.kr";
const url = rawUrl.replace(/\/$/, "");

export const siteConfig = {
	name: "온케팅",
	nameKo: "온케팅",
	title: "온케팅 | 전문직 마케팅 대행사",
	description:
		"변호사·의사·한의사 등 12개 전문직 전용 마케팅 대행사. 네이버 블로그·숏폼·SNS 콘텐츠로 의뢰를 만듭니다.",
	keywords: [
		"전문직 마케팅",
		"변호사 마케팅",
		"의사 마케팅",
		"한의사 마케팅",
		"수의사 마케팅",
		"노무사 마케팅",
		"세무사 마케팅",
		"전문직 블로그",
		"온케팅",
		"네이버 블로그 마케팅",
		"숏폼 마케팅",
		"전문직 광고",
		"수임 마케팅",
	],
	url,
	ogImage: `${url}/og-image.png`,
	locale: "ko_KR",
	authors: [{ name: "온케팅", url }],
	creator: "온케팅",
	contact: {
		tel: "010-4667-6460",
		email: "onketing.3kim@gmail.com",
		address: "경기도 화성시 동탄구 동탄중심상가1길 36, 8층",
		businessName: "온케팅",
		businessNumber: "112-31-25690",
		kakaoOpenChat: "https://open.kakao.com/o/sgn3wFti",
		naverBlog: "https://blog.naver.com/growthwave-",
		businessHours: "24시간 문의 접수 · 연중무휴",
	},
	nav: [
		{ label: "회사소개", href: "/about" },
		{
			label: "마케팅",
			href: "/services/professional",
			matchPrefix: "/services",
			children: [
				{
					label: "전문직 마케팅",
					href: "/services/professional",
					description: "광고 규정 직접 검토 · 12개 직군 전용",
					icon: "Crown",
					flagship: true,
				},
				{
					label: "블로그 마케팅",
					href: "/services/blog",
					description: "검색에서 상담으로 이어지는 콘텐츠",
					icon: "FileText",
				},
				{
					label: "숏폼 마케팅",
					href: "/services/shortform",
					description: "릴스·쇼츠·틱톡 전문가 채널 구축",
					icon: "Clapperboard",
				},
			],
		},
		{ label: "팀", href: "/team" },
		{ label: "FAQ", href: "/faq" },
	] as NavItem[],
};
