import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { StyleInterface } from "../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";

export interface IComponent {
	isVert?: boolean;
	color?: StyleInterface.TColorChoice;
}

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
