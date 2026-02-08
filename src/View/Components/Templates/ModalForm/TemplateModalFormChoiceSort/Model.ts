import type { IComponent } from "./index.tsx";
import type { IComponent as IProp } from "../../../3.Substances/SubstanceModal";
import { type PublicInterface, PublicSortArr } from "../../../../../Logic/Core/Services/Public.interface.ts";
import type { TMoleculeFormSchemaRadioChoiceForm } from "../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaRadioChoice";

function Model(props: IComponent) {
	const { submitFn, ...propRest } = props;

	function submit(data: TMoleculeFormSchemaRadioChoiceForm) {
		const val = (data.radio || "TO_UPPER") as PublicInterface.ESort;
		submitFn(val);
	}

	const propsComponent: IProp = {
		...propRest,
		form: {
			type: "CHOICE_ONE",
			options: {
				title: { text: "SELECT_SORT_TYPE" },
				submit,
				choiceList: PublicSortArr.map((el) => ({ name: el, title: { text: el } })),
				btn: { text: "APPLY" },
			},
		},
	};

	return propsComponent;
}

export default Model;
