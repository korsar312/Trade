import { Component } from "../../../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../../../CreateComponent.tsx";
import { type TComponent as IParent } from "../../index";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = IParent;

export default Component.Create(Model, Style, View, "AtomToggleCheck");
