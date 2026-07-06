import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/config/site";

export const FinalCTA = () => {
	return (
		<section className="relative overflow-hidden bg-[#090909] text-white">
			{/* 88px 그리드 패턴 오버레이 */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:88px_88px]"
			/>
			<div className="relative mx-auto max-w-7xl px-4 py-24 text-center md:py-40 lg:px-8">
				<Reveal>
					<p className="mb-7 font-mono text-[#767370] text-xs tracking-[0.16em]">
						ADRESULT — HOSPITAL MARKETING
					</p>
					<h2 className="mx-auto max-w-4xl break-keep font-extrabold text-[32px] leading-[1.2] tracking-[-0.03em] md:text-[56px]">
						잘나가는 병원은,
						<br />
						애드리절트에서 합니다.
					</h2>
					<p className="mx-auto mt-7 max-w-lg break-keep text-[#B5B2AF] text-base leading-[1.8]">
						진료과·상권·경쟁 환경 기준으로 병원의 마케팅 현황을 진단해 드립니다.
						<br />
						진단은 무료이며 계약 의무가 없습니다. 신청 후 영업일 1일 내 회신드립니다.
					</p>
					<div className="mt-12 flex flex-wrap justify-center gap-3">
						<Link
							href="/contact"
							className="w-full whitespace-nowrap bg-[#C8102E] px-8 py-4 font-bold text-[15px] text-white transition-colors hover:bg-[#A50D26] sm:w-auto"
						>
							병원 마케팅 진단 신청
						</Link>
						<a
							href={siteConfig.contact.kakaoOpenChat}
							target="_blank"
							rel="noopener noreferrer"
							className="w-full whitespace-nowrap border border-[#3A3835] px-8 py-4 font-semibold text-[15px] text-white transition-colors hover:border-[#C8102E] hover:text-[#C8102E] sm:w-auto"
						>
							카카오톡 문의
						</a>
						<a
							href="/adresult-brochure.pdf"
							download="애드리절트 회사소개서.pdf"
							className="w-full whitespace-nowrap border border-[#3A3835] px-8 py-4 font-semibold text-[15px] text-white transition-colors hover:border-[#C8102E] hover:text-[#C8102E] sm:w-auto"
						>
							회사소개서 받기
						</a>
					</div>
					<p className="mt-10 font-mono text-white/30 text-xs tracking-wider">
						{siteConfig.contact.businessHours}
					</p>
				</Reveal>
			</div>
		</section>
	);
};
