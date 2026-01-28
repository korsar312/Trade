import Component, { type IComponent as IParent, type TMoleculeFormSchemaField, type TMoleculeFormSchemaRow } from "../../index";
import Styles from "./Style.ts";
import type { FC } from "react";
import type { MessageInterface } from "../../../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";
import type { TImageComponent } from "../../../../0.Cores/Image";

export interface IComponent {
	title: MessageInterface.EWord;
	labelImg: TImageComponent;
	btnName?: MessageInterface.EWord;
	submit: (val: TMoleculeFormSchemaInputForm) => void;
}

export type TMoleculeFormSchemaInputForm = {
	input: string;
};

const Index: FC<IComponent> = (props) => {
	const { title, labelImg, btnName, submit } = props;

	const titleField: TMoleculeFormSchemaRow = {
		extStyle: Styles.content,
		value: {
			type: "text",
			options: {
				text: title,
				color: "SECOND_1",
				font: "BodyMain",
			},
		},
	};

	const inputField: TMoleculeFormSchemaRow = {
		value: {
			type: "input",
			options: {
				iconsLeft: labelImg,
				color: "MAIN_4",
				type: "number",
				name: "input",
			},
		},
	};

	const btnField: TMoleculeFormSchemaRow[] = {
		...(btnName
			? [
					{
						value: {
							type: "btn",
							options: {
								text: btnName,
								isFullWidth: true,
								color: "BLUE_2",
							},
						} satisfies TMoleculeFormSchemaField,
					},
				]
			: []),
	};

	const propsComponent: IParent = {
		schema: {
			extStyle: Styles.wrapper,
			value: [titleField, inputField, ...btnField],
		},
		form: { onSubmit: submit },
	};

	return <Component {...propsComponent} />;
};

export default Index;
