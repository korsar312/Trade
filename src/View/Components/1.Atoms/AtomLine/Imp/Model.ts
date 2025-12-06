import type { IComponent } from "../index";

function Model(props: IComponent) {
	const { isVert, color } = props;

	return { isVert, color };
}

export default Model;
