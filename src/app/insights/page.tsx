import type { Metadata } from "next";
import { type ColumnCard, ColumnsBoard } from "@/components/sections/ColumnsBoard";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { siteConfig } from "@/config/site";
import { COLUMN_ARTICLES } from "@/data/board-posts";
import { COLUMN_CATEGORIES, COLUMN_POSTS, type ColumnCategory } from "@/data/columns/index";

export const metadata: Metadata = {
	title: "병원마케팅 칼럼 | 분과별 실무 칼럼 | 애드리절트",
	description:
		"병원마케팅 실무 칼럼 — 병원 AIO·숏폼·블로그·카페바이럴·평판관리·의료광고법까지 분과별로 정리했습니다. 애드리절트가 병원 원장님을 위해 발행하는 병원온라인마케팅 칼럼.",
	alternates: { canonical: "/insights" },
	keywords: [
		"병원마케팅 칼럼",
		"병원마케팅 인사이트",
		"병원온라인마케팅",
		"병원AIO마케팅",
		"병원숏폼마케팅",
		"병원카페바이럴",
		"병원 평판관리",
		"의료광고법",
	],
};

// 본사 원문 칼럼(제목 키워드) → 기존 분과 매핑
const boardCategory = (title: string): ColumnCategory => {
	const t = title.toLowerCase();
	if (/(ai|aio|지피티|챗|퍼플렉시티|제미나이)/.test(t)) return "병원 AIO";
	if (/(숏폼|릴스|쇼츠|영상|유튜브)/.test(t)) return "병원 숏폼";
	if (/피부과/.test(t)) return "피부과 마케팅";
	if (/성형/.test(t)) return "성형외과 마케팅";
	if (/(정형|통증|재활)/.test(t)) return "정형외과 마케팅";
	if (/치과/.test(t)) return "치과 마케팅";
	if (/(한의|한방)/.test(t)) return "한의원 마케팅";
	if (/블로그/.test(t)) return "병원 블로그";
	if (/(카페|맘카페|커뮤니티)/.test(t)) return "카페바이럴";
	if (/(후기|평판|리뷰|플레이스)/.test(t)) return "병원 평판관리";
	if (/(의료광고|심의|의료법|규정)/.test(t)) return "의료광고법";
	return "애드리절트 소식";
};

// 본문 글자 수 기반 읽기 시간 추정 (분)
const boardMinutes = (blocks: (typeof COLUMN_ARTICLES)[number]["blocks"]) => {
	const chars = blocks
		.flatMap((b) => b.runs ?? [])
		.map((r) => r.t ?? "")
		.join("").length;
	return Math.min(15, Math.max(2, Math.round(chars / 600)));
};

// 통합 목록: 본사 원문(퀄리티 우선) 먼저 → 자체 발행 최신순
const MERGED_COLUMNS: ColumnCard[] = [
	...COLUMN_ARTICLES.map((a) => ({
		href: `/column/${a.slug}`,
		category: boardCategory(a.title),
		title: a.title,
		excerpt: a.excerpt,
		readingMinutes: boardMinutes(a.blocks),
	})),
	...COLUMN_POSTS.map((p) => ({
		href: `/insights/${p.slug}`,
		category: p.category,
		date: p.date,
		title: p.title,
		excerpt: p.excerpt,
		readingMinutes: p.readingMinutes,
	})),
];

export const ColumnsPage = () => {
	return (
		<>
			<BreadcrumbJsonLd
				items={[
					{ name: "홈", path: "" },
					{ name: "병원마케팅 칼럼", path: "/insights" },
				]}
			/>

			{/* HERO */}
			<section className="relative overflow-hidden bg-[#0B0B0B] pt-16 text-white md:pt-20">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:88px_88px]"
				/>
				<div className="relative mx-auto max-w-7xl px-4 py-20 md:py-32 lg:px-8">
					<p className="mb-6 font-mono text-[#8F8C89] text-xs tracking-[0.14em]">
						HOSPITAL MARKETING COLUMN
					</p>
					<h1 className="break-keep font-extrabold text-4xl leading-[1.12] tracking-[-0.03em] md:text-6xl">
						병원마케팅 칼럼
					</h1>
					<p className="mt-6 max-w-xl break-keep text-[#B5B2AF] text-[15px] leading-[1.8] md:text-[17px]">
						애드리절트가 축적해온 병원마케팅 경험을 {COLUMN_CATEGORIES.length}개 분과,{" "}
						{MERGED_COLUMNS.length}편의 실무 칼럼으로 정리했습니다. 병원 원장님이 대행사 없이도
						판단할 수 있는 기준을 드립니다.
					</p>
					<a
						href={siteConfig.contact.youtube}
						target="_blank"
						rel="noopener noreferrer"
						className="mt-9 inline-flex items-center gap-2 border border-[#3A3835] px-6 py-3.5 font-semibold text-[15px] text-white transition-colors hover:border-[#C8102E] hover:text-[#C8102E]"
					>
						애드리절트TV — 인사이트 영상 500여 개 보기
					</a>
				</div>
			</section>

			<ColumnsBoard items={MERGED_COLUMNS} />
			<FinalCTA />
		</>
	);
};

export default ColumnsPage;
