import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";

export const TmapPartner = () => {
	return (
		<section className="bg-white px-4 py-14 md:py-28">
			<div className="mx-auto max-w-4xl text-center">
				<Reveal>
					<h2 className="break-keep font-bold text-2xl text-[#111111] tracking-tight md:text-4xl">
						애드리절트는 <span className="text-[#C8102E]">T-Map 공식 파트너사</span>입니다.
					</h2>
					<div className="mt-10 flex justify-center md:mt-14">
						<Image
							src="/adresult-tmap.png"
							alt="T-Map × 애드리절트 공식 파트너"
							width={671}
							height={146}
							className="h-auto w-full max-w-[560px]"
						/>
					</div>
				</Reveal>
			</div>
		</section>
	);
};
