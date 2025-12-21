import type { IComponent } from "../index";
import { useParamPage } from "../../../../Logic/Libs/Hooks/useParamPage/useParam.ts";
import { Act } from "../../../../Logic/Core";
import { useEffect } from "react";

function Model(props: IComponent) {
	const {} = props;

	const param = useParamPage("ITEM");
	const itemId = param.id || "";
	const image = Act.Catalogue.getImage(itemId);

	useEffect(() => {
		Act.Catalogue.requestItemDetail([itemId]);
	}, [itemId]);

	function goBack() {
		Act.Router.goBack();
	}

	return { image, itemId, goBack };
}

export default Model;
