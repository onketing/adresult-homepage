"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const TABS = [
	{ label: "ABOUT", href: "/about" },
	{ label: "HISTORY", href: "/history" },
	{ label: "CEO", href: "/ceo" },
	{ label: "PEOPLE", href: "/people" },
];

export const CompanyTabs = () => {
	const pathname = usePathname();

	return (
		<nav
			className="sticky top-16 z-30 border-slate-200 border-b bg-white md:top-20"
			aria-label="회사소개 탭"
		>
			<div className="flex w-full">
				{TABS.map((tab) => {
					const active = pathname === tab.href;
					return (
						<Link
							key={tab.href}
							href={tab.href}
							aria-current={active ? "page" : undefined}
							className={cn(
								"flex-1 border-slate-200 border-l py-5 text-center font-bold text-sm tracking-wide transition-colors first:border-l-0 md:text-base",
								active
									? "bg-[#C8102E] text-white"
									: "text-[#111111] hover:bg-slate-50 hover:text-[#C8102E]",
							)}
						>
							{tab.label}
						</Link>
					);
				})}
			</div>
		</nav>
	);
};
