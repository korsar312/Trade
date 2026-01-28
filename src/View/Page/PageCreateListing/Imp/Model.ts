import type { IComponent } from "../index";
import { useParamPage } from "../../../../Logic/Libs/Hooks/useParamPage/useParam.ts";
import { type CatalogueInterface, CatalogueTypeItemArr } from "../../../../Logic/Core/Services/ServiceCatalogue/Catalogue.interface.ts";
import { Act } from "../../../../Logic/Core";

function Model(props: IComponent) {
	const {} = props;

	const param = useParamPage("CREATE_LISTING");
	const typeParam = param.type as CatalogueInterface.ETypeItem;
	const typeFormat: CatalogueInterface.ETypeItem = CatalogueTypeItemArr.includes(typeParam) ? typeParam : "CARD";

	function changeTab(type: CatalogueInterface.ETypeItem) {
		return Act.Router.goTo("CREATE_LISTING", { type }, { noHistory: true });
	}

	return { typeFormat, changeTab };
}

export default Model;
