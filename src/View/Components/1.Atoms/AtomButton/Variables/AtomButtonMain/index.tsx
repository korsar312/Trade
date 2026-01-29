import type { FC } from "react";
import Style from "./Style.ts";
import Component, { type IComponent as IParent } from "../../index";
import type { TImageComponent } from "../../../../0.Cores/Image";
import type { MessageInterface } from "../../../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";

export interface IComponent extends Pick<IParent, "isDisable" | "click" | "color" | "isFullWidth" | "round" | "type"> {
	text: MessageInterface.EWordAll;
	leftImage?: TImageComponent;
	rightImage?: TImageComponent;
}

const Index: FC<IComponent> = (props) => {
	const { text, leftImage, rightImage, color, ...other } = props;

	const propsComponent: IParent = {
		...other,
		color: color,
		textVars: { value: [{ text }] },
		icons: {
			left: leftImage ? { value: [{ img: leftImage, size: 20 }] } : undefined,
			right: rightImage ? { value: [{ img: rightImage, size: 20 }] } : undefined,
		},
		extStyles: Style.wrapper,
	};

	return <Component {...propsComponent} />;
};

export default Index;
