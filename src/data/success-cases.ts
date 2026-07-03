import type { CardItem } from "@/components/shared/PaginatedCards";

// 애드리절트 병원마케팅 성공사례 — adresult.kr 원문 이식(scripts/port-cases.py 자동 생성).
// 상단 브랜드 헤더/하단 CTA는 상세 페이지(src/app/cases/[slug])에서 공통 렌더.
export type CaseRun = {
	t?: string;
	b?: boolean;
	i?: boolean;
	u?: boolean;
	c?: string;
	fs?: number;
	bg?: string;
	br?: boolean;
	k?: number;
};
export type CaseBlock = {
	id?: number;
	type: "h" | "p" | "img" | "video" | "hr" | "callout";
	runs?: CaseRun[];
	align?: "center" | "right";
	gap?: boolean;
	src?: string;
	href?: string;
	alt?: string;
	w?: number;
	h?: number;
	videoId?: string;
};
export type CaseFaq = { q: string; a: string };
export type CaseArticle = {
	slug: string;
	title: string;
	excerpt: string;
	summary?: string;
	faq?: CaseFaq[];
	cover: string;
	coverW: number;
	coverH: number;
	blocks: CaseBlock[];
};

export const CASE_ARTICLES: CaseArticle[] = [
	{
		slug: "167449883",
		title: "[정형외과마케팅] 무려 22%의 매출 상승",
		excerpt:
			"저희와 함께 광고를 진행한 지 2주 만에 효과를 느꼈다는 S 병원의 실장님께서 전해주신 말입니다. 그리고 3개월이 지난 현재, 병원 개원 이래 처음으로 방문한 환자 수가 80명을 넘었다는 기쁜 소식을 전해주셨습니다! 오늘은 이 S병원이 이토록 빠르게 효과를 볼 수 있었던 이유와 함께 환",
		summary:
			"전문의 자격증을 가진 마케터가 직접 원고를 쓴 S재활의학과는, 광고 2주 만에 문의가 늘고 3개월 만에 전월 대비 매출 22% 상승을 기록했습니다. 세부 키워드 노출도가 일주일 만에 2배로 올랐습니다.",
		faq: [
			{
				q: "S병원은 얼마나 빨리 효과가 났나요?",
				a: "광고 2주 만에 문의가 늘어 실제 방문으로 이어졌고, 3개월 만에 개원 이래 처음으로 방문 환자가 80명을 넘으며 전월 대비 매출이 22% 상승했습니다.",
			},
			{
				q: "콘텐츠는 누가 작성하나요?",
				a: "애드리절트에는 전문의 자격증을 보유한 마케터가 있어 재활의학과 정보성 원고를 직접 작성했습니다. 전문성과 깊이에서 일반 원고와 큰 차이가 나 환자 신뢰로 이어집니다.",
			},
			{
				q: "노출도는 어떻게 높이나요?",
				a: "키워드 분석 → 병원별 우선순위 → 전략적 배치 → 변화하는 네이버 로직 연구 → 핵심 키워드 반복 작업의 다섯 단계로 진행하며, S병원은 일주일 만에 노출도가 2배로 올랐습니다.",
			},
		],
		cover: "/images/cases/167449883/1.png",
		coverW: 349,
		coverH: 519,
		blocks: [
			{
				type: "img",
				src: "/images/cases/167449883/1.png",
				w: 349,
				h: 519,
				alt: "병원마케팅성공사례",
				id: 0,
			},
			{
				type: "h",
				runs: [
					{
						t: '"2주 만에 문의가 늘어나고 실제 방문으로 이어지고 있습니다."',
						b: true,
						fs: 22,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 1,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희와 함께 광고를 진행한 지 2주 만에 효과를 느꼈다는 S 병원의 실장님께서 전해주신 말입니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 2,
			},
			{
				type: "img",
				src: "/images/cases/167449883/2.png",
				w: 369,
				h: 260,
				alt: "병원마케팅대행사",
				id: 3,
			},
			{
				type: "p",
				runs: [
					{
						t: "그리고 3개월이 지난 현재,",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 4,
			},
			{
				type: "p",
				runs: [
					{
						t: "병원 개원 이래 처음으로 방문한 환자 수가 80명을 넘었다",
						b: true,
						k: 0,
					},
					{
						t: "는 기쁜 소식을 전해주셨습니다!",
						k: 1,
					},
				],
				align: "center",
				id: 5,
			},
			{
				type: "p",
				runs: [
					{
						t: "오늘은 이 S병원이 이토록 빠르게 효과를 볼 수 있었던 이유와 함께",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 6,
			},
			{
				type: "p",
				runs: [
					{
						t: "환자들이 꾸준히 늘어난 애드리절트만의 비결을 설명해 드리고자 합니다.",
						k: 0,
					},
				],
				align: "center",
				id: 7,
			},
			{
				type: "h",
				runs: [
					{
						t: "1. 전문의 자격증을 보유중인 작가가 직접 작성한 퀄리티 높은 콘텐츠",
						b: true,
						fs: 22,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 8,
			},
			{
				type: "p",
				runs: [
					{
						t: "현재 애드리절트는 ",
						k: 0,
					},
					{
						t: "전문의 자격증을 보유 중인 마케터",
						c: "#ff0000",
						k: 1,
					},
					{
						t: "가 있습니다.",
						k: 2,
					},
				],
				align: "center",
				gap: true,
				id: 9,
			},
			{
				type: "p",
				runs: [
					{
						t: "현직 의사로서 병원 마케팅의 필요성을 직접 느끼고 애드리절트에서 마케팅 강의를 수강한 것인데요.",
						k: 0,
					},
				],
				align: "center",
				id: 10,
			},
			{
				type: "p",
				runs: [
					{
						t: "해당 마케터께서 S재활의학과의 정보성 원고를 직접 작성해 주셨습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 11,
			},
			{
				type: "img",
				src: "/images/cases/167449883/3.png",
				w: 376,
				h: 567,
				alt: "병원마케팅회사",
				id: 12,
			},
			{
				type: "img",
				src: "/images/cases/167449883/4.png",
				w: 503,
				h: 324,
				alt: "병원브랜딩",
				id: 13,
			},
			{
				type: "p",
				runs: [
					{
						t: "당연히 일반인이 쓰는 원고와는 전문성과 깊이에서 비교할 수조차 없는 퀄리티 차이가 있었는데요.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 14,
			},
			{
				type: "p",
				runs: [
					{
						t: "주말에도 공부하고 원장님과의 직접적인 소통을 통하여 ",
						k: 0,
					},
					{
						t: "원고 하나하나의 퀄리티를 절대 놓치지 않았습니다.",
						bg: "#ffd966",
						k: 1,
					},
				],
				align: "center",
				id: 15,
			},
			{
				type: "p",
				runs: [
					{
						t: "병원을 홍보하는 콘텐츠에서 중요한 점은 바로 ",
						k: 0,
					},
					{
						t: "환자들이 우리 병원을 찾아오게 만드는 신뢰감",
						c: "#ff0000",
						k: 1,
					},
					{
						t: "입니다.",
						k: 2,
					},
				],
				align: "center",
				gap: true,
				id: 16,
			},
			{
				type: "p",
				runs: [
					{
						t: "때문에 전문성이 매우 중요한데요.",
						k: 0,
					},
				],
				align: "center",
				id: 17,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희는 환자들이 신뢰하고 방문할 수 있도록 믿을 수 있는 콘텐츠를 만들었습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 18,
			},
			{
				type: "h",
				runs: [
					{
						t: "2. 세부키워드를 이용한 압도적인 노출 수",
						b: true,
						fs: 22,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 19,
			},
			{
				type: "p",
				runs: [
					{
						t: "환자가 우리 병원에 방문하도록 만들 수 있는 가장 효과적인 방법은 바로",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 20,
			},
			{
				type: "p",
				runs: [
					{
						t: "환자가 검색할 만한 세부키워드를 이용하여 우리 병원의 글의 노출을 높이는 것입니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 21,
			},
			{
				type: "p",
				runs: [
					{
						t: "s병원의 경우 이 세부키워드를 정말 빠른 시간 내에 장악하였는데요.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 22,
			},
			{
				type: "img",
				src: "/images/cases/167449883/5.png",
				w: 393,
				h: 111,
				alt: "병원개원마케팅",
				id: 23,
			},
			{
				type: "p",
				runs: [
					{
						t: "위 사진 자료를 확인해 보면 S병원의 경우 불과 일주일 만에",
						k: 0,
					},
				],
				align: "center",
				id: 24,
			},
			{
				type: "p",
				runs: [
					{
						t: "노출도가 2배가 넘도록 오른 것을 확인할 수가 있었습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 25,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희가 노출도를 높이기 위해 어떠한 방법을 사용하는지 알려드리도록 하겠습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 26,
			},
			{
				type: "h",
				runs: [
					{
						t: "1. 추출한 키워드를 분석",
						b: true,
						fs: 20,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 27,
			},
			{
				type: "p",
				runs: [
					{
						t: "당연히 지역과 분과별로 노출이 되는 키워드는 모두 다릅니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 28,
			},
			{
				type: "p",
				runs: [
					{
						t: "한 병원을 성공 시키기 위해서는 그 병원의 분과와 해당 지역에 대한 이해가",
						k: 0,
					},
				],
				align: "center",
				id: 29,
			},
			{
				type: "p",
				runs: [
					{
						t: "필수 이기에 키워드 분석을 빼놓고 진행할 수는 없습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 30,
			},
			{
				type: "h",
				runs: [
					{
						t: "2. 병원의 필요도에 따른 키워드의 우선순위",
						b: true,
						fs: 20,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 31,
			},
			{
				type: "p",
				runs: [
					{
						t: "같은 분과, 같은 지역이라 할지라도 여러 이유 때문에 각 병원 마다 가장 필요한 키워드는 다를 수 있는데요.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 32,
			},
			{
				type: "p",
				runs: [
					{
						t: "예를 들자면 어린이가 별로 없는 지역이라도 해당 병원의 강점이",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 33,
			},
			{
				type: "p",
				runs: [
					{
						t: "소아진료에서 'ㅇㅇ 지역 어린이 치과'라는 키워드는 중요도가 올라가게 됩니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 34,
			},
			{
				type: "h",
				runs: [
					{
						t: "3. 전략적인 키워드 배치",
						b: true,
						fs: 20,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 35,
			},
			{
				type: "p",
				runs: [
					{
						t: "이제 여기서부터는 전략이 매우 중요해 집니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 36,
			},
			{
				type: "p",
				runs: [
					{
						t: "두 개 이상의 키워드를 한 원고에 배치 하여 노출률을 효율적으로 높여볼 수도 있고,",
						k: 0,
					},
				],
				align: "center",
				id: 37,
			},
			{
				type: "p",
				runs: [
					{
						t: "키워드 하나에 우리 병원의 콘텐츠만 보이도록 작업해 해당 키워드를 꽉 붙잡을 수도 있습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 38,
			},
			{
				type: "p",
				runs: [
					{
						t: "즉, 병원의 상황에 맞춘 전략적인 키워드 배치가 필요하게 됩니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 39,
			},
			{
				type: "h",
				runs: [
					{
						t: "4. 변화하는 노출 로직에 대한 연구",
						b: true,
						fs: 20,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 40,
			},
			{
				type: "p",
				runs: [
					{
						t: "네이버의 경우 노출 로직이 자주 변경 되는데 그럴때 마다 변경된 노출 로직에 대한 새로운 연구가 필요합니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 41,
			},
			{
				type: "p",
				runs: [
					{
						t: "상위 노출된 글의 공통점을 찾으며 다양한 방식으로 테스트를 진행하며 길을 찾고 있습니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 42,
			},
			{
				type: "h",
				runs: [
					{
						t: "5. 핵심 키워드는 노출이 될 때까지 반복 작업",
						b: true,
						fs: 20,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 43,
			},
			{
				type: "p",
				runs: [
					{
						t: "상황에 따라 핵심 키워드 한 개가 10개의 키워드보다 중요한 경우도 있습니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 44,
			},
			{
				type: "p",
				runs: [
					{
						t: "중요 키워드에 노출될 가능성이 있다면 해당 키워드는 노출이 될 때까지 반복해서 작업을 이어갑니다.",
						k: 0,
					},
				],
				align: "center",
				id: 45,
			},
			{
				type: "p",
				runs: [
					{
						t: "사실 재작업이라는 게 노력이 많이 들지만",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 46,
			},
			{
				type: "p",
				runs: [
					{
						t: "이것이 가져올 효과를 알기에 노력을 하는 수 밖에 없습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 47,
			},
			{
				type: "img",
				src: "/images/cases/167449883/6.png",
				w: 361,
				h: 362,
				alt: "병원바이럴마케팅",
				id: 48,
			},
			{
				type: "p",
				runs: [
					{
						t: "그 결과 S병원으로부터 긍정적인 피드백을 다시 한 번 받을 수 있었습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 49,
			},
			{
				type: "p",
				runs: [
					{
						t: "무려 전 달에 비교해 ",
						k: 0,
					},
					{
						t: "22%의 매출 상승",
						b: true,
						c: "#ff0000",
						k: 1,
					},
					{
						t: "을 기록한 것입니다.",
						k: 2,
					},
				],
				align: "center",
				id: 50,
			},
			{
				type: "p",
				runs: [
					{
						t: "애드리절트는 항상 광고를 믿고 맡겨주신 병원에 진심을 다하는 실력 있는 마케터들이 모인 곳 입니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 51,
			},
			{
				type: "p",
				runs: [
					{
						t: "눈 속임 따위는 없는 진짜 마케팅, 결과로 증명하는 곳을 경험하고 싶다면 고민하실 필요가 없습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 52,
			},
			{
				type: "p",
				runs: [
					{
						t: "마케팅 때문에 고문이라면 현직 의사가 인정하신 마케팅 회사 애드리절트와 함께하기를 바라겠습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 53,
			},
			{
				type: "p",
				runs: [
					{
						t: "감사합니다",
						k: 0,
					},
				],
				align: "center",
				id: 54,
			},
			{
				type: "p",
				runs: [
					{
						t: "현직 의사가 병원 마케팅 회사의 지사장이 된 이야기가 궁금하다면 아래 링크로 확인해 주세요 ^^",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 55,
			},
			{
				type: "p",
				runs: [
					{
						t: "https://m.blog.naver.com/dog12965/223030318603",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 56,
			},
		],
	},
	{
		slug: "167431321",
		title: "[개원병원마케팅] 원장님께서 3개월 만에 전해 주신 심경",
		excerpt:
			"저희 애드리절트와 함께한 지 막 3개월이 지난 '개원 병원' M 모발이식 병원의 원장님께서 전해 주신 말씀인데요. 이 말을 듣자마자 너무 안도감이 들었어요. 왜냐하면 M병원은 개원 전부터 저희와 준비를 하고 광고를 시작한 곳이고 더 크게는 원장님의 큰 사명으로 병원 개원을 결심 한 곳이",
		summary:
			"강남에서 개원한 M 모발이식 병원은 개원 전부터 브랜딩을 준비해, 광고 3개월 만에 '환자가 너무 많아 광고를 살살 해달라'는 말을 들을 정도로 성과를 냈습니다. 개원과 동시에 수술 스케줄이 조기 마감됐습니다.",
		faq: [
			{
				q: "개원 병원은 언제 마케팅을 시작해야 하나요?",
				a: "인지도가 없는 개원 병원일수록 개원 전부터 마케팅을 준비하는 것이 좋습니다. M병원은 개원 전부터 준비해 개원과 동시에 환자가 늘고 3개월 만에 수술 스케줄이 조기 마감됐습니다.",
			},
			{
				q: "경쟁이 치열한 강남에서 어떻게 차별화했나요?",
				a: "소규모 병원만의 강점(대형 병원이 못 하는 시스템)을 부각하고, 가격대가 높은 모발이식 특성상 신중한 환자를 위한 정보를 M병원만의 강점으로 담아 수요 높은 키워드와 함께 노출했습니다.",
			},
			{
				q: "개원 병원 브랜딩은 왜 중요한가요?",
				a: "인지도가 없는 개원 병원은 자주 노출돼 환자의 인식에 들어가야 합니다. '줄 세우기 전략'과 환자 바이럴(좋은 리뷰)로 '개인 병원인데 리뷰가 좋다'는 인식을 만드는 것이 핵심입니다.",
			},
		],
		cover: "/images/cases/167431321/1.png",
		coverW: 390,
		coverH: 417,
		blocks: [
			{
				type: "img",
				src: "/images/cases/167431321/1.png",
				w: 390,
				h: 417,
				alt: "병원온라인마케팅",
				id: 0,
			},
			{
				type: "h",
				runs: [
					{
						t: '"환자가 너무 많이 와서 힘들어요. 광고 조금만 살살 해주세요"',
						b: true,
						fs: 22,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 1,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희 애드리절트와 함께한 지 막 3개월이 지난 '개원 병원' M 모발이식 병원의 원장님께서 전해 주신 말씀인데요.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 2,
			},
			{
				type: "p",
				runs: [
					{
						t: "이 말을 듣자마자 너무 안도감이 들었어요.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 3,
			},
			{
				type: "p",
				runs: [
					{
						t: "왜냐하면 ",
						k: 0,
					},
					{
						t: "M병원은 개원 전부터 저희와 준비를 하고 광고를 시작한 곳",
						bg: "#ffd966",
						k: 1,
					},
					{
						t: "이고",
						k: 2,
					},
				],
				align: "center",
				id: 4,
			},
			{
				type: "p",
				runs: [
					{
						t: "더 크게는 원장님의 큰 사명으로 병원 개원을 결심 한 곳이기 때문인데요.",
						k: 0,
					},
				],
				align: "center",
				id: 5,
			},
			{
				type: "p",
				runs: [
					{
						t: "그래서 더더욱 무슨 일이 있어도 '꼭 성공시켜야겠다'라는 다짐과 함께 광고를 진행하게 되었습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 6,
			},
			{
				type: "p",
				runs: [
					{
						t: "기본적으로 개인 병원의 경우 이제 막 태어난 신생아와 같기에 인지도가 없어 마케팅을 진행하는 게 좋으나",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 7,
			},
			{
				type: "p",
				runs: [
					{
						t: "많은 원장님들께서는 마케팅은 후순위로 미루는 경우가 많습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 8,
			},
			{
				type: "p",
				runs: [
					{
						t: "마케팅 말고도 해야 할 일이 너무 많기 때문이죠.",
						k: 0,
					},
				],
				align: "center",
				id: 9,
			},
			{
				type: "p",
				runs: [
					{
						t: "그러나 막상 개원을 했지만 인지도가 없다면 환자들의 유입에도 타격을 입을 수 있으며,",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 10,
			},
			{
				type: "p",
				runs: [
					{
						t: "마케팅 없이 이미 자리를 잡은 주변 병원과 경쟁하기란 힘든 일 입니다.",
						k: 0,
					},
				],
				align: "center",
				id: 11,
			},
			{
				type: "video",
				videoId: "-AYjtZFzFbU",
				id: 12,
			},
			{
				type: "p",
				runs: [
					{
						t: "그래서 저희는 병원 마케팅을 나중으로 미루는 것에 대해서는 좋지 않은 선택이라 생각합니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 13,
			},
			{
				type: "p",
				runs: [
					{
						t: "그렇다면 개원병원마케팅은 어떻게 진행해야 성공할 수 있을까요?",
						k: 0,
					},
				],
				align: "center",
				id: 14,
			},
			{
				type: "h",
				runs: [
					{
						t: '"공격적인 병원 브랜딩을 통한 환자의 인식 공략"',
						b: true,
						c: "#ff0000",
						fs: 22,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 15,
			},
			{
				type: "p",
				runs: [
					{
						t: "M병원 마케팅에 있어 가장 먼저 시작한 작업은 바로 브랜딩 작업이었습니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 16,
			},
			{
				type: "p",
				runs: [
					{
						t: "단순히 몇 개의 글을 올리는 것이 아니라, 많은 개수의 작업을 진행하였습니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 17,
			},
			{
				type: "p",
				runs: [
					{
						t: "(실제 M병원 검색시 볼 수 있는 브랜드 콘텐츠)",
						k: 0,
					},
				],
				align: "center",
				id: 18,
			},
			{
				type: "img",
				src: "/images/cases/167431321/2.png",
				w: 762,
				h: 864,
				alt: "강남병원마케팅",
				id: 19,
			},
			{
				type: "p",
				runs: [
					{
						t: "브랜딩이 중요한 이유는 인지도가 없는 개인 병원이기에 무의식적으로",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 20,
			},
			{
				type: "p",
				runs: [
					{
						t: "자주 노출되게끔 하여 사람들의 인식 속에 들어가야 되기 때문입니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 21,
			},
			{
				type: "p",
				runs: [
					{
						t: "일명 ",
						fs: 18,
						k: 0,
					},
					{
						t: '"줄 세우기 전략" ',
						b: true,
						fs: 18,
						k: 1,
					},
					{
						t: "이라고 하여,",
						fs: 18,
						k: 2,
					},
				],
				align: "center",
				gap: true,
				id: 22,
			},
			{
				type: "p",
				runs: [
					{
						t: "개업한 식당에 줄을 세우면 다른 별도의 마케팅을 진행하지 않아도",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 23,
			},
			{
				type: "p",
				runs: [
					{
						t: "손님들이 자연스럽게 그 뒤를 따르고 찾게 되는 법칙이죠.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 24,
			},
			{
				type: "img",
				src: "/images/cases/167431321/3.png",
				w: 464,
				h: 823,
				alt: "인천병원마케팅",
				id: 25,
			},
			{
				type: "p",
				runs: [
					{
						t: "환자의 인식에 깊게 박히기 위해서는",
						k: 0,
					},
					{
						t: " '환자 바이럴'",
						b: true,
						k: 1,
					},
					{
						t: "을 이용하는 것이 좋은데요.",
						k: 2,
					},
				],
				align: "center",
				gap: true,
				id: 26,
			},
			{
				type: "p",
				runs: [
					{
						t: "개인 병원이라면 후기도 없는 것이 당연하기에 후기가 없는 개원 초기에는 가기가 살짝 망설여지죠.",
						k: 0,
					},
				],
				align: "center",
				id: 27,
			},
			{
				type: "p",
				runs: [
					{
						t: "배달만 해도 후기를 보는데, 병원의 경우는 더한 편입니다.",
						k: 0,
					},
				],
				align: "center",
				id: 28,
			},
			{
				type: "p",
				runs: [
					{
						t: "이때 브랜딩을 위해 환자 바이럴을 이용하면 성공으로 이어질 수 있습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 29,
			},
			{
				type: "p",
				runs: [
					{
						t: "'개인 병원임에도 좋은 리뷰 밖에 없다'",
						c: "#ff0000",
						k: 0,
					},
					{
						t: "라는 점을 내세울 수 있게 되는 것이죠.",
						k: 1,
					},
				],
				align: "center",
				id: 30,
			},
			{
				type: "h",
				runs: [
					{
						t: '"확실한 차별성 드러내기"',
						b: true,
						c: "#ff0000",
						fs: 22,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 31,
			},
			{
				type: "p",
				runs: [
					{
						t: "M병원의 경우, 경쟁이 치열한 강남에서 개원을 준비 중이었습니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 32,
			},
			{
				type: "p",
				runs: [
					{
						t: "모발이식 병원 역시 이미 강남에 여러 군데 있었기에, 이제 막 개원을 앞둔 병원이 살아남기 힘들 수 있었어요.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 33,
			},
			{
				type: "img",
				src: "/images/cases/167431321/4.png",
				w: 700,
				h: 860,
				alt: "병원전문마케팅",
				id: 34,
			},
			{
				type: "p",
				runs: [
					{
						t: "그러나 우리는",
						k: 0,
					},
					{
						t: " '소규모' 병원이기에 내세울 수 있는 장점들을 마케팅에 적극 활용",
						b: true,
						c: "#ff0000",
						k: 1,
					},
					{
						t: "해 보기로 했습니다.",
						k: 2,
					},
				],
				align: "center",
				gap: true,
				id: 35,
			},
			{
				type: "p",
				runs: [
					{
						t: "대규모 병원에서는 할 수 없는 시스템이 있었기에 다른 병원과 M병원의 차별점으로 다가가기 적합했어요.",
						k: 0,
					},
				],
				align: "center",
				id: 36,
			},
			{
				type: "p",
				runs: [
					{
						t: "또한 '모발이식'은 다른 분과와 비교하여 가격대가 높아 시술을 고민 중인 분들도 매우 신중하게 선택을 고민할 수밖에 없는데요.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 37,
			},
			{
				type: "p",
				runs: [
					{
						t: "이러한 특성들을 고려하여 저희는 경쟁병원들에서는 다루지 못한 어려운 부분들을",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 38,
			},
			{
				type: "p",
				runs: [
					{
						t: "M병원 만의 강점으로 담아 수요가 높은 키워드와 함께 광고를 진행하였습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 39,
			},
			{
				type: "img",
				src: "/images/cases/167431321/5.png",
				w: 390,
				h: 306,
				alt: "서울병원마케팅",
				id: 40,
			},
			{
				type: "p",
				runs: [
					{
						t: "그 결과 개원과 동시에 M병원을 찾는 환자의 수는 늘었고,",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 41,
			},
			{
				type: "p",
				runs: [
					{
						t: "원장님의 수술 스케줄이 전부 조기 마감 되는 성과를 달성하게 되었습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 42,
			},
			{
				type: "h",
				runs: [
					{
						t: '"',
						b: true,
						k: 0,
					},
					{
						t: '개원병원마케팅은 이렇게"',
						b: true,
						fs: 22,
						k: 1,
					},
				],
				align: "center",
				gap: true,
				id: 43,
			},
			{
				type: "p",
				runs: [
					{
						t: "마지막으로 어떻게 하여 개원병원이 성공하게 되었는지 요약을 하자면",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 44,
			},
			{
				type: "h",
				runs: [
					{
						t: "1. 개원 전부터 신속하고 빠르게 실행된 마케팅",
						b: true,
						c: "#ff0000",
						fs: 20,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 45,
			},
			{
				type: "h",
				runs: [
					{
						t: "2. 개원 후 브랜딩을 통하여 인지도를 높이고 환자의 병원 선택지로 인식",
						b: true,
						c: "#ff0000",
						fs: 20,
						k: 0,
					},
				],
				align: "center",
				id: 46,
			},
			{
				type: "h",
				runs: [
					{
						t: "3. 확실한 강점/차별점 어필을 통한 환자 전환 이끌기",
						b: true,
						c: "#ff0000",
						fs: 20,
						k: 0,
					},
				],
				align: "center",
				id: 47,
			},
			{
				type: "p",
				runs: [
					{
						t: "개원병원을 마케팅하는 것은 일반 병원들보다 더 많은 노력과 시간이 투자됩니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 48,
			},
			{
				type: "p",
				runs: [
					{
						t: "그러나 저희는 개원병원마케팅을 ",
						fs: 18,
						k: 0,
					},
					{
						t: "'긁지 않은 복권'",
						fs: 18,
						bg: "#ffd966",
						k: 1,
					},
					{
						t: " 이라 생각합니다.",
						fs: 18,
						k: 2,
					},
				],
				align: "center",
				id: 49,
			},
			{
				type: "p",
				runs: [
					{
						t: "제대로 된 마케팅만 진행할 수 있다면 정말 효과적인 결과를 달성할 수 있기 때문이죠.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 50,
			},
			{
				type: "p",
				runs: [
					{
						t: "무엇이든 첫인상이 중요하듯 병원 또한 마찬가지입니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 51,
			},
			{
				type: "p",
				runs: [
					{
						t: "처음부터 긍정적인 병원으로 비추어 지면, 환자는 해당 병원을 긍정적인 시선으로 바라봅니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 52,
			},
			{
				type: "p",
				runs: [
					{
						t: "물론 마케팅뿐만이 아니라 병원 내 환자 서비스도 중요하다는 것은 꼭 알고 계셔야 할 사실입니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 53,
			},
			{
				type: "p",
				runs: [
					{
						t: "혹시 지금이라도 개원으로 마케팅 준비를 하지 못한 원장님이라면",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 54,
			},
			{
				type: "p",
				runs: [
					{
						t: "지금이라도 우리 병원의 개원병원마케팅을 시작하시라는 말과 함께 오늘 글을 끝내보도록 하겠습니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 55,
			},
			{
				type: "p",
				runs: [
					{
						t: "긴 글 끝까지 읽어 주셔서 감사합니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 56,
			},
		],
	},
	{
		slug: "167431125",
		title: "[피부과 광고] 광고 후 1달 놀라울 정도로 달라진 결과",
		excerpt:
			"- 언제나 병원의 성공을 위해 노력하는 마케터들이 있는 곳, 애드리절트입니다. - 안녕하세요 애드리절트입니다. 저희가 광고를 진행하며 가장 행복한 순간이 있는데요. 바로 '환자가 많이 와요!' 라는 말을 들었을 때입니다. 저희의 진심이 마침내 환자들에게 전해졌다는 것을 의미하기 때문입니",
		summary:
			"보통 3개월 걸리는 효과를 S피부과는 광고 시작 한 달 만에 봤습니다. 원장님의 증례 콘텐츠 협조와, 수요가 많은 지역을 먼저 노출한 뒤 낮은 지역을 서브로 잡는 전략이 빠른 결과를 만들었습니다.",
		faq: [
			{
				q: "효과는 보통 얼마나 걸리나요?",
				a: "병원 관련 키워드를 장악하는 방식이라 평균 3개월 정도 걸립니다. 다만 S피부과는 원장님의 적극적인 협조와 지역 전략으로 한 달 만에 효과가 나타났습니다.",
			},
			{
				q: "주변 지역에 환자 수요가 적으면 어떻게 하나요?",
				a: "수요가 많은 지역에 먼저 병원을 노출한 뒤, 서브 작업으로 수요가 낮은 주변 지역 키워드를 잡는 방식으로 진행합니다.",
			},
			{
				q: "한 고객사를 몇 명이 담당하나요?",
				a: "실무자 한 명이 고객사 하나를 전담하는 시스템이라, 맡은 병원에 대한 애정도와 관심이 높습니다.",
			},
		],
		cover: "/images/cases/167431125/1.png",
		coverW: 563,
		coverH: 225,
		blocks: [
			{
				type: "p",
				runs: [
					{
						t: "- 언제나 병원의 성공을 위해 노력하는 마케터들이 있는 곳, 애드리절트입니다. -",
						i: true,
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 0,
			},
			{
				type: "p",
				runs: [
					{
						t: "안녕하세요 애드리절트입니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 1,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희가 광고를 진행하며 가장 행복한 순간이 있는데요.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 2,
			},
			{
				type: "p",
				runs: [
					{
						t: "바로 '환자가 많이 와요!' 라는 말을 들었을 때입니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 3,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희의 진심이 마침내 환자들에게 전해졌다는 것을 의미하기 때문입니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 4,
			},
			{
				type: "img",
				src: "/images/cases/167431125/1.png",
				w: 563,
				h: 225,
				alt: "병원마케팅대행",
				id: 5,
			},
			{
				type: "p",
				runs: [
					{
						t: "오늘 소개해 드리고자 가져온 성공사례는",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 6,
			},
			{
				type: "p",
				runs: [
					{
						t: "얼마 전 저희의 진심이 닿아 성공까지 이어진 S피부과입니다.",
						k: 0,
					},
				],
				align: "center",
				id: 7,
			},
			{
				type: "p",
				runs: [
					{
						t: "지금까지 소개해드린 성공 사례들을 보면 이 병원 또한",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 8,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희와 긍정적인 소통과 리액션으로 시너지를 내 잘 맞았을 거라 생각하실 텐데요.",
						k: 0,
					},
				],
				align: "center",
				id: 9,
			},
			{
				type: "p",
				runs: [
					{
						t: "하지만 이곳은 살짝 이야기가 달랐습니다.",
						b: true,
						c: "#ff0000",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 10,
			},
			{
				type: "p",
				runs: [
					{
						t: "처음 미팅을 진행했을 때, 원장님의 경직된 표정 + 호의적이지 않은 반응으로",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 11,
			},
			{
				type: "p",
				runs: [
					{
						t: "이번 광고 잘 진행할 수 있을지 걱정이 앞섰는데요.",
						k: 0,
					},
				],
				align: "center",
				id: 12,
			},
			{
				type: "p",
				runs: [
					{
						t: "하지만 원장님의 한 마디가 저희를 불타게 만들었습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 13,
			},
			{
				type: "h",
				runs: [
					{
						t: '"우리 피부과 잘 부탁드려요"',
						b: true,
						fs: 20,
						bg: "#ffd966",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 14,
			},
			{
				type: "hr",
				id: 15,
			},
			{
				type: "p",
				runs: [
					{
						t: "사실 병원 마케팅이 성공하기 위해서는 단순한 노동이 아닌",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 16,
			},
			{
				type: "p",
				runs: [
					{
						t: "세심한 노력과 부담감이 함께해야 하는데요.",
						k: 0,
					},
				],
				align: "center",
				id: 17,
			},
			{
				type: "p",
				runs: [
					{
						t: "'기본'을 중시하여 환자들의 유입을 이끌 수 있는 콘텐츠",
						b: true,
						k: 0,
					},
					{
						t: "를 만들기 위한 작업을 시작했습니다.",
						k: 1,
					},
				],
				align: "center",
				id: 18,
			},
			{
				type: "h",
				runs: [
					{
						t: "1. 좋은 재료로 구성된 콘텐츠가 환자 전환을 만들어낸다.",
						b: true,
						c: "#ff0000",
						fs: 22,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 19,
			},
			{
				type: "p",
				runs: [
					{
						t: "콘텐츠 구성을 위한 초반 작업으로는",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 20,
			},
			{
				type: "p",
				runs: [
					{
						t: "우리 병원을 필요로 하는 환자들에게 보이고 눈길이 가도록 내용을 구성하는 것",
						b: true,
						fs: 18,
						k: 0,
					},
					{
						t: "입니다.",
						fs: 18,
						k: 1,
					},
				],
				align: "center",
				id: 21,
			},
			{
				type: "p",
				runs: [
					{
						t: "여기서 S피부과의 원장님께서는 병원의 상세한 내용이 담긴 가이드와 직접 작성하신 증례 글 등",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 22,
			},
			{
				type: "p",
				runs: [
					{
						t: "다양한 정보를 제공해 주시며 적극적인 참여를 해주셨습니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 23,
			},
			{
				type: "h",
				runs: [
					{
						t: "2. 노출은 환자들의 수요가 확실한 곳으로",
						b: true,
						c: "#ff0000",
						fs: 22,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 24,
			},
			{
				type: "p",
				runs: [
					{
						t: "일단 콘텐츠 제작까지 완료했다면 이제는 노출을 시킬 차례인데요.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 25,
			},
			{
				type: "p",
				runs: [
					{
						t: "일반적으로는 병원 주변 지역+키워드로 노출을 시켜야 병원 입장에서도 도움이 되는데요.",
						k: 0,
					},
				],
				align: "center",
				id: 26,
			},
			{
				type: "p",
				runs: [
					{
						t: "그러나 주변 지역에 환자의 수요가 없다면 어떡할까요?",
						k: 0,
					},
				],
				align: "center",
				id: 27,
			},
			{
				type: "p",
				runs: [
					{
						t: "아무리 노출된다 해도 필요성을 느끼는 환자가 없으니 환자의 유입까지 이어지기가 힘들 것입니다.",
						k: 0,
					},
				],
				align: "center",
				id: 28,
			},
			{
				type: "p",
				runs: [
					{
						t: "S피부과 또한 이러하였는데요.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 29,
			},
			{
				type: "p",
				runs: [
					{
						t: "처음에는 일반적인 다른 병원들과 마찬가지로 병원 주변 지역부터 장악을 하려 했지만",
						k: 0,
					},
				],
				align: "center",
				id: 30,
			},
			{
				type: "p",
				runs: [
					{
						t: "생각 외로 병원 주변 지역에서의 수요가 너무 낮아 진행함에 어려움이 있었습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 31,
			},
			{
				type: "p",
				runs: [
					{
						t: "그래서 저희는 ",
						k: 0,
					},
					{
						t: "우선적으로 수요가 많은 지역에 먼저 S피부과를 노출시킨 후,",
						b: true,
						k: 1,
					},
				],
				align: "center",
				gap: true,
				id: 32,
			},
			{
				type: "p",
				runs: [
					{
						t: "서브 작업으로 수요가 낮은 지역의 키워드를 작업",
						b: true,
						k: 0,
					},
					{
						t: "했습니다.",
						k: 1,
					},
				],
				align: "center",
				id: 33,
			},
			{
				type: "p",
				runs: [
					{
						t: "그 결과 메인 작업과 서브 작업을 통하여",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 34,
			},
			{
				type: "p",
				runs: [
					{
						t: "빠른 시간 안에 많은 글을 통하여 S피부과를 성공적으로 노출",
						c: "#ff0000",
						k: 0,
					},
					{
						t: "시킬 수 있었습니다.",
						k: 1,
					},
				],
				align: "center",
				id: 35,
			},
			{
				type: "h",
				runs: [
					{
						t: "3. 광고 시작 후 1개월 놀라운 결과",
						b: true,
						c: "#ff0000",
						fs: 22,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 36,
			},
			{
				type: "p",
				runs: [
					{
						t: "일반적으로 첫 미팅을 가지면 가장 많이 하시는 질문이 바로",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 37,
			},
			{
				type: "h",
				runs: [
					{
						t: '"광고 시작 후, 어느 정도 지나야 효과가 나타나나요?"',
						b: true,
						fs: 20,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 38,
			},
			{
				type: "p",
				runs: [
					{
						t: "입니다.",
						k: 0,
					},
				],
				align: "center",
				id: 39,
			},
			{
				type: "p",
				runs: [
					{
						t: "이런 질문에 대하여 저희는 평균적으로 3개월 정도는 시간이 걸린다 라고 설명을 하는 편입니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 40,
			},
			{
				type: "p",
				runs: [
					{
						t: "단기간으로 진행되기 보다는 병원에 관련된 키워드를 장악하는 방식으로 이루어지기 때문에",
						k: 0,
					},
				],
				align: "center",
				id: 41,
			},
			{
				type: "p",
				runs: [
					{
						t: "시간이 조금 필요한데요.",
						k: 0,
					},
				],
				align: "center",
				id: 42,
			},
			{
				type: "p",
				runs: [
					{
						t: "그라나",
						k: 0,
					},
					{
						t: " S병원은 한 달 만에 효과",
						c: "#ff0000",
						k: 1,
					},
					{
						t: "가 나타났습니다.",
						k: 2,
					},
				],
				align: "center",
				gap: true,
				id: 43,
			},
			{
				type: "img",
				src: "/images/cases/167431125/2.png",
				w: 936,
				h: 1017,
				alt: "병원광고마케팅",
				id: 44,
			},
			{
				type: "img",
				src: "/images/cases/167431125/3.png",
				w: 819,
				h: 690,
				alt: "7fea1ea9dd06c.png",
				id: 45,
			},
			{
				type: "p",
				runs: [
					{
						t: "(원장님과의 통화 내용)",
						k: 0,
					},
				],
				align: "center",
				id: 46,
			},
			{
				type: "p",
				runs: [
					{
						t: "첫 미팅 때와는 달리 웃으시며 이야기를 전달해 주실 때,",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 47,
			},
			{
				type: "p",
				runs: [
					{
						t: "'정말 잘했구나' 한 번 더 느꼈습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 48,
			},
			{
				type: "p",
				runs: [
					{
						t: "애드리절트는 실무자 한 명이 고객사 하나를 맡아 마케팅을 진행하는 시스템",
						b: true,
						c: "#ff0000",
						k: 0,
					},
					{
						t: "을 가지고 있습니다.",
						k: 1,
					},
				],
				align: "center",
				gap: true,
				id: 49,
			},
			{
				type: "p",
				runs: [
					{
						t: "그렇기에 ",
						k: 0,
					},
					{
						t: "더더욱 자신이 맡은 고객사에 대한 애정도와 관심이 높은 편",
						u: true,
						k: 1,
					},
					{
						t: " 입니다.",
						k: 2,
					},
				],
				align: "center",
				id: 50,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희는 항상 고객사를 성공시키기 위한 마음 하나로 최선을 다하며 광고를 진행하고 있습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 51,
			},
			{
				type: "p",
				runs: [
					{
						t: "이 순간 지금도 애드리절트는 원장님들을 맞이하고자 준비가 되어 있는 상태입니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 52,
			},
			{
				type: "p",
				runs: [
					{
						t: "더는 망설이지 말고 궁금한 부분이 있다면 언제든 문의 주세요~!",
						k: 0,
					},
				],
				align: "center",
				id: 53,
			},
			{
				type: "p",
				runs: [
					{
						t: "애드리절트人들은 항상 최선을 다하고 있습니다!",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 54,
			},
		],
	},
	{
		slug: "167408277",
		title: "[개인병원 월 매출 1억] 무슨 의미일까?",
		excerpt:
			"애드리절트가 사옥으로 이사 온 첫 날부터 너무 좋은 소식이 들려왔는데요. 예전부터 병원 월 매출 1억이 목표라고 말씀하시던 원장님이 드디어 그 목표를 이루었다는 소식이 들려왔어요. 원장님께서 갑자기 배달을 시켜 먹는지 여쭤보시길래 '그냥 궁금하신가 보다' 생각했는데 월 매출 1억이 넘었",
		summary:
			"10년 전엔 광고비를 쏟아부어 순이익이 거의 없던 월 매출 1억을, 이번에는 마케팅 비용을 줄이고 원장님 브랜딩으로 달성해 순이익에서 큰 차이를 만든 개인병원 사례입니다.",
		faq: [
			{
				q: "같은 월 매출 1억인데 무엇이 다른가요?",
				a: "10년 전엔 광고비를 대거 투입해 순이익이 거의 없는 1억이었지만, 이번에는 마케팅 비용을 줄이고 원장님을 브랜딩해 달성한 1억이라 순이익에서 큰 차이가 납니다.",
			},
			{
				q: "매출이 줄면 어떻게 대응하나요?",
				a: "'우리 광고엔 문제없다'며 외부 탓으로 일관하지 않습니다. 매출·환자가 줄면 다양한 시도를 하며 더 나은 방법을 계속 찾습니다.",
			},
			{
				q: "얼마나 걸려 목표를 달성했나요?",
				a: "코로나 타격 등 외부 요인으로 쉽지 않았지만, 원장님의 신뢰와 적극적인 자료 협조 속에 꾸준한 시도로 목표였던 월 매출 1억을 달성했습니다.",
			},
		],
		cover: "/images/cases/167408277/1.png",
		coverW: 361,
		coverH: 326,
		blocks: [
			{
				type: "p",
				runs: [
					{
						t: "애드리절트가 사옥으로 이사 온 첫 날부터 너무 좋은 소식이 들려왔는데요.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 0,
			},
			{
				type: "p",
				runs: [
					{
						t: "예전부터 병원 월 매출 1억이 목표라고 말씀하시던 원장님이",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 1,
			},
			{
				type: "p",
				runs: [
					{
						t: "드디어 그 목표를 이루었다는 소식이 들려왔어요.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 2,
			},
			{
				type: "img",
				src: "/images/cases/167408277/1.png",
				w: 361,
				h: 326,
				alt: "병원홍보마케팅",
				id: 3,
			},
			{
				type: "p",
				runs: [
					{
						t: "원장님께서 갑자기 배달을 시켜 먹는지 여쭤보시길래 '그냥 궁금하신가 보다' 생각했는데",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 4,
			},
			{
				type: "p",
				runs: [
					{
						t: "월 매출",
						fs: 18,
						k: 0,
					},
					{
						t: " 1억이 넘었다",
						b: true,
						c: "#ff0000",
						fs: 18,
						k: 1,
					},
					{
						t: "는 답이 오셔서 모든 업무를 순간 멈추고 원장님 카톡에 집중했어요.",
						fs: 18,
						k: 2,
					},
				],
				align: "center",
				id: 5,
			},
			{
				type: "img",
				src: "/images/cases/167408277/2.png",
				w: 370,
				h: 320,
				alt: "cb1e0793cc82c.png",
				id: 6,
			},
			{
				type: "p",
				runs: [
					{
						t: '원장님의 목표였던 월 매출 1억을 눈앞에 두고 "원장님, 조금만 더 하면 돼요!! 으쌰으쌰" 하고 있었는데',
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 7,
			},
			{
				type: "p",
				runs: [
					{
						t: "갑자기 코*나가 터지며 매출에 타격을 많이 입었거든요...",
						k: 0,
					},
				],
				align: "center",
				id: 8,
			},
			{
				type: "p",
				runs: [
					{
						t: "규제들이 완화되며 조금씩 상황이 좋아지기는 했지만, 목표 매출액 달성하기까지가 정말로 쉽지 않더라구요.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 9,
			},
			{
				type: "p",
				runs: [
					{
						t: "매출이 떨어진 요인이 외부 요인이긴 했지만, 그렇다고 해서 손 놓고 바라만 볼 수 없기에 정말 이것저것 다양한 시도를 했어요.",
						k: 0,
					},
				],
				align: "center",
				id: 10,
			},
			{
				type: "p",
				runs: [
					{
						t: "담당 팀원들 머릿속에는 늘 '어떻게 하면 매출을 올릴 수 있을까' 하는 생각이 가득했죠.",
						k: 0,
					},
				],
				align: "center",
				id: 11,
			},
			{
				type: "img",
				src: "/images/cases/167408277/3.png",
				w: 353,
				h: 439,
				alt: "병의원블로그",
				id: 12,
			},
			{
				type: "p",
				runs: [
					{
						t: "다행히 원장님께서도 애드리절트에게 많은 신뢰를 하고 계셔서 자료를 요청드렸을 때 정말 적극적으로 전달해 주셨어요.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 13,
			},
			{
				type: "p",
				runs: [
					{
						t: "사실 저희보다는 원장님이 더 힘드셨을 텐데 항상 응원해 주시고 좋은 말씀을 많이 해주셔서 저희도 정말 열심히 할 수 있었던 것 같아요.",
						k: 0,
					},
				],
				align: "center",
				id: 14,
			},
			{
				type: "img",
				src: "/images/cases/167408277/4.png",
				w: 275,
				h: 589,
				alt: "병원온라인광고",
				id: 15,
			},
			{
				type: "p",
				runs: [
					{
						t: "팀원들이랑 맛있는 거 사 먹으라고 배민 상품권을 선물해 주셔서 오늘 하루종일 다들 이 이야기로 즐거워했어요^^",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 16,
			},
			{
				type: "p",
				runs: [
					{
						t: "이사 온 첫날부터 좋은 소식을 들었더니 다들 여기가 명당인가 하는 농담도 하면서 말이에요 ㅎㅎ",
						k: 0,
					},
				],
				align: "center",
				id: 17,
			},
			{
				type: "img",
				src: "/images/cases/167408277/5.png",
				w: 360,
				h: 663,
				alt: "병원마케팅사례",
				id: 18,
			},
			{
				type: "p",
				runs: [
					{
						t: "팀원들이 있는 단톡방에 한번 더 이야기를 해주시면서 다음에 식사와 술 회식까지 해주시기로 하셨답니다 ❤",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 19,
			},
			{
				type: "p",
				runs: [
					{
						t: "정말 많은 마케팅 회사들이 단기간에 매출을 내는 성과로 어필을 합니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 20,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희 또한 이렇게 성과가 나오면 후기를 남기며 애드리절트를 어필하고 있죠.",
						k: 0,
					},
				],
				align: "center",
				id: 21,
			},
			{
				type: "p",
				runs: [
					{
						t: "이 병원은 특히나 의미가 있는 게 10년 전에 1억 매출을 찍었을 때는",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 22,
			},
			{
				type: "p",
				runs: [
					{
						t: "마케팅에 비용을 쏟아부으며 만들어낸 결과라 사실상 순이익이 거의 없는 수준의 매출이었습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 23,
			},
			{
				type: "p",
				runs: [
					{
						t: "하지만 이번에 달성한 월 매출 1억은 ",
						k: 0,
					},
					{
						t: "마케팅 비용을 최대한 줄이고",
						c: "#ff0000",
						k: 1,
					},
				],
				align: "center",
				gap: true,
				id: 24,
			},
			{
				type: "p",
				runs: [
					{
						t: "원장님을 브랜딩 함으로써 이룬 매출이라 같은 1억임에도 순이익에서 정말 많은 차이가 발생",
						c: "#ff0000",
						k: 0,
					},
					{
						t: "했어요.",
						k: 1,
					},
				],
				align: "center",
				id: 25,
			},
			{
				type: "h",
				runs: [
					{
						t: "감개무량",
						b: true,
						fs: 20,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 26,
			},
			{
				type: "p",
				runs: [
					{
						t: "정말 이 단어만큼 지금 상황에 알맞은 단어가 없는 것 같습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 27,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희 고객사 중에서는 2~3개월 만에 원하는 목표 이상을 이루는 곳들도 많습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 28,
			},
			{
				type: "p",
				runs: [
					{
						t: "하지만 모두가 단기간에 매출을 올리는 건 아니죠. 저희도 광고를 하다 보면 매출이나 환자가 줄어드는 경우도 더러 있습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 29,
			},
			{
				type: "p",
				runs: [
					{
						t: "그럼에도 원장님들이 광고를 계속 유지하는 이유는 저희는 매출이 줄고 환자가 줄었다고 해서",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 30,
			},
			{
				type: "p",
				runs: [
					{
						t: "외부 탓을 하거나, 우리는 문제없습니다. 라고 ",
						c: "#ff0000",
						k: 0,
					},
					{
						t: "모르쇠로 일관하지 않기 때문",
						b: true,
						c: "#ff0000",
						k: 1,
					},
					{
						t: "입니다.",
						c: "#ff0000",
						k: 2,
					},
				],
				align: "center",
				id: 31,
			},
			{
				type: "p",
				runs: [
					{
						t: "원장님들이 기존 대행사에 대한 답답함을 느끼는 큰 이유 중 하나가",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 32,
			},
			{
				type: "p",
				runs: [
					{
						t: '매출이 줄어 대행사에 이야기를 하면 "저희 광고에는 문제 없습니다." 라고 대부분 말을 하기 때문이에요.',
						k: 0,
					},
				],
				align: "center",
				id: 33,
			},
			{
				type: "p",
				runs: [
					{
						t: "물론 마케팅 하나만으로 병원의 매출이 좌지우지 되는 건 당연히 아닙니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 34,
			},
			{
				type: "p",
				runs: [
					{
						t: "하지만 마케팅 또한 병원 매출에 영향을 주는 요인 중 하나 이죠.",
						k: 0,
					},
				],
				align: "center",
				id: 35,
			},
			{
				type: "p",
				runs: [
					{
						t: "그것을 잘 알기에 애드리절트는 정말 다양한 시도를 해보려 노력합니다.",
						k: 0,
					},
				],
				align: "center",
				id: 36,
			},
			{
				type: "p",
				runs: [
					{
						t: "물론 모든 시도가 항상 잘 되는것도 아니고 생각보다 성과가 안 나올 때도 분명 있습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 37,
			},
			{
				type: "p",
				runs: [
					{
						t: "그래도 저희 애드리절트는 원장님들의 신뢰에 보답하고자 계속 더 나은 방법을 찾아보며 병원을 성공시키려고 노력합니다.",
						k: 0,
					},
				],
				align: "center",
				id: 38,
			},
			{
				type: "p",
				runs: [
					{
						t: "원장님들이 목표를 달성하시는 것은, 원장님께도 저희에게도 정말 뜻깊습니다.",
						b: true,
						c: "#ff0000",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 39,
			},
			{
				type: "p",
				runs: [
					{
						t: "우리가 가는 길이 틀리지 않았다 라는 확신을 한 번 더 하며 자신감을 얻고",
						k: 0,
					},
				],
				align: "center",
				id: 40,
			},
			{
				type: "p",
				runs: [
					{
						t: "행복과 보람을 느끼기 때문입니다.",
						k: 0,
					},
				],
				align: "center",
				id: 41,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희 애드리절트는 더 많은 원장님들이 저희와 함께 더 큰 꿈을 이루실 수 있도록 항상 최선을 다하겠습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 42,
			},
			{
				type: "p",
				runs: [
					{
						t: "긴 글 읽어 주셔서 감사합니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 43,
			},
			{
				type: "img",
				src: "/images/cases/167408277/6.png",
				w: 370,
				h: 320,
				alt: "95cf807279776.png",
				id: 44,
			},
		],
	},
	{
		slug: "167382901",
		title: "[내과광고] 과연 효과가 있을까? 고민 중이라면",
		excerpt:
			"병원마케팅을 진행하다 보면, 과연 광고 대비 매출이 잘 나올까? 걱정이 드는 곳들이 몇몇 있습니다. 수기가 낮은 병원 그러니까 내과, 동네 소규모 한의원 등입니다. 하지만 그래도 이제는 병원이 생기면 마케팅은 기본이니 아예 안 할 수는 없습니다. 오늘은 안 될 줄 알았는데 잘 된 몇 곳",
		summary:
			"수기가 낮아 광고를 망설이는 내과도 세부 키워드를 미리 깔아두면 효과를 봅니다. M의원은 월 플레이스 방문자가 0에서 700을 넘었고, D의원은 개원 한 달 만에 플레이스 유입 1,600회, V의원은 개원 3주 만에 홍보 효과를 체감했습니다.",
		faq: [
			{
				q: "내과도 광고 효과가 있나요?",
				a: "수기가 낮은 내과도 세부 키워드를 미리 깔아두면 검진 시즌 등 필요할 때 노출돼 효과를 봅니다. M의원은 플레이스 방문자 0→700, D의원은 개원 한 달 만에 유입 1,600회를 기록했습니다.",
			},
			{
				q: "효과는 언제부터 체감되나요?",
				a: "M의원은 3개월 차부터 실질적인 환자 유입을 체감했습니다. 세부 키워드가 쌓이는 데 시간이 걸리지만, 시간이 지날수록 무엇을 검색해도 병원이 노출됩니다.",
			},
			{
				q: "경쟁이 적은 지역은 어떤가요?",
				a: "V의원은 내과 광고가 많지 않은 지역이라 무엇을 검색하든 병원이 노출되는 독점에 가까운 마케팅이 가능했고, 개원 3주 만에 홍보 효과를 체감했습니다.",
			},
		],
		cover: "/images/cases/167382901/1.png",
		coverW: 486,
		coverH: 809,
		blocks: [
			{
				type: "p",
				runs: [
					{
						t: "병원마케팅을 진행하다 보면, 과연 광고 대비 매출이 잘 나올까? 걱정이 드는 곳들이 몇몇 있습니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 0,
			},
			{
				type: "p",
				runs: [
					{
						t: "수기가 낮은 병원 그러니까 내과, 동네 소규모 한의원 등입니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 1,
			},
			{
				type: "p",
				runs: [
					{
						t: "하지만 그래도 이제는 병원이 생기면 마케팅은 기본이니 아예 안 할 수는 없습니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 2,
			},
			{
				type: "p",
				runs: [
					{
						t: "오늘은 안 될 줄 알았는데 잘 된 몇 곳의 사례를 소개해 드리려고 합니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 3,
			},
			{
				type: "hr",
				id: 4,
			},
			{
				type: "h",
				runs: [
					{
						t: "-M의원-",
						b: true,
						fs: 30,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 5,
			},
			{
				type: "p",
				runs: [
					{
						t: "전형적인 동네 작은 내과인 병원이었습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 6,
			},
			{
				type: "p",
				runs: [
					{
						t: "건강검진을 하는 것도 아니고, 그냥 어디든 있는 동네 내과였습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 7,
			},
			{
				type: "p",
				runs: [
					{
						t: "수기가 워낙 낮은 곳 중 하나로 광고비용 대비 원장님이 만족스러우실",
						k: 0,
					},
				],
				align: "center",
				id: 8,
			},
			{
				type: "p",
				runs: [
					{
						t: "아웃풋이 안 나올 수 있다고 사전에 미리 안내를 해 드렸습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 9,
			},
			{
				type: "p",
				runs: [
					{
						t: "하지만 원장님께서는 마케팅은 기본이라는 것을 너무나도 잘 이해하고 계셔서,",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 10,
			},
			{
				type: "p",
				runs: [
					{
						t: "개원 전부터 체계적으로 착실하게 준비하며 최대한 효율을 뽑아낼 수 있도록 관리",
						c: "#ff0000",
						k: 0,
					},
					{
						t: "를 하였습니다.",
						k: 1,
					},
				],
				align: "center",
				id: 11,
			},
			{
				type: "p",
				runs: [
					{
						t: "그 결과",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 12,
			},
			{
				type: "img",
				src: "/images/cases/167382901/1.png",
				w: 486,
				h: 809,
				alt: "병원바이럴",
				id: 13,
			},
			{
				type: "p",
				runs: [
					{
						t: "0이었던 월 플레이스 방문자가 순식간에 700을 돌파하게 되었습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 14,
			},
			{
				type: "p",
				runs: [
					{
						t: "첫 달에 불안해하던 원장님의 모습을 아직도 잊지 못합니다.",
						k: 0,
					},
				],
				align: "center",
				id: 15,
			},
			{
				type: "p",
				runs: [
					{
						t: "그래도 믿고 함께 해 주신 결과, ",
						k: 0,
					},
					{
						t: "실질적인 환자 유입이라는 결과를",
						b: true,
						c: "#ff0000",
						k: 1,
					},
				],
				align: "center",
				gap: true,
				id: 16,
			},
			{
				type: "p",
				runs: [
					{
						t: "3개월 차부터 본격적으로 체감하시기 시작",
						b: true,
						c: "#ff0000",
						k: 0,
					},
					{
						t: "했습니다.",
						k: 1,
					},
				],
				align: "center",
				id: 17,
			},
			{
				type: "img",
				src: "/images/cases/167382901/2.png",
				w: 788,
				h: 575,
				alt: "메디컬마케팅",
				id: 18,
			},
			{
				type: "p",
				runs: [
					{
						t: "해당 병원의 병원명 조회수가 오르락 내리락 하고 있지만, 월 평균 약 300여 명의 환자가 해당 병원을 검색합니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 19,
			},
			{
				type: "p",
				runs: [
					{
						t: "정말 작은 동네 병원이었기에 원장님께서는 이 정도 수치면 정말 많은 거라고 피드백을 주셨습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 20,
			},
			{
				type: "img",
				src: "/images/cases/167382901/3.png",
				w: 670,
				h: 718,
				alt: "병원개원홍보",
				id: 21,
			},
			{
				type: "p",
				runs: [
					{
						t: "실질적으로도 검색을 통한 환자 또한 점차 증가하고 있습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 22,
			},
			{
				type: "p",
				runs: [
					{
						t: "특히 젊은 분들이 여러 키워드를 통해 내원해 주신다는 피드백을 받았습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 23,
			},
			{
				type: "p",
				runs: [
					{
						t: "M의원도 이제 애드리절트와 함께한지 이달로 9개월째",
						b: true,
						c: "#ff0000",
						k: 0,
					},
					{
						t: "네요.",
						k: 1,
					},
				],
				align: "center",
				id: 24,
			},
			{
				type: "hr",
				id: 25,
			},
			{
				type: "h",
				runs: [
					{
						t: "-D의원-",
						b: true,
						fs: 30,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 26,
			},
			{
				type: "p",
				runs: [
					{
						t: "해당 의원은 ",
						fs: 18,
						k: 0,
					},
					{
						t: "'광고를 하면 애드리절트에 맡겨야지.' 라고 이미 결정",
						c: "#ff0000",
						fs: 18,
						k: 1,
					},
					{
						t: "을 하고 문의를 해 주신 곳입니다.",
						fs: 18,
						k: 2,
					},
				],
				align: "center",
				gap: true,
				id: 27,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희 블로그를 포함해서 여러 채널들을 매우 자세히 보셨고,",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 28,
			},
			{
				type: "p",
				runs: [
					{
						t: "내과 광고를 진행하는 다른 광고회사들과도 꼼꼼하게 비교해 보셨다고 하셨어요.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 29,
			},
			{
				type: "p",
				runs: [
					{
						t: "첫 번째 미팅에서는 블로그를 이용한 광고에 대하여 자세히 설명을 해드렸습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 30,
			},
			{
				type: "p",
				runs: [
					{
						t: "개원 전부터 함께 준비하며 진행했던 곳이라, 아직 인지도가 없어 초반에 어려움이 많을 것이라 설명해 드리기도 했습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 31,
			},
			{
				type: "img",
				src: "/images/cases/167382901/4.png",
				w: 812,
				h: 448,
				alt: "병원대행사",
				id: 32,
			},
			{
				type: "p",
				runs: [
					{
						t: "그러나 보란 듯이 개원 한 달 만에 플레이스 유입이 1,600회를 돌파했습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 33,
			},
			{
				type: "p",
				runs: [
					{
						t: "해당 지역은 유동 인구가 별로 없는 지역이라 인근 지역까지 세부 키워드를 세팅해 두었던,",
						k: 0,
					},
				],
				align: "center",
				id: 34,
			},
			{
				type: "p",
				runs: [
					{
						t: "넓은 지역에서 D의원에 찾아와 내원하셨습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 35,
			},
			{
				type: "img",
				src: "/images/cases/167382901/5.png",
				w: 355,
				h: 710,
				alt: "의원마케팅",
				id: 36,
			},
			{
				type: "p",
				runs: [
					{
						t: "최근에는 연말을 맞이하여 우편 DM을 발송하였는데, 검색 유입이 많아졌다는 피드백과 함께",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 37,
			},
			{
				type: "p",
				runs: [
					{
						t: "충분히 잘하고 있다는 기프티콘을 보내 주셨습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 38,
			},
			{
				type: "hr",
				id: 39,
			},
			{
				type: "h",
				runs: [
					{
						t: "-V의원-",
						b: true,
						fs: 30,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 40,
			},
			{
				type: "p",
				runs: [
					{
						t: "V의원은 검진을 함께 하는 내과인데요, 개원 후 3주 정도가 지났을 때",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 41,
			},
			{
				type: "p",
				runs: [
					{
						t: "원장님께서 먼저 홍보가 확실히 되는 것 같다는 피드백을 남겨 주셨습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 42,
			},
			{
				type: "p",
				runs: [
					{
						t: "세부 키워드를 까는 데 시간이 걸리며 또 특히 내과이다 보니",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 43,
			},
			{
				type: "p",
				runs: [
					{
						t: "체감하시기까지 시간이 제법 소요될 거라는 안내를 드렸었는데요.",
						k: 0,
					},
				],
				align: "center",
				id: 44,
			},
			{
				type: "p",
				runs: [
					{
						t: "다행히도 해당 지역이 내과 광고가 많은 곳이 아니라 무엇을 검색하든",
						k: 0,
					},
				],
				align: "center",
				id: 45,
			},
			{
				type: "p",
				runs: [
					{
						t: "V의원이 나오는 독점에 가까운 마케팅을 할 수 있었습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 46,
			},
			{
				type: "img",
				src: "/images/cases/167382901/6.png",
				w: 320,
				h: 766,
				alt: "병원마케팅교육",
				id: 47,
			},
			{
				type: "p",
				runs: [
					{
						t: "환자가 병원을 찾는 시기와 이유는 환자마다 정말 천차만별입니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 48,
			},
			{
				type: "p",
				runs: [
					{
						t: "언제 어디서 무엇을 왜 검색할지는 모르죠.",
						k: 0,
					},
				],
				align: "center",
				id: 49,
			},
			{
				type: "p",
				runs: [
					{
						t: "특히 내과의 경우에는 수기가 맞지 않아 처음부터 광고를 포기하시는 분들도 정말 많습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 50,
			},
			{
				type: "p",
				runs: [
					{
						t: "하지만 검진 시즌 등 내과를 찾는 특정 시즌도 있기 때문에",
						k: 0,
					},
				],
				align: "center",
				id: 51,
			},
			{
				type: "p",
				runs: [
					{
						t: "우리 병원과 관련된 세부 키워드는 깔아두는 게 좋습니다.",
						c: "#ff0000",
						k: 0,
					},
				],
				align: "center",
				id: 52,
			},
			{
				type: "p",
				runs: [
					{
						t: "이것이 ",
						k: 0,
					},
					{
						t: "애드리절트가 하는 광고가 갈수록 기본이 되는 이유",
						b: true,
						c: "#ff0000",
						k: 1,
					},
					{
						t: " 입니다.",
						k: 2,
					},
				],
				align: "center",
				gap: true,
				id: 53,
			},
			{
				type: "p",
				runs: [
					{
						t: "잠재고객이 필요할 때 검색하면 바로 보일 수 있게 하는 것. 그 기본에 가장 충실하기 때문이에요.",
						k: 0,
					},
				],
				align: "center",
				id: 54,
			},
			{
				type: "p",
				runs: [
					{
						t: "석 달, 반년, 1년... 시간이 지날수록 우리 병원에 대한 콘텐츠와 관련 키워드가 누적되며",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 55,
			},
			{
				type: "p",
				runs: [
					{
						t: "결국에는 무엇을 검색해도 우리 병원이 나오게 되는 거죠.",
						k: 0,
					},
				],
				align: "center",
				id: 56,
			},
			{
				type: "p",
				runs: [
					{
						t: "애드리절트의 해당 노하우는 다름 아닌 고객사들의 연장률이 증명을 해주고 있습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 57,
			},
			{
				type: "video",
				videoId: "HBd2dJ-esNw",
				id: 58,
			},
			{
				type: "p",
				runs: [
					{
						t: "병원마케팅이 필요하신 분들은 애드리절트를 찾아주세요.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 59,
			},
			{
				type: "img",
				src: "/images/cases/167382901/7.png",
				w: 370,
				h: 320,
				alt: "bc203b7bc1430.png",
				id: 60,
			},
		],
	},
	{
		slug: "167382065",
		title: "[성형외과마케팅] 마케팅 시작 2개월 후 문의 늘었다고 병원 소개 받았어요",
		excerpt:
			"안녕하세요, 결과로 말하는 광고회사 애드리절트 입니다. 성형외과를 광고한다는 게 정말 쉽지 않다는 거, 많은 원장님들께서 공감하실 겁니다. 우선 성형외과 자체가 정말 많은 데다 특정 지역에 몰려 있기까지 하죠. 또한 광고 경쟁도 치열하고 의료법에서 제한 사항도 정말 많습니다. 이렇게 까",
		summary:
			"20년 된 성형외과가 애드리절트와 포지셔닝으로 타겟을 좁히고 맞춤 콘텐츠·세부 키워드를 진행한 결과, 광고 2개월 만에 문의가 늘어 담당 이사님이 다른 병원 2곳을 직접 소개했습니다.",
		faq: [
			{
				q: "성형외과는 얼마 만에 효과가 났나요?",
				a: "광고를 진행한 지 2개월 만에 문의가 늘었고, 효과를 본 원장님이 망설임 없이 병원 2곳을 소개해 주셨습니다.",
			},
			{
				q: "효과를 본 이유는 무엇인가요?",
				a: "① 포지셔닝으로 타겟을 좁히고 ② 타겟에 맞는 콘텐츠·키워드로 맞춤 광고를 하고 ③ 메디컬 패키지로 세부 키워드를 장악한 세 가지입니다.",
			},
			{
				q: "비용은 어느 정도인가요?",
				a: "오랜 경력의 마케팅 팀장 1명 인건비 정도로 생각하시면 됩니다. 마케터를 직접 뽑아 교육하는 것보다 비용·시간·성과 면에서 효율적입니다.",
			},
		],
		cover: "/images/cases/167382065/1.png",
		coverW: 364,
		coverH: 623,
		blocks: [
			{
				type: "p",
				runs: [
					{
						t: "안녕하세요, 결과로 말하는 광고회사 애드리절트 입니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 0,
			},
			{
				type: "p",
				runs: [
					{
						t: "성형외과를 광고한다는 게 정말 쉽지 않다는 거, 많은 원장님들께서 공감하실 겁니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 1,
			},
			{
				type: "p",
				runs: [
					{
						t: "우선 성형외과 자체가 정말 많은 데다 특정 지역에 몰려 있기까지 하죠.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 2,
			},
			{
				type: "p",
				runs: [
					{
						t: "또한 광고 경쟁도 치열하고 의료법에서 제한 사항도 정말 많습니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 3,
			},
			{
				type: "p",
				runs: [
					{
						t: "이렇게 까다롭고 어려운 만큼 성형외과는 다른 병원들에 비하여 광고비도 만만치 않은 분과 중 하나입니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 4,
			},
			{
				type: "p",
				runs: [
					{
						t: "최근 저희 애드리절트의 고객사인 모 성형외과 이사님께서 이런 피드백을 남겨 주셨습니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 5,
			},
			{
				type: "p",
				runs: [
					{
						t: "진짜 애드리절트가 가성비는 짱인 거 같아요. 이 비용에.. 너무 만족스럽네요.",
						i: true,
						c: "#3d85c6",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 6,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희에게 비용을 여쭤보시는 분들께는 늘,",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 7,
			},
			{
				type: "p",
				runs: [
					{
						t: "오랜 경력의 마케팅 팀장 1명 인건비 정도로 생각하시면 된다고 안내를 드리는 중인데요.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 8,
			},
			{
				type: "p",
				runs: [
					{
						t: "마케터 한 명을 뽑아 교육시키며 병원 광고를 맡기는 것보다는",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 9,
			},
			{
				type: "p",
				runs: [
					{
						t: "애드리절트에 맡기는 게 비용적인 부분에서나 시간, 성과 적인 부분에서도 훨씬 효율이 좋기 때문입니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 10,
			},
			{
				type: "img",
				src: "/images/cases/167382065/1.png",
				w: 364,
				h: 623,
				alt: "병원광고업체",
				id: 11,
			},
			{
				type: "p",
				runs: [
					{
						t: "이번에 소개 드릴 모 성형외과는 내부적으로 마케팅 팀을 구축해",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 12,
			},
			{
				type: "p",
				runs: [
					{
						t: "운영할 정도로 병원광고에 관심이 많은 곳이었습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 13,
			},
			{
				type: "p",
				runs: [
					{
						t: "한때는 해외 환자들이 많이 내원해 정신없이 바빴던 곳이지만,",
						k: 0,
					},
				],
				align: "center",
				id: 14,
			},
			{
				type: "p",
				runs: [
					{
						t: "코로나 때문에 해외 환자가 점차 줄어가며 매출이 떨어지고, 내부 마케팅 팀도 없어진 상황이었습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 15,
			},
			{
				type: "p",
				runs: [
					{
						t: "그리고 약 3~4년 정도 마케팅 없이 지인 소개로만 병원을 운영하고 계셨습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 16,
			},
			{
				type: "p",
				runs: [
					{
						t: "이제 실외 마스크 해제 등 점차 규제가 풀려가며 다시 마케팅을 진행하고자 하셨고,",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 17,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희 대표님이 직접 쓰신 책 ",
						k: 0,
					},
					{
						t: "<마케팅 때문에 고민입니다>",
						c: "#3d85c6",
						k: 1,
					},
				],
				align: "center",
				id: 18,
			},
			{
				type: "p",
				runs: [
					{
						t: "를 읽고 애드리절트에 문의를 남겨주셨습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 19,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희와 처음 만나 상담을 받으실 때 말씀해 주신 가장 큰 고민은",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 20,
			},
			{
				type: "p",
				runs: [
					{
						t: '"벌써 개원한 지 20년이 된 곳인데 포지셔닝을 어떻게 해야 할지 모르겠다"',
						b: true,
						c: "#ff0000",
						k: 0,
					},
					{
						t: " 였습니다.",
						k: 1,
					},
				],
				align: "center",
				id: 21,
			},
			{
				type: "p",
				runs: [
					{
						t: "원장님께서 진행하시는 시술의 종류가 많기도 하고 자신 있어 하시는 시술 또한 많으시다 보니 결정이 쉽게 되지 않았는데요.",
						k: 0,
					},
				],
				align: "center",
				id: 22,
			},
			{
				type: "p",
				runs: [
					{
						t: "그래서 저희는 충분한 시간 동안 미팅을 하며 타겟을 정한 다음 그에 맞는 키워드와 콘텐츠를 만들자고 제안을 드렸습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 23,
			},
			{
				type: "p",
				runs: [
					{
						t: "워낙 많은 병원광고 회사들과 미팅을 해보셨고 내부적으로 마케팅 팀 또한 가지고 계셨던 병원인지라",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 24,
			},
			{
				type: "p",
				runs: [
					{
						t: "애드리절트와 함께하기까지 2달 정도의 시간 동안 고민을 하셨는데요.",
						k: 0,
					},
				],
				align: "center",
				id: 25,
			},
			{
				type: "p",
				runs: [
					{
						t: "신중하게 결정 해주신 만큼, 저희 또한 최선을 다하여 준비를 하며 진행을 했습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 26,
			},
			{
				type: "p",
				runs: [
					{
						t: "그 결과, 담당 이사님으로부터 ",
						k: 0,
					},
					{
						t: "문의가 늘었다는 피드백",
						b: true,
						c: "#ff0000",
						k: 1,
					},
					{
						t: "을 받을 수 있었습니다.",
						k: 2,
					},
				],
				align: "center",
				gap: true,
				id: 27,
			},
			{
				type: "img",
				src: "/images/cases/167382065/2.png",
				w: 361,
				h: 361,
				alt: "병원광고회사",
				id: 28,
			},
			{
				type: "p",
				runs: [
					{
						t: "문의가 늘고 가성비가 좋다는 피드백을 넘어 이번에는 원장님께서 다른 병원을 소개해 주셨습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 29,
			},
			{
				type: "p",
				runs: [
					{
						t: "애드리절트와 광고를 진행한 지 2개월 만에 효과를 보고 망설임 없이 병원 2곳을 연결해 주셨어요.",
						k: 0,
					},
				],
				align: "center",
				id: 30,
			},
			{
				type: "p",
				runs: [
					{
						t: "환자가 병원의 서비스와 치료에 만족하면 자연스럽게 입소문이 납니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 31,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희 애드리절트 또한 마찬가지로 저희의 서비스와 결과에 만족하신 원장님들께서",
						k: 0,
					},
				],
				align: "center",
				id: 32,
			},
			{
				type: "p",
				runs: [
					{
						t: "지인 원장님들께 소개를 해주시고는 합니다.",
						k: 0,
					},
				],
				align: "center",
				id: 33,
			},
			{
				type: "p",
				runs: [
					{
						t: "문의가 와서 상담을 하고 인연이 닿는 것 또한 물론 좋지만,",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 34,
			},
			{
				type: "p",
				runs: [
					{
						t: "소개를 받는다는 것은 정말 뿌듯한 일입니다. 그만큼 저희를 인정해 주셨다는 뜻이니까요.",
						c: "#ff0000",
						k: 0,
					},
				],
				align: "center",
				id: 35,
			},
			{
				type: "h",
				runs: [
					{
						t: "위 병원이 ",
						k: 0,
					},
					{
						t: "효과를 본 이유",
						b: true,
						fs: 20,
						bg: "#ffd966",
						k: 1,
					},
					{
						t: "를 다시 정리를 해보자면",
						k: 2,
					},
				],
				align: "center",
				gap: true,
				id: 36,
			},
			{
				type: "p",
				runs: [
					{
						t: "1. 포지셔닝을 활용하여 타겟을 좁힘",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 37,
			},
			{
				type: "p",
				runs: [
					{
						t: "2. 타겟에 맞는 콘텐츠와 키워드로 맞춤 광고를 진행",
						k: 0,
					},
				],
				align: "center",
				id: 38,
			},
			{
				type: "p",
				runs: [
					{
						t: "3. 메디컬패키지를 진행 하여 세부 키워드를 장악",
						k: 0,
					},
				],
				align: "center",
				id: 39,
			},
			{
				type: "p",
				runs: [
					{
						t: "이렇게 3가지 입니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 40,
			},
			{
				type: "img",
				src: "/images/cases/167382065/3.png",
				w: 613,
				h: 480,
				alt: "병의원홍보",
				id: 41,
			},
			{
				type: "p",
				runs: [
					{
						t: "애드리절트는 환자가 검색을 할 때, 우리 병원이 노출되게 하는 마케팅의 기본을 가장 잘하는 회사입니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 42,
			},
			{
				type: "p",
				runs: [
					{
						t: "어떤 키워드를 검색해도 우리 병원이 뜨게 만드니까요.",
						k: 0,
					},
				],
				align: "center",
				id: 43,
			},
			{
				type: "p",
				runs: [
					{
						t: "긴 글 읽어 주셔서 감사하고, 저희 애드리절트의 또 다른 성공 사례는 원장님 차례입니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 44,
			},
			{
				type: "p",
				runs: [
					{
						t: "감사합니다.",
						k: 0,
					},
				],
				align: "center",
				id: 45,
			},
		],
	},
	{
		slug: "167324919",
		title: "[치과마케팅] 1일 1임플란트 최고 매출 달성!!",
		excerpt:
			'오늘 아침, 일어나 보니 벨이 톡을 하나 남겨 놨더라고요. "Y치과 이번 달 최고 매출 찍으셨다고 해서 톡 드립니다!" 세상에 너무 좋은 소식이네요!! 요즘 같이 경기가 좋지 않은 시기(당시 22년 11월)에 최고 매출을 찍었다니 과연 비결이 무엇일까요? 오늘 최고 매출을 달성한 Y병원',
		summary:
			"경쟁이 치열한 지역의 Y치과는 애드리절트와 블로그 세부 키워드 노출에 집중해, 광고 3개월 뒤 신환이 늘고 6개월 만에 병원을 확장했습니다. 78개 키워드 중 52개를 노출하며 경기 침체기(2022년 11월)에 1일 1임플란트, 최고 매출을 달성했습니다.",
		faq: [
			{
				q: "Y치과는 얼마 만에 성과가 났나요?",
				a: "노출도가 차오른 광고 3개월째부터 신규환자가 늘기 시작해 직원들이 바쁠 정도가 됐고, 6개월 만에 병원을 확장했습니다. 2년 6개월째인 2022년 11월에는 최고 매출을 달성했습니다.",
			},
			{
				q: "방문자·조회수로 성과를 보나요?",
				a: "아닙니다. 방문자·조회수보다 '작업한 키워드가 얼마나 노출됐는지'와 '그로 인해 환자 유입이 얼마나 늘었는지'를 중점적으로 봅니다. 맛집 글로 방문자만 늘리는 방식과는 다릅니다.",
			},
			{
				q: "비용 대비 가치는 어느 정도인가요?",
				a: "78개 중 52개 노출을 상위노출 보장형(키워드당 60~70만 원 시세)으로 환산하면 3천만 원이 넘지만, Y치과는 마케팅 팀장 1명 인건비 수준만 지출하고 있습니다.",
			},
		],
		cover: "/images/cases/167324919/1.png",
		coverW: 355,
		coverH: 441,
		blocks: [
			{
				type: "img",
				src: "/images/cases/167324919/1.png",
				w: 355,
				h: 441,
				alt: "병원블로그",
				id: 0,
			},
			{
				type: "p",
				runs: [
					{
						t: "오늘 아침, 일어나 보니 벨이 톡을 하나 남겨 놨더라고요.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 1,
			},
			{
				type: "p",
				runs: [
					{
						t: '"Y치과 이번 달 최고 매출 찍으셨다고 해서 톡 드립니다!"',
						b: true,
						c: "#6fa8dc",
						k: 0,
					},
				],
				align: "center",
				id: 2,
			},
			{
				type: "img",
				src: "/images/cases/167324919/2.png",
				w: 370,
				h: 320,
				alt: "b79f94b133d80.png",
				id: 3,
			},
			{
				type: "p",
				runs: [
					{
						t: "세상에 너무 좋은 소식이네요!! 요즘 같이 경기가 좋지 않은 시기(당시 22년 11월)에 최고 매출을 찍었다니 과연 비결이 무엇일까요?",
						k: 0,
					},
				],
				align: "center",
				id: 4,
			},
			{
				type: "p",
				runs: [
					{
						t: "오늘 최고 매출을 달성한 Y병원의 사례에 대해 이야기 해보려고 합니다.",
						k: 0,
					},
				],
				align: "center",
				id: 5,
			},
			{
				type: "img",
				src: "/images/cases/167324919/3.png",
				w: 356,
				h: 642,
				alt: "병원블로그마케팅",
				id: 6,
			},
			{
				type: "p",
				runs: [
					{
						t: "Y치과는 이번 달에 1일 1임플란트 식립을 하셨다고 해요. 원장님께서는 체력적으로 많이 힘드셨겠지만,",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 7,
			},
			{
				type: "p",
				runs: [
					{
						t: "매출적인 부분에서는 정말 기쁜 일이 아닐 수가 없습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 8,
			},
			{
				type: "p",
				runs: [
					{
						t: "해당 병원은 ",
						k: 0,
					},
					{
						t: "2020년 5월부터 애드리절트와 함께 마케팅을 진행 ",
						c: "#ff0000",
						k: 1,
					},
					{
						t: "중인데요.",
						k: 2,
					},
				],
				align: "center",
				id: 9,
			},
			{
				type: "p",
				runs: [
					{
						t: "개원하신 지는 3개월 정도가 지났고, 개원과 동시에 타 광고 회사와 3개월 정도 광고를 진행하고 계셨습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 10,
			},
			{
				type: "img",
				src: "/images/cases/167324919/4.png",
				w: 791,
				h: 915,
				alt: "치과마케팅",
				id: 11,
			},
			{
				type: "p",
				runs: [
					{
						t: "광고회사를 바꾸는 데는 2가지 이유가 있으셨습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 12,
			},
			{
				type: "h",
				runs: [
					{
						t: "1. 이전 광고 회사는 의료법을 잘 모르는 것 같았다.",
						b: true,
						c: "#ff0000",
						fs: 20,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 13,
			},
			{
				type: "h",
				runs: [
					{
						t: "2. 글을 쓰기는 하는데 노출이 잘 안되는 것 같다.",
						b: true,
						c: "#ff0000",
						fs: 20,
						k: 0,
					},
				],
				align: "center",
				id: 14,
			},
			{
				type: "p",
				runs: [
					{
						t: "이렇게 2가지였어요.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 15,
			},
			{
				type: "p",
				runs: [
					{
						t: "그래서 의료법을 잘 알고 있는 치과 마케팅 회사를 찾다가 저희 애드리절트와 함께 하기로 하셨는데요.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 16,
			},
			{
				type: "p",
				runs: [
					{
						t: "벌써 Y치과와 함께 한지도 2년이 다 되어 가고 있습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 17,
			},
			{
				type: "p",
				runs: [
					{
						t: "오랫동안 함께 일을 해온 만큼 히스토리가 있는 병원입니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 18,
			},
			{
				type: "p",
				runs: [
					{
						t: "애드리절트의 메디컬패키지는 키워드가 깔리는(노출 점유율이 높아지는) 데까지는 약간의 시간이 걸리게 됩니다.",
						k: 0,
					},
				],
				align: "center",
				id: 19,
			},
			{
				type: "p",
				runs: [
					{
						t: "지역 분과 등 여러 요소에 따라 차이는 있겠지만 보통은 2~3개월 정도의 시간이 소요되고 있죠.",
						k: 0,
					},
				],
				align: "center",
				id: 20,
			},
			{
				type: "p",
				runs: [
					{
						t: "당연히 경쟁이 치열할수록 시간은 오래 걸리게 됩니다.",
						u: true,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 21,
			},
			{
				type: "p",
				runs: [
					{
						t: "Y치과가 위치한 지역은 경쟁이 매우 치열한 곳이었고,",
						k: 0,
					},
				],
				align: "center",
				id: 22,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희가 광고를 시작할 무렵 근처에는 비슷한 치과들이 많이 생겨나며 공격적인 마케팅을 하는 바람에",
						k: 0,
					},
				],
				align: "center",
				id: 23,
			},
			{
				type: "p",
				runs: [
					{
						t: "경쟁이 정말로 심해지게 되었고 당연히 원장님은 불안하실 수 밖에 없으셨을 텐데요.",
						k: 0,
					},
				],
				align: "center",
				id: 24,
			},
			{
				type: "p",
				runs: [
					{
						t: "애드리절트에 대한 신뢰가 아직은 없으신 상태이셨고",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 25,
			},
			{
				type: "p",
				runs: [
					{
						t: "한 달, 두 달 이 지났는데 딱히 광고에 대한 체감이 되지 않으셨다고 해요.",
						k: 0,
					},
				],
				align: "center",
				id: 26,
			},
			{
				type: "p",
				runs: [
					{
						t: "하지만 3개월이 지나가며 노출도가 어느정도 찼을 무렵 상황은 완전히 달라지게 되었습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 27,
			},
			{
				type: "p",
				runs: [
					{
						t: "3개월이 지나자 점차 신규환자들이 늘어나기 시작",
						b: true,
						c: "#ff0000",
						k: 0,
					},
					{
						t: "했고,",
						k: 1,
					},
				],
				align: "center",
				gap: true,
				id: 28,
			},
			{
				type: "p",
				runs: [
					{
						t: "원장님께서는 직원들이 바빠 죽으려 한다는 피드백을 주셨습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 29,
			},
			{
				type: "p",
				runs: [
					{
						t: "뭘 검색하든 Y치과가 나오니 환자들이 늘 수 밖에 없었죠.",
						k: 0,
					},
				],
				align: "center",
				id: 30,
			},
			{
				type: "img",
				src: "/images/cases/167324919/5.png",
				w: 800,
				h: 1700,
				alt: "치과블로그마케팅",
				id: 31,
			},
			{
				type: "p",
				runs: [
					{
						t: "그렇게 저희 애드리절트와 함께",
						k: 0,
					},
					{
						t: " 치과마케팅을 시작한지 불과 6개월 만에 치과를 확장",
						c: "#ff0000",
						k: 1,
					},
					{
						t: "하게 되었습니다.",
						k: 2,
					},
				],
				align: "center",
				gap: true,
				id: 32,
			},
			{
				type: "p",
				runs: [
					{
						t: "원장님은 이제 애드리절트를 신뢰해 주시기 시작했고, 저희를 믿어 주시는 만큼 더욱 열심히 Y병원을 관리했습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 33,
			},
			{
				type: "p",
				runs: [
					{
						t: "물론 항상 잘 되기만 했던 건 아니었고 당연히 노출도가 떨어질 때도 있었습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 34,
			},
			{
				type: "p",
				runs: [
					{
						t: "하지만 지속적인 관리를 통해 잠깐의 하락은 있어도 결과적으로는 우상향을 그리며 점차 성장해 나가고 있었습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 35,
			},
			{
				type: "p",
				runs: [
					{
						t: "또한 한 가지 방법만을 고집하지 않고 상황에 따라",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 36,
			},
			{
				type: "p",
				runs: [
					{
						t: "여러 다양한 방법을 시도하며, 점차 Y치과와 잘 맞는 방법을 찾아나갔습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 37,
			},
			{
				type: "p",
				runs: [
					{
						t: "여러 가지 시도를 하며 중요하다 느낀 것은 결국 ",
						k: 0,
					},
					{
						t: "블로그를 통한 세부 키워드의 노출",
						b: true,
						c: "#ff0000",
						k: 1,
					},
					{
						t: "이었습니다.",
						k: 2,
					},
				],
				align: "center",
				id: 38,
			},
			{
				type: "p",
				runs: [
					{
						t: "Y치과는 이전 광고 회사에서 광고 진행 시 관리받을 때 블로그의 방문자가 얼마이다, 조회수는 몇 회이다 등을 보고 받았다 하시며,",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 39,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희에게도 방문자와 조회수를 여쭤보셨습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 40,
			},
			{
				type: "p",
				runs: [
					{
						t: "하지만 저희는 방문자/조회수보다는 ",
						k: 0,
					},
					{
						t: "노출도를 중점적으로 체크하고 있습니다.",
						b: true,
						c: "#ff0000",
						k: 1,
					},
				],
				align: "center",
				gap: true,
				id: 41,
			},
			{
				type: "p",
				runs: [
					{
						t: "이전 광고 회사가 치과 관련 키워드에 노출이 되지 않았음에도 방문자가 많았던 이유는",
						k: 0,
					},
				],
				align: "center",
				id: 42,
			},
			{
				type: "p",
				runs: [
					{
						t: "맛집 등 일상적인 글을 많이 올렸기 때문입니다.",
						k: 0,
					},
				],
				align: "center",
				id: 43,
			},
			{
				type: "p",
				runs: [
					{
						t: "하지만 아무리 맛집 글이 노출이 잘된다고 하더라도 맛집 글을 보고 치과를 찾아오지는 않을 겁니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 44,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희 애드리절트는",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 45,
			},
			{
				type: "p",
				runs: [
					{
						t: "1. 우리가 작업한 키워드의 노출이 얼마나 되었는지?",
						b: true,
						c: "#ff0000",
						k: 0,
					},
				],
				align: "center",
				id: 46,
			},
			{
				type: "p",
				runs: [
					{
						t: "2. 그리고 이만큼 노출이 되었을 때 환자의 유입은 얼마나 늘었는지?",
						b: true,
						c: "#ff0000",
						k: 0,
					},
				],
				align: "center",
				id: 47,
			},
			{
				type: "p",
				runs: [
					{
						t: "위 두 가지를 가장 중점적으로 보고 있습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 48,
			},
			{
				type: "img",
				src: "/images/cases/167324919/6.png",
				w: 632,
				h: 1849,
				alt: "치과홍보",
				id: 49,
			},
			{
				type: "p",
				runs: [
					{
						t: "현재  Y치과와 관련된 키워드는 총 78개이고, 금일 기준으로 총 52개의 키워드가 노출 중입니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 50,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희 애드리절트의 성공 사례를 보신 분들은 이제 이 표가 익숙하실 텐데요.",
						k: 0,
					},
				],
				align: "center",
				id: 51,
			},
			{
				type: "p",
				runs: [
					{
						t: "52개를 노출을 시켰고 노출당 10만 원의 가치라 했을 때 총 520만 원의 가치",
						b: true,
						c: "#ff0000",
						k: 0,
					},
					{
						t: "가 있습니다.",
						k: 1,
					},
				],
				align: "center",
				id: 52,
			},
			{
				type: "p",
				runs: [
					{
						t: "하지만 현재 노출당 비용을 받는 상위 노출 보장 상품은 10만 원짜리가 없습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 53,
			},
			{
				type: "p",
				runs: [
					{
						t: "약간씩 차이는 있을 수 있지만 어느 곳을 가든 ",
						k: 0,
					},
					{
						t: "키워드당 최소 60~70만 원 정도 하는 게 현재 시세입니다.",
						b: true,
						c: "#ff0000",
						k: 1,
					},
				],
				align: "center",
				id: 54,
			},
			{
				type: "p",
				runs: [
					{
						t: "이렇게 계산을 하면 현재 애드리절트가 관리하는 치과마케팅의 가치는 최소로 잡아도 3천만 원이",
						b: true,
						c: "#ff0000",
						k: 0,
					},
					{
						t: " 넘어갑니다.",
						k: 1,
					},
				],
				align: "center",
				id: 55,
			},
			{
				type: "p",
				runs: [
					{
						t: "하지만 Y치과는 마케팅팀장 1명 정도의 인건비 정도만 지출하고 계십니다. 정말 가성비가 괜찮지 않나요?",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 56,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희의 메디컬패키지란 잠재고객에게 보여지는 기본을 가장 충실히 실행하는 상품입니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 57,
			},
			{
				type: "p",
				runs: [
					{
						t: "이러한 이유로 한 병원당 뽑아두는 키워드가 많고, 그 키워드가 노출이 될수록 막강한 힘을 발휘하게 됩니다.",
						k: 0,
					},
				],
				align: "center",
				id: 58,
			},
			{
				type: "p",
				runs: [
					{
						t: "2년 6개월 동안 Y치과와 관련된 블로그 콘텐츠를 약 3천 건 정도 작성하고 발행",
						b: true,
						c: "#ff0000",
						k: 0,
					},
					{
						t: "했습니다. 어마어마한 양이죠?",
						k: 1,
					},
				],
				align: "center",
				id: 59,
			},
			{
				type: "p",
				runs: [
					{
						t: "누군가는 2년 반 만에 최고 매출을 찍은 게 잘한 건가? 라며 오래 걸렸다고 생각 할 수 있습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 60,
			},
			{
				type: "p",
				runs: [
					{
						t: "그런데 현재 Y치과 주변 치과들의 상황을 보면 전부 힘들다고 하는 중입니다.",
						k: 0,
					},
				],
				align: "center",
				id: 61,
			},
			{
				type: "p",
				runs: [
					{
						t: "더딜지는 몰라도 묵묵하게 기초를 단단히 다진 결과가, 결국 위기의 순간에 힘을 발휘하게 된 것입니다.",
						k: 0,
					},
				],
				align: "center",
				id: 62,
			},
			{
				type: "p",
				runs: [
					{
						t: "하지만 과연 광고만 잘해서 치과가 잘 된 것일까요?",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 63,
			},
			{
				type: "p",
				runs: [
					{
						t: "당연히 아닙니다. 해당",
						k: 0,
					},
					{
						t: " Y치과는 환자들에 대한 의료 서비스 수준이 매우 높은 편",
						b: true,
						c: "#ff0000",
						k: 1,
					},
					{
						t: "입니다.",
						k: 2,
					},
				],
				align: "center",
				id: 64,
			},
			{
				type: "p",
				runs: [
					{
						t: "지역 맘카페에서 알아서 입소문이 날 정도로 높은 수준의 실력과 친절함으로 이제는 지역을 대표하는 치과로 브랜딩이 되었습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 65,
			},
			{
				type: "p",
				runs: [
					{
						t: "광고를 보고 내원하는 환자들이 수준 높은 의료 서비스에 만족하며 지인들에게 소개를 합니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 66,
			},
			{
				type: "p",
				runs: [
					{
						t: "애드리절트가 가장 이상적이라고 생각하는 그림의 치과마케팅이 이뤄지는 곳, 그곳이 바로 Y치과였습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 67,
			},
			{
				type: "img",
				src: "/images/cases/167324919/7.png",
				w: 376,
				h: 839,
				alt: "치과홍보",
				id: 68,
			},
			{
				type: "p",
				runs: [
					{
						t: "워낙 많은 치과가 있기도 하고 광고도 정말 많이 하는 곳 중 하나가 바로 치과입니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 69,
			},
			{
				type: "p",
				runs: [
					{
						t: "이런 경쟁 속에서 우리 치과가 살아남기 위해 가장 먼저 해야 할 일은 바로 ",
						k: 0,
					},
					{
						t: "<기본을 지키는 것>",
						b: true,
						c: "#ff0000",
						k: 1,
					},
					{
						t: " 입니다.",
						k: 2,
					},
				],
				align: "center",
				id: 70,
			},
			{
				type: "p",
				runs: [
					{
						t: "온라인에서 기본은 바로 잠재적 고객에게 노출되는 것이지요.",
						k: 0,
					},
				],
				align: "center",
				id: 71,
			},
			{
				type: "p",
				runs: [
					{
						t: "광고를 하는 목적은 대부분 매출을 올리기 위함이죠.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 72,
			},
			{
				type: "p",
				runs: [
					{
						t: "매출을 올리려면 결국 유입이 늘어야 하고 구매 전환이 일어나야 합니다.",
						k: 0,
					},
				],
				align: "center",
				id: 73,
			},
			{
				type: "p",
				runs: [
					{
						t: "여기서 광고회사는 유입을 담당합니다.",
						k: 0,
					},
				],
				align: "center",
				id: 74,
			},
			{
				type: "p",
				runs: [
					{
						t: "유입을 늘리려면 병원의 노출이 많아져야 하는데 그건 광고회사가 잘하는 것이죠.",
						k: 0,
					},
				],
				align: "center",
				id: 75,
			},
			{
				type: "p",
				runs: [
					{
						t: "하지만 정말 안타깝게도 이걸 잘하지 못하는 회사들이 많습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 76,
			},
			{
				type: "p",
				runs: [
					{
						t: "Y치과 원장님이 처음 저희를 만나 걱정했던 것처럼 말이죠.",
						k: 0,
					},
				],
				align: "center",
				id: 77,
			},
			{
				type: "p",
				runs: [
					{
						t: "검색했을 때 노출이 되지 않는다면 광고로서 아무런 의미가 없습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 78,
			},
			{
				type: "p",
				runs: [
					{
						t: "애드리절트는 병원 마케팅에 대해 오랜 노하우를 가지고 있습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 79,
			},
			{
				type: "p",
				runs: [
					{
						t: "특히 블로그 파트는 저희를 따라올 경쟁사가 없다고 생각합니다.",
						k: 0,
					},
				],
				align: "center",
				id: 80,
			},
			{
				type: "p",
				runs: [
					{
						t: "로직 파악 분석 프로그램을 개발 할 정도로 로직 파악에 빠삭하고,",
						k: 0,
					},
				],
				align: "center",
				id: 81,
			},
			{
				type: "p",
				runs: [
					{
						t: "오랜 시간 병원 마케팅에 집중하며 시스템을 구축해 왔기 때문입니다.",
						k: 0,
					},
				],
				align: "center",
				id: 82,
			},
			{
				type: "p",
				runs: [
					{
						t: "💫",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 83,
			},
			{
				type: "p",
				runs: [
					{
						t: "나도 이런 병원 마케팅 성공 사례의 주인공이 되고 싶다!",
						b: true,
						c: "#3d85c6",
						k: 0,
					},
				],
				align: "center",
				id: 84,
			},
			{
				type: "p",
				runs: [
					{
						t: "라는 생각을 하고 계시다면 언제든 문의해 주시기 바라겠습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 85,
			},
			{
				type: "p",
				runs: [
					{
						t: "긴 글 읽어주셔서 감사합니다. 저희는 또 다른 성공 사례를 들고 찾아뵙겠습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 86,
			},
		],
	},
	{
		slug: "167311629",
		title: "[병원마케팅 성공사례] ROAS 5000% 거짓말 같으시죠?",
		excerpt:
			'월 매출 5억의 병원은 광고비에 얼마를 쓸까? 저희는 잘 사용하지 않는 편이지만 ROAS (Return On Ad Spend)의 개념으로 계산을 해보며 해당 사례를 소개해드리겠습니다. 원장님들이 저희에게 광고 문의를 하실 때 종종 하시는 고민이 있으신데요. 바로 "예산을 얼마나 써야 적',
		summary:
			"월 매출 5억 병원이 애드리절트 메디컬 패키지에 월 약 1,000만 원을 써서 ROAS 5000%를 기록한 사례입니다. 같은 노출을 파워링크로 만들면 키워드 10개만 세팅해도 월 2,200만 원이 드는데, 그 절반도 안 되는 비용으로 136개 중 82개(약 60%) 키워드를 노출하고 있습니다.",
		faq: [
			{
				q: "ROAS 5000%는 어떻게 계산됐나요?",
				a: "매출액 5억 원 ÷ 광고비 1,000만 원 × 100 = 5000%입니다. 같은 노출을 파워링크로 만들려면 키워드 10개만 세팅해도 월 2,200만 원이 듭니다.",
			},
			{
				q: "메디컬 패키지 비용은 얼마인가요?",
				a: "보장형이 아니라 키워드당 비용을 청구하지 않으며, 기본 구성이 경력 있는 마케팅 팀장 1명의 인건비 정도입니다.",
			},
			{
				q: "효과는 얼마나 걸리나요?",
				a: "콘텐츠가 누적될수록 힘을 발휘하는 상품이라, 글이 누적되기까지 보통 2~3개월 정도가 필요합니다. 이 병원은 6년간 수천 건의 콘텐츠를 발행했습니다.",
			},
		],
		cover: "/images/cases/167311629/2.png",
		coverW: 831,
		coverH: 631,
		blocks: [
			{
				type: "p",
				runs: [
					{
						t: "월 매출 5억의 병원은 광고비에 얼마를 쓸까? 저희는 잘 사용하지 않는 편이지만",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 0,
			},
			{
				type: "p",
				runs: [
					{
						t: "ROAS (Return On Ad Spend)의 개념으로 계산을 해보며 해당 사례를 소개해드리겠습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 1,
			},
			{
				type: "h",
				runs: [
					{
						t: "병원마케팅 성공사례",
						b: true,
						fs: 30,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 2,
			},
			{
				type: "h",
				runs: [
					{
						t: "ROAS",
						b: true,
						c: "#6fa8dc",
						fs: 30,
						k: 0,
					},
					{
						t: " ",
						b: true,
						fs: 30,
						k: 1,
					},
					{
						t: "5000%?",
						b: true,
						c: "#ff0000",
						fs: 30,
						k: 2,
					},
				],
				align: "center",
				id: 3,
			},
			{
				type: "h",
				runs: [
					{
						t: "반갑습니다~ 수많은 병원 마케팅을 진행하며 수많은 마케팅 성공 사례를 만들고 있는 애드리절트입니다.",
						k: 0,
					},
				],
				align: "center",
				id: 4,
			},
			{
				type: "img",
				src: "/images/cases/167311629/1.png",
				w: 370,
				h: 320,
				alt: "병원블로그대행",
				id: 5,
			},
			{
				type: "p",
				runs: [
					{
						t: "원장님들이 저희에게 광고 문의를 하실 때 종종 하시는 고민이 있으신데요. 바로",
						k: 0,
					},
				],
				align: "center",
				id: 6,
			},
			{
				type: "p",
				runs: [
					{
						t: '"예산을 얼마나 써야 적당한지 모르겠어요"',
						b: true,
						c: "#6fa8dc",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 7,
			},
			{
				type: "p",
				runs: [
					{
						t: '"어떤 상품을 진행해야 효과가 날까요?"',
						b: true,
						c: "#6fa8dc",
						k: 0,
					},
				],
				align: "center",
				id: 8,
			},
			{
				type: "p",
				runs: [
					{
						t: "입니다. 이러한 고민을 가지고 계신 분들에게 참고해 보시라고 모 병원의 사례를 들고 찾아왔습니다!",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 9,
			},
			{
				type: "p",
				runs: [
					{
						t: "해당 병원은 저희와 함께 한지는 6년 정도가 된 병원이고 ",
						k: 0,
					},
					{
						t: "수가 300만 원 정도의 수술을 하는 병원",
						u: true,
						c: "#ff0000",
						k: 1,
					},
					{
						t: "입니다.",
						k: 2,
					},
				],
				align: "center",
				id: 10,
			},
			{
				type: "p",
				runs: [
					{
						t: "현재 모 병원은 ",
						k: 0,
					},
					{
						t: "애드리절트의 메디컬패키지",
						c: "#ff0000",
						k: 1,
					},
					{
						t: "를 진행하고 있습니다.",
						k: 2,
					},
				],
				align: "center",
				id: 11,
			},
			{
				type: "p",
				runs: [
					{
						t: "우선 해당 병원의 노출표를 보여드리겠습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 12,
			},
			{
				type: "img",
				src: "/images/cases/167311629/2.png",
				w: 831,
				h: 631,
				alt: "병원브랜드블로그",
				id: 13,
			},
			{
				type: "p",
				runs: [
					{
						t: "136개의 전체 키워드 중 82개가 노출되며 약 60% 정도의 키워드가 노출이 되고 있습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 14,
			},
			{
				type: "p",
				runs: [
					{
						t: "현재 이 병원에서 다루는 키워드가 기본적으로 경쟁이 매우 치열한 키워드입니다.",
						k: 0,
					},
				],
				align: "center",
				id: 15,
			},
			{
				type: "p",
				runs: [
					{
						t: "노출 중인 키워드 하나를 파워링크로 하면 어느 정도가 나오는지 수치로 보여드려 보겠습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 16,
			},
			{
				type: "img",
				src: "/images/cases/167311629/3.png",
				w: 388,
				h: 135,
				alt: "병원블로그관리",
				id: 17,
			},
			{
				type: "p",
				runs: [
					{
						t: "해당 키워드는 한 달을 기준으로 PC 1,750회 / 모바일 16,400회가 조회되고 있습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 18,
			},
			{
				type: "img",
				src: "/images/cases/167311629/4.png",
				w: 966,
				h: 425,
				alt: "병원블로그관리대행",
				id: 19,
			},
			{
				type: "p",
				runs: [
					{
						t: "입찰가를 ",
						k: 0,
					},
					{
						t: "2만 원 정도로 세팅을 해보았더니, 예상 클릭수가 2회",
						bg: "#ffe599",
						k: 1,
					},
					{
						t: "가 나왔습니다.",
						k: 2,
					},
				],
				align: "center",
				gap: true,
				id: 20,
			},
			{
				type: "p",
				runs: [
					{
						t: "입찰가란 누군가 클릭을 했을 때 지출되는 금액입니다.",
						k: 0,
					},
				],
				align: "center",
				id: 21,
			},
			{
				type: "p",
				runs: [
					{
						t: "즉 해당 키워드를 1번 클릭할 때마다 원장님은 네이버 측에 2만 원을 지불하게 된다는 겁니다.",
						c: "#ff0000",
						k: 0,
					},
				],
				align: "center",
				id: 22,
			},
			{
				type: "p",
				runs: [
					{
						t: "하지만 한 달에 2명이 클릭하는 걸로는 병원 매출의 상승을 기대하기에는 어렵겠죠.",
						k: 0,
					},
				],
				align: "center",
				id: 23,
			},
			{
				type: "img",
				src: "/images/cases/167311629/5.png",
				w: 966,
				h: 483,
				alt: "병원홍보회사",
				id: 24,
			},
			{
				type: "p",
				runs: [
					{
						t: "그래서 입찰가를 4만 원까지 올려보았습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 25,
			},
			{
				type: "p",
				runs: [
					{
						t: "4만 원으로 올리니 예상 클릭 수가 확실히 늘어 66회",
						bg: "#ffe599",
						k: 0,
					},
					{
						t: "가 나왔습니다. 하루에 약 2.2명 정도가 클릭하겠군요.",
						k: 1,
					},
				],
				align: "center",
				id: 26,
			},
			{
				type: "p",
				runs: [
					{
						t: "이 키워드를 노출시켜 클릭을 유도하고 내원까지 이어지려면 적어도 입찰가가 4만 원 정도는 돼야 합니다.",
						k: 0,
					},
				],
				align: "center",
				id: 27,
			},
			{
				type: "p",
				runs: [
					{
						t: "그렇지만 입찰가를 이렇게 올리게 되면 키워드 하나당 220만 원 정도의 비용이 들고",
						k: 0,
					},
				],
				align: "center",
				id: 28,
			},
			{
				type: "p",
				runs: [
					{
						t: "이러한 키워드를 10개만 세팅한다 해도 벌써 2,200만 원이 지출됩니다.",
						c: "#ff0000",
						k: 0,
					},
				],
				align: "center",
				id: 29,
			},
			{
				type: "p",
				runs: [
					{
						t: "하지만 해당 병원이 애드리절트에 쓰고 있는 비용은 1개월 기준 약 1,000만 원 정도입니다.",
						b: true,
						c: "#ff0000",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 30,
			},
			{
				type: "p",
				runs: [
					{
						t: "기존의 반도 안 되는 금액이죠.",
						u: true,
						k: 0,
					},
				],
				align: "center",
				id: 31,
			},
			{
				type: "p",
				runs: [
					{
						t: "해당 병원의 ROAS를 계산해 보면",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 32,
			},
			{
				type: "callout",
				runs: [
					{
						t: "ROAS",
						b: true,
						c: "#ff0000",
						fs: 30,
						bg: "#f3f3f3",
						k: 0,
					},
					{
						t: "&nbsp= ",
						b: true,
						fs: 30,
						bg: "#f3f3f3",
						k: 1,
					},
					{
						t: "매출액",
						b: true,
						c: "#6fa8dc",
						fs: 30,
						bg: "#f3f3f3",
						k: 2,
					},
					{
						t: " ÷ ",
						b: true,
						fs: 30,
						bg: "#f3f3f3",
						k: 3,
					},
					{
						t: "광고비",
						b: true,
						c: "#93c47d",
						fs: 30,
						bg: "#f3f3f3",
						k: 4,
					},
					{
						t: " x 100",
						b: true,
						fs: 30,
						bg: "#f3f3f3",
						k: 5,
					},
				],
				align: "center",
				gap: true,
				id: 33,
			},
			{
				type: "h",
				runs: [
					{
						t: "500,000,000",
						c: "#6fa8dc",
						fs: 22,
						k: 0,
					},
					{
						t: " ÷ ",
						fs: 22,
						k: 1,
					},
					{
						t: "10,000,000원",
						c: "#93c47d",
						fs: 22,
						k: 2,
					},
					{
						t: "X100=",
						fs: 22,
						k: 3,
					},
					{
						t: "5000%",
						c: "#ff0000",
						fs: 22,
						k: 4,
					},
				],
				align: "center",
				gap: true,
				id: 34,
			},
			{
				type: "img",
				src: "/images/cases/167311629/6.png",
				w: 370,
				h: 320,
				alt: "b892f5b404717.png",
				id: 35,
			},
			{
				type: "p",
				runs: [
					{
						t: "무려 5000%가 나왔습니다.",
						b: true,
						u: true,
						c: "#ff0000",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 36,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희가 해당 병원을 병원마케팅성공사례로 소개하는 이유를 이제 아시겠죠?",
						k: 0,
					},
				],
				align: "center",
				id: 37,
			},
			{
				type: "p",
				runs: [
					{
						t: "작년까지는 350개 정도의 키워드를 작업하면서 노출도가 많이 채워져 가던 중 새로운 치료법을 도입하셨는데요,",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 38,
			},
			{
				type: "p",
				runs: [
					{
						t: "현재는 새로 도입하신 치료법에 집중하기 위해 키워드를 150여 개 정도로 재정비를 하였습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 39,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희와 처음 만나셨을 당시에는 월 1억이 안 되는 매출이었지만, 지속적인 세부키워드 노출관리를 진행하며",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 40,
			},
			{
				type: "p",
				runs: [
					{
						t: "점차 노출 키워드의 범위를 넓혀 가다 보니 지금의 결과를 만들 수가 있었습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 41,
			},
			{
				type: "p",
				runs: [
					{
						t: "6년이란 시간 동안 발행한 콘텐츠의 수만 해도 몇 천 건은 될 거에요.",
						u: true,
						k: 0,
					},
				],
				align: "center",
				id: 42,
			},
			{
				type: "p",
				runs: [
					{
						t: "애드리절트의 메디컬패키지는 누적이 될수록 더욱 힘을 발휘하는 상품입니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 43,
			},
			{
				type: "p",
				runs: [
					{
						t: "그게 저희가 긴 시간 동안 함께한 병원이 많은 이유이기도 합니다.",
						k: 0,
					},
				],
				align: "center",
				id: 44,
			},
			{
				type: "p",
				runs: [
					{
						t: "참고로 글이 누적되기 위해서는 2~3개월 정도의 시간이 필요합니다.",
						c: "#ff0000",
						k: 0,
					},
				],
				align: "center",
				id: 45,
			},
			{
				type: "p",
				runs: [
					{
						t: "병원마다 상황이 달라 예산을 정하기가 쉽지는 않습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 46,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희 메디컬패키지는 기본 구성이 팀장 1명의 인건비 정도로 맞춰져 있으니",
						k: 0,
					},
				],
				align: "center",
				id: 47,
			},
			{
				type: "p",
				runs: [
					{
						t: "얼마를 쓰고 어떤 채널을 활용하여 광고해야 할지 고민이시라면",
						k: 0,
					},
				],
				align: "center",
				id: 48,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희 애드리절트의 메디컬패키지도 분명 좋은 선택지가 되실 겁니다.",
						k: 0,
					},
				],
				align: "center",
				id: 49,
			},
			{
				type: "p",
				runs: [
					{
						t: "지금까지 긴 글을 읽어 주셔서 감사합니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 50,
			},
			{
				type: "video",
				videoId: "RrfqURSWYwI",
				id: 51,
			},
		],
	},
	{
		slug: "167311286",
		title: "[병원마케팅] 8개월 만에 무려 500례 달성!",
		excerpt:
			"오늘은 무려 병원마케팅 시작 8개월 만에 500례를 달성한 A병원 사례를 들고 찾아 왔습니다~ A병원은 2017년에 저희 애드리절트 와 처음으로 만나 병원마케팅을 진행 해 오시다가 2022년 02월에 확장 이전을 하시게 되시면서, 새로운 치료법을 도입한 병원인데요. 병원을 이전하며 환자",
		summary:
			"2017년부터 함께한 A병원은 2022년 확장 이전 후 새 치료법 키워드에 집중해, 병원마케팅 8개월 만에 500례를 달성했습니다(6월 300례 → 10월 500례). 100개가 넘던 키워드를 350개까지 확장하며 매출이 지속 상승했습니다.",
		faq: [
			{
				q: "500례는 얼마 만에 달성했나요?",
				a: "2022년 확장 이전 후 4개월이 지난 6월에 300례, 10월에 500례를 달성했습니다. 병원마케팅 시작 기준 8개월 만의 성과입니다.",
			},
			{
				q: "메디컬 패키지는 어떻게 비용을 아끼나요?",
				a: "키워드당 비용을 청구하는 보장형이 아니라 전체 키워드 리스트를 채워가는 방식이라, 보장형으로 환산하면 월 2,000만 원이 넘는 노출을 팀장 1명 인건비 수준으로 진행합니다.",
			},
			{
				q: "성과의 다른 이유는 무엇인가요?",
				a: "광고뿐 아니라 병원의 높은 의료 서비스 수준과 내부의 적극적인 피드백·참여가 함께여서 가능했습니다. 원장·팀장·실장이 광고에 참여할 때 효과가 큽니다.",
			},
		],
		cover: "/images/cases/167311286/2.png",
		coverW: 364,
		coverH: 449,
		blocks: [
			{
				type: "p",
				runs: [
					{
						t: "오늘은 무려 병원마케팅 시작 8개월 만에 500례를",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 0,
			},
			{
				type: "p",
				runs: [
					{
						t: "달성한 A병원 사례를 들고 찾아 왔습니다~",
						k: 0,
					},
				],
				align: "center",
				id: 1,
			},
			{
				type: "img",
				src: "/images/cases/167311286/1.png",
				w: 370,
				h: 320,
				alt: "강남병원홍보",
				id: 2,
			},
			{
				type: "p",
				runs: [
					{
						t: "A병원은 2017년에 저희 애드리절트 와 처음으로 만나 병원마케팅을 진행 해 오시다가",
						k: 0,
					},
				],
				align: "center",
				id: 3,
			},
			{
				type: "p",
				runs: [
					{
						t: "2022년 02월에 확장 이전을 하시게 되시면서, 새로운 치료법을 도입한 병원인데요.",
						k: 0,
					},
				],
				align: "center",
				id: 4,
			},
			{
				type: "p",
				runs: [
					{
						t: "병원을 이전하며 환자 분들에게 더 나은 치료법을 도입하셨고, 이 치료가 필요하신 분들을 타겟으로 알리는 작업을 진행했습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 5,
			},
			{
				type: "p",
				runs: [
					{
						t: "해당 병원은 저희가 항상 병원마케팅 에서 강조를 한",
						k: 0,
					},
					{
						t: " <병원마케팅의 기본> ",
						b: true,
						k: 1,
					},
					{
						t: "을",
						k: 2,
					},
				],
				align: "center",
				gap: true,
				id: 6,
			},
			{
				type: "p",
				runs: [
					{
						t: "가장 충실히 지킨 병원이라고 할 수 있을 거 같은데요.",
						k: 0,
					},
				],
				align: "center",
				id: 7,
			},
			{
				type: "p",
				runs: [
					{
						t: "온라인 광고를 진행함에 있어서 광고의 종류와 상관없이",
						k: 0,
					},
				],
				align: "center",
				id: 8,
			},
			{
				type: "p",
				runs: [
					{
						t: "기본 중의 기본은 ",
						k: 0,
					},
					{
						t: '"나의 잠재고객 에게 알려지는 것" ',
						b: true,
						c: "#ff0000",
						k: 1,
					},
					{
						t: "입니다.",
						k: 2,
					},
				],
				align: "center",
				id: 9,
			},
			{
				type: "p",
				runs: [
					{
						t: "애드리절트는 이 기본에 가장 집중하여 병원 마케팅을 진행하고 있고,",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 10,
			},
			{
				type: "p",
				runs: [
					{
						t: "환자가 병원을 찾는 원리를 바탕으로 모든 상품이 구성되어 있습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 11,
			},
			{
				type: "p",
				runs: [
					{
						t: "A병원은 확장 이전을 하고 4개월이 지난 6월, 300례를 달성하였고",
						b: true,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 12,
			},
			{
				type: "h",
				runs: [
					{
						t: "10월에는 무려 500례",
						b: true,
						c: "#ff0000",
						fs: 22,
						k: 0,
					},
					{
						t: "를 달성하였습니다.",
						b: true,
						k: 1,
					},
				],
				align: "center",
				id: 13,
			},
			{
				type: "p",
				runs: [
					{
						t: "( 22.06 300례 달성 )",
						k: 0,
					},
				],
				align: "center",
				id: 14,
			},
			{
				type: "img",
				src: "/images/cases/167311286/2.png",
				w: 364,
				h: 449,
				alt: "병원홍보업체",
				id: 15,
			},
			{
				type: "img",
				src: "/images/cases/167311286/3.png",
				w: 357,
				h: 590,
				alt: "병원마케팅대행사추천",
				id: 16,
			},
			{
				type: "p",
				runs: [
					{
						t: "( 22.10 500례 달성 )",
						k: 0,
					},
				],
				align: "center",
				id: 17,
			},
			{
				type: "p",
				runs: [
					{
						t: "2017년부터 애드리절트와 함께 해온 곳 이다 보니 그동안 많은 시행착오를 겪어 왔습니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 18,
			},
			{
				type: "p",
				runs: [
					{
						t: "처음 A병원을 만났을 당시 이미 다른 광고 회사를 통하여 마케팅을 진행 중이셨는데요.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 19,
			},
			{
				type: "p",
				runs: [
					{
						t: "왜 광고 회사를 변경하시는지 여쭈었을 때, 매출이 너무 많이 떨어졌다라고 말씀을 해 주셨어요.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 20,
			},
			{
				type: "p",
				runs: [
					{
						t: "광고 효과 또한 초반에는 오르더니, 어느 순간부터 하락을 하였고 그 상태가 유지 되었다고 하시더라고요.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 21,
			},
			{
				type: "p",
				runs: [
					{
						t: "이러한 이야기를 광고 회사에 전달했는데 특별한 조치 없이 기존과 동일한 방식으로 진행하는 광고 회사의 태도에",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 22,
			},
			{
				type: "p",
				runs: [
					{
						t: "업체 변경 이라는 결정을 내리게 되셨다고 하셨어요.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 23,
			},
			{
				type: "img",
				src: "/images/cases/167311286/4.png",
				w: 370,
				h: 320,
				alt: "병원블로그마케팅잘하는곳",
				id: 24,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희와 광고를 진행하기 이전에 A병원은 특정 키워드 5개 정도를 검색하였을 때",
						k: 0,
					},
				],
				align: "center",
				id: 25,
			},
			{
				type: "p",
				runs: [
					{
						t: "상위에 A병원이 한 달 내내 노출되도록 유지 하는 방법으로 진행하고 계셨는데요.",
						k: 0,
					},
				],
				align: "center",
				id: 26,
			},
			{
				type: "p",
				runs: [
					{
						t: "조회수가 많은 키워드들이기도 했고 당시에는 대부분의 광고 회사가",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 27,
			},
			{
				type: "p",
				runs: [
					{
						t: "해당 방법을 활용하여 광고를 하고 있었기에 확실히 트랜드에 맞는 방법이긴 했습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 28,
			},
			{
				type: "p",
				runs: [
					{
						t: "하지만 환자들이 병원을 찾는 원리를 생각해 본다면 좀 더 다른 방법의 광고가 필요했어요.",
						k: 0,
					},
				],
				align: "center",
				id: 29,
			},
			{
				type: "h",
				runs: [
					{
						t: "환자가 병원을 찾는 원리를 분석한 메디컬 패키지",
						b: true,
						fs: 22,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 30,
			},
			{
				type: "hr",
				id: 31,
			},
			{
				type: "p",
				runs: [
					{
						t: "환자들은 병원을 선택할 때 단순히 몇 개의 키워드만으로 결정하지 않습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 32,
			},
			{
				type: "p",
				runs: [
					{
						t: "특히 치료가 복잡하거나 어려운 질환일수록 더 많은 정보를 찾아보고,",
						k: 0,
					},
				],
				align: "center",
				id: 33,
			},
			{
				type: "p",
				runs: [
					{
						t: "오랜 시간 검색한 뒤 충분히 신중하게 병원을 선택하죠.",
						k: 0,
					},
				],
				align: "center",
				id: 34,
			},
			{
				type: "p",
				runs: [
					{
						t: "A병원의 광고를 맡으면서 가장 먼저 한 일은,",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 35,
			},
			{
				type: "p",
				runs: [
					{
						t: "이 병원을 찾을 가능성이 있는 환자들이 실제로 검색할만한 키워드를 분석하는 것이었습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 36,
			},
			{
				type: "p",
				runs: [
					{
						t: "그렇게 선별한 키워드는 100개가 넘었고, 각각의 키워드마다",
						k: 0,
					},
				],
				align: "center",
				id: 37,
			},
			{
				type: "p",
				runs: [
					{
						t: "‘우리 병원이 어떤 곳인지’",
						c: "#ff0000",
						k: 0,
					},
					{
						t: "를 담은 콘텐츠를 제작해 검색한 환자들에게 노출되도록 했습니다.",
						k: 1,
					},
				],
				align: "center",
				id: 38,
			},
			{
				type: "p",
				runs: [
					{
						t: "이 상품이 바로 ",
						k: 0,
					},
					{
						t: "메디컬패키지",
						c: "#ff0000",
						k: 1,
					},
					{
						t: " 입니다.",
						k: 2,
					},
				],
				align: "center",
				id: 39,
			},
			{
				type: "callout",
				runs: [
					{
						t: "※메디컬패키지※ ",
						b: true,
						fs: 24,
						bg: "#f3f3f3",
						k: 0,
					},
					{
						br: true,
						k: 1,
					},
					{
						t: "1.환자가 병원을 가기위해 검색하는 세부키워드에 우리 병원을 많이 노출시키는 전략2. 어떤 키워드를 검색해도 우리 병원이 보여짐3. 수천만원을 절약할 수 있는 마케팅 상품4. 마케팅 팀장 1명의 인건비면 충분5. 병원과 마케터가 함께하면 더욱 시너지가 나는 상품",
						bg: "#f3f3f3",
						k: 2,
					},
				],
				align: "center",
				gap: true,
				id: 40,
			},
			{
				type: "img",
				src: "/images/cases/167311286/5.png",
				w: 1167,
				h: 648,
				alt: "병원마케팅추천",
				id: 41,
			},
			{
				type: "p",
				runs: [
					{
						t: "점차 시간이 흐르며 100개였던 키워드는 350개 까지 확장을 하였고,",
						k: 0,
					},
				],
				align: "center",
				id: 42,
			},
			{
				type: "p",
				runs: [
					{
						t: "대부분이 노출되며 매출 또한 지속적으로 상승하는 결과를 보였습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 43,
			},
			{
				type: "p",
				runs: [
					{
						t: "그렇게 2022년 인근으로 확장 이전을 하게 되면서 최신 장비와 새로운 치료법을 도입하게 되었습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 44,
			},
			{
				type: "p",
				runs: [
					{
						t: "이전을 한 이후에는 새로운 치료법에 대한 키워드를 집중적으로 작업하여 환자들에게 노출되도록 하였습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 45,
			},
			{
				type: "p",
				runs: [
					{
						t: "예상보다 빠른 목표 달성을 통하여 A병원도 저희 애드리절트도 뿌듯함을 느끼게 되었습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 46,
			},
			{
				type: "img",
				src: "/images/cases/167311286/6.png",
				w: 782,
				h: 728,
				alt: "병원홍보전문",
				id: 47,
			},
			{
				type: "p",
				runs: [
					{
						t: "위 표를 확인 하시면 전체 키워드 의 수가 157개 이고, 그중 49% 정도인 77개 정도가 검색 시 노출 중인데요.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 48,
			},
			{
				type: "p",
				runs: [
					{
						t: "아마 이 표를 보시면 이런 생각을 하실 수도 있으실 겁니다.",
						k: 0,
					},
				],
				align: "center",
				id: 49,
			},
			{
				type: "h",
				runs: [
					{
						t: "'키워드 하나 노출 됐을 때마다 비용이 발생하는 건가?'",
						c: "#3d85c6",
						fs: 26,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 50,
			},
			{
				type: "p",
				runs: [
					{
						t: "결론부터 말씀 드리면",
						k: 0,
					},
					{
						t: " ",
						c: "#ff0000",
						k: 1,
					},
					{
						t: "아닙니다. ",
						b: true,
						c: "#ff0000",
						k: 2,
					},
					{
						t: "전체 키워드 리스트를 작성하고",
						k: 3,
					},
				],
				align: "center",
				gap: true,
				id: 51,
			},
			{
				type: "p",
				runs: [
					{
						t: "점차 채워가는 방식으로 관리를 하고 있으며 키워드 당 비용을 받는 구조가 아닙니다.",
						k: 0,
					},
				],
				align: "center",
				id: 52,
			},
			{
				type: "p",
				runs: [
					{
						t: "만일 그렇게 했다면",
						c: "#ff0000",
						k: 0,
					},
					{
						t: " A병원 같은 경우에는 현재 시세로 따져서",
						k: 1,
					},
				],
				align: "center",
				id: 53,
			},
			{
				type: "p",
				runs: [
					{
						t: "키워드 당 최소 30만원으로 측정 한다 해도 ",
						k: 0,
					},
					{
						t: "한 달에 거의 2,300만원에 달하는 비용",
						c: "#ff0000",
						k: 1,
					},
					{
						t: "을 지출하게 되는데요.",
						k: 2,
					},
				],
				align: "center",
				id: 54,
			},
			{
				type: "p",
				runs: [
					{
						t: "물론 상위노출을 보장하는 형태는 키워드 별로 비용이 정해집니다.",
						k: 0,
					},
				],
				align: "center",
				id: 55,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희 메디컬패키지는 보장 형태가 아니므로 키워드 당 비용을 청구하지 않습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 56,
			},
			{
				type: "p",
				runs: [
					{
						t: "A병원은 애드리절트의 메디컬패키지를 통하여 수천 만원의 가치가 있는",
						k: 0,
					},
				],
				align: "center",
				id: 57,
			},
			{
				type: "p",
				runs: [
					{
						t: "병원 마케팅을 진행 하고 계십니다.",
						k: 0,
					},
				],
				align: "center",
				id: 58,
			},
			{
				type: "p",
				runs: [
					{
						t: "그럼 메디컬패키지의 비용은 얼마 정도인가?",
						b: true,
						c: "#ff0000",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 59,
			},
			{
				type: "p",
				runs: [
					{
						t: "오랜 경력이 있는 마케팅 팀장 1명의 인건비 정도",
						c: "#ff0000",
						k: 0,
					},
				],
				align: "center",
				id: 60,
			},
			{
				type: "p",
				runs: [
					{
						t: "라고 생각하시면 됩니다.",
						k: 0,
					},
				],
				align: "center",
				id: 61,
			},
			{
				type: "p",
				runs: [
					{
						t: "많은 키워드를 검색하였을 때 보여지게 하려면 인력 풀이 세팅되어야 하고,",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 62,
			},
			{
				type: "p",
				runs: [
					{
						t: "블로그 등 여러 계정 및 시스템이 뒷받침 해 줘야 하는데요.",
						k: 0,
					},
				],
				align: "center",
				id: 63,
			},
			{
				type: "p",
				runs: [
					{
						t: "이러한 구조를 구축하려면 수천만원 정도에 비용이 발생 하게 됩니다.",
						k: 0,
					},
				],
				align: "center",
				id: 64,
			},
			{
				type: "p",
				runs: [
					{
						t: "만일 직접 광고팀을 꾸려 운영 하고 싶으신 원장님이 계신다면",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 65,
			},
			{
				type: "p",
				runs: [
					{
						t: "애드리절트 이승민 대표의 마케팅 교육을 들어보시는 걸 권합니다.",
						k: 0,
					},
				],
				align: "center",
				id: 66,
			},
			{
				type: "p",
				runs: [
					{
						t: "실제로 교육을 듣고 내부적으로 마케팅 팀을 꾸려 효과적으로 운영 중이신",
						k: 0,
					},
				],
				align: "center",
				id: 67,
			},
			{
				type: "p",
				runs: [
					{
						t: "원장님들이 꽤 계십니다.",
						k: 0,
					},
				],
				align: "center",
				id: 68,
			},
			{
				type: "p",
				runs: [
					{
						t: "( 📞교육 관련 문의 전화 : 070-4367-5705 )",
						k: 0,
					},
				],
				align: "center",
				id: 69,
			},
			{
				type: "h",
				runs: [
					{
						t: "저희만 잘한다고 매출이 오르지 않습니다.",
						b: true,
						fs: 22,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 70,
			},
			{
				type: "hr",
				id: 71,
			},
			{
				type: "p",
				runs: [
					{
						t: "A병원이 매출을 상승시킬 수 있었던 이유는 여러 가지가 있었는데요.",
						k: 0,
					},
				],
				align: "center",
				id: 72,
			},
			{
				type: "p",
				runs: [
					{
						t: "아무리 광고가 잘 되어 있다 한들 환자들이 내원하여 받는 서비스에 문제가 있다면",
						k: 0,
					},
				],
				align: "center",
				id: 73,
			},
			{
				type: "p",
				runs: [
					{
						t: "오랜 시간 잘 유지되기가 어려웠을 겁니다.",
						k: 0,
					},
				],
				align: "center",
				id: 74,
			},
			{
				type: "p",
				runs: [
					{
						t: "해당 병원은 당연히 실력이 좋은 건 물론 의료 서비스 의 수준 또한 매우 높았습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 75,
			},
			{
				type: "p",
				runs: [
					{
						t: "그리고 저희가 진행 하는 광고에 대해서도 적극적인 피드백을 해주시며, 아이디어를 내 주셨습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 76,
			},
			{
				type: "p",
				runs: [
					{
						t: "광고 회사가 아무리 광고를 잘 한다 하더라도, 병원 내부에서 함께 하지 않는다면",
						k: 0,
					},
				],
				align: "center",
				id: 77,
			},
			{
				type: "p",
				runs: [
					{
						t: "결과가 좋을 수 없다고 생각 합니다.",
						k: 0,
					},
				],
				align: "center",
				id: 78,
			},
			{
				type: "img",
				src: "/images/cases/167311286/7.png",
				w: 373,
				h: 837,
				alt: "병의원마케팅잘하는곳",
				id: 79,
			},
			{
				type: "p",
				runs: [
					{
						t: "A병원은 팀장 님을 통하여 수시로 소통을 하였고",
						k: 0,
					},
				],
				align: "center",
				id: 80,
			},
			{
				type: "p",
				runs: [
					{
						t: "더 나은 방향으로 광고를 진행 할 수 있게 꾸준히 상의를 하였습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 81,
			},
			{
				type: "p",
				runs: [
					{
						t: "아무래도 원내에 상주하시는 분이라 현장에서 생기는 많은 아이디어들을 가지고 계셨습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 82,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희 애드리절트에서는 고객사와 함께 해야만 성공 할 수 있다는 것을 잘 알고 있습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 83,
			},
			{
				type: "p",
				runs: [
					{
						t: "그래서 원장님들께",
						k: 0,
					},
					{
						t: ' "나는 돈 냈으니 알아서 광고 회사가 광고해라"',
						b: true,
						k: 1,
					},
				],
				align: "center",
				id: 84,
			},
			{
				type: "p",
				runs: [
					{
						t: "라는 마인드를 가지고 계신다면 진행하기 어렵다고 말씀을 드립니다.",
						k: 0,
					},
				],
				align: "center",
				id: 85,
			},
			{
				type: "p",
				runs: [
					{
						t: "원장님이 힘드시다면 팀장, 실장을 시켜서라도 광고에 참여 해 주셔야 뛰어난 효과를 보실 수 있습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 86,
			},
			{
				type: "p",
				runs: [
					{
						t: "오늘은 A병원의 성공사례를 토대로 이야기를 해보았는데요.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 87,
			},
			{
				type: "p",
				runs: [
					{
						t: "만약 우리 병원을 알려 매출을 올리고 싶은데, 어떻게 해야 할지 모르겠다",
						k: 0,
					},
				],
				align: "center",
				id: 88,
			},
			{
				type: "p",
				runs: [
					{
						t: "하시는 분들은 저희 애드리절트와 함께 해보시는 것도 괜찮으실 겁니다.",
						k: 0,
					},
				],
				align: "center",
				id: 89,
			},
			{
				type: "p",
				runs: [
					{
						t: "이상 긴 글을 읽어 주셔서 감사하고, 다음에는 다른 성공사례를 들고 찾아뵙도록 하겠습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 90,
			},
			{
				type: "video",
				videoId: "LUOMWRGvTkk",
				id: 91,
			},
		],
	},
	{
		slug: "167310045",
		title: "[부산정형외과 병원마케팅] 마케팅 후 40%나 증가한 환자",
		excerpt:
			"애드리절트와 광고를 시작한 부산의 B정형외과는 마케팅을 시작한 이후, 환자 수가 약 40% 증가하는 성과를 얻었습니다. 애드리절트는 환자가 병원을 찾기 위해 검색을 할 때, 우리 병원의 정보가 노출되도록 하는 방식으로 마케팅을 진행합니다. 환자가 병원을 찾을 때 검색하는 단어 즉 키워드",
		summary:
			"부산 B정형외과는 애드리절트와 광고를 시작한 뒤 환자가 약 40% 늘었습니다. 광고 첫 달 15명이던 내원이 5개월 차에 51명으로 증가했고, 환자가 검색하는 수백 개 키워드에 병원이 노출되도록 관리했습니다.",
		faq: [
			{
				q: "부산 B정형외과는 얼마나 늘었나요?",
				a: "광고 첫 달(6월) 약 15명이던 내원 환자가 5개월 차(10월)에 51명으로 늘며 약 40% 증가했습니다.",
			},
			{
				q: "어떻게 환자를 늘렸나요?",
				a: "환자가 병원을 찾을 때 검색하는 수십~수백 개의 키워드에 병원이 노출되도록 하고, 매주 통계 자료로 실제 내원 효과를 측정해 전략에 반영했습니다.",
			},
			{
				q: "메디컬 패키지가 무엇인가요?",
				a: "환자가 병원을 찾는 경로를 분석해 만든 상품으로, 잠재 환자에게 병원을 알리는 '기본'을 지키며 광고를 진행하는 방식입니다.",
			},
		],
		cover: "/images/cases/167310045/2.png",
		coverW: 428,
		coverH: 648,
		blocks: [
			{
				type: "p",
				runs: [
					{
						t: "애드리절트와 광고를 시작한 부산의 B정형외과는 마케팅을 시작한 이후, 환자 수가 약 40% 증가하는 성과를 얻었습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 0,
			},
			{
				type: "p",
				runs: [
					{
						t: "애드리절트는 환자가 병원을 찾기 위해 검색을 할 때, 우리 병원의 정보가 노출되도록 하는 방식으로 마케팅을 진행합니다.",
						k: 0,
					},
				],
				align: "center",
				id: 1,
			},
			{
				type: "p",
				runs: [
					{
						t: "환자가 병원을 찾을 때 검색하는 단어 즉 키워드는 수십~수백 개 정도에 달 합니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 2,
			},
			{
				type: "p",
				runs: [
					{
						t: "이렇게 많은 키워드에 우리 병원이 노출이 된다면, 환자의 내원을 기대할 수 있습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 3,
			},
			{
				type: "p",
				runs: [
					{
						t: "많은 키워드에 노출되는 것은 그만큼 많은 환자 분들에게 우리 병원을 알릴 수 있다는 말이 됩니다.",
						k: 0,
					},
				],
				align: "center",
				id: 4,
			},
			{
				type: "img",
				src: "/images/cases/167310045/1.png",
				w: 375,
				h: 443,
				alt: "정형외과마케팅",
				id: 5,
			},
			{
				type: "p",
				runs: [
					{
						t: "병원마케팅에서 중요한 것은",
						k: 0,
					},
					{
						t: " 인터넷 검색을 통하여 얼마나 환자가 내원하였는가? ",
						b: true,
						c: "#ff0000",
						k: 1,
					},
					{
						t: "입니다.",
						k: 2,
					},
				],
				align: "center",
				gap: true,
				id: 6,
			},
			{
				type: "p",
				runs: [
					{
						t: "애드리절트는 이를 측정하고 전략에 반영하기 위해 매주 통계 자료를 요청드리고 있으며,",
						k: 0,
					},
				],
				align: "center",
				id: 7,
			},
			{
				type: "p",
				runs: [
					{
						t: "해당 자료를 바탕으로 더욱 효율적인 마케팅 전략을 세우고 실행 중에 있습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 8,
			},
			{
				type: "img",
				src: "/images/cases/167310045/2.png",
				w: 428,
				h: 648,
				alt: "정형외과블로그",
				id: 9,
			},
			{
				type: "p",
				runs: [
					{
						t: "병원마케팅을 진행 중인 해당 병원의 경우 6월에 광고를 시작하였습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 10,
			},
			{
				type: "p",
				runs: [
					{
						t: "광고 첫 달이었던 6월에는 15명 정도가 내원하였고",
						k: 0,
					},
				],
				align: "center",
				id: 11,
			},
			{
				type: "p",
				runs: [
					{
						t: "5개월 차가 된 10월에는 51명이 내원하며 약 40% 환자가 증가 하였습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 12,
			},
			{
				type: "img",
				src: "/images/cases/167310045/3.png",
				w: 617,
				h: 751,
				alt: "정형외과개원",
				id: 13,
			},
			{
				type: "p",
				runs: [
					{
						t: "해당 병원의 3개월 이후 키워드 노출표의 일부입니다.",
						k: 0,
					},
				],
				align: "center",
				id: 14,
			},
			{
				type: "p",
				runs: [
					{
						t: "점차 키워드의 노출도가 채워지며 환자의 유입도 함께 증가하고 있습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 15,
			},
			{
				type: "img",
				src: "/images/cases/167310045/4.png",
				w: 966,
				h: 557,
				alt: "정형외과마케팅",
				id: 16,
			},
			{
				type: "p",
				runs: [
					{
						t: "병원마케팅에서 가장 중요한 것은 바로 <기본을 지키는 것> 입니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 17,
			},
			{
				type: "p",
				runs: [
					{
						t: "여기서의 기본은, ",
						k: 0,
					},
					{
						t: "내 잠재고객에게 우리 병원을 알리는 것",
						b: true,
						k: 1,
					},
					{
						t: "입니다.",
						k: 2,
					},
				],
				align: "center",
				id: 18,
			},
			{
				type: "p",
				runs: [
					{
						t: "애드리절트는 환자가 병원을 찾는 경로를 분석하여 만들어진 <메디컬패키지>로",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 19,
			},
			{
				type: "p",
				runs: [
					{
						t: "이 기본을 지키며 광고를 진행하고 있습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 20,
			},
			{
				type: "video",
				videoId: "zOm8czcqXhc",
				id: 21,
			},
			{
				type: "p",
				runs: [
					{
						t: "2015년부터 진행해 온 <메디컬패키지>의 전략은 현재 많은 광고대행사 및 실행사들에게 교육을 하며 성공적인 결과를 만들고 있습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 22,
			},
			{
				type: "p",
				runs: [
					{
						t: "인터넷에 무엇을 검색하든 우리 병원이 보여질 수 있도록 꾸준하고 체계적인 관리를 진행 중인",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 23,
			},
			{
				type: "p",
				runs: [
					{
						t: "애드리절트와 함께 마케팅 해 보시는 건 어떨까요?",
						k: 0,
					},
				],
				align: "center",
				id: 24,
			},
			{
				type: "p",
				runs: [
					{
						t: "긴 글 읽어 주셔서 감사하고, 다음에는 또 다른 성공사례로 찾아 뵙겠습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 25,
			},
			{
				type: "img",
				src: "/images/cases/167310045/5.png",
				w: 740,
				h: 640,
				alt: "정형외과홍보",
				id: 26,
			},
		],
	},
	{
		slug: "167309357",
		title: "[수원병원마케팅] 환자가 60% 증가한 비결?",
		excerpt:
			"수원마케팅, 애드리절트를 만나고 3개월 후 어떻게 변했을까? 다른 광고회사와 약 1년 가까이 브랜드 블로그를 활용하여 수원병원마케팅을 진행 해 보신 경험이 있는 A병원 원장님의 피드백 입니다. 애드리절트와 함께하고 약 3개월이 지난 시점에 효과를 체감하셨다고 피드백을 주셨습니다. 이후로",
		summary:
			"다른 광고사와 1년을 진행했던 수원 A병원이 애드리절트로 옮긴 뒤 3개월 만에 효과를 체감했습니다. 노출 키워드가 24개에서 94개로 늘며 환자가 60~70% 증가했고, 940만 원 상당의 노출을 인건비 수준 비용으로 확보했습니다.",
		faq: [
			{
				q: "수원 A병원은 얼마나 효과를 봤나요?",
				a: "애드리절트와 3개월 만에 효과를 체감했고, 이전 대비 환자가 60~70% 증가했습니다. 새로 생긴 입원실 문의는 물론 일반 치료 환자도 함께 늘었습니다.",
			},
			{
				q: "노출 키워드는 얼마나 늘었나요?",
				a: "개원 초 약 24개 키워드가 노출되던 것이 10개월 차에는 94개까지 늘었습니다. 키워드당 보장형 상품(최소 10만 원)으로 환산하면 약 940만 원 상당을, 팀장 1명 인건비 수준 비용으로 확보한 셈입니다.",
			},
			{
				q: "애드리절트는 어떤 방식으로 노출을 늘리나요?",
				a: "특정 키워드를 보장하는 방식이 아니라, 잠재 환자가 실제로 검색하는 유의미한 키워드를 많이 발굴해 브랜드 블로그로 노출시키는 방식(메디컬 패키지)으로 진행합니다.",
			},
		],
		cover: "/images/cases/167309357/1.png",
		coverW: 966,
		coverH: 775,
		blocks: [
			{
				type: "p",
				runs: [
					{
						t: "수원마케팅, 애드리절트를 만나고 3개월 후 어떻게 변했을까?",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 0,
			},
			{
				type: "img",
				src: "/images/cases/167309357/1.png",
				w: 966,
				h: 775,
				alt: "병원홍보전문",
				id: 1,
			},
			{
				type: "callout",
				runs: [
					{
						t: "병원마케팅 효과, 이전에 대비해서 60~70% 증가",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 2,
			},
			{
				type: "img",
				src: "/images/cases/167309357/2.png",
				w: 370,
				h: 320,
				alt: "616c1e18561b5.png",
				id: 3,
			},
			{
				type: "p",
				runs: [
					{
						t: "다른 광고회사와 약 1년 가까이 브랜드 블로그를 활용하여 수원병원마케팅을 진행 해 보신 경험이 있는",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 4,
			},
			{
				type: "p",
				runs: [
					{
						t: "A병원 원장님의 피드백 입니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 5,
			},
			{
				type: "p",
				runs: [
					{
						t: "애드리절트와 함께하고 약 3개월이 지난 시점에 효과를 체감",
						c: "#ff0000",
						fs: 18,
						k: 0,
					},
					{
						t: "하셨다고 피드백을 주셨습니다.",
						fs: 18,
						k: 1,
					},
				],
				align: "center",
				id: 6,
			},
			{
				type: "p",
				runs: [
					{
						t: "📌",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 7,
			},
			{
				type: "h",
				runs: [
					{
						t: "애드리절트에 광고를 문의할 당시 입원실이 새로 생겼었기 때문에, 입원실을 채우는 것이 첫 목표였는데요.",
						b: true,
						c: "#ff0000",
						fs: 20,
						k: 0,
					},
				],
				align: "center",
				id: 8,
			},
			{
				type: "h",
				runs: [
					{
						t: "애드리절트와 광고를 진행 한 이후 입원 문의는 물론, 일반 치료 환자들도 증가했습니다.",
						b: true,
						c: "#ff0000",
						fs: 20,
						k: 0,
					},
				],
				align: "center",
				id: 9,
			},
			{
				type: "p",
				runs: [
					{
						t: "이후로도 환자 수가 꾸준히 증가 하며, 이제는 해당 분과에서 수원의 대표적인 병원으로 자리 잡게 되었습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 10,
			},
			{
				type: "p",
				runs: [
					{
						t: "개원 초기 에는 전체 키워드 중 약 24개 정도만 노출되고 있었고,",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 11,
			},
			{
				type: "p",
				runs: [
					{
						t: "10개월 차에는 무려 94개의 키워드가 노출 되고 있었습니다",
						k: 0,
					},
				],
				align: "center",
				id: 12,
			},
			{
				type: "p",
				runs: [
					{
						t: "94개 키워드 x 100,000 = 9,400,000원",
						c: "#ff0000",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 13,
			},
			{
				type: "p",
				runs: [
					{
						t: "병원마케팅 시 키워드 하나를 통합 VIEW 영역에 노출을 보장하는 상품으로 진행할 경우",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 14,
			},
			{
				type: "p",
				runs: [
					{
						t: "아주 최소로 잡아도 10만원 정도입니다.",
						k: 0,
					},
				],
				align: "center",
				id: 15,
			},
			{
				type: "p",
				runs: [
					{
						t: "94개의 키워드를 노출 시키고자 한다면 940만원이 발생 하겠죠.",
						k: 0,
					},
				],
				align: "center",
				id: 16,
			},
			{
				type: "p",
				runs: [
					{
						t: "A병원 원장님은 애드리절트와 팀장 1명의 인건비 정도로 비용을 절약하며 효과를 보고 계십니다.",
						bg: "#ffe599",
						k: 0,
					},
				],
				align: "center",
				id: 17,
			},
			{
				type: "img",
				src: "/images/cases/167309357/3.png",
				w: 882,
				h: 490,
				alt: "병원광고잘하는곳",
				id: 18,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희 애드리절트에서는 특정 키워드를 보장하는 형태가 아닌,",
						k: 0,
					},
				],
				align: "center",
				id: 19,
			},
			{
				type: "p",
				runs: [
					{
						t: "해당 병원을 갈 만한 잠재적 고객들이 찾는 유의미한 키워드를 많이 뽑아,",
						k: 0,
					},
				],
				align: "center",
				id: 20,
			},
			{
				type: "p",
				runs: [
					{
						t: "노출되게 하는 방법으로 브랜드 블로그를 운영 중에 있습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 21,
			},
			{
				type: "img",
				src: "/images/cases/167309357/4.png",
				w: 1167,
				h: 648,
				alt: "의료마케팅회사",
				id: 22,
			},
			{
				type: "p",
				runs: [
					{
						t: "그래서 시간이 지나갈수록 압도적인 노출도를 확인해 보실 수 있습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 23,
			},
			{
				type: "callout",
				runs: [
					{
						t: "병원마케팅 매출공식 = 잠재고객이 검색하는 유의미한 키워드 x 콘텐츠 x 노출",
						b: true,
						bg: "#f3f3f3",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 24,
			},
			{
				type: "p",
				runs: [
					{
						t: "잠재고객이 병원을 가기 위해 검색했을 때, 우리 병원이 보이게 하는 것은 모든 병원마케팅의 기본입니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 25,
			},
			{
				type: "h",
				runs: [
					{
						t: "애드리절트는 이 기본을 가장 잘하는 회사입니다.",
						b: true,
						u: true,
						c: "#ff0000",
						fs: 22,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 26,
			},
			{
				type: "hr",
				id: 27,
			},
			{
				type: "p",
				runs: [
					{
						t: "기본을 지킨다는 것은 결코 쉬운 일이 아닙니다. 실제 환자들이 검색하는 키워드를 빠르게 파악하는 능력과,",
						k: 0,
					},
				],
				align: "center",
				id: 28,
			},
			{
				type: "p",
				runs: [
					{
						t: "그 키워드를 효과적으로 노출시킬 수 있는 능력이 필요합니다.",
						k: 0,
					},
				],
				align: "center",
				id: 29,
			},
			{
				type: "p",
				runs: [
					{
						t: "하지만 아무리 애드리절트가 뛰어난 마케터라 하더라도 원장님의 의학적 전문성을 따라갈 수는 없기 때문에,",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 30,
			},
			{
				type: "p",
				runs: [
					{
						t: "콘텐츠는 원장님과 함께 만들어가는 것이 가장 효과적입니다.",
						k: 0,
					},
				],
				align: "center",
				id: 31,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희의 이러한 노하우는 <메디컬패키지>라는 병원 맞춤 상품으로 구현됩니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 32,
			},
			{
				type: "img",
				src: "/images/cases/167309357/5.png",
				w: 966,
				h: 639,
				alt: "병원광고효과좋은사례",
				id: 33,
			},
			{
				type: "p",
				runs: [
					{
						t: "( [A병원의 광고] 광고 첫 달, 광고 10개월 차 의 노출도 변화, 네이버 통합 에서 키워드 검색 시 VIEW 영역 첫 페이지 노출 )",
						k: 0,
					},
				],
				align: "center",
				id: 34,
			},
			{
				type: "img",
				src: "/images/cases/167309357/6.png",
				w: 726,
				h: 814,
				alt: "병원마케팅비교분석",
				id: 35,
			},
			{
				type: "p",
				runs: [
					{
						t: "A병원은 2021년 12월부터 진행하여 11개월째 애드리절트와 함께하고 있습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 36,
			},
		],
	},
	{
		slug: "167308882",
		title: "[신경외과마케팅 성공사례] 광고 효과에 너무 만족해서 지인 2분을 소개 시켜주신 원장님",
		excerpt:
			'최근 광고를 진행하며 소개를 많이 받고 있는데요, 광고 진행 중 애드리절트에 만족을 해주셔서 감사하게도 지인 원장님 2분을 소개 해 주신 원장님이 계십니다. 정말로 감사해서 "더욱 열심히 해야겠다"라는 의지가 넘쳐 나고 있는데요~ 이번 글에서는 저희가 어떻게 신경외과 마케팅 광고를 진행',
		summary:
			"키워드 경쟁이 치열한 신경외과에서 세부 키워드 노출을 정비·유지하고 한발 앞서 제안하는 관리로, 원장님이 지인 원장 2분을 직접 소개할 만큼 만족한 사례입니다. 블로그·유튜브·방송에서 골고루 문의가 들어옵니다.",
		faq: [
			{
				q: "원장님이 왜 지인을 소개했나요?",
				a: "광고 결과와 애드리절트의 업무 방식(빠른 제안·체계적 관리)에 만족해, 학회·논문에 열정적인 원장님이 지인 원장 2분을 직접 소개해 주셨습니다.",
			},
			{
				q: "경쟁이 치열한데 어떻게 노출을 확보했나요?",
				a: "병원에 도움이 될 키워드를 계속 정비(추가·제외)하고 세부 키워드 노출도를 수시로 관리해 유지했습니다.",
			},
			{
				q: "어떤 채널로 광고했나요?",
				a: "블로그·유튜브·방송을 주력으로 진행했고, 광고한 채널 전반에서 골고루 문의가 들어온다는 피드백을 받았습니다.",
			},
		],
		cover: "/images/cases/167308882/1.jpg",
		coverW: 508,
		coverH: 149,
		blocks: [
			{
				type: "callout",
				runs: [
					{
						t: "광고 진행 중 너무 만족하셔서 지인 2명을 소개 시켜주신 원장님",
						k: 0,
					},
				],
				align: "center",
				id: 0,
			},
			{
				type: "img",
				src: "/images/cases/167308882/1.jpg",
				w: 508,
				h: 149,
				alt: "병원광고실적좋은업체",
				id: 1,
			},
			{
				type: "p",
				runs: [
					{
						t: "최근 광고를 진행하며 소개를 많이 받고 있는데요,",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 2,
			},
			{
				type: "p",
				runs: [
					{
						t: "광고 진행 중 애드리절트에 만족을 해주셔서 감사하게도",
						k: 0,
					},
					{
						t: " 지인 원장님 2분을 소개",
						b: true,
						k: 1,
					},
					{
						t: " 해 주신 원장님이 계십니다.",
						k: 2,
					},
				],
				align: "center",
				id: 3,
			},
			{
				type: "p",
				runs: [
					{
						t: '정말로 감사해서 "더욱 열심히 해야겠다"라는 의지가 넘쳐 나고 있는데요~',
						k: 0,
					},
				],
				align: "center",
				id: 4,
			},
			{
				type: "p",
				runs: [
					{
						t: "이번 글에서는 저희가 어떻게 신경외과 마케팅 광고를 진행하였는지",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 5,
			},
			{
				type: "p",
				runs: [
					{
						t: "성공사례와 더불어 왜 2명의 지인을 소개시켜 주게 되었는지 알려드리도록 하겠습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 6,
			},
			{
				type: "p",
				runs: [
					{
						t: "수시로 학회에도 참여하시고, 논문 발표에도 열정적이신 원장님이셔서",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 7,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희에게 조금이라도 불만이 있었다면 아마 선뜻 소개하기가 망설여지셨을 텐데,",
						k: 0,
					},
				],
				align: "center",
				id: 8,
			},
			{
				type: "p",
				runs: [
					{
						t: "감사하게도 소개를 해주신 걸 보니 애드리절트의 업무 방식이나 결과가 만족스러우셨던 것 같습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 9,
			},
			{
				type: "img",
				src: "/images/cases/167308882/2.png",
				w: 336,
				h: 445,
				alt: "병원마케팅대행사추천후기",
				id: 10,
			},
			{
				type: "p",
				runs: [
					{
						t: "고객사에게 긍정정인 피드백을 받는 것,",
						b: true,
						c: "#ff0000",
						k: 0,
					},
					{
						t: " 저희 애드리절트의 첫 번째 목표입니다.",
						k: 1,
					},
				],
				align: "center",
				gap: true,
				id: 11,
			},
			{
				type: "p",
				runs: [
					{
						t: "때문에 고객사와 애드리절트 간의 신뢰를 매우 중요하게 생각하는데요.",
						k: 0,
					},
				],
				align: "center",
				id: 12,
			},
			{
				type: "p",
				runs: [
					{
						t: "고객사에게 신뢰와 믿음을 주기 위해 매주 회의를 하고 여러 제안을 드리며 최선을 다하는 중입니다.",
						k: 0,
					},
				],
				align: "center",
				id: 13,
			},
			{
				type: "p",
				runs: [
					{
						t: "해당 병원의 경우 키워드 경쟁이 정말 치열한 병원이었습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 14,
			},
			{
				type: "p",
				runs: [
					{
						t: "그래서 ",
						k: 0,
					},
					{
						t: "병원에 도움이 될 만한 키워드들을 다시 정비",
						c: "#ff0000",
						k: 1,
					},
					{
						t: " 하고, 추가도 해 보고 빼 보기도 하며 세팅을 해 갔습니다.",
						k: 2,
					},
				],
				align: "center",
				id: 15,
			},
			{
				type: "p",
				runs: [
					{
						t: "그 과정에서 세부 키워드 노출이 잘 되고 노출도를 유지시킬 수 있도록",
						k: 0,
					},
				],
				align: "center",
				id: 16,
			},
			{
				type: "p",
				runs: [
					{
						t: "수시로 신경을 써 좋은 결과물을 만들어 낼 수 있었습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 17,
			},
			{
				type: "img",
				src: "/images/cases/167308882/3.jpg",
				w: 584,
				h: 463,
				alt: "전국병원마케팅전문",
				id: 18,
			},
			{
				type: "p",
				runs: [
					{
						t: "그리고 추가로 키워드 뿐 만 아니라 ",
						k: 0,
					},
					{
						t: "병원에 도움이 될 만한 정보를 찾아 공유",
						c: "#ff0000",
						k: 1,
					},
					{
						t: "를 드렸습니다.",
						k: 2,
					},
				],
				align: "center",
				id: 19,
			},
			{
				type: "p",
				runs: [
					{
						t: "매번 이렇게 제안을 드리고, 수정이 필요한 부분이 있으면 빠르게 다시 세팅을 해드리다 보니",
						k: 0,
					},
				],
				align: "center",
				id: 20,
			},
			{
				type: "p",
				runs: [
					{
						t: "만족도가 높으셨던 것 같습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 21,
			},
			{
				type: "img",
				src: "/images/cases/167308882/4.png",
				w: 966,
				h: 473,
				alt: "의료광고법위반없는마케팅",
				id: 22,
			},
			{
				type: "p",
				runs: [
					{
						t: "또한 업무 시스템이 잘 정비되어 있어 체계적으로 업무가 진행되다 보니,",
						k: 0,
					},
				],
				align: "center",
				id: 23,
			},
			{
				type: "p",
				runs: [
					{
						t: "‘광고는 언제 올라오나요?’, ‘진행 일정은 어떻게 되나요?’",
						c: "#ff0000",
						k: 0,
					},
				],
				align: "center",
				id: 24,
			},
			{
				type: "p",
				runs: [
					{
						t: "같은 질문을 하며 기다리지 않아도 되어서 좋다는 피드백을 받았습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 25,
			},
			{
				type: "p",
				runs: [
					{
						t: "또한, 애드리절트 직원들이 유용한 정보를 지속적으로 수집하고 공유하며,",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 26,
			},
			{
				type: "p",
				runs: [
					{
						t: "체계적인 프로세스를 기반으로 고객사가 기다리기 전에 한발 앞서 업무를 처리하고 이슈도 관리하고 있어,",
						k: 0,
					},
				],
				align: "center",
				id: 27,
			},
			{
				type: "p",
				runs: [
					{
						t: "고객사들로부터 더욱 신뢰를 얻고 있는 것 같습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 28,
			},
			{
				type: "callout",
				runs: [
					{
						t: "그렇다면 결과적으로 해당 병원은 환자들이 많이 늘었을까요?",
						fs: 20,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 29,
			},
			{
				type: "img",
				src: "/images/cases/167308882/5.png",
				w: 321,
				h: 276,
				alt: "병원광고불법사례피하는법",
				id: 30,
			},
			{
				type: "p",
				runs: [
					{
						t: "해당 병원은 블로그와 유튜브, 방송 쪽을 주력으로 광고를 하고 있는데",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 31,
			},
			{
				type: "p",
				runs: [
					{
						t: "실제로 여쭤보니 다행히도 광고하는 대로 골고루 문의가 온다고 하십니다.",
						k: 0,
					},
				],
				align: "center",
				id: 32,
			},
			{
				type: "p",
				runs: [
					{
						t: "자세한 내용은 아래 영상을 시청해 주시면 감사하겠습니다. ^^",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 33,
			},
			{
				type: "img",
				src: "/images/cases/167308882/6.png",
				w: 370,
				h: 320,
				alt: "e4102f4f820dc.png",
				id: 34,
			},
			{
				type: "video",
				videoId: "OOP5Uxh490U",
				id: 35,
			},
		],
	},
	{
		slug: "167296385",
		title: '[한의원마케팅 성공사례] 원장님의 수기 만족도 평가 "확실히 신환유입이 늘었다"',
		excerpt:
			'저희가 진행했던 설문조사에 이런 답변을 수기로 해주신 원장님이 계신데요. 저희와 함께하는 고객사들의 소리를 듣고자 진행하였던 고객 만족도 설문조사에 정말 많은 분들이 참여해 주셨습니다. 오늘은은 그 중 하나인 한의원광고 성공사례와 함께 "한의원 광고를 하며 성과를 낼 수 있었던 비결 2',
		summary:
			"지인 소개로 시작한 한의원이 신도시 이전 후 신환 유입이 확실히 늘었습니다. 156개 세부 키워드로 노출도 80%를 점유하고 의료법을 지킨 콘텐츠로, 2019년부터 3년 넘게 함께하고 있습니다.",
		faq: [
			{
				q: "한의원 광고 성공 비결은 무엇이었나요?",
				a: "환자가 어떤 키워드로 검색하든 노출되도록 156개 세부 키워드를 집중 관리(노출도 약 80%)하고, 매년 개정되는 의료법을 지킨 콘텐츠를 제작한 두 가지가 핵심이었습니다.",
			},
			{
				q: "얼마나 오래 함께했나요?",
				a: "2019년 10월 첫 계약 이후 3년 넘게 지속하고 있으며, 원장님은 '지금처럼만 해 달라'는 피드백을 주셨습니다.",
			},
			{
				q: "세부 키워드 관리가 왜 중요한가요?",
				a: "환자는 '00 목통증'·'00 교통사고한의원'처럼 다양한 세부 키워드로 검색하기 때문에, 어떤 검색어에도 병원이 노출돼야 신환 유입이 늘어납니다.",
			},
		],
		cover: "/images/cases/167296385/1.png",
		coverW: 934,
		coverH: 187,
		blocks: [
			{
				type: "video",
				videoId: "qMgI0cu_yrc",
				id: 0,
			},
			{
				type: "callout",
				runs: [
					{
						t: '"타 지역 한의원 운영중인 지인의 소개로 애드리절트를 알게 되어 진행했습니다.확실히 신환 유입이 늘었다고 하셔서요."',
						c: "#ff0000",
						fs: 20,
						bg: "#f3f3f3",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 1,
			},
			{
				type: "img",
				src: "/images/cases/167296385/1.png",
				w: 934,
				h: 187,
				alt: "한의원마케팅",
				id: 2,
			},
			{
				type: "callout",
				runs: [
					{
						t: "한의원마케팅 진행 전후 차이는 확실하다.",
						c: "#ff0000",
						fs: 20,
						bg: "#f3f3f3",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 3,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희가 진행했던 설문조사에 이런 답변을 수기로 해주신 원장님이 계신데요.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 4,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희와 함께하는 고객사들의 소리를 듣고자 진행하였던 고객 만족도 설문조사에 정말 많은 분들이 참여해 주셨습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 5,
			},
			{
				type: "p",
				runs: [
					{
						t: "오늘은은 그 중 하나인",
						k: 0,
					},
					{
						t: " 한의원광고 성공사례",
						c: "#ff0000",
						k: 1,
					},
					{
						t: "와 함께",
						k: 2,
					},
				],
				align: "center",
				gap: true,
				id: 6,
			},
			{
				type: "p",
				runs: [
					{
						t: '"한의원 광고를 하며 성과를 낼 수 있었던 비결 2가지"',
						c: "#ff0000",
						k: 0,
					},
					{
						t: "에 대한 이야기를 풀어볼까 합니다.",
						k: 1,
					},
				],
				align: "center",
				id: 7,
			},
			{
				type: "img",
				src: "/images/cases/167296385/2.png",
				w: 787,
				h: 771,
				alt: "한의원블로그",
				id: 8,
			},
			{
				type: "p",
				runs: [
					{
						t: "해당 한의원의 첫 계약은 2019년 10월 이였고",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 9,
			},
			{
				type: "img",
				src: "/images/cases/167296385/3.png",
				w: 762,
				h: 282,
				alt: "한의원광고",
				id: 10,
			},
			{
				type: "p",
				runs: [
					{
						t: "2022년이 된 현재까지 저희와 함께 한의원 광고를 진행 하고 있습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 11,
			},
			{
				type: "p",
				runs: [
					{
						t: "(하단 영상 당시 2022년, 2025년 현재까지 진행 중)",
						k: 0,
					},
				],
				align: "center",
				id: 12,
			},
			{
				type: "p",
				runs: [
					{
						t: "어떤 점 때문에 저희랑 3년이라는 긴 시간 동안 함께 하게 되었는지 한 번 보시죠.",
						k: 0,
					},
				],
				align: "center",
				id: 13,
			},
			{
				type: "img",
				src: "/images/cases/167296385/4.png",
				w: 966,
				h: 193,
				alt: "한의원홍보",
				id: 14,
			},
			{
				type: "p",
				runs: [
					{
						t: "먼저 이번 이야기의 주인공이신 원장님에 대하여 살짝 이야기하자면, 해당 원장님은 마케팅을 해 본 경험이 없는 원장님이셨습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 15,
			},
			{
				type: "p",
				runs: [
					{
						t: "원래는 타 지역에서 약 15년 정도 되는 긴 시간 동안 병원을 운영하셨는데요.",
						k: 0,
					},
				],
				align: "center",
				id: 16,
			},
			{
				type: "p",
				runs: [
					{
						t: "그러다 19년도가 된 해에 한의원을 해당 신도시로 확장 이전하시게 되었습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 17,
			},
			{
				type: "p",
				runs: [
					{
						t: "긴 시간 동안 병원을 운영하며 이전 지역에서 만큼은 이미 소문이 자자했던 분이셔서,",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 18,
			},
			{
				type: "p",
				runs: [
					{
						t: "19년도 당시에 확장 이전한 신도시까지 찾아오시는 단골 분들도 계셨다고 하셨습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 19,
			},
			{
				type: "p",
				runs: [
					{
						t: "그리고 원장님께서는 새로 이전한 신도시에서의 입지를 더 굳히기 위해 마케팅을 고민하던 중",
						k: 0,
					},
				],
				align: "center",
				id: 20,
			},
			{
				type: "p",
				runs: [
					{
						t: "지인의 소개로 저희 애드리절트를 찾아 주셨습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 21,
			},
			{
				type: "h",
				runs: [
					{
						t: "-한의원마케팅 광고를 성공시킨 애드리절트의 비결 2가지-",
						b: true,
						fs: 22,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 22,
			},
			{
				type: "hr",
				id: 23,
			},
			{
				type: "p",
				runs: [
					{
						t: "지금부터 저희 애드리절트가 해당 병원의 광고를 성공시킨 비결 2가지를 말씀드리도록 하겠습니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 24,
			},
			{
				type: "h",
				runs: [
					{
						t: "1.세부 키워드에 대한 집중관리!",
						b: true,
						c: "#ff0000",
						fs: 20,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 25,
			},
			{
				type: "p",
				runs: [
					{
						t: "환자들이 병원을 오게 만들 때 해당 병원이 있다는 것을 환자들이 아는 것 입니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 26,
			},
			{
				type: "p",
				runs: [
					{
						t: "아무리 시설이 좋고 원장님의 실력이 좋으셔도 환자가 병원을 모르면 가고 싶어도 못 가니까요 ^^",
						k: 0,
					},
				],
				align: "center",
				id: 27,
			},
			{
				type: "img",
				src: "/images/cases/167296385/5.png",
				w: 559,
				h: 751,
				alt: "한의원블로그마케팅",
				id: 28,
			},
			{
				type: "p",
				runs: [
					{
						t: "현제 해당 한의원은 약 156개 정도 되는 다양한 세부 키워드로 무려 80% 정도 되는 높은 노출도를 점유하여",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 29,
			},
			{
				type: "p",
				runs: [
					{
						t: "인터넷에 ",
						k: 0,
					},
					{
						t: "어떤 키워드로 검색하든 해당 한의원이 노출되게끔 세팅을 해둔 상태",
						b: true,
						c: "#ff0000",
						k: 1,
					},
					{
						t: "입니다.",
						k: 2,
					},
				],
				align: "center",
				id: 30,
			},
			{
				type: "p",
				runs: [
					{
						t: "물론 처음부터 키워드가 이렇게 많지는 않습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 31,
			},
			{
				type: "p",
				runs: [
					{
						t: "노출도가 쌓여가며 카테고리를 하나 둘 늘려가다 보니",
						k: 0,
					},
				],
				align: "center",
				id: 32,
			},
			{
				type: "p",
				runs: [
					{
						t: "현재에 와서는 약 156개 정도로 키워드 리스트가 많아진 상태입니다.",
						k: 0,
					},
				],
				align: "center",
				id: 33,
			},
			{
				type: "p",
				runs: [
					{
						t: "이렇게 되다 보니 환자 입장에서는 몸이 아파 병원을 가기 전 인터넷에 검색하면",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 34,
			},
			{
				type: "p",
				runs: [
					{
						t: "00 소화불량",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 35,
			},
			{
				type: "p",
				runs: [
					{
						t: "00 한의원",
						k: 0,
					},
				],
				align: "center",
				id: 36,
			},
			{
				type: "p",
				runs: [
					{
						t: "00 교통사고한의원",
						k: 0,
					},
				],
				align: "center",
				id: 37,
			},
			{
				type: "p",
				runs: [
					{
						t: "00 목통증",
						k: 0,
					},
				],
				align: "center",
				id: 38,
			},
			{
				type: "p",
				runs: [
					{
						t: "00 허리통증",
						k: 0,
					},
				],
				align: "center",
				id: 39,
			},
			{
				type: "p",
				runs: [
					{
						t: "00 두통",
						k: 0,
					},
				],
				align: "center",
				id: 40,
			},
			{
				type: "p",
				runs: [
					{
						t: "00 오십견",
						k: 0,
					},
				],
				align: "center",
				id: 41,
			},
			{
				type: "p",
				runs: [
					{
						t: "등등",
						k: 0,
					},
				],
				align: "center",
				id: 42,
			},
			{
				type: "p",
				runs: [
					{
						t: "무엇을 검색하든 해당 한의원이 나오며 실제로도 환자 유입율이 늘게 되었습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 43,
			},
			{
				type: "p",
				runs: [
					{
						t: "그리고 애초에 원장님께서 워낙 실력이 뛰어나기도 하고 서비스와 사후관리까지 깔끔한 병원이었기에",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 44,
			},
			{
				type: "p",
				runs: [
					{
						t: "재방문율 자체가 높아져 점점 병원이 잘될 수 있었습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 45,
			},
			{
				type: "h",
				runs: [
					{
						t: "2. 의료법 준수!",
						b: true,
						c: "#ff0000",
						fs: 22,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 46,
			},
			{
				type: "img",
				src: "/images/cases/167296385/6.png",
				w: 393,
				h: 524,
				alt: "한의원블로그광고",
				id: 47,
			},
			{
				type: "p",
				runs: [
					{
						t: "의료법을 위반 하는 행위는 ",
						k: 0,
					},
					{
						t: "작게는 벌금형, 크게는 병원 운영 정지 처분 까지 받을 수 있는",
						c: "#ff0000",
						k: 1,
					},
					{
						t: " 중요한 사항입니다.",
						k: 2,
					},
				],
				align: "center",
				gap: true,
				id: 48,
			},
			{
				type: "p",
				runs: [
					{
						t: "그래서 사실 병원 광고 가 까다로운 부분이 바로 이",
						k: 0,
					},
					{
						t: " 의료법",
						c: "#ff0000",
						k: 1,
					},
					{
						t: " 때문인데요.",
						k: 2,
					},
				],
				align: "center",
				id: 49,
			},
			{
				type: "p",
				runs: [
					{
						t: "병원 광고 회사를 고르실 때 물론 광고를 잘하는지도 중요하지만 이 ",
						k: 0,
					},
					{
						t: "의료법을 알고 있는지",
						c: "#ff0000",
						k: 1,
					},
					{
						t: "가 가장 중요합니다.",
						k: 2,
					},
				],
				align: "center",
				id: 50,
			},
			{
				type: "p",
				runs: [
					{
						t: "아직도 이를 모른 채 그냥 광고를 진행하는 병원 마케팅 회사가 정말 많으니 잘 알아 보셔야 합니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 51,
			},
			{
				type: "p",
				runs: [
					{
						t: "하지만 저희",
						k: 0,
					},
					{
						t: " ",
						c: "#ff0000",
						k: 1,
					},
					{
						t: "애드리절트는 의료법에 어긋나지 않는 문구를 사용하고자 매년 새로 개정되는 의료법을 공부 및 연구",
						b: true,
						c: "#ff0000",
						k: 2,
					},
					{
						t: "하고 있습니다.",
						k: 3,
					},
				],
				align: "center",
				gap: true,
				id: 52,
			},
			{
				type: "p",
				runs: [
					{
						t: "원장님들의 입장에서는 정말 안심하고 저희에게 의뢰를 하는 수많은 이유 중 하나이죠.",
						k: 0,
					},
				],
				align: "center",
				id: 53,
			},
			{
				type: "img",
				src: "/images/cases/167296385/7.png",
				w: 966,
				h: 212,
				alt: "한의원마케팅",
				id: 54,
			},
			{
				type: "p",
				runs: [
					{
						t: "키워드, 콘텐츠 기획, 세부 키워드 노출이 확실하다 보니 원장님께서 3년째 만족해 하고 계시고,",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 55,
			},
			{
				type: "p",
				runs: [
					{
						t: "마지막으로는",
						k: 0,
					},
					{
						t: " “지금처럼만 해 주시길 부탁합니다” ",
						c: "#ff0000",
						k: 1,
					},
					{
						t: "라는 좋은 한의원마케팅 피드백을 주셨습니다.",
						k: 2,
					},
				],
				align: "center",
				id: 56,
			},
			{
				type: "p",
				runs: [
					{
						t: "마지막으로 여기까지 글을 읽어주신 분들을 위해,",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 57,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희와 함께하시는 또 다른 ",
						k: 0,
					},
					{
						t: "\"한의원 원장님께서 직접 말하는 한의원광고 에서 가장 중요한 1가지가 무엇인지?'",
						c: "#ff0000",
						k: 1,
					},
				],
				align: "center",
				id: 58,
			},
			{
				type: "p",
				runs: [
					{
						t: "도 같이 링크 첨부해 드릴 테니 오늘 글과 함께 보신다면 한의원 광고에 정말 큰 도움을 받아보실 수 있을 겁니다.",
						k: 0,
					},
				],
				align: "center",
				id: 59,
			},
			{
				type: "video",
				videoId: "6W_B0lApZcU",
				id: 60,
			},
			{
				type: "p",
				runs: [
					{
						t: "위 한의원광고 영상을 보시고, 이번 기회에 온라인 뿐만 아니라 내부적으로도",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 61,
			},
			{
				type: "p",
				runs: [
					{
						t: "개선할 부분이 없는지 점검 해보는 좋은 기회가 되셨으면 합니다.",
						k: 0,
					},
				],
				align: "center",
				id: 62,
			},
			{
				type: "p",
				runs: [
					{
						t: "긴 글 읽어 주셔서 감사하고 항상 더 좋은 이야기로 돌아오는 애드리절트가 되겠습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 63,
			},
			{
				type: "img",
				src: "/images/cases/167296385/8.png",
				w: 740,
				h: 640,
				alt: "bf29724d02a54.png",
				id: 64,
			},
		],
	},
	{
		slug: "167284802",
		title: "[안과마케팅 성공사례] 광고 방향에 맞추어 늘어나는 환자",
		excerpt:
			'"다래끼, 건조증으로 광고하니 확실히 일반 환자들이 제일 많이 증가했습니다." "눈통증/이물감/눈충혈 등 을 검색해서 저희 병원에 찾아 오셨다고 하십니다." 위처럼 \'광고 방향에 맞춰 내원하는 환자들이 늘었다.\' 라는 피드백을 주신 안과 광고 마케팅 실장님과 매니저님이 계시는데요. 오늘',
		summary:
			"안과 광고를 다래끼·건조증 등 실제 검색 키워드에 맞춰 진행한 결과, 눈통증·이물감·눈충혈을 검색한 일반 환자 내원이 크게 늘었습니다. 키워드를 37개에서 101개로 확장하며 지역 검색 노출을 장악했습니다.",
		faq: [
			{
				q: "안과마케팅은 어떻게 진행했나요?",
				a: "환자가 실제로 검색하는 키워드(다래끼·건조증·눈통증 등)를 잡아 노출을 장악하고, 환자 심리를 반영한 콘텐츠를 제작하며, 1:1 담당자가 밀착 관리하는 세 가지에 집중했습니다.",
			},
			{
				q: "키워드는 얼마나 확장했나요?",
				a: "처음에는 타겟을 좁혀 37개 키워드로 시작해 2주 만에 노출도 약 35%를 채웠고, 효과를 체감한 뒤 101개로 확장하며 노출을 계속 높였습니다.",
			},
			{
				q: "안과 광고는 지금 시작해도 될까요?",
				a: "안과는 아직 타 진료과에 비해 광고를 진행하는 곳이 많지 않아, 지역 내 상위 노출을 선점하기 좋은 시점입니다.",
			},
		],
		cover: "/images/cases/167284802/1.jpg",
		coverW: 684,
		coverH: 467,
		blocks: [
			{
				type: "video",
				videoId: "3m2tc4mRWKs",
				id: 0,
			},
			{
				type: "img",
				src: "/images/cases/167284802/1.jpg",
				w: 684,
				h: 467,
				alt: "안과광고",
				id: 1,
			},
			{
				type: "p",
				runs: [
					{
						t: '"다래끼, 건조증으로 광고하니 확실히 일반 환자들이 제일 많이 증가했습니다."',
						b: true,
						c: "#ff0000",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 2,
			},
			{
				type: "p",
				runs: [
					{
						t: '"눈통증/이물감/눈충혈 등 을 검색해서 저희 병원에 찾아 오셨다고 하십니다."',
						b: true,
						c: "#ff0000",
						k: 0,
					},
				],
				align: "center",
				id: 3,
			},
			{
				type: "p",
				runs: [
					{
						t: "위처럼 ",
						k: 0,
					},
					{
						t: "'광고 방향에 맞춰 내원하는 환자들이 늘었다.'",
						bg: "#ffff00",
						k: 1,
					},
					{
						t: "",
						k: 2,
					},
				],
				align: "center",
				gap: true,
				id: 4,
			},
			{
				type: "p",
				runs: [
					{
						t: "라는 피드백을 주신 안과 광고 마케팅 실장님과 매니저님이 계시는데요.",
						k: 0,
					},
				],
				align: "center",
				id: 5,
			},
			{
				type: "p",
				runs: [
					{
						t: "오늘 알려드릴 내용은",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 6,
			},
			{
				type: "p",
				runs: [
					{
						t: '"어떻게 안과마케팅 광고를 진행해야 환자가 효과적으로 늘어나는 마케팅을 진행할 수 있는지!"',
						b: true,
						c: "#ff0000",
						k: 0,
					},
				],
				align: "center",
				id: 7,
			},
			{
				type: "p",
				runs: [
					{
						t: "에 대하여 몇 가지 중점 포인트들을 설명해 드리도록 하겠습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 8,
			},
			{
				type: "p",
				runs: [
					{
						t: "설명을 시작하기 전 저희 애드리절트가 진행 중인 상품에 대하여 모르시는 분들이 계신다면",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 9,
			},
			{
				type: "p",
				runs: [
					{
						t: "아래 영상을 시청 하신 후, 설명을 들으시는 것이 이해하는 데 큰 도움이 될 겁니다.",
						k: 0,
					},
				],
				align: "center",
				id: 10,
			},
			{
				type: "video",
				videoId: "zOm8czcqXhc",
				id: 11,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희가 해당 안과 마케팅을 진행하며 가장 중요하게 생각한 3가지 입니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 12,
			},
			{
				type: "p",
				runs: [
					{
						t: "1. 환자들이 병원을 찾는 내원경로 파악&장악",
						b: true,
						fs: 18,
						bg: "#ffff00",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 13,
			},
			{
				type: "p",
				runs: [
					{
						t: "2. 콘텐츠 기획은 환자들의 심리를 파악하여 진행",
						b: true,
						fs: 18,
						bg: "#ffff00",
						k: 0,
					},
				],
				align: "center",
				id: 14,
			},
			{
				type: "p",
				runs: [
					{
						t: "3. 1:1 담당자 매칭으로 빠른 소통과 피드백",
						b: true,
						fs: 18,
						bg: "#ffff00",
						k: 0,
					},
				],
				align: "center",
				id: 15,
			},
			{
				type: "h",
				runs: [
					{
						t: "1. 환자들이 병원을 찾는 내원경로 파악&장악",
						b: true,
						c: "#ff0000",
						fs: 20,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 16,
			},
			{
				type: "hr",
				id: 17,
			},
			{
				type: "img",
				src: "/images/cases/167284802/2.png",
				w: 687,
				h: 751,
				alt: "병원마케팅",
				id: 18,
			},
			{
				type: "p",
				runs: [
					{
						t: "해당 병원의 경우 저희와 처음 광고를 시작하였을 때 ",
						k: 0,
					},
					{
						t: '"우선 타겟층을 적게 잡고 싶다"',
						b: true,
						c: "#ff0000",
						k: 1,
					},
				],
				align: "center",
				gap: true,
				id: 19,
			},
			{
				type: "p",
				runs: [
					{
						t: "라는 코멘트를 남겨 주셔서 37개 정도의 키워드로 시작을 하였고",
						k: 0,
					},
				],
				align: "center",
				id: 20,
			},
			{
				type: "p",
				runs: [
					{
						t: "약 35% 정도의 노출도",
						b: true,
						c: "#ff0000",
						k: 0,
					},
					{
						t: "를 2주 정도 지나서 채우게 되었습니다.",
						k: 1,
					},
				],
				align: "center",
				id: 21,
			},
			{
				type: "img",
				src: "/images/cases/167284802/3.png",
				w: 580,
				h: 699,
				alt: "안과마케팅",
				id: 22,
			},
			{
				type: "p",
				runs: [
					{
						t: "그리고 점점 노출도가 올라 ",
						k: 0,
					},
					{
						t: "약 80%를 넘어가며 효과를 크게 체감 하시며 키워드 또한 101개로 확장",
						b: true,
						c: "#ff0000",
						k: 1,
					},
					{
						t: "하셨습니다.",
						k: 2,
					},
				],
				align: "center",
				gap: true,
				id: 23,
			},
			{
				type: "img",
				src: "/images/cases/167284802/4.png",
				w: 572,
				h: 691,
				alt: "안과홍보",
				id: 24,
			},
			{
				type: "p",
				runs: [
					{
						t: "101개의 키워드로 확장 한 후 지속적인 작업을 통하여 노출도를 68% 까지 증가시키고,",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 25,
			},
			{
				type: "p",
				runs: [
					{
						t: "노출이 되지 않는 키워드 들은 계속하여 추가 작업을 하며 노출도를 더욱더 높여 나갔습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 26,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희는 이렇게 지역 내 어떤 키워드를 검색하든 ",
						k: 0,
					},
					{
						t: "해당 병원이 노출될 수 있도록",
						c: "#ff0000",
						k: 1,
					},
					{
						t: " 작업을 진행 하고 있습니다.",
						k: 2,
					},
				],
				align: "center",
				gap: true,
				id: 27,
			},
			{
				type: "h",
				runs: [
					{
						t: "2. 콘텐츠 기획은 환자들의 심리를 파악하여 진행",
						b: true,
						c: "#ff0000",
						fs: 22,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 28,
			},
			{
				type: "hr",
				id: 29,
			},
			{
				type: "p",
				runs: [
					{
						t: "여러분이 계신 지역에서도 많은 환자 분들이 아픔을 느끼며 병원을 찾고는 하실 겁니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 30,
			},
			{
				type: "p",
				runs: [
					{
						t: "그 중에서는",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 31,
			},
			{
				type: "p",
				runs: [
					{
						t: "돈에 대한 걱정, 또는 부작용에 대해 염려를 하시는 분, 치료할 때 아프진 않을까 무서워 하는 환자 등",
						k: 0,
					},
				],
				align: "center",
				id: 32,
			},
			{
				type: "p",
				runs: [
					{
						t: "정말 다양한 분들이 계실 텐데요.",
						k: 0,
					},
				],
				align: "center",
				id: 33,
			},
			{
				type: "p",
				runs: [
					{
						t: "하지만 이러한 환자들의 마음을 읽지 못한 채,",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 34,
			},
			{
				type: "p",
				runs: [
					{
						t: "'그저 우리 병원이 좋다.'",
						b: true,
						c: "#ff0000",
						k: 0,
					},
				],
				align: "center",
				id: 35,
			},
			{
				type: "p",
				runs: [
					{
						t: "라는 1차원 적인 메세지를 담은 콘텐츠로 광고를 한다면",
						k: 0,
					},
				],
				align: "center",
				id: 36,
			},
			{
				type: "p",
				runs: [
					{
						t: "효과를 보기에는 큰 어려움이 있다는 것을",
						k: 0,
					},
				],
				align: "center",
				id: 37,
			},
			{
				type: "p",
				runs: [
					{
						t: "원장님들도 잘 아실 거라 생각합니다.",
						k: 0,
					},
				],
				align: "center",
				id: 38,
			},
			{
				type: "img",
				src: "/images/cases/167284802/5.png",
				w: 732,
				h: 846,
				alt: "안과블로그",
				id: 39,
			},
			{
				type: "img",
				src: "/images/cases/167284802/6.png",
				w: 736,
				h: 712,
				alt: "안과블로그마케팅",
				id: 40,
			},
			{
				type: "h",
				runs: [
					{
						t: "그리하여 저희는 환자의 입장에서 생각하여 ",
						k: 0,
					},
					{
						t: '"내가 어떤 콘텐츠를 봐야 이 병원에 가고 싶을까?"',
						b: true,
						c: "#ff0000",
						fs: 20,
						k: 1,
					},
					{
						t: " 를 고민하며,",
						k: 2,
					},
				],
				align: "center",
				gap: true,
				id: 41,
			},
			{
				type: "p",
				runs: [
					{
						t: "우리 병원의 차별점(진정성/탁월성)을 함께 어필하며 블로그 글을 작성 하였습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 42,
			},
			{
				type: "p",
				runs: [
					{
						t: '가끔 가다 보면 종종 조사와 문맥에만 신경을 써 "눈이 시리고 눈물이 나더라"',
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 43,
			},
			{
				type: "p",
				runs: [
					{
						t: '라는 문장을 "눈물이 나고 눈이 시리더라" 라는 형식으로 고쳐 쓰시는 분들도 계신데,',
						k: 0,
					},
				],
				align: "center",
				id: 44,
			},
			{
				type: "p",
				runs: [
					{
						t: "솔직히 글이 정말 이상한 것만 아니라면 이런 사소한 것보다는",
						k: 0,
					},
				],
				align: "center",
				id: 45,
			},
			{
				type: "p",
				runs: [
					{
						t: '"어? 이 병원 진짜로 잘하는데?, 뭔가 진정성이 느껴지네?"',
						b: true,
						u: true,
						c: "#ff0000",
						k: 0,
					},
				],
				align: "center",
				id: 46,
			},
			{
				type: "p",
				runs: [
					{
						t: "라는 느낌을 주는 것이 효과적입니다.",
						k: 0,
					},
				],
				align: "center",
				id: 47,
			},
			{
				type: "p",
				runs: [
					{
						t: "안과마케팅 글의 퀄리티 보다 더욱 중요한 것은 바로",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 48,
			},
			{
				type: "p",
				runs: [
					{
						t: '"',
						c: "#ff0000",
						k: 0,
					},
					{
						t: '병원만의 차별점이 콘텐츠에 들어가 있는지"',
						b: true,
						c: "#ff0000",
						k: 1,
					},
					{
						t: "",
						k: 2,
					},
				],
				align: "center",
				id: 49,
			},
			{
				type: "p",
				runs: [
					{
						t: "라는 것을 잊지 마세요!",
						k: 0,
					},
				],
				align: "center",
				id: 50,
			},
			{
				type: "img",
				src: "/images/cases/167284802/7.png",
				w: 334,
				h: 355,
				alt: "안과브랜드블로그",
				id: 51,
			},
			{
				type: "p",
				runs: [
					{
						t: "홍보성 콘텐츠의 경우 건조증과 다래끼 등 일반 환자들의 내원율을 높이고 싶어하신",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 52,
			},
			{
				type: "p",
				runs: [
					{
						t: "원장님의 니즈를 적극 반영하여 해당 질환 쪽 콘텐츠를 제작하였습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 53,
			},
			{
				type: "img",
				src: "/images/cases/167284802/8.png",
				w: 322,
				h: 533,
				alt: "안과홍보광고",
				id: 54,
			},
			{
				type: "p",
				runs: [
					{
						t: "키워드 역시 건조증과 다래끼 키워드로 맞춰 세팅 후 온라인 전단지처럼",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 55,
			},
			{
				type: "p",
				runs: [
					{
						t: "동일한 콘텐츠들을 여러 키워드에 배포하였습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 56,
			},
			{
				type: "h",
				runs: [
					{
						t: "3. 1:1 담당자 매칭으로 빠른 소통과 피드백",
						b: true,
						c: "#ff0000",
						fs: 22,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 57,
			},
			{
				type: "hr",
				id: 58,
			},
			{
				type: "img",
				src: "/images/cases/167284802/9.png",
				w: 966,
				h: 1114,
				alt: "안과홍보마케팅",
				id: 59,
			},
			{
				type: "p",
				runs: [
					{
						t: '"원장님이 정말 만족해하시고 계세요,',
						c: "#ff0000",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 60,
			},
			{
				type: "p",
				runs: [
					{
						t: '담당자가 배정되어 밀착관리 해주는 안과광고 업체가 많지 않죠"',
						c: "#ff0000",
						k: 0,
					},
				],
				align: "center",
				id: 61,
			},
			{
				type: "img",
				src: "/images/cases/167284802/10.png",
				w: 966,
				h: 1136,
				alt: "안과마케팅광고",
				id: 62,
			},
			{
				type: "p",
				runs: [
					{
						t: '"애드리절트에서는 담당자가 매칭되어 있으니',
						c: "#ff0000",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 63,
			},
			{
				type: "p",
				runs: [
					{
						t: '주제가 동떨어지지 않으면서 게시글이 누적되는 느낌이 들어요~"',
						c: "#ff0000",
						k: 0,
					},
				],
				align: "center",
				id: 64,
			},
			{
				type: "p",
				runs: [
					{
						t: "매달 어떤 질환의 환자가 내원하는지? 어떤 질환 쪽으로 집중 마케팅을 시행할지?",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 65,
			},
			{
				type: "p",
				runs: [
					{
						t: "등 서로 소통하기 때문에 매니저님은 이런 말씀을 해주셨는데요.",
						k: 0,
					},
				],
				align: "center",
				id: 66,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희는 아무래도 안과마케팅 실행사이며 따로 영업자가 없는 구조다 보니",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 67,
			},
			{
				type: "p",
				runs: [
					{
						t: "발빠른 소통과 피드백에 대하여 만족감을 느끼시는 분들이 정말 많습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 68,
			},
			{
				type: "p",
				runs: [
					{
						t: "그동안 마케팅 회사의 느린 피드백에 답답함을 느낀 적이 있으시다면",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 69,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희 애드리절트와 함께 해보시는 건 어떠실까요?",
						k: 0,
					},
				],
				align: "center",
				id: 70,
			},
			{
				type: "p",
				runs: [
					{
						t: "안과마케팅은 아직 타 분과에 비하여 광고를 진행하는 곳들이 많은 편이 아니기에",
						b: true,
						c: "#ff0000",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 71,
			},
			{
				type: "p",
				runs: [
					{
						t: "지금이 지역 내 1위 병원으로 치고 올라갈 기회입니다!",
						b: true,
						c: "#ff0000",
						k: 0,
					},
				],
				align: "center",
				id: 72,
			},
			{
				type: "p",
				runs: [
					{
						t: "이 기회를 잡고 같이 결과물을 만들어 나가고 싶으신 원장님이 계신다면 연락 주시길 기다리겠습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 73,
			},
			{
				type: "p",
				runs: [
					{
						t: "다음에는 또 다른 성공사례 리뷰로 찾아 뵙겠습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 74,
			},
			{
				type: "p",
				runs: [
					{
						t: "감사합니다.",
						k: 0,
					},
				],
				align: "center",
				id: 75,
			},
			{
				type: "img",
				src: "/images/cases/167284802/11.png",
				w: 740,
				h: 640,
				alt: "안과마케팅성공사례",
				id: 76,
			},
		],
	},
	{
		slug: "167246533",
		title: "[병원마케팅 성공사례] 병원마케팅 효과 어느 정도일까요?",
		excerpt:
			"병원마케팅의 효과가 언제 쯤부터 날까 많이 들 궁금해 하시는데요. 실제로 상담을 진행하면서도 가장 많이 받는 질문 중 하나이기도 한 궁금증이죠. 사실 정확하게 딱 언제부터다 라고 말씀드리기가 정말 애매한 부분입니다. 병원 매출이라는 게 지역,분과 그리고 병원의 규모 등등 정말 수많은 요",
		summary:
			"병원마케팅 효과는 지역·분과·규모에 따라 다르지만, 메디컬 패키지를 이용한 대부분의 병원이 2~3개월이면 인터넷 유입이 생겼다고 말합니다. 애드리절트는 월 단위로 내원율을 함께 체크하며 광고를 조정합니다.",
		faq: [
			{
				q: "병원마케팅은 언제부터 효과가 나나요?",
				a: "지역·분과·규모 등이 복합적으로 작용해 딱 잘라 말하기는 어렵지만, 메디컬 패키지를 이용한 대부분의 병원이 2~3개월이면 인터넷 유입이 생겼다고 말합니다.",
			},
			{
				q: "효과를 더 높이려면 무엇을 하면 되나요?",
				a: "병원 내부에서 인터넷 유입을 측정해 공유해 주시면 그 데이터를 반영해 더 효율적인 광고가 가능합니다. 애드리절트도 월 단위로 내원율을 확인합니다.",
			},
			{
				q: "어떤 진료과 성공사례가 있나요?",
				a: "정형외과·피부과·성형외과·안과·치과·암병원 등 다양한 분과의 원장님들이 인터넷 신환 증가 등 실제 성과 피드백을 주셨습니다.",
			},
		],
		cover: "/images/cases/167246533/2.png",
		coverW: 337,
		coverH: 416,
		blocks: [
			{
				type: "callout",
				runs: [
					{
						t: "병원마케팅, 과연 언제부터 효과가 생길까?",
						b: true,
						c: "#ff0000",
						bg: "#f3f3f3",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 0,
			},
			{
				type: "p",
				runs: [
					{
						t: "병원마케팅의 효과가 언제 쯤부터 날까 많이 들 궁금해 하시는데요.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 1,
			},
			{
				type: "p",
				runs: [
					{
						t: "실제로 상담을 진행하면서도 가장 많이 받는 질문 중 하나이기도 한 궁금증이죠.",
						k: 0,
					},
				],
				align: "center",
				id: 2,
			},
			{
				type: "p",
				runs: [
					{
						t: "사실 정확하게 딱 언제부터다 라고 말씀드리기가 정말 애매한 부분입니다.",
						b: true,
						bg: "#ffff00",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 3,
			},
			{
				type: "p",
				runs: [
					{
						t: "병원 매출이라는 게 지역,분과 그리고 병원의 규모 등등 정말 수많은 요인들이 복합적으로 작용하기 때문인데요.",
						k: 0,
					},
				],
				align: "center",
				id: 4,
			},
			{
				type: "p",
				runs: [
					{
						t: "그렇기에 저희 애드리절트와 함께하면 언제 효과가 생길 것이다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 5,
			},
			{
				type: "p",
				runs: [
					{
						t: "라고 딱 잘라서 말하기에는 무리가 있습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 6,
			},
			{
				type: "p",
				runs: [
					{
						t: "(관련한 칼럼은 아래를 참고해 주세요 ^^ 이미지 클릭 시 이동합니다.)",
						k: 0,
					},
				],
				align: "center",
				id: 7,
			},
			{
				type: "img",
				src: "/images/cases/167246533/1.png",
				w: 1280,
				h: 720,
				alt: "병원마케팅성공사례",
				href: "https://adresult.kr/93/?q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9&bmode=view&idx=167367530&t=board",
				id: 8,
			},
			{
				type: "p",
				runs: [
					{
						t: "그래도 확답을 드릴 수는 없지만, 평균 정도는 내볼 수 있겠죠.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 9,
			},
			{
				type: "p",
				runs: [
					{
						t: "대부분의 병원들은 메디컬패키지를 이용하시고 ",
						k: 0,
					},
					{
						t: "2~3개월 정도면 인터넷 유입이 생겼다",
						bg: "#ffff00",
						k: 1,
					},
					{
						t: "고 많이들 말씀하십니다.",
						k: 2,
					},
				],
				align: "center",
				id: 10,
			},
			{
				type: "p",
				runs: [
					{
						t: "직접 측정해 보는 원장님들도 계시고, 저희가 먼저 월 단위로 여쭈어 보아 내원율을 체크하고 있기도 합니다.",
						c: "#ff0000",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 11,
			},
			{
				type: "p",
				runs: [
					{
						t: "만일 저희 애드리절트와 병원 마케팅을 진행 해보실 예정이시라면,",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 12,
			},
			{
				type: "p",
				runs: [
					{
						t: "내부적으로 인터넷 유입을 측정, 공유를 해주시면 더욱 효율적인 광고가 가능",
						b: true,
						c: "#ff0000",
						k: 0,
					},
					{
						t: "하게 됩니다. 😀",
						k: 1,
					},
				],
				align: "center",
				id: 13,
			},
			{
				type: "p",
				runs: [
					{
						t: "아래는 분과별 여러 원장님들께서 주신 카카오톡 피드백 모음입니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 14,
			},
			{
				type: "h",
				runs: [
					{
						t: "[정형외과광고 성공사례]",
						b: true,
						fs: 22,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 15,
			},
			{
				type: "img",
				src: "/images/cases/167246533/2.png",
				w: 337,
				h: 416,
				alt: "[병원마케팅 성공사례] 병원마케팅 효과 어느 정도일까요?",
				id: 16,
			},
			{
				type: "img",
				src: "/images/cases/167246533/3.jpg",
				w: 330,
				h: 483,
				alt: "[병원마케팅 성공사례] 병원마케팅 효과 어느 정도일까요?",
				id: 17,
			},
			{
				type: "img",
				src: "/images/cases/167246533/4.png",
				w: 335,
				h: 184,
				alt: "병원광고",
				id: 18,
			},
			{
				type: "img",
				src: "/images/cases/167246533/5.png",
				w: 329,
				h: 334,
				alt: "병원개원",
				id: 19,
			},
			{
				type: "h",
				runs: [
					{
						t: "[피부과 성공사례]",
						b: true,
						fs: 22,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 20,
			},
			{
				type: "img",
				src: "/images/cases/167246533/6.png",
				w: 260,
				h: 217,
				alt: "강남병원마케팅",
				id: 21,
			},
			{
				type: "h",
				runs: [
					{
						t: "[성형외과 성공사례]",
						b: true,
						fs: 22,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 22,
			},
			{
				type: "img",
				src: "/images/cases/167246533/7.png",
				w: 323,
				h: 179,
				alt: "서울병원마케팅",
				id: 23,
			},
			{
				type: "h",
				runs: [
					{
						t: "[안과광고 성공사례]",
						b: true,
						fs: 22,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 24,
			},
			{
				type: "img",
				src: "/images/cases/167246533/8.png",
				w: 305,
				h: 462,
				alt: "병원마케팅대행",
				id: 25,
			},
			{
				type: "h",
				runs: [
					{
						t: "[치과광고 성공사례]",
						b: true,
						fs: 22,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 26,
			},
			{
				type: "img",
				src: "/images/cases/167246533/9.png",
				w: 323,
				h: 809,
				alt: "병원광고마케팅",
				id: 27,
			},
			{
				type: "img",
				src: "/images/cases/167246533/10.png",
				w: 353,
				h: 202,
				alt: "병원광고대행사",
				id: 28,
			},
			{
				type: "img",
				src: "/images/cases/167246533/11.png",
				w: 339,
				h: 681,
				alt: "병원마케팅",
				id: 29,
			},
			{
				type: "img",
				src: "/images/cases/167246533/12.png",
				w: 305,
				h: 295,
				alt: "병원홍보",
				id: 30,
			},
			{
				type: "video",
				videoId: "IxiY7eS-DG8",
				id: 31,
			},
			{
				type: "h",
				runs: [
					{
						t: "[암병원광고 성공사례]",
						b: true,
						fs: 22,
						k: 0,
					},
				],
				align: "center",
				id: 32,
			},
			{
				type: "img",
				src: "/images/cases/167246533/13.png",
				w: 324,
				h: 329,
				alt: "병원마케팅대행",
				id: 33,
			},
			{
				type: "video",
				videoId: "V52HQFA7v-8",
				id: 34,
			},
		],
	},
	{
		slug: "167246130",
		title: '[병원마케팅] 애드리절트 직원들이 제일 듣고 싶은 말 "환자 늘었다"',
		excerpt:
			"애드리절트에서는 계약 전 센터장과의 상담을 하고, 계약이 진행되면 전담 팀이 배정됩니다. 이번에 A병원의 광고가 3개월이 되어 매니저들과 원장님 간의 미팅을 가지게 되었습니다. 이번 미팅을 끝마친 후, 앤(센터장)이 원장님께 어떠셨는지 여쭈어 보았는데 너무 잘 해주셨다는 피드백이 돌아왔",
		summary:
			"타 광고회사에서 옮겨온 A병원은 애드리절트와 3개월 진행한 뒤 이전 대비 60~70% 더 나은 효과를 봤다는 피드백을 주셨습니다. 애드리절트가 가장 반기는 말은 '환자가 늘었다'입니다.",
		faq: [
			{
				q: "이전 광고회사와 비교해 효과가 어땠나요?",
				a: "A병원 원장님은 이전 광고회사에 맡겼을 때보다 60~70% 정도 더 효과를 봤다는 피드백을 주셨습니다.",
			},
			{
				q: "애드리절트는 어떤 성과를 가장 중요하게 보나요?",
				a: "'친절하다·소통이 빠르다'는 평가도 감사하지만, 무엇보다 '환자가 늘었다'는 결과를 가장 보람 있게 여깁니다.",
			},
			{
				q: "계약은 어떻게 진행되나요?",
				a: "계약 전 센터장과 상담을 하고, 계약이 진행되면 전담 팀이 배정되어 관리합니다.",
			},
		],
		cover: "/images/cases/167246130/1.png",
		coverW: 352,
		coverH: 547,
		blocks: [
			{
				type: "img",
				src: "/images/cases/167246130/1.png",
				w: 352,
				h: 547,
				alt: "병원블로그",
				id: 0,
			},
			{
				type: "p",
				runs: [
					{
						t: "애드리절트에서는 계약 전 센터장과의 상담을 하고, 계약이 진행되면 전담 팀이 배정됩니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 1,
			},
			{
				type: "p",
				runs: [
					{
						t: "이번에 A병원의 광고가 3개월이 되어 매니저들과 원장님 간의 미팅을 가지게 되었습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 2,
			},
			{
				type: "p",
				runs: [
					{
						t: "이번 미팅을 끝마친 후, 앤(센터장)이 원장님께 어떠셨는지 여쭈어 보았는데",
						k: 0,
					},
				],
				align: "center",
				id: 3,
			},
			{
				type: "p",
				runs: [
					{
						t: "너무 잘 해주셨다는 피드백이 돌아왔습니다~!",
						k: 0,
					},
				],
				align: "center",
				id: 4,
			},
			{
				type: "img",
				src: "/images/cases/167246130/2.png",
				w: 345,
				h: 342,
				alt: "병원블로그마케팅",
				id: 5,
			},
			{
				type: "p",
				runs: [
					{
						t: "A병원은 타 광고 회사 에서 광고를 진행하시다 애드리절트와 새로 함께 시작한 곳인데요",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 6,
			},
			{
				type: "p",
				runs: [
					{
						t: "이전 광고 회사에 광고를 맡겼을 때보다 60~70% 정도 더 효과를 보신 것 같으시다고",
						k: 0,
					},
				],
				align: "center",
				id: 7,
			},
			{
				type: "p",
				runs: [
					{
						t: "피드백을 주셨어요~!",
						k: 0,
					},
				],
				align: "center",
				id: 8,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희 애드리절트가 가장 좋아하는 피드백입니다. ㅎㅎ 친절해요,소통이 빨라요 물론 이런 말도 좋지만",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 9,
			},
			{
				type: "h",
				runs: [
					{
						t: "환자가 늘었다는 것",
						b: true,
						c: "#ff0000",
						fs: 20,
						k: 0,
					},
					{
						t: " 만큼 보람찬 건 없죠~",
						k: 1,
					},
				],
				align: "center",
				id: 10,
			},
			{
				type: "p",
				runs: [
					{
						t: "애드리절트 전 직원은 어제도 오늘도 내일까지도 항상",
						k: 0,
					},
				],
				align: "center",
				id: 11,
			},
			{
				type: "p",
				runs: [
					{
						t: "병원의 성공을 위해 최선을 다하고 또한 최선을 다할 예정입니다^^",
						k: 0,
					},
				],
				align: "center",
				id: 12,
			},
			{
				type: "img",
				src: "/images/cases/167246130/3.png",
				w: 463,
				h: 388,
				alt: "병원광고관리",
				href: "https://blog.naver.com/qpqp791/222660857898",
				id: 13,
			},
		],
	},
	{
		slug: "167232106",
		title: "[병원마케팅성공사례] 병원 검색량 5배 증가",
		excerpt:
			"타 지역에서 10년 가까이 병원을 운영하다가 서울로 이전하신 A병원의 마케팅성공사례입니다. A병원은 기존 지역에서 이미 안정적으로 자리를 잡은 상태였기 때문에, 서울로 병원을 이전하는 결정은 쉽지 않은 선택이었을 것입니다. 이에 따라 마케팅을 함께할 회사를 매우 신중하고 꼼꼼하게 검토하",
		summary:
			"타 지역에서 10년 운영하다 서울로 이전한 A병원은, 애드리절트와 함께한 두 달 만에 병원명 검색량이 200건대에서 770건으로 3배 이상 늘었고, 1년 4개월 뒤에는 월 2천 건 가까이로 약 10배까지 증가했습니다.",
		faq: [
			{
				q: "A병원은 병원명 검색량이 얼마나 늘었나요?",
				a: "마케팅 두 달째에 병원명 검색량이 200건대에서 770건으로 3배 이상 늘었고, 1년 4개월 뒤에는 월 2천 건 가까이로 약 10배 증가했습니다.",
			},
			{
				q: "서울 이전 후 언제부터 효과가 났나요?",
				a: "첫 달은 콘텐츠 방향을 잡는 준비 기간이라 성과가 미비했고, 두 달째부터 검색량이 3배 이상 늘며 뚜렷한 변화가 나타났습니다.",
			},
			{
				q: "어떤 방식으로 마케팅을 진행했나요?",
				a: "원장님 블로그를 중심으로 환자 니즈를 반영한 콘텐츠를 만들고, 아이디어와 피드백을 빠르게 주고받으며 개선하는 애자일 방식으로 진행했습니다.",
			},
		],
		cover: "/images/cases/167232106/3.png",
		coverW: 966,
		coverH: 593,
		blocks: [
			{
				type: "p",
				runs: [
					{
						t: "타 지역에서 10년 가까이 병원을 운영하다가 서울로 이전하신 A병원의 마케팅성공사례입니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 0,
			},
			{
				type: "p",
				runs: [
					{
						t: "A병원은 기존 지역에서 이미 안정적으로 자리를 잡은 상태였기 때문에,",
						k: 0,
					},
				],
				align: "center",
				id: 1,
			},
			{
				type: "p",
				runs: [
					{
						t: "서울로 병원을 이전하는 결정은 쉽지 않은 선택이었을 것입니다.",
						k: 0,
					},
				],
				align: "center",
				id: 2,
			},
			{
				type: "p",
				runs: [
					{
						t: "이에 따라 마케팅을 함께할 회사를 매우 신중하고 꼼꼼하게 검토하셨다고 하셨습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 3,
			},
			{
				type: "img",
				src: "/images/cases/167232106/1.png",
				w: 534,
				h: 128,
				alt: "병원마케팅성공사례",
				id: 4,
			},
			{
				type: "p",
				runs: [
					{
						t: "2020년 11월, 첫 미팅 이후 바로 계약을 진행하였고, 약 1년 4개월 정도를 함께하고 있습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 5,
			},
			{
				type: "p",
				runs: [
					{
						t: "미팅을 진행한 게 엊그제 같은데 말이죠^^",
						k: 0,
					},
				],
				align: "center",
				id: 6,
			},
			{
				type: "p",
				runs: [
					{
						t: "원장님께서는 이전하기 전 지역에서도 광고를 진행하고 계셨지만",
						k: 0,
					},
				],
				align: "center",
				id: 7,
			},
			{
				type: "p",
				runs: [
					{
						t: "이전을 하며 소통의 어려움이 생기고, 그 외에 여러 아쉬웠던 점들을 말씀해 주시며,",
						k: 0,
					},
				],
				align: "center",
				id: 8,
			},
			{
				type: "p",
				runs: [
					{
						t: "앞으로의 마케팅 방향성에 대하여 함께 이야기를 나누었습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 9,
			},
			{
				type: "h",
				runs: [
					{
						t: "결과가 미비했던 첫 달",
						b: true,
						fs: 24,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 10,
			},
			{
				type: "hr",
				id: 11,
			},
			{
				type: "p",
				runs: [
					{
						t: "첫 달은 준비 기간에 가까웠습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 12,
			},
			{
				type: "p",
				runs: [
					{
						t: "애드리절트의 메디컬패키지는 지역과 분과 등 여러가지 조건에 따라 다르지만, 시작과 동시에 눈에 띄는 효과가 나타나는 것은 아닙니다.",
						k: 0,
					},
				],
				align: "center",
				id: 13,
			},
			{
				type: "p",
				runs: [
					{
						t: "광고 콘텐츠가 충분히 노출되기까지는 어느 정도의 시간이 필요",
						c: "#ff0000",
						k: 0,
					},
					{
						t: "하기 때문입니다.",
						k: 1,
					},
				],
				align: "center",
				id: 14,
			},
			{
				type: "p",
				runs: [
					{
						t: "특히 첫 달은 해당 병원을 주로 찾으시는 고객들의 니즈가 완벽히 파악된 상태가 아니고,",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 15,
			},
			{
				type: "p",
				runs: [
					{
						t: "함께 콘텐츠 방향성을 계획하고 제작을 하는 과정이기에 완벽한 광고가 되지 않습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 16,
			},
			{
				type: "img",
				src: "/images/cases/167232106/2.png",
				w: 329,
				h: 228,
				alt: "병원마케팅대행사",
				id: 17,
			},
			{
				type: "p",
				runs: [
					{
						t: "Ａ병원도 마찬가지로 이러한 과정이 있었고, 첫 달은 미비한 상태에서 진행을 하게 되었습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 18,
			},
			{
				type: "p",
				runs: [
					{
						t: "하지만 원활한 소통을 통하여 점차 함께 발을 맞추어 나갔고,",
						k: 0,
					},
				],
				align: "center",
				id: 19,
			},
			{
				type: "p",
				runs: [
					{
						t: "2개월이 되었을 땐 불과 1달 전만 해도 200대였던 A병원의 병원명 검색 수가 무려 770으로 3배 이상 상승하는 놀라운 결과",
						c: "#ff0000",
						k: 0,
					},
				],
				align: "center",
				id: 20,
			},
			{
				type: "p",
				runs: [
					{
						t: "를 만들어 냈습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 21,
			},
			{
				type: "img",
				src: "/images/cases/167232106/3.png",
				w: 966,
				h: 593,
				alt: "병원블로그관리",
				id: 22,
			},
			{
				type: "p",
				runs: [
					{
						t: "약 1년 4개월 정도가 지난 지금은 A병원명의 검색 조회수가",
						c: "#ff0000",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 23,
			},
			{
				type: "h",
				runs: [
					{
						t: "한달에 2천건 가까이, 거의 10배가 증가",
						b: true,
						c: "#ff0000",
						fs: 20,
						k: 0,
					},
					{
						t: "하는 모습을 보여줬습니다.",
						k: 1,
					},
				],
				align: "center",
				id: 24,
			},
			{
				type: "p",
				runs: [
					{
						t: "효과를 본 A병원에서는 더욱더 적극적인 광고를 진행하고 싶어 하셨고,",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 25,
			},
			{
				type: "p",
				runs: [
					{
						t: "원장님께서 직접 관리 하시는 블로그를 더욱 알리고 싶다고 하셨습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 26,
			},
			{
				type: "p",
				runs: [
					{
						t: "해당 지역에는 비슷한 병원들이 많았기에 A병원만의 차별성을 찾는 것이 매우 중요했습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 27,
			},
			{
				type: "p",
				runs: [
					{
						t: "그래서 병원에 오신 환자 분들이 원장님께 하시던 말씀들의 대부분을 정리하여 저희에게 전달을 해 주셨습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 28,
			},
			{
				type: "img",
				src: "/images/cases/167232106/4.png",
				w: 535,
				h: 374,
				alt: "병원블로그광고",
				id: 29,
			},
			{
				type: "p",
				runs: [
					{
						t: "(A병원 원장님 블로그 유입)",
						k: 0,
					},
				],
				align: "center",
				id: 30,
			},
			{
				type: "p",
				runs: [
					{
						t: "그렇게 원장님과 A병원을 찾는 환자 분들의 니즈를 파악 후 적절히 광고에 담은 결과,",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 31,
			},
			{
				type: "p",
				runs: [
					{
						t: "원장님 블로그의 유입자가 점차 증가하였고, 실질적으로 광고를 본 후 내원하는 환자의 수도 증가하기 시작했습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 32,
			},
			{
				type: "img",
				src: "/images/cases/167232106/5.png",
				w: 645,
				h: 780,
				alt: "병원블로그",
				id: 33,
			},
			{
				type: "p",
				runs: [
					{
						t: "광고를 처음 진행하였을 때 문의, 내원이 일어나지 않아 걱정하시던 원장님께서는",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 34,
			},
			{
				type: "p",
				runs: [
					{
						t: "애드리절트를 믿고 기다려신 결과,",
						k: 0,
					},
				],
				align: "center",
				id: 35,
			},
			{
				type: "p",
				runs: [
					{
						t: "현재는 고객들이 좋은 후기들도 자발적으로 작성해 주시고, 소개 환자 또한 많이 늘어나며 확실하게 자리를 잡으시게 되었습니다.",
						c: "#ff0000",
						k: 0,
					},
				],
				align: "center",
				id: 36,
			},
			{
				type: "img",
				src: "/images/cases/167232106/6.png",
				w: 336,
				h: 311,
				alt: "병원블로그홍보",
				id: 37,
			},
			{
				type: "p",
				runs: [
					{
						t: "병원 마케팅을 성공하기 위해서는 무엇보다 병원과 애드리절트 간의",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 38,
			},
			{
				type: "p",
				runs: [
					{
						t: "원활한 소통이 필수라는 것을 A병원과 함께하며 강하게 느끼고 있습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 39,
			},
			{
				type: "p",
				runs: [
					{
						t: "서로의 생각을 공유하며 피드백을 진행하고, 빠른 실행과 그에 따른 결과를 보면서",
						b: true,
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 40,
			},
			{
				type: "h",
				runs: [
					{
						t: "실패를 하면 발빠르게 다른 방법을 찾아 실행하고 결과를 확인후 개선하는 방식",
						b: true,
						fs: 18,
						k: 0,
					},
					{
						t: "을 ",
						k: 1,
					},
					{
						t: "<애자일 방식>",
						b: true,
						c: "#ff0000",
						fs: 20,
						k: 2,
					},
					{
						t: " ",
						c: "#ff0000",
						k: 3,
					},
					{
						t: "이라 부릅니다.",
						k: 4,
					},
				],
				align: "center",
				id: 41,
			},
			{
				type: "img",
				src: "/images/cases/167232106/7.png",
				w: 965,
				h: 443,
				alt: "병원홍보",
				id: 42,
			},
			{
				type: "p",
				runs: [
					{
						t: "A병원은 수많은 고객사들 중에서도 정말 애자일스럽게 일을 한 곳이라 할 수 있습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 43,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희 뿐만 아니라 원장님/직원 분들 모두가 적극적으로 참여를 해주셨기에 이런 엄청난 성과를 낼 수 있었던 것입니다.",
						k: 0,
					},
				],
				align: "center",
				id: 44,
			},
			{
				type: "p",
				runs: [
					{
						t: "처음에는 자리를 잡을 수 있을지 걱정을 하던 A병원은",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 45,
			},
			{
				type: "p",
				runs: [
					{
						t: "이제 '우리 병원을 어떻게 알릴까?'를 넘어서",
						k: 0,
					},
				],
				align: "center",
				id: 46,
			},
			{
				type: "p",
				runs: [
					{
						t: "'어떻게 하면 환자들에게 더 양질의 의료 서비스를 제공할까?'라는 고민을 하는 단계까지 올라오게 되었습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 47,
			},
			{
				type: "p",
				runs: [
					{
						t: "애드리절트에서는 이러한 병원들을 ",
						c: "#ff0000",
						k: 0,
					},
					{
						t: "Dr 1.0 에서 Dr 2.0 ",
						b: true,
						c: "#ff0000",
						fs: 18,
						k: 1,
					},
					{
						t: "으로 업그레이드 되었다. 라고 말하고 있습니다.",
						c: "#ff0000",
						k: 2,
					},
				],
				align: "center",
				gap: true,
				id: 48,
			},
			{
				type: "p",
				runs: [
					{
						t: "병원의 기본인 치료를 잘하는 것은 물론 환자가 병원에서 치료 그 이상을 느끼도록 준비를 하는 것이죠.",
						k: 0,
					},
				],
				align: "center",
				id: 49,
			},
			{
				type: "img",
				src: "/images/cases/167232106/8.png",
				w: 450,
				h: 378,
				alt: "병원광고대행사",
				href: "https://blog.naver.com/qpqp791/222660857898",
				id: 50,
			},
			{
				type: "p",
				runs: [
					{
						t: "병원을 더욱더 성장시키기 위해서는, 항상 마케턴트도 발전을 해 나가야 합니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 51,
			},
			{
				type: "p",
				runs: [
					{
						t: "그래서 애드리절트의 전 직원들은 여러 방법을 통해 발전을 하고 역량을 키워 나가고 있습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 52,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희 애드리절트는 짧고 굵게 보다는, 가늘고 길게 잘 유지되는 마케팅 방법을 사용 중입니다.",
						k: 0,
					},
				],
				align: "center",
				id: 53,
			},
			{
				type: "p",
				runs: [
					{
						t: "또한 ",
						k: 0,
					},
					{
						t: "병원과 애드리절트가 서로 WIN-WIN 하는 구조",
						c: "#ff0000",
						k: 1,
					},
					{
						t: "로 일을 하기에 다소 시간이 걸릴 뿐,",
						k: 2,
					},
				],
				align: "center",
				gap: true,
				id: 54,
			},
			{
				type: "p",
				runs: [
					{
						t: "밑바닥부터 차곡차곡 건축물 올리듯 진행하고 있습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 55,
			},
			{
				type: "p",
				runs: [
					{
						t: "높은 연장율을 보이며, 수년을 저의 애드리절트와 함께하시는 이유가 이러한 업무 방식 때문이 아닌가 합니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 56,
			},
			{
				type: "p",
				runs: [
					{
						t: "늘 공부하며 성장하는 애드리절트가 되겠습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 57,
			},
			{
				type: "p",
				runs: [
					{
						t: "그리하여 더 많은 병원마케팅성공사례를 소개해 드리겠습니다.",
						b: true,
						bg: "#f4cccc",
						k: 0,
					},
				],
				align: "center",
				id: 58,
			},
			{
				type: "h",
				runs: [
					{
						t: "병원온라인마케팅전문 애드리절트",
						fs: 20,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 59,
			},
		],
	},
	{
		slug: "167212324",
		title: "[치과마케팅 성공사례] 광고 6개월만에 병원 확장까지 성공!",
		excerpt:
			"라고 생각들을 많이 하시죠, 하지만 이 글을 3분만 시간 내셔서 읽어보시면 가능하다는 생각이 들게 되실 겁니다. 오늘 소개해 드릴 사례를 보시면서 어떤 마케팅이 좋은 마케팅인지 살펴보시고, 지금까지 광고 효과를 못 보셔서 힘들어하신 분들에게 조그마한 도움이 되었으면 합니다. 사실 해당",
		summary:
			"개원 초 신규환자가 적고 근교에 대형 치과 오픈까지 앞둔 치과가, 애드리절트의 메디컬 패키지에 유튜브 광고·플레이스 상위노출·온라인 평판관리를 더한 결과 광고 6개월 만에 병원 확장까지 이뤘습니다.",
		faq: [
			{
				q: "광고 6개월 만에 어떤 성과가 났나요?",
				a: "환자가 꾸준히 늘어 직원들이 바쁠 정도가 됐고, 원장님이 다른 병원을 소개할 만큼 신뢰로 이어져 6개월 만에 병원 확장까지 성공했습니다.",
			},
			{
				q: "어떤 마케팅을 진행했나요?",
				a: "메디컬 패키지(정보성 블로그·다채널 배포)로 시작해, 경쟁이 치열한 지역 특성에 맞춰 유튜브 광고, 플레이스 상위노출, 온라인 평판관리를 단계적으로 더했습니다.",
			},
			{
				q: "조회수·체류시간 같은 지표로 보고하나요?",
				a: "아닙니다. 조회수·체류시간보다 '실제로 환자가 얼마나 오는가'에 집중해, 매달 어떤 질환에 집중할지와 효과는 어떤지를 병원과 소통하며 관리합니다.",
			},
		],
		cover: "/images/cases/167212324/1.png",
		coverW: 800,
		coverH: 850,
		blocks: [
			{
				type: "video",
				videoId: "IxiY7eS-DG8",
				id: 0,
			},
			{
				type: "img",
				src: "/images/cases/167212324/1.png",
				w: 800,
				h: 850,
				alt: "치과마케팅",
				id: 1,
			},
			{
				type: "h",
				runs: [
					{
						t: '"이게 진짜 가능하다고?"',
						b: true,
						c: "#3d85c6",
						fs: 20,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 2,
			},
			{
				type: "p",
				runs: [
					{
						t: "라고 생각들을 많이 하시죠, 하지만 이 글을 3분만 시간 내셔서 읽어보시면 가능하다는 생각이 들게 되실 겁니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 3,
			},
			{
				type: "p",
				runs: [
					{
						t: "오늘 소개해 드릴 사례를 보시면서 어떤 마케팅이 좋은 마케팅인지 살펴보시고,",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 4,
			},
			{
				type: "p",
				runs: [
					{
						t: "지금까지 광고 효과를 못 보셔서 힘들어하신 분들에게 조그마한 도움이 되었으면 합니다.",
						c: "#ff9900",
						k: 0,
					},
				],
				align: "center",
				id: 5,
			},
			{
				type: "callout",
				runs: [
					{
						t: '"개원했는데 신규 환자가 많이 없고 게다가 곧 대형 치과가 근교에 오픈 예정이라서 그 전에 저희 치과에 대해 많이 알리고 싶어요" ',
						bg: "#f3f3f3",
						k: 0,
					},
					{
						br: true,
						k: 1,
					},
					{
						t: "- 고객사 처음 미팅 내용 -",
						bg: "#f3f3f3",
						k: 2,
					},
				],
				align: "center",
				gap: true,
				id: 6,
			},
			{
				type: "p",
				runs: [
					{
						t: "사실 해당 치과 뿐만 아니라",
						k: 0,
					},
					{
						t: ", 이런 저런 걱정과 고",
						fs: 18,
						k: 1,
					},
					{
						t: "민들을 가지고 저희를 찾아오시는 원장님들이 대다수입니다.",
						k: 2,
					},
				],
				align: "center",
				gap: true,
				id: 7,
			},
			{
				type: "p",
				runs: [
					{
						t: "하지만 ",
						k: 0,
					},
					{
						t: "위기 속에도 잘 되는 곳이 있고 오히려 매출이 상승하는 곳 ",
						c: "#ff9900",
						k: 1,
					},
					{
						t: "또한 있습니다.",
						k: 2,
					},
				],
				align: "center",
				gap: true,
				id: 8,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희를 믿으시고 함께 성장하기를 원하셨던 원장님의 기대에 응대해드리고자 저희는 아래와 같은 상품을 진행 하였습니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 9,
			},
			{
				type: "img",
				src: "/images/cases/167212324/2.png",
				w: 800,
				h: 800,
				alt: "치과블로그",
				id: 10,
			},
			{
				type: "h",
				runs: [
					{
						t: "고민 맞춤 상품",
						b: true,
						c: "#3d85c6",
						fs: 22,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 11,
			},
			{
				type: "hr",
				id: 12,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희의 첫 시작은 ",
						k: 0,
					},
					{
						t: "메디컬 패키지 (정보성 블로그/다채널 배포) 였습니다.",
						fs: 18,
						k: 1,
					},
				],
				align: "center",
				id: 13,
			},
			{
				type: "p",
				runs: [
					{
						t: "그리고 점차 플레이스 상위노출, 온라인 평판관리, 유튜브 광고까지 하나하나 그 영",
						fs: 18,
						k: 0,
					},
					{
						t: "역을 넓혀 오게 되었습니다.",
						k: 1,
					},
				],
				align: "center",
				id: 14,
			},
			{
				type: "p",
				runs: [
					{
						t: "작은 지역이라면 메디컬 패키지(정보성 블로그/다채널 배포) 만으로도 충분할지 모르지만,",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 15,
			},
			{
				type: "p",
				runs: [
					{
						t: "해당 지역은 경쟁이 치열한 곳이었기에 대형 치과가 오픈하기 전",
						k: 0,
					},
				],
				align: "center",
				id: 16,
			},
			{
				type: "p",
				runs: [
					{
						t: "1) 유튜브 광고",
						b: true,
						k: 0,
					},
				],
				align: "center",
				id: 17,
			},
			{
				type: "p",
				runs: [
					{
						t: "2)플레이스 상위노출",
						b: true,
						k: 0,
					},
				],
				align: "center",
				id: 18,
			},
			{
				type: "p",
				runs: [
					{
						t: "3)온라인 평판 관리",
						b: true,
						k: 0,
					},
				],
				align: "center",
				id: 19,
			},
			{
				type: "p",
				runs: [
					{
						t: "이렇게 3가지를 추가로 준비하여 지역 내 환자들에게 신뢰를 심어주는 것에 심혈을 기울였습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 20,
			},
			{
				type: "callout",
				runs: [
					{
						t: "온라인 평판 관리",
						c: "#3d85c6",
						fs: 22,
						k: 0,
					},
					{
						t: "가 궁금하시다면,아래 영상을 확인해 주세요.",
						fs: 22,
						k: 1,
					},
				],
				align: "center",
				gap: true,
				id: 21,
			},
			{
				type: "video",
				videoId: "z4rXIjQEQUw",
				id: 22,
			},
			{
				type: "img",
				src: "/images/cases/167212324/3.png",
				w: 800,
				h: 799,
				alt: "치과홍보",
				id: 23,
			},
			{
				type: "h",
				runs: [
					{
						t: '"이 치과 어디서 들어본 거 같은데?"',
						b: true,
						c: "#3d85c6",
						fs: 20,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 24,
			},
			{
				type: "hr",
				id: 25,
			},
			{
				type: "p",
				runs: [
					{
						t: "신뢰를 위해 유튜브를 통해 전문적인 정보만 전달하며,",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 26,
			},
			{
				type: "p",
				runs: [
					{
						t: "[키워드 관리 예시]",
						k: 0,
					},
				],
				align: "center",
				id: 27,
			},
			{
				type: "p",
				runs: [
					{
						t: "00치과",
						k: 0,
					},
				],
				align: "center",
				id: 28,
			},
			{
				type: "p",
				runs: [
					{
						t: "00스케일링",
						k: 0,
					},
				],
				align: "center",
				id: 29,
			},
			{
				type: "p",
				runs: [
					{
						t: "00사랑니발치",
						k: 0,
					},
				],
				align: "center",
				id: 30,
			},
			{
				type: "p",
				runs: [
					{
						t: "00잇몸치료",
						k: 0,
					},
				],
				align: "center",
				id: 31,
			},
			{
				type: "p",
				runs: [
					{
						t: "00치아미백",
						k: 0,
					},
				],
				align: "center",
				id: 32,
			},
			{
				type: "p",
				runs: [
					{
						t: "그와 동시에 친숙함이 느껴지도록 ",
						k: 0,
					},
					{
						t: "내부에서 개발한 자체 순위 체크 프로그램",
						b: true,
						k: 1,
					},
					{
						t: "을 이용하여",
						k: 2,
					},
					{
						t: "",
						c: "#ff9900",
						k: 3,
					},
				],
				align: "center",
				gap: true,
				id: 33,
			},
			{
				type: "p",
				runs: [
					{
						t: '"실제 환자들이 병원을 찾을 때 사용하는 키워드"를',
						c: "#ff9900",
						k: 0,
					},
				],
				align: "center",
				id: 34,
			},
			{
				type: "p",
				runs: [
					{
						t: "네이버, 다음 등에 검색을 하면 저희 00치과가 나올 수 있도록 집중 관리",
						c: "#ff9900",
						k: 0,
					},
					{
						t: "하였습니다.",
						k: 1,
					},
				],
				align: "center",
				id: 35,
			},
			{
				type: "p",
				runs: [
					{
						t: "이렇게 다채널 노출을 통하여 치과명을 지속적으로 확인하게 되면 환자는 무의식 중",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 36,
			},
			{
				type: "p",
				runs: [
					{
						t: "'어라? 이 치과 어디서 들어본 거 같은데?'",
						k: 0,
					},
				],
				align: "center",
				id: 37,
			},
			{
				type: "p",
				runs: [
					{
						t: "라는 생각과 함께 친근함을 느끼게 됩니다. ",
						k: 0,
					},
					{
						t: "이 친근함의 시작이 바로 병원 매출 향상의 시작입니다.",
						b: true,
						k: 1,
					},
				],
				align: "center",
				id: 38,
			},
			{
				type: "img",
				src: "/images/cases/167212324/4.png",
				w: 800,
				h: 1700,
				alt: "치과온라인마케팅",
				id: 39,
			},
			{
				type: "callout",
				runs: [
					{
						t: '"직원들이 바빠 죽으려고 해요"',
						c: "#3d85c6",
						fs: 22,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 40,
			},
			{
				type: "p",
				runs: [
					{
						t: '처음에는 "마이너스라도 버텨보겠다." 라고 말씀하시던 원장님께서',
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 41,
			},
			{
				type: "p",
				runs: [
					{
						t: '"계속 잘 돼요 ㅎㅎ 직원들이 너무 바쁘다 해요" 라며 카톡을 남겨 주셨습니다.',
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 42,
			},
			{
				type: "p",
				runs: [
					{
						t: "또한 실제 내원해 주신 환자분들께서 병원을 꾸준히 이용해 주시고는",
						k: 0,
					},
				],
				align: "center",
				id: 43,
			},
			{
				type: "p",
				runs: [
					{
						t: '"아프면 항상 오는 곳" 이라는 좋은 리뷰들을 남겨 주셨는데요.',
						k: 0,
					},
				],
				align: "center",
				id: 44,
			},
			{
				type: "p",
				runs: [
					{
						t: "이렇게 되다 보니, ",
						k: 0,
					},
					{
						t: "매번 기프티콘까지 보내 주시며 병원 내 직원한테 대하듯이 항상 감사함을 표하십니다.",
						c: "#ff9900",
						k: 1,
					},
				],
				align: "center",
				gap: true,
				id: 45,
			},
			{
				type: "img",
				src: "/images/cases/167212324/5.png",
				w: 800,
				h: 850,
				alt: "치과온라인광고",
				id: 46,
			},
			{
				type: "h",
				runs: [
					{
						t: "실제로 얼마나 환자가 오는가? 에 집중합니다.",
						b: true,
						c: "#3d85c6",
						fs: 22,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 47,
			},
			{
				type: "hr",
				id: 48,
			},
			{
				type: "p",
				runs: [
					{
						t: "많은 치과마케팅 대행사들이 광고하는 것을 보면",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 49,
			},
			{
				type: "p",
				runs: [
					{
						t: "보통 평균적으로 조회수 10,000 / 체류 시간 3-4분 유지를 이용하여 업체를 홍보하고는 합니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 50,
			},
			{
				type: "p",
				runs: [
					{
						t: "물론 조회수가 높고, 체류 시간이 많으면 그만큼 병원을 많이 알리고 있다는 기준점으로도 삼을 수 있겠지요.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 51,
			},
			{
				type: "p",
				runs: [
					{
						t: "하지만 저희는 조회수, 체류 시간을 떠나",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 52,
			},
			{
				type: "p",
				runs: [
					{
						t: '"이번달은 어떤 질환으로 집중할지?"',
						b: true,
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 53,
			},
			{
				type: "p",
				runs: [
					{
						t: '"효과는 어떤지?"',
						b: true,
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 54,
			},
			{
				type: "p",
				runs: [
					{
						t: '"어떠한 질환으로 환자들이 치료를 받으러 오는지?"',
						b: true,
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 55,
			},
			{
				type: "p",
				runs: [
					{
						t: "등을 지속적으로 여쭤보며 소통하고,",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 56,
			},
			{
				type: "p",
				runs: [
					{
						t: '치과마케팅에 있어 가장 중요한 "실제 환자가 얼마나 오는가?" 에 집중을 하고 있습니다.',
						c: "#ff9900",
						k: 0,
					},
				],
				align: "center",
				id: 57,
			},
			{
				type: "img",
				src: "/images/cases/167212324/6.png",
				w: 800,
				h: 850,
				alt: "치과마케팅성공사례",
				id: 58,
			},
			{
				type: "h",
				runs: [
					{
						t: '"애드리절트 덕분에 병원확장까지 성공했습니다."',
						b: true,
						c: "#3d85c6",
						fs: 22,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 59,
			},
			{
				type: "hr",
				id: 60,
			},
			{
				type: "p",
				runs: [
					{
						t: "병원마케팅 일을 하면서 가장 뿌듯한 순간이 바로",
						fs: 18,
						k: 0,
					},
					{
						t: "",
						c: "#ff9900",
						fs: 18,
						k: 1,
					},
				],
				align: "center",
				id: 61,
			},
			{
				type: "p",
				runs: [
					{
						t: '"저희 덕분이에요" 라는 말을 들었을 때',
						c: "#ff9900",
						fs: 18,
						k: 0,
					},
					{
						t: "인데요.",
						fs: 18,
						k: 1,
					},
				],
				align: "center",
				id: 62,
			},
			{
				type: "p",
				runs: [
					{
						t: "실제 해당 병원 원장님께서는 감사하다는 인사 뿐만 아니라,",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 63,
			},
			{
				type: "p",
				runs: [
					{
						t: "정말 감사하게도 다른 지인 분들도 소개를 해주셨습니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 64,
			},
			{
				type: "p",
				runs: [
					{
						t: "사실 원장님 입장에서도 지인에게 마케팅 회사를 소개 한다는 게 쉽지는 않죠.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 65,
			},
			{
				type: "p",
				runs: [
					{
						t: "한 번 생각해 보시면 소개를 한다는 것이 얼마나 많은 고민이 필요로 한지 아실 텐데요.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 66,
			},
			{
				type: "p",
				runs: [
					{
						t: "하지만",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 67,
			},
			{
				type: "h",
				runs: [
					{
						t: "1.관계에 대한 신뢰",
						b: true,
						c: "#ff0000",
						fs: 20,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 68,
			},
			{
				type: "h",
				runs: [
					{
						t: "2.마케팅에 대한 신뢰",
						b: true,
						c: "#ff0000",
						fs: 20,
						k: 0,
					},
				],
				align: "center",
				id: 69,
			},
			{
				type: "h",
				runs: [
					{
						t: "3.내부 시스템에 대한 신뢰",
						b: true,
						c: "#ff0000",
						fs: 20,
						k: 0,
					},
				],
				align: "center",
				id: 70,
			},
			{
				type: "p",
				runs: [
					{
						t: "이렇게 3가지에 만족을 하시는 분들께서",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 71,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희를 다른 병원 원장님들께 권해주시고, 소개를 해주시기도 합니다.",
						fs: 18,
						k: 0,
					},
				],
				align: "center",
				id: 72,
			},
			{
				type: "img",
				src: "/images/cases/167212324/7.png",
				w: 690,
				h: 544,
				alt: "병원마케팅대행사",
				id: 73,
			},
			{
				type: "img",
				src: "/images/cases/167212324/8.png",
				w: 800,
				h: 1885,
				alt: "애드리절트",
				id: 74,
			},
			{
				type: "h",
				runs: [
					{
						t: "이유 없는 성공사례는 없다",
						b: true,
						c: "#3d85c6",
						fs: 22,
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 75,
			},
			{
				type: "hr",
				id: 76,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희는 내부적으로 ",
						k: 0,
					},
					{
						t: "매 분기별 병원마케팅 성공사례를 공유하며",
						c: "#ff9900",
						k: 1,
					},
				],
				align: "center",
				id: 77,
			},
			{
				type: "p",
				runs: [
					{
						t: "더 나은 방법은 없는지? 더 효과적인 방법은 없는지? 서로의 지식을 나누고는 합니다.",
						c: "#ff9900",
						k: 0,
					},
				],
				align: "center",
				id: 78,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희가 성공사례를 낼 수 있었던 다양한 이유들이 있지만 그중에서도",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 79,
			},
			{
				type: "p",
				runs: [
					{
						t: "'수 많은 병원 마케팅을 통한 지식 발견 및 나눔',",
						b: true,
						k: 0,
					},
				],
				align: "center",
				id: 80,
			},
			{
				type: "p",
				runs: [
					{
						t: "이것이 저희가 성공사례를 많이 낼 수 있었던 근본적인 이유입니다.",
						k: 0,
					},
				],
				align: "center",
				id: 81,
			},
			{
				type: "p",
				runs: [
					{
						t: "현재 병원에만 집중하고 있지만, 병원은 매우 특수한 업종이라",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 82,
			},
			{
				type: "p",
				runs: [
					{
						t: "업종에 따라, 지역의 특징, 경쟁업체에 따라서도 전략이 천차만별로 달라질 수 있습니다.",
						k: 0,
					},
				],
				align: "center",
				id: 83,
			},
			{
				type: "p",
				runs: [
					{
						t: "그래서 ",
						k: 0,
					},
					{
						t: '저희는 환자들이 "어떻게 병원을 찾고 방문하는지" 에 대한 충분한 분석을 통하여 병원에 적용시킵니다.',
						c: "#ff9900",
						k: 1,
					},
				],
				align: "center",
				gap: true,
				id: 84,
			},
			{
				type: "p",
				runs: [
					{
						t: "환자가 병원 방문 직전에 검색하는 키워드에 잘해 줄 것 같고 신뢰할 수 있는 병원 이미지로 노출되는 것,",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 85,
			},
			{
				type: "p",
				runs: [
					{
						t: "그것이 병원마케팅의 핵심입니다.",
						k: 0,
					},
				],
				align: "center",
				id: 86,
			},
			{
				type: "img",
				src: "/images/cases/167212324/9.png",
				w: 800,
				h: 850,
				alt: "병원마케팅애드리절트",
				id: 87,
			},
			{
				type: "callout",
				runs: [
					{
						t: "저희가 매 분기 발표하는, ",
						c: "#3d85c6",
						fs: 22,
						k: 0,
					},
					{
						br: true,
						k: 1,
					},
					{
						t: "성공한 병원 사례의 주인공이 되고 싶으신가요?",
						c: "#3d85c6",
						fs: 22,
						k: 2,
					},
				],
				align: "center",
				gap: true,
				id: 88,
			},
			{
				type: "p",
				runs: [
					{
						t: "주저하지 마시고 아래 배너를 통하여 문의 주세요.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 89,
			},
			{
				type: "h",
				runs: [
					{
						t: '"병원에 가치를 더해드립니다"',
						b: true,
						c: "#ff0000",
						fs: 22,
						k: 0,
					},
				],
				align: "center",
				id: 90,
			},
			{
				type: "p",
				runs: [
					{
						t: "현재 꾸준히 병원마케팅 문의가 들어오는 중입니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 91,
			},
			{
				type: "p",
				runs: [
					{
						t: "감사한 마음이지만 기존 저희 고객사를 우선적으로 집중 케어하는 게 맞다고 생각하여 지역당, 분과별 1곳만 받고 있음을 안내드립니다.",
						c: "#ff9900",
						k: 0,
					},
				],
				align: "center",
				id: 92,
			},
			{
				type: "p",
				runs: [
					{
						t: "앞으로 저희의 비전을 향해 달려나가며 함께 여러분의 파트너로 성장하는 애드리절트를 기대해주세요.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 93,
			},
			{
				type: "p",
				runs: [
					{
						t: "감사합니다.",
						k: 0,
					},
				],
				align: "center",
				gap: true,
				id: 94,
			},
		],
	},
	{
		slug: "167070308",
		title: "[피부과마케팅 성공사례] 병원 매출 증가를 넘어 브랜딩까지, D의원 성공사례",
		excerpt:
			"D의원은 지방에서 오랜 시간 동안 안정적인 운영을 이어온 병원이었습니다. 하지만 더 넓은 무대에서 도전해보고자 하는 원장님의 의지로 과감히 서울로 이전하게 되었습니다. 이미 자리 잡은 지역을 떠난다는 것은 결코 쉬운 선택이 아니었기에, 병원마케팅에 있어서만큼은 더욱 신중할 수밖에 없었습",
		summary:
			"지방에서 서울로 이전한 D의원은 애드리절트와 블로그 중심 콘텐츠·애자일 소통 전략으로, 병원명 검색량을 두 달 만에 200건대에서 770건으로 3배 이상 늘렸고 이후 월 2,000건까지 끌어올렸습니다.",
		faq: [
			{
				q: "D의원은 병원명 검색량이 얼마나 늘었나요?",
				a: "마케팅 두 달째에 기존 200건대에서 770건으로 3배 이상 늘었고, 이후 꾸준히 증가해 월 약 2,000건에 이르렀습니다.",
			},
			{
				q: "어떤 전략으로 성과를 냈나요?",
				a: "원장님이 직접 운영하는 블로그를 중심 채널로 삼아 환자의 질문과 반응을 반영한 콘텐츠를 제작하고, 아이디어와 피드백을 수시로 주고받는 애자일 방식으로 빠르게 개선했습니다.",
			},
			{
				q: "서울 이전 후 마케팅은 언제부터 효과가 났나요?",
				a: "첫 달은 콘텐츠 제작과 니즈 분석 등 준비 기간이었고, 두 달째부터 병원명 검색량이 3배 이상 늘며 뚜렷한 변화가 나타났습니다.",
			},
		],
		cover: "/images/cases/167070308/1.png",
		coverW: 329,
		coverH: 228,
		blocks: [
			{
				type: "h",
				runs: [
					{
						t: '"서울에서 새롭게 시작한 D의원의 병원마케팅 성공사례"',
						i: true,
						c: "#3d85c6",
						fs: 20,
						k: 0,
					},
				],
				gap: true,
				id: 0,
			},
			{
				type: "p",
				runs: [
					{
						t: "D의원은 지방에서 오랜 시간 동안 안정적인 운영을 이어온 병원이었습니다. 하지만 더 넓은 무대에서 도전해보고자 하는 원장님의 의지로 과감히 서울로 이전하게 되었습니다. 이미 자리 잡은 지역을 떠난다는 것은 결코 쉬운 선택이 아니었기에, 병원마케팅에 있어서만큼은 더욱 신중할 수밖에 없었습니다. 믿을 수 있는 마케팅 파트너를 찾기 위해 꼼꼼히 비교하고 조사한 끝에 애드리절트와 함께 하기로 결정하셨습니다.",
						k: 0,
					},
				],
				gap: true,
				id: 1,
			},
			{
				type: "h",
				runs: [
					{
						t: '"마케팅 초반, 신뢰를 기반으로 한 준비 기간"',
						i: true,
						c: "#3d85c6",
						fs: 20,
						k: 0,
					},
				],
				gap: true,
				id: 2,
			},
			{
				type: "p",
				runs: [
					{
						t: "D의원은 이전 지역에서도 광고를 진행한 경험이 있었지만, 새로운 지역에서는 환자와의 소통부터 시작해야 했기에 다른 접근이 필요했습니다. 애드리절트와의 첫 달은 말 그대로 준비의 시간이라 할 수 있었습니다. 광고 콘텐츠를 제작하고 환자의 니즈를 분석하며 방향성을 설정하는 등 다양한 초기 작업이 이뤄졌습니다.",
						k: 0,
					},
				],
				gap: true,
				id: 3,
			},
			{
				type: "img",
				src: "/images/cases/167070308/1.png",
				w: 329,
				h: 228,
				alt: "피부과마케팅",
				id: 4,
			},
			{
				type: "p",
				runs: [
					{
						t: "첫 달은 병원마케팅의 기초를 다지는 과정이었기 때문에 당연히 처음부터 큰 성과가 나오지는 않았습니다. 애드리절트의 메디컬패키지는 병원마다 조건이 다르기 때문에 즉각적인 효과보다는 시간이 지남에 따라 안정적인 성과를 기대하는 구조입니다. D의원 역시 이 점을 충분히 이해하고 기다려 주셨고, 이러한 신뢰가 결국 성공의 발판이 되었습니다.",
						k: 0,
					},
				],
				gap: true,
				id: 5,
			},
			{
				type: "h",
				runs: [
					{
						t: '"병원명 검색량, 두 달 만에 세 배 이상 증가"',
						b: true,
						c: "#ff0000",
						fs: 20,
						k: 0,
					},
				],
				gap: true,
				id: 6,
			},
			{
				type: "img",
				src: "/images/cases/167070308/2.png",
				w: 966,
				h: 593,
				alt: "피부과블로그",
				id: 7,
			},
			{
				type: "p",
				runs: [
					{
						t: "마케팅을 시작한 지 두 달째가 되던 시점, D의원은 확실한 변화를 체감하기 시작했습니다. ",
						k: 0,
					},
					{
						t: "병원명 검색량이 기존 200건대에서 770건으로 세 배 이상 증가",
						c: "#ff0000",
						k: 1,
					},
					{
						t: "하며 눈에 띄는 성장을 이룬 것입니다. 이는 단순한 수치 이상의 의미를 가졌습니다. 잠재 환자들의 인식 속에 D의원이 자리 잡기 시작했으며, 병원마케팅의 방향이 제대로 설정되었다는 증거였습니다. 이후로도 꾸준한 커뮤니케이션과 전략 조정으로 검색량은 지속적으로 증가해 한 달에 약 2,000건에 달하게 되었습니다. 초기의 고민이 이제는 성과로 이어졌고, 이는 병원 내부에도 긍정적인 영향을 미쳤습니다.",
						k: 2,
					},
				],
				gap: true,
				id: 8,
			},
			{
				type: "h",
				runs: [
					{
						t: '"블로그 중심의 콘텐츠 마케팅으로 차별화"',
						b: true,
						c: "#ff0000",
						fs: 20,
						k: 0,
					},
				],
				gap: true,
				id: 9,
			},
			{
				type: "p",
				runs: [
					{
						t: "서울은 의료기관 간 경쟁이 치열한 지역입니다. 비슷한 진료과목의 병원들이 많기 때문에 D의원만의 차별화된 전략이 필요했습니다. 이에 따라 원장님께서는 직접 운영하는 블로그를 마케팅의 중심 채널로 삼아, 환자들과의 신뢰를 쌓고자 했습니다.",
						k: 0,
					},
				],
				gap: true,
				id: 10,
			},
			{
				type: "p",
				runs: [
					{
						t: "ㄴ원장님블로그유입수",
						c: "#666666",
						k: 0,
					},
				],
				id: 11,
			},
			{
				type: "img",
				src: "/images/cases/167070308/3.png",
				w: 535,
				h: 374,
				alt: "피부과광고",
				id: 12,
			},
			{
				type: "p",
				runs: [
					{
						t: "애드리절트는 블로그 콘텐츠를 구성할 때 원장님이 직접 환자들로부터 들은 질문과 반응을 반영하여 공감할 수 있는 콘텐츠를 제작했습니다. 결과적으로 블로그 유입량이 증가했을 뿐 아니라, 블로그를 통해 병원을 알게 된 환자의 내원율도 눈에 띄게 상승했습니다.",
						k: 0,
					},
					{
						t: " 병원마케팅의 핵심은 결국 진정성 있는 소통이며, D의원은 이를 실천한 대표적인 사례",
						c: "#ff0000",
						k: 1,
					},
					{
						t: "입니다.",
						k: 2,
					},
				],
				gap: true,
				id: 13,
			},
			{
				type: "h",
				runs: [
					{
						t: '"꾸준한 소통으로 만들어낸 마케팅 성과"',
						b: true,
						c: "#ff0000",
						fs: 20,
						k: 0,
					},
				],
				gap: true,
				id: 14,
			},
			{
				type: "img",
				src: "/images/cases/167070308/4.png",
				w: 345,
				h: 843,
				alt: "피부과홍보",
				id: 15,
			},
			{
				type: "img",
				src: "/images/cases/167070308/5.png",
				w: 347,
				h: 841,
				alt: "피부과바이럴마케팅",
				id: 16,
			},
			{
				type: "p",
				runs: [
					{
						t: "병원마케팅에서 가장 중요한 것은 단순한 광고 집행이 아니라 지속적인 소통과 피드백입니다.",
						k: 0,
					},
					{
						t: " D의원과 애드리절트는 마케팅 과정 내내 아이디어를 수시로 공유하고, 그에 대한 피드백을 바탕으로 빠르게 실행하며 개선해 나갔습니다. ",
						c: "#ff0000",
						k: 1,
					},
					{
						t: "이러한 업무 방식은 흔히 '애자일 방식'이라고 불립니다. 실패를 두려워하지 않고, 실험하고 개선하며 발전해 나가는 방식은 D의원의 성장에 큰 도움이 되었습니다. 병원 내부에서도 마케팅에 대한 적극적인 참여가 이루어졌기에 더 큰 성과를 낼 수 있었습니다. 광고 초반에는 내원이 없어 걱정이 많았던 원장님께서도, 시간이 흐르며 환자들의 자발적인 후기가 생성되고 소개를 통해 새로운 환자가 유입되는 과정을 경험하게 되었습니다.",
						k: 2,
					},
				],
				id: 17,
			},
			{
				type: "h",
				runs: [
					{
						t: '"병원마케팅의 목표는 의료서비스 향상"',
						b: true,
						c: "#ff0000",
						fs: 20,
						k: 0,
					},
				],
				gap: true,
				id: 18,
			},
			{
				type: "p",
				runs: [
					{
						t: "D의원은 단순히 병원을 알리는 단계를 넘어서 환자들에게 더 나은 의료서비스를 제공하는 방법을 고민하고 있습니다. 병원마케팅이 병원을 성장시키는 데 기여하는 것은 사실이지만, 진정한 목적은 환자 만족을 높이고 신뢰를 구축하는 데 있습니다. D의원의 사례는 ",
						k: 0,
					},
					{
						t: "병원과 마케팅 회사가 함께 성장하고 발전해 나갈 때, 비로소 성공적인 결과를 만들 수 있다",
						c: "#ff0000",
						k: 1,
					},
					{
						t: "는 것을 보여줍니다.",
						k: 2,
					},
				],
				gap: true,
				id: 19,
			},
			{
				type: "p",
				runs: [
					{
						t: "병원마케팅을 통해 성공적인 사례를 만들고 싶으신가요? D의원처럼 꾸준한 소통과 진정성 있는 접근을 통해, 우리 병원의 가치를 많은 이들에게 알릴 수 있습니다. 병원마케팅은 단순한 광고가 아닌, 환자와의 신뢰를 쌓는 첫걸음입니다. 지금 바로 시작해보세요. 병원마케팅, D의원 처럼 우리도 성공할 수 있습니다.",
						k: 0,
					},
				],
				gap: true,
				id: 20,
			},
		],
	},
	{
		slug: "166883724",
		title: "[치과마케팅 성공사례]인터넷 환자 10배 늘린 S치과",
		excerpt:
			"병원 운영을 하다 보면 누구나 한 번쯤 ‘우리 병원에 더 많은 환자가 오게 하려면 어떻게 해야 할까?’라는 고민을 하게 됩니다. 특히 개원 초기나 성장 정체기를 겪고 있는 병원이라면 더욱 절실한 고민일 것입니다. 실제로 많은 병원장님들께서 병원마케팅을 위해 수많은 블로그 글을 읽고, 여",
		summary:
			"개원 후 1년간 월 1천만원 넘는 광고비를 쓰고도 인터넷 신규환자가 월 30명에 그치던 S치과는, 애드리절트의 세부키워드 전략으로 3개월 만에 3배 이상 늘었고 광고 4년 차에는 월 300명 이상으로 기존의 10배 이상을 달성했습니다.",
		faq: [
			{
				q: "S치과는 인터넷 신규환자가 얼마나 늘었나요?",
				a: "월 30명 내외에서 시작해 광고 3개월 만에 3배 이상 늘었고, 광고 4년 차에는 월 평균 300명 이상으로 기존 대비 10배 이상 증가했습니다.",
			},
			{
				q: "세부키워드 전략이 무엇인가요?",
				a: "검색량이 큰 대표키워드 하나에 집중하는 대신, '강남충치치료'·'강남야간진료치과'처럼 환자가 실제로 조합해 검색하는 수백 개의 세부키워드를 여러 채널에서 활용하는 전략입니다. 경쟁이 덜하면서 내원 의도가 분명한 검색과 병원을 연결합니다.",
			},
			{
				q: "광고비를 늘려서 얻은 결과인가요?",
				a: "아닙니다. 광고비를 늘린 것이 아니라 병원마케팅 전략 자체를 세부키워드 중심으로 재설계한 결과입니다.",
			},
		],
		cover: "/images/cases/166883724/1.png",
		coverW: 498,
		coverH: 307,
		blocks: [
			{
				type: "h",
				runs: [
					{
						t: "“병원마케팅, 어디서부터 시작해야 할까요?”",
						i: true,
						c: "#3d85c6",
						fs: 20,
						k: 0,
					},
				],
				gap: true,
				id: 0,
			},
			{
				type: "p",
				runs: [
					{
						t: "병원 운영을 하다 보면 누구나 한 번쯤 ",
						k: 0,
					},
					{
						t: "‘우리 병원에 더 많은 환자가 오게 하려면 어떻게 해야 할까?’",
						c: "#3d85c6",
						k: 1,
					},
					{
						t: "라는 고민을 하게 됩니다. 특히 개원 초기나 성장 정체기를 겪고 있는 병원이라면 더욱 절실한 고민일 것입니다.",
						k: 2,
					},
				],
				gap: true,
				id: 1,
			},
			{
				type: "p",
				runs: [
					{
						t: "실제로 많은 병원장님들께서 병원마케팅을 위해 수많은 블로그 글을 읽고, 여러 병원광고회사에 상담을 요청해보셨을 겁니다. 하지만 너무도 다양한 정보와 방식에 오히려 혼란만 커지셨을 텐데요. 이 글에서는 개원 초기부터 마케팅을 시작하여 성장한 S치과의 사례를 소개하고자 합니다.",
						k: 0,
					},
				],
				gap: true,
				id: 2,
			},
			{
				type: "h",
				runs: [
					{
						t: "“온라인광고 후 신규환자 10배 증가한 병원의 비결은?”",
						b: true,
						c: "#ff0000",
						fs: 20,
						k: 0,
					},
				],
				gap: true,
				id: 3,
			},
			{
				type: "p",
				runs: [
					{
						t: "애드리절트가 함께한 S병원은 ",
						k: 0,
					},
					{
						t: "개원 후 1년 동안 여러 광고회사를 통해 월 평균 1천만 원 이상의 광고비를 지출",
						c: "#ff0000",
						k: 1,
					},
					{
						t: "하고 있었습니다. ",
						k: 2,
					},
					{
						t: "하지만 인터넷 신규환자는 월 30명 내외",
						c: "#ff0000",
						k: 3,
					},
					{
						t: "에 그쳤습니다. 많은 예산을 투입했음에도 효과는 기대 이하여서, 병원 내부에서도 마케팅 효율에 대해 회의적인 시선이 많았습니다.",
						k: 4,
					},
				],
				gap: true,
				id: 4,
			},
			{
				type: "p",
				runs: [
					{
						t: "광고회사를 여러 곳 거치다가 애드리절트를 만나게 되셨고, 저희와 함께 마케팅을 진행하며 상황은 달라졌습니다.",
						k: 0,
					},
					{
						t: " 월 30명이었던 인터넷 신규환자수가 애드리절트와 광고한 지 3개월 만에 3배 이상 늘며 성장",
						c: "#ff0000",
						k: 1,
					},
					{
						t: "하였습니다.",
						k: 2,
					},
				],
				gap: true,
				id: 5,
			},
			{
				type: "p",
				runs: [
					{
						t: "그렇게 매년 인터넷 신규 환자를 늘리며, 개원 5년 차(애드리절트 광고 4년 차)에 S병원은 월 평균 300명 이상의 인터넷 신규환자가 꾸준히 유입되고 있으며, 이는 기존 대비 10배 이상 증가한 수치입니다. 단순히 광고비를 늘린 것이 아니라, 병원마케팅 전략 자체를 근본적으로 재설계한 결과입니다.",
						k: 0,
					},
				],
				gap: true,
				id: 6,
			},
			{
				type: "img",
				src: "/images/cases/166883724/1.png",
				w: 498,
				h: 307,
				alt: "병원마케팅성공사례",
				id: 7,
			},
			{
				type: "img",
				src: "/images/cases/166883724/2.png",
				w: 484,
				h: 290,
				alt: "979bc26b48da1.png",
				id: 8,
			},
			{
				type: "img",
				src: "/images/cases/166883724/3.png",
				w: 538,
				h: 391,
				alt: "병원광고",
				id: 9,
			},
			{
				type: "p",
				runs: [
					{
						t: "▲실제 병원에서 제공 해주신 자료",
						k: 0,
					},
				],
				gap: true,
				id: 10,
			},
			{
				type: "h",
				runs: [
					{
						t: "“대표키워드보다 중요한 건 세부키워드입니다”",
						b: true,
						c: "#ff0000",
						fs: 20,
						k: 0,
					},
				],
				gap: true,
				id: 11,
			},
			{
				type: "p",
				runs: [
					{
						t: "S병원이 과거에 마케팅에서 겪은 대표적인 문제 중 하나는 ‘대표키워드에 대한 집착’이었습니다.",
						k: 0,
					},
				],
				gap: true,
				id: 12,
			},
			{
				type: "p",
				runs: [
					{
						t: "월간 검색량이 2만 건에 달하는 특정 키워드에만 집중했는데, 정작 해당 키워드를 검색 시 병원 정보가 노출되지 않았습니다. 조회수가 많은 만큼 경쟁이 치열한 키워드였기 때문이죠.",
						k: 0,
					},
				],
				gap: true,
				id: 13,
			},
			{
				type: "p",
				runs: [
					{
						t: "병원은 대표적인 고관여 업종입니다. 환자는 병원 선택 시 수많은 검색을 반복하며, 다양한 키워드를 조합해 정보를 찾습니다. 예를 들어 단순히 ‘강남치과’가 아닌 ‘강남충치치료’, ‘강남야간진료치과’ 등 세부적인 검색어를 활용합니다.",
						k: 0,
					},
				],
				gap: true,
				id: 14,
			},
			{
				type: "p",
				runs: [
					{
						t: "애드리절트는 이러한 검색 패턴을 분석하여 수백 개의 유의미한 키워드를 다양한 채널에서 활용했습니다. 이게 바로 세부키워드 전략입니다. S병원에 세부키워드 전략을 도입하면서 환자와의 접점을 넓힐 수 있었고, 그 결과 신규환자 유입이 눈에 띄게 증가했습니다.",
						k: 0,
					},
				],
				gap: true,
				id: 15,
			},
			{
				type: "p",
				runs: [
					{
						t: "현재 병원마케팅 시장은 과거보다 훨씬 복잡하고 정교해졌습니다. 환자들의 검색 패턴은 날로 고도화되고 있으며, 단순한 홍보로는 병원의 신뢰를 얻기 어렵습니다. 의료법은 더욱 강화되었고, 경쟁 병원들도 빠르게 디지털마케팅을 강화하고 있습니다. 이런 상황에서 기존의 방식으로만 광고를 진행한다면 기대하는 성과를 얻기 어렵습니다.",
						k: 0,
					},
				],
				gap: true,
				id: 16,
			},
			{
				type: "p",
				runs: [
					{
						t: "애드리절트는 단순한 병원광고회사가 아닙니다. 병원과 환자 모두의 관점을 이해하고, 실제 효과를 만들어내는 병원마케팅 전략을 제공합니다. 만약 병원마케팅 방향에 대해 고민 중이시라면, 지금이 바로 전략을 점검하고, 효과적인 온라인광고를 시작할 최적의 시점입니다. 병원광고회사를 선택하시기 전, 위에서 말씀드린 세 가지 기준을 꼭 체크해보시기 바랍니다.",
						k: 0,
					},
				],
				gap: true,
				id: 17,
			},
			{
				type: "p",
				runs: [
					{
						t: "병원마케팅, 결국 환자를 향한 정교한 전략이 필요합니다. 애드리절트와 함께라면 그 해답을 찾으실 수 있습니다.",
						k: 0,
					},
				],
				gap: true,
				id: 18,
			},
		],
	},
	{
		slug: "164429049",
		title: "[병원홍보 성공사례] 광고 3개월, 목표치 돌파한 B의원 성공사례",
		excerpt:
			'"새벽에 애드리절트를 발견한건 축복이에요." B의원 실장님과 처음 만난 자리, 약 2시간 정도 대화를 나눴습니다. 기존에 광고회사가 있는데, 병원에 환자가 없다고 하면 본인들의 광고는 문제가 없다고 하고, 뭔가 새로운 방법을 얘기하면 그냥 알겠다고만 한다며 속상한 이야기를 해주셨습니다.',
		summary:
			"기존 대행사에서 성과를 못 본 B의원은 애드리절트로 옮긴 뒤, 인터넷 신규환자 35명에서 광고 3개월 만에 목표였던 70명을 넘어 최대 130명까지 늘었습니다.",
		faq: [
			{
				q: "B의원은 얼마 만에 성과가 났나요?",
				a: "광고 시작 3개월 만에 인터넷 신규환자가 35명에서 최대 130명까지 늘며 목표치였던 70명을 넘어섰습니다.",
			},
			{
				q: "왜 대행사를 애드리절트로 바꿨나요?",
				a: "기존 대행사는 환자가 줄어도 자사 광고에는 문제가 없다고만 하고 한 팀처럼 움직이지 않았습니다. 애드리절트는 병원에 필요한 것을 먼저 제안하며 한 팀으로 관리했습니다.",
			},
		],
		cover: "/images/cases/164429049/1.png",
		coverW: 364,
		coverH: 81,
		blocks: [
			{
				type: "p",
				runs: [
					{
						t: '"새벽에 애드리절트를 발견한건 축복이에요."',
						i: true,
						c: "#3d85c6",
						k: 0,
					},
				],
				gap: true,
				id: 0,
			},
			{
				type: "p",
				runs: [
					{
						t: "B의원 실장님과 처음 만난 자리, 약 2시간 정도 대화를 나눴습니다.",
						k: 0,
					},
				],
				gap: true,
				id: 1,
			},
			{
				type: "p",
				runs: [
					{
						t: "기존에 광고회사가 있는데, 병원에 환자가 없다고 하면 본인들의 광고는 문제가 없다고 하고, 뭔가 새로운 방법을 얘기하면 그냥 알겠다고만 한다며 속상한 이야기를 해주셨습니다. 광고 효과라도 있으면 괜찮았겠지만, 효과도 없고, 무엇보다 한 팀이라는게 느껴지지 않아서 광고회사를 바꾸고자 문의를 하셨던 분입니다.",
						k: 0,
					},
				],
				gap: true,
				id: 2,
			},
			{
				type: "h",
				runs: [
					{
						t: "목표는 인터넷 신규 환자 70명",
						b: true,
						c: "#ff0000",
						fs: 24,
						k: 0,
					},
				],
				gap: true,
				id: 3,
			},
			{
				type: "p",
				runs: [
					{
						t: '미팅 시 인터넷 신규 환자는 35명 정도였습니다. 2배 이상 늘어서 70명이 목표였는데요, 보장할 수는 없지만 최대한 끌어올려보겠다는 다짐을 하고 B의원의 마케팅을 준비하였습니다. 우리 병원에 무엇이 필요한지를 지속적으로 체크하며 B의원 실장님께 제안도 드리고 "한 팀이다!" 라는 마음으로 관리 하였습니다.',
						k: 0,
					},
				],
				gap: true,
				id: 4,
			},
			{
				type: "h",
				runs: [
					{
						t: "3개월 만에 목표 달성!",
						b: true,
						c: "#ff0000",
						fs: 24,
						k: 0,
					},
				],
				gap: true,
				id: 5,
			},
			{
				type: "img",
				src: "/images/cases/164429049/1.png",
				w: 364,
				h: 81,
				alt: "병원홍보",
				id: 6,
			},
			{
				type: "p",
				runs: [
					{
						t: "애드리절트가 온라인으로 B의원을 광고하면, 내부에서는 환자분들에게 더욱 좋은 의료서비스를 제공하기 위해 다방면으로 애쓰셨습니다. 광고를 보고 내원한 환자분들이 실망하지 않도록 아주 작은  디테일까지 신경 쓰시며 준비를 하셨어요. 그 덕에 우수 의원으로 선정되기도 하셨습니다.",
						k: 0,
					},
				],
				gap: true,
				id: 7,
			},
			{
				type: "img",
				src: "/images/cases/164429049/2.png",
				w: 358,
				h: 403,
				alt: "병원홍보성공사례",
				id: 8,
			},
			{
				type: "p",
				runs: [
					{
						t: "그렇게 서로 힘을 합쳐 마케팅 한 결과, 광고 3개월 후 목표했던 것 보다 훨씬 늘어 최대 130명 까지 신규 환자가 내원하는 결과를 만들었습니다.",
						k: 0,
					},
				],
				gap: true,
				id: 9,
			},
			{
				type: "p",
				runs: [
					{
						t: "아래 영상은 B의원 실장님과 통화한 내용을 동의 받고 업로드 한 영상입니다.  실제 후기를 확인하세요 😄",
						k: 0,
					},
				],
				id: 10,
			},
			{
				type: "video",
				videoId: "sg6CAF1B9L4",
				id: 11,
			},
		],
	},
	{
		slug: "164427329",
		title: "[병원마케팅 성공사례] 병원장 월급도 못 가져 가던 D의원, 30% 환자 증가 사례",
		excerpt:
			"수술하는 정형외과였던 D의원은 사모님의 권유로 애드리절트와 만나게 되었습니다. 첫 미팅 때 원장님의 깊은 한숨을 잊지 못합니다. 환자가 많이 없는데, 원장님의 급여도 못가져 갈 만큼 없다고 하셨습니다. 개원 전 부터 아는 지인에게 맡겨서 광고를 하고 있었는데, 광고비는 한 달에 2,80",
		summary:
			"수술 정형외과 D의원은 월 2,800~3,000만원을 파워링크에 쓰고도 환자가 늘지 않았습니다. 애드리절트는 파워링크를 끄고 검색 의도 기반 콘텐츠로 전환해 전년 동기 대비 환자를 30% 늘렸습니다.",
		faq: [
			{
				q: "D의원의 기존 광고비 문제는 무엇이었나요?",
				a: "월 2,800~3,000만원을 대부분 파워링크에 쓰고 있었고, 강남권 병원 수준의 비용에도 환자가 늘지 않았습니다.",
			},
			{
				q: "애드리절트와 진행한 결과는 어땠나요?",
				a: "파워링크를 끄고 검색 의도에 맞춘 콘텐츠로 전환한 뒤 전년 같은 시기 대비 환자가 30% 증가했습니다.",
			},
		],
		cover: "/images/cases/164427329/5.png",
		coverW: 969,
		coverH: 693,
		blocks: [
			{
				type: "p",
				runs: [
					{
						t: "수술하는 정형외과였던 D의원은 사모님의 권유로 애드리절트와 만나게 되었습니다.",
						k: 0,
					},
				],
				gap: true,
				id: 0,
			},
			{
				type: "p",
				runs: [
					{
						t: "첫 미팅 때 원장님의 깊은 한숨을 잊지 못합니다. 환자가 많이 없는데, 원장님의 급여도 못가져 갈 만큼 없다고 하셨습니다. 개원 전 부터 아는 지인에게 맡겨서 광고를 하고 있었는데, 광고비는 한 달에 2,800~3,000만원 정도 사용하고 있던 상황이었습니다.",
						k: 0,
					},
				],
				gap: true,
				id: 1,
			},
			{
				type: "p",
				runs: [
					{
						t: "광고비를 강남 한복판에 있는 병원들 만큼 쓰는데도 환자가 없으면, 무언가 잘못된게 분명했습니다.",
						k: 0,
					},
				],
				gap: true,
				id: 2,
			},
			{
				type: "p",
				runs: [
					{
						t: "D의원을 분석 해보니, 대부분 비용을 파워링크에 쓰고 있더군요.",
						k: 0,
					},
				],
				id: 3,
			},
			{
				type: "h",
				runs: [
					{
						t: "불필요한 지출 없애고, 환자 유입 30% 증가!",
						b: true,
						c: "#ff0000",
						fs: 24,
						k: 0,
					},
				],
				gap: true,
				id: 4,
			},
			{
				type: "p",
				runs: [
					{
						t: "애드리절트와 진행을 결정하시고, 저희가 가장 먼저 했던 작업은 한 달에 2,800~3,000만원 정도 들어가던 파워링크를 OFF로 돌리는 거였습니다.",
						k: 0,
					},
				],
				gap: true,
				id: 5,
			},
			{
				type: "img",
				src: "/images/cases/164427329/1.png",
				w: 382,
				h: 441,
				alt: "정형외과마케팅",
				id: 6,
			},
			{
				type: "p",
				runs: [
					{
						t: "D의원은 수술하는 병원이고, 해당 수술을 하는 병원이 전국에 몇 없었기 때문에 타겟을 전국구로 잡았습니다. 그리고 잠재고객들이 검색할 만한 키워드에, 우리 병원만의 셀링포인트를 담은 콘텐츠를 제작하여 노출 시키기 시작했습니다.",
						k: 0,
					},
				],
				gap: true,
				id: 7,
			},
			{
				type: "p",
				runs: [
					{
						t: "처음 파워링크를 OFF로 돌렸을 때 원장님께서는 많이 불안해 하셨습니다. 적긴 했지만, 그래도 오던 환자마저 안올까봐서요.",
						k: 0,
					},
				],
				gap: true,
				id: 8,
			},
			{
				type: "p",
				runs: [
					{
						t: "하지만 원장님의 기우였습니다. 저희가 작업하는 결과물들이 서서히 노출이 되면서 환자도 같이 늘기 시작했거든요.",
						k: 0,
					},
				],
				id: 9,
			},
			{
				type: "img",
				src: "/images/cases/164427329/2.png",
				w: 375,
				h: 141,
				alt: "정형외과광고",
				id: 10,
			},
			{
				type: "p",
				runs: [
					{
						t: "작년 동일한 시기 대비하여 환자가 30% 증가했다는 피드백도 함께 주셨습니다. 중간에 환자가 잠시 주춤했던 시기가 있긴 했지만, 전체적으로 우상향을 하고 있었습니다. 그렇게 1년 정도 D의원과 함께 병원마케팅을 진행하였습니다.",
						k: 0,
					},
				],
				gap: true,
				id: 11,
			},
			{
				type: "h",
				runs: [
					{
						t: "갑작스러운 이별",
						b: true,
						c: "#ff0000",
						fs: 24,
						k: 0,
					},
				],
				gap: true,
				id: 12,
			},
			{
				type: "p",
				runs: [
					{
						t: "그러던 어느날..",
						k: 0,
					},
				],
				gap: true,
				id: 13,
			},
			{
				type: "p",
				runs: [
					{
						t: "갑자기 원장님으로 부터 이별 통보를 받게 됩니다.",
						k: 0,
					},
				],
				gap: true,
				id: 14,
			},
			{
				type: "img",
				src: "/images/cases/164427329/3.png",
				w: 391,
				h: 526,
				alt: "정형외과성공사례",
				id: 15,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희와 진행하기 전에 맡겼던 분께 다시 광고를 맡기게 되었다 하셨습니다. 그동안 광고도 잘 진행 되었고, 환자도 늘고 있었어서 정말 아쉬웠던 헤어짐이었습니다.",
						k: 0,
					},
				],
				gap: true,
				id: 16,
			},
			{
				type: "p",
				runs: [
					{
						t: "그런데 1개월 후,",
						k: 0,
					},
				],
				gap: true,
				id: 17,
			},
			{
				type: "img",
				src: "/images/cases/164427329/4.png",
				w: 396,
				h: 234,
				alt: "정형외과블로그",
				id: 18,
			},
			{
				type: "p",
				runs: [
					{
						t: "원장님으로 부터 다시 연락이 왔습니다. 광고를 다시 진행 해 줄 수 있는지 하시면서요.",
						k: 0,
					},
				],
				gap: true,
				id: 19,
			},
			{
				type: "p",
				runs: [
					{
						t: "지인분 께 광고를 맡긴 지 한 달 만에 환자 유입이 반토막이 나면서, 운영에 차질이 생겼다는 겁니다. 잊지 않고 연락 주신것에 너무 감사한 순간이었습니다.",
						k: 0,
					},
				],
				id: 20,
			},
			{
				type: "h",
				runs: [
					{
						t: "돌고 돌아, 결국 애드리절트",
						b: true,
						c: "#ff0000",
						fs: 24,
						k: 0,
					},
				],
				gap: true,
				id: 21,
			},
			{
				type: "p",
				runs: [
					{
						t: "그렇게 다시 만난 D의원은, 다시 환자가 늘어나면서 애드리절트의 병원마케팅 성공사례 한 페이지를 만들게 되었습니다.",
						k: 0,
					},
				],
				gap: true,
				id: 22,
			},
			{
				type: "img",
				src: "/images/cases/164427329/5.png",
				w: 969,
				h: 693,
				alt: "정형외과성공사례",
				id: 23,
			},
			{
				type: "p",
				runs: [
					{
						t: "애드리절트의 병원마케팅이 성과를 만드는 이유는, 철저한 우리 병원의 분석 및 맞춤 마케팅 전략 때문입니다. 10년이라는 시간동안 차곡 차곡 쌓인 노하우로, 예산에 따라, 각 분과별, 지역별, 원장님 성형에 따라 등 다양한 요소들을 고려하여 전략을 세웁니다.",
						k: 0,
					},
				],
				gap: true,
				id: 24,
			},
			{
				type: "p",
				runs: [
					{
						t: "지금 만약 마케팅 비용을 많이 쓰고 있는데도 효과를 못 보고 있다면, 분명 문제가 있는것이니 언제든 애드리절트에 문의하시어 제대로된 병원마케팅을 진행하시기 바랍니다.",
						k: 0,
					},
				],
				gap: true,
				id: 25,
			},
		],
	},
	{
		slug: "164425283",
		title:
			'[정형외과마케팅 성공사례] 네이버 신규환자 0명 → 80명 증가 사례, "신규 환자가 진짜 많이 늘었어요!"',
		excerpt:
			"개원 후 6개월 동안 월 약 1,000만원~1,500만원의 광고비를 사용하던 U정형외과에서 문의가 왔습니다. 온라인마케팅에 비용을 정말 많이 쓰는데, 온라인을 통해 유입되는 환자가 0명이거나 많으면 1~2명이라면서요. 개선이 너무 필요한 곳이었습니다. 한 달에 1,000만원 이상을 쓰는",
		summary:
			"개원 후 6개월간 월 1,000~1,500만원을 쓰고도 인터넷 신규환자가 0명이던 U정형외과는, 애드리절트와 함께한 뒤 월 신규환자 80명을 달성했습니다.",
		faq: [
			{
				q: "인터넷 신규환자가 얼마나 늘었나요?",
				a: "인터넷 신규환자 0명에서 월 80명까지 증가했습니다.",
			},
			{
				q: "기존에 광고비를 얼마나 쓰고 있었나요?",
				a: "개원 후 6개월 동안 월 약 1,000만~1,500만원의 광고비를 쓰고 있었습니다.",
			},
		],
		cover: "/images/cases/164425283/1.png",
		coverW: 364,
		coverH: 229,
		blocks: [
			{
				type: "p",
				runs: [
					{
						t: "개원 후 6개월 동안 월 약 1,000만원~1,500만원의 광고비를 사용하던 U정형외과에서 문의가 왔습니다. 온라인마케팅에 비용을 정말 많이 쓰는데, 온라인을 통해 유입되는 환자가 0명이거나 많으면 1~2명이라면서요. 개선이 너무 필요한 곳이었습니다.",
						k: 0,
					},
				],
				gap: true,
				id: 0,
			},
			{
				type: "h",
				runs: [
					{
						t: "철저한 분석부터 시작!",
						b: true,
						c: "#ff0000",
						fs: 24,
						k: 0,
					},
				],
				gap: true,
				id: 1,
			},
			{
				type: "p",
				runs: [
					{
						t: "한 달에 1,000만원 이상을 쓰는데도  온라인을 통한 신규환자가 없는 이유부터 찾아야 했습니다.",
						k: 0,
					},
				],
				gap: true,
				id: 2,
			},
			{
				type: "p",
				runs: [
					{
						t: "여러가지 문제점들이 보였는데요, 크게는 <검색노출>, <콘텐츠> 이 2가지에서 가장 두드러지게 문제점이 발견되었습니다.",
						k: 0,
					},
				],
				id: 3,
			},
			{
				type: "p",
				runs: [
					{
						t: "분석 자료를 토대로 개선할 점들을 정리하여 마케팅 전략을 세웠습니다.",
						k: 0,
					},
				],
				id: 4,
			},
			{
				type: "p",
				runs: [
					{
						t: "저희가 세운 전략대로 진행을 하면",
						k: 0,
					},
				],
				gap: true,
				id: 5,
			},
			{
				type: "p",
				runs: [
					{
						t: "첫째, 예산을 절반 가까이 줄일 수 있었습니다.",
						c: "#ff9900",
						k: 0,
					},
				],
				gap: true,
				id: 6,
			},
			{
				type: "p",
				runs: [
					{
						t: "둘째, 더 많은 신규환자의 확보를 기대할 수 있었습니다.",
						c: "#ff9900",
						k: 0,
					},
				],
				id: 7,
			},
			{
				type: "p",
				runs: [
					{
						t: "원장님께 이 2가지 기대효과를 말씀드렸는데, 처음에는 조금 불안해 하시더군요.",
						k: 0,
					},
				],
				gap: true,
				id: 8,
			},
			{
				type: "p",
				runs: [
					{
						t: '"월 1,000만원을 써도 신규 환자가 안왔었는데 더 적게 쓰면 더 안되는거 아닌가요?"',
						i: true,
						c: "#0b5394",
						k: 0,
					},
				],
				gap: true,
				id: 9,
			},
			{
				type: "p",
				runs: [
					{
						t: "예산이 많으면 당연히 더 많고 다양한 마케팅이 가능합니다. 하지만 이것도 어디에 어떻게 쓰느냐에 따라 결과가 달라지는데요, 기존에는 불필요한 곳에 예산을 쓰고 계셨기 때문에 정말 환자가 올 만한 마케팅 채널만 운영 하고, 추후에 좀 더 공격적인 마케팅이 필요하면 그때 추가로 진행을 하자 안내 드렸습니다.",
						k: 0,
					},
				],
				gap: true,
				id: 10,
			},
			{
				type: "h",
				runs: [
					{
						t: "애드리절트 시작 2주만에 온라인 신규 환자 유입!",
						b: true,
						c: "#ff0000",
						fs: 24,
						k: 0,
					},
				],
				gap: true,
				id: 11,
			},
			{
				type: "img",
				src: "/images/cases/164425283/1.png",
				w: 364,
				h: 229,
				alt: "정형외과마케팅",
				id: 12,
			},
			{
				type: "p",
				runs: [
					{
						t: "광고를 시작하고 2주일 후, 원장님께서 신규 환자의 유입이 조금 늘어나는 것 같다는 피드백을 주셨습니다. 이 당시에는 원내에서 유입경로를 제대로 체크하지 않던 시절이라, 항목별 유입경로 체크를 부탁드렸어요.",
						k: 0,
					},
				],
				gap: true,
				id: 13,
			},
			{
				type: "img",
				src: "/images/cases/164425283/2.png",
				w: 364,
				h: 434,
				alt: "정형외과광고",
				id: 14,
			},
			{
				type: "p",
				runs: [
					{
						t: "그 후로도 지속적으로 환자가 늘어나고 있다는 피드백을 주셨습니다. 동료들은 병원 상황이 많이 어렵다고 앓는 소리를 하는데, U정형외과는 오히려 환자가 늘고 있어 다행이라는 말씀도 해주셨습니다.",
						k: 0,
					},
				],
				gap: true,
				id: 15,
			},
			{
				type: "img",
				src: "/images/cases/164425283/3.png",
				w: 364,
				h: 660,
				alt: "정형외과마케팅성공사례",
				id: 16,
			},
			{
				type: "img",
				src: "/images/cases/164425283/4.png",
				w: 364,
				h: 528,
				alt: "정형외과광고성공사례",
				id: 17,
			},
			{
				type: "p",
				runs: [
					{
						t: "현재는 네이버를 통한 신규 환자만 월 85명을 돌파하며 ",
						k: 0,
					},
					{
						t: "기존 0~1명이던 온라인 신규 환자가 80배 이상 증가",
						c: "#ff0000",
						k: 1,
					},
					{
						t: "하는 결과를 만들었습니다.",
						k: 2,
					},
				],
				gap: true,
				id: 18,
			},
			{
				type: "p",
				runs: [
					{
						t: "U정형외과는 처음부터 월 1,000만원을 광고비로 사용했던 곳은 아니었습니다. 100만원으로 소소하게 시작했다가 환자가 없다는 말을 광고회사에 전달하면, 그 때 마다 비용이 조금씩 늘더니 어느 순간 1,000만원이 넘어갔던 상황이었습니다.",
						k: 0,
					},
				],
				gap: true,
				id: 19,
			},
			{
				type: "p",
				runs: [
					{
						t: "200곳 가까이 되는 병원들의 마케팅을 하면서 매번 느끼는 것은, 마케팅 전략이 정말 중요하다는 것입니다. 온라인 시장은 하루가 멀다하고 수시로 바뀌고, 병원마케팅은 더 심합니다. 그래서 상황에 맞춘, 또 우리 병원에 맞춘 전략을 잘 세워야 합니다.",
						k: 0,
					},
				],
				gap: true,
				id: 20,
			},
			{
				type: "p",
				runs: [
					{
						t: "우리 병원 맞춤 전략은 성공할 확률이 높습니다. 또 리스크를 줄일 수 있습니다.",
						k: 0,
					},
				],
				gap: true,
				id: 21,
			},
			{
				type: "p",
				runs: [
					{
						t: "아래 영상은 U정형외과 원장님의 동의를 받아 사례를 담은 것입니다. 함께 시청해보세요 😄",
						k: 0,
					},
				],
				id: 22,
			},
			{
				type: "video",
				videoId: "HSIv3ohfJpE",
				id: 23,
			},
		],
	},
] as CaseArticle[];

export const SUCCESS_CASES: CardItem[] = CASE_ARTICLES.map((a) => ({
	id: a.slug,
	title: a.title,
	excerpt: a.excerpt,
	image: a.cover,
	href: `/cases/${a.slug}`,
}));

export const getCase = (slug: string) => CASE_ARTICLES.find((a) => a.slug === slug);
