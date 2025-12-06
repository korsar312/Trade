import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import type { ReactNode } from "react";
import type { TDeepCSSObject } from "../../../ViewUtils.tsx";
import type { typesUtils } from "../../../../Logic/Libs/Util/TypesUtils.ts";
import type { TBPItem } from "../../../../Logic/Config/List/Consts.ts";

export type TComponent = {
	children?: ReactNode;
	extStyle?: TDeepCSSObject;
	space?: number;
} & typesUtils.XOR<TContainer, TItem>;

type TContainer = {
	container: true;
};

type TItem = {
	item: true;
} & TGridBPList;

export type TGridBPCont = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "auto" | false;
export type TGridBPList = Record<TBPItem, TGridBPCont>;

const Index = (props: TComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default Index;
