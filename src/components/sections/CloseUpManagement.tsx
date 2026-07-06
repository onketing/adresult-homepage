import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";

export const CloseUpManagement = () => {
	return (
		<section className="bg-white px-4 py-16 md:py-32">
			<div className="mx-auto max-w-5xl">
				<Reveal>
					<p className="mb-4 font-bold text-[#C8102E] text-sm uppercase tracking-[0.25em] md:text-base">
						Close-up Management
					</p>
					<p className="mb-2 font-semibold text-slate-500 text-xl md:text-2xl">
						애드리절트는 결과에 집착합니다.
					</p>
					<h2 className="break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
						결과로 말하는 <span className="text-[#C8102E]">병원마케팅</span>
					</h2>
				</Reveal>

				<Reveal className="mt-14 flex justify-center md:mt-20">
					<Image
						src="/adresult-diagram.png"
						alt="애드리절트 병원마케팅 프로세스 다이어그램"
						width={584}
						height={648}
						className="h-auto w-full max-w-[680px]"
					/>
				</Reveal>
			</div>
		</section>
	);
};
