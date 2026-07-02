import type { Metadata } from "next";
import { CompanyHero } from "@/components/sections/CompanyHero";
import { CompanyTabs } from "@/components/shared/CompanyTabs";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = {
	title: "CEO 인사말 | 애드리절트(ADRESULT)",
	description: "결과로 말하는 광고회사 애드리절트, 이승민 대표의 인사말입니다.",
};

const GREETING = [
	"마케팅의 ㅁ자도 모르던 제가, 강남 본사를 포함하여 전국 6개 지사와 함께하는 애드리절트의 대표가 되기까지, 밤새워 이야기해도 모자를 만큼 많은 시행착오를 겪어왔습니다.",
	"소상공인들의 가게를 방문하여 마케팅 코칭도 해보았고, 이름만 대면 다 알 만한 큰 기업의 마케팅 자문도 여럿 맡아보았습니다. 제일 어렵다는 병원마케팅도 수백 곳 넘게 진행해보았지요. 마케팅 책도 써봤고, 마케팅 강의·컨설팅도 참 많이 했습니다.",
	"이렇게 다양한 종류의 마케팅을 하면서 깨달은 점은 아이러니하게도 ‘결국은 기본!’이었습니다. 본질이 강하지 않은 상태에서는 마케팅이 아무리 강하게 들어가도 잠깐의 성공밖에는 이룰 수가 없었습니다.",
	"결과로 말하는 광고회사, 애드리절트는 우리의 도움이 필요한 고객사들에게 늘 기본에 충실한 회사가 되기 위해 노력할 것입니다.",
];

export const CeoPage = () => {
	return (
		<>
			<CompanyHero />
			<CompanyTabs />

			{/* CEO 인사말 */}
			<section className="bg-white px-4 py-24 md:px-8 md:py-32">
				<div className="mx-auto max-w-3xl">
					<Reveal>
						<p className="mb-4 font-bold text-[#ef3c39] text-sm uppercase tracking-[0.25em] md:text-base">
							CEO&rsquo;s Greeting
						</p>
						<h2 className="break-keep font-extrabold text-3xl text-[#0a0a0a] leading-tight tracking-tight md:text-4xl">
							안녕하세요.
							<br />
							애드리절트 <span className="text-[#ef3c39]">이승민</span>입니다.
						</h2>
					</Reveal>

					<div className="mt-10 space-y-6">
						{GREETING.map((p, i) => (
							<Reveal key={p.slice(0, 12)} delay={i * 0.06}>
								<p className="break-keep text-lg text-slate-600 leading-relaxed md:text-xl">{p}</p>
							</Reveal>
						))}
					</div>

					<Reveal delay={0.1}>
						<div className="mt-12 border-slate-200 border-t pt-8">
							<p className="font-extrabold text-[#0a0a0a] text-xl">이승민 대표</p>
							<p className="mt-2 text-slate-500 text-sm leading-relaxed md:text-base">
								현) 애드리절트 CEO · 현) 미다웍스 CMO
								<br />
								전) 인문계 고등학교 사회과 교사
							</p>
						</div>
					</Reveal>
				</div>
			</section>

			{/* CEO'S BOOK */}
			<section className="bg-slate-50 px-4 py-24 md:px-8 md:py-28">
				<div className="mx-auto max-w-3xl text-center">
					<Reveal>
						<p className="mb-4 font-bold text-[#ef3c39] text-sm uppercase tracking-[0.25em] md:text-base">
							CEO&rsquo;s Book
						</p>
						<p className="text-lg text-slate-500">실전에서 바로 써먹는 마케팅 비법</p>
						<h2 className="mt-2 break-keep font-extrabold text-3xl text-[#0a0a0a] tracking-tight md:text-4xl">
							「마케팅 때문에 고민입니다」
						</h2>
						<p className="mt-3 font-semibold text-[#ef3c39]">교보문고 경제·경영부문 베스트셀러</p>
						<p className="mx-auto mt-8 max-w-2xl break-keep text-base text-slate-600 leading-relaxed md:text-lg">
							온라인마케팅의 원리와 구조, 매출 상승에 대한 실제 경험을 베이스로 한 노하우,
							잠재고객의 니즈에 맞춘 홍보와 차별화된 브랜딩, 누구나 좋은 콘텐츠를 만드는 방법까지
							담았습니다.
						</p>
						<blockquote className="mx-auto mt-8 max-w-2xl break-keep border-[#ef3c39]/30 border-l-4 pl-5 text-left text-slate-600 italic">
							“많은 비용을 투자하고도 제대로 마케팅 효과를 보지 못한 소상공인들에게 등불 같은 책.”
							<footer className="mt-2 font-mono text-slate-400 text-sm not-italic">
								— 인덕의료재단 이사장 이윤환
							</footer>
						</blockquote>
					</Reveal>
				</div>
			</section>
		</>
	);
};

export default CeoPage;
