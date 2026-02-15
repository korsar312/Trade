import { Component } from "../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../CreateComponent.tsx";
import type { StyleInterface } from "../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = {
	isVert?: boolean;
	color?: StyleInterface.TColorChoice;
};

export default Component.Create(Model, Style, View, "AtomLine");
