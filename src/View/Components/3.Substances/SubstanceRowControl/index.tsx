import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { IComponent as IBtnImage } from "../../1.Atoms/AtomButton/Variables/AtomButtonIcon";

export interface IComponent {
	compRow: TSubstanceRowControlCompType[];
}

const Types = {
	BTN_IMAGE: "BTN_IMAGE",
	SPACING: "SPACING",
} as const;

export type ESubstanceRowControlCompType = keyof typeof Types;
export type TSubstanceRowControlCompType = TBtnImage | TSpace;

type TOptions<T extends ESubstanceRowControlCompType, O> = { type: T; options: O; id: string };

type TBtnImage = TOptions<"BTN_IMAGE", IBtnImage>;
type TSpace = TOptions<"SPACING", {}>;

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
