import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { TDeepCSSObject } from "../../../ViewUtils.tsx";
import type { StyleInterface } from "../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";
import type { EImages } from "./Images.tsx";

export interface IComponent {
	extStyle?: TDeepCSSObject;
	img: TImageComponent;
	size?: TImagesSize;
	color?: StyleInterface.TColorChoice;
}

export type TImagesSize = 20 | 22 | 24 | 40 | 60 | "100%";

export type TImageComponent = EImages | string | undefined;

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
