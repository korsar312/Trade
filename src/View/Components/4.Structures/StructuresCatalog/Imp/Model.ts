import type { IComponent } from "../index";

function Model(props: IComponent) {
	const { itemList } = props;

	return { itemList };
}

export default Model;
