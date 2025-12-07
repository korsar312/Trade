import { type FC } from "react";
import Substance, { type IComponent as IProp } from "../../../Components/4.Structures/StructuresRowControl";

export interface IComponent {}

const Index: FC<IComponent> = (props) => {
	const {} = props;

	const propsComponent: IProp = {
		innerStruct: {
			compRow: [
				{ id: "1", type: "BTN_IMAGE", options: { color: "MAIN_3", icon: "Gear" } },
				{ id: "2", type: "BTN_IMAGE", options: { color: "MAIN_3", icon: "Plus" } },
				{ id: "3", options: {}, type: "SPACING" },
				{ id: "5", type: "BTN_IMAGE", options: { color: "BLUE_2", icon: "AddCard" } },
			],
		},
		wrapProp: {
			color: "MAIN_2",
		},
	};

	return <Substance {...propsComponent} />;
};

export default Index;
