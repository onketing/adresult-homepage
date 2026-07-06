import type { Metadata } from "next";
import { AdresultYouTube } from "@/components/sections/AdresultYouTube";
import { BranchIntroSection } from "@/components/sections/BranchIntroSection";
import { CaseHighlight } from "@/components/sections/CaseHighlight";
import { CloseUpManagement } from "@/components/sections/CloseUpManagement";
import { CostBreakdown } from "@/components/sections/CostBreakdown";
import { CustomStrategy } from "@/components/sections/CustomStrategy";
import { DepartmentsSection } from "@/components/sections/DepartmentsSection";
import { ExcellentCompany } from "@/components/sections/ExcellentCompany";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { MarketShift } from "@/components/sections/MarketShift";
import { PackageSection } from "@/components/sections/PackageSection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ReviewVideos } from "@/components/sections/ReviewVideos";
import { TmapPartner } from "@/components/sections/TmapPartner";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";

export const metadata: Metadata = {
	title: "애드리절트 마포지사 | 결과로 말하는 병원마케팅 회사 (본사 직영)",
	description:
		"병원마케팅회사 애드리절트 — 진료과·지역·병원 상황에 따라 AIO·숏폼·스레드·카페바이럴·블로그를 필요한 만큼 조합하는 병원마케팅전문업체. 애드리절트 기준 업력 11년·누적 1,272곳.",
	keywords: [
		"병원마케팅회사",
		"병원마케팅대행사",
		"병원마케팅업체",
		"병원마케팅전문업체",
		"병원온라인마케팅",
		"병원광고회사",
		"병원홍보대행사",
		"병원신규환자마케팅",
		"병원마케팅성공사례",
		"병원마케팅비용",
		"병원 신규환자 통합 노출 패키지",
		"병원 숏폼 마케팅",
		"병원 스레드 마케팅",
		"병원 카페바이럴",
		"병원 AIO 마케팅",
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
			name: "애드리절트는 어떤 상품을 제안하나요?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "애드리절트는 모든 병원에 같은 상품을 제안하지 않습니다. 진료과, 지역 경쟁도, 현재 운영 채널, 예산, 목표를 먼저 진단한 뒤 AIO(AI 검색 노출), 숏폼, 스레드, 카페바이럴, 블로그를 필요한 만큼 조합해 제안합니다. 단일 채널로 시작할 수도 있고, 병원 상황에 따라 2개 채널 조합이나 통합 운영을 제안하기도 합니다. 조합 운영 시에는 채널 사이의 환자 여정이 하나로 이어지도록 함께 설계합니다.",
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
			<BreadcrumbJsonLd items={[{ name: "홈", path: "" }]} />
			<Hero />
			<MarketShift />
			<DepartmentsSection />
			<PackageSection />
			<CostBreakdown />
			<BranchIntroSection />
			<ExcellentCompany />
			<ReviewVideos />
			<CustomStrategy />
			<CaseHighlight />
			<CloseUpManagement />
			<AdresultYouTube />
			<ProcessSteps />
			<TmapPartner />
			<FinalCTA />
		</>
	);
};

export default HomePage;
