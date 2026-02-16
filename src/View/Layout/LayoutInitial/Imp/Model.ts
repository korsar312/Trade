import type { TModel } from "../../../CreateComponent.tsx";
import type { TComponent } from "../";
import { useLayoutEffect } from "react";

const loginS = "adm2";
const tokenS = "157a7cf9-0250-40c1-95a5-681e5b76962a";

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
