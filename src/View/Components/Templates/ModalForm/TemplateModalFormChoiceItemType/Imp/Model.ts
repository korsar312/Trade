import type { TModel } from "../../../../../CreateComponent.tsx";
import type { TComponent } from "../";
import type { TSchemaRadio } from "../../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaRadioChoice";
import {
	type CatalogueInterface,
	CatalogueTypeItemArr,
} from "../../../../../../Logic/Domain/Services/ServiceCatalogue/Catalogue.interface.ts";
import type { TComponent as IProp } from "../../../../3.Substances/SubstanceModal";

function Model({ Props }: TModel<TComponent>) {
	const { submitFn, ...propRest } = Props;

	function submit(data: TSchemaRadio) {
		const val = (data.radio || "CARD") as CatalogueInterface.ETypeItem;
		submitFn(val);
	}

	const propsComponent: IProp = {
		...propRest,
		form: {
			type: "CHOICE_ONE",
			options: {
				title: { text: "SELECT_LISTING_TYPE" },
				submit,
				choiceList: CatalogueTypeItemArr.map((el) => ({ name: el, title: { text: el } })),
				btn: { text: "APPLY" },
			},
		},
	};

	return { propsComponent };
}

export default Model;
