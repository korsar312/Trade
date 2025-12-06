import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { IComponent as IFormLogin } from "../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaLogin";

export type IComponent = {
	isShow: boolean;
} & TConcat;

export type TSubstanceModalType = "LOGIN";

type TAdd = TForm<"LOGIN", IFormLogin>;
type TConcat = TAdd;

type TForm<T extends TSubstanceModalType, F> = {
	type: T;
	form: F;
};

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
