import type { Metadata } from "next";
import { TeamCrews } from "@/components/sections/TeamCrews";
import { TeamHero } from "@/components/sections/TeamHero";
import { TeamProblemSolution } from "@/components/sections/TeamProblemSolution";
import { TeamScene } from "@/components/sections/TeamScene";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { CTACard } from "@/components/shared/CTACard";

const teamPageSchema = {
	"@context": "https://schema.org",
	"@type": "AboutPage",
	name: "애드리절트 팀 소개",
	url: "https://onketing.kr/team",
	description:
		"처음 맡은 팀이 끝까지 책임집니다. 규정·전략·기획·발행을 한 팀이 담당합니다. 200건 이상 검토, 위반 0건.",
	mainEntity: {
		"@type": "Organization",
		name: "애드리절트",
		url: "https://onketing.kr",
		employee: [
			{
				"@type": "Person",
				name: "김태훈",
				jobTitle: "대표",
				description: "퍼포먼스 마케팅, AI 영상 활용, 브랜드 마케팅. 한신대학교 정보통신학부 졸업.",
			},
		],
	},
};

export const metadata: Metadata = {
	title: "팀 소개 | 애드리절트",
	alternates: { canonical: "/team" },
	description:
		"규정·전략·기획·발행을 한 팀이 끝까지 책임집니다. 200건 이상 검토, 위반 0건의 인하우스 팀을 소개합니다.",
	keywords: [
		"애드리절트 팀",
		"전문직 마케팅 팀",
		"인하우스 콘텐츠 팀",
		"광고 규정 검수",
		"변호사 마케팅 팀",
		"의료 마케팅 팀",
	],
};

export const TeamPage = () => (
	<>
		<script type="application/ld+json">{JSON.stringify(teamPageSchema)}</script>
		<BreadcrumbJsonLd
			items={[
				{ name: "홈", path: "" },
				{ name: "팀", path: "/team" },
			]}
		/>
		<TeamHero />
		<TeamCrews />
		<TeamScene />
		<TeamProblemSolution />
		<CTACard
			variant="gradient"
			headline="최고의 팀과 함께해 보세요"
			sub="왜 다른지 알게 되실 거예요."
			buttonText="문의하기"
			hideEyebrow
			hideTrustStats
			showButton
		/>
	</>
);

export default TeamPage;
