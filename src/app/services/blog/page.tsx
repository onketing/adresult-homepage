import type { Metadata } from "next";
import { AboutMidCTA } from "@/components/sections/AboutMidCTA";
import { BlogHero } from "@/components/sections/BlogHero";
import { BlogVsAds } from "@/components/sections/BlogVsAds";
import { CaseTestimonial } from "@/components/sections/CaseTestimonial";
import { ServiceEngagementPolicy } from "@/components/sections/ServiceEngagementPolicy";
import { ServiceProcess } from "@/components/sections/ServiceProcess";
import { ServiceProofStrip } from "@/components/sections/ServiceProofStrip";
import { ServiceWhatWeDo } from "@/components/sections/ServiceWhatWeDo";
import { BLOG_CASES, BLOG_PILLARS, BLOG_PROCESS, BLOG_PROOF } from "@/data/service-blog";

export const metadata: Metadata = {
	title: "블로그 마케팅 | Onketing",
	description:
		"전문직을 위한 블로그 마케팅. 의뢰로 이어지는 검색 의도를 분석하고 광고 규정을 통과한 콘텐츠를 발행합니다.",
};

export const BlogServicePage = () => {
	return (
		<>
			<BlogHero />
			<BlogVsAds />
			<ServiceProofStrip items={BLOG_PROOF} />
			<ServiceWhatWeDo items={BLOG_PILLARS} />
			<CaseTestimonial cases={BLOG_CASES} />
			<ServiceProcess steps={BLOG_PROCESS} />
			<ServiceEngagementPolicy />
			<AboutMidCTA />
		</>
	);
};

export default BlogServicePage;
