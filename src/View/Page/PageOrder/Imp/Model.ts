import type { TModel } from "../../../CreateComponent.tsx";
import type { TComponent } from "../";
import { useParamPage } from "../../../../Logic/Libs/Hooks/useParamPage/useParam.ts";
import { useEffect } from "react";
import { Pub } from "../../../Init.ts";

function Model({ Props }: TModel<TComponent>) {
	const {} = Props;

	const params = useParamPage("ORDER");

	useEffect(() => {
		Pub.requestOrder({ dealId: params?.id });
	}, []);

	return Props;
}

export default Model;
