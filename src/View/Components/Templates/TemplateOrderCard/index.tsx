import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import { observer } from "mobx-react";

export interface IComponent {}

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default observer(Index);
