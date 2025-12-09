import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { IComponent as IBtnImage } from "../../1.Atoms/AtomButton/Variables/AtomButtonIcon";
import type { IComponent as IBtnMain } from "../../1.Atoms/AtomButton/Variables/AtomButtonMain";
import type { IComponent as IInput } from "../../1.Atoms/AtomInput";
import type { typesUtils } from "../../../../Logic/Libs/Util/TypesUtils.ts";

export interface IComponent {
	compRow: TSubstanceRowControlCompType[];
}

type TMap = {
	BTN_IMAGE: IBtnImage;
	BTN_MAIN: IBtnMain;
	SPACING: {};
	INPUT: IInput;
};

export type TSubstanceRowControlCompType = typesUtils.OptionsUnion<TMap, { id: string }>;

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
