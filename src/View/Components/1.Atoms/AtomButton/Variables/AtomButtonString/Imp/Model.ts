import type { TModel } from "../../../../../../CreateComponent.tsx";
import type { TComponent } from "../";
import type { TComponent as IParent } from "../../../index.tsx";

function Model({ Props }: TModel<TComponent>) {
	const { isDisable, click, type, icon, ...other } = Props;

	const btnProps = { isDisable, click, type };
	const color = other.color || "BLUE_3";

	const propsComponent: IParent = {
		...btnProps,
		icons: { right: { value: [{ color, img: icon }] } },
		textVars: { value: [{ color, ...other }] },
	};

	return { propsComponent };
}

export default Model;
