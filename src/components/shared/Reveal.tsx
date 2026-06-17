"use client";

import { motion, type UseInViewOptions, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

type RevealProps = {
	children: React.ReactNode;
	className?: string;
	delay?: number;
	direction?: "up" | "down" | "left" | "right" | "none" | "scale";
	duration?: number;
	// 뷰포트 진입 트리거 여백. 음수일수록 더 안쪽에서, 작을수록 더 일찍 등장.
	margin?: UseInViewOptions["margin"];
};

export const Reveal = ({
	children,
	className = "",
	delay = 0,
	direction = "up",
	duration = 1.1,
	margin = "-120px",
}: RevealProps) => {
	const ref = useRef<HTMLDivElement>(null);
	// once: true — 아래로 스크롤하며 처음 보일 때 1회만 재생.
	// 위로 다시 스크롤해도 재생/리셋하지 않는다 (Windows 재실행 끊김·요소 미표시 방지).
	const isInView = useInView(ref, { once: true, margin });
	const prefersReducedMotion = useReducedMotion();

	const directionMap = {
		up: { y: 90, x: 0 },
		down: { y: -90, x: 0 },
		left: { x: 90, y: 0 },
		right: { x: -90, y: 0 },
		none: { x: 0, y: 0 },
	};

	const initial = prefersReducedMotion
		? { opacity: 0 }
		: direction === "scale"
			? { opacity: 0, scale: 0.78 }
			: { opacity: 0, ...directionMap[direction] };

	const animate = isInView
		? direction === "scale"
			? { opacity: 1, scale: 1, x: 0, y: 0 }
			: { opacity: 1, x: 0, y: 0 }
		: initial;

	const transition = prefersReducedMotion
		? { duration: 0 }
		: { duration, delay, ease: [0.22, 1, 0.36, 1] as const };

	return (
		<motion.div
			ref={ref}
			initial={initial}
			animate={animate}
			transition={transition}
			className={className}
		>
			{children}
		</motion.div>
	);
};
