"use client";

import { Extension } from "@tiptap/core";
import { Color } from "@tiptap/extension-color";
import { Highlight } from "@tiptap/extension-highlight";
import { Image as TiptapImage } from "@tiptap/extension-image";
import { Placeholder } from "@tiptap/extension-placeholder";
import { TextAlign } from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";
import { type Editor, EditorContent, type JSONContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
	AlignCenter,
	AlignLeft,
	AlignRight,
	ArrowLeft,
	Bold,
	Braces,
	ChevronDown,
	Code,
	Eraser,
	Highlighter,
	ImageIcon,
	Italic,
	Link2,
	List,
	ListOrdered,
	Minus,
	Pipette,
	Plus,
	Quote,
	Redo2,
	Strikethrough,
	Underline as UnderlineIcon,
	Undo2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const DRAFT_KEY = "cases-draft";
const PUBLISHED_KEY = "cases-published-draft";

// textStyle 마크에 font-size 속성을 등록하는 커스텀 확장 (px 지정용).
// 실제 적용/해제는 내장 setMark("textStyle", { fontSize }) 커맨드로 처리한다.
const FontSize = Extension.create({
	name: "fontSize",
	addOptions() {
		return { types: ["textStyle"] };
	},
	addGlobalAttributes() {
		return [
			{
				types: this.options.types,
				attributes: {
					fontSize: {
						default: null,
						parseHTML: (element) => element.style.fontSize || null,
						renderHTML: (attributes) =>
							attributes.fontSize ? { style: `font-size: ${attributes.fontSize}` } : {},
					},
				},
			},
		];
	},
});

// 구글독스 색상 팔레트 (10열 × 8행)
const PALETTE = [
	"#000000",
	"#434343",
	"#666666",
	"#999999",
	"#b7b7b7",
	"#cccccc",
	"#d9d9d9",
	"#efefef",
	"#f3f3f3",
	"#ffffff",
	"#980000",
	"#ff0000",
	"#ff9900",
	"#ffff00",
	"#00ff00",
	"#00ffff",
	"#4a86e8",
	"#0000ff",
	"#9900ff",
	"#ff00ff",
	"#e6b8af",
	"#f4cccc",
	"#fce5cd",
	"#fff2cc",
	"#d9ead3",
	"#d0e0e3",
	"#c9daf8",
	"#cfe2f3",
	"#d9d2e9",
	"#ead1dc",
	"#dd7e6b",
	"#ea9999",
	"#f9cb9c",
	"#ffe599",
	"#b6d7a8",
	"#a2c4c9",
	"#a4c2f4",
	"#9fc5e8",
	"#b4a7d6",
	"#d5a6bd",
	"#cc4125",
	"#e06666",
	"#f6b26b",
	"#ffd966",
	"#93c47d",
	"#76a5af",
	"#6d9eeb",
	"#6fa8dc",
	"#8e7cc3",
	"#c27ba0",
	"#a61c00",
	"#cc0000",
	"#e69138",
	"#f1c232",
	"#6aa84f",
	"#45818e",
	"#3c78d8",
	"#3d85c6",
	"#674ea7",
	"#a64d79",
	"#85200c",
	"#990000",
	"#b45f06",
	"#bf9000",
	"#38761d",
	"#134f5c",
	"#1155cc",
	"#0b5394",
	"#351c75",
	"#741b47",
	"#5b0f00",
	"#660000",
	"#783f04",
	"#7f6000",
	"#274e13",
	"#0c343d",
	"#1c4587",
	"#073763",
	"#20124d",
	"#4c1130",
];

const BLOCK_STYLES = [
	{ level: 0, label: "본문", className: "text-sm text-slate-700" },
	{ level: 1, label: "제목 1", className: "font-extrabold text-lg text-[#111111]" },
	{ level: 2, label: "제목 2", className: "font-bold text-base text-[#111111]" },
	{ level: 3, label: "제목 3", className: "font-bold text-sm text-[#111111]" },
	{ level: 4, label: "제목 4", className: "font-semibold text-sm text-slate-800" },
] as const;

type Draft = { title: string; tags: string[]; doc: JSONContent | null };

// 마운트 시 1회만 읽는 임시저장(클라이언트 전용) — lazy initializer로 SSR-안전하게 로드.
const readDraft = (): Draft => {
	const empty: Draft = { title: "", tags: [], doc: null };
	if (typeof window === "undefined") return empty;
	const raw = localStorage.getItem(DRAFT_KEY);
	if (!raw) return empty;
	try {
		const parsed = JSON.parse(raw) as Partial<Draft>;
		return {
			title: typeof parsed.title === "string" ? parsed.title : "",
			tags: Array.isArray(parsed.tags) ? parsed.tags : [],
			doc: parsed.doc ?? null,
		};
	} catch {
		// 손상된 임시저장은 무시한다.
		return empty;
	}
};

const buildExtensions = (placeholder: string) => [
	StarterKit.configure({
		heading: { levels: [1, 2, 3, 4] },
		link: { openOnClick: false },
	}),
	TextStyle,
	Color,
	FontSize,
	Highlight.configure({ multicolor: true }),
	TextAlign.configure({ types: ["heading", "paragraph"] }),
	TiptapImage,
	Placeholder.configure({ placeholder }),
];

type ToolbarButtonProps = {
	onClick: () => void;
	active?: boolean;
	label: string;
	children: ReactNode;
};

const ToolbarButton = ({ onClick, active, label, children }: ToolbarButtonProps) => (
	<button
		type="button"
		onClick={onClick}
		aria-label={label}
		aria-pressed={active}
		className={cn(
			"flex h-8 min-w-8 items-center justify-center rounded-md px-1.5 font-semibold text-[13px] transition-colors hover:bg-slate-100",
			active ? "bg-[#fef2f2] text-[#C8102E]" : "text-slate-600",
		)}
	>
		{children}
	</button>
);

const Divider = () => <span className="mx-1 h-5 w-px shrink-0 bg-slate-200" />;

// 구글독스식 색상 팔레트 팝오버
type ColorPopoverProps = {
	current?: string;
	onPick: (color: string) => void;
	onReset: () => void;
};

const ColorPopover = ({ current, onPick, onReset }: ColorPopoverProps) => (
	<div className="absolute top-full left-0 z-30 mt-1 w-max rounded-lg border border-slate-200 bg-white p-3 shadow-[0_8px_24px_rgba(15,23,42,0.14)]">
		<button
			type="button"
			onClick={onReset}
			className="flex items-center gap-2 rounded-md px-1 py-0.5 text-slate-600 text-xs hover:bg-slate-100"
		>
			<span className="relative flex h-4 w-4 items-center justify-center rounded-sm border border-slate-300 bg-white">
				<span className="absolute h-px w-5 rotate-45 bg-rose-500" />
			</span>
			없음
		</button>
		<div className="mt-2 grid grid-cols-10 gap-1">
			{PALETTE.map((c) => (
				<button
					key={c}
					type="button"
					onClick={() => onPick(c)}
					aria-label={c}
					className={cn(
						"h-5 w-5 rounded-sm border border-black/10 transition-transform hover:scale-110",
						current?.toLowerCase() === c && "ring-2 ring-[#1a73e8] ring-offset-1",
					)}
					style={{ backgroundColor: c }}
				/>
			))}
		</div>
		<div className="mt-3 flex items-center gap-2 border-slate-100 border-t pt-2">
			<span className="text-slate-500 text-xs">맞춤</span>
			<label className="flex cursor-pointer items-center gap-1 rounded-md border border-slate-200 px-2 py-1 text-slate-600 text-xs hover:bg-slate-50">
				<Pipette className="h-3.5 w-3.5" />
				직접 선택
				<input
					type="color"
					value={current ?? "#000000"}
					onChange={(e) => onPick(e.target.value)}
					className="h-4 w-4 cursor-pointer border-0 bg-transparent p-0"
				/>
			</label>
		</div>
	</div>
);

type ToolbarProps = {
	editor: Editor;
	onImageFile: () => void;
};

const Toolbar = ({ editor, onImageFile }: ToolbarProps) => {
	const rootRef = useRef<HTMLDivElement>(null);
	const [menu, setMenu] = useState<null | "block" | "color" | "highlight">(null);

	// 팝오버 바깥 클릭 시 닫기
	useEffect(() => {
		if (!menu) return;
		const onDown = (e: PointerEvent) => {
			if (rootRef.current && !rootRef.current.contains(e.target as Node)) setMenu(null);
		};
		document.addEventListener("pointerdown", onDown);
		return () => document.removeEventListener("pointerdown", onDown);
	}, [menu]);

	const currentColor = editor.getAttributes("textStyle").color as string | undefined;
	const currentHighlight = editor.getAttributes("highlight").color as string | undefined;

	const headingLevel = ([1, 2, 3, 4] as const).find((l) =>
		editor.isActive("heading", { level: l }),
	);
	const blockLabel = headingLevel ? `제목 ${headingLevel}` : "본문";

	const fontSizeRaw = editor.getAttributes("textStyle").fontSize as string | undefined;
	const fontSize = fontSizeRaw ? Number.parseInt(fontSizeRaw, 10) : 16;

	const applyBlock = (level: number) => {
		const chain = editor.chain().focus();
		if (level === 0) chain.setParagraph().run();
		else chain.setHeading({ level: level as 1 | 2 | 3 | 4 }).run();
		setMenu(null);
	};

	const applyFontSize = (px: number) => {
		const clamped = Math.min(96, Math.max(8, px));
		editor
			.chain()
			.focus()
			.setMark("textStyle", { fontSize: `${clamped}px` })
			.run();
	};

	const setLink = () => {
		const previous = editor.getAttributes("link").href as string | undefined;
		const url = window.prompt("링크 URL을 입력하세요", previous ?? "");
		if (url === null) return;
		if (url === "") {
			editor.chain().focus().extendMarkRange("link").unsetLink().run();
			return;
		}
		editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
	};

	const setImageUrl = () => {
		const url = window.prompt("이미지 URL을 입력하세요");
		if (!url) return;
		editor.chain().focus().setImage({ src: url }).run();
	};

	return (
		<div
			ref={rootRef}
			className="sticky top-0 z-20 flex flex-wrap items-center gap-0.5 border-slate-200 border-b bg-white/95 px-2 py-2 backdrop-blur-sm"
		>
			<ToolbarButton onClick={() => editor.chain().focus().undo().run()} label="실행 취소">
				<Undo2 className="h-4 w-4" />
			</ToolbarButton>
			<ToolbarButton onClick={() => editor.chain().focus().redo().run()} label="다시 실행">
				<Redo2 className="h-4 w-4" />
			</ToolbarButton>

			<Divider />

			{/* 단락 스타일 드롭다운 */}
			<div className="relative">
				<button
					type="button"
					onClick={() => setMenu(menu === "block" ? null : "block")}
					className="flex h-8 items-center gap-1 rounded-md px-2 font-semibold text-[13px] text-slate-700 transition-colors hover:bg-slate-100"
				>
					{blockLabel}
					<ChevronDown className="h-3.5 w-3.5 text-slate-400" />
				</button>
				{menu === "block" && (
					<div className="absolute top-full left-0 z-30 mt-1 w-32 rounded-lg border border-slate-200 bg-white py-1 shadow-[0_8px_24px_rgba(15,23,42,0.14)]">
						{BLOCK_STYLES.map((b) => (
							<button
								key={b.level}
								type="button"
								onClick={() => applyBlock(b.level)}
								className={cn(
									"block w-full px-3 py-1.5 text-left hover:bg-slate-50",
									b.className,
									blockLabel === b.label && "bg-[#fef2f2]",
								)}
							>
								{b.label}
							</button>
						))}
					</div>
				)}
			</div>

			<Divider />

			{/* 글자 크기 (px) */}
			<div className="flex items-center gap-0.5">
				<ToolbarButton onClick={() => applyFontSize(fontSize - 1)} label="글자 작게">
					<Minus className="h-4 w-4" />
				</ToolbarButton>
				<input
					value={fontSize}
					onChange={(e) => {
						const n = Number.parseInt(e.target.value, 10);
						if (!Number.isNaN(n)) applyFontSize(n);
					}}
					aria-label="글자 크기(px)"
					className="h-8 w-11 rounded-md border border-slate-200 text-center text-slate-700 text-sm outline-none focus:border-[#C8102E]"
					inputMode="numeric"
				/>
				<ToolbarButton onClick={() => applyFontSize(fontSize + 1)} label="글자 크게">
					<Plus className="h-4 w-4" />
				</ToolbarButton>
			</div>

			<Divider />

			<ToolbarButton
				onClick={() => editor.chain().focus().toggleBold().run()}
				active={editor.isActive("bold")}
				label="굵게"
			>
				<Bold className="h-4 w-4" />
			</ToolbarButton>
			<ToolbarButton
				onClick={() => editor.chain().focus().toggleItalic().run()}
				active={editor.isActive("italic")}
				label="기울임"
			>
				<Italic className="h-4 w-4" />
			</ToolbarButton>
			<ToolbarButton
				onClick={() => editor.chain().focus().toggleUnderline().run()}
				active={editor.isActive("underline")}
				label="밑줄"
			>
				<UnderlineIcon className="h-4 w-4" />
			</ToolbarButton>
			<ToolbarButton
				onClick={() => editor.chain().focus().toggleStrike().run()}
				active={editor.isActive("strike")}
				label="취소선"
			>
				<Strikethrough className="h-4 w-4" />
			</ToolbarButton>
			<ToolbarButton
				onClick={() => editor.chain().focus().toggleCode().run()}
				active={editor.isActive("code")}
				label="인라인 코드"
			>
				<Code className="h-4 w-4" />
			</ToolbarButton>

			<Divider />

			{/* 글자색 — 구글독스식 팔레트 */}
			<div className="relative">
				<button
					type="button"
					onClick={() => setMenu(menu === "color" ? null : "color")}
					aria-label="글자색"
					className="flex h-8 min-w-8 flex-col items-center justify-center rounded-md px-1.5 transition-colors hover:bg-slate-100"
				>
					<span className="font-bold text-[13px] text-slate-700 leading-none">가</span>
					<span
						className="mt-0.5 h-1 w-4 rounded"
						style={{ backgroundColor: currentColor ?? "#111111" }}
					/>
				</button>
				{menu === "color" && (
					<ColorPopover
						current={currentColor}
						onPick={(c) => {
							editor.chain().focus().setColor(c).run();
							setMenu(null);
						}}
						onReset={() => {
							editor.chain().focus().unsetColor().run();
							setMenu(null);
						}}
					/>
				)}
			</div>

			{/* 형광펜 — 팔레트 */}
			<div className="relative">
				<button
					type="button"
					onClick={() => setMenu(menu === "highlight" ? null : "highlight")}
					aria-label="형광펜"
					className="flex h-8 min-w-8 flex-col items-center justify-center rounded-md px-1.5 transition-colors hover:bg-slate-100"
				>
					<Highlighter className="h-4 w-4 text-slate-600" />
					<span
						className="mt-0.5 h-1 w-4 rounded"
						style={{ backgroundColor: currentHighlight ?? "#fff2cc" }}
					/>
				</button>
				{menu === "highlight" && (
					<ColorPopover
						current={currentHighlight}
						onPick={(c) => {
							editor.chain().focus().setHighlight({ color: c }).run();
							setMenu(null);
						}}
						onReset={() => {
							editor.chain().focus().unsetHighlight().run();
							setMenu(null);
						}}
					/>
				)}
			</div>

			<Divider />

			<ToolbarButton onClick={setLink} active={editor.isActive("link")} label="링크">
				<Link2 className="h-4 w-4" />
			</ToolbarButton>
			<ToolbarButton onClick={setImageUrl} label="이미지 URL">
				<ImageIcon className="h-4 w-4" />
			</ToolbarButton>
			<ToolbarButton onClick={onImageFile} label="이미지 파일 업로드">
				<ImageIcon className="h-4 w-4 opacity-60" />
			</ToolbarButton>

			<Divider />

			<ToolbarButton
				onClick={() => editor.chain().focus().toggleBlockquote().run()}
				active={editor.isActive("blockquote")}
				label="인용구"
			>
				<Quote className="h-4 w-4" />
			</ToolbarButton>
			<ToolbarButton
				onClick={() => editor.chain().focus().toggleBulletList().run()}
				active={editor.isActive("bulletList")}
				label="글머리 기호 목록"
			>
				<List className="h-4 w-4" />
			</ToolbarButton>
			<ToolbarButton
				onClick={() => editor.chain().focus().toggleOrderedList().run()}
				active={editor.isActive("orderedList")}
				label="번호 목록"
			>
				<ListOrdered className="h-4 w-4" />
			</ToolbarButton>
			<ToolbarButton
				onClick={() => editor.chain().focus().toggleCodeBlock().run()}
				active={editor.isActive("codeBlock")}
				label="코드 블록"
			>
				<Braces className="h-4 w-4" />
			</ToolbarButton>

			<Divider />

			<ToolbarButton
				onClick={() => editor.chain().focus().setTextAlign("left").run()}
				active={editor.isActive({ textAlign: "left" })}
				label="왼쪽 정렬"
			>
				<AlignLeft className="h-4 w-4" />
			</ToolbarButton>
			<ToolbarButton
				onClick={() => editor.chain().focus().setTextAlign("center").run()}
				active={editor.isActive({ textAlign: "center" })}
				label="가운데 정렬"
			>
				<AlignCenter className="h-4 w-4" />
			</ToolbarButton>
			<ToolbarButton
				onClick={() => editor.chain().focus().setTextAlign("right").run()}
				active={editor.isActive({ textAlign: "right" })}
				label="오른쪽 정렬"
			>
				<AlignRight className="h-4 w-4" />
			</ToolbarButton>

			<Divider />

			<ToolbarButton
				onClick={() => editor.chain().focus().setHorizontalRule().run()}
				label="구분선"
			>
				<Minus className="h-4 w-4" />
			</ToolbarButton>
			<ToolbarButton
				onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}
				label="서식 지우기"
			>
				<Eraser className="h-4 w-4" />
			</ToolbarButton>
		</div>
	);
};

export const CaseEditor = () => {
	const router = useRouter();
	// 임시저장을 마운트 시 1회만 읽어 초기값으로 사용 (lazy initializer — SSR-안전).
	const [initialDraft] = useState<Draft>(readDraft);

	const [title, setTitle] = useState(initialDraft.title);
	const [tags, setTags] = useState<string[]>(initialDraft.tags);
	const [tagInput, setTagInput] = useState("");
	const [doc, setDoc] = useState<JSONContent | null>(initialDraft.doc);
	// 커서/선택 변경 시 툴바 활성 상태·글자크기 표시를 갱신하기 위한 리렌더 트리거.
	const [, setSelTick] = useState(0);
	const [notice, setNotice] = useState("");
	const fileInputRef = useRef<HTMLInputElement>(null);

	const editor = useEditor({
		immediatelyRender: false,
		content: initialDraft.doc ?? undefined,
		extensions: buildExtensions("이야기를 입력하세요..."),
		editorProps: {
			attributes: { class: "case-preview min-h-full px-1 py-4 focus:outline-none" },
		},
		onUpdate: ({ editor: e }) => setDoc(e.getJSON()),
		onSelectionUpdate: () => setSelTick((t) => t + 1),
	});

	const previewEditor = useEditor({
		immediatelyRender: false,
		editable: false,
		extensions: buildExtensions(""),
		editorProps: { attributes: { class: "case-preview" } },
	});

	// 편집 → 미리보기 동기화 (dangerouslySetInnerHTML 금지 → setContent로 반영)
	useEffect(() => {
		if (previewEditor && doc) {
			previewEditor.commands.setContent(doc, { emitUpdate: false });
		}
	}, [previewEditor, doc]);

	const showNotice = (msg: string) => {
		setNotice(msg);
		window.setTimeout(() => setNotice(""), 2400);
	};

	const addTag = (raw: string) => {
		const next = raw.trim().replace(/,$/, "").trim();
		if (!next) return;
		setTags((prev) => (prev.includes(next) ? prev : [...prev, next]));
		setTagInput("");
	};

	const onTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter" || e.key === ",") {
			e.preventDefault();
			addTag(tagInput);
		} else if (e.key === "Backspace" && tagInput === "" && tags.length > 0) {
			setTags((prev) => prev.slice(0, -1));
		}
	};

	const removeTag = (tag: string) => setTags((prev) => prev.filter((t) => t !== tag));

	const onImageFile = () => fileInputRef.current?.click();

	const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file || !editor) return;
		const reader = new FileReader();
		reader.onload = () => {
			const src = reader.result;
			if (typeof src === "string") {
				editor.chain().focus().setImage({ src }).run();
			}
		};
		reader.readAsDataURL(file);
		e.target.value = "";
	};

	const saveDraft = () => {
		if (!editor) return;
		localStorage.setItem(DRAFT_KEY, JSON.stringify({ title, tags, doc: editor.getJSON() }));
		showNotice("임시저장됨");
	};

	const publishCase = () => {
		if (!editor) return;
		const payload = { title, tags, doc: editor.getJSON() };
		localStorage.setItem(PUBLISHED_KEY, JSON.stringify(payload));
		// TODO(Supabase): 여기서 blocks/runs로 직렬화 후 서버 API(/api/cases)로 전송
		showNotice("저장되었습니다. (DB 연동은 다음 단계)");
	};

	return (
		<div className="fixed inset-0 top-16 flex flex-col bg-white md:top-20">
			<div className="flex flex-1 flex-col overflow-hidden lg:flex-row">
				{/* LEFT — 작성 */}
				<div className="flex min-h-0 flex-1 flex-col border-slate-200 lg:w-1/2 lg:border-r">
					<div className="px-6 pt-6 md:px-10">
						<input
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							placeholder="제목을 입력하세요"
							className="w-full break-keep border-0 font-extrabold text-2xl text-[#111111] tracking-tight outline-none placeholder:text-slate-300 md:text-3xl"
						/>
						<div className="mt-3 h-1 w-12 rounded-full bg-[#C8102E]" />

						<div className="mt-4 flex flex-wrap items-center gap-2">
							{tags.map((tag) => (
								<button
									key={tag}
									type="button"
									onClick={() => removeTag(tag)}
									className="group inline-flex items-center gap-1 rounded-full bg-[#fef2f2] px-3 py-1 font-medium text-[#C8102E] text-sm transition-colors hover:bg-[#fde0e0]"
								>
									{tag}
									<span className="text-[#C8102E]/60 group-hover:text-[#C8102E]">×</span>
								</button>
							))}
							<input
								value={tagInput}
								onChange={(e) => setTagInput(e.target.value)}
								onKeyDown={onTagKeyDown}
								placeholder="태그를 입력하세요"
								className="min-w-40 flex-1 border-0 text-slate-700 text-sm outline-none placeholder:text-slate-400"
							/>
						</div>
					</div>

					{editor && <Toolbar editor={editor} onImageFile={onImageFile} />}

					<div className="min-h-0 flex-1 overflow-y-auto px-6 md:px-10">
						<EditorContent editor={editor} className="h-full" />
					</div>

					<input
						ref={fileInputRef}
						type="file"
						accept="image/*"
						onChange={onFileChange}
						className="hidden"
					/>
				</div>

				{/* RIGHT — 미리보기 */}
				<div className="hidden min-h-0 flex-1 overflow-y-auto bg-slate-50 px-6 py-8 md:px-10 lg:block lg:w-1/2">
					<div className="mx-auto max-w-2xl">
						<h1 className="break-keep font-extrabold text-[#111111] text-xl leading-snug tracking-tight md:text-2xl">
							{title || "제목을 입력하세요"}
						</h1>
						{tags.length > 0 && (
							<div className="mt-3 flex flex-wrap gap-2">
								{tags.map((tag) => (
									<span
										key={tag}
										className="rounded-full bg-[#fef2f2] px-3 py-1 font-medium text-[#C8102E] text-sm"
									>
										{tag}
									</span>
								))}
							</div>
						)}
						<div className="mt-6 border-slate-200 border-t pt-4">
							<EditorContent editor={previewEditor} />
						</div>
					</div>
				</div>
			</div>

			{/* Bottom bar */}
			<div className="flex items-center justify-between border-slate-200 border-t bg-white px-4 py-3 md:px-6">
				<button
					type="button"
					onClick={() => router.push("/cases")}
					className="inline-flex items-center gap-1.5 font-medium text-slate-600 text-sm transition-colors hover:text-[#111111]"
				>
					<ArrowLeft className="h-4 w-4" />
					나가기
				</button>

				<div className="flex items-center gap-3">
					{notice && <span className="text-slate-500 text-sm">{notice}</span>}
					<button
						type="button"
						onClick={saveDraft}
						className="font-medium text-slate-600 text-sm transition-colors hover:text-[#111111]"
					>
						임시저장
					</button>
					<button
						type="button"
						onClick={publishCase}
						className="rounded-full bg-[#12b886] px-5 py-2 font-bold text-sm text-white transition-colors hover:bg-[#0ca678]"
					>
						출간하기
					</button>
				</div>
			</div>
		</div>
	);
};
