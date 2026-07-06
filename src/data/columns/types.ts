// 칼럼(구 인사이트) 발행 시스템 — 공용 타입
//
// [칼럼 추가 방법]
// 1. 해당 분과 파일(src/data/columns/{분과}.ts)의 POSTS 배열에 객체 추가
// 2. slug: 분과 접두어 + kebab-case (사이트 전체에서 고유)
// 3. date: "YYYY-MM" — 허브에서 최신순 정렬
// 4. 의료광고법 금지 표현(보장/최고/무조건/폭증/100%) 사용 금지, 수치·사례 창작 금지

export type ColumnCategory =
	| "병원 AIO"
	| "병원 숏폼"
	| "피부과 마케팅"
	| "성형외과 마케팅"
	| "정형외과 마케팅"
	| "치과 마케팅"
	| "한의원 마케팅"
	| "병원 블로그"
	| "카페바이럴"
	| "병원 평판관리"
	| "의료광고법"
	| "애드리절트 소식";

export type ColumnSection = {
	h2: string;
	paragraphs: string[]; // 1~3문단
	bullets?: string[]; // 선택 — 목록 박스
};

export type ColumnPost = {
	slug: string;
	category: ColumnCategory;
	title: string;
	excerpt: string; // 2~3문장 (허브 카드 + meta description)
	date: string; // "YYYY-MM"
	readingMinutes: number; // 3~6
	intro: string[]; // 도입 1~2문단
	sections: ColumnSection[]; // 본문 3~5섹션
	conclusion: string; // 마무리 문단 (부드러운 상담 유도 허용)
	related?: { label: string; href: string }[]; // 관련 내부 링크 3~5
};
