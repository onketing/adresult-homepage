import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { PaginatedCards } from "@/components/shared/PaginatedCards";
import { SUCCESS_CASES } from "@/data/success-cases";

export const metadata: Metadata = {
	title: "병원마케팅 성공사례 | 애드리절트(ADRESULT)",
	alternates: { canonical: "/cases" },
	description:
		"애드리절트 병원마케팅 성공사례. 피부과·성형외과·정형외과·치과·한의원 등 실제 병원의 신환 증가와 매출 상승 결과를 확인하세요.",
	keywords: [
		"병원마케팅성공사례",
		"병원마케팅 사례",
		"피부과마케팅 사례",
		"정형외과마케팅 사례",
		"성형외과마케팅 사례",
		"병원 신규환자 마케팅 사례",
		"병원마케팅 후기",
	],
};

export const CasesPage = () => {
	return (
		<>
			<BreadcrumbJsonLd
				items={[
					{ name: "홈", path: "" },
					{ name: "고객사례", path: "/cases" },
					{ name: "성공사례", path: "/cases" },
				]}
			/>
			<section className="bg-white px-4 pt-28 pb-24 md:px-8 md:pt-36 md:pb-28">
				<div className="mx-auto max-w-6xl">
					<p className="font-bold text-[#e11d29] text-sm uppercase tracking-[0.25em] md:text-base">
						Portfolio
					</p>
					<p className="mt-4 text-lg text-slate-600 md:text-xl">
						애드리절트 병원마케팅 성공사례입니다.
					</p>
					<h1 className="mt-1 break-keep font-extrabold text-3xl text-[#0a0a0a] tracking-tight md:text-5xl">
						결과로 말하는 <span className="text-[#e11d29]">애드리절트</span>
					</h1>

					<div className="mt-14 md:mt-16">
						<PaginatedCards items={SUCCESS_CASES} />
					</div>
				</div>
			</section>
		</>
	);
};

export default CasesPage;
