import Component, { type IComponent as IParent, type TMoleculeFormSchemaField, type TMoleculeFormSchemaRow } from "../../index";
import Styles from "./Style.ts";
import type { FC } from "react";
import type { MessageInterface } from "../../../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";
import type { TImageComponent } from "../../../../0.Cores/Image";

export interface IComponent {
	title: MessageInterface.EWord;
	choiceList: TMoleculeFormSchemaChoice[];
	btnName: MessageInterface.EWord;
	submit: (val: TMoleculeFormSchemaRadioChoiceForm) => void;
}

export type TMoleculeFormSchemaRadioChoiceForm = { radio: string };

type TMoleculeFormSchemaChoice = {
	name: string;
	title: string;
	img?: TImageComponent;
};

const Index: FC<IComponent> = (props) => {
	const { title, choiceList, btnName, submit } = props;

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

	const switchField: TMoleculeFormSchemaRow[] = choiceList.map((el, i) => ({
		extStyle: Styles.switch,
		value: [
			{
				value: {
					type: "radio",
					options: {
						name: "radio",
						value: el.name,
						defaultChecked: i == 0,
					},
				},
			},
			isFill(el.img) && {
				value: {
					type: "img",
					options: {
						img: el.img,
						color: "SECOND_1",
						size: 22,
					},
				} satisfies TMoleculeFormSchemaField,
			},
			{
				value: {
					type: "text",
					options: {
						text: el.title,
					},
				},
			},
		],
	}));

	const btnField: TMoleculeFormSchemaRow = {
		value: {
			type: "btn",
			options: {
				text: btnName,
				isFullWidth: true,
				color: "BLUE_2",
			},
		},
	};

	function isFill(val: unknown) {
		return val == null ? undefined : true;
	}

	const propsComponent: IParent = {
		schema: {
			extStyle: Styles.wrapper,
			value: [titleField, ...switchField, btnField],
		},
		form: { onSubmit: submit },
	};

	return <Component {...propsComponent} />;
};

export default Index;
