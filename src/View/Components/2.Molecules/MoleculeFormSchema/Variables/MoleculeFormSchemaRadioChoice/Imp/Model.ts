import type { TModel } from "../../../../../../CreateComponent.tsx";
import type { TComponent } from "../";
import type { TComponent as IParent, TMoleculeFormSchemaField, TMoleculeFormSchemaRow } from "../../../index.tsx";
import Styles from "./Style.ts";

function Model({ Props }: TModel<TComponent>) {
	const { title, choiceList, btn, submit, form } = Props;

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
		form: { onSubmit: submit, ...form },
	};

	return { propsComponent };
}

export default Model;
