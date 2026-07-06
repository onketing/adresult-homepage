export type ProcessStep = {
	title: string;
	description: string;
	icon: string;
	badge?: string;
};

// 진단 후 단계별 도입 구조 — 모든 채널을 한 번에 제안하지 않는다
export const PROCESS_STEPS: ProcessStep[] = [
	{
		title: "병원 현황 진단",
		description: "진료과, 지역, 경쟁 병원, 현재 운영 채널, 예산, 목표를 먼저 확인합니다.",
		icon: "Stethoscope",
	},
	{
		title: "우선순위 채널 선정",
		description: "AIO, 숏폼, 스레드, 카페바이럴, 블로그 중 지금 가장 필요한 채널을 먼저 정합니다.",
		icon: "ListChecks",
	},
	{
		title: "맞춤 상품 조합",
		description:
			"모든 채널을 한 번에 제안하지 않습니다. 병원 상황에 따라 단일 채널, 2개 채널 조합, 통합 운영 중 적합한 방식을 제안합니다.",
		icon: "Puzzle",
	},
	{
		title: "실행 및 성과 점검",
		description:
			"콘텐츠 발행 후 조회수와 검색 노출 키워드 표를 리포트로 확인합니다. 문의·내원 변화는 병원에서 확인해 주시는 데이터로 함께 점검합니다.",
		icon: "BarChart2",
	},
	{
		title: "확장 운영",
		description: "성과가 확인된 채널은 강화하고, 부족한 접점은 다른 채널로 보완합니다.",
		icon: "TrendingUp",
	},
];
