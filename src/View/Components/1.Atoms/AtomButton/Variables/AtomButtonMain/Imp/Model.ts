import type { TModel } from "../../../../../../CreateComponent.tsx";
import type { TComponent } from "../";
import type { TComponent as IParent } from "../../../index.tsx";

function Model({ Props }: TModel<TComponent>) {
	const { text, leftImage, rightImage, color, ...other } = Props;

	const propsComponent: IParent = {
		...other,
		color: color,
		textVars: { value: [{ text }] },
		icons: {
			left: leftImage ? { value: [{ img: leftImage, size: 20 }] } : undefined,
			right: rightImage ? { value: [{ img: rightImage, size: 20 }] } : undefined,
		},
	};

	return { propsComponent };
}

export default Model;
