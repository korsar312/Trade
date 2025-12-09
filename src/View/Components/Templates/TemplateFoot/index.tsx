import { type FC } from "react";
import Substance, { type IComponent as IProp } from "../../../Components/4.Structures/StructuresWrapPaper";

export interface IComponent {}

const Index: FC<IComponent> = (props) => {
	const {} = props;

	const propsComponent: IProp = {
		innerStruct: {
			type: "ROW_CONTROL",
			options: {
				compRow: [
					{ id: "1", options: {}, type: "SPACING" },
					{ id: "2", type: "BTN_IMAGE", options: { icon: "Store", isBig: true } },
					{ id: "3", options: {}, type: "SPACING" },
					{ id: "4", type: "BTN_IMAGE", options: { icon: "Person", isBig: true } },
					{ id: "5", options: {}, type: "SPACING" },
					{ id: "6", type: "BTN_IMAGE", options: { icon: "CheckList", isBig: true } },
					{ id: "7", options: {}, type: "SPACING" },
					{ id: "6", type: "BTN_IMAGE", options: { icon: "Info", isBig: true } },
					{ id: "7", options: {}, type: "SPACING" },
				],
			},
		},
		wrapProp: {
			color: "MAIN_2",
		},
	};

	return <Substance {...propsComponent} />;
};

export default Index;
