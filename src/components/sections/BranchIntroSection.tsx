import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

const PHILOSOPHY = [
	"모든 병원에 같은 상품을 제안하지 않습니다.",
	"진료과와 지역 경쟁도를 먼저 분석합니다.",
	"단기 노출보다 지속 가능한 콘텐츠 자산을 봅니다.",
	"발행 전 원고를 의료법 제56조 기준으로 검수합니다.",
];

// 홈 — 마포지사·지사장 소개 섹션
export const BranchIntroSection = () => {
	return (
		<section className="relative overflow-hidden bg-[#0B0B0B] text-white">
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:88px_88px]"
			/>
			<div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24 lg:px-8">
				<div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:gap-16">
					<Reveal>
						<p className="mb-4 font-mono text-[#8F8C89] text-xs tracking-[0.14em]">
							ADRESULT MAPO OFFICE
						</p>
						<h2 className="max-w-2xl break-keep font-extrabold text-3xl tracking-tight md:text-5xl">
							본사의 시스템,
							<br />
							마포지사의 밀착 상담
						</h2>
						<p className="mt-6 max-w-2xl break-keep text-[#B5B2AF] text-[15px] leading-[1.8] md:text-[17px]">
							애드리절트 마포지사(본사 직영)는 본사와 같은 운영 시스템, 같은 의료광고법 검수
							기준으로 일합니다. 다른 것은 거리입니다. 마포·서울 서북권·수도권 병원을 직접 만나
							상담하고, 진료과·지역·예산·현재 마케팅 상태를 기준으로 실행 계획을 설계합니다. 전략과
							콘텐츠 품질 기준은 본사와 동일하게 유지합니다.
						</p>
						<div className="mt-8 flex flex-wrap gap-3">
							<Link
								href="/branch"
								className="whitespace-nowrap border border-[#3A3835] px-6 py-3.5 font-semibold text-[15px] text-white transition-colors hover:border-[#C8102E] hover:text-[#C8102E]"
							>
								마포지사 소개
							</Link>
							<Link
								href="/branch/director"
								className="whitespace-nowrap border border-[#3A3835] px-6 py-3.5 font-semibold text-[15px] text-white transition-colors hover:border-[#C8102E] hover:text-[#C8102E]"
							>
								한우리 지사장 소개
							</Link>
							<Link
								href="/contact"
								className="whitespace-nowrap bg-[#C8102E] px-6 py-3.5 font-bold text-[15px] text-white transition-colors hover:bg-[#A50D26]"
							>
								지사장 상담 신청
							</Link>
						</div>
					</Reveal>
					<Reveal delay={0.1}>
						<div className="border border-[#3A3835] p-7">
							<p className="font-mono text-[#8F8C89] text-[11px] tracking-[0.14em]">
								OFFICE PHILOSOPHY
							</p>
							<ul className="mt-5 flex flex-col gap-4">
								{PHILOSOPHY.map((p) => (
									<li key={p} className="flex items-start gap-3">
										<span
											aria-hidden="true"
											className="mt-[9px] inline-block h-1.5 w-1.5 shrink-0 bg-[#C8102E]"
										/>
										<span className="break-keep text-sm text-white leading-[1.7]">{p}</span>
									</li>
								))}
							</ul>
							<Link
								href="/branch/philosophy"
								className="mt-6 inline-block font-semibold text-sm text-white underline underline-offset-4 transition-colors hover:text-[#C8102E]"
							>
								운영 철학 전체 보기 →
							</Link>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
};
