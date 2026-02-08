import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { TTagPartial } from "../../../ViewUtils.tsx";
import type { MessageInterface } from "../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";
import type { StyleInterface } from "../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";
import type { TAtomInputTextPick } from "../AtomInput";

export interface IComponent extends TTagPartial<HTMLTextAreaElement, "name" | "onClick" | "disabled" | "required"> {
	initText?: TAtomTextareaTextPick | MessageInterface.EWordAll;
	placeholder?: TAtomInputTextPick | MessageInterface.EWordAll;
	onChange?: (val: string) => void;
	valid?: Array<(val: MessageInterface.EWordAll) => boolean>;
	value?: string;
	color?: StyleInterface.TColorChoice;
}

export type TAtomTextareaText = {
	text: MessageInterface.EWordAll;
	font: StyleInterface.EFont;
	color?: StyleInterface.TColorChoice;
};

type TPick<T, F extends keyof T> = Omit<T, F> & Partial<Pick<T, F>>;
export type TAtomTextareaTextPick = TPick<TAtomTextareaText, "font">;

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
