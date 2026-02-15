import type { TModel } from "../../../../../../CreateComponent.tsx";
import type { TComponent } from "../";
import type { TComponent as IParent, TMoleculeFormSchemaRow } from "../../../index.tsx";
import { useState } from "react";
import Styles from "./Style.ts";

function Model({ Props }: TModel<TComponent>) {
	const { title, btnImageList, btn, submit, form } = Props;

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

	return { propsComponent };
}

export default Model;
