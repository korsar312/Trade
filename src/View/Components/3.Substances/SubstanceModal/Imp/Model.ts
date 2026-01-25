import type { IComponent } from "../index";

function Model(props: IComponent) {
	const { form, color, bgClick } = props;

	return { form, color, bgClick };
}

export default Model;
