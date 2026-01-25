import type { IComponent } from "../index";
import { Act } from "../../../../Logic/Core";

function Model(props: IComponent) {
	const {} = props;

	const modalList = Act.App.getModals();

	function closeModal(id: string) {
		Act.App.removeModals(id);
	}

	return { modalList, closeModal };
}

export default Model;
