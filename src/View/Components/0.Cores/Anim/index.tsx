import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { ReactNode } from "react";
import type { TDeepCSSObject } from "../../../ViewUtils.tsx";

export interface IComponent {
	children: ReactNode;
	extStyle?: TDeepCSSObject;
	trigger: any;
}

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
