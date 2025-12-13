import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { IComponent as IText } from "../../0.Cores/Text";
import type { IComponent as IControl } from "../../2.Molecules/MoleculeRowControl";

export interface IComponent {
	rows: TSubstanceDescMapRow[];
}

export type TSubstanceDescMapRow = {
	id: string;
	key: IText;
	value: IControl;
};

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
