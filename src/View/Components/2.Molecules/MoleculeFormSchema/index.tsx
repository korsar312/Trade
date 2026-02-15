import { Component } from "../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../CreateComponent.tsx";
import type { TComponent as IButtonIcon } from "../../1.Atoms/AtomButton/Variables/AtomButtonIcon";
import type { TComponent as IButton } from "../../1.Atoms/AtomButton/Variables/AtomButtonMain";
import type { TComponent as IInput } from "../../1.Atoms/AtomInput/";
import type { TComponent as ITextarea } from "../../1.Atoms/AtomTextarea/";
import type { TComponent as IText } from "../../0.Cores/Text";
import type { TComponent as IForm } from "../../0.Cores/Form";
import type { TComponent as ISwitch } from "../../1.Atoms/AtomToggle/Variables/AtomToggleSwitch";
import type { TComponent as IRadio } from "../../1.Atoms/AtomToggle/Variables/AtomToggleRadio";
import type { TComponent as IImage } from "../../0.Cores/Image";
import type { TDeepCSSObject } from "../../../ViewUtils.tsx";
import type { StyleInterface } from "../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = {
	form: Pick<IForm, "onSubmit" | "id" | "ref">;
	schema: TMoleculeFormSchemaRow;
	color?: StyleInterface.TColorChoice;
};

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

export default Component.Create(Model, Style, View, "MoleculeFormSchema");
