import type { IComponent } from "../index";

function Model(props: IComponent) {
	const { image, name, price } = props;

	return { image, name, price };
}

export default Model;
