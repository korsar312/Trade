import Component, { type IComponent as IParent, type TMoleculeFormSchemaRow } from "../../index";
import Styles from "./Style.ts";
import type { FC } from "react";
import type { MessageInterface } from "../../../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";
import type { TAtomInputText } from "../../../../1.Atoms/AtomInput";
import type { IComponent as IInput } from "../../../../1.Atoms/AtomInput/";
import type { TImageComponent } from "../../../../0.Cores/Image";

export interface IComponent {
	title: MessageInterface.EWord;
	labelLog: MessageInterface.EWord;
	labelPas: MessageInterface.EWord;
	btnImg: TImageComponent;
	submit: (val: TMoleculeFormSchemaLoginForm) => void;
}

export type TMoleculeFormSchemaLoginForm = {
	login: string;
	password: string;
};

const Index: FC<IComponent> = (props) => {
	const { title, submit, labelPas, labelLog, btnImg } = props;

	const textEl: TAtomInputText = { text: "", font: "BodyMain" };

	const logParam: IInput = { initText: textEl, name: "login" };
	const passParam: IInput = { initText: textEl, name: "password" };

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

	const btnField: TMoleculeFormSchemaRow = {
		value: {
			type: "btnIcon",
			options: {
				icon: btnImg,
			},
		},
	};

	function inputField(label: MessageInterface.EWord, inputParam: IInput): TMoleculeFormSchemaRow {
		return {
			extStyle: Styles.content,
			value: [
				{
					value: {
						type: "text",
						options: {
							text: label,
							font: "LabelMedium",
						},
					},
				},
				{
					value: {
						type: "input",
						options: inputParam,
					},
				},
			],
		};
	}

	const propsComponent: IParent = {
		schema: {
			extStyle: Styles.wrapper,
			value: [titleField, inputField(labelLog, logParam), inputField(labelPas, passParam), btnField],
		},
		form: { onSubmit: submit },
	};

	return <Component {...propsComponent} />;
};

export default Index;
