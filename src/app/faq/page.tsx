import type { Metadata } from "next";
import { FAQContact } from "@/components/sections/FAQContact";
import { FaqDirectory } from "@/components/sections/FaqDirectory";
import { FaqHero } from "@/components/sections/FaqHero";
import { FaqSpotlight } from "@/components/sections/FaqSpotlight";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { FAQ_ITEMS } from "@/data/faq";

export const metadata: Metadata = {
	title: "병원마케팅 자주 묻는 질문(FAQ) | 애드리절트(ADRESULT)",
	alternates: { canonical: "/faq" },
	description:
		"애드리절트 병원마케팅 자주 묻는 질문. 비용·진행절차·의료광고규정·운영보고·성과·해지환불 — 여섯 카테고리를 직접 답변합니다.",
	keywords: [
		"병원마케팅 FAQ",
		"병원마케팅 비용 FAQ",
		"의료광고 FAQ",
		"마케팅 비용 FAQ",
		"광고 규정 FAQ",
		"마케팅 대행사 자주묻는질문",
	],
};

const faqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: FAQ_ITEMS.map((item) => ({
		"@type": "Question",
		name: item.question,
		acceptedAnswer: {
			"@type": "Answer",
			text: item.answer,
		},
	})),
};

export const FaqPage = () => (
	<>
		<script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
		<BreadcrumbJsonLd
			items={[
				{ name: "홈", path: "" },
				{ name: "자주 묻는 질문", path: "/faq" },
			]}
		/>
		<FaqHero />
		<FaqSpotlight />
		<FaqDirectory />
		<FAQContact />
	</>
);

export default FaqPage;
