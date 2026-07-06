"use client";

import { ArrowUp } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

const SOCIALS = [
	{ href: siteConfig.contact.youtube, src: "/youtube-logo.png", label: "애드리절트TV 유튜브" },
	{ href: siteConfig.contact.naverBlog, src: "/blog-logo.png", label: "네이버 블로그" },
	{ href: siteConfig.contact.instagram, src: "/instagram-logo.png", label: "인스타그램" },
	{ href: siteConfig.contact.kakaoOpenChat, src: "/kakao-logo.png", label: "카카오톡 채널" },
];

export const FloatingActions = () => {
	const [showScrollTop, setShowScrollTop] = useState(false);

	useEffect(() => {
		const onScroll = () => setShowScrollTop(window.scrollY > 400);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

	return (
		<div className="fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 md:right-8 md:flex">
			{SOCIALS.map((s) => (
				<a
					key={s.src}
					href={s.href}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={s.label}
					className="block transition-transform duration-300 hover:scale-110"
				>
					<Image
						src={s.src}
						alt={s.label}
						width={64}
						height={64}
						className="drop-shadow-md"
						style={{ height: "64px", width: "64px" }}
					/>
				</a>
			))}

			{/* 위로가기 */}
			{showScrollTop && (
				<button
					type="button"
					onClick={scrollToTop}
					aria-label="맨 위로 이동"
					className="flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 bg-white text-[#111111] shadow-md transition-transform duration-300 hover:scale-110"
				>
					<ArrowUp className="h-6 w-6" />
				</button>
			)}
		</div>
	);
};
