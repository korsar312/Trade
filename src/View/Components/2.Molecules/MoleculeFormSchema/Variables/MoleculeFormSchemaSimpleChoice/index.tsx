import Component, { type IComponent as IParent, type TMoleculeFormSchemaRow } from "../../index";
import Styles from "./Style.ts";
import type { FC } from "react";
import type { MessageInterface } from "../../../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";
import type { IComponent as IBtn } from "../../../../1.Atoms/AtomButton/Variables/AtomButtonMain";

export interface IComponent {
	title: MessageInterface.EWord;
	btnList: IBtn[];
	submit: (val: TMoleculeFormSchemaSimpleChoiceForm) => void;
}

export type TMoleculeFormSchemaSimpleChoiceForm = {
	indexChoice: number;
};

const Index: FC<IComponent> = (props) => {
	const { title, btnList, submit } = props;

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

	const btnFields: TMoleculeFormSchemaRow[] = btnList.map((el) => ({
		value: {
			type: "btn",
			options: el,
		},
	}));

	const propsComponent: IParent = {
		schema: {
			extStyle: Styles.wrapper,
			value: [titleField, ...btnFields],
		},
		form: { onSubmit: submit },
	};

	return <Component {...propsComponent} />;
};

export default Index;
