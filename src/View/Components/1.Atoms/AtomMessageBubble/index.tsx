import { Component } from "../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../CreateComponent.tsx";
import type { StyleInterface } from "../../../../Logic/Domain/Services/ServiceStyle/Style.interface.ts";
import type { MessageInterface } from "../../../../Logic/Domain/Services/ServiceMessage/Message.interface.ts";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = {
	type: TAtomMessageBubbleType;
	text: MessageInterface.EWordAll;
	date: number;
	color?: StyleInterface.EColor;
};

export type TAtomMessageBubbleType = "send" | "receive";

export default Component.Create(Model, Style, View, "AtomMessageBubble");
