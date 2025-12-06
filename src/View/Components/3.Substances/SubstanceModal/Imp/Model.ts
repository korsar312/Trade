import type { IComponent } from "../index";

function Model(props: IComponent) {
	const { isShow, form, type } = props;

	return { isShow, form, type };
}

export default Model;
