import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/config/site";

export const FAQContact = () => {
	return (
		<section className="bg-slate-50 px-4 py-20 md:py-24">
			<div className="mx-auto max-w-5xl">
				<div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[260px_1fr] md:gap-14">
					{/* 좌: 헤딩 */}
					<Reveal direction="left">
						<p className="mb-3 font-semibold text-[#ef3c39] text-sm uppercase tracking-[0.25em]">
							Contact
						</p>
						<h2 className="mb-4 font-bold text-3xl text-[#0a0a0a] tracking-tight md:text-4xl">
							답을 못 찾으셨나요?
						</h2>
						<p className="break-keep text-slate-500 leading-relaxed">
							직접 물어보시면 영업일 1일 내로 답변드립니다.
						</p>
					</Reveal>

					{/* 우: CTA 그리드 (2×2) */}
					<Reveal delay={0.1} direction="right">
						<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
							<a
								href={siteConfig.contact.kakaoOpenChat}
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-[#ef3c39]/40 hover:shadow-[0_4px_16px_rgba(239,60,57,0.08)]"
							>
								<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FEE500]">
									<MessageCircle className="h-4 w-4 text-[#0a0a0a]" aria-hidden="true" />
								</div>
								<div>
									<p className="font-semibold text-[#0a0a0a] text-sm">카카오톡 1:1</p>
									<p className="text-slate-500 text-xs">바로 답변</p>
								</div>
							</a>

							<a
								href={`tel:${siteConfig.contact.tel}`}
								className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-[#ef3c39]/40 hover:shadow-[0_4px_16px_rgba(239,60,57,0.08)]"
							>
								<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#3a0509]">
									<Phone className="h-4 w-4 text-white" aria-hidden="true" />
								</div>
								<div>
									<p className="font-semibold text-[#0a0a0a] text-sm">전화 문의</p>
									<p className="text-slate-500 text-xs">평일 09:00–18:00</p>
								</div>
							</a>

							<a
								href={`mailto:${siteConfig.contact.email}`}
								className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-[#ef3c39]/40 hover:shadow-[0_4px_16px_rgba(239,60,57,0.08)]"
							>
								<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#ef3c39]/10">
									<Mail className="h-4 w-4 text-[#ef3c39]" aria-hidden="true" />
								</div>
								<div>
									<p className="font-semibold text-[#0a0a0a] text-sm">이메일 문의</p>
									<p className="text-slate-500 text-xs">{siteConfig.contact.email}</p>
								</div>
							</a>

							<Link
								href="/contact"
								className="group flex items-center gap-3 rounded-xl border border-[#ef3c39]/30 bg-[#ef3c39]/[0.04] px-5 py-4 transition-all hover:-translate-y-0.5 hover:bg-[#ef3c39]/[0.08]"
							>
								<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#ef3c39]">
									<ArrowRight className="h-4 w-4 text-white" aria-hidden="true" />
								</div>
								<div>
									<p className="font-semibold text-[#ef3c39] text-sm">마케팅 컨설팅</p>
									<p className="text-slate-500 text-xs">영업일 1일 내 회신</p>
								</div>
							</Link>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
};
