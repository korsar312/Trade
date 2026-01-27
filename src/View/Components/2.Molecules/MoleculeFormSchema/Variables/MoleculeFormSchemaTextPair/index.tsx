import Component, { type IComponent as IParent, type TMoleculeFormSchemaRow } from "../../index";
import Styles from "./Style.ts";
import type { FC } from "react";
import type { MessageInterface } from "../../../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";

export interface IComponent {
	title: MessageInterface.EWord;
	labelTitle: MessageInterface.EWord;
	labelDesc: MessageInterface.EWord;
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
				text: title,
				color: "SECOND_1",
				font: "BlockHeading",
			},
		},
	};

	const inputField: TMoleculeFormSchemaRow = {
		value: {
			type: "input",
			options: {
				color: "MAIN_4",
				name: "title",
				placeholder: labelTitle,
			},
		},
	};

	const textareaField: TMoleculeFormSchemaRow = {
		value: {
			type: "textarea",
			options: {
				color: "MAIN_4",
				name: "desc",
				placeholder: labelDesc,
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
