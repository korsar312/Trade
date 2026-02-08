import Model from "./Model.ts";
import View from "../../../Components/4.Structures/StructuresTabCard";
import { observer } from "mobx-react";

export interface IComponent {}

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default observer(Index);
