import Component, { type IComponent as IParent, type TMoleculeFormSchemaRow } from "../../index";
import { type IComponent as IText } from "../../../../0.Cores/Text";
import Styles from "./Style.ts";
import type { FC } from "react";
import type { MessageInterface } from "../../../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";

export interface IComponent {
	title: Pick<IText, "text" | "addStyle">;
	labelTitle: MessageInterface.EWord;
	submit: (val: TMoleculeFormSchemaTextareaChoiceForm) => void;
}

export type TMoleculeFormSchemaTextareaChoiceForm = {
	input: string;
};

const Index: FC<IComponent> = (props) => {
	const { title, labelTitle, submit } = props;

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
				placeholder: labelTitle,
				name: "input",
			},
		},
	};

	const propsComponent: IParent = {
		schema: {
			extStyle: Styles.wrapper,
			value: [titleField, textareaField],
		},
		form: { onSubmit: submit },
	};

	return <Component {...propsComponent} />;
};

export default Index;
