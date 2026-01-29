import Component, { type IComponent as IParent, type TMoleculeFormSchemaRow } from "../../index";
import Styles from "./Style.ts";
import type { FC } from "react";
import type { IComponent as IText } from "../../../../0.Cores/Text";
import type { IComponent as IBtn } from "../../../../1.Atoms/AtomButton/Variables/AtomButtonMain";

export interface IComponent {
	title: IText;
	choiceList: TMoleculeFormSchemaChoice[];
	btn: Omit<IBtn, "type">;
	submit: (val: TMoleculeFormSchemaSwitchChoiceForm) => void;
}

export type TMoleculeFormSchemaSwitchChoiceForm = Record<string, "on">;

type TMoleculeFormSchemaChoice = {
	name: string;
	title: IText;
};

const Index: FC<IComponent> = (props) => {
	const { title, choiceList, btn, submit } = props;

	const titleField: TMoleculeFormSchemaRow = {
		extStyle: Styles.content,
		value: {
			type: "text",
			options: {
				color: "SECOND_1",
				font: "BodyMain",
				...title,
			},
		},
	};

	const switchField: TMoleculeFormSchemaRow[] = choiceList.map(({ title, name }) => ({
		extStyle: Styles.switch,
		value: [
			{
				value: {
					type: "switch",
					options: {
						name,
					},
				},
			},
			{
				value: {
					type: "text",
					options: {
						...title,
					},
				},
			},
		],
	}));

	const btnField: TMoleculeFormSchemaRow = {
		value: {
			type: "btn",
			options: {
				isFullWidth: true,
				color: "BLUE_2",
				...btn,
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
