import type { FC } from "react";
import Style from "./Style.ts";
import Component, { type IComponent as IParent } from "../../index";
import type { TImageComponent } from "../../../../0.Cores/Image";
import type { StyleInterface } from "../../../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";

export type IComponent = {} & TPick & TBase & (TBig | TColor);

type TColor = Pick<IParent, "color"> & { isBig?: never };
type TBig = { isBig: true; color?: never };

type TPick = Pick<IParent, "isDisable" | "click" | "isFullWidth">;

type TBase = {
	icon: TImageComponent;
	colorIcon?: StyleInterface.TColorChoice;
};

const Index: FC<IComponent> = (props) => {
	const { icon, isBig, colorIcon, ...other } = props;

	const propsComponent: IParent = {
		...other,
		type: "submit",
		icons: { left: { value: [{ img: icon, size: isBig ? 30 : 20, color: colorIcon }] } },
		extStyles: Style.wrapper(isBig),
	};

	return <Component {...propsComponent} />;
};

export default Index;
