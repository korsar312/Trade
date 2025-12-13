import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { IComponent as IControl } from "../../2.Molecules/MoleculeRowControl";
import type { IComponent as IPaper } from "../../1.Atoms/AtomPaper";
import type { typesUtils } from "../../../../Logic/Libs/Util/TypesUtils.ts";

export interface IComponent {
	innerStruct: TStructuresWrapPaperCompType;
	wrapProp: Omit<IPaper, "children">;
}

type TMap = {
	ROW_CONTROL: IControl;
};

export type TStructuresWrapPaperCompType = typesUtils.OptionsUnion<TMap>;

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
