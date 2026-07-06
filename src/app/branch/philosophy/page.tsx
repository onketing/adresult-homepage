import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { RelatedPages } from "@/components/shared/RelatedPages";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
	title: "운영 철학 | 애드리절트 마포지사",
	description:
		"병원마케팅회사 애드리절트 마포지사의 운영 철학 — 패키지 강매 대신 병원 진단, 채널 도배 대신 우선순위, 보장성 표현 대신 의료광고법을 고려한 안전한 콘텐츠. 병원마케팅대행사가 일하는 6가지 기준을 소개합니다.",
	alternates: { canonical: "/branch/philosophy" },
	keywords: [
		"애드리절트 마포지사 운영 철학",
		"병원마케팅회사",
		"병원마케팅대행사",
		"병원 맞춤 마케팅",
		"병원마케팅 전략",
		"의료광고법",
	],
};

type PhilosophySection = {
	no: string;
	eyebrow: string;
	title: string;
	paragraphs: string[];
};

// 운영 철학 6개 — 깊이 있는 확장
const PHILOSOPHY_SECTIONS: PhilosophySection[] = [
	{
		no: "01",
		eyebrow: "NO ONE-SIZE-FITS-ALL",
		title: "왜 모든 병원에 같은 상품을 제안하지 않는가",
		paragraphs: [
			"피부과 환자는 시술 전 사진과 후기를 오래 비교하고, 정형외과 환자는 통증이 시작된 순간 가까운 병원을 빠르게 검색합니다. 치과는 가족 단위 재방문이 많고, 한의원은 지역 커뮤니티의 입소문이 큰 비중을 차지합니다. 환자가 병원을 찾는 경로가 다르면, 병원이 힘을 실어야 할 채널도 달라집니다.",
			"개원 단계에 따라서도 고민이 다릅니다. 개원 초기 병원은 병원의 존재를 알리는 검색 접점 확보가 먼저이고, 오래 운영된 병원은 이미 쌓인 평판을 정리하고 새 환자층으로 접점을 넓히는 일이 먼저일 수 있습니다. 같은 진료과라도 출발점이 다르면 처방이 달라야 합니다.",
			"그래서 마포지사는 정해진 패키지를 먼저 내밀지 않습니다. 진료과·지역·개원 단계·예산·목표를 확인한 뒤, 지금 병원에 필요한 채널만 골라 조합해 제안합니다.",
		],
	},
	{
		no: "02",
		eyebrow: "ANALYSIS FIRST",
		title: "진료과와 지역 경쟁도를 먼저 분석합니다",
		paragraphs: [
			"같은 피부과라도 경쟁 병원이 밀집한 상권과 그렇지 않은 지역의 전략은 다릅니다. 경쟁이 치열한 곳에서는 차별화된 콘텐츠와 좁힌 키워드가 필요하고, 경쟁이 덜한 곳에서는 넓은 검색 접점을 빠르게 확보하는 편이 효율적일 수 있습니다.",
			"마포지사는 제안 전에 병원 소재지 기준으로 지역 경쟁도 분석을 진행합니다. 주변 경쟁 병원의 수, 그들이 운영 중인 채널, 검색 결과에서의 위치를 확인한 뒤에야 어떤 채널에 먼저 투자할지 판단할 수 있기 때문입니다.",
			"분석 없이 시작한 마케팅은 예산이 어디서 새는지조차 알기 어렵습니다. 분석이 먼저, 제안은 그다음이라는 순서를 지킵니다.",
		],
	},
	{
		no: "03",
		eyebrow: "SUSTAINABLE ASSETS",
		title: "단기 노출보다 지속 가능한 콘텐츠 자산을 봅니다",
		paragraphs: [
			"광고비를 멈추는 순간 사라지는 노출은 병원에 남는 것이 없습니다. 반면 블로그 글, 숏폼 영상, 스레드의 문장, 잘 관리된 플레이스 정보는 발행을 멈춰도 검색 결과에 남아 환자를 계속 만나는 자산이 됩니다.",
			"마포지사는 월별 성과와 함께 누적되는 자산을 봅니다. 이번 달 몇 명이 봤는지만이 아니라, 병원 이름으로 검색했을 때 어떤 콘텐츠가 쌓여 있는지, 그 콘텐츠가 신뢰를 만드는 방향인지 함께 점검합니다.",
			"콘텐츠 기반 신뢰 형성은 시간이 걸리는 일입니다. 그래서 단기 반응만 보고 채널을 자주 갈아타기보다, 병원에 맞는 채널을 정해 꾸준히 쌓는 쪽을 권합니다.",
		],
	},
	{
		no: "04",
		eyebrow: "SAFE EXPRESSION",
		title: "의료광고법을 고려한 안전한 표현을 기본으로 합니다",
		paragraphs: [
			"자극적인 문구는 클릭을 만들 수 있지만, 의료법 제56조를 벗어난 표현은 병원에 행정처분과 신뢰 하락이라는 비용을 남깁니다. 마케팅 대행사의 무리한 카피 때문에 병원이 책임을 지는 일은 없어야 합니다.",
			"마포지사는 발행 전 모든 원고를 의료법 제56조 기준으로 검수하는 본사 체계를 콘텐츠 제작 단계부터 적용합니다. 단정형 표현 대신, 규정 안에서 병원의 강점과 진료 관점을 전달하는 문장을 씁니다.",
			"안전한 표현은 제약이 아니라 신뢰의 조건이라고 봅니다. 규정을 지키면서도 충분히 설득력 있는 콘텐츠를 만드는 것이 마포지사의 기본기입니다.",
		],
	},
	{
		no: "05",
		eyebrow: "DOCTOR'S STORY",
		title: "원장님의 진료 철학과 병원 강점을 콘텐츠로 풀어냅니다",
		paragraphs: [
			"어느 병원에나 붙일 수 있는 문장은 어느 환자의 마음에도 남지 않습니다. 환자가 기억하는 것은 시술 목록이 아니라, 이 병원이 환자를 대하는 태도와 원장님의 관점입니다.",
			"그래서 마포지사는 콘텐츠를 만들기 전에 원장님의 이야기를 먼저 듣습니다. 왜 이 진료과를 선택했는지, 환자를 볼 때 무엇을 중요하게 여기는지, 다른 병원과 다르게 하는 것이 무엇인지 — 이 답들이 콘텐츠의 원천이 됩니다.",
			"대필된 홍보 글과 원장님에게서 나온 문장은 읽는 사람이 다르게 느낍니다. 병원의 강점을 병원의 언어로 풀어내는 것이 콘텐츠 기반 신뢰 형성의 출발점입니다.",
		],
	},
	{
		no: "06",
		eyebrow: "BEYOND NUMBERS",
		title: "성과는 숫자만이 아니라 문의 흐름과 환자 반응까지 함께 봅니다",
		paragraphs: [
			"조회수와 노출량은 중요한 지표지만, 그 자체가 병원의 목표는 아닙니다. 조회수가 높아도 문의가 늘지 않는다면 콘텐츠와 전환 동선 어딘가에 점검할 지점이 있다는 신호입니다.",
			"마포지사는 데이터 기반 점검을 하되, 숫자 뒤의 흐름을 함께 봅니다. 어떤 콘텐츠를 본 환자가 문의로 이어졌는지, 문의 단계에서 이탈이 생기는 지점은 어디인지, 내원한 환자의 반응은 어땠는지까지 원장님과 함께 확인합니다.",
			"점검 결과는 매월 채널별 지표와 문의 흐름을 정리해 보고드립니다. 문의 데이터는 병원에서 확인해 주시는 실제 내원 흐름과 맞춰볼 때 정확해집니다. 보고서를 위한 보고서가 아니라, 다음 달 계획 조정으로 이어지는 점검을 지향합니다.",
		],
	},
];

// 잘못된 병원마케팅의 흔한 패턴 vs 마포지사의 방식
const COMPARISON_ROWS: { wrong: string; ours: string }[] = [
	{
		wrong: "병원 상황과 무관하게 정해진 패키지를 강매합니다.",
		ours: "병원 진단 후 필요한 채널만 골라 조합해 제안합니다.",
	},
	{
		wrong: "모든 채널에 콘텐츠를 도배하고 물량으로 보고합니다.",
		ours: "우선순위 채널에 집중하고 문의 흐름으로 점검합니다.",
	},
	{
		wrong: "노출과 순위를 약속하는 보장성 표현으로 계약을 유도합니다.",
		ours: "보장 대신 지역 경쟁도 분석과 데이터 기반 점검으로 근거를 제시합니다.",
	},
	{
		wrong: "의료광고법 위반 소지가 있는 자극적 카피를 그대로 씁니다.",
		ours: "본사 검수 체계를 거친 안전한 표현을 기본으로 합니다.",
	},
];

// FAQ 3개
const PHILOSOPHY_FAQ: { q: string; a: string }[] = [
	{
		q: "필요한 채널만 제안하면 대행사 입장에서는 손해 아닌가요?",
		a: "단기 매출로는 그럴 수 있습니다. 하지만 병원에 맞지 않는 상품을 붙여 성과가 나지 않으면 결국 계약이 오래가지 못합니다. 애드리절트 전체 네트워크 기준 최장수 고객이 132개월째 함께하는 이유도, 병원에 필요한 것만 제안하고 성과로 관계를 이어왔기 때문이라고 봅니다.",
	},
	{
		q: "콘텐츠 자산 중심이면 성과가 나기까지 너무 오래 걸리지 않나요?",
		a: "채널마다 속도가 다릅니다. 플레이스 정비나 검색 접점 보완처럼 비교적 빠르게 반응이 오는 작업과, 블로그·숏폼처럼 쌓일수록 힘이 커지는 작업을 병행해 설계합니다. 초기에 확인 가능한 지표와 장기적으로 쌓이는 자산을 구분해 월별로 보고드립니다.",
	},
	{
		q: "다른 대행사와 이미 계약 중인데 상담받아도 되나요?",
		a: "가능합니다. 현재 운영 중인 채널의 상태를 함께 점검하고, 무엇을 유지하고 무엇을 보완할지 기준을 드립니다. 기존 대행사와의 계약을 무리하게 해지시키는 방식은 지향하지 않으며, 상담 후 계약 의무도 없습니다.",
	},
];

const philosophyFaqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: PHILOSOPHY_FAQ.map((item) => ({
		"@type": "Question",
		name: item.q,
		acceptedAnswer: { "@type": "Answer", text: item.a },
	})),
};

export const BranchPhilosophyPage = () => {
	return (
		<>
			<script type="application/ld+json">{JSON.stringify(philosophyFaqSchema)}</script>
			<BreadcrumbJsonLd
				items={[
					{ name: "홈", path: "" },
					{ name: "마포지사 소개", path: "/branch" },
					{ name: "운영 철학", path: "/branch/philosophy" },
				]}
			/>

			{/* 다크 히어로 */}
			<section className="relative overflow-hidden bg-[#0B0B0B] text-white">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:88px_88px]"
				/>
				<div className="relative mx-auto max-w-7xl px-4 pt-32 pb-20 md:pt-44 md:pb-32 lg:px-8">
					<Reveal direction="none">
						<p className="mb-6 font-mono text-[#8F8C89] text-xs tracking-[0.14em]">
							OPERATING PHILOSOPHY
						</p>
						<h1 className="break-keep font-extrabold text-4xl leading-[1.12] tracking-[-0.03em] md:text-6xl">
							마포지사가 일하는
							<br />
							<span className="text-[#C8102E]">6가지 기준</span>
						</h1>
						<p className="mt-6 max-w-xl break-keep text-[#B5B2AF] text-[15px] leading-[1.8] md:text-[17px]">
							애드리절트 마포지사가 모든 제안과 운영에서 지키는 원칙입니다. 저희와 계약하지
							않으시더라도, 대행사를 고르는 점검 기준으로 쓰셔도 좋습니다.
						</p>
					</Reveal>
				</div>
			</section>

			{/* 철학 6개 — 깊이 있는 섹션 */}
			{PHILOSOPHY_SECTIONS.map((section, i) => (
				<section
					key={section.no}
					className={
						i % 2 === 0
							? "bg-[#FAFAFA] py-16 md:py-24"
							: "border-[#E4E2DF] border-y bg-white py-16 md:py-24"
					}
				>
					<div className="mx-auto max-w-3xl px-4 lg:px-8">
						<Reveal>
							<div className="flex items-center gap-4">
								<span className="font-mono text-[#C8102E] text-sm tracking-[0.12em]">
									{section.no}
								</span>
								<p className="font-mono text-[#767370] text-[12px] tracking-[0.14em]">
									{section.eyebrow}
								</p>
							</div>
							<h2 className="mt-4 break-keep font-extrabold text-2xl text-[#111111] leading-[1.3] tracking-tight md:text-4xl">
								{section.title}
							</h2>
						</Reveal>
						<Reveal delay={0.08} className="mt-8">
							<div className="space-y-5">
								{section.paragraphs.map((paragraph) => (
									<p
										key={paragraph}
										className="break-keep text-[#555250] text-[15px] leading-[1.9] md:text-[16.5px]"
									>
										{paragraph}
									</p>
								))}
							</div>
						</Reveal>
					</div>
				</section>
			))}

			{/* 비교 — 흔한 패턴 vs 마포지사 */}
			<section className="bg-[#FAFAFA] py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							WRONG WAY vs OUR WAY
						</p>
						<h2 className="break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							잘못된 병원마케팅의
							<br />
							흔한 패턴과 <span className="text-[#C8102E]">다른 길</span>
						</h2>
					</Reveal>
					<div className="mt-12 space-y-5">
						{COMPARISON_ROWS.map((row, i) => (
							<Reveal key={row.wrong} delay={i * 0.08}>
								<div className="grid gap-px border border-[#E4E2DF] bg-[#E4E2DF] md:grid-cols-2">
									<div className="bg-white p-6 md:p-8">
										<p className="font-mono text-[#A5A2A0] text-[11px] tracking-[0.12em]">
											흔한 패턴
										</p>
										<p className="mt-3 break-keep text-[#767370] text-[14.5px] leading-[1.8]">
											{row.wrong}
										</p>
									</div>
									<div className="bg-white p-6 md:p-8">
										<p className="font-mono text-[#C8102E] text-[11px] tracking-[0.12em]">
											마포지사의 방식
										</p>
										<p className="mt-3 break-keep font-semibold text-[#333333] text-[14.5px] leading-[1.8]">
											{row.ours}
										</p>
									</div>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* 중간 CTA */}
			<section className="relative overflow-hidden bg-[#0B0B0B] text-white">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:88px_88px]"
				/>
				<div className="relative mx-auto max-w-7xl px-4 py-16 text-center md:py-24 lg:px-8">
					<Reveal>
						<p className="mb-5 font-mono text-[#8F8C89] text-xs tracking-[0.14em]">
							START WITH DIAGNOSIS
						</p>
						<h2 className="mx-auto max-w-3xl break-keep font-extrabold text-3xl leading-[1.2] tracking-[-0.03em] md:text-5xl">
							이 기준으로,
							<br />
							우리 병원을 진단받아 보세요
						</h2>
						<div className="mt-10 flex flex-wrap justify-center gap-3">
							<Link
								href="/contact"
								className="w-full whitespace-nowrap bg-[#C8102E] px-8 py-4 text-center font-bold text-[15px] text-white transition-colors hover:bg-[#A50D26] sm:w-auto"
							>
								병원 마케팅 진단 신청
							</Link>
							<a
								href={siteConfig.contact.kakaoOpenChat}
								target="_blank"
								rel="noopener noreferrer"
								className="w-full whitespace-nowrap border border-[#3A3835] px-8 py-4 text-center font-semibold text-[15px] text-white transition-colors hover:border-[#C8102E] hover:text-[#C8102E] sm:w-auto"
							>
								카카오톡 문의
							</a>
						</div>
					</Reveal>
				</div>
			</section>

			{/* FAQ */}
			<section className="border-[#E4E2DF] border-t bg-white py-16 md:py-24">
				<div className="mx-auto max-w-3xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">FAQ</p>
						<h2 className="break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							자주 묻는 질문
						</h2>
					</Reveal>
					<div className="mt-12 space-y-5">
						{PHILOSOPHY_FAQ.map((item, i) => (
							<Reveal key={item.q} delay={i * 0.08}>
								<article className="border border-[#E4E2DF] bg-white p-7 md:p-9">
									<h3 className="break-keep font-extrabold text-[#111111] text-base md:text-lg">
										Q. {item.q}
									</h3>
									<p className="mt-3 break-keep text-[#555250] text-[14.5px] leading-[1.8]">
										{item.a}
									</p>
								</article>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<RelatedPages
				items={[
					{
						label: "마포지사 소개",
						href: "/branch",
						desc: "필요한 채널만 조합하는 본사 직영 지사",
					},
					{ label: "지사장 소개", href: "/branch/director", desc: "병원의 상황을 먼저 듣는 상담" },
					{ label: "상담 프로세스", href: "/branch/process", desc: "진단부터 개선까지 6단계" },
					{ label: "의료광고 규정 가이드", href: "/regulation", desc: "진료과별 허용·금지 표현" },
					{ label: "병원마케팅 인사이트", href: "/insights", desc: "실무 노하우 칼럼" },
				]}
			/>
			<FinalCTA />
		</>
	);
};

export default BranchPhilosophyPage;
