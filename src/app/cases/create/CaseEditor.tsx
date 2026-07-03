"use client";

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
	Code,
	Eraser,
	Highlighter,
	ImageIcon,
	Italic,
	Link2,
	List,
	ListOrdered,
	Minus,
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

const COLOR_SWATCHES = [
	{ label: "기본", value: null },
	{ label: "브랜드 레드", value: "#e11d29" },
	{ label: "레드", value: "#ff0000" },
	{ label: "블루", value: "#0b5394" },
	{ label: "다크", value: "#111827" },
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
	Highlight,
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
			active ? "bg-[#fef2f2] text-[#e11d29]" : "text-slate-600",
		)}
	>
		{children}
	</button>
);

const Divider = () => <span className="mx-1 h-5 w-px shrink-0 bg-slate-200" />;

type ToolbarProps = {
	editor: Editor;
	onImageFile: () => void;
};

const Toolbar = ({ editor, onImageFile }: ToolbarProps) => {
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
		<div className="sticky top-0 z-20 flex flex-wrap items-center gap-0.5 border-slate-200 border-b bg-white/95 px-2 py-2 backdrop-blur-sm">
			<ToolbarButton onClick={() => editor.chain().focus().undo().run()} label="실행 취소">
				<Undo2 className="h-4 w-4" />
			</ToolbarButton>
			<ToolbarButton onClick={() => editor.chain().focus().redo().run()} label="다시 실행">
				<Redo2 className="h-4 w-4" />
			</ToolbarButton>

			<Divider />

			<ToolbarButton
				onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
				active={editor.isActive("heading", { level: 1 })}
				label="제목 1"
			>
				H1
			</ToolbarButton>
			<ToolbarButton
				onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
				active={editor.isActive("heading", { level: 2 })}
				label="제목 2"
			>
				H2
			</ToolbarButton>
			<ToolbarButton
				onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
				active={editor.isActive("heading", { level: 3 })}
				label="제목 3"
			>
				H3
			</ToolbarButton>
			<ToolbarButton
				onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
				active={editor.isActive("heading", { level: 4 })}
				label="제목 4"
			>
				H4
			</ToolbarButton>

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

			<Divider />

			<ToolbarButton
				onClick={() => editor.chain().focus().toggleCode().run()}
				active={editor.isActive("code")}
				label="인라인 코드"
			>
				<Code className="h-4 w-4" />
			</ToolbarButton>
			<ToolbarButton
				onClick={() => editor.chain().focus().toggleCodeBlock().run()}
				active={editor.isActive("codeBlock")}
				label="코드 블록"
			>
				<Braces className="h-4 w-4" />
			</ToolbarButton>

			<Divider />

			{COLOR_SWATCHES.map((swatch) =>
				swatch.value === null ? (
					<ToolbarButton
						key="color-reset"
						onClick={() => editor.chain().focus().unsetColor().run()}
						label="글자색 초기화"
					>
						<span className="h-4 w-4 rounded-full border border-slate-300 bg-white" />
					</ToolbarButton>
				) : (
					<ToolbarButton
						key={swatch.value}
						onClick={() => editor.chain().focus().setColor(swatch.value).run()}
						active={editor.isActive("textStyle", { color: swatch.value })}
						label={`글자색 ${swatch.label}`}
					>
						<span
							className="h-4 w-4 rounded-full border border-black/10"
							style={{ backgroundColor: swatch.value }}
						/>
					</ToolbarButton>
				),
			)}
			<ToolbarButton
				onClick={() => editor.chain().focus().toggleHighlight().run()}
				active={editor.isActive("highlight")}
				label="형광펜"
			>
				<Highlighter className="h-4 w-4" />
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

			<ToolbarButton onClick={setLink} active={editor.isActive("link")} label="링크">
				<Link2 className="h-4 w-4" />
			</ToolbarButton>
			<ToolbarButton onClick={setImageUrl} label="이미지 URL">
				<ImageIcon className="h-4 w-4" />
			</ToolbarButton>
			<ToolbarButton onClick={onImageFile} label="이미지 파일 업로드">
				<ImageIcon className="h-4 w-4 opacity-60" />
			</ToolbarButton>
			<ToolbarButton
				onClick={() => editor.chain().focus().setHorizontalRule().run()}
				label="구분선"
			>
				<Minus className="h-4 w-4" />
			</ToolbarButton>

			<Divider />

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
							className="w-full break-keep border-0 font-extrabold text-2xl text-[#0a0a0a] tracking-tight outline-none placeholder:text-slate-300 md:text-3xl"
						/>
						<div className="mt-3 h-1 w-12 rounded-full bg-[#e11d29]" />

						<div className="mt-4 flex flex-wrap items-center gap-2">
							{tags.map((tag) => (
								<button
									key={tag}
									type="button"
									onClick={() => removeTag(tag)}
									className="group inline-flex items-center gap-1 rounded-full bg-[#fef2f2] px-3 py-1 font-medium text-[#e11d29] text-sm transition-colors hover:bg-[#fde0e0]"
								>
									{tag}
									<span className="text-[#e11d29]/60 group-hover:text-[#e11d29]">×</span>
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
						<h1 className="break-keep font-extrabold text-[#0a0a0a] text-xl leading-snug tracking-tight md:text-2xl">
							{title || "제목을 입력하세요"}
						</h1>
						{tags.length > 0 && (
							<div className="mt-3 flex flex-wrap gap-2">
								{tags.map((tag) => (
									<span
										key={tag}
										className="rounded-full bg-[#fef2f2] px-3 py-1 font-medium text-[#e11d29] text-sm"
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
					className="inline-flex items-center gap-1.5 font-medium text-slate-600 text-sm transition-colors hover:text-[#0a0a0a]"
				>
					<ArrowLeft className="h-4 w-4" />
					나가기
				</button>

				<div className="flex items-center gap-3">
					{notice && <span className="text-slate-500 text-sm">{notice}</span>}
					<button
						type="button"
						onClick={saveDraft}
						className="font-medium text-slate-600 text-sm transition-colors hover:text-[#0a0a0a]"
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
