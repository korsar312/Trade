import Component, { type TComponent as IParent, type TMoleculeFormSchemaField, type TMoleculeFormSchemaRow } from "../../index";
import Styles from "./Style.ts";
import type { FC } from "react";
import type { TComponent as IInput } from "../../../../../Components/1.Atoms/AtomInput/";
import type { TComponent as IText } from "../../../../0.Cores/Text";
import type { IComponent as IBtn } from "../../../../1.Atoms/AtomButton/Variables/AtomButtonMain";

export interface IComponent {
	form?: Omit<IParent["form"], "onSubmit">;
	title: IText;
	input?: Omit<IInput, "name">;
	btn?: Omit<IBtn, "type">;
	submit?: (val: TSchemaInput) => void;
}

export type TSchemaInput = { input: string };

const Index: FC<IComponent> = (props) => {
	const { title, input, btn, submit, form } = props;

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
			btn &&
			({
				type: "btn",
				options: {
					isFullWidth: true,
					color: "BLUE_2",
					...btn,
					type: "submit",
				},
			} satisfies TMoleculeFormSchemaField),
	};

	const propsComponent: IParent = {
		schema: {
			extStyle: Styles.wrapper,
			value: [titleField, inputField, btnField],
		},
		form: { onSubmit: submit, ...form },
	};

	return <Component {...propsComponent} />;
};

export default Index;
