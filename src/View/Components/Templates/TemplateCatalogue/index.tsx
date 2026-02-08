import Model from "./Model.ts";
import View from "../../4.Structures/StructuresCatalog";
import { observer } from "mobx-react";

export interface IComponent {}

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default observer(Index);
