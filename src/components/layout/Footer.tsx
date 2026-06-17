import { MessageCircle } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { WaveDivider } from "@/components/shared/WaveDivider";
import { siteConfig } from "@/config/site";

export const Footer = () => {
	return (
		<footer className="bg-[#031a0c] text-white">
			<WaveDivider fillColor="#031a0c" />
			<div className="mx-auto max-w-7xl px-4 pt-16 pb-10 lg:px-8">
				<div className="grid gap-10 md:grid-cols-2">
					{/* Left */}
					<div>
						<Logo variant="light" className="mb-3" />
						<p className="max-w-xs text-slate-400 text-sm leading-relaxed">
							전문직 12개 직군 전용 마케팅 파트너.
							<br />
							의뢰인이 먼저 찾아오는 구조를 만듭니다.
						</p>
						<div className="mt-5 flex gap-3">
							<a
								href={siteConfig.contact.naverBlog}
								target="_blank"
								rel="noopener noreferrer"
								className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white text-xs transition-colors hover:bg-white/20"
							>
								<span className="sr-only">네이버 블로그</span>
								<span aria-hidden="true">N</span>
							</a>
							<a
								href={siteConfig.contact.kakaoOpenChat}
								target="_blank"
								rel="noopener noreferrer"
								className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
							>
								<span className="sr-only">카카오톡 채널</span>
								<MessageCircle className="h-4 w-4" aria-hidden="true" />
							</a>
						</div>
					</div>

					{/* Right */}
					<div className="space-y-1.5 text-slate-400 text-sm md:text-right">
						<p>
							<span className="text-slate-300">회사명</span> {siteConfig.contact.businessName}
						</p>
						<p>
							<span className="text-slate-300">사업자등록번호</span>{" "}
							{siteConfig.contact.businessNumber}
						</p>
						<p>
							<span className="text-slate-300">주소</span> {siteConfig.contact.address}
						</p>
						<p>
							<span className="text-slate-300">TEL</span> {siteConfig.contact.tel}
						</p>
						<p>
							<span className="text-slate-300">EMAIL</span> {siteConfig.contact.email}
						</p>
					</div>
				</div>

				<div className="mt-10 border-white/10 border-t pt-6 text-center text-slate-400 text-xs">
					Copyright © 2026 Onketing. All rights reserved.
				</div>
			</div>
		</footer>
	);
};
