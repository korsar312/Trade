import type { FC } from "react";
import Substance, { type IComponent as IProp } from "../../../Components/3.Substances/SubstanceModal/index.tsx";
import { Act } from "../../../../Logic/Core";
import type { TMoleculeFormSchemaRadioChoiceForm } from "../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaRadioChoice";
import { type CatalogueInterface, CatalogueTypeItem } from "../../../../Logic/Core/Services/ServiceCatalogue/Catalogue.interface.ts";

type TModal = Pick<IProp, "bgClick" | "color">;

export interface IComponent extends TModal {
	submitFn: (val: CatalogueInterface.ETypeItem) => void;
}

const Index: FC<IComponent> = (props) => {
	const { submitFn, ...propRest } = props;

	const list = Object.keys(CatalogueTypeItem) as CatalogueInterface.ETypeItem[];

	function submit(data: TMoleculeFormSchemaRadioChoiceForm) {
		const val = (data.radio || "CARD") as CatalogueInterface.ETypeItem;
		submitFn(val);
	}

	const propsComponent: IProp = {
		...propRest,
		form: {
			type: "CHOICE_ONE",
			options: {
				title: "SELECT_LISTING_TYPE",
				submit,
				choiceList: list.map((el) => ({ name: el, title: Act.Message.getWord(el) })),
				btnName: "APPLY",
			},
		},
	};

	return <Substance {...propsComponent} />;
};

export default Index;
