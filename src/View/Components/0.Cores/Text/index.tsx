import { Component } from "../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../CreateComponent.tsx";
import type { MessageInterface } from "../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";
import type { StyleInterface } from "../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";
import type { TDeepCSSObject } from "../../../ViewUtils.tsx";
import type { CSSObject } from "@emotion/react";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = {
	text: MessageInterface.EWordAll;
	caseWord?: MessageInterface.ECase;
	font?: StyleInterface.EFont;
	color?: StyleInterface.TColorChoice;
	pos?: TTextPos;
	opacity?: number;
	extStyle?: TDeepCSSObject;
	addContent?: MessageInterface.EWordAll[];
	addStyle?: CSSObject[];
	label?: TLabelPick;
};

type TLabelPick = Pick<HTMLLabelElement, "htmlFor">;
export type TTextPos = "left" | "right" | "center";

export default Component.Create(Model, Style, View);
