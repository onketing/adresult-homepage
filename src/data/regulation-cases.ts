export type RegulationCase = {
	id: string;
	field: string;
	law: string;
	before: string;
	after: string;
	reason: string;
};

export const REGULATION_CASES: RegulationCase[] = [
	{
		id: "dermatology",
		field: "피부과",
		law: "의료법 제56조",
		before: "국내 최고 피부과! 시술 후 만족 100% 보장.",
		after: "레이저·필러 시술 안내 — 부작용·주의사항은 상담에서 확인하세요.",
		reason: "'최고', '보장' 등 절대적·단정적 표현 일체 금지",
	},
	{
		id: "plastic-surgery",
		field: "성형외과",
		law: "의료법 제56조",
		before: "부작용 없는 완벽한 수술! 결과를 보장합니다.",
		after: "수술 항목·회복 과정 안내 — 부작용·주의사항을 함께 설명합니다.",
		reason: "부작용 미표기 및 결과 보장 표현 금지",
	},
	{
		id: "orthopedics",
		field: "정형외과",
		law: "의료법 제56조",
		before: "무릎 통증 100% 해결! 수술 없이 완치.",
		after: "관절·척추 진료 안내 — 상태에 따라 치료 방향을 상담합니다.",
		reason: "치료 효과·완치 보장 및 단정 표현 금지",
	},
	{
		id: "dental",
		field: "치과",
		law: "의료법 제56조",
		before: "임플란트 최저가! 평생 보증 확실합니다.",
		after: "임플란트 진료 안내 — 진단 후 치료 계획을 상담합니다.",
		reason: "최저가 유인 및 성공률·보증 보장 표현 금지",
	},
];
