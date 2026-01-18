import type { IComponent } from "../index";
import { useLayoutEffect } from "react";
import { Act } from "../../../../Logic/Core";

function Model(props: IComponent) {
	const {} = props;

	const currentRole = Act.Router.getRole();

	useLayoutEffect(() => {
		initRole();
	}, [currentRole]);

	function initRole() {
		Act.User.login("adm2", "f3a944dd-e970-4933-a14f-cc5ea2f36782");
	}

	return {};
}

export default Model;
