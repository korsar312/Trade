import { Component } from "../../../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../../../CreateComponent.tsx";
import type { TComponent as IParent } from "../../index";
import type { TComponent as IInput } from "../../../../../Components/1.Atoms/AtomInput/";
import type { TComponent as IText } from "../../../../0.Cores/Text";
import type { TComponent as IBtn } from "../../../../1.Atoms/AtomButton/Variables/AtomButtonMain";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = {
	form?: Omit<IParent["form"], "onSubmit">;
	title: IText;
	input?: Omit<IInput, "name">;
	btn?: Omit<IBtn, "type">;
	submit?: (val: TSchemaInput) => void;
};

export type TSchemaInput = { input: string };

export default Component.Create(Model, Style, View, "MoleculeFormSchemaRadioChoice");
