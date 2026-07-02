// 회사소개 하위 페이지 공용 히어로 — 영상 배경 + "Company introduction"
export const CompanyHero = ({ videoSrc = "/home-hero-video.mp4" }: { videoSrc?: string }) => {
	return (
		<section className="relative h-[calc(100svh-64px)] min-h-[420px] w-full overflow-hidden bg-[#0b1220] pt-16 md:h-[calc(100svh-65px)] md:pt-20">
			<video
				className="absolute inset-0 h-full w-full object-cover"
				autoPlay
				muted
				loop
				playsInline
				preload="auto"
			>
				<source src={videoSrc} type="video/mp4" />
				<track kind="captions" />
			</video>

			{/* 가독성 스크림 */}
			<div className="absolute inset-0 bg-black/25" aria-hidden="true" />

			{/* 텍스트 */}
			<div className="absolute inset-0 z-10 flex items-center">
				<div className="mx-auto w-full max-w-7xl px-6 md:px-8">
					<h1 className="font-extrabold text-4xl text-white leading-[1.1] tracking-tight [text-shadow:0_2px_18px_rgba(0,0,0,0.4)] sm:text-5xl md:text-6xl lg:text-7xl">
						Company
						<br />
						introduction
					</h1>
					<p className="mt-4 font-bold text-white/90 text-xl md:text-2xl">회사소개</p>
				</div>
			</div>
		</section>
	);
};
