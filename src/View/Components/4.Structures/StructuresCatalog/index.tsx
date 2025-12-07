import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { IComponent as IItem } from "../../3.Substances/SubstanceItemCard";

export interface IComponent {
	itemList: (IItem & { id: string })[];
}

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
