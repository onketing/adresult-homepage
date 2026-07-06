import { Download, MessageCircle, Phone } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
	title: "병원 마케팅 진단 신청 | 병원마케팅 상담 문의 | 애드리절트(ADRESULT)",
	description:
		"애드리절트 병원 마케팅 진단 신청 — 진료과·상권·경쟁 환경 기준으로 병원의 마케팅 현황을 진단해 드립니다. 병원마케팅비용과 채널 구성이 궁금하다면 지금 상담을 신청하세요. 영업일 1일 내 회신.",
	alternates: { canonical: "/contact" },
	keywords: [
		"병원 마케팅 진단",
		"병원마케팅 상담",
		"병원마케팅비용",
		"병원마케팅 문의",
		"병원마케팅회사 상담",
	],
};

const PROCESS = [
	{
		step: "01",
		title: "신청 접수",
		desc: "진단 신청서를 남겨주시면 영업일 1일 내 회신드립니다.",
	},
	{
		step: "02",
		title: "병원 현황 확인",
		desc: "진료과·지역·운영 중인 채널·예산 범위를 기준으로 현황을 확인합니다.",
	},
	{
		step: "03",
		title: "진단 리포트 및 제안",
		desc: "검색·AI·숏폼·커뮤니티 접점 기준의 진단과 병원별 맞춤 전략을 제안드립니다.",
	},
	{
		step: "04",
		title: "진행 여부 결정",
		desc: "제안 내용을 검토하신 뒤 진행 여부를 편하게 결정하시면 됩니다. 진행하지 않으셔도 비용이 발생하지 않습니다.",
	},
];

const DIAGNOSIS_ITEMS = [
	"검색 노출 현황 (네이버 · 구글 · AI 검색)",
	"채널별 콘텐츠 운영 상태",
	"지역 · 경쟁 환경",
	"광고비 구조",
	"후기 · 평판 상태",
];

const TRUST_METRICS = [
	{ value: "11", unit: "년", label: "병원마케팅 업력" },
	{ value: "1,272", unit: "곳", label: "누적 고객사" },
	{ value: "132", unit: "개월", label: "최장수 고객" },
];

export const ContactPage = () => {
	return (
		<>
			<BreadcrumbJsonLd
				items={[
					{ name: "홈", path: "" },
					{ name: "병원 마케팅 진단 신청", path: "/contact" },
				]}
			/>

			{/* HERO */}
			<section className="relative overflow-hidden bg-[#0B0B0B] pt-16 text-white md:pt-20">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:88px_88px]"
				/>
				<div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24 lg:px-8">
					<p className="mb-6 font-mono text-[#8F8C89] text-xs tracking-[0.14em]">
						MARKETING DIAGNOSIS
					</p>
					<h1 className="break-keep font-extrabold text-4xl leading-[1.12] tracking-[-0.03em] md:text-6xl">
						병원 마케팅 진단 신청
					</h1>
					<p className="mt-6 max-w-xl break-keep text-[#B5B2AF] text-[15px] leading-[1.8] md:text-[17px]">
						진료과·상권·경쟁 환경 기준으로 병원의 마케팅 현황을 진단해 드립니다. 단순 견적이 아니라,
						지금 병원에 무엇이 부족하고 무엇부터 해야 하는지를 알려드립니다. 진단은 무료이며, 상담
						후 계약 의무가 없습니다.
					</p>
				</div>
			</section>

			{/* FORM + INFO */}
			<section className="bg-[#FAFAFA]">
				<div className="mx-auto max-w-7xl px-4 py-14 md:py-20 lg:px-8">
					<div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-14">
						{/* 좌: 폼 */}
						<div className="border border-[#E4E2DF] bg-white p-6 md:p-10">
							<h2 className="break-keep font-extrabold text-2xl text-[#111111] tracking-tight md:text-3xl">
								진단 신청서
							</h2>
							<p className="mt-3 text-[#767370] text-sm leading-[1.75]">
								진단은 무료이며, 신청하셔도 계약 의무가 생기지 않습니다. 아래 내용을 남겨주시면
								영업일 1일 내 회신드립니다. 병원마케팅 비용은 병원별 채널 구성에 따라 달라지므로,
								진단 후 구성 내역과 함께 안내드립니다.
							</p>
							<div className="mt-8">
								{/* Tally 폼 임베드 — 제출 내역은 Tally 대시보드에 접수 */}
								<iframe
									src="https://tally.so/embed/gDQkzJ?alignLeft=1&hideTitle=1&transparentBackground=1"
									title="병원 마케팅 진단 신청서"
									loading="lazy"
									className="h-[1100px] w-full border-0 md:h-[1000px]"
								/>
								<p className="mt-4 break-keep text-center text-[#A5A2A0] text-xs leading-[1.7]">
									남겨주신 정보는 진단·상담 목적 외에 사용하지 않습니다. 폼이 보이지 않으면 우측의
									전화·카카오톡으로 문의해주세요.
								</p>
							</div>
						</div>

						{/* 우: 안내 */}
						<aside className="flex flex-col gap-8">
							{/* 직접 연락 */}
							<div className="border border-[#E4E2DF] bg-white p-7">
								<p className="mb-5 font-mono text-[#767370] text-[11px] tracking-[0.14em]">
									DIRECT CONTACT
								</p>
								<div className="flex flex-col gap-3">
									<a
										href={`tel:${siteConfig.contact.tel}`}
										className="flex items-center justify-center gap-2 bg-[#C8102E] px-6 py-4 font-bold text-[15px] text-white transition-colors hover:bg-[#A50D26]"
									>
										<Phone className="h-4 w-4" aria-hidden="true" />
										{siteConfig.contact.tel}
									</a>
									<a
										href={siteConfig.contact.kakaoOpenChat}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-center gap-2 border border-[#D9D6D3] px-6 py-4 font-semibold text-[#444444] text-[15px] transition-colors hover:border-[#C8102E] hover:text-[#C8102E]"
									>
										<MessageCircle className="h-4 w-4" aria-hidden="true" />
										카카오톡 1:1 문의
									</a>
									<a
										href="/adresult-brochure.pdf"
										download="애드리절트 회사소개서.pdf"
										className="flex items-center justify-center gap-2 border border-[#D9D6D3] px-6 py-4 font-semibold text-[#444444] text-[15px] transition-colors hover:border-[#C8102E] hover:text-[#C8102E]"
									>
										<Download className="h-4 w-4" aria-hidden="true" />
										회사소개서 받아보기
									</a>
								</div>
								<p className="mt-4 text-center font-mono text-[#A5A2A0] text-[11px] tracking-[0.06em]">
									{siteConfig.contact.businessHours}
								</p>
							</div>

							{/* 상담 진행 방식 */}
							<div className="border border-[#E4E2DF] bg-white p-7">
								<p className="mb-5 font-mono text-[#767370] text-[11px] tracking-[0.14em]">
									HOW IT WORKS
								</p>
								<h3 className="break-keep font-bold text-[#111111] text-lg">
									상담은 이렇게 진행됩니다
								</h3>
								<div className="mt-5 flex flex-col gap-5">
									{PROCESS.map((p) => (
										<div key={p.step} className="grid grid-cols-[36px_1fr] gap-x-3">
											<span className="pt-0.5 font-mono text-[#C8102E] text-xs tracking-[0.08em]">
												{p.step}
											</span>
											<div>
												<p className="font-bold text-[#111111] text-sm">{p.title}</p>
												<p className="mt-1 break-keep text-[#767370] text-[13px] leading-[1.7]">
													{p.desc}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>

							{/* 진단 항목 */}
							<div className="border border-[#E4E2DF] bg-white p-7">
								<p className="mb-5 font-mono text-[#767370] text-[11px] tracking-[0.14em]">
									DIAGNOSIS SCOPE
								</p>
								<h3 className="break-keep font-bold text-[#111111] text-lg">진단 항목</h3>
								<ul className="mt-4 flex flex-col gap-2.5">
									{DIAGNOSIS_ITEMS.map((item) => (
										<li key={item} className="flex items-start gap-2.5">
											<span
												aria-hidden="true"
												className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 bg-[#C8102E]"
											/>
											<span className="break-keep text-[#333333] text-sm leading-[1.7]">
												{item}
											</span>
										</li>
									))}
								</ul>
							</div>

							{/* 신뢰 지표 */}
							<div className="border border-[#E4E2DF] bg-[#0B0B0B] p-7 text-white">
								<p className="mb-6 font-mono text-[#8F8C89] text-[11px] tracking-[0.14em]">
									WHY ADRESULT
								</p>
								<div className="flex flex-col gap-6">
									{TRUST_METRICS.map((m) => (
										<div key={m.label}>
											<div className="font-extrabold text-3xl tracking-[-0.02em]">
												{m.value}
												<span className="ml-0.5 font-bold text-[#C8102E] text-[0.5em]">
													{m.unit}
												</span>
											</div>
											<p className="mt-1.5 font-mono text-[#8F8C89] text-[11px] tracking-[0.1em]">
												{m.label}
											</p>
										</div>
									))}
								</div>
								<Link
									href="/cases"
									className="mt-7 block border border-[#3A3835] px-5 py-3 text-center font-semibold text-sm text-white transition-colors hover:border-[#C8102E] hover:text-[#C8102E]"
								>
									성공사례 확인하기
								</Link>
							</div>
						</aside>
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactPage;
