import { Reveal } from "@/components/shared/Reveal";

export const CustomStrategy = () => {
	return (
		<section className="bg-[#e11d29] px-4 py-24 md:py-32">
			<div className="mx-auto max-w-6xl text-center">
				<Reveal>
					<p
						className="mb-6 text-4xl text-white/90 leading-tight md:mb-8 md:text-5xl"
						style={{ fontFamily: "var(--font-hand)" }}
					>
						왜 대행사 병원마케팅 상품에 우리 병원을 맞추나요?
					</p>
					<h2 className="break-keep font-bold text-3xl text-white leading-[1.3] tracking-tight md:whitespace-nowrap md:text-[42px]">
						애드리절트는 우리 병원에 가장 필요한{" "}
						<span className="font-extrabold">맞춤 전략을 제시</span> 합니다
					</h2>
					<p className="mx-auto mt-8 max-w-4xl break-keep text-lg text-white/85 leading-relaxed md:mt-12 md:text-xl">
						병원마케팅에서 가장 중요한 것은 병원의 특성과 목표에 맞는 전략을 수립하는 것입니다.
						<br className="hidden md:block" />
						애드리절트는 리스크를 최소화하고 목표 달성을 극대화하기 위해
						<br className="hidden md:block" />
						병원과 함께 성장하는 <span className="font-bold">Win-Win 전략을 설계</span>하여 지속
						가능한 성공을 만들어갑니다.
					</p>
				</Reveal>
			</div>
		</section>
	);
};
