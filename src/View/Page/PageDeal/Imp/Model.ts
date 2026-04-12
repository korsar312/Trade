import type { TModel } from "../../../CreateComponent.tsx";
import type { TComponent } from "../";
import { useParamPage } from "../../../../Logic/Libs/Hooks/useParamPage/useParam.ts";
import { useEffect } from "react";
import { Pub } from "../../../Init.ts";

function Model({ Props, Act }: TModel<TComponent>) {
	const {} = Props;

	const param = useParamPage("ITEM");
	const dealId = param.id || "";
	const listingId = Act.Deal.getListingId(dealId) || "";

	const image = Act.Listing.getImage(listingId);

	useEffect(() => {
		Pub.requestOrder({ dealId: param?.id });
	}, [listingId]);

	function success() {
		Act.Router.goBack();
	}

	function cancel() {
		Act.Router.goBack();
	}

	return { image, listingId, success, cancel };
}

export default Model;
