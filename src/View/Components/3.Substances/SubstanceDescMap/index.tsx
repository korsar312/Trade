import { Component } from "../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../CreateComponent.tsx";
import type { TComponent as IControl } from "../../2.Molecules/MoleculeRowControl";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = {
	rows: TSubstanceDescMapRow[];
	noCompact?: boolean;
};

export type TSubstanceDescMapRow = {
	id: string;
	key?: IControl;
	type?: TSubstanceDescMapRowType;
	value?: IControl;
};

export type TSubstanceDescMapRowType = "vert" | "hor";

export default Component.Create(Model, Style, View, "SubstanceDescMap");
