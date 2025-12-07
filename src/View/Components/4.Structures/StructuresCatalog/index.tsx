import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { IComponent as IItem } from "../../3.Substances/SubstanceItemCard";
import type { IComponent as IControl } from "../../3.Substances/SubstanceRowControl";

type TId = {
	id: string;
};

export interface IComponent {
	itemList: (IItem & TId)[];
	filterList: (IControl & TId)[];
}

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
