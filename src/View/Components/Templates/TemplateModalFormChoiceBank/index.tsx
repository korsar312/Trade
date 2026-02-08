import Model from "./Model.ts";
import View, { type IComponent as IProp } from "../../../Components/3.Substances/SubstanceModal/index.tsx";
import { observer } from "mobx-react";
import type { CatalogueInterface } from "../../../../Logic/Core/Services/ServiceCatalogue/Catalogue.interface.ts";

export interface IComponent extends TModal {
	submitFn: (val: CatalogueInterface.EBank[]) => void;
}

type TModal = Pick<IProp, "bgClick" | "color">;

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default observer(Index);
