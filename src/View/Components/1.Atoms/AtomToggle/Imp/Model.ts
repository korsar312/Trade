import type { IComponent } from "../index";

function Model(props: IComponent) {
	const { onClick, checked, disabled, name, extStyles } = props;

	return { onClick, checked, disabled, name, extStyles };
}

export default Model;
