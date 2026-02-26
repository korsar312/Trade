import type { TModel } from "../../../CreateComponent.tsx";
import type { TComponent } from "../";
import type { CatalogueInterface } from "../../../../Logic/Domain/Services/ServiceCatalogue/Catalogue.interface.ts";
import { useParamPage } from "../../../../Logic/Libs/Hooks/useParamPage/useParam.ts";
import { useEffect } from "react";

function Model({ Props, Act }: TModel<TComponent>) {
	const {} = Props;

	const param = useParamPage("ITEM");
	const itemId = param.id || "";
	const itemType = (param.type || "CARD") as CatalogueInterface.ETypeItem;

	const image = Act.Catalogue.getImage(itemId);

	useEffect(() => {
		Act.Catalogue.requestItem(itemId, itemType);
	}, [itemId]);

	function buyHandler() {
		Act.Payment.buyLot("");
	}

	function goBack() {
		Act.Router.goBack();
	}

	return { image, itemId, buyHandler, goBack };
}

export default Model;
