import type { IComponent } from "../index";
import { useLayoutEffect } from "react";
import { Act } from "../../../../Logic/Core";

const loginS = "adm2";
const tokenS = "f3a944dd-e970-4933-a14f-cc5ea2f36782";

function Model(props: IComponent) {
	const {} = props;

	const currentRole = Act.Router.getRole();

	useLayoutEffect(() => {
		init();
	}, [currentRole]);

	async function init() {
		await login();
		Act.Router.setRole("USER");

		initDone();
	}

	function login() {
		return Act.User.login(loginS, tokenS);
	}

	function initDone() {
		Act.Setting.initDone();
	}

	return {};
}

export default Model;
