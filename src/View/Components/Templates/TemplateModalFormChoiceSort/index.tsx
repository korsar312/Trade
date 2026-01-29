import type { FC } from "react";
import Substance, { type IComponent as IProp } from "../../../Components/3.Substances/SubstanceModal/index.tsx";
import { PublicInterface, PublicSortArr } from "../../../../Logic/Core/Services/Public.interface.ts";
import type { TMoleculeFormSchemaRadioChoiceForm } from "../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaRadioChoice";

type TModal = Pick<IProp, "bgClick" | "color">;

export interface IComponent extends TModal {
	submitFn: (val: PublicInterface.ESort) => void;
}

const Index: FC<IComponent> = (props) => {
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

	return <Substance {...propsComponent} />;
};

export default Index;
