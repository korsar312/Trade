import { Component } from "../../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../../CreateComponent.tsx";
import { observer } from "mobx-react";
import type { TComponent as IProp } from "../../../3.Substances/SubstanceModal";
import type { WalletInterface } from "../../../../../Logic/Domain/Services/ServiceWallet/Wallet.interface.ts";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = {
	submitFn: (val: WalletInterface.TTranche) => void;
} & Pick<IProp, "bgClick" | "color">;

export default observer(Component.Create(Model, Style, View, "TemplateModalFormWithdraw"));
