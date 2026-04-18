import { Component } from "../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../CreateComponent.tsx";
import type { TComponent as IMessage } from "../../1.Atoms/AtomMessageBubble";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = {
	textRow: TMoleculeChatFieldText[];
};

export type TMoleculeChatFieldText = Pick<IMessage, "text" | "type" | "date">;

export default Component.Create(Model, Style, View, "MoleculeChatField");
