import type { FC } from "react";
import Substance, { type IComponent as IProp } from "../../../Components/3.Substances/SubstanceModal/index.tsx";
import type { MessageInterface } from "../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";
import type { TMoleculeFormSchemaSwitchChoiceForm } from "../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaSwitchChoice";
import { CatalogueBank, type CatalogueInterface } from "../../../../Logic/Core/Services/ServiceCatalogue/Catalogue.interface.ts";
import { Act } from "../../../../Logic/Core";

type ModalPayload = {
	bank: CatalogueInterface.EBank;
};

type TConfig = {
	[K in EModalName]: {
		list: TModalPayloadMap[K];
		title: MessageInterface.EWord;
	};
};

const CONFIG: TConfig = {
	bank: {
		list: Object.keys(CatalogueBank) as CatalogueInterface.EBank[],
		title: "BANK_SELECTOR",
	},
} as const satisfies Record<EModalName, unknown>;

type EModalName = keyof ModalPayload;
type TModalPayloadMap = { [K in EModalName]: Array<ModalPayload[K]> };
type TProps = { [K in EModalName]: { type: K; submitFn: (value: ModalPayload[K][]) => void } }[EModalName];
type TModal = Pick<IProp, "bgClick" | "color">;

export type TComponent = TProps & TModal;

const Index: FC<TComponent> = (props) => {
	const { type, submitFn, ...propRest } = props;

	const { list, title } = CONFIG[type];

	function getName(word: string): string {
		return Act.Message.getWord(word);
	}

	function submit(data: TMoleculeFormSchemaSwitchChoiceForm): string {
		switch (type) {
			case "bank": {
				const arr = Object.keys(data) as TModalPayloadMap["bank"];
				submitFn(list.length === arr.length ? [] : arr);
				return "";
			}
		}
	}

	const propsComponent: IProp = {
		...propRest,
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
