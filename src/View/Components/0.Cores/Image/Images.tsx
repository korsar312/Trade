import type { FunctionComponent, SVGProps } from "react";

import ArrowDown from "@material-icons/svg/svg/keyboard_arrow_down/outline.svg?react";
import Gear from "@material-icons/svg/svg/settings/outline.svg?react";
import Money from "@material-icons/svg/svg/money/outline.svg?react";
import Plus from "@material-icons/svg/svg/plus/outline.svg?react";
import Minus from "@material-icons/svg/svg/minus/outline.svg?react";
import AddCard from "@material-icons/svg/svg/add_card/outline.svg?react";
import PlusSquare from "@material-icons/svg/svg/add_box/outline.svg?react";
import Sort from "@material-icons/svg/svg/sort/outline.svg?react";
import Refresh from "@material-icons/svg/svg/autorenew/outline.svg?react";
import Search from "@material-icons/svg/svg/search/outline.svg?react";
import Clear from "@material-icons/svg/svg/clear_all/outline.svg?react";
import Person from "@material-icons/svg/svg/person/outline.svg?react";
import Bag from "@material-icons/svg/svg/local_mall/outline.svg?react";
import Stats from "@material-icons/svg/svg/query_stats/outline.svg?react";
import Sell from "@material-icons/svg/svg/sell/outline.svg?react";
import Bug from "@material-icons/svg/svg/bug_report/outline.svg?react";

type TIcons = Record<string, FunctionComponent<SVGProps<SVGSVGElement>>>;

const icons = {
	ArrowDown,
	Gear,
	Money,
	Plus,
	Minus,
	AddCard,
	PlusSquare,
	Sort,
	Refresh,
	Search,
	Clear,
	Person,
	Bag,
	Stats,
	Sell,
	Bug,
} satisfies TIcons;

const Images = {
	...icons,
};

export type EImages = keyof typeof Images;

function getImage(image: EImages | string) {
	return (icons as any)[image] || undefined;
}

export default getImage;
