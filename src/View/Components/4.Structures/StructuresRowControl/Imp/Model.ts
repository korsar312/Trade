import type { IComponent } from "../index";

function Model(props: IComponent) {
	const { innerStruct, wrapProp } = props;

	return { innerStruct, wrapProp };
}

export default Model;
