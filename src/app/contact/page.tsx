import type { Metadata } from "next";
import { ContactHero } from "@/components/sections/ContactHero";
import { ContactSplit } from "@/components/sections/ContactSplit";

export const metadata: Metadata = {
	title: "마케팅 컨설팅 | Onketing",
	description: "온케팅에 전문직 마케팅을 문의하세요. 영업일 1일 내 회신드립니다.",
};

export const ContactPage = () => {
	return (
		<>
			<ContactHero />
			<ContactSplit />
		</>
	);
};

export default ContactPage;
