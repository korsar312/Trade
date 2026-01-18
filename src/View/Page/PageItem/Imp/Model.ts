import type { IComponent } from "../index";
import type { CatalogueInterface } from "../../../../Logic/Core/Services/ServiceCatalogue/Catalogue.interface.ts";
import { useParamPage } from "../../../../Logic/Libs/Hooks/useParamPage/useParam.ts";
import { Act } from "../../../../Logic/Core";
import { useEffect } from "react";

function Model(props: IComponent) {
	const {} = props;

	const param = useParamPage("ITEM");
	const itemId = param.id || "";
	const itemType = (param.type || "CARD") as CatalogueInterface.ETypeItem;

	const image = Act.Catalogue.getImage(itemId);

	useEffect(() => {
		Act.Catalogue.requestItem(itemId, itemType);
	}, [itemId]);

	function goBack() {
		Act.Router.goBack();
	}

	return { image, itemId, goBack };
}

export default Model;
