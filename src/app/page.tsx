import type { Metadata } from "next";
import { CaseHighlight } from "@/components/sections/CaseHighlight";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { HeroIntro } from "@/components/sections/HeroIntro";
import { KPIShowcase } from "@/components/sections/KPIShowcase";
import { OneTeamScene } from "@/components/sections/OneTeamScene";
import { PainPoints } from "@/components/sections/PainPoints";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ProfessionRotator } from "@/components/sections/ProfessionRotator";
import { RealReviews } from "@/components/sections/RealReviews";
import { ServiceCards } from "@/components/sections/ServiceCards";

export const metadata: Metadata = {
	title: "온세상이마케팅이다(온케팅) | 전문직 마케팅 대행사",
	description:
		"온케팅(온세상이마케팅이다)은 변호사·의사·한의사·수의사·노무사·세무사 등 12개 전문직 직군 전용 마케팅 대행사입니다. 처음 맡은 팀이 끝까지 책임집니다. 재계약율 90%+, 광고 규정 위반 0건.",
	keywords: [
		"전문직 마케팅",
		"변호사 마케팅",
		"의사 마케팅",
		"한의사 마케팅",
		"전문직 마케팅 대행사",
		"의료광고 규정",
		"블로그 마케팅",
		"숏폼 마케팅",
	],
};

const homeFaqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: [
		{
			"@type": "Question",
			name: "온세상이마케팅이다는 어떤 회사인가요?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "변호사·의사·한의사·수의사·노무사·세무사 등 12개 전문직 직군 전용 마케팅 대행사입니다. 처음 맡은 팀이 컨설팅·기획·발행·보고를 끝까지 책임집니다. 재계약율 90%+, 광고 규정 위반 0건입니다.",
			},
		},
		{
			"@type": "Question",
			name: "전문직 마케팅이 일반 마케팅과 다른 점은 무엇인가요?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "전문직 광고는 변호사법·의료법·세무사법 등 직군별 법령에 따라 허용·금지 표현이 다릅니다. 일반 마케팅 대행사는 이 규정을 모르는 경우가 많아 위반 콘텐츠를 발행하는 위험이 있습니다. 온세상이마케팅이다는 발행 전 직군별 규정을 직접 검토합니다.",
			},
		},
		{
			"@type": "Question",
			name: "마케팅 성과를 어떤 지표로 보고하나요?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "노출 수·클릭 수가 아닌 상담 신청 수 단위로 보고합니다. 광고비 대비 실제 의뢰·수임 전환에 집중합니다.",
			},
		},
		{
			"@type": "Question",
			name: "첫 상담 비용이 있나요?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "첫 상담은 무료입니다. 계약 압박 없이 진행하며, 영업일 1일 내에 회신드립니다.",
			},
		},
		{
			"@type": "Question",
			name: "담당자가 바뀌지 않나요?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "처음 미팅에서 만난 담당자가 끝까지 봅니다. 외주·담당자 교체 없이 한 팀이 컨설팅부터 보고까지 전 과정을 책임집니다.",
			},
		},
	],
};

export const HomePage = () => {
	return (
		<>
			<script type="application/ld+json">{JSON.stringify(homeFaqSchema)}</script>
			<Hero />
			<HeroIntro />
			<PainPoints />
			<ProfessionRotator />
			<KPIShowcase />
			<CaseHighlight />
			<ServiceCards />
			<ProcessSteps />
			<RealReviews />
			<OneTeamScene />
			<FinalCTA />
		</>
	);
};

export default HomePage;
