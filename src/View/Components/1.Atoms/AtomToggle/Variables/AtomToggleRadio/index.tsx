import type { FC } from "react";
import Style from "./Style.ts";
import Component, { type IComponent as IParent } from "../../index";

export interface IComponent extends IParent {}

const Index: FC<IComponent> = (props) => {
	const {} = props;

	const propsComponent: IParent = {
		...props,
		type: "radio",
		extStyles: Style.wrapper,
	};

	return <Component {...propsComponent} />;
};

export default Index;
