"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/shared/Logo";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const MobileMenu = ({ isLight = false }: { isLight?: boolean }) => {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();

	const defaultAccordion = siteConfig.nav
		.filter((item) => item.children && item.matchPrefix && pathname.startsWith(item.matchPrefix))
		.map((item) => item.label);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger
				className={cn(
					"flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden",
					isLight ? "text-white hover:bg-white/10" : "text-foreground hover:bg-slate-100",
				)}
				aria-label="메뉴 열기"
			>
				<MenuIcon className="h-5 w-5" />
			</SheetTrigger>
			<SheetContent side="right" className="w-[85vw] bg-white p-0 sm:w-72">
				<div className="flex h-full flex-col">
					{/* Logo */}
					<div className="border-slate-100 border-b px-6 py-5">
						<Logo />
					</div>

					{/* 상단 CTA */}
					<div className="px-4 pt-4">
						<Link
							href="/contact"
							onClick={() => setOpen(false)}
							className="block w-full rounded-md bg-[#3a0509] py-3 text-center font-semibold text-sm text-white transition-opacity hover:opacity-80"
						>
							문의하기
						</Link>
					</div>

					{/* Nav */}
					<nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto p-4">
						{siteConfig.nav.map((item) => {
							if (item.children) {
								const isParentActive = !!item.matchPrefix && pathname.startsWith(item.matchPrefix);
								return (
									<Accordion key={item.label} defaultValue={defaultAccordion} multiple>
										<AccordionItem value={item.label} className="border-0">
											<AccordionTrigger
												className={cn(
													"rounded-lg px-4 py-3 font-medium text-[15px] hover:bg-slate-50 hover:no-underline",
													isParentActive ? "text-[#0a0a0a]" : "text-foreground",
												)}
											>
												{item.label}
											</AccordionTrigger>
											<AccordionContent className="pb-0">
												<div className="ml-4 flex flex-col gap-0.5 border-slate-100 border-l pl-4">
													{item.children.map((child) => {
														const isChildActive =
															pathname === child.href || pathname.startsWith(`${child.href}/`);
														return (
															<Link
																key={child.href}
																href={child.href}
																onClick={() => setOpen(false)}
																className={cn(
																	"rounded-lg px-3 py-3 text-sm transition-colors hover:bg-slate-50",
																	isChildActive
																		? "bg-[#3a0509]/8 font-semibold text-[#0a0a0a]"
																		: "text-slate-600",
																)}
															>
																{child.label}
															</Link>
														);
													})}
												</div>
											</AccordionContent>
										</AccordionItem>
									</Accordion>
								);
							}

							const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
							return (
								<Link
									key={item.href}
									href={item.href}
									onClick={() => setOpen(false)}
									className={cn(
										"rounded-lg px-4 py-3 font-medium text-[15px] transition-colors hover:bg-slate-50",
										isActive ? "text-[#0a0a0a]" : "text-foreground",
									)}
								>
									{item.label}
								</Link>
							);
						})}
					</nav>

					{/* 하단 문의하기 */}
					<div className="border-slate-100 border-t p-4">
						<Link
							href="/contact"
							onClick={() => setOpen(false)}
							className="block w-full rounded-md bg-[#3a0509] py-3.5 text-center font-semibold text-sm text-white transition-opacity hover:opacity-80"
						>
							문의하기
						</Link>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
};
