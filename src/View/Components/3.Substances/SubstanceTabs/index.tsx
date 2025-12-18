import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { IComponent as IBtn } from "../../2.Molecules/MoleculeGroupBtn";
import type { ReactNode } from "react";

export interface IComponent {
	btnRow: TSubstanceTabsBtn[];
	children: ReactNode;
}

export type TSubstanceTabsBtn = {
	id: string;
	options: IBtn;
};

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
