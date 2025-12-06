import type { IComponent } from "../index";

function Model(props: IComponent) {
	const { image, name, btn } = props;

	return { image, name, btn };
}

export default Model;
