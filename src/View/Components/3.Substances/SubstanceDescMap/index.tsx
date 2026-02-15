import { Component } from "../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../CreateComponent.tsx";
import type { TComponent as IText } from "../../0.Cores/Text";
import type { TComponent as IControl } from "../../2.Molecules/MoleculeRowControl";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = {
	rows: TSubstanceDescMapRow[];
};

export type TSubstanceDescMapRow = {
	id: string;
	key: IText;
	type?: TSubstanceDescMapRowType;
	value: IControl;
};

export type TSubstanceDescMapRowType = "vert" | "hor";

export default Component.Create(Model, Style, View, "SubstanceDescMap");
