import type { IComponent } from "../index";

function Model(props: IComponent) {
	const { btnRow, children } = props;

	return { btnRow, children };
}

export default Model;
