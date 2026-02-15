import { Component } from "../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../CreateComponent.tsx";
import type { TComponent as IFormChoiceMany } from "../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaSwitchChoice";
import type { TComponent as IFormChoiceOne } from "../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaRadioChoice";
import type { TComponent as IFormInput } from "../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaInput";
import type { TComponent as IFormImageQty } from "../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaImageQtyChoice";
import type { typesUtils } from "../../../../Logic/Libs/Util/TypesUtils.ts";
import type { StyleInterface } from "../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = {
	form: TSubstanceModalCompType;
	color?: StyleInterface.TColorChoice;
	bgClick?: () => void;
};

type TMap = {
	CHOICE_MANY: IFormChoiceMany;
	CHOICE_ONE: IFormChoiceOne;
	INPUT_ONE: IFormInput;
	IMAGE_QTY: IFormImageQty;
};

export type TSubstanceModalCompType = typesUtils.OptionsUnion<TMap>;

export default Component.Create(Model, Style, View, "SubstanceModal");
