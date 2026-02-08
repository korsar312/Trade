import type { IComponent } from "./index";
import type { IComponent as IProp } from "../../../Components/4.Structures/StructuresWrapPaper";
import Util from "../../../../Logic/Libs/Util";

function Model(props: IComponent) {
	const {} = props;

	const genId = Util.idGen();

	const propsComponent: IProp = {
		innerStruct: {
			type: "ROW_CONTROL",
			options: {
				compRow: [
					{ id: genId(), type: "BTN_IMAGE", options: { color: "MAIN_3", icon: "Gear" } },
					{ id: genId(), type: "BTN_IMAGE", options: { color: "MAIN_3", icon: "Plus" } },
					{ id: genId(), options: {}, type: "SPACING" },
					{ id: genId(), type: "BTN_IMAGE", options: { color: "BLUE_2", icon: "AddCard" } },
				],
			},
		},
		wrapProp: {
			color: "MAIN_2",
		},
	};

	return propsComponent;
}

export default Model;
