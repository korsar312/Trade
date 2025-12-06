import type { IComponent } from "../index";

function Model(props: IComponent) {
	const { btnLeft, btnRight, title } = props;

	return { btnLeft, btnRight, title };
}

export default Model;
