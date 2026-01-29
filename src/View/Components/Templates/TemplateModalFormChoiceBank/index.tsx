import type { FC } from "react";
import Substance, { type IComponent as IProp } from "../../../Components/3.Substances/SubstanceModal/index.tsx";
import type { TMoleculeFormSchemaSwitchChoiceForm } from "../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaSwitchChoice";
import { CatalogueBankArr, type CatalogueInterface } from "../../../../Logic/Core/Services/ServiceCatalogue/Catalogue.interface.ts";

type TModal = Pick<IProp, "bgClick" | "color">;

export interface IComponent extends TModal {
	submitFn: (val: CatalogueInterface.EBank[]) => void;
}

const Index: FC<IComponent> = (props) => {
	const { submitFn, ...propRest } = props;

	const list = CatalogueBankArr;

	function submit(data: TMoleculeFormSchemaSwitchChoiceForm) {
		const arr = Object.keys(data) as CatalogueInterface.EBank[];
		submitFn(list.length === arr.length ? [] : arr);
	}

	const propsComponent: IProp = {
		...propRest,
		form: {
			type: "CHOICE_MANY",
			options: {
				title: { text: "BANK_SELECTOR" },
				submit,
				choiceList: list.map((el) => ({ name: el, title: { text: el } })),
				btn: { text: "APPLY" },
			},
		},
	};

	return <Substance {...propsComponent} />;
};

export default Index;
