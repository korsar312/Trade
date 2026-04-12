import { Component } from "../../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../../CreateComponent.tsx";
import { observer } from "mobx-react";
import type { TComponent as IBtn } from "../../../../Components/1.Atoms/AtomButton/Variables/AtomButtonMain";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = Partial<IBtn>;

export default observer(Component.Create(Model, Style, View, "TemplateBtnBack"));
