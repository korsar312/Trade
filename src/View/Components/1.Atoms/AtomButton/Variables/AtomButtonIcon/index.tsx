import type { FC } from "react";
import Style from "./Style.ts";
import Component, { type TComponent as IParent } from "../../index";
import type { TImageComponent } from "../../../../0.Cores/Image";
import type { StyleInterface } from "../../../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";

export interface IComponent extends TPick {
	icon: TImageComponent;
	colorIcon?: StyleInterface.TColorChoice;
	isSubmit?: boolean;
	isBig?: boolean;
}

type TPick = Pick<IParent, "isDisable" | "click" | "isFullWidth" | "type" | "color">;

const Index: FC<IComponent> = (props) => {
	const { icon, isBig, colorIcon, isSubmit, ...other } = props;

	const propsComponent: IParent = {
		type: "submit",
		...other,
		icons: { left: { value: [{ img: icon, size: isBig ? 30 : 20, color: colorIcon }] } },
		extStyles: Style.wrapper(isBig),
	};

	return <Component {...propsComponent} />;
};

export default Index;
