export type ChannelScore = {
	score: number; // 1–5
	note: string;
};

export type ComparisonRow = {
	axis: string;
	blog: ChannelScore;
	shortform: ChannelScore;
	professional: ChannelScore;
};

export const SERVICE_COMPARISON: ComparisonRow[] = [
	{
		axis: "검색 노출",
		blog: { score: 5, note: "포스팅 누적으로 장기 상위 노출" },
		shortform: { score: 2, note: "검색보다 피드 알고리즘 의존" },
		professional: { score: 5, note: "블로그·SEO 통합 운영" },
	},
	{
		axis: "신뢰도 누적",
		blog: { score: 4, note: "전문성 글로 신뢰 형성" },
		shortform: { score: 5, note: "얼굴 노출 → 빠른 신뢰" },
		professional: { score: 5, note: "채널 간 신뢰 시너지" },
	},
	{
		axis: "의뢰 전환 속도",
		blog: { score: 3, note: "3~6개월 누적 후 전환" },
		shortform: { score: 3, note: "팔로워 → 의뢰 전환까지 시간" },
		professional: { score: 5, note: "복합 채널로 전환 주기 단축" },
	},
	{
		axis: "적합 직군",
		blog: { score: 4, note: "변호사·세무사·노무사에 특히 강함" },
		shortform: { score: 3, note: "의료·한의원·피부과 선호" },
		professional: { score: 5, note: "12개 직군 전체 대응" },
	},
	{
		axis: "운영 부담",
		blog: { score: 4, note: "전담팀이 기획~발행 전담" },
		shortform: { score: 3, note: "촬영 참여 필요 (월 2~4회)" },
		professional: { score: 4, note: "전략·기획·채널 일괄 위임" },
	},
];

export const COMPARISON_CHANNELS = ["블로그", "숏폼", "전문직 통합"] as const;
