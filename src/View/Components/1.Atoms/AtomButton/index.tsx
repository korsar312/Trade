import { Component } from "../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../CreateComponent.tsx";
import type { TComponent as IText } from "../../0.Cores/Text";
import type { TComponent as IImage } from "../../0.Cores/Image";
import type { TDeepCSSObject, TTagPartial } from "../../../ViewUtils.tsx";
import type { StyleInterface } from "../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";
import type { MouseEvent } from "react";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = {
	textVars?: TAtomButtonText;
	color?: EAtomButtonColor;
	isDisable?: boolean;
	extStyles?: TDeepCSSObject;
	icons?: Partial<Record<EAtomButtonIcon, TAtomButtonIcon>>;
	isFullWidth?: boolean;
	isFullHeight?: boolean;
	click?: (e: MouseEvent<HTMLButtonElement>) => void;
	round?: EAtomButtonRound;
} & TTagPartial<HTMLButtonElement, "type">;

export type EAtomButtonIcon = "left" | "right";
export type EAtomButtonRound = "square" | "round";

export type TAtomButtonGeneralGroup<T> = {
	groupStyle?: TDeepCSSObject;
	value: T[];
};

export type TAtomButtonText = TAtomButtonGeneralGroup<IText>;
export type TAtomButtonIcon = TAtomButtonGeneralGroup<IImage>;

export const buttonColor = {
	SECOND_1: "SECOND_1",
	MAIN_2: "MAIN_2",
	MAIN_3: "MAIN_3",
	MAIN_4: "MAIN_4",
	BLUE_1: "BLUE_1",
	BLUE_2: "BLUE_2",
	RED_1: "RED_1",
} satisfies { [K in StyleInterface.EColor]?: K };

export type EAtomButtonColor = keyof typeof buttonColor;

export default Component.Create(Model, Style, View, "AtomButton");
