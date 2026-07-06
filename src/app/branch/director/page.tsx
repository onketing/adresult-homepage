import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { RelatedPages } from "@/components/shared/RelatedPages";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = {
	title: "애드리절트 마포지사 지사장 | 병원 마케팅 진단 상담",
	description:
		"애드리절트 마포지사 한우리 지사장 — 병원의 상황을 먼저 듣고 필요한 마케팅만 제안합니다. 진료과·지역·예산 기준의 현실적인 성장 전략을 설계하는 병원마케팅대행사, 애드리절트 마포지사(본사 직영).",
	alternates: { canonical: "/branch/director" },
	keywords: [
		"한우리 지사장",
		"애드리절트 마포지사",
		"병원마케팅회사",
		"병원마케팅대행사",
		"병원마케팅 상담",
		"병원 마케팅 진단",
		"마포 병원마케팅",
	],
};

// 디렉터·마포지사 채널 링크
const DIRECTOR_LINKS: { label: string; href: string }[] = [
	{ label: "한우리 지사장 소개영상 바로가기", href: "https://youtu.be/YpoWxay00Cw" },
	{ label: "마포지사 인스타그램 바로가기", href: "https://www.instagram.com/adresult_mapo" },
	{ label: "마포지사 유튜브 바로가기", href: "https://youtube.com/@adreuslt_mapo" },
].filter((l) => l.href !== "");

// 지사장의 이야기 (본인 제공 문안)
const STORY_PARAGRAPHS: string[] = [
	"“마케팅하면 진짜 효과 있나요?” — 원장님, 대표님들과의 상담에서 가장 많이 받아온 질문입니다. 저는 이 질문에 이론이 아니라, 제 돈과 시간을 걸고 결과를 확인해 본 경험으로 답합니다.",
	"부모님 사업을 도와 문의를 80배 늘리고, 제가 가진 모든 돈을 투자하여 18평 요식업 매장을 오픈해 월 매출 1억 1천을 찍으며 직접 마케팅 결과를 증명했습니다.",
	"이 경험이 남긴 것은 성공담이 아니라 습관입니다. 광고비가 어디에 쓰였는지, 문의가 실제로 늘었는지 숫자로 확인하기 전에는 ‘되고 있다’고 말하지 않는 습관 — 마포지사의 상담과 월별 성과 점검도 같은 기준으로 진행합니다.",
	"그동안 효과를 확인할 수 없는 마케팅에 지치셨다면, 이번에는 숫자로 확인하며 진행해 보세요. 병원 현황 진단부터 시작하겠습니다.",
];

const directorSchema = {
	"@context": "https://schema.org",
	"@type": "Person",
	"@id": "https://adresult.kr/branch/director#person",
	name: "한우리",
	jobTitle: "애드리절트 마포지사 지사장",
	worksFor: { "@id": "https://adresult.kr/#organization" },
	description:
		"애드리절트 마포지사 한우리 지사장 — 병원의 상황을 먼저 듣고 필요한 마케팅만 제안하는 병원마케팅 컨설턴트.",
	sameAs: ["https://www.instagram.com/adresult_mapo", "https://youtube.com/@adreuslt_mapo"],
	subjectOf: {
		"@type": "NewsArticle",
		headline: "[강소 CEO] 한우리 애드리절트 마포지사장",
		url: "https://www.ceojhn.com/news/articleView.html?idxno=6347",
		datePublished: "2024-07-03",
		publisher: { "@type": "Organization", name: "CEO저널" },
	},
};

// 소개글 — 문안 고정 (수정 금지)
const INTRO_PARAGRAPHS: string[] = [
	"애드리절트 마포지사는 병원마케팅을 단순 광고 집행이 아니라, 병원이 환자에게 발견되고 신뢰받고 문의로 이어지는 구조를 설계하는 일로 봅니다.",
	"모든 병원에 같은 상품이 맞을 수는 없습니다. 피부과와 정형외과의 환자 검색 방식이 다르고, 개원 초기 병원과 이미 오래 운영된 병원의 고민도 다릅니다. 그래서 마포지사는 먼저 병원의 진료과, 지역 경쟁도, 현재 운영 중인 채널, 예산, 목표를 확인한 뒤 필요한 채널부터 제안합니다.",
	"AIO, 숏폼, 스레드, 카페바이럴, 블로그, 플레이스 관리를 모두 한 번에 권하는 것이 아니라, 지금 병원에 가장 필요한 접점이 무엇인지 우선순위를 정하고 단계적으로 운영합니다.",
	"마포지사는 원장님이 진료에 집중할 수 있도록, 콘텐츠 기획부터 발행, 성과 점검, 개선 제안까지 병원 상황에 맞춰 함께 관리하는 파트너가 되겠습니다.",
];

// 운영 철학 6개
const PHILOSOPHY_CARDS: string[] = [
	"모든 병원에 같은 상품을 제안하지 않습니다",
	"진료과와 지역 경쟁도를 먼저 분석합니다",
	"단기 노출보다 지속 가능한 콘텐츠 자산을 봅니다",
	"의료광고법을 고려한 안전한 표현을 기본으로 합니다",
	"원장님의 진료 철학과 병원 강점을 콘텐츠로 풀어냅니다",
	"성과는 숫자만이 아니라 문의 흐름과 환자 반응까지 함께 봅니다",
];

// 상담 방식 6단계
const CONSULTING_STEPS: string[] = [
	"1차 병원 현황 진단",
	"현재 마케팅 채널 점검",
	"진료과/지역/경쟁 병원 분석",
	"우선순위 채널 제안",
	"월별 실행 계획 수립",
	"성과 점검 및 개선",
];

export const BranchDirectorPage = () => {
	return (
		<>
			<script type="application/ld+json">{JSON.stringify(directorSchema)}</script>
			<BreadcrumbJsonLd
				items={[
					{ name: "홈", path: "" },
					{ name: "마포지사 소개", path: "/branch" },
					{ name: "지사장 소개", path: "/branch/director" },
				]}
			/>

			{/* 1. 다크 히어로 — 좌 텍스트 + 우 지사장 프로필 사진 */}
			<section className="relative overflow-hidden bg-[#0B0B0B] text-white">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:88px_88px]"
				/>
				<div className="relative mx-auto max-w-7xl px-4 pt-28 pb-16 md:pt-40 md:pb-24 lg:px-8">
					<div className="grid items-center gap-10 lg:grid-cols-[1fr_380px] lg:gap-16">
						<Reveal direction="none">
							<p className="mb-6 font-mono text-[#8F8C89] text-xs tracking-[0.14em]">
								MAPO BRANCH DIRECTOR
							</p>
							<h1 className="break-keep font-extrabold text-4xl leading-[1.12] tracking-[-0.03em] md:text-6xl">
								애드리절트 마포지사
								<br />
								한우리 지사장
							</h1>
							<p className="mt-7 break-keep font-bold text-white text-xl md:text-2xl">
								“함께하면 안 되는 건 없다!”
								<span className="mt-1 block font-semibold text-[#B5B2AF] text-base md:text-lg">
									결과를 숫자로 검증하는 마케터
								</span>
							</p>
							<p className="mt-5 max-w-xl break-keep text-[#B5B2AF] text-[15px] leading-[1.8] md:text-[17px]">
								병원의 상황을 먼저 듣고, 필요한 마케팅만 제안합니다.
							</p>
							{DIRECTOR_LINKS.length > 0 && (
								<div className="mt-8 flex flex-wrap gap-3">
									{DIRECTOR_LINKS.map((l) => (
										<a
											key={l.label}
											href={l.href}
											target="_blank"
											rel="noopener noreferrer"
											className="whitespace-nowrap border border-[#3A3835] px-5 py-3 font-semibold text-sm text-white transition-colors hover:border-[#C8102E] hover:text-[#C8102E]"
										>
											{l.label}
										</a>
									))}
								</div>
							)}
						</Reveal>
						<Reveal direction="none" delay={0.1}>
							<figure className="relative mx-auto w-full max-w-xs lg:max-w-none">
								<div
									aria-hidden="true"
									className="absolute -top-3 -left-3 h-full w-full border border-[#3A3835]"
								/>
								<Image
									src="/people/director-hanwoori.jpg"
									alt="애드리절트 마포지사 한우리 지사장 프로필 사진"
									width={843}
									height={1030}
									quality={90}
									priority
									sizes="(max-width: 1024px) 320px, 380px"
									className="relative h-auto w-full border border-[#3A3835] object-cover"
								/>
								<figcaption className="mt-3 flex items-baseline justify-between">
									<span className="font-mono text-[#8F8C89] text-[11px] tracking-[0.14em]">
										HAN WOO-RI
									</span>
									<span className="font-semibold text-sm text-white">
										한우리 <span className="text-[#B5B2AF]">지사장</span>
									</span>
								</figcaption>
							</figure>
						</Reveal>
					</div>
				</div>
			</section>

			{/* 1.5 지사장의 이야기 */}
			<section className="border-[#E4E2DF] border-b bg-white py-16 md:py-24">
				<div className="mx-auto max-w-3xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">STORY</p>
						<h2 className="break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							결과를 직접 검증해 본
							<br />
							마케터입니다
						</h2>
					</Reveal>
					<Reveal delay={0.08} className="mt-10">
						<div className="space-y-6">
							{STORY_PARAGRAPHS.map((paragraph) => (
								<p
									key={paragraph}
									className="break-keep text-[#333333] text-[15px] leading-[1.9] md:text-[17px]"
								>
									{paragraph}
								</p>
							))}
						</div>
						<p className="mt-8 border-[#C8102E] border-l-2 pl-5 font-mono text-[#767370] text-[11.5px] leading-relaxed tracking-[0.04em]">
							* 위 성과는 의료기관이 아닌 일반 사업(가족 사업·요식업) 마케팅 경험입니다. 병원마케팅
							성과는 의료광고법과 병원별 상황에 따라 다르게 설계·관리됩니다.
						</p>
					</Reveal>
				</div>
			</section>

			{/* 1.7 언론 보도 */}
			<section className="border-[#E4E2DF] border-b bg-[#FAFAFA] py-12 md:py-16">
				<div className="mx-auto max-w-3xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">PRESS</p>
						<article className="border border-[#E4E2DF] bg-white p-6 md:p-8">
							<div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
								<h2 className="break-keep font-bold text-[#111111] text-lg leading-[1.5]">
									[강소 CEO] 한우리 애드리절트 마포지사장
								</h2>
								<span className="whitespace-nowrap font-mono text-[#A5A2A0] text-[11px] tracking-[0.08em]">
									CEO저널 · 2024.07
								</span>
							</div>
							<p className="mt-3 break-keep text-[#333333] text-[14.5px] leading-[1.8]">
								&ldquo;단순히 마케팅 상품을 파는 게 아니라, 노하우와 진심을 팝니다.&rdquo; — 고객의
								입장에서 생각하고 공감해 문제 해결을 돕는다는 한우리 지사장의 마케팅 철학을
								CEO저널이 인터뷰로 다뤘습니다.
							</p>
							<div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
								<a
									href="https://www.ceojhn.com/news/articleView.html?idxno=6347"
									target="_blank"
									rel="noopener noreferrer"
									className="font-semibold text-[#C8102E] text-sm transition-colors hover:text-[#A50D26]"
								>
									기사 원문 보기 →
								</a>
								<Link
									href="/media"
									className="font-semibold text-[#444444] text-sm transition-colors hover:text-[#C8102E]"
								>
									애드리절트 언론 보도 전체 보기 →
								</Link>
							</div>
						</article>
					</Reveal>
				</div>
			</section>

			{/* 2. 한 줄 소개 */}
			<section className="bg-[#FAFAFA] py-16 md:py-24">
				<div className="mx-auto max-w-3xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">ONE LINE</p>
						<p className="break-keep font-extrabold text-2xl text-[#111111] leading-[1.5] tracking-tight md:text-3xl">
							&ldquo;애드리절트 마포지사는 병원마다 다른 진료과, 지역, 예산, 현재 마케팅 상태를
							기준으로 가장 <span className="text-[#C8102E]">현실적인 성장 전략</span>을
							제안합니다.&rdquo;
						</p>
					</Reveal>
				</div>
			</section>

			{/* 3. 소개글 */}
			<section className="border-[#E4E2DF] border-y bg-white py-16 md:py-24">
				<div className="mx-auto max-w-3xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">GREETING</p>
						<h2 className="break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							구조를 설계하는
							<br />
							병원마케팅 파트너
						</h2>
					</Reveal>
					<Reveal delay={0.08} className="mt-10">
						<div className="space-y-6">
							{INTRO_PARAGRAPHS.map((paragraph) => (
								<p
									key={paragraph}
									className="break-keep text-[#333333] text-[15px] leading-[1.9] md:text-[17px]"
								>
									{paragraph}
								</p>
							))}
						</div>
					</Reveal>
				</div>
			</section>

			{/* 4. 운영 철학 6개 카드 */}
			<section className="bg-[#FAFAFA] py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							OPERATING PRINCIPLES
						</p>
						<h2 className="break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							마포지사가 일하는
							<br />
							<span className="text-[#C8102E]">6가지</span> 기준
						</h2>
					</Reveal>
					<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
						{PHILOSOPHY_CARDS.map((principle, i) => (
							<Reveal key={principle} delay={i * 0.06}>
								<article className="h-full border border-[#E4E2DF] bg-white p-6 transition-colors hover:border-[#C8102E]/40 md:p-7">
									<span aria-hidden="true" className="block h-[7px] w-[7px] bg-[#C8102E]" />
									<h3 className="mt-5 break-keep font-extrabold text-[#111111] text-base leading-[1.5] md:text-lg">
										{principle}
									</h3>
								</article>
							</Reveal>
						))}
					</div>
					<Reveal delay={0.2} className="mt-10">
						<Link
							href="/branch/philosophy"
							className="inline-flex items-center gap-2 border border-[#D9D6D3] px-6 py-3.5 font-semibold text-[#444444] text-[15px] transition-colors hover:border-[#C8102E] hover:text-[#C8102E]"
						>
							운영 철학 자세히 보기 →
						</Link>
					</Reveal>
				</div>
			</section>

			{/* 5. 상담 방식 6단계 */}
			<section className="border-[#E4E2DF] border-y bg-white py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							HOW WE CONSULT
						</p>
						<h2 className="break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							상담은 이렇게 진행합니다
						</h2>
						<p className="mt-5 max-w-2xl break-keep text-[#767370] text-[15px] leading-[1.8] md:text-[17px]">
							상품 소개가 아니라 병원 진단에서 시작합니다. 각 단계의 자세한 내용은 상담 프로세스
							페이지에서 확인할 수 있습니다.
						</p>
					</Reveal>
					<div className="mt-12 grid gap-px border border-[#E4E2DF] bg-[#E4E2DF] sm:grid-cols-2 lg:grid-cols-3">
						{CONSULTING_STEPS.map((step, i) => (
							<div key={step} className="bg-white p-6 md:p-8">
								<Reveal delay={i * 0.06}>
									<span className="font-mono text-[#C8102E] text-sm tracking-[0.12em]">
										{String(i + 1).padStart(2, "0")}
									</span>
									<p className="mt-3 break-keep font-bold text-[#111111] text-[15px] md:text-base">
										{step}
									</p>
								</Reveal>
							</div>
						))}
					</div>
					<Reveal delay={0.2} className="mt-10">
						<Link
							href="/branch/process"
							className="inline-flex items-center gap-2 border border-[#D9D6D3] px-6 py-3.5 font-semibold text-[#444444] text-[15px] transition-colors hover:border-[#C8102E] hover:text-[#C8102E]"
						>
							상담 프로세스 자세히 보기 →
						</Link>
					</Reveal>
				</div>
			</section>

			{/* 6. CTA 2개 */}
			<section className="relative overflow-hidden bg-[#0B0B0B] text-white">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:88px_88px]"
				/>
				<div className="relative mx-auto max-w-7xl px-4 py-16 text-center md:py-24 lg:px-8">
					<Reveal>
						<p className="mb-5 font-mono text-[#8F8C89] text-xs tracking-[0.14em]">
							TALK TO THE DIRECTOR
						</p>
						<h2 className="mx-auto max-w-3xl break-keep font-extrabold text-3xl leading-[1.2] tracking-[-0.03em] md:text-5xl">
							우리 병원 이야기부터
							<br />
							들려주세요
						</h2>
						<p className="mx-auto mt-5 max-w-lg break-keep text-[#B5B2AF] text-[15px] leading-[1.8] md:text-[17px]">
							진료과·지역·현재 마케팅 상태를 기준으로, 지금 필요한 것부터 정리해 드립니다.
						</p>
						<div className="mt-10 flex flex-wrap justify-center gap-3">
							<Link
								href="/contact"
								className="w-full whitespace-nowrap bg-[#C8102E] px-8 py-4 text-center font-bold text-[15px] text-white transition-colors hover:bg-[#A50D26] sm:w-auto"
							>
								지사장에게 병원 마케팅 진단받기
							</Link>
							<Link
								href="/contact"
								className="w-full whitespace-nowrap border border-[#3A3835] px-8 py-4 text-center font-semibold text-[15px] text-white transition-colors hover:border-[#C8102E] hover:text-[#C8102E] sm:w-auto"
							>
								우리 병원에 맞는 상품 문의하기
							</Link>
						</div>
					</Reveal>
				</div>
			</section>

			<RelatedPages
				items={[
					{
						label: "마포지사 소개",
						href: "/branch",
						desc: "필요한 채널만 조합하는 본사 직영 지사",
					},
					{ label: "운영 철학", href: "/branch/philosophy", desc: "6가지 기준을 깊이 있게" },
					{ label: "상담 프로세스", href: "/branch/process", desc: "진단부터 개선까지 6단계" },
					{ label: "성공사례", href: "/cases", desc: "애드리절트 네트워크의 실제 기록" },
					{ label: "자주 묻는 질문", href: "/faq", desc: "비용·진행·규정 관련 답변" },
				]}
			/>
			<FinalCTA />
		</>
	);
};

export default BranchDirectorPage;
