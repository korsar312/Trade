import { Component } from "../../../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../../../CreateComponent.tsx";
import type { TComponent as IParent } from "../../index";
import type { TImageComponent } from "../../../../0.Cores/Image";
import type { MessageInterface } from "../../../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = {
	text?: MessageInterface.EWordAll;
	leftImage?: TImageComponent;
	rightImage?: TImageComponent;
} & Pick<IParent, "isDisable" | "click" | "color" | "isFullWidth" | "round" | "type">;

export default Component.Create(Model, Style, View, "AtomButtonMain");
