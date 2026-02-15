import type { TModel } from "../../../../../../CreateComponent.tsx";
import type { TComponent } from "../";
import type { TComponent as IParent, TMoleculeFormSchemaField, TMoleculeFormSchemaRow } from "../../../index.tsx";
import Styles from "./Style.ts";
import { useState } from "react";
import Util from "../../../../../../../Logic/Libs/Util";

function Model({ Props, Act }: TModel<TComponent>) {
	const { title, labelTitle, labelSubtitle, find, choiceList, submit, form } = Props;

	const [filterBtn, setFilterBtn] = useState("");

	const btnFilter = Util.trigram(choiceList, filterBtn, (el) => Act.Message.getWord(el.title.text));

	const order = new Map(btnFilter.map((x, i) => [x, i]));
	const btnSort = choiceList.toSorted((a, b) => (order.get(a) ?? Infinity) - (order.get(b) ?? Infinity));

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
		value: btnSort.map(({ img, name, title }, i) => ({
			extStyle: [Styles.radio, isNotExistFilter(name) && Styles.hidden],
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

	function isNotExistFilter(name: string) {
		return !btnFilter.find((el) => el.name === name);
	}

	const propsComponent: IParent = {
		schema: {
			extStyle: Styles.wrapper,
			value: [titleField, inputField, subInputField, textField, findField, radioField],
		},
		form: { onSubmit: submit, ...form },
	};

	return { propsComponent };
}

export default Model;
