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
	}

	return {};
}

export default Model;
