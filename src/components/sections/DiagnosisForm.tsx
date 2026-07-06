"use client";

// TODO: 추후 Tally/폼 백엔드 연동 시 handleSubmit 교체 (기존 Tally: https://tally.so/r/gDQkzJ)

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const DEPARTMENTS = ["피부과", "성형외과", "정형외과", "통증의학과", "치과", "한의원", "기타"];

const CHANNELS = [
	"네이버 블로그",
	"인스타그램·숏폼",
	"유튜브",
	"카페·커뮤니티",
	"검색광고(파워링크)",
	"플레이스",
	"없음",
];

const CONCERNS = [
	"신규환자 감소",
	"문의는 있는데 내원 전환이 낮음",
	"광고비 대비 효과 불확실",
	"경쟁 병원 대비 노출 부족",
	"후기·평판 관리",
	"개원 초기 마케팅",
	"기타",
];

const BUDGETS = ["300만 원 미만", "300~500만 원", "500~1,000만 원", "1,000만 원 이상", "미정"];

const CONTACT_METHODS = ["전화", "카카오톡", "방문 미팅"];

type FormErrors = {
	hospitalName?: string;
	department?: string;
	region?: string;
	phone?: string;
};

const labelClass = "font-semibold text-[#333333] text-sm";
const errorClass = "mt-1.5 text-[#C8102E] text-xs";

const RequiredMark = () => <span className="text-[#C8102E]">*</span>;

export const DiagnosisForm = () => {
	const [hospitalName, setHospitalName] = useState("");
	const [department, setDepartment] = useState("");
	const [region, setRegion] = useState("");
	const [channels, setChannels] = useState<string[]>([]);
	const [concern, setConcern] = useState("");
	const [budget, setBudget] = useState("");
	const [contactMethod, setContactMethod] = useState("전화");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");
	const [errors, setErrors] = useState<FormErrors>({});
	const [summary, setSummary] = useState<string | null>(null);
	const [copied, setCopied] = useState(false);

	const toggleChannel = (channel: string) => {
		setChannels((prev) =>
			prev.includes(channel) ? prev.filter((c) => c !== channel) : [...prev, channel],
		);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const next: FormErrors = {};
		if (!hospitalName.trim()) next.hospitalName = "병원명을 입력해주세요.";
		if (!department) next.department = "진료과를 선택해주세요.";
		if (!region.trim()) next.region = "지역을 입력해주세요.";
		if (!phone.trim()) next.phone = "연락처를 입력해주세요.";
		setErrors(next);
		if (Object.keys(next).length > 0) return;

		const text = [
			"[병원 마케팅 진단 신청]",
			"",
			`병원명: ${hospitalName.trim()}`,
			`진료과: ${department}`,
			`지역: ${region.trim()}`,
			`운영 중인 마케팅 채널: ${channels.length > 0 ? channels.join(", ") : "미선택"}`,
			`가장 큰 고민: ${concern || "미선택"}`,
			`월 마케팅 예산 범위: ${budget || "미정"}`,
			`상담 희망 방식: ${contactMethod}`,
			`연락처: ${phone.trim()}`,
			`문의 내용: ${message.trim() || "없음"}`,
		].join("\n");

		setSummary(text);
		setCopied(false);

		const subject = `[병원 마케팅 진단 신청] ${hospitalName.trim()}`;
		window.location.href = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
			subject,
		)}&body=${encodeURIComponent(text)}`;
	};

	const handleCopy = async () => {
		if (!summary) return;
		try {
			await navigator.clipboard.writeText(summary);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch {
			// clipboard 미지원 환경 — 요약 카드에서 직접 복사 가능
		}
	};

	return (
		<div className="border border-[#E4E2DF] bg-white p-7 md:p-11">
			<p className="font-mono text-[#767370] text-[12px] tracking-[0.14em]">DIAGNOSIS REQUEST</p>
			<h2 className="mt-3 break-keep font-extrabold text-2xl text-[#111111] tracking-tight">
				진단 신청서
			</h2>
			<p className="mt-3 break-keep text-[#767370] text-[14.5px] leading-[1.8]">
				아래 내용을 남겨주시면 병원 상황에 맞춰 진단 결과를 회신드립니다.
			</p>

			<form onSubmit={handleSubmit} noValidate className="mt-8 space-y-7">
				{/* 1. 병원명 */}
				<div>
					<Label htmlFor="hospital-name" className={labelClass}>
						병원명 <RequiredMark />
					</Label>
					<Input
						id="hospital-name"
						type="text"
						value={hospitalName}
						onChange={(e) => setHospitalName(e.target.value)}
						placeholder="예: OO피부과의원"
						aria-invalid={!!errors.hospitalName}
						className="mt-2"
					/>
					{errors.hospitalName && <p className={errorClass}>{errors.hospitalName}</p>}
				</div>

				{/* 2. 진료과 */}
				<div>
					<Label htmlFor="department" className={labelClass}>
						진료과 <RequiredMark />
					</Label>
					<Select value={department} onValueChange={(value) => setDepartment(value ?? "")}>
						<SelectTrigger id="department" aria-invalid={!!errors.department} className="mt-2">
							<SelectValue placeholder="진료과를 선택해주세요" />
						</SelectTrigger>
						<SelectContent>
							{DEPARTMENTS.map((d) => (
								<SelectItem key={d} value={d}>
									{d}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					{errors.department && <p className={errorClass}>{errors.department}</p>}
				</div>

				{/* 3. 지역 */}
				<div>
					<Label htmlFor="region" className={labelClass}>
						지역 <RequiredMark />
					</Label>
					<Input
						id="region"
						type="text"
						value={region}
						onChange={(e) => setRegion(e.target.value)}
						placeholder="예: 서울 강남구"
						aria-invalid={!!errors.region}
						className="mt-2"
					/>
					{errors.region && <p className={errorClass}>{errors.region}</p>}
				</div>

				{/* 4. 운영 중인 마케팅 채널 */}
				<fieldset>
					<legend className={labelClass}>현재 운영 중인 마케팅 채널 (복수 선택)</legend>
					<div className="mt-2.5 grid grid-cols-2 gap-2">
						{CHANNELS.map((channel) => {
							const active = channels.includes(channel);
							return (
								<label
									key={channel}
									className={cn(
										"flex cursor-pointer items-center gap-2.5 border px-3.5 py-3 text-[13.5px] transition-colors",
										active
											? "border-[#111111] bg-[#111111] font-semibold text-white"
											: "border-[#D9D6D3] bg-white text-[#555250] hover:border-[#111111]",
									)}
								>
									<input
										type="checkbox"
										className="sr-only"
										checked={active}
										onChange={() => toggleChannel(channel)}
									/>
									<span
										aria-hidden
										className={cn(
											"flex size-4 shrink-0 items-center justify-center border",
											active ? "border-white" : "border-[#D9D6D3]",
										)}
									>
										{active && <Check className="size-3" />}
									</span>
									<span className="break-keep">{channel}</span>
								</label>
							);
						})}
					</div>
				</fieldset>

				{/* 5. 가장 큰 고민 */}
				<div>
					<Label htmlFor="concern" className={labelClass}>
						가장 큰 고민
					</Label>
					<Select value={concern} onValueChange={(value) => setConcern(value ?? "")}>
						<SelectTrigger id="concern" className="mt-2">
							<SelectValue placeholder="가장 가까운 항목을 선택해주세요" />
						</SelectTrigger>
						<SelectContent>
							{CONCERNS.map((c) => (
								<SelectItem key={c} value={c}>
									{c}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				{/* 6. 월 마케팅 예산 범위 */}
				<div>
					<Label htmlFor="budget" className={labelClass}>
						월 마케팅 예산 범위
					</Label>
					<Select value={budget} onValueChange={(value) => setBudget(value ?? "")}>
						<SelectTrigger id="budget" className="mt-2">
							<SelectValue placeholder="예산 범위를 선택해주세요" />
						</SelectTrigger>
						<SelectContent>
							{BUDGETS.map((b) => (
								<SelectItem key={b} value={b}>
									{b}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				{/* 7. 상담 희망 방식 */}
				<fieldset>
					<legend className={labelClass}>상담 희망 방식</legend>
					<div className="mt-2.5 grid grid-cols-3 gap-2">
						{CONTACT_METHODS.map((method) => {
							const active = contactMethod === method;
							return (
								<label
									key={method}
									className={cn(
										"flex cursor-pointer items-center justify-center gap-2 border px-3 py-3 text-[13.5px] transition-colors",
										active
											? "border-[#111111] bg-[#111111] font-semibold text-white"
											: "border-[#D9D6D3] bg-white text-[#555250] hover:border-[#111111]",
									)}
								>
									<input
										type="radio"
										name="contact-method"
										className="sr-only"
										checked={active}
										onChange={() => setContactMethod(method)}
									/>
									<span
										aria-hidden
										className={cn(
											"flex size-3.5 shrink-0 items-center justify-center rounded-full border",
											active ? "border-white" : "border-[#D9D6D3]",
										)}
									>
										{active && <span className="size-1.5 rounded-full bg-white" />}
									</span>
									<span className="break-keep">{method}</span>
								</label>
							);
						})}
					</div>
				</fieldset>

				{/* 8. 연락처 */}
				<div>
					<Label htmlFor="phone" className={labelClass}>
						연락처 <RequiredMark />
					</Label>
					<Input
						id="phone"
						type="tel"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						placeholder="예: 010-1234-5678"
						aria-invalid={!!errors.phone}
						className="mt-2"
					/>
					{errors.phone && <p className={errorClass}>{errors.phone}</p>}
				</div>

				{/* 9. 문의 내용 */}
				<div>
					<Label htmlFor="message" className={labelClass}>
						문의 내용 (선택)
					</Label>
					<textarea
						id="message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						rows={5}
						placeholder="병원 상황이나 궁금한 점을 자유롭게 남겨주세요."
						className="mt-2 w-full resize-y rounded-lg border border-input bg-transparent px-3.5 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm"
					/>
				</div>

				<button
					type="submit"
					className="w-full bg-[#C8102E] px-8 py-4 font-bold text-[15px] text-white transition-colors hover:bg-[#A50D26]"
				>
					병원 마케팅 진단 신청하기
				</button>
				<p className="break-keep text-center text-[#A5A2A0] text-xs leading-[1.7]">
					제출 시 메일 앱이 열립니다. 남겨주신 정보는 진단·상담 목적 외에 사용하지 않습니다.
				</p>
			</form>

			{summary && (
				<div className="mt-8 border border-[#E4E2DF] bg-[#FAFAFA] p-5 md:p-6">
					<p className="break-keep font-semibold text-[#111111] text-sm">
						신청 내용이 메일로 작성됩니다.
					</p>
					<p className="mt-1.5 break-keep text-[#767370] text-[13.5px] leading-[1.8]">
						메일 발송이 어려우시면 아래 카카오톡/전화로 같은 내용을 보내주세요.
					</p>
					<pre className="mt-4 whitespace-pre-wrap break-keep border border-[#E4E2DF] bg-white p-4 font-sans text-[#333333] text-[13px] leading-[1.8]">
						{summary}
					</pre>
					<div className="mt-4 flex flex-wrap items-center gap-2.5">
						<button
							type="button"
							onClick={handleCopy}
							className="inline-flex items-center gap-2 border border-[#D9D6D3] px-4 py-2.5 font-semibold text-[#444444] text-[13px] transition-colors hover:border-[#C8102E] hover:text-[#C8102E]"
						>
							{copied ? <Check className="size-4" /> : <Copy className="size-4" />}
							{copied ? "복사되었습니다" : "내용 복사"}
						</button>
						<a
							href={siteConfig.contact.kakaoOpenChat}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center border border-[#D9D6D3] px-4 py-2.5 font-semibold text-[#444444] text-[13px] transition-colors hover:border-[#C8102E] hover:text-[#C8102E]"
						>
							카카오톡으로 보내기
						</a>
						<a
							href={`tel:${siteConfig.contact.tel}`}
							className="inline-flex items-center border border-[#D9D6D3] px-4 py-2.5 font-semibold text-[#444444] text-[13px] transition-colors hover:border-[#C8102E] hover:text-[#C8102E]"
						>
							전화 {siteConfig.contact.tel}
						</a>
					</div>
				</div>
			)}
		</div>
	);
};
