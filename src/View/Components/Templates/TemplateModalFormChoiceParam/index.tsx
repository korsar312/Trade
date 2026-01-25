import type { FC } from "react";
import Substance, { type IComponent as IProp } from "../../../Components/3.Substances/SubstanceModal/index.tsx";
import type { MessageInterface } from "../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";
import type { TMoleculeFormSchemaSwitchChoiceForm } from "../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaSwitchChoice";
import { CatalogueBank, type CatalogueInterface } from "../../../../Logic/Core/Services/ServiceCatalogue/Catalogue.interface.ts";
import { Act } from "../../../../Logic/Core";

type TProps<T extends "bank", F> = { type: T; submitFn: (value: F[]) => void };

type TConfig = { list: CatalogueInterface.EBank[]; title: MessageInterface.EWord };

export type TComponent = {
	bgClick?: () => void;
} & TProps<"bank", CatalogueInterface.EBank>;

const Index: FC<TComponent> = (props) => {
	const { type, submitFn, bgClick } = props;

	const { list, title } = getConfig(type);

	function getConfig(type: TComponent["type"]): TConfig {
		switch (type) {
			case "bank":
				return {
					list: Object.keys(CatalogueBank) as CatalogueInterface.EBank[],
					title: "BANK_SELECTOR",
				};
		}
	}

	function getName(word: string) {
		switch (type) {
			case "bank":
				return Act.Message.getWord(word);
		}
	}

	function submit(data: TMoleculeFormSchemaSwitchChoiceForm) {
		const arr = Object.keys(data) as CatalogueInterface.EBank[];
		submitFn(list.length === arr.length ? [] : arr);
	}

	const propsComponent: IProp = {
		bgClick,
		color: "MAIN_3",
		form: {
			type: "CHOICE_MANY",
			options: {
				title,
				submit,
				choiceList: list.map((el) => ({ name: el, title: getName(el) })),
				btnName: "APPLY",
			},
		},
	};

	return <Substance {...propsComponent} />;
};

export default Index;
