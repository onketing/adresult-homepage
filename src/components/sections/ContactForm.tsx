"use client";

import { CheckCircle2, CheckIcon, ChevronDown, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { submitContact } from "@/app/actions/contact";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const SOURCE_OPTIONS = [
	{ id: "instagram", label: "인스타그램" },
	{ id: "naver", label: "네이버 검색" },
	{ id: "referral", label: "지인 소개" },
	{ id: "blog", label: "블로그" },
	{ id: "other", label: "기타" },
] as const;

const PROFESSION_OPTIONS = [
	{ id: "lawyer", label: "변호사" },
	{ id: "doctor", label: "의사" },
	{ id: "oriental", label: "한의사" },
	{ id: "vet", label: "수의사" },
	{ id: "labor", label: "노무사" },
	{ id: "tax", label: "세무사" },
	{ id: "other", label: "기타" },
] as const;

const formatPhone = (value: string) => {
	const digits = value.replace(/\D/g, "").slice(0, 11);
	if (digits.startsWith("02")) {
		if (digits.length <= 2) return digits;
		if (digits.length <= 6) return `${digits.slice(0, 2)}-${digits.slice(2)}`;
		return `${digits.slice(0, 2)}-${digits.slice(2, 6)}-${digits.slice(6, 10)}`;
	}
	if (digits.length <= 3) return digits;
	if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
	return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
};

export const ContactForm = () => {
	const [source, setSource] = useState("");
	const [sent, setSent] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [profession, setProfession] = useState("");
	const [professionOpen, setProfessionOpen] = useState(false);
	const [tel, setTel] = useState("");
	const professionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleOutside = (e: MouseEvent) => {
			if (professionRef.current && !professionRef.current.contains(e.target as Node)) {
				setProfessionOpen(false);
			}
		};
		if (professionOpen) document.addEventListener("mousedown", handleOutside);
		return () => document.removeEventListener("mousedown", handleOutside);
	}, [professionOpen]);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
		if (e.key === "Enter" && (e.target as HTMLElement).tagName !== "TEXTAREA") {
			e.preventDefault();
		}
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		setError("");
		const fd = new FormData(e.currentTarget);
		try {
			await submitContact({
				company: "",
				profession,
				name: (fd.get("name") as string) ?? "",
				tel: (fd.get("tel") as string) ?? "",
				email: (fd.get("email") as string) ?? "",
				source,
				message: (fd.get("message") as string) ?? "",
			});
			setSent(true);
		} catch {
			setError("제출 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<AnimatePresence mode="wait">
			{sent ? (
				<motion.div
					key="success"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.35 }}
					className="py-6"
				>
					{/* 아이콘 */}
					<motion.div
						initial={{ scale: 0.6, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ delay: 0.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
						className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center"
					>
						<div className="absolute inset-0 animate-ping rounded-full bg-[#58d68d] opacity-[0.12]" />
						<div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#58d68d]/10 to-[#16a34a]/5" />
						<div className="gradient-brand relative z-10 flex h-16 w-16 items-center justify-center rounded-full shadow-[0_8px_32px_rgba(88,214,141,0.35)]">
							<CheckCircle2 className="h-8 w-8 text-white" />
						</div>
					</motion.div>

					{/* 헤드라인 */}
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.18, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
						className="mb-1 text-center"
					>
						<p className="mb-1.5 font-mono text-[#58d68d] text-[10px] uppercase tracking-[0.3em]">
							Submitted
						</p>
						<h2 className="font-bold text-2xl text-[#0a0a0a] tracking-tight">
							신청이 완료됐습니다
						</h2>
					</motion.div>
					<motion.p
						initial={{ opacity: 0, y: 8 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.26, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
						className="mb-7 text-center text-slate-400 text-sm"
					>
						담당자가 직접 확인하고 연락드립니다.
					</motion.p>

					{/* 다음 단계 */}
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.32, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
						className="mb-5 rounded-xl border border-slate-100 bg-slate-50 p-5"
					>
						<p className="mb-4 font-semibold text-[10px] text-slate-400 uppercase tracking-[0.12em]">
							다음 단계
						</p>
						<div className="space-y-3.5">
							{(
								[
									{ label: "접수 확인", desc: "담당자가 문의를 확인합니다", time: "즉시" },
									{
										label: "직접 연락",
										desc: "전화 또는 이메일로 회신드립니다",
										time: "영업일 1일 내",
									},
									{
										label: "마케팅 컨설팅",
										desc: "광고 규정 검토부터 함께합니다",
										time: "일정 조율 후",
									},
								] as const
							).map((item, i) => (
								<motion.div
									key={item.label}
									initial={{ opacity: 0, x: -6 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{
										delay: 0.4 + i * 0.08,
										duration: 0.4,
										ease: [0.22, 1, 0.36, 1],
									}}
									className="flex items-center gap-3"
								>
									<span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#58d68d]/10 font-bold font-mono text-[#58d68d] text-[10px]">
										{i + 1}
									</span>
									<div className="flex min-w-0 flex-1 items-center justify-between gap-2">
										<div className="min-w-0">
											<p className="font-semibold text-[#0a0a0a] text-sm">{item.label}</p>
											<p className="text-slate-500 text-xs">{item.desc}</p>
										</div>
										<span className="shrink-0 rounded-full border border-slate-200 bg-white px-2.5 py-0.5 font-medium text-[10px] text-slate-500">
											{item.time}
										</span>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* 신뢰 지표 */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.65, duration: 0.4 }}
						className="mb-5 grid grid-cols-3 gap-2.5"
					>
						{(
							[
								{ value: "0원", label: "컨설팅 비용" },
								{ value: "1일", label: "영업일 내 회신" },
								{ value: "없음", label: "계약 의무" },
							] as const
						).map((stat) => (
							<div
								key={stat.label}
								className="rounded-lg border border-[#58d68d]/20 bg-[#f0fdf4] p-3 text-center"
							>
								<p className="font-bold text-[#58d68d] text-lg leading-none">{stat.value}</p>
								<p className="mt-1 text-[10px] text-slate-400">{stat.label}</p>
							</div>
						))}
					</motion.div>

					{/* 카카오 CTA */}
					<motion.a
						initial={{ opacity: 0, y: 6 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.75, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
						href={siteConfig.contact.kakaoOpenChat}
						target="_blank"
						rel="noopener noreferrer"
						className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FEE500] py-3.5 font-semibold text-[#0a0a0a] text-sm transition-opacity hover:opacity-85"
					>
						<MessageCircle className="h-4 w-4" aria-hidden="true" />
						카카오로 바로 연락하기
					</motion.a>
				</motion.div>
			) : (
				<motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
					{/* Header */}
					<div className="mb-8">
						<div className="mb-4 h-0.5 w-10 rounded-full bg-linear-to-r from-[#58d68d] to-[#16a34a]" />
						<p className="mb-1.5 font-mono text-[#58d68d] text-[10px] uppercase tracking-[0.3em]">
							마케팅 컨설팅
						</p>
						<h2 className="font-bold text-2xl text-[#0a0a0a] tracking-tight">자세히 알려주세요</h2>
					</div>

					<form onSubmit={handleSubmit} onKeyDown={handleKeyDown} className="space-y-6">
						<div className="grid gap-5 sm:grid-cols-2">
							<div className="space-y-2">
								<Label className="font-semibold text-slate-700 text-xs uppercase tracking-[0.08em]">
									직군
								</Label>
								<div ref={professionRef} className="relative">
									<input type="hidden" name="profession" value={profession} />
									<button
										type="button"
										onClick={() => setProfessionOpen((v) => !v)}
										className={cn(
											"flex h-12 w-full items-center justify-between rounded-md border bg-background px-3 py-2 text-sm transition-all",
											professionOpen
												? "border-[#58d68d] ring-2 ring-[#58d68d]/15"
												: "border-slate-200 hover:border-slate-300",
											profession ? "text-foreground" : "text-muted-foreground",
										)}
									>
										<span>{profession || "선택해주세요"}</span>
										<ChevronDown
											className={cn(
												"h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200",
												professionOpen && "rotate-180",
											)}
											aria-hidden="true"
										/>
									</button>
									<AnimatePresence>
										{professionOpen && (
											<motion.ul
												initial={{ opacity: 0, y: -6 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, y: -6 }}
												transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
												className="absolute top-full right-0 left-0 z-50 mt-1 overflow-hidden rounded-xl border border-slate-200 bg-white py-1.5 shadow-[0_12px_36px_rgba(0,0,0,0.1)]"
											>
												{PROFESSION_OPTIONS.map((opt) => (
													<li key={opt.id}>
														<button
															type="button"
															onClick={() => {
																setProfession(opt.label);
																setProfessionOpen(false);
															}}
															className={cn(
																"flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-sm transition-colors hover:bg-slate-50",
																profession === opt.label
																	? "font-semibold text-[#58d68d]"
																	: "text-foreground",
															)}
														>
															<span className="flex h-4 w-4 shrink-0 items-center justify-center">
																{profession === opt.label && (
																	<CheckIcon className="h-3.5 w-3.5 text-[#58d68d]" />
																)}
															</span>
															{opt.label}
														</button>
													</li>
												))}
											</motion.ul>
										)}
									</AnimatePresence>
								</div>
							</div>
						</div>

						<div className="grid gap-5 sm:grid-cols-2">
							<div className="space-y-2">
								<Label
									htmlFor="name"
									className="font-semibold text-slate-700 text-xs uppercase tracking-[0.08em]"
								>
									성함 <span className="font-normal text-destructive">*</span>
								</Label>
								<Input
									id="name"
									name="name"
									placeholder="홍길동"
									required
									className="h-12 border-slate-200 text-sm focus-visible:border-[#58d68d] focus-visible:ring-2 focus-visible:ring-[#58d68d]/15"
								/>
							</div>
							<div className="space-y-2">
								<Label
									htmlFor="contact-tel"
									className="font-semibold text-slate-700 text-xs uppercase tracking-[0.08em]"
								>
									연락처 <span className="font-normal text-destructive">*</span>
								</Label>
								<Input
									id="contact-tel"
									name="tel"
									type="tel"
									placeholder="010-0000-0000"
									required
									value={tel}
									onChange={(e) => setTel(formatPhone(e.target.value))}
									className="h-12 border-slate-200 text-sm focus-visible:border-[#58d68d] focus-visible:ring-2 focus-visible:ring-[#58d68d]/15"
								/>
							</div>
						</div>

						<div className="space-y-2">
							<Label
								htmlFor="contact-email"
								className="font-semibold text-slate-700 text-xs uppercase tracking-[0.08em]"
							>
								이메일
							</Label>
							<Input
								id="contact-email"
								name="email"
								type="email"
								placeholder="name@example.com"
								className="h-12 border-slate-200 text-sm focus-visible:border-[#58d68d] focus-visible:ring-2 focus-visible:ring-[#58d68d]/15"
							/>
						</div>

						<div className="space-y-2">
							<Label className="font-semibold text-slate-700 text-xs uppercase tracking-[0.08em]">
								유입 경로
							</Label>
							<div className="flex flex-wrap gap-2">
								{SOURCE_OPTIONS.map((opt) => (
									<button
										key={opt.id}
										type="button"
										onClick={() => setSource(opt.id === source ? "" : opt.label)}
										className={cn(
											"flex items-center gap-1.5 rounded-full px-4 py-2 font-medium text-sm transition-all duration-200",
											source === opt.label
												? "gradient-brand text-white shadow-[0_2px_12px_rgba(88,214,141,0.3)]"
												: "border border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-700",
										)}
									>
										{source === opt.label && <CheckIcon className="h-3 w-3" />}
										{opt.label}
									</button>
								))}
							</div>
						</div>

						<div className="space-y-2">
							<Label
								htmlFor="message"
								className="font-semibold text-slate-700 text-xs uppercase tracking-[0.08em]"
							>
								문의 내용
							</Label>
							<Textarea
								id="message"
								name="message"
								rows={4}
								placeholder="현재 마케팅 상황이나 궁금한 점을 자유롭게 적어주세요."
								className="resize-none border-slate-200 text-sm focus-visible:border-[#58d68d] focus-visible:ring-2 focus-visible:ring-[#58d68d]/15"
							/>
						</div>

						<div className="flex items-start gap-3">
							<input
								id="privacy"
								name="privacy"
								type="checkbox"
								required
								className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[#58d68d]"
							/>
							<label
								htmlFor="privacy"
								className="cursor-pointer text-muted-foreground text-xs leading-relaxed"
							>
								<span className="text-destructive">*</span> 개인정보 수집·이용에 동의합니다. 수집된
								정보는 컨설팅 목적으로만 사용됩니다.
							</label>
						</div>

						{error && <p className="text-destructive text-sm">{error}</p>}
						<button
							type="submit"
							disabled={loading}
							className={cn(
								"gradient-brand w-full rounded-xl py-4 font-semibold text-base text-white shadow-[0_4px_20px_rgba(88,214,141,0.35)] transition-all hover:opacity-90 hover:shadow-[0_6px_28px_rgba(88,214,141,0.45)]",
								loading && "cursor-not-allowed opacity-60",
							)}
						>
							{loading ? "제출 중..." : "마케팅 컨설팅 신청"}
						</button>
					</form>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
