import { Component } from "../../../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../../../CreateComponent.tsx";
import type { TComponent as IParent } from "../../index";
import type { TComponent as IText } from "../../../../0.Cores/Text";
import type { TComponent as IBtn } from "../../../../1.Atoms/AtomButton/Variables/AtomButtonMain";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = {
	form?: Omit<IParent["form"], "onSubmit">;
	title: IText;
	choiceList: TMoleculeFormSchemaChoice[];
	btn: Omit<IBtn, "type">;
	submit: (val: TSchemaSwitch) => void;
};

export type TSchemaSwitch = Record<string, "on">;

type TMoleculeFormSchemaChoice = {
	name: string;
	title: Omit<IText, "label">;
};

export default Component.Create(Model, Style, View, "MoleculeFormSchemaSwitchChoice");
