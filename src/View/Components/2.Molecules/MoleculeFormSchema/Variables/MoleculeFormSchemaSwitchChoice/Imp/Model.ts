import type { TModel } from "../../../../../../CreateComponent.tsx";
import type { TComponent } from "../";
import type { TComponent as IParent, TMoleculeFormSchemaRow } from "../../../index.tsx";
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

	const switchField: TMoleculeFormSchemaRow[] = choiceList.map(({ title, name }) => ({
		extStyle: Styles.switch,
		value: [
			{
				value: {
					type: "switch",
					options: {
						name,
						id: name,
					},
				},
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
			value: [titleField, ...switchField, btnField],
		},
		form: { onSubmit: submit, ...form },
	};

	return { propsComponent };
}

export default Model;
