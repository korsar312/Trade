import Component, { type IComponent as IParent, type TMoleculeFormSchemaField, type TMoleculeFormSchemaRow } from "../../index";
import Styles from "./Style.ts";
import type { FC } from "react";
import type { MessageInterface } from "../../../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";
import type { IComponent as IInput } from "../../../../../Components/1.Atoms/AtomInput/";
import type { IComponent as IText } from "../../../../0.Cores/Text";

export interface IComponent {
	title: Pick<IText, "text" | "addStyle">;
	input?: Pick<IInput, "type" | "iconsLeft" | "placeholder">;
	btnName?: MessageInterface.EWord;
	submit: (val: TMoleculeFormSchemaInputForm) => void;
}

export type TMoleculeFormSchemaInputForm = {
	input: string;
};

const Index: FC<IComponent> = (props) => {
	const { title, input, btnName, submit } = props;

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
			isFill(btnName) &&
			({
				type: "btn",
				options: {
					text: btnName,
					isFullWidth: true,
					color: "BLUE_2",
				},
			} satisfies TMoleculeFormSchemaField),
	};

	function isFill(val: unknown) {
		return val == null ? undefined : true;
	}

	const propsComponent: IParent = {
		schema: {
			extStyle: Styles.wrapper,
			value: [titleField, inputField, btnField],
		},
		form: { onSubmit: submit },
	};

	return <Component {...propsComponent} />;
};

export default Index;
