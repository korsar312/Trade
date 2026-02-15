import type { TModel } from "../../../../../../CreateComponent.tsx";
import type { TComponent } from "../";
import type { TComponent as IParent, TMoleculeFormSchemaField, TMoleculeFormSchemaRow } from "../../../index.tsx";
import Styles from "./Style.ts";

function Model({ Props }: TModel<TComponent>) {
	const { title, input, btn, submit, form } = Props;

	const titleField: TMoleculeFormSchemaRow = {
		extStyle: Styles.content,
		value: {
			type: "text",
			options: {
				...title,
				color: "SECOND_1",
				font: "BodyMain",
			},
		},
	};

	const inputField: TMoleculeFormSchemaRow = {
		value: {
			type: "input",
			options: {
				color: "MAIN_4",
				name: "input",
				...input,
			},
		},
	};

	const btnField: TMoleculeFormSchemaRow = {
		value:
			btn &&
			({
				type: "btn",
				options: {
					isFullWidth: true,
					color: "BLUE_2",
					...btn,
					type: "submit",
				},
			} satisfies TMoleculeFormSchemaField),
	};

	const propsComponent: IParent = {
		schema: {
			extStyle: Styles.wrapper,
			value: [titleField, inputField, btnField],
		},
		form: { onSubmit: submit, ...form },
	};

	return { propsComponent };
}

export default Model;
