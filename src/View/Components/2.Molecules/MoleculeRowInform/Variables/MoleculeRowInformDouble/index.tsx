import { type FC } from "react";
import Component, { type IComponent as IParent } from "../../index";
import type { MessageInterface } from "../../../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";
import type { TImageComponent } from "../../../../0.Cores/Image";
import type { StyleInterface } from "../../../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";

export interface IComponent {
	right: TMoleculeRowInformDoubleField;
	left: TMoleculeRowInformDoubleField;
}

export type TMoleculeRowInformDoubleField = {
	text: MessageInterface.EWordAll;
	icon: TImageComponent;
	iconColor?: StyleInterface.TColorChoice;
};

const Index: FC<IComponent> = (props) => {
	const { right, left } = props;

	const rowLeft = getType(left);
	const rowRight = getType(right);

	function getType(side: TMoleculeRowInformDoubleField): [MessageInterface.EWordAll, TImageComponent, StyleInterface.TColorChoice] {
		return [side.text, side.icon, side.iconColor];
	}

	const propsComponent: IParent = {
		row: [rowLeft, rowRight].map(([text, image, imgColor]) => ({
			text: { text: text, font: "BlockHeading" },
			icon: { img: image, size: 20, color: imgColor },
		})),
	};

	return <Component {...propsComponent} />;
};

export default Index;
