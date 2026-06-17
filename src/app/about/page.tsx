import type { Metadata } from "next";
import { AboutConsequences } from "@/components/sections/AboutConsequences";
import { AboutFoundingStory } from "@/components/sections/AboutFoundingStory";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutResults } from "@/components/sections/AboutResults";
import { AboutWhyPossible } from "@/components/sections/AboutWhyPossible";
import { OrgChart } from "@/components/sections/OrgChart";
import { CTACard } from "@/components/shared/CTACard";

export const metadata: Metadata = {
	title: "회사소개 | 온세상이마케팅이다",
	alternates: { canonical: "/about" },
	description:
		"변호사·의사·한의사·수의사·노무사 등 전문직 마케팅에 집중하는 온세상이마케팅이다. 광고 규정을 이해하는 팀이 직접 콘텐츠를 설계합니다.",
	keywords: [
		"온세상이마케팅이다",
		"전문직 마케팅 대행사",
		"변호사 마케팅 회사",
		"의료 마케팅 대행사",
		"마케팅 대행사 회사소개",
		"전문직 광고 규정",
	],
};

const organizationSchema = {
	"@context": "https://schema.org",
	"@type": ["Organization", "ProfessionalService"],
	"@id": "https://onketing.kr/#organization",
	name: "온세상이마케팅이다",
	legalName: "온세상이마케팅이다",
	alternateName: ["온케팅", "Onketing", "onketing"],
	slogan: "처음 맡은 팀이 끝까지 갑니다.",
	url: "https://onketing.kr",
	logo: {
		"@type": "ImageObject",
		url: "https://onketing.kr/icon-512.png",
		width: 512,
		height: 512,
	},
	foundingDate: "2024",
	email: "onketing.3kim@gmail.com",
	address: {
		"@type": "PostalAddress",
		streetAddress: "경기도 화성시 동탄구 동탄중심상가1길 36, 8층 801-117A호",
		addressLocality: "화성시",
		addressRegion: "경기도",
		postalCode: "18469",
		addressCountry: "KR",
	},
	description:
		"변호사·의사·한의사·수의사·노무사·세무사 등 12개 전문직 직군 전용 마케팅 대행사. 처음 맡은 팀이 끝까지 책임집니다. 재계약율 90%+, 광고 규정 위반 0건.",
	knowsAbout: [
		"전문직 마케팅",
		"변호사 광고 규정",
		"변호사법 제23조",
		"의료광고 심의",
		"의료법 제56조",
		"블로그 마케팅",
		"숏폼 마케팅",
		"네이버 블로그 SEO",
		"인스타그램 릴스",
		"유튜브 쇼츠",
	],
	sameAs: [
		"https://www.instagram.com/onketing.kr/",
		"https://blog.naver.com/onketing-",
		"https://pf.kakao.com/_FwExjX",
	],
};

export const AboutPage = () => {
	return (
		<>
			<script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
			{/* 1. 풀스크린 다크 Hero */}
			<AboutHero />

			{/* 2. 창업 스토리 */}
			<AboutFoundingStory />

			{/* 3. 하지 않으면 이렇게 됩니다 */}
			<AboutConsequences />

			{/* 4. 우리의 성과 Before / After */}
			<AboutResults />

			{/* 5. 어떻게 이런 성과가 가능했냐고요? */}
			<AboutWhyPossible />

			{/* 6. 조직도 */}
			<OrgChart />

			{/* 7. 최종 CTA */}
			<CTACard
				variant="gradient"
				eyebrow="전문직 마케팅 컨설팅"
				headline={
					<>
						세상은 이미
						<br />
						마케팅되고 있습니다.
					</>
				}
				sub="뒤쳐지지 마세요."
				buttonText="문의하기"
				triggerContactOnView
				hideTrustStats
				showButton
			/>
		</>
	);
};

export default AboutPage;
