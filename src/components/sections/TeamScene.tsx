import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";

// images/현장 + images/team 중 서로 다른 장면만 선별 (유사·중복 제외).
// 균일 그리드(md 4열 × 2행 = 8장)로 빈칸 없이 깔끔하게 채운다.
const SCENE_PHOTOS = [
	{ src: "/images/onsite/onsite-1.jpg", alt: "병원 인터뷰 촬영 현장" },
	{ src: "/images/team/video-02.jpg", alt: "촬영 감독 카메라 작업" },
	{ src: "/images/onsite/onsite-2.jpg", alt: "콘텐츠 기획 미팅" },
	{ src: "/images/team/video-05.jpg", alt: "팀 모니터링 현장" },
	{ src: "/images/onsite/onsite-3.jpg", alt: "텔레프롬프터·카메라 촬영 셋업" },
	{ src: "/images/team/video-07.jpg", alt: "스튜디오 본 촬영" },
	{ src: "/images/onsite/onsite-4.jpg", alt: "스튜디오 촬영·편집 작업" },
	{ src: "/images/team/edit-03.jpg", alt: "편집자 워크스테이션" },
];

export const TeamScene = () => {
	return (
		<section className="bg-[#3a0509] py-16 md:py-28">
			<div className="mx-auto max-w-6xl px-4 md:px-8">
				{/* 헤더 */}
				<Reveal className="mb-12 md:mb-16">
					<h2 className="font-bold text-3xl text-white tracking-tight md:text-5xl">
						같은 공간에서 같이 만들어 갑니다.
					</h2>
					<p className="mt-4 max-w-xl break-keep text-sm text-white/80 leading-relaxed md:text-base">
						원하시는 편집 방향이나 강조하고 싶은 내용들의 경우 현장에서 즉석 반영도 가능합니다.
					</p>
				</Reveal>

				{/* 균일 모자이크 */}
				<div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
					{SCENE_PHOTOS.map((photo, i) => (
						<Reveal key={photo.src} delay={i * 0.05} direction="scale">
							<div className="group relative aspect-4/3 overflow-hidden rounded-xl">
								<Image
									src={photo.src}
									alt={photo.alt}
									fill
									sizes="(max-width: 768px) 50vw, 25vw"
									className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
								/>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};
