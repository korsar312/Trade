import type { TModel } from "../../../../../CreateComponent.tsx";
import type { TComponent } from "../index.tsx";
import type { TMoleculeRowControlCompType } from "../../../../2.Molecules/MoleculeRowControl";

function Model({ Props }: TModel<TComponent>) {
	const {} = Props;

	const titleProps: TMoleculeRowControlCompType[] = [
		{ id: "0", type: "ICON", options: { img: "Chat", color: "BLUE_2" } },
		{ id: "1", type: "TEXT", options: { text: "DEAL_CHAT" } },
		{ id: "2", type: "SPACING", options: {} },
		{ id: "3", type: "BTN_STRING", options: { text: "OPEN_CHAT", icon: "ArrUp" } },
	];

	return { titleProps };
}

export default Model;
