import { Component } from "../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../CreateComponent.tsx";
import type { StyleInterface } from "../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";
import type { TDeepCSSObject, TTagPartial } from "../../../ViewUtils.tsx";
import type { ReactNode } from "react";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = {
	color?: StyleInterface.TColorChoice;
	children?: ReactNode;
	extStyle?: TDeepCSSObject;
	isFull?: boolean;
} & TTagPartial<HTMLDivElement, "onClick">;

export default Component.Create(Model, Style, View);
