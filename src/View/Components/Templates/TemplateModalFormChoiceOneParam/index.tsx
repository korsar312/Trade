import type { FC } from "react";
import Substance, { type IComponent as IProp } from "../../../Components/3.Substances/SubstanceModal/index.tsx";
import type { MessageInterface } from "../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";
import type { TMoleculeFormSchemaRadioChoiceForm } from "../../2.Molecules/MoleculeFormSchema/Variables/MoleculeFormSchemaRadioChoice";
import { Act } from "../../../../Logic/Core";
import { PublicInterface, PublicSort } from "../../../../Logic/Core/Services/Public.interface.ts";

type ModalPayload = {
	sort: PublicInterface.ESort;
};

type TConfig = {
	[K in EModalName]: {
		list: Array<TModalPayloadMap[K]>;
		title: MessageInterface.EWord;
	};
};

const CONFIG: TConfig = {
	sort: {
		list: Object.keys(PublicSort) as PublicInterface.ESort[],
		title: "BANK_SELECTOR",
	},
} as const satisfies Record<EModalName, unknown>;

type EModalName = keyof ModalPayload;
type TModalPayloadMap = { [K in EModalName]: ModalPayload[K] };
type TProps = { [K in EModalName]: { type: K; submitFn: (value: ModalPayload[K]) => void } }[EModalName];
type TModal = Pick<IProp, "bgClick" | "color">;

export type TComponent = TProps & TModal;

const Index: FC<TComponent> = (props) => {
	const { type, submitFn, ...propRest } = props;

	const { list, title } = CONFIG[type];

	function getName(word: string | number): string {
		return Act.Message.getWord(word);
	}

	function submit(data: TMoleculeFormSchemaRadioChoiceForm): string {
		switch (type) {
			case "sort": {
				submitFn((data.radio as PublicInterface.ESort) || "TO_UPPER");
				return "";
			}
		}
	}

	const propsComponent: IProp = {
		...propRest,
		form: {
			type: "CHOICE_ONE",
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
