import type { TModel } from "../../../../../CreateComponent.tsx";
import type { TComponent } from "../index.tsx";
import type { TComponent as IControl } from "../../../../2.Molecules/MoleculeRowControl";
import { Pub } from "../../../../../Init.ts";

function Model({ Props }: TModel<TComponent>) {
	const {} = Props;

	const rowProps: IControl = {
		compRow: [
			{ id: "1", type: "BTN_IMAGE", options: { color: "MAIN_3", icon: "Gear" } },
			{ id: "2", type: "BTN_IMAGE", options: { color: "MAIN_3", icon: "Plus" } },
			{ id: "3", options: {}, type: "SPACING" },
			{ id: "4", type: "TEXT", options: { text: Pub.getNamePage() } },
			{ id: "5", options: {}, type: "SPACING" },
			{ id: "6", type: "BTN_IMAGE", options: { color: "BLUE_2", icon: "AddCard" } },
		],
	};

	return { rowProps };
}

export default Model;
