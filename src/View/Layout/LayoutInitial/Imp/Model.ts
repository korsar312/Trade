import type { TModel } from "../../../CreateComponent.tsx";
import type { TComponent } from "../";
import { useLayoutEffect } from "react";

const loginS = "adm2";
const tokenS = "e8219546-ded4-43b4-9fef-39b128b55d59";

function Model({ Props, Act }: TModel<TComponent>) {
	const {} = Props;

	const currentRole = Act.Router.getRole();

	useLayoutEffect(() => {
		init();
	}, [currentRole]);

	async function init() {
		await login();
		Act.Router.setRole("USER");
		await Act.Wallet.refreshBalance();

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
