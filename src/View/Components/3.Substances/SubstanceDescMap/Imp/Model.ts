import type { IComponent } from "../index";

function Model(props: IComponent) {
	const { rows } = props;

	return { rows };
}

export default Model;
