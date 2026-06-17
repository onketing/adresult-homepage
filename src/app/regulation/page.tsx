import type { Metadata } from "next";
import { AboutMidCTA } from "@/components/sections/AboutMidCTA";
import { RegulationBeforeAfter } from "@/components/sections/RegulationBeforeAfter";
import { RegulationChecklist } from "@/components/sections/RegulationChecklist";
import { RegulationHero } from "@/components/sections/RegulationHero";
import { RegulationLawSwitcher } from "@/components/sections/RegulationLawSwitcher";
import { RegulationPledge } from "@/components/sections/RegulationPledge";
import { RegulationStats } from "@/components/sections/RegulationStats";

const regulationSchema = {
	"@context": "https://schema.org",
	"@type": "WebPage",
	name: "전문직 광고 규정 가이드",
	url: "https://onketing.kr/regulation",
	description:
		"변호사법 §23, 의료법 §56, 수의사법 §12, 공인노무사법, 세무사법 §22의2 등 12개 전문직 직군의 광고 규정을 항목별로 정리합니다. 허용 표현, 금지 표현, 위반 사례, 수정 카피를 제공합니다.",
	publisher: {
		"@type": "Organization",
		name: "온세상이마케팅이다",
		url: "https://onketing.kr",
	},
	about: [
		{
			"@type": "Thing",
			name: "변호사 광고 규정",
			description: "변호사법 제23조 기준 허용·금지 표현",
		},
		{
			"@type": "Thing",
			name: "의료광고 규정",
			description: "의료법 제56조 기준 사전심의 대상 및 금지 표현",
		},
		{ "@type": "Thing", name: "한의사 광고 규정", description: "의료법 적용 한의원 광고 규정" },
		{ "@type": "Thing", name: "수의사 광고 규정", description: "수의사법 제12조 기준" },
		{ "@type": "Thing", name: "노무사 광고 규정", description: "공인노무사법 기준" },
		{ "@type": "Thing", name: "세무사 광고 규정", description: "세무사법 제22조의2 기준" },
	],
};

export const metadata: Metadata = {
	title: "전문직 광고 규정 가이드 | 온세상이마케팅이다",
	alternates: { canonical: "/regulation" },
	description:
		"변호사법 §23·의료법 §56·세무사법 §22의2 등 12개 전문직 광고 규정 완전 정리. 허용 표현, 금지 표현, 위반 사례를 직군별로 확인하세요.",
	keywords: [
		"전문직 광고 규정",
		"변호사 광고 규정",
		"변호사법 광고",
		"의료광고 심의",
		"의료법 광고",
		"한의사 광고 규정",
		"세무사 광고",
		"노무사 광고",
		"수의사 광고 규정",
		"전문직 광고 금지",
	],
};

export const RegulationPage = () => (
	<>
		<script type="application/ld+json">{JSON.stringify(regulationSchema)}</script>
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
