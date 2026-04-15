import { Component } from "../../../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../../../CreateComponent.tsx";
import type { TComponent as IParent } from "../../index";
import type { TComponent as IText } from "../../../../0.Cores/Text";
import type { TImageComponent } from "../../../../0.Cores/Image";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = {
	icon?: TImageComponent;
} & Pick<IParent, "isDisable" | "click" | "type"> &
	Partial<IText>;

export default Component.Create(Model, Style, View, "AtomButtonString");
