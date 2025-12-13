import type { IComponent } from "../index";

function Model(props: IComponent) {
	const { compRow } = props;

	return { compRow };
}

export default Model;
