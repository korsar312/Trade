import { Component } from "../../../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../../../CreateComponent.tsx";
import { observer } from "mobx-react";
import type { TComponent as IProp } from "../../../../3.Substances/SubstanceModal";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = {
	submitFn: (val: number | null) => void;
} & Pick<IProp, "bgClick" | "color">;

export default observer(Component.Create(Model, Style, View, "TemplateModalFormChoicePriceParam"));
