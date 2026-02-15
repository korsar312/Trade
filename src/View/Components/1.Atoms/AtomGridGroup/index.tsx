import { Component } from "../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../CreateComponent.tsx";
import type { ReactElement } from "react";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = {
	children: ReactElement | ReactElement[];
};

export default Component.Create(Model, Style, View);
