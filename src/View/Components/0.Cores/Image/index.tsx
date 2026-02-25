import { Component } from "../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../CreateComponent.tsx";
import type { TDeepCSSObject } from "../../../ViewUtils.tsx";
import type { StyleInterface } from "../../../../Logic/Domain/Services/ServiceStyle/Style.interface.ts";
import type { EImages } from "./Images.tsx";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = {
	extStyle?: TDeepCSSObject;
	img: TImageComponent;
	size?: TImagesSize;
	color?: StyleInterface.TColorChoice;
};

export type TImagesSize = 20 | 22 | 24 | 30 | 40 | 60 | "100%";
export type TImageComponent = EImages | string | undefined;

export default Component.Create(Model, Style, View, "Image");
