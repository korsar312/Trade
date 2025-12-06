import { type FC } from "react";
import Substance, { type IComponent as IProp } from "../../../Components/3.Substances/SubstanceRowControl";

export interface IComponent {}

const Index: FC<IComponent> = (props) => {
	const {} = props;

	const propsComponent: IProp = {
		compRow: [
			{ id: "1", type: "BTN_IMAGE", options: { color: "MAIN_3", icon: "Message" } },
			{ id: "2", type: "BTN_IMAGE", options: { color: "MAIN_3", icon: "Play" } },
			{ id: "3", options: {}, type: "SPACING" },
			{ id: "5", type: "BTN_IMAGE", options: { color: "BLUE_2", icon: "Play" } },
		],
	};

	return <Substance {...propsComponent} />;
};

export default Index;
