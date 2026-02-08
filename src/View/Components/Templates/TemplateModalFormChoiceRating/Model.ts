import type { IComponent } from "./index";
import type { IComponent as IProp } from "../../../Components/3.Substances/SubstanceModal";
import type { TMoleculeFormSchemaImageQtyChoiceForm } from "../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaImageQtyChoice";
import { PublicInterface } from "../../../../Logic/Core/Services/Public.interface.ts";

function Model(props: IComponent) {
	const { submitFn, ...propRest } = props;

	const list = [0, 1, 2, 3, 4] as PublicInterface.TRating[];

	function submit(data: TMoleculeFormSchemaImageQtyChoiceForm) {
		const index = data.qtyIndex.trim();
		if (index === "") return submitFn(null);

		const n = Number(index);
		return submitFn(Number.isFinite(n) ? (n as PublicInterface.TRating) : null);
	}

	const propsComponent: IProp = {
		...propRest,
		form: {
			type: "IMAGE_QTY",
			options: {
				title: { text: "SELECT_RATING_QTY" },
				submit,
				btnImageList: list.map(() => ({ icon: "Star" })),
				btn: { text: "APPLY" },
			},
		},
	};

	return propsComponent;
}

export default Model;
