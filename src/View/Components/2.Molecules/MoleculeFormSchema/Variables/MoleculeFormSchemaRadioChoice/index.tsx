import Component, { type IComponent as IParent, type TMoleculeFormSchemaField, type TMoleculeFormSchemaRow } from "../../index";
import Styles from "./Style.ts";
import type { FC } from "react";
import type { IComponent as IText } from "../../../../0.Cores/Text";
import type { IComponent as IImg } from "../../../../0.Cores/Image";
import type { IComponent as IBtn } from "../../../../1.Atoms/AtomButton/Variables/AtomButtonMain";

export interface IComponent {
	idForm?: string;
	title: IText;
	choiceList: TMoleculeFormSchemaChoice[];
	btn: Omit<IBtn, "type">;
	submit: (val: TMoleculeFormSchemaRadioChoiceForm) => void;
}

export type TMoleculeFormSchemaRadioChoiceForm = { radio: string };

type TMoleculeFormSchemaChoice = {
	name: string;
	title: Omit<IText, "label">;
	img?: IImg;
};

const Index: FC<IComponent> = (props) => {
	const { title, choiceList, btn, submit, idForm } = props;

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

	const radioField: TMoleculeFormSchemaRow[] = choiceList.map(({ img, name, title }, i) => ({
		extStyle: Styles.radio,
		value: [
			{
				value: {
					type: "radio",
					options: {
						name: "radio",
						value: name,
						defaultChecked: i == 0,
						id: name,
					},
				},
			},
			img && {
				value: {
					type: "img",
					options: {
						color: "SECOND_1",
						size: 22,
						...img,
					},
				} satisfies TMoleculeFormSchemaField,
			},
			{
				value: {
					type: "text",
					options: {
						...title,
						label: { htmlFor: name },
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
				type: "submit",
			},
		},
	};

	const propsComponent: IParent = {
		schema: {
			extStyle: Styles.wrapper,
			value: [titleField, ...radioField, btnField],
		},
		form: { onSubmit: submit, id: idForm },
	};

	return <Component {...propsComponent} />;
};

export default Index;
