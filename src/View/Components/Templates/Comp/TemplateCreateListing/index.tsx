import { Component } from "../../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../../CreateComponent.tsx";
import { observer } from "mobx-react";
import type { ItemInterface } from "../../../../../Logic/Domain/Services/ServiceItem/Item.interface.ts";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = {
	typeItem: ItemInterface.ETypeItem;
	changeTabFn: (tab: ItemInterface.ETypeItem) => void;
};

export default observer(Component.Create(Model, Style, View, "TemplateCreateListing"));
