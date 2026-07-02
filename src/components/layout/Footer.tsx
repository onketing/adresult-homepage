import Image from "next/image";
import { WaveDivider } from "@/components/shared/WaveDivider";
import { siteConfig } from "@/config/site";

const SOCIALS: { src: string; href: string; label: string }[] = [
	{ src: "/youtube-logo.png", href: siteConfig.contact.youtube, label: "유튜브" },
	{ src: "/blog-logo.png", href: siteConfig.contact.naverBlog, label: "네이버 블로그" },
	{ src: "/instagram-logo.png", href: siteConfig.contact.instagram, label: "인스타그램" },
	{ src: "/kakao-logo.png", href: siteConfig.contact.kakaoOpenChat, label: "카카오톡" },
];

export const Footer = () => {
	return (
		<footer className="bg-[#1a0505] text-white">
			<WaveDivider fillColor="#1a0505" />
			<div className="mx-auto max-w-7xl px-4 pt-16 pb-10 lg:px-8">
				<div className="grid gap-10 md:grid-cols-2">
					{/* Left */}
					<div>
						<Image
							src="/footer-logo.png"
							alt="애드리절트 ADRESULT"
							width={831}
							height={180}
							className="h-12 w-auto"
						/>
						<p className="mt-5 max-w-md text-base text-slate-200 leading-relaxed md:text-lg">
							결과로 말하는 광고회사.
							<br />
							진료과별 1:1 맞춤 병원마케팅으로 신환을 만듭니다.
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
									<span className="sr-only">{s.label}</span>
									<Image
										src={s.src}
										alt=""
										width={36}
										height={36}
										className="h-9 w-9 object-contain"
									/>
								</a>
							))}
						</div>
					</div>

					{/* Right */}
					<div className="space-y-2 text-base text-slate-200 md:text-right md:text-lg">
						<p>
							<span className="font-semibold text-white">회사명</span>{" "}
							{siteConfig.contact.businessName}
						</p>
						<p>
							<span className="font-semibold text-white">대표자</span> {siteConfig.contact.owner}
						</p>
						<p>
							<span className="font-semibold text-white">사업자등록번호</span>{" "}
							{siteConfig.contact.businessNumber}
						</p>
						<p>
							<span className="font-semibold text-white">주소</span> {siteConfig.contact.address}
						</p>
						<p>
							<span className="font-semibold text-white">TEL</span> {siteConfig.contact.tel}
						</p>
						<p>
							<span className="font-semibold text-white">EMAIL</span> {siteConfig.contact.email}
						</p>
					</div>
				</div>

				<div className="mt-10 border-white/10 border-t pt-6 text-center text-slate-400 text-xs">
					Copyright © 2026 ADRESULT. All rights reserved.
				</div>
			</div>
		</footer>
	);
};
