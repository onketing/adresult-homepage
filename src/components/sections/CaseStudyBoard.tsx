"use client";

import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { CASE_DEPTS, CASE_GOALS, CASE_SERVICES, CASE_STUDIES } from "@/data/case-studies";
import { cn } from "@/lib/utils";

type FilterRowProps = {
	label: string;
	names: readonly string[];
	value: string;
	onSelect: (v: string) => void;
};

const FilterRow = ({ label, names, value, onSelect }: FilterRowProps) => (
	<div className="flex flex-wrap items-center gap-2">
		<span className="w-16 shrink-0 font-mono text-[#767370] text-[11px] tracking-[0.12em]">
			{label}
		</span>
		{names.map((n) => (
			<button
				key={n}
				type="button"
				onClick={() => onSelect(n)}
				className={cn(
					"whitespace-nowrap border px-3.5 py-2 font-semibold text-[13px] transition-colors",
					value === n
						? "border-[#111111] bg-[#111111] text-white"
						: "border-[#D9D6D3] bg-white text-[#555250] hover:border-[#111111]",
				)}
			>
				{n}
			</button>
		))}
	</div>
);

const ROWS: { key: "problem" | "strategy" | "execution" | "result"; label: string }[] = [
	{ key: "problem", label: "문제" },
	{ key: "strategy", label: "전략" },
	{ key: "execution", label: "실행" },
	{ key: "result", label: "결과" },
];

export const CaseStudyBoard = () => {
	const [dept, setDept] = useState<string>("전체");
	const [service, setService] = useState<string>("전체");
	const [goal, setGoal] = useState<string>("전체");

	const visible = CASE_STUDIES.filter(
		(c) =>
			(dept === "전체" || c.dept === dept) &&
			(service === "전체" || c.services.includes(service)) &&
			(goal === "전체" || c.goal === goal),
	);

	return (
		<section className="bg-[#FAFAFA]">
			<div className="mx-auto max-w-7xl px-4 py-14 pb-24 md:py-20 lg:px-8">
				{/* 필터 */}
				<div className="mb-10 flex flex-col gap-4 md:mb-14">
					<FilterRow label="진료과" names={CASE_DEPTS} value={dept} onSelect={setDept} />
					<FilterRow label="서비스" names={CASE_SERVICES} value={service} onSelect={setService} />
					<FilterRow label="목표" names={CASE_GOALS} value={goal} onSelect={setGoal} />
				</div>

				<p className="mb-6 font-mono text-[#767370] text-xs tracking-[0.1em]">
					SHOWING {visible.length} / {CASE_STUDIES.length} CASES
				</p>

				{/* 케이스 카드 */}
				<div className="grid gap-5 md:grid-cols-2 md:gap-8">
					{visible.map((c, i) => {
						const idx = CASE_STUDIES.indexOf(c) + 1;
						const tag = `CASE ${String(idx).padStart(2, "0")}`;
						return (
							<Reveal key={c.name + tag} delay={Math.min(i, 3) * 0.08}>
								<article className="flex h-full flex-col border border-[#E4E2DF] bg-white p-7 transition-colors hover:border-[#C8102E]/40 md:p-10">
									{/* 헤더 */}
									<div className="flex items-baseline justify-between gap-3 border-[#E4E2DF] border-b pb-5">
										<span className="break-keep font-bold text-[#111111] text-lg tracking-[-0.01em]">
											{c.name}
										</span>
										<span className="whitespace-nowrap font-mono text-[#A5A2A0] text-[11px] tracking-[0.1em]">
											{tag}
										</span>
									</div>

									{/* 칩 */}
									<div className="flex flex-wrap gap-1.5 py-4">
										<span className="whitespace-nowrap bg-[#F5F5F5] px-2.5 py-1.5 font-semibold text-[#555250] text-xs">
											{c.dept}
										</span>
										{c.services.map((s) => (
											<span
												key={s}
												className="whitespace-nowrap bg-[#F5F5F5] px-2.5 py-1.5 font-semibold text-[#555250] text-xs"
											>
												{s}
											</span>
										))}
										<span className="whitespace-nowrap border border-[#C8102E] px-2.5 py-1 font-semibold text-[#C8102E] text-xs">
											{c.goal}
										</span>
									</div>

									{/* 문제 → 전략 → 실행 → 결과 */}
									<div className="grid grid-cols-[52px_1fr] gap-x-4 gap-y-3 border-[#E4E2DF] border-b pt-1 pb-6 md:grid-cols-[64px_1fr] md:gap-x-5">
										{ROWS.map((r) => (
											<div key={r.key} className="contents">
												<span className="pt-0.5 font-mono text-[#C8102E] text-[11px] tracking-[0.12em]">
													{r.label}
												</span>
												<span className="break-keep text-[#333333] text-[14.5px] leading-[1.7]">
													{c[r.key]}
												</span>
											</div>
										))}
									</div>

									{/* 메트릭 */}
									<div className="flex flex-1 items-end gap-8 pt-6 md:gap-14">
										{[
											{ v: c.m1, u: c.m1u, l: c.m1l },
											{ v: c.m2, u: c.m2u, l: c.m2l },
										].map((m) => (
											<div key={m.l}>
												<div className="font-extrabold text-3xl text-[#111111] tracking-[-0.02em] md:text-4xl">
													{m.v}
													{m.u && (
														<span className="ml-0.5 font-bold text-[#C8102E] text-[0.5em]">
															{m.u}
														</span>
													)}
												</div>
												<p className="mt-2 whitespace-nowrap font-mono text-[#767370] text-[11px] tracking-[0.1em]">
													{m.l}
												</p>
											</div>
										))}
									</div>

									{/* 원문 링크 */}
									{c.slug && (
										<Link
											href={`/cases/${c.slug}`}
											className="mt-6 inline-flex items-center gap-1.5 font-semibold text-[#C8102E] text-sm transition-colors hover:text-[#A50D26]"
										>
											사례 원문 자세히 보기 →
										</Link>
									)}
								</article>
							</Reveal>
						);
					})}
				</div>

				{visible.length === 0 && (
					<div className="border border-[#D9D6D3] border-dashed bg-white p-14 text-center">
						<p className="text-[#767370] text-sm">
							선택한 조건의 사례가 아직 없습니다. 사례는 계속 추가되고 있습니다.
						</p>
					</div>
				)}

				<p className="mt-10 font-mono text-[#A5A2A0] text-[11.5px] leading-relaxed tracking-[0.04em]">
					* 수치는 애드리절트 본사·전체 네트워크 운영 사례 기준이며, 병원 동의를 얻어 공개 범위
					내에서 요약한 것입니다. 결과는 병원별 상황에 따라 다를 수 있습니다.
				</p>
			</div>
		</section>
	);
};
