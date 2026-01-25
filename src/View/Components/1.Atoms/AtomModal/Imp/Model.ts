import type { IComponent } from "../index";

function Model(props: IComponent) {
	const { children, extStyle, bgClick } = props;

	return { children, extStyle, bgClick };
}

export default Model;
