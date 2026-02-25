import { Component } from "../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../CreateComponent.tsx";
import type { TTagPartial } from "../../../ViewUtils.tsx";
import type { MessageInterface } from "../../../../Logic/Domain/Services/ServiceMessage/Message.interface.ts";
import type { StyleInterface } from "../../../../Logic/Domain/Services/ServiceStyle/Style.interface.ts";
import type { TAtomInputTextPick } from "../AtomInput";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = {
	initText?: TAtomTextareaTextPick | MessageInterface.EWordAll;
	placeholder?: TAtomInputTextPick | MessageInterface.EWordAll;
	onChange?: (val: string) => void;
	valid?: Array<(val: MessageInterface.EWordAll) => boolean>;
	value?: string;
	color?: StyleInterface.TColorChoice;
} & TTagPartial<HTMLTextAreaElement, "name" | "onClick" | "disabled" | "required">;

export type TAtomTextareaText = {
	text: MessageInterface.EWordAll;
	font: StyleInterface.EFont;
	color?: StyleInterface.TColorChoice;
};

type TPick<T, F extends keyof T> = Omit<T, F> & Partial<Pick<T, F>>;
export type TAtomTextareaTextPick = TPick<TAtomTextareaText, "font">;

export default Component.Create(Model, Style, View, "AtomTextarea");
