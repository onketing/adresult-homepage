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
		href: "/services/blog",
		icon: "BookOpen",
		eyebrow: "찾아오는 블로그",
		title: "검색하는 고객을\n상담으로 연결합니다",
		description: "검색량은 많고 경쟁은 적은 키워드를 찾아냅니다.",
		points: [
			"원하는 주제에 맞는 키워드를 선정해 드려요.",
			"우리 고객이 진짜 궁금해하는 주제로 콘텐츠를 제작해요.",
			"6개월 뒤에도 고객이 찾아오는 '구조'를 만들어요.",
		],
		cta: "찾아오는 블로그 비법 알아보기",
	},
	{
		href: "/services/shortform",
		icon: "Clapperboard",
		eyebrow: "터지는 숏폼",
		title: "고객이 먼저\n찾아오는 채널",
		description: "알고리즘은 저희 전문입니다.",
		points: [
			"릴스, 쇼츠, 틱톡··· 전부 발행해 드려요.",
			"걱정 마세요. 귀찮은 건 저희가 할게요.",
			'"아직 만나기 전인데 제 팬이 생겼어요."',
		],
		cta: "터지는 숏폼 비법 알아보기",
	},
	{
		href: "/services/professional",
		icon: "Share2",
		eyebrow: "쌓이는 팬층",
		title: "전문가 채널을\n꾸준히 키웁니다",
		description: "SNS가 당신을 대신해 이야기합니다.",
		points: [
			"스레드·링크드인··· 골라서 발행해 드려요.",
			"글이 쌓일수록 의뢰인이 먼저 찾아옵니다.",
			'"선생님 글 다 읽고 왔어요." 이런 분들이 옵니다.',
		],
		cta: "쌓이는 팬층 알아보기",
	},
];
