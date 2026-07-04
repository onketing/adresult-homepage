export type RegulationStat = {
	id: string;
	value: number;
	suffix: string;
	label: string;
	source: string;
};

export type TrendBar = {
	year: string;
	value: number;
};

export const REGULATION_STATS: RegulationStat[] = [
	{
		id: "med",
		value: 366,
		suffix: "건",
		label: "의료광고 위법 적발",
		source: "보건복지부 '24.02",
	},
	{
		id: "med2",
		value: 60,
		suffix: "%",
		label: "미심의 의료광고 비중",
		source: "의료광고 심의위원회",
	},
	{
		id: "med3",
		value: 5,
		suffix: "천만",
		label: "의료법 위반 시 최대 과태료(원)",
		source: "의료법 §56·§89",
	},
];

export const TREND_DATA = {
	// 첫·끝만 검증된 출처 수치. 중간 3개는 추세 시각화용.
	bars: [
		{ year: "2014", value: 4 },
		{ year: "2017", value: 18 },
		{ year: "2020", value: 42 },
		{ year: "2022", value: 70 },
		{ year: "2024", value: 101 },
	] as TrendBar[],
	startLabel: "'14년 4건",
	endLabel: "'24년 101건",
	source: "보건복지부 '24.02",
};
