import type { IComponent } from "./index.tsx";
import type { TComponent as IProp } from "../../../3.Substances/SubstanceModal";
import type { TSchemaRadio } from "../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaRadioChoice";

function Model(props: IComponent) {
	const { submitFn, ...propRest } = props;

	const list = [0, 1] as const;

	function submit(data: TSchemaRadio) {
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
