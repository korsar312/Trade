import type { IComponent } from "../index";

function Model(props: IComponent) {
	const { extStyles, row } = props;

	return { extStyles, row };
}

export default Model;
