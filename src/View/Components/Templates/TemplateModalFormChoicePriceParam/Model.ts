import type { IComponent } from "./index";
import type { IComponent as IProp } from "../../../Components/3.Substances/SubstanceModal";
import type { TMoleculeFormSchemaInputForm } from "../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaInput";

function Model(props: IComponent) {
	const { submitFn, ...propRest } = props;

	function submit(data: TMoleculeFormSchemaInputForm) {
		const val = Number(data.input);
		submitFn(isNaN(val) || !data.input.length ? null : val);
	}

	const propsComponent: IProp = {
		...propRest,
		form: {
			type: "INPUT_ONE",
			options: {
				title: { text: "ENTER_DES_PRICE" },
				input: { type: "number", iconsLeft: "Money", valid: [(val) => ({ isValid: Number(val) > 0, error: "MUST_GREAT_ZERO" })] },
				btn: { text: "APPLY" },
				submit,
			},
		},
	};

	return propsComponent;
}

export default Model;
