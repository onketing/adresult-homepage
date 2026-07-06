import { MessageCircle, Phone, Send } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { RelatedPages } from "@/components/shared/RelatedPages";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
	title: "상담 프로세스 | 애드리절트 마포지사",
	description:
		"병원마케팅회사 애드리절트 마포지사의 상담 프로세스 — 병원 현황 진단부터 채널 점검, 지역 경쟁도 분석, 우선순위 제안, 월별 실행 계획, 성과 점검까지. 진단 상담 무료, 계약 의무 없는 병원마케팅대행사 상담 안내.",
	alternates: { canonical: "/branch/process" },
	keywords: [
		"병원마케팅 상담",
		"병원마케팅회사",
		"병원마케팅대행사",
		"병원 마케팅 진단",
		"애드리절트 마포지사",
		"병원마케팅 프로세스",
	],
};

type ProcessDetail = {
	no: string;
	title: string;
	desc: string;
	check: string;
	prepare: string;
	duration: string;
};

// 상담 프로세스 6단계 상세
const PROCESS_DETAILS: ProcessDetail[] = [
	{
		no: "01",
		title: "1차 병원 현황 진단",
		desc: "첫 상담에서는 상품 소개보다 병원 이야기를 먼저 듣습니다. 진료과, 개원 시기, 주력 진료, 현재 가장 큰 고민이 무엇인지 확인하고, 병원이 생각하는 목표와 예산 범위를 정리합니다.",
		check: "진료과·개원 단계·주력 진료·핵심 고민·목표·예산 범위",
		prepare:
			"우리 병원의 현재 고민과 목표를 편하게 말씀해 주시면 됩니다. 특별한 자료는 없어도 됩니다.",
		duration: "첫 상담은 부담 없는 길이로 진행하며, 병원 상황에 따라 다릅니다.",
	},
	{
		no: "02",
		title: "현재 마케팅 채널 점검",
		desc: "지금 운영 중인 채널을 하나씩 확인합니다. 블로그·플레이스·홈페이지·SNS·기존 광고의 상태를 보고, 성과가 나는 채널과 비어 있는 접점을 구분합니다. 기존 대행사와 진행 중인 작업이 있다면 그 내용도 함께 봅니다.",
		check: "운영 중인 채널 목록·각 채널의 상태·성과가 나는 채널과 공백 지점",
		prepare:
			"운영 중인 채널 주소(블로그·인스타그램·플레이스 등)와 기존 광고 집행 내역이 있으면 점검이 빨라집니다.",
		duration: "채널 수에 따라 달라지며, 병원 상황에 따라 다릅니다.",
	},
	{
		no: "03",
		title: "진료과·지역·경쟁 병원 분석",
		desc: "병원 소재지 기준으로 지역 경쟁도 분석을 진행합니다. 같은 진료과 경쟁 병원의 수와 그들이 운영 중인 채널, 검색 결과에서의 위치를 확인하고, 우리 병원이 파고들 수 있는 접점을 찾습니다.",
		check: "경쟁 병원 수·경쟁 병원의 채널 운영 현황·검색 결과 구도·공략 가능한 접점",
		prepare: "평소 의식하고 있는 경쟁 병원이 있다면 알려주세요. 분석의 정확도가 올라갑니다.",
		duration: "분석 범위에 따라 달라지며, 병원 상황에 따라 다릅니다.",
	},
	{
		no: "04",
		title: "우선순위 채널 제안",
		desc: "앞선 진단과 분석을 근거로, 지금 병원에 필요한 채널을 우선순위와 함께 제안합니다. 모든 채널을 한 번에 권하지 않고, 예산 안에서 효율이 높은 조합부터 단계적으로 설계합니다. 제안의 근거를 함께 설명드립니다.",
		check: "채널별 우선순위·예산 배분안·제안 근거",
		prepare: "제안서를 검토할 시간을 내주시면 됩니다. 궁금한 점은 얼마든지 질문해 주세요.",
		duration: "진단 후 제안까지의 기간은 병원 상황에 따라 다릅니다.",
	},
	{
		no: "05",
		title: "월별 실행 계획 수립",
		desc: "제안이 확정되면 채널별 월 운영 계획을 세웁니다. 콘텐츠 주제와 발행 주기, 원장님 인터뷰·검수 일정, 월별 확인 지표를 함께 정합니다. 원장님이 진료에 집중할 수 있도록 실행은 마포지사가 관리합니다.",
		check: "콘텐츠 주제·발행 주기·검수 일정·월별 확인 지표",
		prepare: "콘텐츠의 원천이 되는 인터뷰 시간과 발행 전 검수에 참여해 주세요.",
		duration: "계획 수립 기간은 채널 구성에 따라 다르며, 병원 상황에 따라 다릅니다.",
	},
	{
		no: "06",
		title: "성과 점검 및 개선",
		desc: "매월 채널별 지표와 문의 흐름을 정리해 보고드립니다. 문의 데이터는 병원에서 확인해 주시는 실제 내원 흐름과 맞춰볼 때 정확해지므로, 원장님과 함께 점검합니다. 잘된 것과 아쉬운 것을 구분해 다음 달 개선안을 제안드립니다.",
		check: "채널별 지표·문의 흐름·환자 반응·다음 달 개선 방향",
		prepare: "병원에서 체감한 문의·내원 변화를 공유해 주시면 점검의 정확도가 올라갑니다.",
		duration: "월 단위로 반복하며, 리포트 주기는 병원 상황에 따라 조율합니다.",
	},
];

// 상담 전 준비하면 좋은 것
const CHECKLIST: { item: string; desc: string }[] = [
	{
		item: "현재 운영 채널 목록",
		desc: "블로그·인스타그램·플레이스·홈페이지 등 운영 중인 채널의 주소",
	},
	{
		item: "월 예산 범위",
		desc: "확정이 아니어도 됩니다. 대략의 범위만 있어도 제안이 현실적이 됩니다",
	},
	{ item: "목표", desc: "신규 문의 확대, 특정 진료 강화 등 병원이 원하는 방향" },
	{ item: "경쟁 병원", desc: "평소 의식하고 있는 주변 경쟁 병원이 있다면 함께 알려주세요" },
];

// 상담 신청 방법 3가지
const CONTACT_METHODS: {
	label: string;
	desc: string;
	href: string;
	cta: string;
	icon: typeof Send;
	external?: boolean;
}[] = [
	{
		label: "상담 신청 폼",
		desc: "병원 정보를 남겨주시면 영업일 1일 내 회신드립니다. 24시간 접수 가능합니다.",
		href: "/contact",
		cta: "폼으로 신청하기",
		icon: Send,
	},
	{
		label: "전화 문의",
		desc: "바로 통화를 원하시면 전화 주세요. 진료 중이라면 편한 시간대를 남겨주셔도 됩니다.",
		href: `tel:${siteConfig.contact.tel}`,
		cta: `${siteConfig.contact.tel} 전화하기`,
		icon: Phone,
		external: true,
	},
	{
		label: "카카오톡 문의",
		desc: "간단한 질문은 카카오톡 채널로 편하게 남겨주세요.",
		href: siteConfig.contact.kakaoOpenChat,
		cta: "카카오톡으로 문의하기",
		icon: MessageCircle,
		external: true,
	},
];

// FAQ 3개
const PROCESS_FAQ: { q: string; a: string }[] = [
	{
		q: "상담 비용이 있나요?",
		a: "진단 상담은 무료입니다. 병원 현황 진단과 채널 점검, 우선순위 제안까지 비용 없이 진행하며, 실제 운영 계약을 진행할 때만 비용이 발생합니다.",
	},
	{
		q: "상담을 받으면 계약해야 하나요?",
		a: "아닙니다. 상담 후 계약 의무는 없습니다. 진단 내용을 들어보시고 병원에 필요하다고 판단될 때만 진행하시면 됩니다. 제안이 맞지 않다면 편하게 거절하셔도 됩니다.",
	},
	{
		q: "어느 지역까지 상담 가능한가요?",
		a: "마포·서대문·은평·용산 등 서울 서북권을 중심으로 상담하며, 수도권 병원도 가능합니다. 화상·전화·카카오톡 온라인 상담을 병행하므로 거리 때문에 상담이 어려운 경우는 거의 없습니다.",
	},
];

const processFaqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: PROCESS_FAQ.map((item) => ({
		"@type": "Question",
		name: item.q,
		acceptedAnswer: { "@type": "Answer", text: item.a },
	})),
};

export const BranchProcessPage = () => {
	return (
		<>
			<script type="application/ld+json">{JSON.stringify(processFaqSchema)}</script>
			<BreadcrumbJsonLd
				items={[
					{ name: "홈", path: "" },
					{ name: "마포지사 소개", path: "/branch" },
					{ name: "상담 프로세스", path: "/branch/process" },
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
							CONSULTING PROCESS
						</p>
						<h1 className="break-keep font-extrabold text-4xl leading-[1.12] tracking-[-0.03em] md:text-6xl">
							상담은 진단에서
							<br />
							시작합니다
						</h1>
						<p className="mt-6 max-w-xl break-keep text-[#B5B2AF] text-[15px] leading-[1.8] md:text-[17px]">
							애드리절트 마포지사의 상담 프로세스 6단계. 상품 소개가 아니라 병원 현황 진단부터
							시작해, 필요한 채널만 우선순위대로 제안합니다. 진단은 무료이며, 상담 후 계약 의무가
							없습니다.
						</p>
						<div className="mt-10 flex flex-wrap gap-3">
							<Link
								href="/contact"
								className="w-full whitespace-nowrap bg-[#C8102E] px-8 py-4 text-center font-bold text-[15px] text-white transition-colors hover:bg-[#A50D26] sm:w-auto"
							>
								무료 진단 상담 신청
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

			{/* 6단계 상세 */}
			<section className="bg-[#FAFAFA] py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							6 STEPS IN DETAIL
						</p>
						<h2 className="break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							단계별로 이렇게
							<br />
							진행합니다
						</h2>
						<p className="mt-5 max-w-2xl break-keep text-[#767370] text-[15px] leading-[1.8] md:text-[17px]">
							각 단계에서 무엇을 확인하는지, 원장님이 무엇을 준비하시면 되는지 미리 안내드립니다.
						</p>
					</Reveal>
					<div className="mt-12 space-y-5">
						{PROCESS_DETAILS.map((step, i) => (
							<Reveal key={step.no} delay={i * 0.06}>
								<article className="border border-[#E4E2DF] bg-white p-7 transition-colors hover:border-[#C8102E]/40 md:p-11">
									<div className="grid gap-x-8 gap-y-4 md:grid-cols-[96px_1fr]">
										<span className="font-mono text-[#C8102E] text-sm tracking-[0.12em]">
											{step.no}
										</span>
										<div>
											<h3 className="break-keep font-extrabold text-[#111111] text-lg md:text-2xl">
												{step.title}
											</h3>
											<p className="mt-3 break-keep text-[#555250] text-[14.5px] leading-[1.8] md:text-[15px]">
												{step.desc}
											</p>
											<div className="mt-6 space-y-3 border-[#E4E2DF] border-t pt-5">
												<div className="grid grid-cols-[64px_1fr] gap-x-5">
													<span className="pt-0.5 font-mono text-[#C8102E] text-[11px] tracking-[0.12em]">
														확인
													</span>
													<span className="break-keep text-[#333333] text-[14px] leading-[1.7]">
														{step.check}
													</span>
												</div>
												<div className="grid grid-cols-[64px_1fr] gap-x-5">
													<span className="pt-0.5 font-mono text-[#C8102E] text-[11px] tracking-[0.12em]">
														준비
													</span>
													<span className="break-keep text-[#333333] text-[14px] leading-[1.7]">
														{step.prepare}
													</span>
												</div>
												<div className="grid grid-cols-[64px_1fr] gap-x-5">
													<span className="pt-0.5 font-mono text-[#C8102E] text-[11px] tracking-[0.12em]">
														기간
													</span>
													<span className="break-keep text-[#767370] text-[14px] leading-[1.7]">
														{step.duration}
													</span>
												</div>
											</div>
										</div>
									</div>
								</article>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* 상담 전 준비하면 좋은 것 */}
			<section className="border-[#E4E2DF] border-y bg-white py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							BEFORE CONSULTING
						</p>
						<h2 className="break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							상담 전 준비하면
							<br />
							좋은 것
						</h2>
						<p className="mt-5 max-w-2xl break-keep text-[#767370] text-[15px] leading-[1.8] md:text-[17px]">
							없어도 상담은 가능합니다. 다만 아래 네 가지가 있으면 첫 상담의 밀도가 훨씬 높아집니다.
						</p>
					</Reveal>
					<div className="mt-12 grid gap-5 sm:grid-cols-2">
						{CHECKLIST.map((item, i) => (
							<Reveal key={item.item} delay={i * 0.08}>
								<article className="h-full border border-[#E4E2DF] bg-white p-6 md:p-7">
									<div className="flex items-center gap-3">
										<span aria-hidden="true" className="block h-[7px] w-[7px] bg-[#C8102E]" />
										<h3 className="break-keep font-extrabold text-[#111111] text-base md:text-lg">
											{item.item}
										</h3>
									</div>
									<p className="mt-3 break-keep text-[#767370] text-[14px] leading-[1.7]">
										{item.desc}
									</p>
								</article>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* 상담 신청 방법 3가지 — 중간 CTA */}
			<section className="relative overflow-hidden bg-[#0B0B0B] text-white">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:88px_88px]"
				/>
				<div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#8F8C89] text-xs tracking-[0.14em]">HOW TO APPLY</p>
						<h2 className="break-keep font-extrabold text-3xl leading-[1.2] tracking-[-0.03em] md:text-5xl">
							상담 신청 방법 3가지
						</h2>
					</Reveal>
					<div className="mt-12 grid gap-5 md:grid-cols-3">
						{CONTACT_METHODS.map((method, i) => {
							const Icon = method.icon;
							const inner = (
								<>
									<Icon className="h-5 w-5 text-[#C8102E]" />
									<h3 className="mt-4 break-keep font-extrabold text-lg text-white md:text-xl">
										{method.label}
									</h3>
									<p className="mt-2 flex-1 break-keep text-[#B5B2AF] text-[14px] leading-[1.7]">
										{method.desc}
									</p>
									<span className="mt-5 inline-flex items-center gap-2 font-semibold text-[#C8102E] text-[14.5px]">
										{method.cta} →
									</span>
								</>
							);
							return (
								<Reveal key={method.label} delay={i * 0.08}>
									{method.external ? (
										<a
											href={method.href}
											target={method.href.startsWith("http") ? "_blank" : undefined}
											rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
											className="flex h-full flex-col border border-[#3A3835] bg-white/[0.03] p-7 transition-colors hover:border-[#C8102E] md:p-9"
										>
											{inner}
										</a>
									) : (
										<Link
											href={method.href}
											className="flex h-full flex-col border border-[#3A3835] bg-white/[0.03] p-7 transition-colors hover:border-[#C8102E] md:p-9"
										>
											{inner}
										</Link>
									)}
								</Reveal>
							);
						})}
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="bg-[#FAFAFA] py-16 md:py-24">
				<div className="mx-auto max-w-3xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">FAQ</p>
						<h2 className="break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							자주 묻는 질문
						</h2>
					</Reveal>
					<div className="mt-12 space-y-5">
						{PROCESS_FAQ.map((item, i) => (
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
					{
						label: "운영 철학",
						href: "/branch/philosophy",
						desc: "마포지사가 일하는 기준 6가지",
					},
					{ label: "자주 묻는 질문", href: "/faq", desc: "비용·진행·규정 관련 답변" },
					{ label: "성공사례", href: "/cases", desc: "애드리절트 네트워크의 실제 기록" },
					{ label: "고객후기", href: "/reviews", desc: "원장님들의 후기" },
				]}
			/>
			<FinalCTA />
		</>
	);
};

export default BranchProcessPage;
