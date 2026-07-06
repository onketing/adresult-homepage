import { Reveal } from "@/components/shared/Reveal";

const THEN_CHANNELS = ["네이버 블로그"];
const NOW_CHANNELS = [
	"네이버 블로그 (기본)",
	"숏폼 (릴스·쇼츠)",
	"스레드",
	"카페바이럴",
	"AIO (AI 검색)",
	"검색 콘텐츠",
	"SNS 콘텐츠",
];

export const MarketShift = () => {
	return (
		<section className="border-[#E4E2DF] border-b bg-white">
			<div className="mx-auto max-w-7xl px-4 py-16 md:py-24 lg:px-8">
				<Reveal>
					<p className="mb-4 font-mono text-[#767370] text-xs tracking-[0.14em]">MARKET SHIFT</p>
					<h2 className="max-w-3xl break-keep font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
						블로그만으로 되던 시대는
						<br />
						끝났습니다
					</h2>
					<p className="mt-6 max-w-2xl break-keep text-[#767370] text-[15px] leading-[1.8] md:text-[17px]">
						예전에는 네이버 블로그 하나만 운영해도 문의가 늘었습니다. 지금은 환자가 병원을 고르는
						경로 자체가 달라졌습니다. 검색으로 찾고, 영상으로 확인하고, 커뮤니티 후기를 읽고, AI에게
						물어본 뒤에야 문의합니다. 이 경로 어딘가에서 병원이 보이지 않으면, 환자는 그 단계에서
						다른 병원으로 넘어갑니다.
					</p>
				</Reveal>

				<div className="mt-12 grid gap-5 md:grid-cols-2 md:gap-8">
					<Reveal>
						<div className="h-full border border-[#E4E2DF] bg-[#FAFAFA] p-7 md:p-10">
							<p className="font-mono text-[#A5A2A0] text-[11px] tracking-[0.14em]">
								BEFORE — 단일 채널의 시대
							</p>
							<div className="mt-6 flex flex-wrap gap-2">
								{THEN_CHANNELS.map((c) => (
									<span
										key={c}
										className="bg-[#F5F5F5] px-3 py-2 font-semibold text-[#767370] text-sm line-through"
									>
										{c}
									</span>
								))}
								<span className="px-1 py-2 text-[#A5A2A0] text-sm">만으로 충분했던 시절</span>
							</div>
							<p className="mt-6 break-keep text-[#767370] text-sm leading-[1.75]">
								검색 결과가 블로그·영상·플레이스·AI 답변으로 나뉘면서, 블로그 상위노출 하나에
								의존하던 문의 구조는 힘을 잃었습니다.
							</p>
						</div>
					</Reveal>
					<Reveal delay={0.08}>
						<div className="h-full border border-[#111111] bg-[#0B0B0B] p-7 text-white md:p-10">
							<p className="font-mono text-[#8F8C89] text-[11px] tracking-[0.14em]">
								NOW — 통합 노출 구조의 시대
							</p>
							<div className="mt-6 flex flex-wrap gap-2">
								{NOW_CHANNELS.map((c) => (
									<span
										key={c}
										className="border border-[#3A3835] px-3 py-2 font-semibold text-sm text-white"
									>
										{c}
									</span>
								))}
							</div>
							<p className="mt-6 break-keep text-[#B5B2AF] text-sm leading-[1.75]">
								환자의 탐색 경로마다 접점이 필요해졌습니다. 그렇다고 모든 채널을 한 번에 운영할
								필요는 없습니다. 애드리절트는 진료과·지역·현재 운영 채널을 먼저 진단한 뒤{" "}
								<strong className="font-bold text-white">
									지금 필요한 채널부터, 필요한 만큼만 조합
								</strong>
								해 설계합니다.
							</p>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
};
