import type { FC } from "react";
import Style from "./Style.ts";
import Component, { type IComponent as IParent } from "../../index";
import type { typesUtils } from "../../../../../../Logic/Libs/Util/TypesUtils.ts";

export type IComponent = typesUtils.PartialRequired<IParent, "children"> & {};

const Index: FC<IComponent> = (props) => {
	const { color, extStyle } = props;

	const propsComponent: IParent = {
		...props,
		color: color || "SECOND_1",
		extStyle: [Style.wrapper, extStyle],
	};

	return <Component {...propsComponent} />;
};

export default Index;
