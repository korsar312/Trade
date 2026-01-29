import Component, { type IComponent as IParent, type TMoleculeFormSchemaRow } from "../../index";
import { type IComponent as IText } from "../../../../0.Cores/Text";
import { type IComponent as ITextarea } from "../../../../1.Atoms/AtomTextarea";
import Styles from "./Style.ts";
import type { FC } from "react";

export interface IComponent {
	idForm?: string;
	title: Pick<IText, "text" | "addStyle">;
	labelTitle: Omit<ITextarea, "name">;
	submit?: (val: TMoleculeFormSchemaTextareaForm) => void;
}

export type TMoleculeFormSchemaTextareaForm = { input: string };

const Index: FC<IComponent> = (props) => {
	const { title, labelTitle, submit, idForm } = props;

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
		form: { onSubmit: submit, id: idForm },
	};

	return <Component {...propsComponent} />;
};

export default Index;
