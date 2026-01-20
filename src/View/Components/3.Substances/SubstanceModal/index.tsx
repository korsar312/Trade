import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { IComponent as IFormLogin } from "../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaLogin";
import type { IComponent as IFormChoice } from "../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaSimpleChoice";
import type { typesUtils } from "../../../../Logic/Libs/Util/TypesUtils.ts";
import type { StyleInterface } from "../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";

export interface IComponent {
	isShow: boolean;
	form: TSubstanceModalCompType;
	color?: StyleInterface.TColorChoice;
}

type TMap = {
	LOGIN: IFormLogin;
	CHOICE: IFormChoice;
};

export type TSubstanceModalCompType = typesUtils.OptionsUnion<TMap>;

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
