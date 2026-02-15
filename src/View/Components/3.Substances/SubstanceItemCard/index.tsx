import { Component } from "../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../CreateComponent.tsx";
import type { TImageComponent } from "../../0.Cores/Image";
import type { MessageInterface } from "../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";
import type { IComponent as IBtn } from "../../1.Atoms/AtomButton/Variables/AtomButtonMain";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = {
	click?: () => void;
	image: TImageComponent;
	name: MessageInterface.EWordAll;
	btn: IBtn[];
};

export default Component.Create(Model, Style, View, "SubstanceItemCard");
