import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { IComponent as IFormLogin } from "../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaLogin";
import type { typesUtils } from "../../../../Logic/Libs/Util/TypesUtils.ts";

export interface IComponent {
	isShow: boolean;
	form: TSubstanceModalCompType;
}

type TMap = {
	LOGIN: IFormLogin;
};

export type TSubstanceModalCompType = typesUtils.OptionsUnion<TMap>;

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
