import type { IComponent } from "./index.tsx";
import type { TComponent as IProp } from "../../../3.Substances/SubstanceModal";
import { type CatalogueInterface, CatalogueTypeItemArr } from "../../../../../Logic/Core/Services/ServiceCatalogue/Catalogue.interface.ts";
import type { TSchemaRadio } from "../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaRadioChoice";

function Model(props: IComponent) {
	const { submitFn, ...propRest } = props;

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

	return propsComponent;
}

export default Model;
