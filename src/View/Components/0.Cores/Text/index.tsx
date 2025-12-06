import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { MessageInterface } from "../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";
import type { StyleInterface } from "../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";
import type { TDeepCSSObject } from "../../../ViewUtils.tsx";

export interface IComponent {
	text: MessageInterface.EWordAll;
	caseWord?: MessageInterface.ECase;
	font?: StyleInterface.EFont;
	color?: StyleInterface.TColorChoice;
	pos?: TTextPos;
	opacity?: number;
	extStyle?: TDeepCSSObject;
	addContent?: MessageInterface.EWordAll[];
}

export type TTextPos = "left" | "right" | "center";

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
