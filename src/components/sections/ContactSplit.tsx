import { Mail, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/config/site";

export const ContactSplit = () => {
	return (
		<section id="contact-form" className="bg-[#f8fafc] px-4 py-16 md:px-8 md:py-24">
			<div className="mx-auto max-w-3xl">
				{/* Wide form card */}
				<div className="mb-14 rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_16px_64px_rgba(15,23,42,0.1)] sm:p-10">
					<ContactForm />
				</div>

				{/* Direct Contact — centered */}
				<div className="text-center">
					<p className="mb-6 font-semibold text-[#58d68d] text-sm uppercase tracking-[0.2em]">
						Direct Contact
					</p>
					<div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
						<a
							href={siteConfig.contact.kakaoOpenChat}
							target="_blank"
							rel="noopener noreferrer"
							className="flex min-w-[220px] items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3.5 transition-colors hover:border-[#58d68d]/40"
						>
							<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FEE500]">
								<MessageCircle className="h-5 w-5 text-[#0a0a0a]" aria-hidden="true" />
							</div>
							<div className="text-left">
								<p className="font-bold text-[#0a0a0a] text-sm">카카오톡 1:1 문의</p>
								<p className="text-slate-500 text-xs">바로 답변</p>
							</div>
						</a>
						<a
							href={`mailto:${siteConfig.contact.email}`}
							className="flex min-w-[220px] items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3.5 transition-colors hover:border-[#58d68d]/40"
						>
							<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#ecfdf5]">
								<Mail className="h-5 w-5 text-[#58d68d]" aria-hidden="true" />
							</div>
							<div className="text-left">
								<p className="font-bold text-[#0a0a0a] text-sm">이메일</p>
								<p className="text-slate-500 text-xs">{siteConfig.contact.email}</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
