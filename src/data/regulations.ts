export type Regulation = {
	profession: string;
	slug: string;
	law: string;
	rule: string;
	allowed: string[];
	prohibited: string[];
};

export const REGULATIONS: Regulation[] = [
	{
		profession: "변호사",
		slug: "lawyer",
		law: "변호사법 §23",
		rule: "변호사 광고에 관한 규정",
		allowed: ["법률 서비스 분야·전문 영역 소개", "연락처·사무소 위치 안내", "학력·경력·논문 게재"],
		prohibited: ["수임 사건 성공률·결과 보장 표현", "다른 변호사와의 비교 광고", "허위·과장 표현"],
	},
	{
		profession: "의사",
		slug: "doctor",
		law: "의료법 §56",
		rule: "의료광고 심의위원회",
		allowed: ["진료 과목·전문 분야 안내", "의료진 학력·경력 소개", "의료기관 시설·장비 소개"],
		prohibited: [
			"치료 효과·완치 보장 표현",
			"환자 후기·경험담 (사전 심의 없이)",
			"다른 의료기관과의 비교 광고",
		],
	},
	{
		profession: "한의사",
		slug: "hanbang",
		law: "의료법 §56",
		rule: "의료광고 심의위원회",
		allowed: ["한방 진료 과목·치료법 안내", "의료진 경력·학력 소개", "시설·장비 현황 안내"],
		prohibited: ["효능 과장·치료 결과 보장", "특정 질환 완치 표현", "비교 광고 (사전 심의 없이)"],
	},
	{
		profession: "세무사",
		slug: "tax",
		law: "세무사법 §12의7",
		rule: "세무사 광고 기준",
		allowed: ["취급 세무 분야 소개", "학력·경력·자격 안내", "사무소 위치·연락처 안내"],
		prohibited: ["성공 실적·절세 수치 보장", "무료·최저가 표기", "다른 세무사와의 비교 광고"],
	},
	{
		profession: "노무사",
		slug: "labor",
		law: "표시·광고의 공정화에 관한 법률",
		rule: "노무사 광고 기준",
		allowed: ["취급 업무 분야 소개", "학력·경력·자격 안내", "사무소 위치·연락처 안내"],
		prohibited: ["사건 처리 결과 표방", "타 노무사와의 비교 광고", "수임료 허위 표시"],
	},
	{
		profession: "수의사",
		slug: "vet",
		law: "표시·광고의 공정화에 관한 법률",
		rule: "수의사 광고 기준",
		allowed: ["진료 과목·전문 분야 소개", "의료진 경력·학력 안내", "진료 시간·위치 안내"],
		prohibited: ["치료 결과 보장 표현", "의약품·시술 효능 과장", "허위·과장 광고"],
	},
	{
		profession: "회계사",
		slug: "cpa",
		law: "공인회계사회 윤리기준",
		rule: "공인회계사 광고 기준",
		allowed: ["취급 회계·세무 업무 소개", "학력·경력·자격 안내", "사무소 위치·연락처 안내"],
		prohibited: ["절세 결과 보장·수치 표방", "타 회계사와의 비교 광고", "수수료 허위 표시"],
	},
	{
		profession: "약사",
		slug: "pharmacist",
		law: "약사법 §68",
		rule: "의약품 광고 기준",
		allowed: ["조제·복약 지도 서비스 안내", "영업시간·위치 안내", "전문 분야 자격 소개"],
		prohibited: ["의약품 효능 과장·완치 보장", "특정 의약품 비교 광고", "허위 처방 정보 표시"],
	},
	{
		profession: "변리사",
		slug: "patent",
		law: "변리사법 §8의5",
		rule: "변리사 광고 기준",
		allowed: ["취급 특허·상표 분야 소개", "학력·경력·자격 안내", "사무소 위치·연락처 안내"],
		prohibited: ["특허 등록 결과 보장 표현", "타 변리사와의 비교 광고", "수수료 허위 표시"],
	},
	{
		profession: "법무사",
		slug: "judicial-scrivener",
		law: "표시·광고의 공정화에 관한 법률",
		rule: "법무사 광고 기준",
		allowed: ["취급 등기·공탁 업무 소개", "학력·경력·자격 안내", "사무소 위치·연락처 안내"],
		prohibited: ["사건 처리 결과 보장 표현", "타 법무사와의 비교 광고", "수임료 허위 표시"],
	},
	{
		profession: "공인중개사",
		slug: "realtor",
		law: "공인중개사법 §18의2",
		rule: "중개대상물 표시·광고 기준",
		allowed: ["중개 가능 지역·물건 종류 안내", "자격·등록 사항 안내", "사무소 위치·연락처 안내"],
		prohibited: ["허위 매물·가격 광고", "다른 중개사와의 비교 광고", "투자 결과 보장 표현"],
	},
	{
		profession: "행정사",
		slug: "admin-agent",
		law: "행정사법 §22",
		rule: "행정사 광고 기준",
		allowed: [
			"취급 인허가·민원 업무 분야 소개",
			"자격·경력·등록 사항 안내",
			"사무소 위치·연락처 안내",
		],
		prohibited: ["소비자를 오도·오해시키는 광고", "사적 관계·영향력 선전", "인허가 결과 보장 표현"],
	},
];
