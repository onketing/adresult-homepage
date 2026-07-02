import type { Metadata } from "next";
import Link from "next/link";
import { ServiceProcess } from "@/components/sections/ServiceProcess";
import { ServiceWhatWeDo } from "@/components/sections/ServiceWhatWeDo";
import { ShortformAccumulation } from "@/components/sections/ShortformAccumulation";
import { ShortformFinalCTA } from "@/components/sections/ShortformFinalCTA";
import { ShortformHero } from "@/components/sections/ShortformHero";
import { ShortformPain } from "@/components/sections/ShortformPain";
import { ShortformPortfolio } from "@/components/sections/ShortformPortfolio";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { SHORTFORM_PILLARS, SHORTFORM_PROCESS } from "@/data/service-shortform";
import { SHORTFORM_PROS } from "@/data/shortform-professions";

export const metadata: Metadata = {
	title: "전문직 숏폼·인스타그램 마케팅 | 온케팅",
	alternates: { canonical: "/services/shortform" },
	description:
		"변호사·의사·한의사·수의사·노무사·세무사 등 전문직 숏폼·인스타그램 마케팅 대행사. 인스타그램 릴스·유튜브 쇼츠·틱톡 3채널을 동시 운영합니다. 대본 기획·촬영·편집·업로드까지 인하우스 팀이 전담합니다.",
	keywords: [
		"전문직 숏폼 마케팅",
		"전문직 인스타그램 마케팅",
		"인스타그램 마케팅",
		"인스타 마케팅",
		"변호사 숏폼 마케팅",
		"의사 숏폼 마케팅",
		"변호사 릴스",
		"의사 유튜브 쇼츠",
		"전문직 틱톡",
		"숏폼 영상 대행",
		"인스타그램 릴스 대행",
		"전문직 영상 마케팅",
		"숏폼 마케팅 대행사",
	],
};

const shortformServiceSchema = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "전문직 숏폼·인스타그램 마케팅",
	url: "https://onketing.kr/services/shortform",
	provider: {
		"@type": "Organization",
		name: "온세상이마케팅이다",
		url: "https://onketing.kr",
	},
	description:
		"변호사·의사·한의사 등 전문직을 위한 숏폼·인스타그램 마케팅. 인스타그램 릴스·유튜브 쇼츠·틱톡 3채널을 동시 운영합니다. 대본·촬영·편집·업로드를 인하우스 팀이 전담합니다.",
	areaServed: "KR",
	serviceType: "숏폼·인스타그램 릴스 마케팅 대행",
	hasOfferCatalog: {
		"@type": "OfferCatalog",
		name: "숏폼 마케팅 서비스",
		itemListElement: [
			{ "@type": "Offer", itemOffered: { "@type": "Service", name: "대본 기획 및 촬영 디렉팅" } },
			{
				"@type": "Offer",
				itemOffered: { "@type": "Service", name: "영상 편집 및 3채널 동시 업로드" },
			},
			{ "@type": "Offer", itemOffered: { "@type": "Service", name: "채널 분석 및 월간 리포트" } },
		],
	},
};

const shortformFaqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: [
		{
			"@type": "Question",
			name: "변호사·의사도 숏폼 마케팅이 가능한가요?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "네. 전문직 광고 규정(변호사법·의료법 등)을 검토한 대본으로 촬영합니다. 전문가 신뢰를 쌓는 케이스 토크·Q&A·지식 영상 포맷으로 제작하며, 광고 규정 위반 없이 운영합니다.",
			},
		},
		{
			"@type": "Question",
			name: "숏폼 마케팅이란 무엇인가요?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "인스타그램 릴스·유튜브 쇼츠·틱톡 등 짧은 영상(15초~3분) 콘텐츠로 브랜드를 알리는 마케팅입니다. 온세상이마케팅이다는 전문직 대상으로 대본 기획부터 촬영·편집·업로드까지 인하우스 팀이 전담합니다.",
			},
		},
		{
			"@type": "Question",
			name: "릴스·쇼츠·틱톡 중 전문직에게 어떤 채널이 효과적인가요?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "채널마다 주 이용층이 다릅니다. 인스타그램 릴스는 30~40대 의사결정자, 유튜브 쇼츠는 정보 탐색형 검색자에게 효과적입니다. 온세상이마케팅이다는 한 번 촬영으로 3채널에 동시 업로드하여 채널 자산을 누적합니다.",
			},
		},
		{
			"@type": "Question",
			name: "숏폼 촬영은 어떻게 진행되나요?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "대본 기획 → 촬영 디렉팅 → 편집 → 3채널 업로드 순서로 진행합니다. 촬영 현장에 팀이 직접 방문하며, 의뢰인이 카메라 앞에서 편안하게 말할 수 있도록 디렉팅합니다. 외주 없이 인하우스 팀이 전담합니다.",
			},
		},
		{
			"@type": "Question",
			name: "숏폼 마케팅 효과는 얼마나 지속되나요?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "광고와 달리 한 번 업로드된 숏폼 영상은 6~12개월 이상 검색에서 발견됩니다. 콘텐츠가 누적될수록 채널 신뢰도가 높아지고 의뢰 전환율이 올라갑니다.",
			},
		},
	],
};

export const ShortformServicePage = () => {
	return (
		<>
			<script type="application/ld+json">{JSON.stringify(shortformServiceSchema)}</script>
			<script type="application/ld+json">{JSON.stringify(shortformFaqSchema)}</script>
			<BreadcrumbJsonLd
				items={[
					{ name: "홈", path: "" },
					{ name: "서비스", path: "/services" },
					{ name: "숏폼·인스타그램 마케팅", path: "/services/shortform" },
				]}
			/>
			<ShortformHero />
			<ShortformPain />
			<ServiceWhatWeDo
				items={SHORTFORM_PILLARS}
				heading="걱정하지 마세요. 몸만 오세요!"
				sub="숏폼은 세가지면 됩니다."
			/>
			<ShortformAccumulation />
			<ServiceProcess steps={SHORTFORM_PROCESS} eyebrow="진행과정" />
			<ShortformPortfolio />

			{/* 직군별 숏폼 가이드 (내부 링크 — 직군 전용 페이지) */}
			<section className="bg-slate-50 px-4 py-16 md:px-8 md:py-20">
				<div className="mx-auto max-w-6xl">
					<p className="font-semibold text-[#e11d29] text-sm uppercase tracking-[0.25em]">
						By profession
					</p>
					<h2 className="mt-3 font-bold text-3xl text-foreground tracking-tight md:text-4xl">
						직군별 숏폼 전략
					</h2>
					<p className="mt-3 max-w-xl text-muted-foreground leading-relaxed">
						직군마다 광고 규정과 찍어야 할 콘텐츠가 다릅니다. 직군 전용 가이드를 확인하세요.
					</p>
					<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{Object.values(SHORTFORM_PROS).map((p) => (
							<Link
								key={p.slug}
								href={`/services/shortform/${p.slug}`}
								className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#ef3c39]/40 hover:shadow-[0_12px_32px_rgba(15,23,42,0.10)]"
							>
								<span className="font-bold text-foreground text-lg tracking-tight transition-colors group-hover:text-[#e11d29]">
									{p.profession} 숏폼
								</span>
								<span className="mt-1 text-muted-foreground text-sm">광고 규정·콘텐츠 전략 →</span>
							</Link>
						))}
					</div>
				</div>
			</section>

			<ShortformFinalCTA />
		</>
	);
};

export default ShortformServicePage;
