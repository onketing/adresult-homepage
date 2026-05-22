import type { Metadata } from "next";
import { AboutConsequences } from "@/components/sections/AboutConsequences";
import { AboutFoundingStory } from "@/components/sections/AboutFoundingStory";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutResults } from "@/components/sections/AboutResults";
import { AboutWhyPossible } from "@/components/sections/AboutWhyPossible";
import { OrgChart } from "@/components/sections/OrgChart";
import { CTACard } from "@/components/shared/CTACard";

export const metadata: Metadata = {
	title: "회사소개 | Onketing",
	description:
		"변호사·의사·한의사·수의사·노무사 등 전문직 마케팅에 집중하는 온케팅. 광고 규정을 이해하는 팀이 직접 콘텐츠를 설계합니다.",
};

export const AboutPage = () => {
	return (
		<>
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
				buttonText="마케팅 컨설팅"
				triggerContactOnView
			/>
		</>
	);
};

export default AboutPage;
