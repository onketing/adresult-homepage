"use client";

import { ChevronRight, Clock, MessageSquare, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";

export const StickyCTA = () => {
	const [open, setOpen] = useState(false);
	const triggeredRef = useRef(false);
	const triggeredFinalRef = useRef(false);
	const pathname = usePathname();
	const cardRef = useRef<HTMLDivElement>(null);
	const btnRef = useRef<HTMLButtonElement>(null);

	const isHidden = pathname.startsWith("/contact");

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);

	// 카드·버튼 외부 클릭 시 닫기 (백드롭 없이 — hover 이벤트 차단 방지)
	useEffect(() => {
		if (!open) return;
		const onDown = (e: MouseEvent) => {
			const t = e.target as Node;
			if (cardRef.current?.contains(t) || btnRef.current?.contains(t)) return;
			setOpen(false);
		};
		document.addEventListener("mousedown", onDown);
		return () => document.removeEventListener("mousedown", onDown);
	}, [open]);

	// 홈 첫 진입 시 1회 자동 오픈 (사용자가 닫으면 이후 스크롤 트리거가 다시 열어줌)
	useEffect(() => {
		if (pathname !== "/") return;
		const timer = window.setTimeout(() => setOpen(true), 1200);
		return () => window.clearTimeout(timer);
	}, [pathname]);

	// 후기 섹션 중간 도달 시 1회 자동 오픈
	// biome-ignore lint/correctness/useExhaustiveDependencies: pathname is the trigger, not consumed
	useEffect(() => {
		const target = document.getElementById("real-reviews");
		if (!target) return;
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting && !triggeredRef.current) {
						triggeredRef.current = true;
						setOpen(true);
					}
				}
			},
			{ rootMargin: "-50% 0px -50% 0px" },
		);
		observer.observe(target);
		return () => observer.disconnect();
	}, [pathname]);

	// 최종 CTA 섹션 도달 시 1회 자동 오픈
	// biome-ignore lint/correctness/useExhaustiveDependencies: pathname is the trigger, not consumed
	useEffect(() => {
		const target = document.getElementById("final-cta");
		if (!target) return;
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting && !triggeredFinalRef.current) {
						triggeredFinalRef.current = true;
						setOpen(true);
					}
				}
			},
			{ rootMargin: "-10% 0px -10% 0px" },
		);
		observer.observe(target);
		return () => observer.disconnect();
	}, [pathname]);

	if (isHidden) return null;

	return (
		<>
			{/* 빠른 상담 카드 */}
			<AnimatePresence>
				{open && (
					<motion.div
						ref={cardRef}
						key="card"
						initial={{ opacity: 0, y: 16, scale: 0.96 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 16, scale: 0.96 }}
						transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
						aria-modal="true"
						role="dialog"
						aria-labelledby="sticky-cta-heading"
						className="fixed right-6 bottom-[7.5rem] z-50 w-[calc(100vw-3rem)] max-w-[348px] overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_-20px_rgba(15,23,42,0.4)] ring-1 ring-black/[0.06] md:right-8"
					>
						{/* 그라디언트 헤더 */}
						<div className="gradient-brand relative overflow-hidden px-6 pt-6 pb-7">
							<div
								className="pointer-events-none absolute inset-0 opacity-25"
								style={{
									backgroundImage:
										"radial-gradient(circle at 88% 12%, rgba(255,255,255,0.85) 0%, transparent 50%)",
								}}
							/>
							<div
								className="pointer-events-none absolute inset-0 opacity-[0.12]"
								style={{
									backgroundImage:
										"linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
									backgroundSize: "28px 28px",
									maskImage: "radial-gradient(ellipse 80% 70% at 30% 100%, black, transparent 70%)",
									WebkitMaskImage:
										"radial-gradient(ellipse 80% 70% at 30% 100%, black, transparent 70%)",
								}}
							/>
							<button
								type="button"
								onClick={() => setOpen(false)}
								aria-label="닫기"
								className="absolute top-4 right-4 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20 backdrop-blur-sm transition-colors hover:bg-white/25"
							>
								<X className="h-3.5 w-3.5 text-white" />
							</button>
							<p className="relative mb-1.5 font-mono text-[10px] text-white/70 uppercase tracking-[0.3em]">
								{siteConfig.nameKo}
							</p>
							<p
								id="sticky-cta-heading"
								className="relative font-extrabold text-2xl text-white leading-tight tracking-tight"
							>
								부담 없이,
								<br />
								먼저 물어보세요
							</p>
							<p className="relative mt-3 flex items-center gap-2 text-white/85 text-xs">
								<span className="relative flex h-2 w-2">
									<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
									<span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
								</span>
								영업일 1일 내 회신
							</p>
						</div>

						{/* 본문 */}
						<div className="p-5">
							{/* 메인 CTA */}
							<Link
								href="/contact"
								onClick={() => setOpen(false)}
								className="group mb-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#052e16] py-4 font-bold text-sm text-white shadow-[0_8px_24px_-8px_rgba(88,214,141,0.5)] transition-all hover:scale-[1.02] hover:shadow-[0_12px_32px_-8px_rgba(88,214,141,0.65)]"
							>
								<MessageSquare className="h-4 w-4" aria-hidden="true" />
								문의하기
								<ChevronRight
									className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
									aria-hidden="true"
								/>
							</Link>

							{/* 전화 */}
							<a
								href={`tel:${siteConfig.contact.tel}`}
								className="group flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3.5 ring-1 ring-slate-100 transition-all hover:bg-slate-100/80 hover:ring-slate-200"
							>
								<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#58d68d]/12 ring-1 ring-[#58d68d]/15">
									<Phone className="h-4 w-4 text-[#58d68d]" aria-hidden="true" />
								</div>
								<div className="flex-1">
									<p className="font-medium text-[10px] text-slate-500 tracking-wide">전화 문의</p>
									<p className="font-bold text-slate-900 text-sm">{siteConfig.contact.tel}</p>
								</div>
								<ChevronRight
									className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5"
									aria-hidden="true"
								/>
							</a>

							{/* 영업시간 */}
							<div className="mt-4 flex items-center justify-center gap-1.5 border-slate-100 border-t pt-4 text-slate-500 text-xs">
								<Clock className="h-3 w-3" aria-hidden="true" />
								<span>{siteConfig.contact.businessHours}</span>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* CONTACT 트리거 버튼 */}
			<button
				ref={btnRef}
				type="button"
				onClick={() => setOpen((v) => !v)}
				aria-expanded={open}
				aria-controls="sticky-cta-heading"
				aria-label="CONTACT 빠른 상담 열기"
				className="gradient-brand fixed right-6 bottom-6 z-50 flex h-20 w-20 flex-col items-center justify-center gap-1 rounded-full text-white shadow-[0_8px_32px_rgba(88,214,141,0.5)] transition-transform hover:scale-110 active:scale-95 md:right-8 md:bottom-8"
			>
				<span className="gradient-brand absolute inset-0 animate-ping rounded-full opacity-20" />
				<MessageSquare className="relative h-6 w-6" aria-hidden="true" />
				<span className="relative font-bold text-[10px] uppercase tracking-widest">CONTACT</span>
			</button>
		</>
	);
};
