import type { FunctionComponent, SVGProps } from "react";

import ArrowDown from "@material-design-icons/svg/outlined/keyboard_arrow_down.svg?react";
import Gear from "@material-design-icons/svg/outlined/settings.svg?react";
import Money from "@material-design-icons/svg/outlined/money.svg?react";
import Plus from "@material-design-icons/svg/outlined/money.svg?react";
import Minus from "@material-design-icons/svg/outlined/money.svg?react";
import AddCard from "@material-design-icons/svg/outlined/add_card.svg?react";
import PlusSquare from "@material-design-icons/svg/outlined/add_box.svg?react";
import Sort from "@material-design-icons/svg/outlined/sort.svg?react";
import Refresh from "@material-design-icons/svg/outlined/autorenew.svg?react";
import Search from "@material-design-icons/svg/outlined/search.svg?react";
import Clear from "@material-design-icons/svg/outlined/clear_all.svg?react";
import Person from "@material-design-icons/svg/outlined/person.svg?react";
import Store from "@material-design-icons/svg/outlined/store.svg?react";
import Stats from "@material-design-icons/svg/outlined/query_stats.svg?react";
import Sell from "@material-design-icons/svg/outlined/sell.svg?react";
import Bug from "@material-design-icons/svg/outlined/bug_report.svg?react";
import Info from "@material-design-icons/svg/outlined/info.svg?react";
import CheckList from "@material-design-icons/svg/outlined/checklist.svg?react";
import Star from "@material-design-icons/svg/outlined/star.svg?react";
import Pause from "@material-design-icons/svg/outlined/pause.svg?react";
import Play from "@material-design-icons/svg/outlined/play_arrow.svg?react";
import Stop from "@material-design-icons/svg/outlined/stop.svg?react";
import Remove from "@material-design-icons/svg/outlined/delete.svg?react";

type TIcons = Record<string, FunctionComponent<SVGProps<SVGSVGElement>>>;
export type EImages = keyof typeof icons;

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
	Store,
	Stats,
	Sell,
	Bug,
	Info,
	CheckList,
	Star,
	Pause,
	Play,
	Stop,
	Remove,
} satisfies TIcons;

function getImage(image: EImages | string) {
	return (icons as any)[image] || undefined;
}

export default getImage;
