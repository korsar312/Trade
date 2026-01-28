import type { FC } from "react";
import Substance, { type IComponent as IProp } from "../../../Components/3.Substances/SubstanceModal/index.tsx";
import type { TMoleculeFormSchemaInputForm } from "../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaInput";

type TModal = Pick<IProp, "bgClick" | "color">;

export interface IComponent extends TModal {
	submitFn: (val: number | null) => void;
}

const Index: FC<IComponent> = (props) => {
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
				input: { type: "number", iconsLeft: "Money" },
				btnName: "APPLY",
				submit,
			},
		},
	};

	return <Substance {...propsComponent} />;
};

export default Index;
