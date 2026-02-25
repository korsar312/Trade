import type { TModel } from "../../../../../CreateComponent.tsx";
import type { TComponent } from "../";
import { CatalogueBankArr, type CatalogueInterface } from "../../../../../../Logic/Domain/Services/ServiceCatalogue/Catalogue.interface.ts";
import type { TSchemaSwitch } from "../../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaSwitchChoice";
import type { TComponent as IProp } from "../../../../3.Substances/SubstanceModal";

function Model({ Props }: TModel<TComponent>) {
	const { submitFn, ...propRest } = Props;

	const list = CatalogueBankArr;

	function submit(data: TSchemaSwitch) {
		const arr = Object.keys(data) as CatalogueInterface.EBank[];
		submitFn(list.length === arr.length ? [] : arr);
	}

	const propsComponent: IProp = {
		...propRest,
		form: {
			type: "CHOICE_MANY",
			options: {
				title: { text: "BANK_SELECTOR" },
				submit,
				choiceList: list.map((el) => ({ name: el, title: { text: el } })),
				btn: { text: "APPLY" },
			},
		},
	};

	return { propsComponent };
}

export default Model;
