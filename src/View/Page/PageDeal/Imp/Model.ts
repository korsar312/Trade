import type { TModel } from "../../../CreateComponent.tsx";
import type { TComponent } from "../";
import { useParamPage } from "../../../../Logic/Libs/Hooks/useParamPage/useParam.ts";
import { useEffect } from "react";
import { Act, Pub } from "../../../Init.ts";
import PropsControlItemBtn from "../../../Components/Templates/Props/PropsControlItemBtn.ts";

function Model({ Props }: TModel<TComponent>) {
	const {} = Props;

	const param = useParamPage("ITEM");
	const itemId = param.id || "";
	const btnProps = PropsControlItemBtn(Act, { id: itemId });

	const image = Act.Listing.getImage(itemId);

	useEffect(() => {
		Pub.requestOrder({ dealId: param?.id });
	}, [itemId]);

	function goBack() {
		Act.Router.goBack();
	}

	return { image, itemId, btnProps, goBack };
}

export default Model;
