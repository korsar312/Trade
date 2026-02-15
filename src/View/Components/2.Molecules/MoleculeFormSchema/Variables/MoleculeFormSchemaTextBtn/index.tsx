import { Component } from "../../../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../../../CreateComponent.tsx";
import type { TComponent as IParent } from "../../index";
import type { TComponent as IText } from "../../../../0.Cores/Text";
import type { TComponent as IInput } from "../../../../1.Atoms/AtomInput";
import type { TComponent as IImg } from "../../../../0.Cores/Image";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = {
	form?: Omit<IParent["form"], "onSubmit">;
	title: IText;
	labelTitle: Omit<IInput, "name">;
	labelSubtitle: Omit<IInput, "name">;
	find: Omit<IInput, "type" | "name" | "onChange">;
	choiceList: TMoleculeFormSchemaChoice[];
	submit?: (val: TSchemaTextBtn) => void;
};

type TMoleculeFormSchemaChoice = {
	name: string;
	title: Omit<IText, "label">;
	img?: IImg;
};

export type TSchemaTextBtn = { title: string; subtitle: string; radio: string };

export default Component.Create(Model, Style, View, "MoleculeFormSchemaTextBtn");
