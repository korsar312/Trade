import { Component } from "../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../CreateComponent.tsx";
import type { TSubstanceTabsBtn } from "../../3.Substances/SubstanceTabs";
import type { typesUtils } from "../../../../Logic/Libs/Util/TypesUtils.ts";
import type { TComponent as ICard } from "../../3.Substances/SubstanceItemCard";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = {
	tabs: TSubstanceTabsBtn[];
	children: TStructuresTabCardCompType[];
};

export type TStructuresTabCardCompType = typesUtils.OptionsUnion<TMap, { id: string }>;

type TMap = {
	ITEM_CARD: ICard;
};

export default Component.Create(Model, Style, View);
