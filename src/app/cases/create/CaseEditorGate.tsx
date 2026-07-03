"use client";

import { Lock } from "lucide-react";
import { type FormEvent, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";
import { CaseEditor } from "./CaseEditor";

// 실보안이 아닌 관리자 진입 장벽(intentional obscurity) — 클라이언트 상수 비교.
const PASSWORD = "adad2026!";
const STORAGE_KEY = "cases-create-unlocked";

// sessionStorage는 클라이언트 전용 외부 상태 → useSyncExternalStore로 SSR-안전하게 읽는다.
const subscribe = (onChange: () => void) => {
	window.addEventListener("storage", onChange);
	return () => window.removeEventListener("storage", onChange);
};
const getUnlockedSnapshot = () => sessionStorage.getItem(STORAGE_KEY) === "1";
const getServerSnapshot = () => false;

export const CaseEditorGate = () => {
	const storedUnlocked = useSyncExternalStore(subscribe, getUnlockedSnapshot, getServerSnapshot);
	const [manualUnlocked, setManualUnlocked] = useState(false);
	const [value, setValue] = useState("");
	const [error, setError] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const unlocked = storedUnlocked || manualUnlocked;

	// biome/eslint: 포커스는 상태 변경이 아니므로 effect에서 안전. 잠금 화면 진입 시 입력에 포커스.
	useEffect(() => {
		if (!unlocked) inputRef.current?.focus();
	}, [unlocked]);

	const submit = (e: FormEvent) => {
		e.preventDefault();
		if (value === PASSWORD) {
			sessionStorage.setItem(STORAGE_KEY, "1");
			setManualUnlocked(true);
			setError(false);
		} else {
			setError(true);
		}
	};

	if (unlocked) return <CaseEditor />;

	return (
		<div className="fixed inset-0 z-60 flex items-center justify-center bg-[#0a0a0a]/80 px-4 backdrop-blur-sm">
			<form
				onSubmit={submit}
				className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.25)]"
			>
				<div className="mb-5 flex items-center gap-2">
					<span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fef2f2] text-[#e11d29]">
						<Lock className="h-4 w-4" />
					</span>
					<h1 className="font-bold text-[#0a0a0a] text-lg">관리자 확인</h1>
				</div>

				<input
					ref={inputRef}
					type="password"
					value={value}
					onChange={(e) => {
						setValue(e.target.value);
						setError(false);
					}}
					placeholder="비밀번호를 입력하세요"
					className={cn(
						"w-full rounded-lg border bg-white px-3.5 py-2.5 text-slate-900 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-[#e11d29] focus:ring-2 focus:ring-[#e11d29]/20",
						error ? "border-[#e11d29]" : "border-slate-200",
					)}
				/>

				{error && <p className="mt-2 text-[#e11d29] text-sm">비밀번호가 올바르지 않습니다</p>}

				<button
					type="submit"
					className="mt-5 w-full rounded-lg bg-[#e11d29] py-2.5 font-bold text-sm text-white transition-colors hover:bg-[#c11624]"
				>
					확인
				</button>
			</form>
		</div>
	);
};
