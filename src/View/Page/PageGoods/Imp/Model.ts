import type { IComponent } from "../index";
import { useEffect } from "react";
import { Act } from "../../../../Logic/Core";

function Model(props: IComponent) {
	const {} = props;

	useEffect(() => {
		Act.Catalogue.initGoods();
	}, []);

	return {};
}

export default Model;
