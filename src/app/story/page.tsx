import type { Metadata } from "next";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { PaginatedCards } from "@/components/shared/PaginatedCards";
import { RelatedPages } from "@/components/shared/RelatedPages";
import { STORY_ARTICLES } from "@/data/board-posts";

export const metadata: Metadata = {
	title: "진심이 STORY | 애드리절트 마포지사",
	description:
		"애드리절트의 마스코트 진심이가 전하는 회사 이야기 — 세미나, 강의, 사회공헌, 회사 문화까지 애드리절트가 일하는 방식을 진심이 STORY로 만나보세요.",
	alternates: { canonical: "/story" },
	keywords: [
		"애드리절트 진심이",
		"애드리절트 스토리",
		"병원마케팅 회사 이야기",
		"애드리절트 마포지사",
	],
};

export const StoryPage = () => {
	return (
		<>
			<BreadcrumbJsonLd
				items={[
					{ name: "홈", path: "" },
					{ name: "진심이 STORY", path: "/story" },
				]}
			/>

			{/* 다크 히어로 */}
			<section className="relative overflow-hidden bg-[#0B0B0B] pt-16 text-white md:pt-20">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:88px_88px]"
				/>
				<div className="relative mx-auto max-w-7xl px-4 py-20 md:py-32 lg:px-8">
					<p className="mb-6 font-mono text-[#8F8C89] text-xs tracking-[0.14em]">JINSIM STORY</p>
					<h1 className="break-keep font-extrabold text-4xl leading-[1.12] tracking-[-0.03em] md:text-6xl">
						진심이 STORY<span className="text-[#C8102E]">.</span>
					</h1>
					<p className="mt-6 max-w-xl break-keep text-[#B5B2AF] text-[15px] leading-[1.8] md:text-[17px]">
						애드리절트가 일하는 방식과 회사의 진심을 기록합니다. 세미나와 강의, 사회공헌, 회사
						문화까지 — 광고 카피가 아니라 있는 그대로의 이야기입니다.
					</p>
				</div>
			</section>

			{/* 목록 */}
			<section className="bg-[#FAFAFA] py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<PaginatedCards
						items={STORY_ARTICLES.map((a) => ({
							id: a.slug,
							title: a.title,
							excerpt: a.excerpt,
							image: a.cover,
							href: `/story/${a.slug}`,
						}))}
					/>
				</div>
			</section>

			<RelatedPages
				items={[
					{ label: "마포지사 안내", href: "/branch", desc: "본사 직영 마포지사가 일하는 방식" },
					{ label: "미디어·언론", href: "/media", desc: "언론에 기록된 애드리절트의 활동" },
					{
						label: "병원마케팅 칼럼",
						href: "/insights",
						desc: "분과별로 정리한 병원마케팅 실무 칼럼",
					},
					{ label: "성공사례", href: "/cases", desc: "결과로 말하는 병원마케팅 기록" },
				]}
			/>

			<FinalCTA />
		</>
	);
};

export default StoryPage;
