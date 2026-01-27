import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { TDeepCSSObject, TTagPartial } from "../../../ViewUtils.tsx";

type THTMLInputPick = TTagPartial<HTMLInputElement, "checked" | "onClick" | "disabled" | "name" | "type" | "value" | "defaultChecked">;

export interface IComponent extends THTMLInputPick {
	extStyles?: TDeepCSSObject;
}

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
