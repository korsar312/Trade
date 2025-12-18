import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { IComponent as IBtn } from "../../1.Atoms/AtomButton/Variables/AtomButtonMain";

export interface IComponent {
	btnRow: TMoleculeGroupBtn[];
}

export type TMoleculeGroupBtn = {
	id: string;
	options: Omit<IBtn, "color" | "isFullWidth">;
	isActive?: boolean;
};

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
