import { Component } from "../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../CreateComponent.tsx";
import type { TComponent as IItem } from "../../3.Substances/SubstanceItemCard";
import type { TComponent as IControl } from "../../2.Molecules/MoleculeRowControl";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = {
	filterList: (IControl & TId)[];
	itemList: (IItem & TId)[];
};

type TId = {
	id: string;
};

export default Component.Create(Model, Style, View, "StructuresCatalog");
