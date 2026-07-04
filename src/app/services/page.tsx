import type { Metadata } from "next";
import { CaseHighlight } from "@/components/sections/CaseHighlight";
import { ServiceComparison } from "@/components/sections/ServiceComparison";
import { ServiceMatrix } from "@/components/sections/ServiceMatrix";
import { WhyUsBold } from "@/components/sections/WhyUsBold";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { CTACard } from "@/components/shared/CTACard";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
	title: "전문직 마케팅 서비스 — 블로그·숏폼·인스타그램 | 애드리절트",
	alternates: { canonical: "/services" },
	description:
		"전문직 마케팅 서비스 — 네이버 블로그, 숏폼·인스타그램 릴스, 직군 통합 운영. 변호사·의사·한의사 등 직군에 맞는 채널을 비교하고 선택하세요. 보고는 노출 수가 아닌 상담 신청 수로 합니다.",
	keywords: [
		"전문직 마케팅",
		"전문직 마케팅 서비스",
		"블로그 마케팅",
		"숏폼 마케팅",
		"인스타그램 마케팅",
		"전문직 마케팅 대행사",
		"마케팅 대행사",
	],
};

const servicesSchema = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "전문직 마케팅 서비스",
	url: "https://onketing.kr/services",
	provider: { "@id": "https://onketing.kr/#organization" },
	areaServed: "KR",
	serviceType: "전문직 블로그·숏폼·인스타그램 마케팅 대행",
	description:
		"변호사·의사·한의사 등 전문직을 위한 마케팅 서비스. 네이버 블로그, 숏폼·인스타그램 릴스, 직군 통합 운영 중 직군에 맞는 채널을 설계합니다.",
	hasOfferCatalog: {
		"@type": "OfferCatalog",
		name: "전문직 마케팅 채널",
		itemListElement: [
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "전문직 블로그 마케팅",
					url: "https://onketing.kr/services/blog",
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "전문직 숏폼·인스타그램 마케팅",
					url: "https://onketing.kr/services/shortform",
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "전문직 통합 마케팅",
					url: "https://onketing.kr/services/professional",
				},
			},
		],
	},
};

export const ServicesPage = () => {
	return (
		<>
			<script type="application/ld+json">{JSON.stringify(servicesSchema)}</script>
			<BreadcrumbJsonLd
				items={[
					{ name: "홈", path: "" },
					{ name: "서비스", path: "/services" },
				]}
			/>
			<PageHero
				eyebrow="서비스"
				title="원하는 결과부터"
				titleHighlight="정해주세요"
				sub="검색에서 발견되는 글, 신뢰가 쌓이는 영상, 직군에 맞춘 통합 운영. 채널마다 다릅니다."
				ctaText="마케팅 컨설팅"
				ctaHref="/contact"
			>
				<p className="font-mono text-slate-500 text-xs tracking-[0.2em]">
					블로그 · 숏폼 · 전문직 통합 — 3가지 채널
				</p>
			</PageHero>

			<ServiceMatrix />
			<ServiceComparison />
			<WhyUsBold />
			<CaseHighlight />
			<CTACard
				variant="gradient"
				headline="어떤 채널이 맞는지 모르겠다면."
				sub="직군에 맞는 채널을 찾아드립니다."
				buttonText="마케팅 컨설팅"
			/>
		</>
	);
};

export default ServicesPage;
