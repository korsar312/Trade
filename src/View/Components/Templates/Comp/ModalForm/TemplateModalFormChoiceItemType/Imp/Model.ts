import type { TModel } from "../../../../../../CreateComponent.tsx";
import type { TComponent } from "../index.tsx";
import type { TSchemaRadio } from "../../../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaRadioChoice";
import type { TComponent as IProp } from "../../../../../3.Substances/SubstanceModal";
import { type ItemInterface, ItemTypeItemArr } from "../../../../../../../Logic/Domain/Services/ServiceItem/Item.interface.ts";

function Model({ Props }: TModel<TComponent>) {
	const { submitFn, ...propRest } = Props;

	function submit(data: TSchemaRadio) {
		const val = (data.radio || "CARD") as ItemInterface.ETypeItem;
		submitFn(val);
	}

	const propsComponent: IProp = {
		...propRest,
		form: {
			type: "CHOICE_ONE",
			options: {
				title: { text: "SELECT_LISTING_TYPE" },
				submit,
				choiceList: ItemTypeItemArr.map((el) => ({ name: el, title: { text: el } })),
				btn: { text: "APPLY" },
			},
		},
	};

	return { propsComponent };
}

export default Model;
