import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { StyleInterface } from "../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";
import type { TDeepCSSObject, TTagPartial } from "../../../ViewUtils.tsx";
import type { ReactNode } from "react";

export interface IComponent extends TTagPartial<HTMLDivElement, "onClick"> {
	color: StyleInterface.TColorChoice;
	children: ReactNode;
	extStyle?: TDeepCSSObject;
	isFull?: boolean;
}

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
