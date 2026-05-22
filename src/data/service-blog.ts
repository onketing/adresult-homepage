export const BLOG_PROOF = [
	{ value: 200, suffix: "+", label: "누적 콘텐츠", caption: "전문직 특화 발행 완료" },
	{ value: 100, suffix: "%", label: "광고 심의 통과율", caption: "전문직 광고 기준 통과" },
	{ value: 3, suffix: "배+", label: "평균 문의 증가", caption: "블로그 운영 전 대비" },
	{ value: 90, suffix: "%+", label: "재계약율", caption: "운영 6개월 이후 기준" },
] as const;

export const BLOG_PAIN = [
	"키워드 상위노출은 됐는데, 트래픽이 의뢰로 안 옵니다.",
	"구독자만 늘고, 실제 수임은 그대로입니다.",
	"광고비 줄였더니, 트래픽도 같이 사라졌습니다.",
	"타깃이 아닌 무관한 키워드만 잡혀있습니다.",
] as const;

export const BLOG_PILLARS = [
	{
		num: "01",
		title: "검색 의도 분석",
		body: "의뢰 직전 키워드만 선별합니다. 광고 키워드와 구분합니다.",
	},
	{
		num: "02",
		title: "직군별 규정 통과 카피",
		body: "광고 표현을 피해 신뢰 형성 카피로 작성합니다. 심의 통과율 100%입니다.",
	},
	{
		num: "03",
		title: "누적 자산화",
		body: "광고비 0원. 시간이 지날수록 노출이 누적됩니다.",
	},
] as const;

export const BLOG_PROCESS = [
	{ step: "01", title: "키워드 의도 분석", desc: "의뢰 직전 검색어를 분리합니다." },
	{ step: "02", title: "규정 검토", desc: "직군별 광고 규정 조항을 매칭합니다." },
	{ step: "03", title: "콘텐츠 발행", desc: "규정 통과 + 전환 카피로 발행합니다." },
	{ step: "04", title: "의뢰 추적", desc: "수임·내원·의뢰 단위로 측정합니다." },
] as const;

export const BLOG_VS_ADS = [
	{ axis: "효과 시작", ads: "빠름 (즉시 유입)", blog: "점진적 증가" },
	{ axis: "비용", ads: "고예산 소진형", blog: "저예산 장기 효율형" },
	{ axis: "유지력", ads: "중단 시 즉시 종료", blog: "게시 후 지속 노출" },
	{ axis: "고객 반응", ads: "광고로 인식", blog: "후기/정보로 신뢰 확보" },
	{ axis: "검색 노출", ads: "광고 영역", blog: "자연 검색 상위 가능" },
	{ axis: "결과", ads: "단기 유입 확보", blog: "장기 매출 자산화" },
] as const;

// TODO: 치과·세무사 수치는 실수치로 교체 필요
export const BLOG_CASES = [
	{
		discipline: "변호사",
		metric: "키워드 상위노출",
		before: "월 0건",
		after: "2개월 내 5개 키워드 1페이지",
		caption: "검색 의도 기반 콘텐츠 8편 발행",
		testimonial:
			"올린 글이 의뢰로 이어지는 경험은 처음이었습니다. 키워드 방향이 달라지니 문의 질이 달라졌어요.", // TODO: 실제 후기로 교체
		author: "변호사 H",
	},
	{
		discipline: "치과",
		metric: "신규 내원",
		before: "월 12건",
		after: "3개월간 +175%",
		caption: "의료광고 사전심의 통과 콘텐츠 12편",
		testimonial: "심의 걱정 없이 발행되니까 마음이 편합니다. 내원 수치가 눈에 띄게 달라졌어요.", // TODO: 실제 후기로 교체
		author: "치과 원장 J",
	},
	{
		discipline: "세무사",
		metric: "상담 의뢰",
		before: "월 8건",
		after: "4개월간 +210%",
		caption: "기장·신고 분리 키워드 전략",
		testimonial:
			"기장 의뢰와 신고 의뢰가 분리되니 훨씬 일하기 편해졌습니다. 의뢰 수도 많이 늘었고요.", // TODO: 실제 후기로 교체
		author: "세무사 C",
	},
] as const;
