import type { Metadata } from "next";
import Image from "next/image";
import { CompanyHero } from "@/components/sections/CompanyHero";
import { PeopleExecs } from "@/components/sections/PeopleExecs";
import { CompanyTabs } from "@/components/shared/CompanyTabs";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = {
	title: "조직도·구성원 | 애드리절트(ADRESULT)",
	description: "강남 본사를 포함한 전국 6개 지사, 애드리절트의 조직도와 임원진을 소개합니다.",
};

export const PeoplePage = () => {
	return (
		<>
			<CompanyHero videoSrc="/people-hero-video.mp4" />
			<CompanyTabs />

			{/* ORGANIZATION CHART */}
			<section className="bg-white px-4 py-24 md:px-8 md:py-32">
				<div className="mx-auto max-w-[1600px]">
					<Reveal>
						<p className="mb-4 text-center font-bold text-[#ef3c39] text-sm uppercase tracking-[0.25em] md:text-base">
							Organization Chart
						</p>
						<h2 className="text-center font-extrabold text-3xl text-[#0a0a0a] tracking-tight md:text-5xl">
							애드리절트 <span className="text-[#ef3c39]">조직도</span>
						</h2>
						<p className="mt-5 text-center text-lg text-slate-600">
							강남 본사를 포함한 <span className="font-bold text-[#0a0a0a]">전국 6개 지사</span>가
							함께합니다.
						</p>
					</Reveal>

					<Reveal direction="scale" className="mt-14 md:mt-16">
						<Image
							src="/people/organization.jpg"
							alt="애드리절트 조직도"
							width={1300}
							height={800}
							sizes="(max-width: 1024px) 100vw, 1200px"
							className="mx-auto h-auto w-full max-w-6xl rounded-2xl ring-1 ring-black/5"
						/>
					</Reveal>
				</div>
			</section>

			{/* ADRESULT PEOPLE — 임원진 (클릭 → 모달) */}
			<PeopleExecs />
		</>
	);
};

export default PeoplePage;
