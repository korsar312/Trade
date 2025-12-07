import type { IComponent } from "../index";
import { useEffect, useLayoutEffect } from "react";
import { Act } from "../../../../Logic/Core";

function Model(props: IComponent) {
	const {} = props;

	const currentRole = Act.Router.getRole();

	useEffect(() => {}, []);

	useLayoutEffect(() => {
		initRole();
	}, [currentRole]);

	function initRole() {
		Act.Setting.initBusiness();
		Act.Message.initGoodsWord();
		Act.Catalogue.initGoods();
	}

	return {};
}

export default Model;
