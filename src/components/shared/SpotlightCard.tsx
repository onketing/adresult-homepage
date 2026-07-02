"use client";

import { type ReactNode, useRef } from "react";

type SpotlightCardProps = {
	children: ReactNode;
	className?: string;
	glow?: string; // 스포트라이트 색
	tilt?: number; // 최대 기울기(deg)
};

// 커서 추적 스포트라이트 글로우 + 미세 3D 틸트. mousemove는 DOM 직접 갱신(리렌더 없음).
export const SpotlightCard = ({
	children,
	className,
	glow = "rgba(239,60,57,0.16)",
	tilt = 6,
}: SpotlightCardProps) => {
	const ref = useRef<HTMLDivElement>(null);

	const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const x = e.clientX - r.left;
		const y = e.clientY - r.top;
		el.style.setProperty("--mx", `${x}px`);
		el.style.setProperty("--my", `${y}px`);
		el.style.setProperty("--rx", `${(y / r.height - 0.5) * -2 * tilt}deg`);
		el.style.setProperty("--ry", `${(x / r.width - 0.5) * 2 * tilt}deg`);
	};

	const reset = () => {
		const el = ref.current;
		if (!el) return;
		el.style.setProperty("--rx", "0deg");
		el.style.setProperty("--ry", "0deg");
	};

	return (
		// biome-ignore lint/a11y/noStaticElementInteractions: 장식용 hover 효과(스포트라이트·틸트) — 키보드/접근성 상호작용 불필요, 실제 콘텐츠는 children이 담당
		<div
			ref={ref}
			onMouseMove={handleMove}
			onMouseLeave={reset}
			className={`group/spot relative transition-transform duration-200 ease-out ${className ?? ""}`}
			style={{
				transform: "perspective(900px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
			}}
		>
			{children}
			{/* 스포트라이트 오버레이 */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
				style={{
					background: `radial-gradient(240px circle at var(--mx, 50%) var(--my, 50%), ${glow}, transparent 70%)`,
				}}
			/>
		</div>
	);
};
