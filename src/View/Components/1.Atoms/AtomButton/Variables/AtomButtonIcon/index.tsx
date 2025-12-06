import type { FC } from "react";
import Style from "./Style.ts";
import Component, { type IComponent as IParent } from "../../index";
import type { TImageComponent } from "../../../../0.Cores/Image";

export interface IComponent extends Pick<IParent, "isDisable" | "click" | "color"> {
	icon: TImageComponent;
}

const Index: FC<IComponent> = (props) => {
	const { icon, color } = props;

	const propsComponent: IParent = {
		...props,
		color: color || "MAIN_2",
		type: "submit",
		icons: { left: { value: [{ img: icon, size: 20 }] } },
		extStyles: Style.wrapper,
	};

	return <Component {...propsComponent} />;
};

export default Index;
