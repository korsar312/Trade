import Component, { type IComponent as IParent, type TMoleculeFormSchemaRow } from "../../index";
import Styles from "./Style.ts";
import type { FC } from "react";
import type { IComponent as IText } from "../../../../0.Cores/Text";
import type { IComponent as IInput } from "../../../../1.Atoms/AtomInput";
import type { IComponent as ITextarea } from "../../../../1.Atoms/AtomTextarea";

export interface IComponent {
	title: IText;
	labelTitle: Omit<IInput, "name">;
	labelDesc: Omit<ITextarea, "name">;
	submit: (val: TMoleculeFormSchemaTextPairForm) => void;
}

export type TMoleculeFormSchemaTextPairForm = {
	title: string;
	desc: string;
};

const Index: FC<IComponent> = (props) => {
	const { title, labelTitle, labelDesc, submit } = props;

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

	const textareaField: TMoleculeFormSchemaRow = {
		value: {
			type: "textarea",
			options: {
				color: "MAIN_4",
				...labelDesc,
				name: "desc",
			},
		},
	};

	const propsComponent: IParent = {
		schema: {
			extStyle: Styles.wrapper,
			value: [titleField, inputField, textareaField],
		},
		form: { onSubmit: submit },
	};

	return <Component {...propsComponent} />;
};

export default Index;
