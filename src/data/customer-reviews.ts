import type { CardItem } from "@/components/shared/PaginatedCards";

// 고객후기 — 원장님 영상 후기 텍스트화. 카드 9개씩 노출(페이지네이션).
// 1~3은 실제 후기, 4~6은 이미지에 맞춰 구성한 예시(실제 후기로 교체 예정).
export const CUSTOMER_REVIEWS: CardItem[] = [
	{
		id: "review-01",
		title: "[애드리절트 고객후기] 병원마케팅, 원장님의 고민을 한 번에 해결하다",
		excerpt:
			"이 글은 원장님께서 직접 영상으로 남겨주신 후기를 텍스트화 한 글입니다. <개원 전·협업 전 상황> 이상형 원장님은 아버지가 운영하던 오래된 치과…",
		image: "/images/reviews-video/review-01.png",
	},
	{
		id: "review-02",
		title: "[애드리절트 고객후기] 망할 뻔한 병원, 마케팅 이후 매출 곡선이 달라졌다",
		excerpt:
			"이 글은 원장님께서 직접 영상으로 남겨주신 후기를 텍스트화 한 글입니다. 통화로 드러난 병원의 절박한 고민 <위기의 시작, 알려지지 못한 병원> 처음 문을 열…",
		image: "/images/reviews-video/review-02.png",
	},
	{
		id: "review-03",
		title: "[애드리절트 고객후기] 병원마케팅, 현장의 생생한 통화로 듣는 정형외과 성공 사례",
		excerpt:
			"이 글은 원장님께서 직접 영상으로 남겨주신 후기를 텍스트화 한 글입니다. 정형외과, 실제 통화로 확인한 병원마케팅 성과 <개원 초기 불안과 경쟁의 압박> 정형…",
		image: "/images/reviews-video/review-03.png",
	},
	{
		id: "review-04",
		title: "[애드리절트 고객후기] 피부과 원장님이 직접 전한 마케팅 후기",
		excerpt:
			"이 글은 원장님께서 직접 영상으로 남겨주신 후기를 텍스트화 한 글입니다. 신환 문의가 늘고 실제 내원으로 이어지기까지의 과정을…",
		image: "/images/reviews-video/review-04.png",
	},
	{
		id: "review-05",
		title: "[애드리절트 고객후기] 치과 원장님, 협업 후 달라진 하루",
		excerpt:
			"이 글은 원장님께서 직접 영상으로 남겨주신 후기를 텍스트화 한 글입니다. 예약과 문의가 다시 차오르기 시작한 이야기를…",
		image: "/images/reviews-video/review-05.png",
	},
	{
		id: "review-06",
		title: "[애드리절트 고객후기] 한의원 원장님이 말하는 신환 변화",
		excerpt:
			"이 글은 원장님께서 직접 영상으로 남겨주신 후기를 텍스트화 한 글입니다. 마케팅 방향을 바꾸고 신규 환자가 늘어난 변화를…",
		image: "/images/reviews-video/review-06.png",
	},
];
