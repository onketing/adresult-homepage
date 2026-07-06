import { Bot, FileText, MessageCircle, MessagesSquare, PenLine, Play, Star } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { RelatedPages } from "@/components/shared/RelatedPages";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
	title: "애드리절트 마포지사 소개 | 병원별 맞춤 마케팅 전략",
	description:
		"병원마케팅회사 애드리절트 마포지사 — 진료과·지역·개원 단계·예산에 따라 AIO·숏폼·스레드·카페바이럴·블로그를 필요한 만큼만 조합해 제안하는 병원마케팅대행사입니다. 마포·서울 서북권 병원 밀착 상담.",
	alternates: { canonical: "/branch" },
	keywords: [
		"애드리절트 마포지사",
		"병원마케팅회사",
		"병원마케팅대행사",
		"마포 병원마케팅",
		"서대문 병원마케팅",
		"은평 병원마케팅",
		"병원마케팅 상담",
		"병원 맞춤 마케팅",
	],
};

// 마포지사가 먼저 확인하는 병원 상황 7가지
const DIAGNOSIS_FACTORS: { label: string; desc: string }[] = [
	{ label: "진료과", desc: "피부과·정형외과·치과 등 진료과마다 환자의 검색 흐름이 다릅니다." },
	{ label: "지역", desc: "같은 진료과라도 상권과 지역에 따라 경쟁 구도가 달라집니다." },
	{ label: "개원 단계", desc: "개원 준비·개원 초기·안정기 병원의 우선순위는 서로 다릅니다." },
	{ label: "경쟁 강도", desc: "주변 경쟁 병원의 수와 마케팅 수준을 먼저 파악합니다." },
	{ label: "현재 마케팅 상태", desc: "이미 운영 중인 채널의 성과와 공백을 함께 점검합니다." },
	{ label: "예산", desc: "예산 범위 안에서 효율이 높은 채널부터 우선 배치합니다." },
	{ label: "목표", desc: "신규 문의·특정 진료 확대 등 병원이 원하는 방향을 기준으로 삼습니다." },
];

// 본사와의 관계 — 라벨/내용 그리드
const HQ_RELATION: { label: string; desc: string }[] = [
	{
		label: "노하우",
		desc: "애드리절트 본사(2015년 창업, 서울 강남)가 전체 네트워크 기준으로 축적한 병원마케팅 노하우를 마포지사가 그대로 사용합니다.",
	},
	{
		label: "지식뱅크",
		desc: "애드리절트 본사가 축적한 사내 지식뱅크 3,800여 개의 실무 자료를 마포지사의 전략 수립에 동일하게 활용합니다.",
	},
	{
		label: "검수 체계",
		desc: "의료광고법(의료법 제56조)을 고려한 본사의 콘텐츠 검수 체계를 마포지사 콘텐츠에도 동일하게 적용합니다.",
	},
	{
		label: "역할 분담",
		desc: "전략과 콘텐츠 품질 기준은 본사와 동일하게 유지하고, 상담과 관리는 마포지사가 밀착 진행합니다.",
	},
];

// 집중 영역 7개 — 서비스 페이지 링크
const FOCUS_SERVICES: {
	name: string;
	desc: string;
	href: string;
	icon: typeof Bot;
}[] = [
	{
		name: "AIO 마케팅",
		desc: "ChatGPT·Gemini 등 AI 검색에서 병원의 검색 접점을 강화하는 콘텐츠 설계.",
		href: "/services/aio",
		icon: Bot,
	},
	{
		name: "끝장숏폼",
		desc: "조회수가 아니라 문의 전환을 고려해 기획·촬영·편집까지 설계하는 숏폼.",
		href: "/services/shortform",
		icon: Play,
	},
	{
		name: "스레드 마케팅",
		desc: "원장님의 전문성이 보이는 전문가 채널로 콘텐츠 기반 신뢰를 형성합니다.",
		href: "/services/threads",
		icon: MessageCircle,
	},
	{
		name: "카페바이럴",
		desc: "지역 커뮤니티·맘카페에서 병원이 자연스럽게 언급되는 흐름을 만듭니다.",
		href: "/services/cafe-viral",
		icon: MessagesSquare,
	},
	{
		name: "블로그 마케팅",
		desc: "검색 유입을 고려한 구조로 진료 콘텐츠를 꾸준히 쌓는 블로그 운영.",
		href: "/services/blog",
		icon: PenLine,
	},
	{
		name: "홈페이지 콘텐츠",
		desc: "방문자가 문의로 이어지도록 홈페이지 콘텐츠의 구조와 문장을 다듬습니다.",
		href: "/services/homepage-content",
		icon: FileText,
	},
	{
		name: "플레이스·후기 관리",
		desc: "네이버 플레이스 정보와 후기 흐름을 데이터 기반으로 점검·관리합니다.",
		href: "/services/place-review",
		icon: Star,
	},
];

// 진료과 9개 링크
const SPECIALTY_LINKS: { name: string; href: string }[] = [
	{ name: "피부과", href: "/specialty/dermatology" },
	{ name: "성형외과", href: "/specialty/plastic-surgery" },
	{ name: "정형외과", href: "/specialty/orthopedics" },
	{ name: "통증의학과", href: "/specialty/pain-medicine" },
	{ name: "치과", href: "/specialty/dentistry" },
	{ name: "한의원", href: "/specialty/oriental-medicine" },
	{ name: "산부인과", href: "/specialty/obgyn" },
	{ name: "소아과", href: "/specialty/pediatrics" },
	{ name: "내과·검진센터", href: "/specialty/internal-medicine" },
];

// 상담 프로세스 6단계 요약
const PROCESS_SUMMARY: string[] = [
	"1차 병원 현황 진단",
	"현재 마케팅 채널 점검",
	"진료과·지역·경쟁 병원 분석",
	"우선순위 채널 제안",
	"월별 실행 계획 수립",
	"성과 점검 및 개선",
];

export const BranchPage = () => {
	return (
		<>
			<BreadcrumbJsonLd
				items={[
					{ name: "홈", path: "" },
					{ name: "마포지사 소개", path: "/branch" },
				]}
			/>

			{/* 1. 다크 히어로 */}
			<section className="relative overflow-hidden bg-[#0B0B0B] text-white">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:88px_88px]"
				/>
				<div className="relative mx-auto max-w-7xl px-4 pt-32 pb-20 md:pt-44 md:pb-32 lg:px-8">
					<Reveal direction="none">
						<p className="mb-6 font-mono text-[#8F8C89] text-xs tracking-[0.14em]">
							ADRESULT MAPO OFFICE
						</p>
						<h1 className="break-keep font-extrabold text-4xl leading-[1.12] tracking-[-0.03em] md:text-6xl">
							애드리절트 마포지사는
							<br />
							병원마다 다른 성장 방식을 설계합니다
						</h1>
						<p className="mt-6 max-w-xl break-keep text-[#B5B2AF] text-[15px] leading-[1.8] md:text-[17px]">
							진료과·지역·예산이 다른 병원에 같은 상품을 권하지 않습니다. 본사의 운영 시스템과
							의료광고법 검수 체계를 그대로 쓰는 본사 직영 조직으로, 상담과 관리는 원장님 곁에서
							진행합니다.
						</p>
						<div className="mt-10 flex flex-wrap gap-3">
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

			{/* 2. 마포지사는 어떤 곳인가 */}
			<section className="bg-[#FAFAFA] py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							WHAT WE DO
						</p>
						<h2 className="break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							필요한 상품만 조합해
							<br />
							제안하는 <span className="text-[#C8102E]">본사 직영 병원마케팅 지사</span>
						</h2>
						<p className="mt-5 max-w-2xl break-keep text-[#767370] text-[15px] leading-[1.8] md:text-[17px]">
							정해진 패키지를 먼저 내밀지 않습니다. 아래 일곱 가지 기준으로 병원의 상황을 확인한 뒤,
							지금 필요한 채널만 골라 제안합니다. 제안서에는 각 채널을 고른 근거를 함께 적어
							드립니다.
						</p>
					</Reveal>
					<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
						{DIAGNOSIS_FACTORS.map((factor, i) => (
							<Reveal key={factor.label} delay={i * 0.06}>
								<article className="h-full border border-[#E4E2DF] bg-white p-6 transition-colors hover:border-[#C8102E]/40 md:p-7">
									<div className="flex items-center gap-3">
										<span className="font-mono text-[#C8102E] text-[11px] tracking-[0.12em]">
											{String(i + 1).padStart(2, "0")}
										</span>
										<h3 className="font-extrabold text-[#111111] text-base md:text-lg">
											{factor.label}
										</h3>
									</div>
									<p className="mt-3 break-keep text-[#767370] text-[14px] leading-[1.7]">
										{factor.desc}
									</p>
								</article>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* 3. 본사와의 관계 */}
			<section className="border-[#E4E2DF] border-y bg-white py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
						<Reveal>
							<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
								HEADQUARTERS × BRANCH
							</p>
							<h2 className="break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
								본사의 기준,
								<br />
								마포지사의 <span className="text-[#C8102E]">밀착 관리</span>
							</h2>
							<p className="mt-5 break-keep text-[#767370] text-[15px] leading-[1.8] md:text-[17px]">
								애드리절트는 전체 네트워크 기준 업력 11년, 누적 1,272곳의 병원과 함께해 왔으며
								최장수 고객은 132개월째 함께하고 있습니다. 마포지사는 이 기준과 자산 위에서 상담과
								관리를 밀착 진행합니다.
							</p>
						</Reveal>
						<Reveal delay={0.08}>
							<div className="border border-[#E4E2DF] bg-white p-7 md:p-11">
								<div className="space-y-6">
									{HQ_RELATION.map((row) => (
										<div key={row.label} className="grid grid-cols-[64px_1fr] gap-x-5">
											<span className="pt-0.5 font-mono text-[#C8102E] text-[11px] tracking-[0.12em]">
												{row.label}
											</span>
											<span className="break-keep text-[#333333] text-[14.5px] leading-[1.7]">
												{row.desc}
											</span>
										</div>
									))}
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			{/* 4. 집중 영역 7개 */}
			<section className="bg-[#FAFAFA] py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							FOCUS AREAS
						</p>
						<h2 className="break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							마포지사가 다루는
							<br />
							<span className="text-[#C8102E]">7가지</span> 채널
						</h2>
						<p className="mt-5 max-w-2xl break-keep text-[#767370] text-[15px] leading-[1.8] md:text-[17px]">
							모든 채널을 한 번에 권하지 않습니다. 병원 상황에 따라 필요한 채널부터 단계적으로
							조합합니다.
						</p>
					</Reveal>
					<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
						{FOCUS_SERVICES.map((service, i) => {
							const Icon = service.icon;
							return (
								<Reveal key={service.href} delay={i * 0.06}>
									<Link
										href={service.href}
										className="group flex h-full flex-col border border-[#E4E2DF] bg-white p-6 transition-colors hover:border-[#C8102E] md:p-7"
									>
										<Icon className="h-5 w-5 text-[#C8102E]" />
										<h3 className="mt-4 break-keep font-extrabold text-[#111111] text-base transition-colors group-hover:text-[#C8102E] md:text-lg">
											{service.name}
										</h3>
										<p className="mt-2 break-keep text-[#767370] text-[14px] leading-[1.7]">
											{service.desc}
										</p>
									</Link>
								</Reveal>
							);
						})}
					</div>
				</div>
			</section>

			{/* 5. 상담 가능 지역 */}
			<section className="border-[#E4E2DF] border-y bg-white py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
						<Reveal>
							<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
								SERVICE AREA
							</p>
							<h2 className="break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
								마포 중심,
								<br />
								<span className="text-[#C8102E]">서울 서북권</span> 밀착 상담
							</h2>
							<p className="mt-5 break-keep text-[#767370] text-[15px] leading-[1.8] md:text-[17px]">
								마포·서대문·은평·용산 등 서울 서북권 병원을 중심으로 상담합니다. 수도권 병원도 상담
								가능하며, 온라인 상담을 병행해 거리 부담 없이 진행할 수 있습니다.
							</p>
						</Reveal>
						<Reveal delay={0.08}>
							<div className="border border-[#E4E2DF] bg-white p-7 md:p-11">
								<div className="space-y-6">
									<div className="grid grid-cols-[64px_1fr] gap-x-5">
										<span className="pt-0.5 font-mono text-[#C8102E] text-[11px] tracking-[0.12em]">
											중심
										</span>
										<div className="flex flex-wrap gap-2">
											{["마포", "서대문", "은평", "용산"].map((area) => (
												<span
													key={area}
													className="bg-[#F5F5F5] px-2.5 py-1.5 font-semibold text-[#555250] text-xs"
												>
													{area}
												</span>
											))}
										</div>
									</div>
									<div className="grid grid-cols-[64px_1fr] gap-x-5">
										<span className="pt-0.5 font-mono text-[#C8102E] text-[11px] tracking-[0.12em]">
											확장
										</span>
										<span className="break-keep text-[#333333] text-[14.5px] leading-[1.7]">
											서울 전역과 수도권 병원도 상담 가능합니다. 지역 경쟁도 분석은 병원 소재지
											기준으로 진행합니다.
										</span>
									</div>
									<div className="grid grid-cols-[64px_1fr] gap-x-5">
										<span className="pt-0.5 font-mono text-[#C8102E] text-[11px] tracking-[0.12em]">
											온라인
										</span>
										<span className="break-keep text-[#333333] text-[14.5px] leading-[1.7]">
											화상·전화·카카오톡 상담을 병행합니다. 진료 일정에 맞춰 시간대를 조율합니다.
										</span>
									</div>
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</section>

			{/* 중간 CTA */}
			<section className="relative overflow-hidden bg-[#0B0B0B] text-white">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:88px_88px]"
				/>
				<div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24 lg:px-8">
					<Reveal>
						<p className="mb-5 font-mono text-[#8F8C89] text-xs tracking-[0.14em]">
							FREE DIAGNOSIS
						</p>
						<h2 className="break-keep font-extrabold text-3xl leading-[1.2] tracking-[-0.03em] md:text-5xl">
							우리 병원엔 어떤 채널이 먼저일까요?
						</h2>
						<p className="mt-5 max-w-xl break-keep text-[#B5B2AF] text-[15px] leading-[1.8] md:text-[17px]">
							진료과·지역·현재 마케팅 상태를 기준으로 우선순위를 진단해 드립니다. 진단은 무료이며,
							상담 후 계약 의무가 없습니다.
						</p>
						<div className="mt-9 flex flex-wrap gap-3">
							<Link
								href="/contact"
								className="w-full whitespace-nowrap bg-[#C8102E] px-8 py-4 text-center font-bold text-[15px] text-white transition-colors hover:bg-[#A50D26] sm:w-auto"
							>
								병원 마케팅 진단 신청
							</Link>
							<a
								href={`tel:${siteConfig.contact.tel}`}
								className="w-full whitespace-nowrap border border-[#3A3835] px-8 py-4 text-center font-semibold text-[15px] text-white transition-colors hover:border-[#C8102E] hover:text-[#C8102E] sm:w-auto"
							>
								전화 문의 {siteConfig.contact.tel}
							</a>
						</div>
					</Reveal>
				</div>
			</section>

			{/* 6. 진료과별 맞춤 제안 */}
			<section className="bg-[#FAFAFA] py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							SPECIALTIES
						</p>
						<h2 className="break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							진료과별 맞춤 제안
						</h2>
						<p className="mt-5 max-w-2xl break-keep text-[#767370] text-[15px] leading-[1.8] md:text-[17px]">
							진료과마다 환자의 검색 흐름과 결정 과정이 다릅니다. 아홉 개 진료과의 접근 방식을
							확인해 보세요.
						</p>
					</Reveal>
					<div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
						{SPECIALTY_LINKS.map((specialty, i) => (
							<Reveal key={specialty.href} delay={i * 0.05}>
								<Link
									href={specialty.href}
									className="group flex items-center justify-between border border-[#E4E2DF] bg-white px-5 py-4 transition-colors hover:border-[#C8102E]"
								>
									<span className="break-keep font-bold text-[#111111] text-sm transition-colors group-hover:text-[#C8102E] md:text-base">
										{specialty.name}
									</span>
									<span aria-hidden="true" className="font-mono text-[#A5A2A0] text-xs">
										→
									</span>
								</Link>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* 7. 의료광고법을 고려한 콘텐츠 운영 */}
			<section className="border-[#E4E2DF] border-y bg-white py-16 md:py-24">
				<div className="mx-auto max-w-3xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
							MEDICAL AD COMPLIANCE
						</p>
						<h2 className="break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							의료광고법을 고려한
							<br />
							콘텐츠 운영
						</h2>
						<p className="mt-5 break-keep text-[#767370] text-[15px] leading-[1.8] md:text-[17px]">
							자극적인 표현은 단기 반응을 만들 수 있지만, 행정처분의 위험은 대행사가 아니라 병원에
							남습니다. 그래서 마포지사는 발행 전 원고를 의료법 제56조 기준으로 검수하는 본사 체계를
							그대로 적용하고, 규정 안에서 신뢰를 만드는 표현을 기본으로 합니다.
						</p>
						<p className="mt-4 break-keep text-[#767370] text-[15px] leading-[1.8] md:text-[17px]">
							진료과별 허용·금지 표현 기준은 본사 규정 가이드에서 확인할 수 있습니다.
						</p>
						<Link
							href="/regulation"
							className="mt-8 inline-flex items-center gap-2 border border-[#D9D6D3] px-6 py-3.5 font-semibold text-[#444444] text-[15px] transition-colors hover:border-[#C8102E] hover:text-[#C8102E]"
						>
							의료광고 규정 가이드 보기 →
						</Link>
					</Reveal>
				</div>
			</section>

			{/* 8. 상담 프로세스 요약 */}
			<section className="bg-[#FAFAFA] py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">PROCESS</p>
						<h2 className="break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
							상담은 <span className="text-[#C8102E]">6단계</span>로 진행합니다
						</h2>
					</Reveal>
					<div className="mt-12 grid gap-px border border-[#E4E2DF] bg-[#E4E2DF] sm:grid-cols-2 lg:grid-cols-3">
						{PROCESS_SUMMARY.map((step, i) => (
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

			{/* 9. 지사장 소개 연결 카드 */}
			<section className="border-[#E4E2DF] border-t bg-white py-16 md:py-24">
				<div className="mx-auto max-w-7xl px-4 lg:px-8">
					<Reveal>
						<Link
							href="/branch/director"
							className="group block border border-[#E4E2DF] bg-[#FAFAFA] p-8 transition-colors hover:border-[#C8102E] md:p-12"
						>
							<p className="mb-4 font-mono text-[#767370] text-[12px] tracking-[0.14em]">
								MAPO BRANCH DIRECTOR
							</p>
							<h2 className="break-keep font-extrabold text-2xl text-[#111111] tracking-tight transition-colors group-hover:text-[#C8102E] md:text-4xl">
								한우리 지사장
							</h2>
							<p className="mt-4 max-w-2xl break-keep text-[#767370] text-[15px] leading-[1.8] md:text-[17px]">
								병원의 상황을 먼저 듣고, 필요한 마케팅만 제안합니다. 마포지사 지사장의 상담 방식과
								운영 철학을 확인해 보세요.
							</p>
							<span className="mt-6 inline-flex items-center gap-2 font-semibold text-[#C8102E] text-[15px]">
								지사장 소개 보기 →
							</span>
						</Link>
					</Reveal>
				</div>
			</section>

			<RelatedPages
				items={[
					{ label: "지사장 소개", href: "/branch/director", desc: "병원의 상황을 먼저 듣는 상담" },
					{
						label: "운영 철학",
						href: "/branch/philosophy",
						desc: "마포지사가 일하는 기준 6가지",
					},
					{ label: "상담 프로세스", href: "/branch/process", desc: "진단부터 개선까지 6단계" },
					{ label: "AIO 마케팅", href: "/services/aio", desc: "AI 검색 접점 강화" },
					{ label: "의료광고 규정 가이드", href: "/regulation", desc: "진료과별 허용·금지 표현" },
					{ label: "성공사례", href: "/cases", desc: "애드리절트 네트워크의 실제 기록" },
				]}
			/>
			<FinalCTA />
		</>
	);
};

export default BranchPage;
