import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudyBoard } from "@/components/sections/CaseStudyBoard";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { SUCCESS_CASES } from "@/data/success-cases";

export const metadata: Metadata = {
	title: "병원마케팅 성공사례 | 진료과별 케이스 스터디 | 애드리절트(ADRESULT)",
	alternates: { canonical: "/cases" },
	description:
		"병원마케팅성공사례 — 문제·전략·실행·결과로 기록한 케이스 스터디. 피부과·성형외과·정형외과·치과 등 실제 병원의 신환 증가, 광고비 절감, 개원 초기 성과를 진료과·서비스·목표별로 확인하세요.",
	keywords: [
		"병원마케팅성공사례",
		"병원마케팅 사례",
		"병원마케팅 케이스 스터디",
		"피부과마케팅 사례",
		"정형외과마케팅 사례",
		"성형외과마케팅 사례",
		"치과마케팅 사례",
		"병원 신규환자 마케팅 사례",
		"병원마케팅 후기",
	],
};

export const CasesPage = () => {
	return (
		<>
			<BreadcrumbJsonLd
				items={[
					{ name: "홈", path: "" },
					{ name: "고객사례", path: "/cases" },
					{ name: "성공사례", path: "/cases" },
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
						CASE STUDY ARCHIVE
					</p>
					<h1 className="break-keep font-extrabold text-4xl leading-[1.12] tracking-[-0.03em] md:text-6xl">
						문제 → 전략 → 실행 → 결과
					</h1>
					<p className="mt-6 max-w-xl break-keep text-[#B5B2AF] text-[15px] leading-[1.8] md:text-[17px]">
						성과의 나열이 아니라, 어떤 문제를 어떤 방법으로 풀었는지를 기록합니다. 병원의 상황과
						가장 비슷한 병원마케팅 성공사례를 찾아보세요.
					</p>
				</div>
			</section>

			<CaseStudyBoard />

			{/* 전체 원문 아카이브 (SEO 내부 링크) */}
			<section className="border-[#E4E2DF] border-t bg-white">
				<div className="mx-auto max-w-7xl px-4 py-14 md:py-20 lg:px-8">
					<p className="mb-4 font-mono text-[#767370] text-[11px] tracking-[0.14em]">
						FULL ARCHIVE
					</p>
					<h2 className="break-keep font-extrabold text-2xl text-[#111111] tracking-tight md:text-3xl">
						성공사례 원문 전체 보기
					</h2>
					<p className="mt-3 text-[#767370] text-sm leading-[1.75]">
						원장님 인터뷰·데이터 화면이 담긴 사례 원문 {SUCCESS_CASES.length}편을 그대로 볼 수
						있습니다.
					</p>
					<ul className="mt-8 grid gap-x-10 gap-y-3 md:grid-cols-2">
						{SUCCESS_CASES.map((c) => (
							<li key={c.id}>
								<Link
									href={c.href ?? `/cases/${c.id}`}
									className="group flex items-baseline gap-3 border-[#E4E2DF] border-b pb-3"
								>
									<span
										aria-hidden="true"
										className="mt-1 inline-block h-1.5 w-1.5 shrink-0 bg-[#C8102E]"
									/>
									<span className="break-keep text-[#333333] text-sm leading-[1.6] transition-colors group-hover:text-[#C8102E]">
										{c.title}
									</span>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</section>

			<FinalCTA />
		</>
	);
};

export default CasesPage;
