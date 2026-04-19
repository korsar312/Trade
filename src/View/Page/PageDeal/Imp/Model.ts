import type { TModel } from "../../../CreateComponent.tsx";
import type { TComponent } from "../";
import { useParamPage } from "../../../../Logic/Libs/Hooks/useParamPage/useParam.ts";
import { useEffect, useState } from "react";
import { Pub } from "../../../Init.ts";

function Model({ Props, Act }: TModel<TComponent>) {
	const {} = Props;

	const param = useParamPage("ITEM");
	const dealId = param.id || "";
	const listingId = Act.Deal.getListingId(dealId) || "";

	const image = Act.Listing.getImage(listingId);

	const [isShowChat, setIsShowChat] = useState(false);

	useEffect(() => {
		Pub.requestOrder({ dealId });
	}, [listingId]);

	function success() {
		Act.Router.goBack();
	}

	function cancel() {
		Act.Router.goBack();
	}

	function toggleChat() {
		setIsShowChat((old) => !old);
	}

	return { image, listingId, dealId, success, cancel, isShowChat, toggleChat };
}

export default Model;
