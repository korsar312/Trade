import type { IComponent } from "./index";
import type { IComponent as IProp } from "../../../Components/3.Substances/SubstanceModal";
import type { TMoleculeFormSchemaRadioChoiceForm } from "../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaRadioChoice";

function Model(props: IComponent) {
	const { submitFn, ...propRest } = props;

	const list = [0, 1] as const;

	function submit(data: TMoleculeFormSchemaRadioChoiceForm) {
		submitFn(Boolean(Number(data.radio || "0")));
	}

	const propsComponent: IProp = {
		...propRest,
		form: {
			type: "CHOICE_ONE",
			options: {
				title: { text: "CONFIRM_ACTION" },
				choiceList: list.map((el) => ({ name: String(el), title: { text: el ? "I_CONFIRM" : "CANCEL" } })),
				btn: { text: "APPLY" },
				submit,
			},
		},
	};

	return propsComponent;
}

export default Model;
