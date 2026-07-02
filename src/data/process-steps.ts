export type ProcessStep = {
	title: string;
	description: string;
	icon: string;
	badge?: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
	{
		title: "마케팅 상담",
		description: "병원 상황과 목표를 듣고, 궁금한 점은 무엇이든 직접 답해 드립니다.",
		icon: "MessageSquare",
	},
	{
		title: "병원 맞춤 전략",
		description: "상품에 병원을 맞추지 않습니다. 병원에 맞춘 1:1 전략을 설계합니다.",
		icon: "CalendarDays",
	},
	{
		title: "콘텐츠 발행",
		description: "AI·숏폼·블로그로 최적화된 콘텐츠를 발행하고 직접 관리합니다.",
		icon: "PenLine",
	},
	{
		title: "성과 점검",
		description: "신환·문의 결과를 리포트로 확인하고, 결과에 따라 전략을 다시 세웁니다.",
		icon: "BarChart2",
	},
];
