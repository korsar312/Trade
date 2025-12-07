import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { IComponent as IBtnImage } from "../../1.Atoms/AtomButton/Variables/AtomButtonIcon";
import type { IComponent as IBtnMain } from "../../1.Atoms/AtomButton/Variables/AtomButtonMain";
import type { IComponent as IInput } from "../../1.Atoms/AtomInput";

export interface IComponent {
	compRow: TSubstanceRowControlCompType[];
}

const Types = {
	BTN_IMAGE: "BTN_IMAGE",
	BTN_MAIN: "BTN_MAIN",
	SPACING: "SPACING",
	INPUT: "INPUT",
} as const;

export type ESubstanceRowControlCompType = keyof typeof Types;
export type TSubstanceRowControlCompType = TBtnImage | TBtnMain | TInput | TSpace;

type TOptions<T extends ESubstanceRowControlCompType, O> = { type: T; options: O; id: string };

type TBtnImage = TOptions<"BTN_IMAGE", IBtnImage>;
type TBtnMain = TOptions<"BTN_MAIN", IBtnMain>;
type TSpace = TOptions<"SPACING", {}>;
type TInput = TOptions<"INPUT", IInput>;

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
