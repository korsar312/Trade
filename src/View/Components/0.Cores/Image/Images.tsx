import type { FunctionComponent, SVGProps } from "react";

import Chat from "@material-icons/svg/svg/forum/outline.svg?react";
import Tune from "@material-icons/svg/svg/tune/outline.svg?react";
import Bug from "@material-icons/svg/svg/bug_report/outline.svg?react";
import Message from "@material-icons/svg/svg/mail/outline.svg?react";
import Key from "@material-icons/svg/svg/key/outline.svg?react";
import History from "@material-icons/svg/svg/schedule/outline.svg?react";
import Settings from "@material-icons/svg/svg/settings/outline.svg?react";
import ArrowRight from "@material-icons/svg/svg/east/outline.svg?react";
import Block from "@material-icons/svg/svg/block/outline.svg?react";
import Add from "@material-icons/svg/svg/add/outline.svg?react";
import Play from "@material-icons/svg/svg/play_arrow/outline.svg?react";
import Pending from "@material-icons/svg/svg/pending/outline.svg?react";
import Send from "@material-icons/svg/svg/send/outline.svg?react";
import Search from "@material-icons/svg/svg/search/outline.svg?react";

type TIcons = Record<string, FunctionComponent<SVGProps<SVGSVGElement>>>;

const icons = {
	Key,
	ArrowRight,
	History,
	Tune,
	Chat,
	Bug,
	Message,
	Settings,
	Block,
	Add,
	Play,
	Pending,
	Send,
	Search,
} satisfies TIcons;

const Images = {
	...icons,
};

export type EImages = keyof typeof Images;

function getImage(image: EImages | string) {
	return (icons as any)[image] || undefined;
}

export default getImage;
