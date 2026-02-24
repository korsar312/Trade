import type { TModel } from "../../../CreateComponent.tsx";
import type { TComponent } from "../";
import { useLayoutEffect } from "react";

const loginS = "adm2";
const tokenS = "07e21af4-b065-4bb3-aabb-7ddaa0d056cd";

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
