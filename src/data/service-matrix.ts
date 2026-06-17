export type ServiceMatrixCard = {
	id: string;
	eyebrow: string;
	title: string;
	kpi: string;
	kpiLabel: string;
	caseDesc: string;
	bullets: string[];
	cta: string;
	href: string;
};

export const SERVICE_MATRIX: ServiceMatrixCard[] = [
	{
		id: "blog",
		eyebrow: "Blog",
		title: "검색에서 먼저\n발견됩니다",
		kpi: "+340%",
		kpiLabel: "검색 노출 증가",
		caseDesc: "검색 상위 노출로 유입된 의뢰인",
		bullets: [
			"직군 키워드 기반 콘텐츠 설계",
			"검색 의도에 맞는 포스팅 월 4~8건",
			"광고 규정 사전 검토 후 발행",
		],
		cta: "블로그 마케팅 자세히 보기",
		href: "/services/blog",
	},
	{
		id: "shortform",
		eyebrow: "Shortform",
		title: "영상으로 신뢰를\n쌓습니다",
		kpi: "10만+",
		kpiLabel: "누적 조회수",
		caseDesc: "전문성이 보이는 숏폼으로 문의 전환",
		bullets: [
			"인스타그램·유튜브·틱톡 채널 병행",
			"전문직 대표 직접 출연 기획·편집",
			"규정 위반 없는 의료·법률 콘텐츠",
		],
		cta: "숏폼 마케팅 자세히 보기",
		href: "/services/shortform",
	},
	{
		id: "professional",
		eyebrow: "Professional",
		title: "전문직 전담\n통합 운영",
		kpi: "5배",
		kpiLabel: "상담 신청 증가",
		caseDesc: "블로그·숏폼·광고 규정 통합 운영",
		bullets: [
			"12개 직군 규정 전담 검토",
			"채널별 전략 + 콘텐츠 + 광고 통합",
			"월간 데이터 보고 — 노출 수 아닌 상담 수",
		],
		cta: "전문직 통합 운영 자세히 보기",
		href: "/services/professional",
	},
];
