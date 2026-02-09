import Model from "./Imp/Model.ts";
import View from "./Imp/View.tsx";
import { observer } from "mobx-react";
import type { CatalogueInterface } from "../../../../Logic/Core/Services/ServiceCatalogue/Catalogue.interface.ts";

export interface IComponent {
	typeItem: CatalogueInterface.ETypeItem;
	changeTabFn: (tab: CatalogueInterface.ETypeItem) => void;
}

const Index = (props: IComponent) => {
	const model = Model(props);
	return <View {...model} />;
};

export default observer(Index);
