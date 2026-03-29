import type { TModel } from "../../../CreateComponent.tsx";
import type { TComponent } from "../";
import { useParamPage } from "../../../../Logic/Libs/Hooks/useParamPage/useParam.ts";
import { useEffect } from "react";
import type { ItemInterface } from "../../../../Logic/Domain/Services/ServiceItem/Item.interface.ts";
import PropsControlItemBtn from "../../../Components/Templates/Props/PropsControlItemBtn.ts";

function Model({ Props, Act, Pub }: TModel<TComponent>) {
	const {} = Props;

	const param = useParamPage("ITEM");
	const itemId = param.id || "";
	const itemType = (param.type || "CARD") as ItemInterface.ETypeItem;
	const btnProps = PropsControlItemBtn(Act, { id: itemId });

	const image = Act.Listing.getImage(itemId);

	useEffect(() => {
		Pub.requestLot({ id: itemId, type: itemType });
	}, [itemId]);

	function goBack() {
		Act.Router.goBack();
	}

	return { image, itemId, btnProps, goBack };
}

export default Model;
