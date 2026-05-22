import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";
import { EDIT_PHOTOS, VIDEO_PHOTOS } from "@/data/team-photos";

// TODO: 회사 전경·사무실·회의 사진 추가 (사용자 제공)
// 현재는 기존 9장(VIDEO 6 + EDIT 3) 재배치로 시작
const SCENE_PHOTOS = [...VIDEO_PHOTOS, ...EDIT_PHOTOS];

// 모자이크 셀 메타 — 첫 셀(feature)은 2x2 차지, 나머지는 1x1
const CELL_META = [
	{ className: "md:col-span-2 md:row-span-2", aspect: "aspect-square md:aspect-auto" },
	{ className: "", aspect: "aspect-[4/3]" },
	{ className: "", aspect: "aspect-[4/3]" },
	{ className: "", aspect: "aspect-[4/3]" },
	{ className: "", aspect: "aspect-[4/3]" },
	{ className: "", aspect: "aspect-[4/3]" },
	{ className: "", aspect: "aspect-[4/3]" },
	{ className: "", aspect: "aspect-[4/3]" },
	{ className: "", aspect: "aspect-[4/3]" },
] as const;

export const TeamScene = () => {
	return (
		<section className="bg-[#052e16] py-24 md:py-28">
			{/* 헤더 */}
			<div className="mx-auto mb-12 max-w-6xl px-4 md:mb-16 md:px-8">
				<Reveal>
					<p className="mb-3 font-semibold text-[#86efac] text-sm uppercase tracking-[0.25em]">
						Studio
					</p>
					<h2 className="font-bold text-3xl text-white tracking-tight md:text-5xl">
						같은 공간에서 같이 만듭니다.
					</h2>
					<p className="mt-4 max-w-xl break-keep text-sm text-white/80 leading-relaxed md:text-base">
						촬영·편집·발행이 한 팀, 한 공간에서 끝납니다.
					</p>
				</Reveal>
			</div>

			{/* Mosaic — full-bleed */}
			<div className="grid grid-cols-2 gap-2 px-2 md:grid-cols-4 md:gap-3 md:px-3">
				{SCENE_PHOTOS.map((photo, i) => {
					const meta = CELL_META[i] ?? CELL_META[1];
					const isFeature = i === 0;
					return (
						<Reveal key={photo.src} delay={i * 0.04} direction="scale" className={meta.className}>
							<div
								className={`group relative overflow-hidden rounded-xl ${meta.aspect} ${
									isFeature ? "h-full" : ""
								}`}
							>
								<Image
									src={photo.src}
									alt={photo.alt}
									fill
									sizes={
										isFeature ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"
									}
									className="object-cover grayscale-[0.1] transition-all duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
								/>
								{/* 가장 큰 셀에 텍스트 overlay */}
								{isFeature && (
									<>
										<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
										<div className="absolute right-0 bottom-0 left-0 p-6 md:p-8">
											<p className="font-mono text-white/80 text-xs tracking-[0.2em]">@onketing</p>
											<p className="mt-2 font-bold text-white text-xl tracking-tight md:text-2xl">
												스튜디오
											</p>
										</div>
									</>
								)}
							</div>
						</Reveal>
					);
				})}
			</div>
		</section>
	);
};
