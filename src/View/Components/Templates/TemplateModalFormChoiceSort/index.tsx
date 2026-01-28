import type { FC } from "react";
import Substance, { type IComponent as IProp } from "../../../Components/3.Substances/SubstanceModal/index.tsx";
import { Act } from "../../../../Logic/Core";
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
				title: "SELECT_SORT_TYPE",
				submit,
				choiceList: PublicSortArr.map((el) => ({ name: el, title: Act.Message.getWord(el) })),
				btnName: "APPLY",
			},
		},
	};

	return <Substance {...propsComponent} />;
};

export default Index;
