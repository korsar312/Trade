import type { TModel } from "../../../CreateComponent.tsx";
import type { TComponent } from "../";

function Model({ Props, Act }: TModel<TComponent>) {
	const {} = Props;

	const modalList = Act.App.getModals();

	function closeModal(id: string) {
		Act.App.removeModals(id);
	}

	return { modalList, closeModal };
}

export default Model;
