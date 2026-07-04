import type { Metadata } from "next";
import { AboutMidCTA } from "@/components/sections/AboutMidCTA";
import { RegulationBeforeAfter } from "@/components/sections/RegulationBeforeAfter";
import { RegulationChecklist } from "@/components/sections/RegulationChecklist";
import { RegulationHero } from "@/components/sections/RegulationHero";
import { RegulationLawSwitcher } from "@/components/sections/RegulationLawSwitcher";
import { RegulationPledge } from "@/components/sections/RegulationPledge";
import { RegulationStats } from "@/components/sections/RegulationStats";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";

const regulationSchema = {
	"@context": "https://schema.org",
	"@type": "WebPage",
	name: "의료광고 규정 가이드",
	url: "https://onketing.kr/regulation",
	description:
		"의료법 §56 의료광고 사전심의 기준을 진료과별로 정리합니다. 피부과·성형외과·정형외과·치과·한의원 등 병원 광고의 허용 표현, 금지 표현, 위반 사례, 수정 카피를 제공합니다.",
	publisher: {
		"@type": "Organization",
		name: "애드리절트",
		url: "https://onketing.kr",
	},
	about: [
		{
			"@type": "Thing",
			name: "의료광고 규정",
			description: "의료법 제56조 기준 사전심의 대상 및 금지 표현",
		},
		{
			"@type": "Thing",
			name: "피부과 광고 규정",
			description: "의료법 기준 피부과 광고 허용·금지 표현",
		},
		{
			"@type": "Thing",
			name: "성형외과 광고 규정",
			description: "의료법 기준 성형외과 광고 허용·금지 표현",
		},
		{
			"@type": "Thing",
			name: "정형외과 광고 규정",
			description: "의료법 기준 정형외과 광고 허용·금지 표현",
		},
		{
			"@type": "Thing",
			name: "치과 광고 규정",
			description: "의료법 기준 치과 광고 허용·금지 표현",
		},
		{ "@type": "Thing", name: "한의원 광고 규정", description: "의료법 적용 한의원 광고 규정" },
	],
};

export const metadata: Metadata = {
	title: "의료광고 규정 가이드 | 애드리절트",
	alternates: { canonical: "/regulation" },
	description:
		"의료법 §56 의료광고 사전심의 기준을 진료과별로 정리했습니다. 피부과·성형외과·정형외과·치과 광고의 허용 표현, 금지 표현, 위반 사례를 확인하세요.",
	keywords: [
		"의료광고 규정",
		"의료광고 심의",
		"의료법 광고",
		"병원 광고 규정",
		"피부과 광고 규정",
		"성형외과 광고 규정",
		"정형외과 광고 규정",
		"치과 광고 규정",
		"한의원 광고 규정",
		"의료광고 금지 표현",
	],
};

export const RegulationPage = () => (
	<>
		<script type="application/ld+json">{JSON.stringify(regulationSchema)}</script>
		<BreadcrumbJsonLd
			items={[
				{ name: "홈", path: "" },
				{ name: "광고 규정 가이드", path: "/regulation" },
			]}
		/>
		<RegulationHero />
		<RegulationStats />
		<RegulationLawSwitcher />
		<RegulationBeforeAfter />
		<RegulationChecklist />
		<RegulationPledge />
		<AboutMidCTA />
	</>
);

export default RegulationPage;
