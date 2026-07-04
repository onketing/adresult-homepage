import { Clapperboard, MonitorPlay, PenLine } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { TeamPhoto } from "@/data/team-photos";
import { EDIT_PHOTOS, VIDEO_PHOTOS } from "@/data/team-photos";

const SCRIPT_PHOTOS: TeamPhoto[] = VIDEO_PHOTOS.slice(0, 3);

type CrewBlockProps = {
	icon: React.ReactNode;
	label: string;
	heading: React.ReactNode;
	body: string;
	photos: TeamPhoto[];
	reverse?: boolean;
	gridCols?: string;
};

const CrewBlock = ({
	icon,
	label,
	heading,
	body,
	photos,
	reverse = false,
	gridCols = "grid-cols-2 sm:grid-cols-3",
}: CrewBlockProps) => {
	return (
		<div
			className={`flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12 ${reverse ? "lg:flex-row-reverse" : ""}`}
		>
			<Reveal className="w-full lg:w-80 lg:shrink-0" direction={reverse ? "right" : "left"}>
				<div className="rounded-md border border-slate-100 bg-white p-8 shadow-sm">
					<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-[#3a0509]">
						{icon}
					</div>
					<p className="mb-1 font-semibold text-[#0a0a0a] text-xs uppercase tracking-[0.2em]">
						{label}
					</p>
					<h3 className="mb-3 font-bold text-foreground text-xl leading-snug">{heading}</h3>
					<p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
				</div>
			</Reveal>

			<div className={`grid flex-1 gap-3 ${gridCols}`}>
				{photos.map((photo, i) => (
					<Reveal key={photo.src} delay={i * 0.04}>
						<div className="relative aspect-[4/3] overflow-hidden rounded-xl">
							<Image
								src={photo.src}
								alt={photo.alt}
								fill
								sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
								className="object-cover transition-transform duration-500 hover:scale-105"
							/>
						</div>
					</Reveal>
				))}
			</div>
		</div>
	);
};

export const TeamCrews = () => {
	return (
		<section className="bg-white px-4 py-16 md:py-28">
			<div className="mx-auto max-w-7xl">
				<Reveal>
					<SectionHeading
						title="저희 팀을 소개합니다!"
						sub='촬영부터 발행까지 외주 없이 전부 "직접" 합니다.'
						className="mb-16"
					/>
				</Reveal>

				<div className="flex flex-col gap-10 lg:gap-16">
					<CrewBlock
						icon={<PenLine className="h-5 w-5 text-white" aria-hidden="true" />}
						label="대본팀"
						heading="잘 쓴 대본 하나. 그거면 충분합니다."
						body="알고리즘 최적화 대본을 인플루언서가 직접 기획합니다. 성공하는 숏폼의 대본에는 성공 공식이 숨어져 있습니다. 그리고 그 공식은 실제로 운영해 본 사람이 가장 잘 압니다."
						photos={SCRIPT_PHOTOS}
						gridCols="grid-cols-2 sm:grid-cols-3"
					/>
					<CrewBlock
						icon={<Clapperboard className="h-5 w-5 text-white" aria-hidden="true" />}
						label="영상팀"
						heading="비싼 게 좋은 건 아니지만 비싸면 보통 좋습니다."
						body="캐논, 소니, 오즈모 등 가장 잘 나오는 카메라로 최고의 모습을 담아드리겠습니다. 촬영 시엔 전문 디렉터가 함께하며 성공 공식을 따른 대본을 바탕으로 디렉터가 가이드를 제공해 드립니다."
						photos={VIDEO_PHOTOS.slice(3) as TeamPhoto[]}
						reverse
					/>
					<CrewBlock
						icon={<MonitorPlay className="h-5 w-5 text-white" aria-hidden="true" />}
						label="편집팀"
						heading="편집자가 직접 촬영합니다."
						body="영상을 찍은 사람이 편집점을 가장 잘 압니다. 편집자가 직접 촬영하고 편집 포인트를 두 눈으로 확인해 최고의 결과물을 제작해 드립니다."
						photos={EDIT_PHOTOS as unknown as TeamPhoto[]}
						gridCols="grid-cols-2 sm:grid-cols-3"
					/>
				</div>
			</div>
		</section>
	);
};
