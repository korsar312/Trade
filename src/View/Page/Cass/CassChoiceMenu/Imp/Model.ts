import type { IComponent } from "../index";
import { Act } from "../../../../../Logic/Core";

function Model(props: IComponent) {
	const {} = props;

	const products = Act.Catalogue.getGoodsIdList();

	return { products };
}

export default Model;
