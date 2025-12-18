import type { IComponent } from "../index";

function Model(props: IComponent) {
	const { children } = props;

	return { children };
}

export default Model;
