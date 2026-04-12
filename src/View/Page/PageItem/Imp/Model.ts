import type { TModel } from "../../../CreateComponent.tsx";
import type { TComponent } from "../";
import { useParamPage } from "../../../../Logic/Libs/Hooks/useParamPage/useParam.ts";
import { useEffect } from "react";
import type { ItemInterface } from "../../../../Logic/Domain/Services/ServiceItem/Item.interface.ts";
import PropsControlItemBtn from "../../../Components/Templates/Props/PropsControlItemBtn.ts";

function Model({ Props, Act, Pub }: TModel<TComponent>) {
	const {} = Props;

	const param = useParamPage("ITEM");
	const listingId = param.id || "";
	const itemType = (param.type || "CARD") as ItemInterface.ETypeItem;
	const btnProps = PropsControlItemBtn(Act, { id: listingId });

	const image = Act.Listing.getImage(listingId);

	useEffect(() => {
		Pub.requestLot({ id: listingId, type: itemType });
	}, [listingId]);

	return { image, listingId, btnProps };
}

export default Model;
