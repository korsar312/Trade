import { Component } from "../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../CreateComponent.tsx";
import type { TComponent as IBtn } from "../../2.Molecules/MoleculeGroupBtn";
import type { ReactNode } from "react";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = {
	btnRow: TSubstanceTabsBtn[];
	children: ReactNode;
};

export type TSubstanceTabsBtn = {
	id: string;
	options: IBtn;
};
export default Component.Create(Model, Style, View);
