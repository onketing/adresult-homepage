import type { Metadata } from "next";
import { BlogCaseChart } from "@/components/sections/BlogCaseChart";
import { BlogEngagementPolicy } from "@/components/sections/BlogEngagementPolicy";
import { BlogFinalCTA } from "@/components/sections/BlogFinalCTA";
import { BlogHero } from "@/components/sections/BlogHero";
import { BlogHomepageSection } from "@/components/sections/BlogHomepageSection";
import { BlogVsAds } from "@/components/sections/BlogVsAds";
import { ServiceProcess } from "@/components/sections/ServiceProcess";
import { ServiceProofStrip } from "@/components/sections/ServiceProofStrip";
import { ServiceWhatWeDo } from "@/components/sections/ServiceWhatWeDo";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { BLOG_PILLARS, BLOG_PROCESS, BLOG_PROOF } from "@/data/service-blog";

export const metadata: Metadata = {
	title: "전문직 블로그 마케팅 | 애드리절트",
	alternates: { canonical: "/services/blog" },
	description:
		"변호사·의사·한의사·수의사·노무사·세무사 등 전문직 블로그 마케팅 대행사. 의뢰로 이어지는 키워드를 선별하고 광고 규정을 검토한 콘텐츠를 발행합니다. 보고는 노출 수가 아닌 상담 신청 수로 합니다.",
	keywords: [
		"전문직 블로그 마케팅",
		"변호사 블로그 마케팅",
		"의사 블로그 마케팅",
		"한의사 블로그",
		"수의사 블로그",
		"네이버 블로그 대행",
		"전문직 콘텐츠 마케팅",
		"블로그 상위노출",
		"검색 의도 기반 블로그",
		"블로그 마케팅 대행사",
	],
};

const blogServiceSchema = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "전문직 블로그 마케팅",
	url: "https://onketing.kr/services/blog",
	provider: {
		"@type": "Organization",
		name: "애드리절트",
		url: "https://onketing.kr",
	},
	description:
		"변호사·의사·한의사 등 전문직을 위한 네이버 블로그 콘텐츠 마케팅. 의뢰 직전 키워드를 선별하고 광고 규정을 검토한 뒤 발행합니다. 보고는 노출 수가 아닌 상담 신청 수로 합니다.",
	areaServed: "KR",
	serviceType: "블로그 마케팅 대행",
	hasOfferCatalog: {
		"@type": "OfferCatalog",
		name: "블로그 마케팅 서비스",
		itemListElement: [
			{ "@type": "Offer", itemOffered: { "@type": "Service", name: "검색 의도 기반 키워드 분석" } },
			{
				"@type": "Offer",
				itemOffered: { "@type": "Service", name: "광고 규정 검토 후 콘텐츠 발행" },
			},
			{ "@type": "Offer", itemOffered: { "@type": "Service", name: "월간 상담 신청 수 리포트" } },
		],
	},
};

const blogFaqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: [
		{
			"@type": "Question",
			name: "변호사·의사도 블로그 마케팅이 효과적인가요?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "네. 전문직은 의사결정 전 검색으로 신뢰를 확인합니다. 검색 의도에 맞는 블로그 콘텐츠가 상담 신청으로 이어집니다. 발행 전 변호사법·의료법 등 직군별 광고 규정을 검토해 위반 없이 운영합니다.",
			},
		},
		{
			"@type": "Question",
			name: "블로그 마케팅 전문 대행사가 필요한 이유는 무엇인가요?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "전문직 블로그는 일반 블로그와 달리 직군별 광고 규정(변호사법·의료법·세무사법 등)을 반드시 검토해야 합니다. 규정을 모르는 대행사가 작성한 콘텐츠는 행정처분·징계로 이어질 수 있습니다. 애드리절트는 발행 전 직군별 법령을 직접 검토합니다.",
			},
		},
		{
			"@type": "Question",
			name: "블로그 마케팅 성과가 나오기까지 얼마나 걸리나요?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "일반적으로 3~6개월 후 검색 상위 노출이 시작됩니다. 광고와 달리 발행된 콘텐츠는 자산으로 누적되어 6~12개월 이상 효과가 지속됩니다.",
			},
		},
		{
			"@type": "Question",
			name: "블로그 마케팅 보고는 어떤 지표로 하나요?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "노출 수·클릭 수가 아닌 상담 신청 수 단위로 보고합니다. 매월 키워드별 순위, 유입 경로, 상담 전환 수를 정리한 리포트를 제공합니다.",
			},
		},
		{
			"@type": "Question",
			name: "네이버 블로그와 검색 광고 중 어느 것이 더 효과적인가요?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "검색 광고는 예산이 끊기면 즉시 노출이 사라집니다. 블로그는 발행된 콘텐츠가 자산으로 남아 장기간 검색에서 발견됩니다. 비용 대비 장기 효율은 블로그가 높습니다.",
			},
		},
	],
};

export const BlogServicePage = () => {
	return (
		<>
			<script type="application/ld+json">{JSON.stringify(blogServiceSchema)}</script>
			<script type="application/ld+json">{JSON.stringify(blogFaqSchema)}</script>
			<BreadcrumbJsonLd
				items={[
					{ name: "홈", path: "" },
					{ name: "서비스", path: "/services" },
					{ name: "블로그 마케팅", path: "/services/blog" },
				]}
			/>
			<BlogHero />
			<BlogVsAds />
			<BlogHomepageSection />
			<ServiceProofStrip items={BLOG_PROOF} />
			<ServiceWhatWeDo items={BLOG_PILLARS} />
			<BlogCaseChart />
			<ServiceProcess steps={BLOG_PROCESS} />
			<BlogEngagementPolicy />
			<BlogFinalCTA />
		</>
	);
};

export default BlogServicePage;
