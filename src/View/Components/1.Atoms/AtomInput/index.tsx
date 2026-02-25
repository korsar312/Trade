import { Component } from "../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../CreateComponent.tsx";
import type { TDeepCSSObject, TTagPartial } from "../../../ViewUtils.tsx";
import type { MessageInterface } from "../../../../Logic/Domain/Services/ServiceMessage/Message.interface.ts";
import type { StyleInterface } from "../../../../Logic/Domain/Services/ServiceStyle/Style.interface.ts";
import type { TComponent as IImage, TImageComponent } from "../../0.Cores/Image";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = {
	initText?: TAtomInputTextPick | MessageInterface.EWordAll;
	placeholder?: TAtomInputTextPick | MessageInterface.EWordAll;
	onChange?: (val: string) => void;
	iconsLeft?: TAtomInputIcon;
	iconsRight?: TAtomInputIcon;
	valid?: Array<(val: MessageInterface.EWordAll) => TValid>;
	value?: string;
	color?: StyleInterface.TColorChoice;
} & TTagPartial<HTMLInputElement, "name" | "onClick" | "type" | "disabled" | "required">;

type TValid = {
	isValid: boolean;
	error: MessageInterface.EWord;
};

export type TAtomInputText = {
	text: MessageInterface.EWordAll;
	font: StyleInterface.EFont;
	color?: StyleInterface.TColorChoice;
};

type TPick<T, F extends keyof T> = Omit<T, F> & Partial<Pick<T, F>>;
export type TAtomInputTextPick = TPick<TAtomInputText, "font">;

export type TAtomInputIcon = TAtomInputGeneralGroup | TImageComponent;

export type TAtomInputGeneralGroup = {
	groupStyle?: TDeepCSSObject;
	value: IImage[];
};

export default Component.Create(Model, Style, View, "AtomInput");
