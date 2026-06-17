export const PROFESSIONAL_PROOF = [
	{ value: 12, suffix: "개", label: "직군 커버리지", caption: "변호사부터 행정사까지" },
	{ value: 8, suffix: "년", label: "전문직 마케팅 경험", caption: "같은 분야만 8년" },
	{ value: 0, suffix: "건", label: "광고 규정 위반", caption: "8년 누적 0건" },
	{ value: 100, suffix: "%", label: "광고 심의 통과율", caption: "전문직 광고 기준 통과" },
] as const;

export const PROFESSIONAL_PAIN = [
	"광고 대행사에 맡겼더니, 변호사법 위반 문구가 그대로 올라갔습니다.",
	"키워드 1위는 됐는데, 의뢰는 오지 않습니다.",
	"매월 보고서는 받지만, 의뢰 수치는 없습니다.",
	"담당자가 바뀐 뒤로 콘텐츠 톤이 무너졌습니다.",
] as const;

export const PROFESSIONAL_PILLARS = [
	{
		num: "01",
		title: "직군별 광고 규정 매핑",
		body: "변호사법·의료법·세무사법 조항을 콘텐츠 발행 전에 매칭합니다. 위반 0건이 이 과정에서 나옵니다.",
	},
	{
		num: "02",
		title: "검색 의도 분석",
		body: "키워드 1위가 아닙니다. 의뢰로 이어지는 검색어만 선별합니다.",
	},
	{
		num: "03",
		title: "전담 운영 + 직접 보고",
		body: "담당자는 바뀌지 않습니다. 매월 대표가 직접 보고합니다.",
	},
] as const;

// TODO: 치과·세무사 수치는 실수치로 교체 필요
export const PROFESSIONAL_CASES = [
	{
		discipline: "변호사",
		metric: "키워드 상위노출",
		before: "월 0건",
		after: "2개월 내 5개 키워드 1페이지",
		caption: "사건 분야 3개 직접 수임 연결",
		testimonial:
			"담당자가 바뀌지 않아서 콘텐츠 톤이 일관됩니다. 보고서에 수임 수치가 직접 들어와 있어요.", // TODO: 실제 후기로 교체
		author: "변호사 K",
	},
	{
		discipline: "치과",
		metric: "신규 내원",
		before: "월 12건",
		after: "3개월간 +175%",
		caption: "의료광고 사전심의 통과 콘텐츠 12편",
		testimonial:
			"의료광고 규정 걱정 없이 발행했습니다. 내원이 실제로 늘어서 지금도 계속 운영 중입니다.", // TODO: 실제 후기로 교체
		author: "치과 원장 P",
	},
	{
		discipline: "세무사",
		metric: "상담 의뢰",
		before: "월 8건",
		after: "4개월간 +210%",
		caption: "기장·신고 분리 페르소나 콘텐츠",
		testimonial: "키워드를 분리하고 나서 의뢰 종류가 명확해졌습니다. 원하는 고객만 들어옵니다.", // TODO: 실제 후기로 교체
		author: "세무사 L",
	},
] as const;
