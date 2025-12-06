import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { IComponent as IIcon } from "../../0.Cores/Image";
import type { IComponent as IText } from "../../0.Cores/Text";
import type { TDeepCSSObject } from "../../../ViewUtils.tsx";

export interface IComponent {
	row: TInformField[];
	extStyles?: TDeepCSSObject;
}

export type TInformField = {
	icon?: IIcon;
	text?: IText;
	extStyles?: TDeepCSSObject;
};

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
