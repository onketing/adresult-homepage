"use client";

import { Building2, History, Search, Sparkles, User, Users, UsersRound, Zap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/shared/Logo";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

const CHILD_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
	Zap,
	Users,
	Search,
	Building2,
	History,
	User,
	UsersRound,
	Sparkles,
};

// 상단이 투명해야 하는 페이지 (다크 풀스크린/영상 Hero)
const TRANSPARENT_HERO_PATHS = [
	"/",
	"/history",
	"/ceo",
	"/people",
	"/about",
	"/services/professional",
	"/regulation",
];

export const Header = () => {
	const [scrolled, setScrolled] = useState(false);
	const [openMenu, setOpenMenu] = useState<string | null>(null);
	const pathname = usePathname();

	const isTransparentPage = TRANSPARENT_HERO_PATHS.includes(pathname);
	const isLight = isTransparentPage && !scrolled;

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 8);
		handleScroll(); // 마운트 시 즉시 체크 (브라우저 스크롤 위치 복원 대응)
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={cn(
				"fixed top-0 right-0 left-0 z-50 h-16 transform-gpu border-b transition-all duration-500 md:h-20",
				scrolled
					? "border-slate-200 bg-white/95 shadow-[0_1px_12px_rgba(0,0,0,0.06)] backdrop-blur-sm"
					: "border-transparent bg-transparent",
			)}
		>
			<div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 lg:px-8">
				{/* Logo */}
				<Link
					href="/"
					className="transition-opacity hover:opacity-80"
					aria-label="애드리절트 홈으로"
					onClick={() => {
						if (pathname === "/") window.scrollTo({ top: 0, behavior: "instant" });
					}}
				>
					<Logo variant="dark" />
				</Link>

				{/* Desktop nav */}
				<nav className="hidden items-center gap-1.5 lg:flex" aria-label="주요 메뉴">
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
											"w-24 rounded-lg px-4 py-2 font-bold text-[16px] transition-colors",
											isLight
												? "text-white/80 hover:bg-white/10 hover:text-white"
												: "hover:bg-slate-50",
											!isLight &&
												(isActive ? "text-[#ef3c39]" : "text-slate-600 hover:text-[#0a0a0a]"),
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
										<div className="w-52 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
											{item.children.map((child) => {
												const ChildIcon = CHILD_ICON_MAP[child.icon];
												const isChildActive =
													pathname === child.href || pathname.startsWith(`${child.href}/`);
												return (
													<Link
														key={child.href}
														href={child.href}
														onClick={() => setOpenMenu(null)}
														className={cn(
															"flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-slate-50",
															isChildActive && "bg-[#3a0509]/6",
														)}
													>
														<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#3a0509]/8">
															{ChildIcon && (
																<ChildIcon
																	className="h-3.5 w-3.5 text-[#e11d29]"
																	aria-hidden="true"
																/>
															)}
														</div>
														<span
															className={cn(
																"font-semibold text-sm",
																isChildActive ? "text-[#0a0a0a]" : "text-foreground",
															)}
														>
															{child.label}
														</span>
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
									"relative w-24 rounded-lg px-4 py-2 text-center font-bold text-[16px] transition-colors",
									isLight
										? "text-white/80 hover:bg-white/10 hover:text-white"
										: cn(
												"hover:bg-slate-50 hover:text-foreground",
												isActive
													? "text-[#ef3c39] after:absolute after:inset-x-2 after:-bottom-[3px] after:h-0.5 after:rounded-full after:bg-[#ef3c39] after:content-['']"
													: "text-slate-600",
											),
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
						href="/onketing-brochure.pdf"
						download="애드리절트 회사소개서.pdf"
						className={cn(
							"hidden rounded-md px-4 py-2.5 font-semibold text-sm transition-colors lg:block",
							isLight
								? "border border-white/40 text-white hover:bg-white/10"
								: "border border-slate-300 text-foreground hover:bg-slate-50",
						)}
					>
						회사소개서
					</a>
					<Link
						href="/contact"
						className={cn(
							"hidden rounded-md px-5 py-2.5 font-semibold text-sm shadow-sm transition-opacity hover:opacity-90 lg:block",
							isLight
								? "bg-[#ef3c39] text-white"
								: "bg-linear-to-r from-[#ef3c39] to-[#e11d29] text-white",
						)}
					>
						문의하기
					</Link>
					<MobileMenu isLight={isLight} />
				</div>
			</div>
		</header>
	);
};
