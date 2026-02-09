import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { IComponent as IItem } from "../../3.Substances/SubstanceItemCard";
import type { IComponent as IControl } from "../../2.Molecules/MoleculeRowControl";

export interface IComponent {
	filterList: (IControl & TId)[];
	itemList: (IItem & TId)[];
}

type TId = {
	id: string;
};

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
