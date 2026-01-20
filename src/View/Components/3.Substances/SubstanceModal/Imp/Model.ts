import type { IComponent } from "../index";

function Model(props: IComponent) {
	const { isShow, form, color } = props;

	return { isShow, form, color };
}

export default Model;
