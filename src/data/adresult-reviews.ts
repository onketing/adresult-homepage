// 애드리절트 고객사 의사 리얼 후기 (adresult.kr "리얼 후기" 캐러셀).
// 영상 매핑은 슬라이드의 data-no(갤러리 인덱스) → 갤러리 영상 순서로 복원했다.
// 썸네일은 adresult 원본 포트레이트를 그대로 가져와 public/images/reviews-video/ 에 저장.
export type ReviewVideo = {
	videoId: string;
	quote: string;
	author: string;
	image: string;
};

export const ADRESULT_REVIEWS: ReviewVideo[] = [
	{
		videoId: "ibZXzqVgZuM",
		quote: "환자 오는 게 체감됩니다",
		author: "S의원 대표원장",
		image: "/images/reviews-video/review-04.png",
	},
	{
		videoId: "mGQKtHOqiAY",
		quote: "문의가 빠르게 늘었어요",
		author: "F의원 실장",
		image: "/images/reviews-video/review-05.png",
	},
	{
		videoId: "1iujpF5ZgeQ",
		quote: "덕분에 최고 매출 찍었죠.",
		author: "P의원 대표원장",
		image: "/images/reviews-video/review-06.png",
	},
	{
		videoId: "B80dSjQPN1Y",
		quote: "개원초기에 힘이 많이 됐어요",
		author: "M의원 대표원장",
		image: "/images/reviews-video/review-01.png",
	},
	{
		videoId: "g-0eWXACWe8",
		quote: "매출 7~8배 늘었어요",
		author: "H병원 대표원장",
		image: "/images/reviews-video/review-02.png",
	},
	{
		videoId: "VM4PbxUJWdI",
		quote: "실제 매출로 이어지더라구요",
		author: "O의원 실장",
		image: "/images/reviews-video/review-03.png",
	},
];
