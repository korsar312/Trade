import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { IComponent as IControl } from "../../3.Substances/SubstanceRowControl";
import type { IComponent as IPaper } from "../../1.Atoms/AtomPaper";

export interface IComponent {
	innerStruct: IControl;
	wrapProp: Omit<IPaper, "children">;
}

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
