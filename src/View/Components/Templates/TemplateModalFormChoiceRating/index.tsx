import Model from "./Model.ts";
import View, { type IComponent as IProp } from "../../../Components/3.Substances/SubstanceModal";
import { observer } from "mobx-react";
import type { PublicInterface } from "../../../../Logic/Core/Services/Public.interface.ts";

export interface IComponent extends TModal {
	submitFn: (val: PublicInterface.TRating | null) => void;
}

type TModal = Pick<IProp, "bgClick" | "color">;

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default observer(Index);
