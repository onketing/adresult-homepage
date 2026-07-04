import type { Metadata } from "next";
import { AboutMidCTA } from "@/components/sections/AboutMidCTA";
import { CaseTestimonial } from "@/components/sections/CaseTestimonial";
import { DisciplineGrid } from "@/components/sections/DisciplineGrid";
import { ProfessionalHero } from "@/components/sections/ProfessionalHero";
import { ServiceEngagementPolicy } from "@/components/sections/ServiceEngagementPolicy";
import { ServicePainPoints } from "@/components/sections/ServicePainPoints";
import { ServiceProcess } from "@/components/sections/ServiceProcess";
import { ServiceProofStrip } from "@/components/sections/ServiceProofStrip";
import { ServiceWhatWeDo } from "@/components/sections/ServiceWhatWeDo";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import {
	PROFESSIONAL_CASES,
	PROFESSIONAL_PAIN,
	PROFESSIONAL_PILLARS,
	PROFESSIONAL_PROOF,
} from "@/data/service-professional";
import { WORK_PROCESS } from "@/data/work-process";

export const metadata: Metadata = {
	title: "전문직 마케팅 대행사 | 애드리절트",
	alternates: { canonical: "/services/professional" },
	description:
		"변호사·의사·한의사·수의사·노무사·세무사 등 12개 전문직 전용 마케팅 대행사. 광고 규정을 직접 검토하고 수임·의뢰 전환을 설계합니다. 재계약율 90%+, 광고 규정 위반 0건.",
	keywords: [
		"전문직 마케팅",
		"전문직 마케팅 대행사",
		"변호사 마케팅",
		"의사 마케팅",
		"한의사 마케팅",
		"수의사 마케팅",
		"노무사 마케팅",
		"세무사 마케팅",
		"전문직 광고 대행",
		"전문직 광고 규정",
	],
};

const professionalServiceSchema = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "전문직 마케팅",
	alternateName: "전문직 통합 마케팅",
	url: "https://onketing.kr/services/professional",
	provider: {
		"@type": "Organization",
		name: "애드리절트",
		url: "https://onketing.kr",
	},
	description:
		"변호사·의사·한의사·수의사·노무사·세무사 등 12개 전문직 직군 전용 마케팅. 직군별 광고 규정을 직접 검토하고 블로그·숏폼 콘텐츠를 발행합니다. 수임·의뢰 전환을 목표로 설계합니다.",
	areaServed: "KR",
	serviceType: "전문직 마케팅 대행",
	audience: {
		"@type": "Audience",
		audienceType: "변호사, 의사, 한의사, 수의사, 노무사, 세무사",
	},
	hasOfferCatalog: {
		"@type": "OfferCatalog",
		name: "전문직 마케팅 서비스",
		itemListElement: [
			{ "@type": "Offer", itemOffered: { "@type": "Service", name: "키워드 분석 및 콘텐츠 기획" } },
			{
				"@type": "Offer",
				itemOffered: { "@type": "Service", name: "광고 규정 검토 및 콘텐츠 발행" },
			},
			{ "@type": "Offer", itemOffered: { "@type": "Service", name: "월간 상담 신청 수 보고" } },
		],
	},
};

const professionalFaqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: [
		{
			"@type": "Question",
			name: "전문직 마케팅 전문 대행사를 사용해야 하는 이유가 무엇인가요?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "전문직 광고는 변호사법·의료법·세무사법 등 직군별 법령에 따라 허용·금지 표현이 다릅니다. 위반 시 행정처분·징계·형사처벌로 이어질 수 있습니다. 애드리절트는 발행 전 직군별 규정을 직접 검토하며, 광고 규정 위반 0건을 유지하고 있습니다.",
			},
		},
		{
			"@type": "Question",
			name: "변호사 마케팅 대행사를 선택할 때 무엇을 봐야 하나요?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "변호사법 제23조 광고 규정 이해 여부, 담당자 교체 빈도, 보고 지표(노출 수 vs 상담 신청 수)를 확인하세요. 애드리절트는 규정 검토 → 기획 → 발행 → 보고 전 과정을 한 팀이 담당합니다.",
			},
		},
		{
			"@type": "Question",
			name: "어떤 전문직 직군을 담당하나요?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "변호사, 의사, 한의사, 세무사, 노무사, 회계사, 수의사, 약사, 변리사, 법무사, 공인중개사, 행정사 등 12개 전문직 직군을 담당합니다.",
			},
		},
		{
			"@type": "Question",
			name: "전문직 마케팅 비용은 어떻게 책정되나요?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "직군·채널·콘텐츠 유형에 따라 다릅니다. 일률적인 가격표를 제공하지 않으며, 첫 상담(무료)에서 현황을 파악한 뒤 맞춤 제안드립니다. 계약 압박 없이 진행합니다.",
			},
		},
		{
			"@type": "Question",
			name: "재계약율 90%+라는 수치는 어떻게 가능한가요?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "처음 미팅에서 만난 담당자가 끝까지 봅니다. 외주·담당자 교체 없이 한 팀이 컨설팅부터 보고까지 전 과정을 책임지기 때문에 클라이언트 신뢰가 유지됩니다.",
			},
		},
	],
};

export const ProfessionalServicePage = () => {
	return (
		<>
			<script type="application/ld+json">{JSON.stringify(professionalServiceSchema)}</script>
			<script type="application/ld+json">{JSON.stringify(professionalFaqSchema)}</script>
			<BreadcrumbJsonLd
				items={[
					{ name: "홈", path: "" },
					{ name: "서비스", path: "/services" },
					{ name: "전문직 마케팅", path: "/services/professional" },
				]}
			/>
			<ProfessionalHero />
			<ServiceProofStrip items={PROFESSIONAL_PROOF} />
			<DisciplineGrid />
			<ServicePainPoints items={PROFESSIONAL_PAIN} />
			<ServiceWhatWeDo items={PROFESSIONAL_PILLARS} />
			<CaseTestimonial cases={PROFESSIONAL_CASES} />
			<ServiceProcess steps={WORK_PROCESS} footnote="5단계 모두 대표가 직접 검수합니다." />
			<ServiceEngagementPolicy />
			<AboutMidCTA />
		</>
	);
};

export default ProfessionalServicePage;
