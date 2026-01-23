import type { IComponent } from "../index";
import { Act } from "../../../../Logic/Core";

function Model(props: IComponent) {
	const {} = props;

	const modalList = Act.App.getModals();

	return { modalList };
}

export default Model;
