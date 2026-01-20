import type { FC } from "react";
import Substance, { type IComponent as IProp } from "../../../Components/3.Substances/SubstanceModal/index.tsx";
import type { TMoleculeFormSchemaSimpleChoiceForm } from "../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaSimpleChoice";
import { CatalogueBank, type CatalogueInterface } from "../../../../Logic/Core/Services/ServiceCatalogue/Catalogue.interface.ts";
import type { IComponent as IBtn } from "../../1.Atoms/AtomButton/Variables/AtomButtonMain";

export interface IComponent {
	submitFn: (bank: CatalogueInterface.EBank) => void;
}

const Index: FC<IComponent> = (props) => {
	const { submitFn } = props;

	const bankList: CatalogueInterface.EBank[] = Object.keys(CatalogueBank) as CatalogueInterface.EBank[];
	const btnList: IBtn[] = bankList.map((el) => ({ text: el, color: "BLUE_2", isFullWidth: true }));

	function submit({ indexChoice }: TMoleculeFormSchemaSimpleChoiceForm) {
		submitFn(bankList[indexChoice]);
	}

	const propsComponent: IProp = {
		isShow: true,
		color: "MAIN_3",
		form: {
			type: "CHOICE",
			options: {
				title: "BACK",
				btnList,
				submit,
			},
		},
	};

	return <Substance {...propsComponent} />;
};

export default Index;
