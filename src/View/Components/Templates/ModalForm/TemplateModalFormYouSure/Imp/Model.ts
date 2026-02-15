import type { TModel } from "../../../../../CreateComponent.tsx";
import type { TComponent } from "../";
import type { TSchemaRadio } from "../../../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaRadioChoice";
import type { TComponent as IProp } from "../../../../3.Substances/SubstanceModal";

function Model({ Props }: TModel<TComponent>) {
	const { submitFn, ...propRest } = Props;

	const list = [0, 1] as const;

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

	function submit(data: TSchemaRadio) {
		submitFn(Boolean(Number(data.radio || "0")));
	}

	return { propsComponent };
}

export default Model;
