import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { TSubstanceTabsBtn } from "../../3.Substances/SubstanceTabs";
import type { IComponent as ICard } from "../../3.Substances/SubstanceItemCard";
import type { typesUtils } from "../../../../Logic/Libs/Util/TypesUtils.ts";

export interface IComponent {
	tabs: TSubstanceTabsBtn[];
	children: TStructuresTabCardCompType[];
}

type TMap = {
	ITEM_CARD: ICard;
};

export type TStructuresTabCardCompType = typesUtils.OptionsUnion<TMap, { id: string }>;

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
