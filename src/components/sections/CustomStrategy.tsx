import { Reveal } from "@/components/shared/Reveal";

export const CustomStrategy = () => {
	return (
		<section className="relative overflow-hidden bg-[#0B0B0B] px-4 py-16 text-white md:py-28">
			{/* 88px 그리드 패턴 오버레이 */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:88px_88px]"
			/>
			<div className="relative mx-auto max-w-6xl text-center">
				<Reveal>
					<p className="mb-6 font-mono text-[#8F8C89] text-xs tracking-[0.16em]">
						CUSTOMIZED STRATEGY
					</p>
					<p className="mb-6 break-keep font-semibold text-[#B5B2AF] text-xl leading-snug md:mb-8 md:text-2xl">
						왜 대행사 병원마케팅 상품에 우리 병원을 맞추나요?
					</p>
					<h2 className="break-keep font-extrabold text-3xl leading-[1.3] tracking-tight md:text-[42px]">
						애드리절트는 우리 병원에 가장 필요한
						<br className="hidden md:block" />
						<span className="text-[#C8102E]"> 맞춤 전략을 제시</span>
						합니다
					</h2>
					<p className="mx-auto mt-8 max-w-4xl break-keep text-[#B5B2AF] text-base leading-[1.85] md:mt-10 md:text-lg">
						병원마케팅에서 가장 중요한 것은 병원의 특성과 목표에 맞는 전략을 수립하는 것입니다.
						<br className="hidden md:block" />
						애드리절트는 리스크를 최소화하고 목표 달성을 극대화하기 위해
						<br className="hidden md:block" />
						병원과 함께 성장하는 <span className="font-bold text-white">Win-Win 전략을 설계</span>
						하여 지속 가능한 성공을 만들어갑니다.
					</p>
				</Reveal>
			</div>
		</section>
	);
};
