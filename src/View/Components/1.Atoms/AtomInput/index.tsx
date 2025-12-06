import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { TDeepCSSObject, TTagPartial } from "../../../ViewUtils.tsx";
import type { MessageInterface } from "../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";
import type { StyleInterface } from "../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";
import type { IComponent as IImage, TImageComponent } from "../../0.Cores/Image";

export interface IComponent extends TTagPartial<HTMLInputElement, "name" | "onClick" | "type" | "disabled"> {
	initText: TAtomInputTextPick | MessageInterface.EWordAll;
	placeholder?: TAtomInputTextPick | MessageInterface.EWordAll;
	onChange?: (val: MessageInterface.EWordAll) => void;
	iconsLeft?: TAtomInputIcon;
	iconsRight?: TAtomInputIcon;
	valid?: Array<(val: MessageInterface.EWordAll) => boolean>;
}

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

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
