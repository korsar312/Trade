import type { IComponent } from "../index";

function Model(props: IComponent) {
	const { itemList, filterList } = props;

	return { itemList, filterList };
}

export default Model;
