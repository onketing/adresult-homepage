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
		profession: "피부과",
		slug: "dermatology",
		law: "의료법 §56",
		rule: "의료광고 사전심의",
		allowed: ["시술 항목·장비 종류 안내", "의료진 학력·경력 소개", "진료 시간·위치 안내"],
		prohibited: [
			"시술 효과·만족도 보장 표현",
			"치료 전후 사진 (사전 심의 없이)",
			"다른 병원과의 비교 광고",
		],
	},
	{
		profession: "성형외과",
		slug: "plastic-surgery",
		law: "의료법 §56",
		rule: "의료광고 사전심의",
		allowed: ["수술 항목·전문 분야 안내", "의료진 자격·경력 소개", "시설·장비 현황 안내"],
		prohibited: [
			"수술 결과 보장·완벽 표현",
			"환자 후기·경험담 (사전 심의 없이)",
			"부작용·주의사항 미표기 광고",
		],
	},
	{
		profession: "정형외과",
		slug: "orthopedics",
		law: "의료법 §56",
		rule: "의료광고 사전심의",
		allowed: ["진료 과목·치료 분야 안내", "의료진 경력·학력 소개", "재활·물리치료 프로그램 안내"],
		prohibited: [
			"치료 효과·완치 보장 표현",
			"통증 100% 해결 등 단정 표현",
			"다른 의료기관과의 비교 광고",
		],
	},
	{
		profession: "치과",
		slug: "dental",
		law: "의료법 §56",
		rule: "의료광고 사전심의",
		allowed: ["진료 항목·임플란트 종류 안내", "의료진 자격·경력 소개", "장비·진료 시간 안내"],
		prohibited: [
			"시술 성공률·수명 보장 표현",
			"최저가·이벤트 유인 광고",
			"환자 후기 (사전 심의 없이)",
		],
	},
	{
		profession: "한의원",
		slug: "korean-medicine",
		law: "의료법 §56",
		rule: "의료광고 사전심의",
		allowed: ["한방 진료 과목·치료법 안내", "의료진 경력·학력 소개", "시설·장비 현황 안내"],
		prohibited: ["효능 과장·치료 결과 보장", "특정 질환 완치 표현", "비교 광고 (사전 심의 없이)"],
	},
	{
		profession: "이비인후과",
		slug: "ent",
		law: "의료법 §56",
		rule: "의료광고 사전심의",
		allowed: ["진료 과목·검사 항목 안내", "의료진 학력·경력 소개", "진료 시간·위치 안내"],
		prohibited: [
			"치료 효과·완치 보장 표현",
			"환자 후기·경험담 (사전 심의 없이)",
			"다른 병원과의 비교 광고",
		],
	},
	{
		profession: "안과",
		slug: "ophthalmology",
		law: "의료법 §56",
		rule: "의료광고 사전심의",
		allowed: ["시력교정·수술 항목 안내", "의료진 자격·경력 소개", "장비·진료 시간 안내"],
		prohibited: [
			"수술 결과·시력 회복 보장",
			"부작용·주의사항 미표기 광고",
			"다른 의료기관과의 비교 광고",
		],
	},
	{
		profession: "산부인과",
		slug: "obgyn",
		law: "의료법 §56",
		rule: "의료광고 사전심의",
		allowed: ["진료 과목·검진 항목 안내", "의료진 경력·학력 소개", "진료 시간·위치 안내"],
		prohibited: [
			"치료 효과·성공률 보장 표현",
			"환자 후기 (사전 심의 없이)",
			"비교 광고 (사전 심의 없이)",
		],
	},
];
