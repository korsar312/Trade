import { Component } from "../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../CreateComponent.tsx";
import type { IComponent as IBtnImage } from "../../1.Atoms/AtomButton/Variables/AtomButtonIcon";
import type { IComponent as IBtnMain } from "../../1.Atoms/AtomButton/Variables/AtomButtonMain";
import type { TComponent as IInput } from "../../1.Atoms/AtomInput";
import type { TComponent as ILoad } from "../../1.Atoms/AtomLoadRow";
import type { TComponent as IText } from "../../0.Cores/Text";
import type { TComponent as IIcon } from "../../0.Cores/Image";
import type { typesUtils } from "../../../../Logic/Libs/Util/TypesUtils.ts";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = {
	compRow: TMoleculeRowControlCompType[];
};

type TMap = {
	BTN_IMAGE: IBtnImage;
	BTN_MAIN: IBtnMain;
	SPACING: {};
	INPUT: IInput;
	TEXT: IText;
	ICON: IIcon;
	LOAD: ILoad;
};

export type TMoleculeRowControlCompType = typesUtils.OptionsUnion<TMap, { id: string }>;

export default Component.Create(Model, Style, View);
