import type { IComponent } from "../index";

function Model(props: IComponent) {
	const { tabs, children } = props;

	return { tabs, children };
}

export default Model;
