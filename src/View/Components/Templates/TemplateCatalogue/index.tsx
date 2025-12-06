import { type FC } from "react";
import Substance, { type IComponent as IProp } from "../../../Components/4.Structures/StructuresCatalog";

export interface IComponent {}

const Index: FC<IComponent> = (props) => {
	const {} = props;

	const propsComponent: IProp = {};

	return <Substance {...propsComponent} />;
};

export default Index;
