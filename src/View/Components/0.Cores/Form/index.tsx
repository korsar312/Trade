import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { ReactNode } from "react";

export interface IComponent {
	onSubmit?: (val: any) => void;
	children?: ReactNode;
}

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
