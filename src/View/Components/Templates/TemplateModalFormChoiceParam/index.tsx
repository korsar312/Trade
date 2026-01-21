import type { FC } from "react";
import Substance, { type IComponent as IProp } from "../../../Components/3.Substances/SubstanceModal/index.tsx";
import type { TMoleculeFormSchemaSwitchChoiceForm } from "../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaSwitchChoice";
import { CatalogueBank, type CatalogueInterface } from "../../../../Logic/Core/Services/ServiceCatalogue/Catalogue.interface.ts";
import { Act } from "../../../../Logic/Core";

type TProps<T extends "bank", F> = { type: T; submitFn: (value: F[]) => void };

export type TComponent = TProps<"bank", CatalogueInterface.EBank>;

const Index: FC<TComponent> = (props) => {
	const { type, submitFn } = props;

	const list = getList();

	function submit(data: TMoleculeFormSchemaSwitchChoiceForm) {
		switch (type) {
			case "bank":
				const bankArr = Object.keys(data) as CatalogueInterface.EBank[];
				submitFn(list.length === bankArr.length ? [] : bankArr);
		}
	}

	function getList() {
		switch (type) {
			case "bank":
				return Object.keys(CatalogueBank) as CatalogueInterface.EBank[];
		}
	}

	function getName(word: string) {
		switch (type) {
			case "bank":
				return Act.Message.getWord(word);
		}
	}

	function getTitle() {
		switch (type) {
			case "bank":
				return "BANK_SELECTOR";
			default:
				return "ERROR";
		}
	}

	const propsComponent: IProp = {
		isShow: true,
		color: "MAIN_3",
		form: {
			type: "CHOICE_MANY",
			options: {
				title: getTitle(),
				choiceList: list.map((el) => ({ name: el, title: getName(el) })),
				btnName: "APPLY",
				submit: submit,
			},
		},
	};

	return <Substance {...propsComponent} />;
};

export default Index;
