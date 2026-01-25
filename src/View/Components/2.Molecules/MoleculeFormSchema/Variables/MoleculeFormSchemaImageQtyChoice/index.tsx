import Component, { type IComponent as IParent, type TMoleculeFormSchemaRow } from "../../index";
import Styles from "./Style.ts";
import { type FC, useState } from "react";
import type { MessageInterface } from "../../../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";
import type { TImageComponent } from "../../../../0.Cores/Image";

export interface IComponent {
	title: MessageInterface.EWord;
	imageList: TMoleculeFormSchemaChoice[];
	btnName: MessageInterface.EWord;
	submit: (val: TMoleculeFormSchemaImageQtyChoiceForm) => void;
}

export type TMoleculeFormSchemaImageQtyChoiceForm = { qtyIndex: string };

type TMoleculeFormSchemaChoice = {
	img: TImageComponent;
};

const Index: FC<IComponent> = (props) => {
	const { title, imageList, btnName, submit } = props;

	const [qtyImage, setQtyImage] = useState<number>();

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

	const imagesField: TMoleculeFormSchemaRow = {
		extStyle: Styles.row,
		value: imageList.map((el, i) => ({
			value: {
				type: "btnIcon",
				options: {
					icon: el.img,
					isBig: true,
					type: "button",
					colorIcon: typeof qtyImage === "number" && i <= qtyImage ? "BLUE_3" : "SECOND_1",
					click: () => setQtyImage(i),
				},
			},
		})),
	};

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
		form: { onSubmit: submit },
	};

	return <Component {...propsComponent} />;
};

export default Index;
