import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { IComponent as ITextTriple } from "../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaTextTriple";
import type { IComponent as ITextarea } from "../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaTextarea";
import type { IComponent as IInput } from "../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaInput";
import type { IComponent as ITabs } from "../../2.Molecules/MoleculeGroupBtn";
import type { IComponent as IRow } from "../../2.Molecules/MoleculeRowControl";
import type { typesUtils } from "../../../../Logic/Libs/Util/TypesUtils.ts";

export interface IComponent {
	compRow: TSubstanceFormConstructCompType[];
}

type TMap = {
	FORM_TEXT_TRIPLE: ITextTriple;
	FORM_TEXTAREA: ITextarea;
	FORM_INPUT: IInput;
	TABS: ITabs;
	ROW: IRow;
};

export type TSubstanceFormConstructCompType = typesUtils.OptionsUnion<TMap, { id: string }>;

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
