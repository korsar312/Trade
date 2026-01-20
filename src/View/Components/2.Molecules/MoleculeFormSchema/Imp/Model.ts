import type { IComponent } from "../";

function Model(props: IComponent) {
	const { schema, form } = props;

	return { schema, form };
}

export default Model;
