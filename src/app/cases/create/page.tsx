import type { Metadata } from "next";
import { CaseEditorGate } from "./CaseEditorGate";

export const metadata: Metadata = {
	title: "글쓰기 | 애드리절트(ADRESULT)",
	robots: { index: false, follow: false },
};

export const CaseCreatePage = () => <CaseEditorGate />;

export default CaseCreatePage;
