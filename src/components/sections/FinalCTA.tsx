"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/config/site";

export const FinalCTA = () => {
	return (
		<section className="relative overflow-hidden bg-[#140505] px-4 py-16 md:py-36">
			{/* CSS aurora — 4개 블롭이 각자 다른 속도로 천천히 궤도를 돌며 프리미엄 마무리 느낌 */}
			<div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
				<div
					className="absolute rounded-full"
					style={{
						width: "700px",
						height: "700px",
						background: "radial-gradient(circle, rgba(239,60,57,0.28) 0%, transparent 70%)",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						animation: "auroraA 18s ease-in-out infinite",
					}}
				/>
				<div
					className="absolute rounded-full"
					style={{
						width: "480px",
						height: "480px",
						background: "radial-gradient(circle, rgba(225,29,41,0.18) 0%, transparent 70%)",
						top: "30%",
						left: "20%",
						animation: "auroraB 22s ease-in-out infinite",
					}}
				/>
				<div
					className="absolute rounded-full"
					style={{
						width: "360px",
						height: "360px",
						background: "radial-gradient(circle, rgba(252,165,165,0.14) 0%, transparent 70%)",
						bottom: "20%",
						right: "15%",
						animation: "auroraC 26s ease-in-out infinite",
					}}
				/>
				<div
					className="absolute rounded-full"
					style={{
						width: "260px",
						height: "260px",
						background: "radial-gradient(circle, rgba(167,139,250,0.10) 0%, transparent 70%)",
						top: "20%",
						right: "25%",
						animation: "auroraD 30s ease-in-out infinite",
					}}
				/>
			</div>

			{/* 파인 그리드 */}
			<div
				className="pointer-events-none absolute inset-0 opacity-[0.1]"
				style={{
					backgroundImage:
						"linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
					backgroundSize: "56px 56px",
					maskImage: "radial-gradient(ellipse 65% 55% at 50% 50%, black, transparent 80%)",
					WebkitMaskImage: "radial-gradient(ellipse 65% 55% at 50% 50%, black, transparent 80%)",
				}}
				aria-hidden="true"
			/>

			<div className="relative mx-auto max-w-3xl text-center">
				<Reveal>
					<p className="mb-5 font-mono text-[#fca5a5] text-xs uppercase tracking-[0.35em]">
						문의하기
					</p>
					<h2 className="mb-6 break-keep font-extrabold text-[40px] text-white leading-[1.35] tracking-tight md:text-[60px]">
						잘나가는 병원은,
						<br />
						애드리절트에서 합니다.
					</h2>
					<p className="mb-12 break-keep text-lg text-white/55 leading-relaxed md:text-xl">
						결과로 말하는 병원마케팅, 지금 시작하세요.
					</p>

					<div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
						<Link
							href="/contact"
							className="gradient-brand w-full rounded-xl px-8 py-4 font-bold text-base text-white shadow-[0_8px_32px_rgba(239,60,57,0.45)] transition-all hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(239,60,57,0.6)] sm:w-auto"
						>
							문의하기
						</Link>
						<a
							href={siteConfig.contact.kakaoOpenChat}
							target="_blank"
							rel="noopener noreferrer"
							className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-8 py-4 font-semibold text-base text-white/75 backdrop-blur-sm transition-colors hover:border-white/30 hover:text-white sm:w-auto"
						>
							<MessageCircle className="h-4 w-4" />
							카카오톡 1:1 문의
						</a>
					</div>

					<p className="mt-10 font-mono text-white/30 text-xs tracking-wider">
						24시간 문의 접수 · 연중무휴
					</p>
				</Reveal>
			</div>

			{/* Aurora keyframes */}
			<style>{`
				@keyframes auroraA {
					0%, 100% { transform: translate(-50%, -50%) scale(1); }
					33% { transform: translate(-44%, -56%) scale(1.08); }
					66% { transform: translate(-56%, -44%) scale(0.94); }
				}
				@keyframes auroraB {
					0%, 100% { transform: translate(0, 0) scale(1); }
					40% { transform: translate(60px, 40px) scale(1.12); }
					70% { transform: translate(-30px, 60px) scale(0.92); }
				}
				@keyframes auroraC {
					0%, 100% { transform: translate(0, 0) scale(1); }
					35% { transform: translate(-50px, -30px) scale(1.1); }
					65% { transform: translate(30px, -50px) scale(0.9); }
				}
				@keyframes auroraD {
					0%, 100% { transform: translate(0, 0) scale(1); }
					50% { transform: translate(-40px, 50px) scale(1.15); }
				}
			`}</style>
		</section>
	);
};
