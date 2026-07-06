export type PainPoint = {
	id: string;
	text: string;
};

export type WhyUsCard = {
	icon: string;
	title: string;
	description: string;
};

export type ComparisonRow = {
	general: string;
	adresult: string;
};

export type ServiceStep = {
	step: number;
	label: string;
};

export type Service = {
	index: string;
	category: string;
	title: string;
	description: string;
	steps: ServiceStep[];
};

export type Case = {
	field: string;
	quote: string;
	metric: string;
	period: string;
	anonymous: string;
	profession?: string;
};

export type Testimonial = {
	text: string;
	author: string;
	role: string;
	profession?: string;
};

export type TeamMember = {
	nameEn: string;
	nameKo: string;
	role: string;
	bio: string;
	quote?: string;
	careers?: string[];
	photo?: string;
};

export type FaqCategory =
	| "비용"
	| "진행 안내"
	| "광고규정"
	| "운영보고"
	| "성과"
	| "해지환불"
	| "AIO 마케팅"
	| "숏폼 마케팅"
	| "스레드 마케팅"
	| "카페바이럴"
	| "블로그 마케팅"
	| "상담 안내";

export type FaqItem = {
	question: string;
	answer: string;
	category: FaqCategory;
	featured?: boolean;
};

export type NavChild = {
	label: string;
	href: string;
	description?: string;
	icon: string;
	flagship?: boolean;
};

export type NavItem =
	| { label: string; href: string; children?: undefined }
	| { label: string; href: string; matchPrefix?: string; children: NavChild[] };
