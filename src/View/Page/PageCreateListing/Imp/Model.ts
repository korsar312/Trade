import type { TModel } from "../../../CreateComponent.tsx";
import type { TComponent } from "../";
import { useParamPage } from "../../../../Logic/Libs/Hooks/useParamPage/useParam.ts";
import { type ItemInterface, ItemTypeItemArr } from "../../../../Logic/Domain/Services/ServiceItem/Item.interface.ts";

function Model({ Props, Act }: TModel<TComponent>) {
	const {} = Props;

	const param = useParamPage("CREATE_LISTING");
	const typeParam = param.type as ItemInterface.ETypeItem;
	const typeFormat: ItemInterface.ETypeItem = ItemTypeItemArr.includes(typeParam) ? typeParam : "CARD";

	function changeTab(type: ItemInterface.ETypeItem) {
		return Act.Router.goTo("CREATE_LISTING", { type }, { noHistory: true });
	}

	return { typeFormat, changeTab };
}

export default Model;
