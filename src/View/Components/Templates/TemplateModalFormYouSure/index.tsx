import type { FC } from "react";
import Substance, { type IComponent as IProp } from "../../../Components/3.Substances/SubstanceModal/index.tsx";
import type { TMoleculeFormSchemaRadioChoiceForm } from "../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaRadioChoice";

type TModal = Pick<IProp, "bgClick" | "color">;

export interface IComponent extends TModal {
	submitFn: (val: boolean) => void;
}

const Index: FC<IComponent> = (props) => {
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

	return <Substance {...propsComponent} />;
};

export default Index;
