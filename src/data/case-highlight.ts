// 애드리절트 실제 병원마케팅 성공사례 (adresult.kr "SUCCESS STORY" 기준).
export const CASE_HIGHLIGHTS = [
	{
		label: "사례 1.",
		client: "U의원",
		pct: 40,
		beforeValue: 50,
		afterValue: 70,
		afterUnit: "명",
		quote: "신규 환자가 진짜 많이 늘었어요!",
		quoteAuthor: "U의원 대표원장",
		adSavingAmount: 650,
		adCostBefore: 1000,
		adCostAfter: 350,
	},
	{
		label: "사례 2.",
		client: "D의원",
		pct: 20,
		beforeValue: 50,
		afterValue: 60,
		afterUnit: "명",
		quote: "매출이 늘어서 숨통이 트여요!",
		quoteAuthor: "D의원 대표원장",
		adSavingAmount: 1800,
		adCostBefore: 2800,
		adCostAfter: 1000,
	},
] as const;

export const CASE_HIGHLIGHTS_SINGLE = [
	{
		label: "사례 3.",
		client: "B의원",
		pct: 333,
		beforeValue: 30,
		afterValue: 130,
		afterUnit: "명",
		period: "3개월",
		quote: "새벽에 애드리절트를 찾은 건 축복이었어요.",
		quoteAuthor: "B의원 대표원장",
	},
	{
		label: "사례 4.",
		client: "S성형외과의원",
		pct: 228,
		beforeValue: 45,
		afterValue: 148,
		afterUnit: "명",
		period: "6개월",
		quote: "환자가 꾸준히 계속 늘어요.",
		quoteAuthor: "S성형외과의원 대표원장",
	},
] as const;
