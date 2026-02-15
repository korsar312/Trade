import type { TModel } from "../../../../../CreateComponent.tsx";
import type { TComponent } from "../";
import type { TSchemaInput } from "../../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaInput";
import type { TComponent as IProp } from "../../../../3.Substances/SubstanceModal";

function Model({ Props }: TModel<TComponent>) {
	const { submitFn, ...propRest } = Props;

	function submit(data: TSchemaInput) {
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

	return { propsComponent };
}

export default Model;
