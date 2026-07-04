import type { Metadata } from "next";
import { AdresultYouTube } from "@/components/sections/AdresultYouTube";
import { CaseHighlight } from "@/components/sections/CaseHighlight";
import { CloseUpManagement } from "@/components/sections/CloseUpManagement";
import { CostBreakdown } from "@/components/sections/CostBreakdown";
import { CustomStrategy } from "@/components/sections/CustomStrategy";
import { ExcellentCompany } from "@/components/sections/ExcellentCompany";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ReviewVideos } from "@/components/sections/ReviewVideos";
import { TmapPartner } from "@/components/sections/TmapPartner";

export const metadata: Metadata = {
	title: "병원마케팅 애드리절트(ADRESULT) | 결과로 말하는 광고회사",
	description:
		"병원마케팅 대행사 애드리절트 — 진료과별 1:1 맞춤 AIO·숏폼·바이럴 마케팅으로 신환을 늘립니다. 업력 11년·누적 1,272곳.",
	keywords: [
		"병원마케팅",
		"병원마케팅 대행사",
		"병원 AI마케팅",
		"병원 숏폼 마케팅",
		"병원 유튜브",
		"피부과 마케팅",
		"정형외과 마케팅",
		"성형외과 마케팅",
		"애드리절트",
	],
};

const homeFaqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: [
		{
			"@type": "Question",
			name: "애드리절트는 어떤 회사인가요?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "애드리절트(ADRESULT)는 업력 11년의 병원마케팅 전문 대행사입니다. 누적 1,272곳의 마케팅을 맡았고, 전국 200여 곳의 병원과 함께합니다. 상품에 병원을 맞추지 않고, 진료과별 1:1 맞춤 전략으로 신규 환자를 늘립니다.",
			},
		},
		{
			"@type": "Question",
			name: "병원마케팅 비용은 어떻게 되나요?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "병원마다 차이가 있지만 기본적으로는 마케팅 팀장 1명 인건비 정도로 진행합니다. 애드리절트는 상품에 병원을 맞추지 않고 1:1 병원 맞춤으로 전략을 세우기 때문에 병원마다 비용이 달라집니다. 상담을 통해 정확한 비용을 확인하시기 바랍니다.",
			},
		},
		{
			"@type": "Question",
			name: "계약 기간은 어떻게 되나요?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "기본 계약 기간은 3개월 단위입니다.",
			},
		},
		{
			"@type": "Question",
			name: "의료 광고법을 잘 이해하고 있나요?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "애드리절트는 병원마케팅 전문 회사로 의료법을 수시로 학습하고 있습니다. 사내 지식뱅크에 쌓인 3,800여 개의 병원마케팅 지식으로 규정을 지키면서 성과를 만듭니다.",
			},
		},
		{
			"@type": "Question",
			name: "애드리절트와 하면 실제로 효과가 있나요?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "11년 동안 병원마케팅을 이어온 실력은 많은 병원과 대행사에서 인정받고 있습니다. 3,800여 개의 병원마케팅 지식과 애드리절트TV의 500여 개 인사이트 영상이 실력을 증명합니다. 실제 고객사는 신규 환자 40%~333% 증가, 매출 7~8배 상승을 경험했습니다.",
			},
		},
	],
};

export const HomePage = () => {
	return (
		<>
			<script type="application/ld+json">{JSON.stringify(homeFaqSchema)}</script>
			<Hero />
			<ExcellentCompany />
			<ReviewVideos />
			<CustomStrategy />
			<CaseHighlight />
			<CostBreakdown />
			<CloseUpManagement />
			<AdresultYouTube />
			<ProcessSteps />
			<TmapPartner />
			<FinalCTA />
		</>
	);
};

export default HomePage;
