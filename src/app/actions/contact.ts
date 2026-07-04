"use server";

import { render } from "@react-email/render";
import { createClient } from "@supabase/supabase-js";
import { createElement } from "react";
import { Resend } from "resend";
import { ContactNotification } from "@/emails/ContactNotification";

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
	process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
);

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactData = {
	company: string;
	profession: string;
	name: string;
	tel: string;
	email: string;
	source: string;
	message: string;
};

const nullIfEmpty = (v: string) => v.trim() || null;

export async function submitContact(data: ContactData) {
	const row = {
		company: data.company.trim() || "",
		name: data.name.trim(),
		tel: data.tel.trim(),
		profession: nullIfEmpty(data.profession),
		email: nullIfEmpty(data.email),
		source: nullIfEmpty(data.source),
		message: nullIfEmpty(data.message),
	};

	const { error: dbError } = await supabase.from("contact_submissions").insert(row);
	if (dbError) throw new Error(dbError.message);

	// 이메일 실패해도 제출 성공 처리 (env var 미설정 등 환경 문제 대비)
	try {
		const sentAt = new Date().toLocaleDateString("ko-KR", {
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		});

		const html = await render(createElement(ContactNotification, { ...data, sentAt }));

		const recipients = (process.env.NOTIFICATION_EMAILS ?? "onketing.3kim@gmail.com")
			.split(",")
			.map((e) => e.trim())
			.filter(Boolean);

		await resend.emails.send({
			from: "애드리절트 <noreply@onketing.kr>",
			to: recipients,
			subject: `[문의] ${data.name} · ${data.company} · ${data.profession || "직군 미선택"}`,
			html,
		});
	} catch {
		// 이메일 전송 실패는 무시 — DB 저장이 완료됐으므로 사용자에게는 성공 처리
	}
}
