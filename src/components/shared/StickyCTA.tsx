"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const StickyCTA = () => {
	const pathname = usePathname();
	const [show, setShow] = useState(false);

	useEffect(() => {
		const onScroll = () => setShow(window.scrollY > 400);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	if (pathname.startsWith("/contact")) return null;

	return (
		<div
			className={cn(
				"fixed inset-x-0 bottom-0 z-40 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
				show ? "translate-y-0" : "translate-y-full",
			)}
		>
			<div className="border-[#3A3835] border-t bg-[#0B0B0B]/97 px-4 py-3.5 shadow-[0_-8px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm md:py-4">
				<div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8">
					<p className="break-keep font-semibold text-[15px] text-white md:text-lg">
						우리 병원에 지금 필요한 마케팅, <span className="text-[#C8102E]">진단</span>부터
						받아보세요.
					</p>
					<div className="flex items-center gap-2.5">
						<Link
							href="/contact"
							className="whitespace-nowrap bg-[#C8102E] px-6 py-3 font-bold text-sm text-white transition-colors hover:bg-[#A50D26] md:text-[15px]"
						>
							병원 마케팅 진단받기
						</Link>
						<a
							href="/adresult-brochure.pdf"
							download="애드리절트 회사소개서.pdf"
							className="whitespace-nowrap border border-[#3A3835] px-6 py-3 font-semibold text-sm text-white transition-colors hover:border-[#C8102E] hover:text-[#C8102E] md:text-[15px]"
						>
							회사소개서
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
