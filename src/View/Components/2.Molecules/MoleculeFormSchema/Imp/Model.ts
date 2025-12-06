import type { IComponent } from "../";

function Model(props: IComponent) {
	const { schema, extStyle, color, form } = props;

	return { schema, extStyle, color, form };
}

export default Model;
