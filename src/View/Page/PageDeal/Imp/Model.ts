import type { TModel } from "../../../CreateComponent.tsx";
import type { TComponent } from "../";
import { useParamPage } from "../../../../Logic/Libs/Hooks/useParamPage/useParam.ts";
import { useAutoFocus } from "../../../../Logic/Libs/Hooks/useAutoFocus/useAutoFocus.ts";
import { useEffect, useRef, useState } from "react";
import { Pub } from "../../../Init.ts";

function Model({ Props, Act }: TModel<TComponent>) {
	const {} = Props;

	const param = useParamPage("ITEM");
	const areaRef = useRef<HTMLTextAreaElement>(null);

	const dealId = param.id || "";
	const listingId = Act.Deal.getListingId(dealId) || "";

	const image = Act.Listing.getImage(listingId);

	const [isShowChat, setIsShowChat] = useState(false);

	useEffect(() => {
		Pub.requestOrder({ dealId });
	}, [listingId]);

	useAutoFocus(areaRef, isShowChat);

	function confirmAction(isBuy: boolean) {
		const action = isBuy ? success : cancel;

		return () => Act.App.addModals("CONFIRM", (isTrue) => isTrue && action());
	}

	async function success() {
		await Act.Deal.dealComplete(dealId);
		await Act.Wallet.refreshBalance();
		Act.Router.goTo("DEAL_LIST");
	}

	function cancel() {
		Act.Router.goBack();
	}

	function toggleChat() {
		setIsShowChat((old) => !old);
	}

	return { image, listingId, dealId, confirmAction, isShowChat, toggleChat, areaRef };
}

export default Model;
