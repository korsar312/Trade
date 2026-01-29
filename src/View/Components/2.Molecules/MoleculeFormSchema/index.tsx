import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { IComponent as IButtonIcon } from "../../1.Atoms/AtomButton/Variables/AtomButtonIcon";
import type { IComponent as IButton } from "../../1.Atoms/AtomButton/Variables/AtomButtonMain";
import type { IComponent as IInput } from "../../1.Atoms/AtomInput/";
import type { IComponent as ITextarea } from "../../1.Atoms/AtomTextarea/";
import type { IComponent as IText } from "../../0.Cores/Text";
import type { IComponent as IForm } from "../../0.Cores/Form";
import type { IComponent as ISwitch } from "../../1.Atoms/AtomToggle/Variables/AtomToggleSwitch";
import type { IComponent as IRadio } from "../../1.Atoms/AtomToggle/Variables/AtomToggleRadio";
import type { IComponent as IImage } from "../../0.Cores/Image";
import type { TDeepCSSObject } from "../../../ViewUtils.tsx";
import type { StyleInterface } from "../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";

export interface IComponent {
	form: Pick<IForm, "onSubmit" | "id">;
	schema: TMoleculeFormSchemaRow;
	color?: StyleInterface.TColorChoice;
}

export type TMoleculeFormSchemaRow = {
	value: TMoleculeFormSchemaField | (TMoleculeFormSchemaRow | undefined)[] | undefined;
	extStyle?: TDeepCSSObject;
};

export type TMoleculeFormSchemaRowNorm = Omit<TMoleculeFormSchemaRow, "value"> & {
	value: TMoleculeFormSchemaField | TMoleculeFormSchemaRowNorm[];
};

export type TMoleculeFormSchemaField = {
	label?: string;
	required?: boolean;
} & TConcat;

type TConcat = TInputField | TTextField | TBtnField | TBtn | TSwitch | TRadio | TImage | TTextareaField;

type TTextField = { type: "text"; options: IText };
type TInputField = { type: "input"; options: IInput };
type TTextareaField = { type: "textarea"; options: ITextarea };
type TBtnField = { type: "btnIcon"; options: IButtonIcon };
type TBtn = { type: "btn"; options: IButton };
type TSwitch = { type: "switch"; options: ISwitch };
type TRadio = { type: "radio"; options: IRadio };
type TImage = { type: "img"; options: IImage };

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
