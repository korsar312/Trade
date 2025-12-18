import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { ReactElement } from "react";

export interface IComponent {
	children: ReactElement | ReactElement[];
}

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
