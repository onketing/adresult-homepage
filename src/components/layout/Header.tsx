"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
	const [scrolled, setScrolled] = useState(false);
	const [openMenu, setOpenMenu] = useState<string | null>(null);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 8);
		handleScroll(); // 마운트 시 즉시 체크 (브라우저 스크롤 위치 복원 대응)
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={cn(
				"fixed top-0 right-0 left-0 z-50 h-16 transform-gpu border-[#E4E2DF] border-b bg-[#FAFAFA]/94 backdrop-blur-sm transition-shadow duration-300 md:h-20",
				scrolled && "shadow-[0_1px_12px_rgba(0,0,0,0.05)]",
			)}
		>
			<div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 lg:px-8">
				{/* Wordmark */}
				<Link
					href="/"
					className="flex items-baseline gap-1.5 transition-opacity hover:opacity-80"
					aria-label="애드리절트 홈으로"
					onClick={() => {
						if (pathname === "/") window.scrollTo({ top: 0, behavior: "instant" });
					}}
				>
					<span className="font-extrabold text-[#090909] text-xl tracking-tight">
						ADRESULT MAPO
					</span>
					<span aria-hidden="true" className="inline-block h-[7px] w-[7px] bg-[#C8102E]" />
					<span className="hidden whitespace-nowrap font-semibold text-[#767370] text-xs xl:inline">
						병원마케팅 애드리절트 · 본사 직영{" "}
					</span>
				</Link>

				{/* Desktop nav */}
				<nav className="hidden items-center gap-0.5 lg:flex" aria-label="주요 메뉴">
					{siteConfig.nav.map((item) => {
						if (item.children) {
							const isActive = !!item.matchPrefix && pathname.startsWith(item.matchPrefix);
							const isOpen = openMenu === item.label;
							return (
								// biome-ignore lint/a11y/noStaticElementInteractions: hover detection wrapper for dropdown
								<div
									key={item.label}
									className="relative"
									onMouseEnter={() => setOpenMenu(item.label)}
									onMouseLeave={() => setOpenMenu(null)}
								>
									{/* Trigger */}
									<button
										type="button"
										className={cn(
											"px-3.5 py-2 font-semibold text-[15px] transition-colors",
											isActive ? "text-[#C8102E]" : "text-[#444444] hover:text-[#C8102E]",
										)}
									>
										{item.label}
									</button>

									{/* Dropdown */}
									<div
										className={cn(
											"absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200",
											isOpen ? "visible opacity-100" : "invisible opacity-0",
										)}
									>
										<div className="w-56 border border-[#E4E2DF] bg-white py-2 shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
											{item.children.map((child) => {
												const isChildActive =
													pathname === child.href || pathname.startsWith(`${child.href}/`);
												return (
													<Link
														key={child.href}
														href={child.href}
														onClick={() => setOpenMenu(null)}
														className={cn(
															"block whitespace-nowrap px-5 py-2.5 font-medium text-[13.5px] transition-colors",
															isChildActive
																? "font-semibold text-[#C8102E]"
																: "text-[#444444] hover:bg-[#FAFAFA] hover:text-[#C8102E]",
														)}
													>
														{child.label}
													</Link>
												);
											})}
										</div>
									</div>
								</div>
							);
						}

						const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
						return (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									"px-3.5 py-2 font-semibold text-[15px] transition-colors",
									isActive ? "text-[#C8102E]" : "text-[#444444] hover:text-[#C8102E]",
								)}
							>
								{item.label}
							</Link>
						);
					})}
				</nav>

				{/* Right */}
				<div className="flex items-center gap-2">
					<a
						href="/adresult-brochure.pdf"
						download="애드리절트 회사소개서.pdf"
						className="hidden whitespace-nowrap border border-[#D9D6D3] px-4 py-2.5 font-semibold text-[#444444] text-sm transition-colors hover:border-[#C8102E] hover:text-[#C8102E] lg:block"
					>
						회사소개서
					</a>
					<Link
						href="/contact"
						className="hidden whitespace-nowrap bg-[#111111] px-5 py-2.5 font-bold text-sm text-white transition-colors hover:bg-[#C8102E] lg:block"
					>
						병원 마케팅 진단 신청
					</Link>
					<MobileMenu isLight={false} />
				</div>
			</div>
		</header>
	);
};
