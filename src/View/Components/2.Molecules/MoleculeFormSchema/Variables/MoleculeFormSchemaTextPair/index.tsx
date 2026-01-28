import Component, { type IComponent as IParent, type TMoleculeFormSchemaRow } from "../../index";
import Styles from "./Style.ts";
import type { FC } from "react";
import type { MessageInterface } from "../../../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";
import type { IComponent as IText } from "../../../../0.Cores/Text";

export interface IComponent {
	title: Pick<IText, "text" | "addStyle">;
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
