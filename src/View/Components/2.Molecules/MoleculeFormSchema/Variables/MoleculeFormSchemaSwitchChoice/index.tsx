import Component, { type IComponent as IParent, type TMoleculeFormSchemaRow } from "../../index";
import Styles from "./Style.ts";
import type { FC } from "react";
import type { MessageInterface } from "../../../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";

export interface IComponent {
	title: MessageInterface.EWord;
	choiceList: TMoleculeFormSchemaChoice[];
	btnName: MessageInterface.EWord;
	submit: (val: TMoleculeFormSchemaSwitchChoiceForm) => void;
}

export type TMoleculeFormSchemaSwitchChoiceForm = Record<string, "on">;

export type TMoleculeFormSchemaChoice = {
	name: string;
	title: string;
};

const Index: FC<IComponent> = (props) => {
	const { title, choiceList, btnName, submit } = props;

	const titleField: TMoleculeFormSchemaRow = {
		extStyle: Styles.content,
		value: {
			type: "text",
			options: {
				text: title,
				color: "SECOND_1",
				font: "BlockHeading",
			},
		},
	};

	const switchField: TMoleculeFormSchemaRow[] = choiceList.map((el) => ({
		extStyle: Styles.switch,
		value: [
			{
				value: {
					type: "switch",
					options: {
						name: el.name,
					},
				},
			},
			{
				value: {
					type: "text",
					options: {
						text: el.title,
					},
				},
			},
		],
	}));

	const btnField: TMoleculeFormSchemaRow = {
		value: {
			type: "btn",
			options: {
				text: btnName,
				isFullWidth: true,
				color: "BLUE_2",
			},
		},
	};

	const propsComponent: IParent = {
		schema: {
			extStyle: Styles.wrapper,
			value: [titleField, ...switchField, btnField],
		},
		form: { onSubmit: submit },
	};

	return <Component {...propsComponent} />;
};

export default Index;
