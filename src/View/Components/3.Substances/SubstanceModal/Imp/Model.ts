import type { IComponent } from "../index";

function Model(props: IComponent) {
	const { isShow, form } = props;

	return { isShow, form };
}

export default Model;
