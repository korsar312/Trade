import type { TModel } from "../../../../../../CreateComponent.tsx";
import type { TComponent } from "../";
import type { TComponent as IParent } from "../../../index.tsx";

function Model({ Props }: TModel<TComponent>) {
	const { icon, isBig, colorIcon, isSubmit, ...other } = Props;

	const propsComponent: IParent = {
		type: "submit",
		...other,
		icons: { left: { value: [{ img: icon, size: isBig ? 30 : 20, color: colorIcon }] } },
	};

	return { propsComponent, isBig };
}

export default Model;
