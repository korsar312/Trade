import { Component } from "../../../Init.ts";
import Model from "./Imp/Model.ts";
import Style from "./Imp/Style.ts";
import View from "./Imp/View.tsx";
import type { TView } from "../../../CreateComponent.tsx";
import type { TMoleculeRowControlCompType } from "../../2.Molecules/MoleculeRowControl";
import type { TComponent as ITextarea } from "../../1.Atoms/AtomTextarea";
import type { TComponent as IBtn } from "../../1.Atoms/AtomButton/Variables/AtomButtonIcon";
import type { TMoleculeChatFieldText } from "../../2.Molecules/MoleculeChatField";
import type { RefObject } from "react";

export type TPresent = TView<typeof Model, typeof Style>;

export type TComponent = {
	btn?: Partial<IBtn>;
	ref?: RefObject<HTMLTextAreaElement | null>;
	input?: Partial<ITextarea>;
	sendFn?: (val: string) => Promise<void>;
	titleRow: TMoleculeRowControlCompType[];
	messageList: TMoleculeChatFieldText[];
};

export default Component.Create(Model, Style, View, "SubstanceChat");
