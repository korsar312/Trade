import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { IComponent as IFormLogin } from "../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaLogin";
import type { IComponent as IFormChoiceMany } from "../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaSwitchChoice";
import type { typesUtils } from "../../../../Logic/Libs/Util/TypesUtils.ts";
import type { StyleInterface } from "../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";

export interface IComponent {
	form: TSubstanceModalCompType;
	color?: StyleInterface.TColorChoice;
	bgClick?: () => void;
}

type TMap = {
	LOGIN: IFormLogin;
	CHOICE_MANY: IFormChoiceMany;
};

export type TSubstanceModalCompType = typesUtils.OptionsUnion<TMap>;

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
