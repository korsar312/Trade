import { Component } from "../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../CreateComponent.tsx";
import type { TDeepCSSObject, TTagPartial } from "../../../ViewUtils.tsx";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = {
	extStyles?: TDeepCSSObject;
} & TTagPartial<HTMLInputElement, "checked" | "onClick" | "disabled" | "name" | "type" | "value" | "defaultChecked" | "id">;

export default Component.Create(Model, Style, View);
