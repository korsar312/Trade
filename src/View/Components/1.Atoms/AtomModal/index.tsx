import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { ReactNode } from "react";
import type { TDeepCSSObject } from "../../../ViewUtils.tsx";

export interface IComponent {
	children: ReactNode;
	isShow: boolean;
	extStyle?: TDeepCSSObject;
}

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
