"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/components/shared/Reveal";

const ITEMS = [
	{ text: "결과 보장·성공률 표현 없음", law: "변호사법·의료법 공통" },
	{ text: "비교·우열 표현 없음", law: "각 직군 광고 규정 공통" },
	{ text: "환자/의뢰인 후기 사전 심의 확인", law: "의료법 §56" },
	{ text: "학력·경력 사실 확인", law: "변호사법 §23" },
	{ text: "인용 통계 출처 명시", law: "표시광고법 §3" },
	{ text: "시술·처치 부작용 안내", law: "의료법 §56 (3)" },
	{ text: "가격·수수료 표시 정확성", law: "표시광고법 §4" },
	{ text: "채널 플랫폼 광고 표시 여부", law: "표시광고법 §3 (2)" },
	{ text: "의약품·기기 효능 과장 없음", law: "약사법 §68" },
	{ text: "사진·이미지 출처 권리 확인", law: "저작권법 §35의5" },
	{ text: "키워드·해시태그 금지어 점검", law: "각 직군 세부 규정" },
	{ text: "발행 직전 최종 검수자 서명", law: "Onketing 내부 기준" },
] as const;

export const RegulationChecklist = () => {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, margin: "-60px" });

	return (
		<section className="bg-white px-4 py-24 md:py-28">
			<div className="mx-auto max-w-6xl">
				<div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1fr_540px]">
					{/* 우측 헤더 (모바일에서는 위) */}
					<div className="order-first md:order-last md:pt-4">
						<Reveal>
							<p className="mb-2 font-semibold text-slate-500 text-xs uppercase tracking-[0.2em]">
								Checklist
							</p>
							<h2 className="font-bold text-3xl text-[#0a0a0a] tracking-tight md:text-4xl">
								발행 전, 항목별로 점검합니다.
							</h2>
							<p className="mt-4 break-keep text-slate-600 text-sm leading-relaxed">
								콘텐츠 한 편마다 12개 항목을 확인합니다. 직군·채널에 따라 추가 항목을 적용합니다.
							</p>
						</Reveal>
					</div>

					{/* 클립보드 카드 */}
					<div className="order-last md:order-first">
						<Reveal>
							<div className="relative">
								{/* 클립 */}
								<div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2">
									<div className="h-8 w-14 rounded-t-lg rounded-b-sm border-2 border-slate-300 bg-slate-200" />
								</div>

								<div
									ref={ref}
									className="rounded-2xl border border-slate-200 bg-white pt-10 pb-6 shadow-[0_8px_40px_rgba(15,23,42,0.08)]"
								>
									{/* 양식 메타 */}
									<div className="mb-5 border-slate-100 border-b px-6 pb-5">
										<div className="flex items-center gap-6 font-mono text-slate-500 text-xs tracking-[0.12em]">
											<span>직군 _________</span>
											<span>콘텐츠 유형 _________</span>
											<span>채널 _________</span>
										</div>
									</div>

									{/* 체크리스트 항목 */}
									<ul className="space-y-0 px-6">
										{ITEMS.map((item, i) => (
											<motion.li
												key={item.text}
												className="flex items-start gap-3 border-slate-50 border-b py-3 last:border-0"
												initial={{ opacity: 0, x: -10 }}
												animate={inView ? { opacity: 1, x: 0 } : {}}
												transition={{ delay: i * 0.06, duration: 0.35 }}
											>
												{/* 체크박스 */}
												<div className="relative mt-0.5 h-4 w-4 shrink-0">
													<div className="h-4 w-4 rounded-sm border-2 border-slate-300" />
													<motion.svg
														className="absolute inset-0 h-4 w-4"
														viewBox="0 0 16 16"
														fill="none"
														initial={{ pathLength: 0, opacity: 0 }}
														animate={inView ? { pathLength: 1, opacity: 1 } : {}}
														transition={{
															delay: i * 0.06 + 0.2,
															duration: 0.3,
														}}
													>
														<motion.path
															d="M3 8 L6.5 11.5 L13 5"
															stroke="#ef3c39"
															strokeWidth="1.8"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</motion.svg>
												</div>

												{/* 항목 텍스트 */}
												<div className="flex-1">
													<p className="text-[#0a0a0a] text-sm">{item.text}</p>
												</div>

												{/* 법령 라벨 */}
												<span className="hidden shrink-0 font-mono text-slate-500 text-xs tracking-[0.1em] sm:block">
													{item.law}
												</span>
											</motion.li>
										))}
									</ul>

									{/* 하단 라벨 */}
									<div className="mt-4 px-6 text-right">
										<p className="font-mono text-slate-500 text-xs tracking-[0.12em]">
											Onketing 자체 체크리스트 — 직군별 항목 보강
										</p>
									</div>
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</div>
		</section>
	);
};
