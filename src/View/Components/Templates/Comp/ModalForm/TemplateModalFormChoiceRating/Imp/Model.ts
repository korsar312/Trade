import type { TModel } from "../../../../../../CreateComponent.tsx";
import type { TComponent } from "../index.tsx";
import type { TSchemaImageQty } from "../../../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaImageQtyChoice";
import type { TComponent as IProp } from "../../../../../3.Substances/SubstanceModal";
import type { UserInterface } from "../../../../../../../Logic/Domain/Services/ServiceUser/User.interface.ts";

function Model({ Props }: TModel<TComponent>) {
	const { submitFn, ...propRest } = Props;

	const list = [0, 1, 2, 3, 4] as UserInterface.TRating[];

	function submit(data: TSchemaImageQty) {
		const index = data.qtyIndex.trim();
		if (index === "") return submitFn(null);

		const n = Number(index);
		return submitFn(Number.isFinite(n) ? (n as UserInterface.TRating) : null);
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

	return { propsComponent };
}

export default Model;
