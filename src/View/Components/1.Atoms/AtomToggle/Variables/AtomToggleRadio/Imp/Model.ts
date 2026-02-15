import type { TModel } from "../../../../../../CreateComponent.tsx";
import type { TComponent } from "../";
import type { TComponent as IParent } from "../../../index.tsx";

function Model({ Props }: TModel<TComponent>) {
	const { ...other } = Props;

	const propsComponent: IParent = {
		...other,
		type: "radio",
	};

	return { propsComponent };
}

export default Model;
