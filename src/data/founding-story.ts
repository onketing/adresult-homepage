export type FoundingStoryStat = {
	id: string;
	value: number;
	suffix: string;
	label: string;
	description: string;
};

export const FOUNDING_STORY = {
	paragraphs: [
		"노출만 늘리는 대행사들이 너무 많았습니다. 노출이 늘어도 의뢰로 이어지지 않으면 광고비만 나갑니다. 전문직은 일반 광고와 다른 영역입니다.",
		"8년간 전문직 마케팅을 직접 하면서 깨달았습니다. 노출이 아니라 의뢰가 답이라는 것. 노출이 늘어도 신뢰가 없으면 전화는 오지 않습니다.",
		"그래서 애드리절트를 시작했습니다. 처음부터 끝까지, 한 팀이 직접 만드는 마케팅. 담당자는 바뀌지 않고, 대표가 모든 의뢰를 직접 봅니다.",
	],
	quote: "노출은 누구나 만듭니다. 의뢰는 다릅니다.",
	quoteAuthor: "김태훈 / 애드리절트 대표",
	stats: [
		{
			id: "years",
			value: 8,
			suffix: "년",
			label: "전문직 마케팅 경력",
			description: "대표가 직접 운영한 기간",
		},
		{
			id: "fields",
			value: 12,
			suffix: "개",
			label: "전문직 직군",
			description: "12개 직군 검색 의도 직접 학습",
		},
		{
			id: "retention",
			value: 90,
			suffix: "%+",
			label: "재계약율",
			description: "장기 유지 클라이언트 기준",
		},
	] as FoundingStoryStat[],
};
