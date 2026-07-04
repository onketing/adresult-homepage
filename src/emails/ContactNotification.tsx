import {
	Body,
	Button,
	Column,
	Container,
	Head,
	Hr,
	Html,
	Preview,
	Row,
	Section,
	Text,
} from "@react-email/components";

type ContactNotificationProps = {
	name: string;
	company: string;
	profession: string;
	tel: string;
	email: string;
	source: string;
	message: string;
	sentAt: string;
};

export const ContactNotification = ({
	name = "홍길동",
	company = "OO 한의원",
	profession = "한의사",
	tel = "010-1234-5678",
	email = "hong@example.com",
	source = "인스타그램",
	message = "블로그 마케팅 문의드립니다. 현재 네이버 블로그를 운영 중인데 상담 전환이 잘 안 되어서요.",
	sentAt = "2026년 5월 12일 오전 10:30",
}: ContactNotificationProps) => (
	<Html lang="ko">
		<Head />
		<Preview>
			{name}님 문의 · {company} · {profession || "직군 미선택"}
		</Preview>
		<Body style={body}>
			<Container style={container}>
				{/* 헤더 */}
				<Section style={header}>
					<Row>
						<Column>
							<Text style={eyebrow}>애드리절트 · 새 문의</Text>
							<Text style={title}>{name}님이 문의했습니다</Text>
							<Text style={date}>{sentAt}</Text>
						</Column>
						{profession ? (
							<Column align="right" style={{ verticalAlign: "middle" }}>
								<Text style={badge}>{profession}</Text>
							</Column>
						) : null}
					</Row>
				</Section>

				{/* 본문 */}
				<Section style={bodySection}>
					{/* 연락처 강조 박스 */}
					<Section style={contactBox}>
						<Text style={contactLabel}>연락처</Text>
						<Text style={contactName}>{name}</Text>
						<Text style={contactTel}>{tel}</Text>
						{email ? <Text style={contactEmail}>{email}</Text> : null}
					</Section>

					{/* 상세 정보 */}
					<Row style={detailRow}>
						<Column style={labelCol}>소속</Column>
						<Column style={valueCol}>{company || "—"}</Column>
					</Row>
					<Hr style={divider} />
					<Row style={detailRow}>
						<Column style={labelCol}>직군</Column>
						<Column style={valueCol}>
							{profession ? <Text style={professionChip}>{profession}</Text> : "—"}
						</Column>
					</Row>
					<Hr style={divider} />
					<Row style={detailRow}>
						<Column style={labelCol}>유입</Column>
						<Column style={valueCol}>{source || "—"}</Column>
					</Row>

					{/* 문의 내용 */}
					{message ? (
						<Section style={messageBlock}>
							<Text style={messageLabel}>문의 내용</Text>
							<Text style={messageText}>{message}</Text>
						</Section>
					) : null}
				</Section>

				{/* CTA 버튼 */}
				<Section style={ctaSection}>
					<Row>
						<Column style={{ paddingRight: 6 }}>
							<Button href={`tel:${tel}`} style={primaryBtn}>
								📞 전화하기
							</Button>
						</Column>
						{email ? (
							<Column style={{ paddingLeft: 6 }}>
								<Button href={`mailto:${email}`} style={secondaryBtn}>
									✉️ 이메일 답장
								</Button>
							</Column>
						) : null}
					</Row>
				</Section>

				{/* 푸터 */}
				<Section style={footer}>
					<Text style={footerText}>
						애드리절트 · onketing.kr
						<br />
						영업일 1일 내 회신 · 이 메일은 자동 발송됩니다
					</Text>
				</Section>
			</Container>
		</Body>
	</Html>
);

/* ── 스타일 ── */

const body: React.CSSProperties = {
	margin: 0,
	padding: 0,
	background: "#f8fafc",
	fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",
};

const container: React.CSSProperties = {
	maxWidth: 600,
	margin: "40px auto",
	padding: "0 16px",
};

const header: React.CSSProperties = {
	background: "linear-gradient(135deg,#ef3c39 0%,#e11d29 55%,#b3121e 100%)",
	borderRadius: "16px 16px 0 0",
	padding: "32px 36px 28px",
};

const eyebrow: React.CSSProperties = {
	margin: "0 0 8px",
	fontSize: 10,
	color: "rgba(255,255,255,0.6)",
	fontWeight: 700,
	textTransform: "uppercase",
	letterSpacing: "0.18em",
};

const title: React.CSSProperties = {
	margin: "0 0 6px",
	fontSize: 22,
	fontWeight: 700,
	color: "#fff",
	letterSpacing: "-0.02em",
	lineHeight: "1.25",
};

const date: React.CSSProperties = {
	margin: 0,
	fontSize: 12,
	color: "rgba(255,255,255,0.6)",
};

const badge: React.CSSProperties = {
	display: "inline-block",
	background: "rgba(255,255,255,0.18)",
	border: "1px solid rgba(255,255,255,0.3)",
	borderRadius: 100,
	padding: "5px 14px",
	fontSize: 12,
	fontWeight: 700,
	color: "#fff",
	whiteSpace: "nowrap",
	margin: 0,
};

const bodySection: React.CSSProperties = {
	background: "#fff",
	padding: "32px 36px 0",
};

const contactBox: React.CSSProperties = {
	background: "#faf8ff",
	border: "1.5px solid #e9d5ff",
	borderRadius: 12,
	padding: "22px 24px",
	marginBottom: 28,
};

const contactLabel: React.CSSProperties = {
	margin: "0 0 10px",
	fontSize: 10,
	color: "#ef3c39",
	fontWeight: 700,
	textTransform: "uppercase",
	letterSpacing: "0.14em",
};

const contactName: React.CSSProperties = {
	margin: "0 0 5px",
	fontSize: 22,
	fontWeight: 700,
	color: "#0f172a",
	letterSpacing: "-0.02em",
};

const contactTel: React.CSSProperties = {
	margin: 0,
	fontSize: 17,
	fontWeight: 700,
	color: "#e11d29",
	letterSpacing: "0.01em",
};

const contactEmail: React.CSSProperties = {
	margin: "3px 0 0",
	fontSize: 13,
	color: "#64748b",
};

const detailRow: React.CSSProperties = {
	borderTop: "1px solid #f1f5f9",
};

const labelCol: React.CSSProperties = {
	width: 72,
	paddingTop: 13,
	paddingBottom: 13,
	fontSize: 11,
	color: "#94a3b8",
	fontWeight: 700,
	textTransform: "uppercase",
	letterSpacing: "0.1em",
	verticalAlign: "top",
};

const valueCol: React.CSSProperties = {
	paddingTop: 13,
	paddingBottom: 13,
	paddingLeft: 16,
	fontSize: 14,
	color: "#0f172a",
	fontWeight: 500,
};

const professionChip: React.CSSProperties = {
	display: "inline-block",
	background: "#f1f5f9",
	borderRadius: 6,
	padding: "3px 10px",
	fontSize: 13,
	fontWeight: 600,
	color: "#334155",
	margin: 0,
};

const divider: React.CSSProperties = {
	margin: 0,
	borderColor: "#f1f5f9",
};

const messageBlock: React.CSSProperties = {
	marginTop: 24,
	background: "#f8fafc",
	borderLeft: "3px solid #ef3c39",
	borderRadius: "0 10px 10px 0",
	padding: "18px 20px",
};

const messageLabel: React.CSSProperties = {
	margin: "0 0 10px",
	fontSize: 10,
	color: "#ef3c39",
	fontWeight: 700,
	textTransform: "uppercase",
	letterSpacing: "0.14em",
};

const messageText: React.CSSProperties = {
	margin: 0,
	fontSize: 14,
	color: "#334155",
	lineHeight: "1.8",
	whiteSpace: "pre-wrap",
};

const ctaSection: React.CSSProperties = {
	background: "#fff",
	padding: "28px 36px 32px",
};

const primaryBtn: React.CSSProperties = {
	display: "block",
	textAlign: "center",
	background: "#0a0a0a",
	color: "#fff",
	textDecoration: "none",
	fontSize: 14,
	fontWeight: 700,
	padding: "14px 12px",
	borderRadius: 10,
	width: "100%",
	boxSizing: "border-box",
};

const secondaryBtn: React.CSSProperties = {
	display: "block",
	textAlign: "center",
	background: "#fff",
	color: "#0f172a",
	textDecoration: "none",
	fontSize: 14,
	fontWeight: 700,
	padding: "14px 12px",
	borderRadius: 10,
	border: "1.5px solid #e2e8f0",
	width: "100%",
	boxSizing: "border-box",
};

const footer: React.CSSProperties = {
	background: "#f8fafc",
	borderRadius: "0 0 16px 16px",
	padding: "18px 36px",
	borderTop: "1px solid #e2e8f0",
};

const footerText: React.CSSProperties = {
	margin: 0,
	fontSize: 11,
	color: "#94a3b8",
	textAlign: "center",
	lineHeight: "1.7",
};
