import type { IComponent } from "../index";
import type { IComponent as IControl } from "../../../2.Molecules/MoleculeRowControl";

function Model(props: IComponent) {
	const {} = props;

	const rowProps: IControl = {
		compRow: [
			{ id: "1", type: "BTN_IMAGE", options: { color: "MAIN_3", icon: "Gear" } },
			{ id: "2", type: "BTN_IMAGE", options: { color: "MAIN_3", icon: "Plus" } },
			{ id: "3", options: {}, type: "SPACING" },
			{ id: "4", type: "BTN_IMAGE", options: { color: "BLUE_2", icon: "AddCard" } },
		],
	};

	return { rowProps };
}

export default Model;
