import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { SPECIALTIES } from "@/data/specialties";

const SOCIALS: { src: string; href: string; label: string }[] = [
	{ src: "/youtube-logo.png", href: siteConfig.contact.youtube, label: "유튜브" },
	{ src: "/blog-logo.png", href: siteConfig.contact.naverBlog, label: "네이버 블로그" },
	{ src: "/instagram-logo.png", href: siteConfig.contact.instagram, label: "인스타그램" },
	{ src: "/kakao-logo.png", href: siteConfig.contact.kakaoOpenChat, label: "카카오톡" },
];

const SERVICE_LINKS = [
	{ label: "통합 노출 설계", href: "/services/integrated" },
	{ label: "AIO 마케팅", href: "/services/aio" },
	{ label: "끝장숏폼 (병원 숏폼 마케팅)", href: "/services/shortform" },
	{ label: "블로그 마케팅", href: "/services/blog" },
	{ label: "카페바이럴", href: "/services/cafe-viral" },
	{ label: "스레드 마케팅", href: "/services/threads" },
	{ label: "플레이스·후기 관리", href: "/services/place-review" },
	{ label: "홈페이지 콘텐츠 전략", href: "/services/homepage-content" },
	{ label: "홈페이지 리빌딩", href: "/services/homepage-rebuilding" },
	{ label: "영상패키지", href: "/services/video" },
	{ label: "애드필름 (촬영)", href: "/services/adfilm" },
	{ label: "재활마케팅", href: "/services/rehab" },
	{ label: "해외 마케팅", href: "/services/global" },
];

const COMPANY_LINKS = [
	{ label: "마포지사 소개", href: "/branch" },
	{ label: "지사장 소개", href: "/branch/director" },
	{ label: "운영 철학", href: "/branch/philosophy" },
	{ label: "상담 프로세스", href: "/branch/process" },
	{ label: "애드리절트 본사", href: "/about" },
	{ label: "연혁·수상", href: "/history" },
	{ label: "CEO 소개", href: "/ceo" },
	{ label: "조직·구성원", href: "/people" },
];

const CONTENT_LINKS = [
	{ label: "성공사례", href: "/cases" },
	{ label: "고객후기", href: "/reviews" },
	{ label: "미디어·언론", href: "/media" },
	{ label: "진심이 STORY", href: "/story" },
	{ label: "병원마케팅 칼럼", href: "/insights" },
	{ label: "병원마케팅 가이드", href: "/guide" },
	{ label: "의료광고 규정", href: "/regulation" },
	{ label: "FAQ", href: "/faq" },
];

const SITUATION_LINKS = [
	{ label: "개원 초기 병원 마케팅", href: "/situations/new-opening" },
	{ label: "대행사 교체 검토", href: "/situations/agency-change" },
	{ label: "지역 기반 병원", href: "/situations/local-competition" },
	{ label: "경쟁 심한 상권", href: "/situations/high-competition" },
];

export const Footer = () => {
	return (
		<footer className="border-[#E4E2DF] border-t bg-[#FAFAFA]">
			<div className="mx-auto max-w-7xl px-4 pt-14 pb-10 md:pt-20 lg:px-8">
				<div className="flex flex-wrap justify-between gap-x-16 gap-y-10">
					{/* Brand */}
					<div className="min-w-60 flex-1 basis-64">
						<div className="flex items-baseline gap-1.5">
							<span className="font-extrabold text-[#090909] text-lg tracking-tight">
								ADRESULT MAPO OFFICE
							</span>
							<span aria-hidden="true" className="inline-block h-1.5 w-1.5 bg-[#C8102E]" />
						</div>
						<p className="mt-4 break-keep text-[#767370] text-sm leading-relaxed">
							애드리절트 마포지사는 본사의 병원마케팅 운영 경험을 기반으로,
							<br />
							진료과·지역·병원 상황에 맞는 마케팅 채널 조합을 제안합니다.
						</p>
						<div className="mt-6 flex gap-3">
							{SOCIALS.map((s) => (
								<a
									key={s.href}
									href={s.href}
									target="_blank"
									rel="noopener noreferrer"
									className="transition-transform hover:-translate-y-0.5"
								>
									<Image
										src={s.src}
										alt={`애드리절트 ${s.label}`}
										width={32}
										height={32}
										className="h-8 w-8 object-contain"
									/>
								</a>
							))}
						</div>
					</div>

					{/* Link columns */}
					<div className="flex flex-wrap gap-x-16 gap-y-10">
						<div>
							<p className="mb-4 font-mono text-[#A5A2A0] text-[11px] tracking-[0.14em]">
								SERVICES
							</p>
							<div className="flex flex-col gap-2.5">
								{SERVICE_LINKS.map((l) => (
									<Link
										key={l.href}
										href={l.href}
										className="whitespace-nowrap text-[#444444] text-sm transition-colors hover:text-[#C8102E]"
									>
										{l.label}
									</Link>
								))}
							</div>
						</div>
						<div>
							<p className="mb-4 font-mono text-[#A5A2A0] text-[11px] tracking-[0.14em]">COMPANY</p>
							<div className="flex flex-col gap-2.5">
								{COMPANY_LINKS.map((l) => (
									<Link
										key={l.href}
										href={l.href}
										className="whitespace-nowrap text-[#444444] text-sm transition-colors hover:text-[#C8102E]"
									>
										{l.label}
									</Link>
								))}
							</div>
						</div>
						<div>
							<p className="mb-4 font-mono text-[#A5A2A0] text-[11px] tracking-[0.14em]">CONTENT</p>
							<div className="flex flex-col gap-2.5">
								{CONTENT_LINKS.map((l) => (
									<Link
										key={l.href}
										href={l.href}
										className="whitespace-nowrap text-[#444444] text-sm transition-colors hover:text-[#C8102E]"
									>
										{l.label}
									</Link>
								))}
							</div>
						</div>
						<div>
							<p className="mb-4 font-mono text-[#A5A2A0] text-[11px] tracking-[0.14em]">CONTACT</p>
							<div className="flex flex-col gap-2.5">
								<Link
									href="/contact"
									className="whitespace-nowrap text-[#444444] text-sm transition-colors hover:text-[#C8102E]"
								>
									병원 마케팅 진단 신청
								</Link>
								<a
									href={siteConfig.contact.kakaoOpenChat}
									target="_blank"
									rel="noopener noreferrer"
									className="whitespace-nowrap text-[#444444] text-sm transition-colors hover:text-[#C8102E]"
								>
									카카오톡 문의
								</a>
								<a
									href={`tel:${siteConfig.contact.tel}`}
									className="whitespace-nowrap text-[#444444] text-sm transition-colors hover:text-[#C8102E]"
								>
									TEL {siteConfig.contact.tel}
								</a>
								<a
									href={`mailto:${siteConfig.contact.email}`}
									className="whitespace-nowrap text-[#444444] text-sm transition-colors hover:text-[#C8102E]"
								>
									{siteConfig.contact.email}
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* 진료과별 내부 링크 (SEO 앵커) */}
				<div className="mt-12 border-[#E4E2DF] border-t pt-8">
					<p className="mb-3 font-mono text-[#A5A2A0] text-[11px] tracking-[0.14em]">
						SPECIALTY MARKETING
					</p>
					<div className="flex flex-wrap gap-x-5 gap-y-2">
						{SPECIALTIES.map((s) => (
							<Link
								key={s.slug}
								href={`/specialty/${s.slug}`}
								className="text-[#767370] text-sm transition-colors hover:text-[#C8102E]"
							>
								{s.name} 마케팅
							</Link>
						))}
					</div>
				</div>

				{/* 상황별 전략 내부 링크 */}
				<div className="mt-8 border-[#E4E2DF] border-t pt-8">
					<p className="mb-3 font-mono text-[#A5A2A0] text-[11px] tracking-[0.14em]">
						BY SITUATION
					</p>
					<div className="flex flex-wrap gap-x-5 gap-y-2">
						{SITUATION_LINKS.map((l) => (
							<Link
								key={l.href}
								href={l.href}
								className="text-[#767370] text-sm transition-colors hover:text-[#C8102E]"
							>
								{l.label}
							</Link>
						))}
					</div>
				</div>

				{/* Business info */}
				<div className="mt-10 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-[#E4E2DF] border-t pt-6">
					<p className="text-[#A5A2A0] text-xs leading-relaxed">
						{siteConfig.contact.businessName} 애드리절트 · 대표 {siteConfig.contact.owner} ·
						사업자등록번호 {siteConfig.contact.businessNumber}
						<br className="md:hidden" />
						<span className="hidden md:inline"> · </span>
						{siteConfig.contact.address} · TEL {siteConfig.contact.tel}
						<br />
						마포지사(본사 직영): {siteConfig.contact.branchAddress} · TEL {siteConfig.contact.tel}
					</p>
					<p className="whitespace-nowrap font-mono text-[#A5A2A0] text-[11px] tracking-[0.08em]">
						© 2026 ADRESULT. SINCE 2015.
					</p>
				</div>
			</div>
		</footer>
	);
};
