import Component, { type IComponent as IParent, type TMoleculeFormSchemaField, type TMoleculeFormSchemaRow } from "../../index";
import Styles from "./Style.ts";
import { type FC, useState } from "react";
import type { IComponent as IText } from "../../../../0.Cores/Text";
import type { IComponent as IInput } from "../../../../1.Atoms/AtomInput";
import type { IComponent as IImg } from "../../../../0.Cores/Image";
import Util from "../../../../../../Logic/Libs/Util";
import { Act } from "../../../../../../Logic/Core";

export interface IComponent {
	idForm?: string;
	title: IText;
	labelTitle: Omit<IInput, "name">;
	labelSubtitle: Omit<IInput, "name">;
	find: Omit<IInput, "type" | "name" | "onChange">;
	choiceList: TMoleculeFormSchemaChoice[];
	submit?: (val: TMoleculeFormSchemaTextBtnForm) => void;
}

type TMoleculeFormSchemaChoice = {
	name: string;
	title: Omit<IText, "label">;
	img?: IImg;
};

export type TMoleculeFormSchemaTextBtnForm = { title: string; subtitle: string; desc: string; radio: string };

const Index: FC<IComponent> = (props) => {
	const { title, labelTitle, labelSubtitle, find, choiceList, submit, idForm } = props;

	const [filterBtn, setFilterBtn] = useState("");

	const btnList = Util.trigram(choiceList, filterBtn, (el) => Act.Message.getWord(el.title.text));

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

	const inputField: TMoleculeFormSchemaRow = {
		value: {
			type: "input",
			options: {
				color: "MAIN_4",
				...labelTitle,
				name: "title",
			},
		},
	};

	const subInputField: TMoleculeFormSchemaRow = {
		value: {
			type: "input",
			options: {
				color: "MAIN_4",
				...labelSubtitle,
				name: "subtitle",
			},
		},
	};

	const textField: TMoleculeFormSchemaRow = {
		extStyle: Styles.content,
		value: {
			type: "text",
			options: {
				text: "CHOOSE_BANK",
			},
		},
	};

	const findField: TMoleculeFormSchemaRow = {
		value: {
			type: "input",
			options: {
				color: "MAIN_4",
				...find,
				onChange: setFilterBtn,
			},
		},
	};

	const radioField: TMoleculeFormSchemaRow = {
		extStyle: Styles.radioWrap,
		value: btnList.map(({ img, name, title }, i) => ({
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
		})),
	};

	const propsComponent: IParent = {
		schema: {
			extStyle: Styles.wrapper,
			value: [titleField, inputField, subInputField, textField, findField, radioField],
		},
		form: { onSubmit: submit, id: idForm },
	};

	return <Component {...propsComponent} />;
};

export default Index;
