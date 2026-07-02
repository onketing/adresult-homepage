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
			<div className="bg-[#e11d29] px-4 py-4 shadow-[0_-8px_30px_rgba(0,0,0,0.15)] md:py-5">
				<div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
					<p className="break-keep font-semibold text-lg text-white md:text-2xl">
						애드리절트를 <span className="font-extrabold">지금 바로</span> 선점하세요.
					</p>
					<div className="flex items-center gap-3">
						<Link
							href="/contact"
							className="rounded-full bg-white px-8 py-3 font-bold text-[#e11d29] text-base transition-transform hover:scale-105 md:text-lg"
						>
							병원 마케팅 문의
						</Link>
						<a
							href="/onketing-brochure.pdf"
							download="애드리절트 회사소개서.pdf"
							className="rounded-full border border-white/70 px-8 py-3 font-bold text-base text-white transition-colors hover:bg-white/10 md:text-lg"
						>
							회사 소개서
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
