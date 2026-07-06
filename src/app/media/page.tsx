// 원문 링크는 네이버 뉴스 검색 기준. 링크 없는 항목은 adresult.kr 미디어 게시판 출처.
import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { RelatedPages } from "@/components/shared/RelatedPages";
import { Reveal } from "@/components/shared/Reveal";
import { PRESS_ARTICLES } from "@/data/board-posts";

export const metadata: Metadata = {
	title: "미디어·언론 | 애드리절트 마포지사",
	description:
		"애드리절트가 병원마케팅 업계에서 만들어 온 활동을 언론 보도로 정리했습니다. AI 분석 솔루션 AIRANK 출시, 병의원 특화 해외 마케팅 솔루션, 세미나·강의, 사회공헌까지 — 애드리절트 마포지사.",
	alternates: { canonical: "/media" },
	keywords: [
		"애드리절트 언론보도",
		"애드리절트 뉴스",
		"병원마케팅 회사 언론",
		"AIRANK",
		"애드리절트 마포지사",
	],
};

type PressItem = { title: string; summary: string; outlet?: string; date?: string; href?: string };

const PRESS_ITEMS: PressItem[] = [
	{
		title: "[강소 CEO] 한우리 애드리절트 마포지사장",
		summary:
			"CEO저널이 한우리 지사장을 인터뷰했습니다. “단순히 마케팅 상품을 파는 게 아니라, 노하우와 진심을 판다”는 마케팅 철학과 “고객의 입장에서 생각하고 공감해 문제 해결을 돕는다”는 원칙을 다뤘습니다.",
		outlet: "CEO저널",
		date: "2024.07",
		href: "https://www.ceojhn.com/news/articleView.html?idxno=6347",
	},
	{
		title: "병원 전문 마케팅 기업 애드리절트, 병원 숏폼 마케팅 서비스 '끝장숏폼' 출시",
		summary:
			"조회수가 아닌 예약 전환을 목표로 하는 병원 숏폼 마케팅 서비스 끝장숏폼 출시가 보도되었습니다.",
		outlet: "이넷뉴스 · 파이낸스투데이",
		date: "2026.06",
		href: "https://www.enetnews.co.kr/news/articleView.html?idxno=51563",
	},
	{
		title: "애드리절트 장윤정 센터장, 2026년 서울시 매력일자리 'AI 글로벌 콘텐츠' 사업 참여",
		summary:
			"애드리절트 장윤정 센터장의 서울시 매력일자리 AI 글로벌 콘텐츠 사업 참여 소식이 보도되었습니다.",
		outlet: "중앙일보",
		date: "2026",
		href: "https://www.joongang.co.kr/article/25422013",
	},
	{
		title: "애드리절트 이승민 대표, 시각장애인 복지 위해 10년간 기부",
		summary:
			"이승민 대표가 동대문시각특화장애인복지관에 10년간 누적 1억 원을 기부해 온 소식이 보도되었습니다.",
		outlet: "한국경제",
		date: "2026.04",
		href: "https://www.hankyung.com/article/202604178230O",
	},
	{
		title: "동대문시각특화장애인복지관에 전해진 따뜻한 손길 — 애드리절트, 1천만 원 기부",
		summary: "애드리절트가 동대문시각특화장애인복지관에 1천만 원을 전달한 소식입니다.",
		outlet: "에듀동아",
		href: "https://edu.donga.com/news/articleView.html?idxno=105655",
	},
	{
		title: "애드리절트, 병원마케팅 AI 분석 프로그램 'AIRANK' 출시",
		summary:
			"AI 환경에서 병원이 얼마나 추천되는지 데이터로 파악하는 자체 분석 프로그램 AIRANK 출시가 보도되었습니다.",
		outlet: "이넷뉴스",
		date: "2026.03",
		href: "https://www.enetnews.co.kr/news/articleView.html?idxno=48177",
	},
	{
		title: "애드리절트, '제1회 대한개원의마케팅경영학회'서 AI시대 마케팅 핵심전략 강의",
		summary:
			"제1회 대한개원의마케팅경영학회에서 개원의를 대상으로 AI 기반 병원마케팅 전략을 강의했습니다.",
		outlet: "파이낸스투데이",
		href: "https://www.fntoday.co.kr/news/articleView.html?idxno=380265",
	},
	{
		title: "애드리절트, '병원마케팅 원데이 속성 과외' 성료",
		summary: "실전 노하우를 담은 병원마케팅 원데이 속성 과외 프로그램을 성황리에 마쳤습니다.",
		outlet: "파이낸스투데이",
		href: "https://www.fntoday.co.kr/news/articleView.html?idxno=376061",
	},
	{
		title: "'보장의 시대에서 관리의 시대로' — 급변하는 검색 환경 속 병원마케팅",
		summary:
			"상위노출 보장이 아니라 지속 관리가 중심이 되는 검색 환경 변화와 애드리절트의 관리형 접근을 다뤘습니다.",
		outlet: "미디어파인",
		href: "https://www.mediafine.co.kr/news/articleView.html?idxno=75236",
	},
	{
		title: "애드리절트, 중국인 마케터 중심의 병의원 특화 솔루션 출시",
		summary: "중국인 마케터를 중심으로 한 병의원 특화 해외 마케팅 솔루션을 선보였습니다.",
	},
	{
		title: "애드리절트, 2025 원데이 속성 세미나 성공적 마무리",
		summary: "2025년 원데이 속성 세미나를 성공적으로 마무리했습니다.",
	},
	{
		title: "애드리절트, 병원마케팅 非심의 세미나 성료",
		summary: "병원마케팅 비심의 영역을 다룬 세미나를 개최해 마무리했습니다.",
	},
	{
		title: "제1차 대구여성경제인포럼 및 6월 정기월례회 개최",
		summary: "제1차 대구여성경제인포럼과 6월 정기월례회 개최 소식이 함께 보도되었습니다.",
	},
];

const TRUST_POINTS = [
	{
		label: "KNOWLEDGE SHARING",
		title: "지식을 공개적으로 나눕니다",
		desc: "원데이 속성 세미나, 비심의 세미나, 개원의 대상 AI 마케팅 강의까지 — 애드리절트는 병원마케팅 노하우를 세미나와 강의로 꾸준히 공유합니다.",
	},
	{
		label: "IN-HOUSE SOLUTION",
		title: "자체 솔루션을 만듭니다",
		desc: "AI 기반 병원 마케팅 분석 솔루션 AIRANK를 자체 개발해 출시했습니다. 대행에 머무르지 않고 도구를 직접 만드는 회사입니다.",
	},
	{
		label: "SOCIAL CONTRIBUTION",
		title: "나눔을 이어갑니다",
		desc: "이승민 대표는 동대문시각특화장애인복지관에 10년간 누적 1억 원을 기부했습니다. 회사가 지향하는 방향은 사업 바깥에서도 이어집니다.",
	},
	{
		label: "MAPO BRANCH",
		title: "마포지사도 함께 움직입니다",
		desc: "마포지사 한우리 지사장은 CEO저널 강소 CEO 인터뷰 등 지사 차원의 활동을 이어가고 있습니다. 본사의 활동이 지사에서도 같은 방식으로 이어집니다.",
	},
];

export const MediaPage = () => {
	return (
		<>
			<BreadcrumbJsonLd
				items={[
					{ name: "홈", path: "" },
					{ name: "미디어·언론", path: "/media" },
				]}
			/>

			{/* 1. 다크 히어로 */}
			<section className="relative overflow-hidden bg-[#0B0B0B] pt-16 text-white md:pt-20">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:88px_88px]"
				/>
				<div className="relative mx-auto max-w-7xl px-4 py-20 md:py-32 lg:px-8">
					<p className="mb-6 font-mono text-[#8F8C89] text-xs tracking-[0.14em]">PRESS & MEDIA</p>
					<h1 className="break-keep font-extrabold text-4xl leading-[1.12] tracking-[-0.03em] md:text-6xl">
						언론이 전한 애드리절트<span className="text-[#C8102E]">.</span>
					</h1>
					<p className="mt-6 max-w-xl break-keep text-[#B5B2AF] text-[15px] leading-[1.8] md:text-[17px]">
						병원마케팅 업계에서 애드리절트가 만들어 온 활동을 보도 기사로 정리했습니다. 솔루션 출시,
						세미나와 강의, 사회공헌까지 — 언론에 기록된 그대로 보여드립니다.
					</p>
				</div>
			</section>

			{/* 2. 신뢰 포인트 */}
			<section className="bg-[#FAFAFA] py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							WHY IT MATTERS
						</p>
						<h2 className="max-w-3xl break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							보도가 말해주는 <span className="text-[#C8102E]">네 가지</span> 사실.
						</h2>
					</Reveal>
					<div className="mt-12 grid gap-4 md:grid-cols-2">
						{TRUST_POINTS.map((t, i) => (
							<Reveal key={t.label} delay={i * 0.08}>
								<article className="h-full border border-[#E4E2DF] bg-white p-7 md:p-9">
									<p className="font-mono text-[#C8102E] text-[11px] tracking-[0.14em]">
										{t.label}
									</p>
									<h3 className="mt-4 break-keep font-bold text-[#111111] text-[17px] leading-[1.5]">
										{t.title}
									</h3>
									<p className="mt-3 break-keep text-[#767370] text-[14.5px] leading-[1.7]">
										{t.desc}
									</p>
								</article>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* 3. 보도 리스트 */}
			<section className="border-[#E4E2DF] border-y bg-white py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							PRESS COVERAGE
						</p>
						<h2 className="max-w-3xl break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							애드리절트 <span className="text-[#C8102E]">보도 기사</span> 모음.
						</h2>
					</Reveal>
					<div className="mt-12 divide-y divide-[#E4E2DF] border border-[#E4E2DF] bg-[#FAFAFA]">
						{PRESS_ITEMS.map((p, i) => (
							<Reveal key={p.title} delay={Math.min(i, 5) * 0.06} direction="none">
								<article className="flex flex-col gap-1.5 px-6 py-5 md:flex-row md:items-baseline md:gap-8 md:px-8">
									<span className="w-10 shrink-0 font-mono text-[#C8102E] text-[13px] tracking-[0.12em]">
										{String(i + 1).padStart(2, "0")}
									</span>
									<div className="flex-1">
										<div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
											<h3 className="break-keep font-bold text-[#111111] text-[15.5px] leading-[1.6]">
												{p.title}
											</h3>
											{(p.outlet || p.date) && (
												<span className="whitespace-nowrap font-mono text-[#A5A2A0] text-[11px] tracking-[0.08em]">
													{[p.outlet, p.date].filter(Boolean).join(" · ")}
												</span>
											)}
										</div>
										<p className="mt-1 break-keep text-[#767370] text-[13.5px] leading-[1.7]">
											{p.summary}
										</p>
										{p.href && (
											<a
												href={p.href}
												target="_blank"
												rel="noopener noreferrer"
												className="mt-2 inline-block font-semibold text-[#C8102E] text-[13px] transition-colors hover:text-[#A50D26]"
											>
												기사 원문 보기 →
											</a>
										)}
									</div>
								</article>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* 4. 보도자료 아카이브 (게시판 원문) */}
			<section className="bg-[#FAFAFA] py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							PRESS ARCHIVE
						</p>
						<h2 className="max-w-3xl break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							보도자료 <span className="text-[#C8102E]">원문 아카이브</span>.
						</h2>
						<p className="mt-5 max-w-2xl break-keep text-[#767370] text-[15px] leading-[1.8]">
							애드리절트 공식 홈페이지 미디어 게시판에 기록된 보도자료 {PRESS_ARTICLES.length}건을
							원문 그대로 옮겼습니다. 제목을 누르면 본문 전체를 확인할 수 있습니다.
						</p>
					</Reveal>
					<div className="mt-12 divide-y divide-[#E4E2DF] border border-[#E4E2DF] bg-white">
						{PRESS_ARTICLES.map((a, i) => (
							<Reveal key={a.slug} delay={Math.min(i, 5) * 0.04} direction="none">
								<Link
									href={`/media/${a.slug}`}
									className="group flex items-baseline gap-4 px-6 py-4 md:gap-8 md:px-8"
								>
									<span className="w-10 shrink-0 font-mono text-[#C8102E] text-[13px] tracking-[0.12em]">
										{String(i + 1).padStart(2, "0")}
									</span>
									<div className="flex-1">
										<h3 className="break-keep font-bold text-[#111111] text-[15px] leading-[1.6] transition-colors group-hover:text-[#C8102E]">
											{a.title}
										</h3>
									</div>
									<span className="hidden shrink-0 font-semibold text-[#C8102E] text-[13px] md:inline">
										본문 보기 →
									</span>
								</Link>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* 5. 관련 페이지 */}
			<RelatedPages
				items={[
					{ label: "회사소개", href: "/about", desc: "결과로 말하는 병원마케팅 회사, 애드리절트" },
					{ label: "마포지사 안내", href: "/branch", desc: "본사 직영 마포지사가 일하는 방식" },
					{ label: "성공사례", href: "/cases", desc: "언론보다 먼저 결과가 말해주는 기록" },
					{ label: "병원마케팅 칼럼", href: "/insights", desc: "세미나·강의로 나눠 온 실무 지식" },
				]}
			/>

			{/* 6. 최종 CTA */}
			<FinalCTA />
		</>
	);
};

export default MediaPage;
