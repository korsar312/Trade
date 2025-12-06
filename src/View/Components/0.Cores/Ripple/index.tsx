import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";

export interface IComponent {}

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
