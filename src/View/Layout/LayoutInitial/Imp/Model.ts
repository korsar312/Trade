import type { TModel } from "../../../CreateComponent.tsx";
import type { TComponent } from "../";
import { useLayoutEffect } from "react";

const loginS = "adm2";
const tokenS = "f3a944dd-e970-4933-a14f-cc5ea2f36782";

function Model({ Props, Act }: TModel<TComponent>) {
	const {} = Props;

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
		Act.App.initDone();
	}

	return {};
}

export default Model;
