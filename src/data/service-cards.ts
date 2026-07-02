export type ServiceCard = {
	href: string;
	icon: string;
	eyebrow: string;
	title: string;
	description: string;
	cta: string;
	points?: string[];
};

export const SERVICE_CARDS: ServiceCard[] = [
	{
		href: "/services/professional",
		icon: "Share2",
		eyebrow: "병원 AI마케팅",
		title: "업계 최초,\nAI로 병원을 알립니다",
		description: "검색과 생성형 AI 답변에 병원이 먼저 노출됩니다.",
		points: [
			"AIO(AI 최적화)로 검색·챗봇 답변에 병원을 노출해요.",
			"진료과별 데이터로 병원에 맞는 전략을 설계해요.",
			"노출이 아니라 신규 환자로 이어지게 만들어요.",
		],
		cta: "병원 AI마케팅 알아보기",
	},
	{
		href: "/services/shortform",
		icon: "Clapperboard",
		eyebrow: "숏폼·영상",
		title: "환자가 먼저\n찾아오는 채널",
		description: "릴스·쇼츠·유튜브로 병원 신뢰를 쌓습니다.",
		points: [
			"촬영·편집·업로드까지 한 팀이 책임져요.",
			"500여 개 영상 노하우로 터지는 콘텐츠를 만들어요.",
			"채널이 쌓일수록 환자가 먼저 검색해 찾아와요.",
		],
		cta: "숏폼 마케팅 알아보기",
	},
	{
		href: "/services/blog",
		icon: "BookOpen",
		eyebrow: "바이럴·블로그",
		title: "검색하는 환자를\n신환으로 연결",
		description: "진료과별 키워드로 상위에 노출합니다.",
		points: [
			"환자가 실제로 검색하는 키워드를 공략해요.",
			"의료광고법을 지키며 신뢰를 주는 콘텐츠를 발행해요.",
			"한 번 발행한 글이 오래도록 환자를 데려와요.",
		],
		cta: "바이럴·블로그 알아보기",
	},
];
