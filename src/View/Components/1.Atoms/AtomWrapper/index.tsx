import { Component } from "../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../CreateComponent.tsx";
import type { ReactNode } from "react";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = {
	children: ReactNode;
	styleType: TAtomWrapperStyleType;
};

export type TAtomWrapperStyleType = "row" | "col";

export default Component.Create(Model, Style, View);
