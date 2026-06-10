// public/images/reviews 의 실제 후기·업무 카톡 스크린샷.
// 밴드 높이를 고정하고 aspect-ratio(w/h)로 폭을 자동 산출 → 왜곡·크롭 없이 노출.
// 세로로 긴 컷(ar < 0.8)은 단일 카드, 거의 정사각 컷은 위아래 2장 스택으로 묶는다.

export type ReviewImage = {
	src: string;
	w: number;
	h: number;
	alt: string;
};

export type ReviewUnit =
	| { type: "single"; img: ReviewImage }
	| { type: "stack"; imgs: [ReviewImage, ReviewImage] };

const review = (n: number, w: number, h: number, ext = "jpg"): ReviewImage => ({
	src: `/images/reviews/review-${String(n).padStart(2, "0")}.${ext}`,
	w,
	h,
	alt: "온세상이마케팅이다 고객 후기",
});

const chat = (n: number, w: number, h: number, ext = "jpg"): ReviewImage => ({
	src: `/images/reviews/review-${String(n).padStart(2, "0")}.${ext}`,
	w,
	h,
	alt: "온세상이마케팅이다 업무 진행 대화",
});

// 짧은(거의 정사각) 후기 컷
const R01 = review(1, 364, 408);
const R02 = review(2, 841, 934);
const R03 = review(3, 364, 655, "png");
const R04 = review(4, 364, 408);
const R05 = review(5, 364, 408);
const R06 = review(6, 364, 408);
const R07 = review(7, 364, 912, "png");
const R08 = review(8, 432, 744, "png");

// 세로로 긴 업무 카톡 컷
const C09 = chat(9, 1206, 1613);
const C10 = chat(10, 1206, 1554);
const C11 = chat(11, 691, 1440, "jpeg");
const C12 = chat(12, 1206, 2052);
const C13 = chat(13, 1080, 2632, "jpeg");
const C14 = chat(14, 1206, 1887);
// 스택(짧은 컷 2장)과 단일(세로 긴 컷)을 번갈아 — 흐름에 변화를 준다.
// (marquee가 자동으로 반복 재생)
export const REVIEW_UNITS: ReviewUnit[] = [
	{ type: "stack", imgs: [R01, R03] },
	{ type: "single", img: C09 },
	{ type: "single", img: C12 },
	{ type: "stack", imgs: [R04, R05] },
	{ type: "single", img: C13 },
	{ type: "single", img: R07 },
	{ type: "single", img: C10 },
	{ type: "stack", imgs: [R06, R08] },
	{ type: "single", img: C11 },
	{ type: "single", img: R02 },
	{ type: "single", img: C14 },
];
