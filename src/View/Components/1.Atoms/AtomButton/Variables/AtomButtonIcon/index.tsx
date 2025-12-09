import type { FC } from "react";
import Style from "./Style.ts";
import Component, { type IComponent as IParent } from "../../index";
import type { TImageComponent } from "../../../../0.Cores/Image";

export type IComponent = TBase & (TBig | TColor);

type TBase = Pick<IParent, "isDisable" | "click"> & { icon: TImageComponent };
type TColor = Pick<IParent, "color"> & { isBig?: never };
type TBig = { isBig: true; color?: never };

const Index: FC<IComponent> = (props) => {
	const { icon, isBig } = props;

	const propsComponent: IParent = {
		...props,
		type: "submit",
		icons: { left: { value: [{ img: icon, size: isBig ? 30 : 20 }] } },
		extStyles: Style.wrapper(isBig),
	};

	return <Component {...propsComponent} />;
};

export default Index;
