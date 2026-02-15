import type { TModel } from "../../../CreateComponent.tsx";
import type { TComponent } from "../";
import { useParamPage } from "../../../../Logic/Libs/Hooks/useParamPage/useParam.ts";
import { type CatalogueInterface, CatalogueTypeItemArr } from "../../../../Logic/Core/Services/ServiceCatalogue/Catalogue.interface.ts";

function Model({ Props, Act }: TModel<TComponent>) {
	const {} = Props;

	const param = useParamPage("CREATE_LISTING");
	const typeParam = param.type as CatalogueInterface.ETypeItem;
	const typeFormat: CatalogueInterface.ETypeItem = CatalogueTypeItemArr.includes(typeParam) ? typeParam : "CARD";

	function changeTab(type: CatalogueInterface.ETypeItem) {
		return Act.Router.goTo("CREATE_LISTING", { type }, { noHistory: true });
	}

	return { typeFormat, changeTab };
}

export default Model;
