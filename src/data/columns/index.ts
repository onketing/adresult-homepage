import { POSTS as ADLAW } from "./adlaw";
import { POSTS as AIO } from "./aio";
import { POSTS as BLOG } from "./blog";
import { POSTS as CAFE } from "./cafe";
import { POSTS as DENTAL } from "./dental";
import { POSTS as DERMA } from "./derma";
import { POSTS as MAPO1 } from "./mapo1";
import { POSTS as MAPO2 } from "./mapo2";
import { POSTS as MAPO3 } from "./mapo3";
import { POSTS as ORIENTAL } from "./oriental";
import { POSTS as ORTHO } from "./ortho";
import { POSTS as PLASTIC } from "./plastic";
import { POSTS as REPUTATION } from "./reputation";
import { POSTS as SHORTFORM } from "./shortform";
import type { ColumnCategory, ColumnPost } from "./types";

export type { ColumnCategory, ColumnPost, ColumnSection } from "./types";

export const COLUMN_CATEGORIES: ColumnCategory[] = [
	"병원 AIO",
	"병원 숏폼",
	"피부과 마케팅",
	"성형외과 마케팅",
	"정형외과 마케팅",
	"치과 마케팅",
	"한의원 마케팅",
	"병원 블로그",
	"카페바이럴",
	"병원 평판관리",
	"의료광고법",
	"애드리절트 소식",
];

export const COLUMN_POSTS: ColumnPost[] = [
	...AIO,
	...SHORTFORM,
	...DERMA,
	...PLASTIC,
	...ORTHO,
	...DENTAL,
	...ORIENTAL,
	...BLOG,
	...CAFE,
	...REPUTATION,
	...ADLAW,
	...MAPO1,
	...MAPO2,
	...MAPO3,
].sort((a, b) => b.date.localeCompare(a.date));

export const COLUMN_SLUGS = COLUMN_POSTS.map((p) => p.slug);

export const getColumn = (slug: string) => COLUMN_POSTS.find((p) => p.slug === slug);
