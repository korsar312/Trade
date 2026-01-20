import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { IComponent as IButtonIcon } from "../../1.Atoms/AtomButton/Variables/AtomButtonIcon";
import type { IComponent as IButton } from "../../1.Atoms/AtomButton/Variables/AtomButtonMain";
import type { IComponent as IInput } from "../../1.Atoms/AtomInput/";
import type { IComponent as IText } from "../../0.Cores/Text";
import type { IComponent as IForm } from "../../0.Cores/Form";
import type { TDeepCSSObject } from "../../../ViewUtils.tsx";
import type { StyleInterface } from "../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";

export interface IComponent {
	form: Pick<IForm, "onSubmit">;
	schema: TMoleculeFormSchemaRow;
	color?: StyleInterface.TColorChoice;
}

export type TMoleculeFormSchemaRow = {
	value: TMoleculeFormSchemaField | TMoleculeFormSchemaRow[];
	extStyle?: TDeepCSSObject;
};

export type TMoleculeFormSchemaField = {
	label?: string;
	required?: boolean;
} & (TInputField | TTextField | TBtnField | TBtn);

type TTextField = {
	type: "text";
	options: IText;
};

type TInputField = {
	type: "input";
	options: IInput;
};

type TBtnField = {
	type: "btnIcon";
	options: IButtonIcon;
};

type TBtn = {
	type: "btn";
	options: IButton;
};

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
