import type { CardItem } from "@/components/shared/PaginatedCards";

// 애드리절트 병원마케팅 성공사례 — adresult.kr 원문 이식(scripts/port-cases.py 자동 생성).
// 상단 브랜드 헤더/하단 CTA는 상세 페이지(src/app/cases/[slug])에서 공통 렌더.
export type CaseRun = {
	t?: string;
	b?: boolean;
	i?: boolean;
	u?: boolean;
	c?: string;
	br?: boolean;
	k?: number;
};
export type CaseBlock = {
	id?: number;
	type: "h" | "p" | "img" | "video";
	runs?: CaseRun[];
	src?: string;
	alt?: string;
	w?: number;
	h?: number;
	videoId?: string;
};
export type CaseArticle = {
	slug: string;
	title: string;
	excerpt: string;
	cover: string;
	coverW: number;
	coverH: number;
	blocks: CaseBlock[];
};

export const CASE_ARTICLES: CaseArticle[] = [
	{
		slug: "164425283",
		title:
			'[정형외과마케팅 성공사례] 네이버 신규환자 0명 → 80명 증가 사례, "신규 환자가 진짜 많이 늘었어요!"',
		excerpt:
			"개원 후 6개월 동안 월 약 1,000만원~1,500만원의 광고비를 사용하던 U정형외과에서 문의가 왔습니다. 온라인마케팅에 비용을 정말 많이 쓰는데, 온라인을 통해 유입되는 환자가",
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
				id: 0,
			},
			{
				type: "h",
				runs: [
					{
						t: "철저한 분석부터 시작!",
						b: true,
						c: "#ff0000",
						k: 0,
					},
				],
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
				id: 10,
			},
			{
				type: "h",
				runs: [
					{
						t: "애드리절트 시작 2주만에 온라인 신규 환자 유입!",
						b: true,
						c: "#ff0000",
						k: 0,
					},
				],
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
