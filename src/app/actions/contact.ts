"use server";

import { render } from "@react-email/render";
import { createClient } from "@supabase/supabase-js";
import { createElement } from "react";
import { Resend } from "resend";
import { ContactNotification } from "@/emails/ContactNotification";

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
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

export async function submitContact(data: ContactData) {
	const { error: dbError } = await supabase.from("contact_submissions").insert(data);
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

		const recipients = (process.env.NOTIFICATION_EMAILS ?? "growthwave.3kim@gmail.com")
			.split(",")
			.map((e) => e.trim())
			.filter(Boolean);

		await resend.emails.send({
			from: "온케팅 <noreply@onketing.kr>",
			to: recipients,
			subject: `[문의] ${data.name} · ${data.company} · ${data.profession || "직군 미선택"}`,
			html,
		});
	} catch {
		// 이메일 전송 실패는 무시 — DB 저장이 완료됐으므로 사용자에게는 성공 처리
	}
}
