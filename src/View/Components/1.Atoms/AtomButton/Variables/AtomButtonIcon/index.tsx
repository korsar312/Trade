import { Component } from "../../../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../../../CreateComponent.tsx";
import type { TComponent as IParent } from "../../index";
import type { TImageComponent } from "../../../../0.Cores/Image";
import type { StyleInterface } from "../../../../../../Logic/Domain/Services/ServiceStyle/Style.interface.ts";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = {
	icon: TImageComponent;
	colorIcon?: StyleInterface.TColorChoice;
	isSubmit?: boolean;
	isBig?: boolean;
} & Pick<IParent, "isDisable" | "click" | "isFullWidth" | "type" | "color">;

export default Component.Create(Model, Style, View, "AtomButtonIcon");
