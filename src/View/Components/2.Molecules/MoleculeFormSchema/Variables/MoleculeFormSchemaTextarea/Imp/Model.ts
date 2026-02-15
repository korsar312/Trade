import type { TModel } from "../../../../../../CreateComponent.tsx";
import type { TComponent } from "../";
import type { TComponent as IParent, TMoleculeFormSchemaRow } from "../../../index.tsx";
import Styles from "./Style.ts";

function Model({ Props }: TModel<TComponent>) {
	const { title, labelTitle, submit, form } = Props;

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

	const textareaField: TMoleculeFormSchemaRow = {
		value: {
			type: "textarea",
			options: {
				color: "MAIN_4",
				...labelTitle,
				name: "input",
			},
		},
	};

	const propsComponent: IParent = {
		schema: {
			extStyle: Styles.wrapper,
			value: [titleField, textareaField],
		},
		form: { onSubmit: submit, ...form },
	};

	return { propsComponent };
}

export default Model;
