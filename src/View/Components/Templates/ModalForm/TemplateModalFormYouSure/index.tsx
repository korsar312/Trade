import Model from "./Model.ts";
import View, { type TComponent as IProp } from "../../../3.Substances/SubstanceModal";
import { observer } from "mobx-react";

export interface IComponent extends TModal {
	submitFn: (val: boolean) => void;
}

type TModal = Pick<IProp, "bgClick" | "color">;

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default observer(Index);
