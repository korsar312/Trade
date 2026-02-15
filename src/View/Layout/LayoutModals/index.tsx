import { Component } from "../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../CreateComponent.tsx";
import { observer } from "mobx-react";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = {};

export default observer(Component.Create(Model, Style, View, "LayoutModals"));
