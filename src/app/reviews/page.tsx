import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/shared/BreadcrumbJsonLd";
import { PaginatedCards } from "@/components/shared/PaginatedCards";
import { CUSTOMER_REVIEWS } from "@/data/customer-reviews";

export const metadata: Metadata = {
	title: "병원마케팅 고객후기 | 애드리절트(ADRESULT)",
	alternates: { canonical: "/reviews" },
	description:
		"애드리절트와 함께한 병원 원장님들의 실제 고객후기. 영상으로 남겨주신 후기를 통해 병원마케팅 성과를 직접 확인하세요.",
	keywords: [
		"병원마케팅 후기",
		"애드리절트 후기",
		"병원마케팅 고객후기",
		"병원 광고 대행사 후기",
		"병원마케팅 실제후기",
	],
};

export const ReviewsPage = () => {
	return (
		<>
			<BreadcrumbJsonLd
				items={[
					{ name: "홈", path: "" },
					{ name: "고객사례", path: "/cases" },
					{ name: "고객후기", path: "/reviews" },
				]}
			/>
			<section className="bg-white px-4 pt-28 pb-24 md:px-8 md:pt-36 md:pb-28">
				<div className="mx-auto max-w-7xl">
					<p className="font-bold text-[#e11d29] text-sm uppercase tracking-[0.25em] md:text-base">
						Customer Reviews
					</p>
					<p className="mt-4 text-lg text-slate-600 md:text-xl">애드리절트 고객후기입니다.</p>
					<h1 className="mt-1 break-keep font-extrabold text-3xl text-[#0a0a0a] tracking-tight md:text-5xl">
						결과로 말하는 <span className="text-[#e11d29]">애드리절트</span>
					</h1>

					<div className="mt-14 md:mt-16">
						<PaginatedCards items={CUSTOMER_REVIEWS} />
					</div>
				</div>
			</section>
		</>
	);
};

export default ReviewsPage;
