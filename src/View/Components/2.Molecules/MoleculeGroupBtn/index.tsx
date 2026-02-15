import { Component } from "../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../CreateComponent.tsx";
import type { IComponent as IBtn } from "../../1.Atoms/AtomButton/Variables/AtomButtonMain";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = {
	btnRow: TMoleculeGroupBtn[];
};

export type TMoleculeGroupBtn = {
	id: string;
	options: Omit<IBtn, "color" | "isFullWidth">;
	isActive?: boolean;
};

export default Component.Create(Model, Style, View);
