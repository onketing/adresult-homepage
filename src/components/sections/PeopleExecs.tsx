"use client";

import { Instagram, X, Youtube } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

type Para = { text: string; bold?: boolean };
type ExecLink = { label: string; href: string; kind: "video" | "instagram" | "youtube" };
type Exec = {
	name: string;
	title: string;
	photo: string;
	headline?: string;
	paragraphs: Para[];
	links: ExecLink[];
};

const INTRO_VIDEO_1 =
	"https://www.youtube.com/watch?si=9qmuaOckPpkE7dSq&v=03s-xXjreQU&feature=youtu.be";

const EXECS: Exec[] = [
	{
		name: "장윤정",
		title: "센터장",
		photo: "/people/member-1.jpg",
		paragraphs: [
			{
				text: "입사 초 대표님께서 회사와 고객,\n그리고 나의 우선순위를 정할 때\n1순위는 고객이라고 하셨습니다.",
			},
			{ text: "고객이 있어야 회사도 있고, 나도 있다 하시면서요." },
			{ text: "배운 그대로, 우리의 원장님들이\n저희에게는 1순위입니다.", bold: true },
			{ text: "우리 병원이 잘 돼야 애드리절트도, 저도 존재합니다." },
			{
				text: "저희의 파트너 의사분들이\n더 많은 환자들을 도울 수 있도록\n최선을 다해 함께하겠습니다.",
			},
		],
		links: [{ label: "장윤정 센터장 소개영상 바로가기", href: INTRO_VIDEO_1, kind: "video" }],
	},
	{
		name: "윤수환",
		title: "팀장",
		photo: "/people/member-2.jpg",
		paragraphs: [
			{ text: "저희 팀에는 유독\n‘사람을 진심으로 아끼는’ 원장님들이 많습니다." },
			{
				text: "그런 분들과 함께 일하면서, 누구보다 따뜻한 격려를 받았고,\n많은 것을 배울 수 있었습니다.",
			},
			{
				text: "고마운 마음에 제가 할 수 있었던 건\n진심을 다해 공부하고 배움을 실천하는 일이었습니다.",
			},
			{
				text: "다양한 분야의 책 200권 이상을 읽고,\n그 내용을 삶과 일에 녹여내며 저만의 방식으로\n살아가는 법을 조금씩 만들어왔습니다.",
			},
			{
				text: "성장과 배움에는 끝이 없지만,\n지금까지 받은 사랑과 쌓아온 지식을 더 많은\n분들과 나누는 일.",
				bold: true,
			},
			{
				text: "그것이 곧, 저를 믿고 함께 해주신 원장님께 보답하는\n길이자 애드리절트 1팀 팀장 윤수환의 사명이라 생각합니다.",
			},
			{ text: "감사합니다" },
		],
		links: [],
	},
	{
		name: "김구환",
		title: "팀장",
		photo: "/people/member-3.jpg",
		paragraphs: [
			{
				text: "수준 높은 의료는 생명을 살리는 힘이 있으며,\n때로는 누군가의 삶에 자신감을\n회복시켜 주기도 합니다.",
			},
			{
				text: "그에 더해, 진정성 있는 마케팅은\n병원의 가치를 효과적으로 전달하고,\n더 넓은 공감으로 세상과 연결하는\n중요한 역할을 합니다.",
				bold: true,
			},
			{
				text: "저는 병원이 가진 철학과 진심이\n올바르게 전달될 수 있도록 깊이 이해하고,\n신뢰할 수 있는 파트너로 함께하겠습니다.",
			},
		],
		links: [],
	},
	{
		name: "한우리",
		title: "지사장",
		photo: "/people/member-4.jpg",
		headline: "함께하면 안 되는 건 없다!\n결과를 만들어내는 마케터",
		paragraphs: [
			{
				text: "수많은 원장님, 대표님들을 만나며\n“마케팅하면 진짜 효과 있나요?”라는 질문을\n정말 많이 받아왔습니다.",
			},
			{
				text: "부모님 사업을 도와 문의를 80배 늘리고,\n제가 가진 모든 돈을 투자하여\n18평 요식업 매장을 오픈, 월 매출 1억 1천을 찍으며\n직접 마케팅 결과를 증명했습니다.",
			},
			{
				text: "애드리절트는 늘 ‘어떻게’라는 질문과\n‘할 수 있다’는 긍정 에너지로 확실한 결과물을 만듭니다.",
			},
			{
				text: "그동안 효과 없는 마케팅에 지치셨다면,\n마지막은 저희와 함께하세요.\n성공을 위한 여정에 당신의 날개가 되어드리겠습니다.",
			},
		],
		links: [
			{
				label: "한우리 지사장 소개영상 바로가기",
				href: "https://www.youtube.com/watch?si=4359gQBnvNSS50A2&v=YpoWxay00Cw&feature=youtu.be",
				kind: "video",
			},
			{
				label: "애드리절트 인스타그램 바로가기",
				href: "https://www.instagram.com/adresult_mapo?igsh=MXBqN2gzcjVlaDN1",
				kind: "instagram",
			},
			{
				label: "애드리절트 유튜브 바로가기",
				href: "https://www.youtube.com/@adreuslt_mapo?si=vsA_pK_03gNSD1kV",
				kind: "youtube",
			},
		],
	},
	{
		name: "이미지",
		title: "팀장",
		photo: "/people/member-5.jpg",
		paragraphs: [
			{ text: "병원을 운영하다 보면\n답답하고 막막한 순간들이 찾아오잖아요." },
			{ text: "그럴 때 옆에서 같이 고민하고\n조금씩 방향을 찾아가는 사람이 되고 싶습니다." },
			{
				text: "숫자만 보는 마케팅이 아니라,\n원장님 마음까지 살피는 마케팅을 하려고 합니다.",
				bold: true,
			},
			{ text: "그래야 원장님도 환자분들께 더 집중하실 수 있으니까요." },
			{ text: "그 곁을 저희가 함께하겠습니다." },
		],
		links: [
			{
				label: "이미지 팀장 소개영상 바로가기",
				href: "https://www.youtube.com/watch?si=4kfkpGmtVLxH2xtH&v=ab7q9z2au7g&feature=youtu.be",
				kind: "video",
			},
		],
	},
	{
		name: "유희경",
		title: "지사장",
		photo: "/people/member-6.jpg",
		headline: "집요함으로 성과를 만드는\n15년 차 약사 출신 마케터",
		paragraphs: [
			{ text: "저는 애드리절트 서초지사장이자,\n올해로 15년 차 약사입니다." },
			{
				text: "수많은 마케팅 경험을 통해 제가 내린 결론은,\n고객사의 성공에 있어 가장 중요한 것은\n‘마케팅 스킬’이 아니라 ‘본질’이라는 것이었습니다.",
			},
			{ text: "“왜 지사장님이 하면 결과가 잘 나오죠?”", bold: true },
			{
				text: "저는 이 말을 유독 많이 듣습니다.\n저의 특유의 호기심과 집요함,\n그리고 고객사가 진심으로 잘 되기를 바라는\n마음 때문이 아닐까 합니다.",
			},
			{
				text: "· 기본에 충실한 회사\n· 다양한 위기 상황에 믿고 함께 갈 수 있는 파트너\n· 전문성과 인간미 모두를 겸비한 회사",
			},
			{
				text: "애드리절트 서초지사는 앞으로도\n고객의 성공을 진심으로 바라며 최선을 다해 돕겠습니다.",
			},
		],
		links: [
			{
				label: "유희경 지사장 소개영상 바로가기",
				href: "https://www.youtube.com/watch?si=Tqxf7I_8ymc4yCtV&v=dIG4p-Kk39I&feature=youtu.be",
				kind: "video",
			},
		],
	},
	{
		name: "박기환",
		title: "지사장",
		photo: "/people/member-7.jpg",
		headline: "의사의 마음을 가장 잘 아는\n의사 마케터",
		paragraphs: [
			{
				text: "안녕하세요. 애드리절트 부산지사장 박기환입니다.\n저는 애드리절트 부산지사장이자 환자를 진료하고 있는\n현직 의사입니다.",
			},
			{
				text: "많은 원장님들이 마케팅에 대해 막연하게만 알고\n뚜렷한 계획이 없는 경우가 많습니다.",
			},
			{
				text: "의사로서 동료 의사들이 성공적으로 병원을 운영할 수 있도록\n도움을 주고 싶었습니다.",
			},
			{
				text: "저는 원장님들 병원을 성공시키지 못하면\n제 병원도 성공하지 못할 것이라는 마음으로\n마케팅에 임하고 있습니다.",
			},
			{
				text: "애드리절트 부산지사는 의사 마케터로서\n원장님들의 성공적인 병원 운영을 돕겠습니다.",
			},
		],
		links: [],
	},
	{
		name: "김태영",
		title: "지사장",
		photo: "/people/member-8.jpg",
		headline: "우리 고객사 병원을 지역 내 1위로\n브랜딩하는 마케터",
		paragraphs: [
			{ text: "안녕하세요. 애드리절트 중부 지사장 김태영입니다." },
			{
				text: "“왜 수백만 원을 써도 병원의 매출이 오르지 않을까요?”\n이유는 간단합니다.",
			},
			{
				text: "고민 없이 획일화된 마케팅을 진행하기 때문입니다.\n이런 업체들이 성과를 낼 수 있을까요?",
			},
			{
				text: "중부지사는 집요한 분석을 통해, 최적화된 마케팅 서비스를\n제안합니다. 그리고 성과를 낼 수밖에 없는 구조를 만듭니다.",
			},
			{ text: "저는 병원이 성공해야 우리도 생존한다는\n강한 믿음이 있습니다." },
			{
				text: "✓ 3개월 만에 확장 이전 개원한 사례\n✓ 9개월 만에 신규 원장님을 초빙한 사례\n✓ 폐업 직전 마케팅 진행 후, 신규 환자가 3배 증가한 사례",
			},
			{ text: "원장님의 경험으로 만들어 드리도록 밀착 관리하겠습니다." },
		],
		links: [
			{
				label: "김태영 지사장 소개영상 바로가기",
				href: "https://www.youtube.com/watch?si=bzpMjonIM-GDIOi2&v=DKPNc6NXkMA&feature=youtu.be",
				kind: "video",
			},
		],
	},
	{
		name: "손승연",
		title: "지사장",
		photo: "/people/member-9.jpg",
		paragraphs: [
			{ text: "안녕하세요. 애드리절트 이룸지사장 손승연입니다." },
			{
				text: "저는 애드리절트 이룸지사장이자,\n병원마케팅, 정부지원 등 다양한 사업을 운영하고 있습니다.",
			},
			{
				text: "직접 사업도 해보고, 고객사를 도우면서,\n사업의 준비부터 운영까지 겪는 모든 고충 중에\n마케팅이 가장 중요하다는 것을 매번 체감합니다.",
			},
			{
				text: "애드리절트 이룸지사는 고객사가 사업을 운영함에 있어\n어떤 부분에서 가장 힘들지 잘 알기 때문에,\n누구보다 잘 도울 수 있습니다.",
				bold: true,
			},
			{ text: "여러분이 성공할 때까지 함께 돕겠습니다." },
		],
		links: [
			{
				label: "손승연 지사장 소개영상 바로가기",
				href: "https://www.youtube.com/watch?si=-AMpuqALsSq0Gdzv&v=Q9v-IzVydnk&feature=youtu.be",
				kind: "video",
			},
		],
	},
];

export const PeopleExecs = () => {
	const [openIdx, setOpenIdx] = useState<number | null>(null);
	const active = openIdx === null ? null : EXECS[openIdx];

	useEffect(() => {
		if (openIdx === null) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setOpenIdx(null);
		};
		document.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [openIdx]);

	return (
		<section className="bg-slate-50 px-4 py-16 md:py-28">
			<div className="mx-auto max-w-[1600px]">
				<p className="mb-4 text-center font-bold text-[#C8102E] text-sm uppercase tracking-[0.25em] md:text-base">
					ADRESULT People
				</p>
				<h2 className="text-center font-extrabold text-3xl text-[#111111] tracking-tight md:text-5xl">
					임원진
				</h2>
				<p className="mt-5 text-center text-slate-500 text-sm md:text-base">
					※ 사진을 클릭하면 임원진의 자세한 소개를 볼 수 있습니다.
				</p>

				<div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 md:mt-16 md:gap-6 lg:grid-cols-3">
					{EXECS.map((e, i) => (
						<Reveal key={e.photo} delay={i * 0.09} direction="up">
							<button
								type="button"
								onClick={() => setOpenIdx(i)}
								className="group block w-full overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)] ring-1 ring-black/5 transition-transform hover:-translate-y-1"
							>
								<Image
									src={e.photo}
									alt={`${e.name} ${e.title}`}
									width={846}
									height={1154}
									quality={95}
									sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
									className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
								/>
							</button>
						</Reveal>
					))}
				</div>
			</div>

			<AnimatePresence>
				{active && (
					<motion.div
						className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setOpenIdx(null)}
					>
						<motion.div
							className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl md:p-10"
							initial={{ opacity: 0, scale: 0.96, y: 12 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.96, y: 12 }}
							transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
							onClick={(ev) => ev.stopPropagation()}
						>
							<button
								type="button"
								onClick={() => setOpenIdx(null)}
								aria-label="닫기"
								className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-800"
							>
								<X className="h-5 w-5" />
							</button>

							<div className="grid gap-8 md:grid-cols-[300px_1fr] md:gap-10">
								<div className="shrink-0">
									<Image
										src={active.photo}
										alt={`${active.name} ${active.title}`}
										width={846}
										height={1154}
										quality={95}
										className="mx-auto h-auto w-full max-w-[300px] rounded-xl bg-slate-100 object-cover"
									/>
									{active.links.length > 0 && (
										<div className="mx-auto mt-5 flex max-w-[300px] flex-col gap-3">
											{active.links.map((l) => (
												<a
													key={l.href}
													href={l.href}
													target="_blank"
													rel="noopener noreferrer"
													className={cn(
														"inline-flex items-center justify-center gap-2 px-5 py-3 text-center font-bold text-sm transition-opacity hover:opacity-85 md:text-base",
														l.kind === "video"
															? "bg-[#C8102E] text-white"
															: "border border-[#C8102E] bg-white text-[#C8102E]",
													)}
												>
													{l.kind === "instagram" && <Instagram className="h-4 w-4 shrink-0" />}
													{l.kind === "youtube" && <Youtube className="h-4 w-4 shrink-0" />}
													{l.label}
												</a>
											))}
										</div>
									)}
								</div>

								<div>
									<p className="mb-2 font-bold text-[#C8102E] text-sm">
										{active.name} {active.title}
									</p>
									{active.headline && (
										<h3 className="mb-6 whitespace-pre-line break-keep font-extrabold text-2xl text-[#111111] leading-snug md:text-3xl">
											{active.headline}
										</h3>
									)}
									<div className="space-y-5">
										{active.paragraphs.map((p) => (
											<p
												key={p.text.slice(0, 24)}
												className={cn(
													"whitespace-pre-line break-keep leading-relaxed",
													p.bold
														? "font-bold text-[#111111] text-lg md:text-xl"
														: "text-base text-slate-600 md:text-lg",
												)}
											>
												{p.text}
											</p>
										))}
									</div>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};
