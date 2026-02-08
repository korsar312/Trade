import Component, { type IComponent as IParent, type TMoleculeFormSchemaRow } from "../../index";
import Styles from "./Style.ts";
import { type FC, useState } from "react";
import type { IComponent as IText } from "../../../../0.Cores/Text";
import type { IComponent as IBtn } from "../../../../1.Atoms/AtomButton/Variables/AtomButtonMain";
import type { IComponent as IBtnIcon } from "../../../../1.Atoms/AtomButton/Variables/AtomButtonIcon";

export interface IComponent {
	form?: Omit<IParent["form"], "onSubmit">;
	title: IText;
	btnImageList: Omit<IBtnIcon, "click" | "type">[];
	btn: Omit<IBtn, "type">;
	submit: (val: TMoleculeFormSchemaImageQtyChoiceForm) => void;
}

export type TMoleculeFormSchemaImageQtyChoiceForm = { qtyIndex: string };

const Index: FC<IComponent> = (props) => {
	const { title, btnImageList, btn, submit, form } = props;

	const [qtyImage, setQtyImage] = useState<number>();

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

	const imagesField: TMoleculeFormSchemaRow = {
		extStyle: Styles.row,
		value: btnImageList.map((el, i) => ({
			value: {
				type: "btnIcon",
				options: {
					isBig: true,
					colorIcon: qtyImage != null && i <= qtyImage ? "BLUE_3" : "SECOND_1",
					...el,
					click: () => setQtyImage(i),
					type: "button",
				},
			},
		})),
	};

	const btnField: TMoleculeFormSchemaRow = {
		value: {
			type: "btn",
			options: {
				isFullWidth: true,
				color: "BLUE_2",
				...btn,
				type: "submit",
			},
		},
	};

	const hiddenField: TMoleculeFormSchemaRow = {
		extStyle: Styles.hidden,
		value: {
			type: "input",
			options: {
				value: qtyImage == null ? "" : String(qtyImage),
				name: "qtyIndex",
			},
		},
	};

	const propsComponent: IParent = {
		schema: {
			extStyle: Styles.wrapper,
			value: [titleField, imagesField, btnField, hiddenField],
		},
		form: { onSubmit: submit, ...form },
	};

	return <Component {...propsComponent} />;
};

export default Index;
