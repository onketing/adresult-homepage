"use client";

import { Equal, Plus } from "lucide-react";
import { motion } from "motion/react";

// INTRODUCE 섹션의 +, = 연산자. 뷰포트 진입 시 팝인(재진입마다 재생) + 상시 루프 모션.
export const AboutOperator = ({ type }: { type: "plus" | "equal" }) => {
	const isPlus = type === "plus";
	return (
		<motion.div
			className="flex justify-center pt-8"
			initial={{ scale: 0, opacity: 0 }}
			whileInView={{ scale: 1, opacity: 1 }}
			viewport={{ once: false, margin: "-60px" }}
			transition={{ type: "spring", stiffness: 280, damping: 12 }}
		>
			<motion.span
				className="inline-flex"
				animate={
					isPlus
						? { rotate: [0, 90, 180, 270, 360], scale: [1, 1.15, 1, 1.15, 1] }
						: { y: [0, -5, 0], scale: [1, 1.12, 1] }
				}
				transition={{
					duration: isPlus ? 6 : 2.2,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
			>
				{isPlus ? (
					<Plus className="h-14 w-14 text-[#e11d29]" strokeWidth={4} aria-hidden="true" />
				) : (
					<Equal className="h-14 w-14 text-[#e11d29]" strokeWidth={4} aria-hidden="true" />
				)}
			</motion.span>
		</motion.div>
	);
};
