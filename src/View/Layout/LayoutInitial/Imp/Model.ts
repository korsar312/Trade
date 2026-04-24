import type { TModel } from "../../../CreateComponent.tsx";
import type { TComponent } from "../";
import { useLayoutEffect } from "react";

//const loginA = "adm2";
//const tokenA = "10a92d4a-7779-4a1e-9315-301f65e21d8c";

const loginA = "adm1";
const tokenA = "4a2a3fb6-32b1-4f46-8cfd-583d0f8c3fc6";

function Model({ Props, Act, Pub }: TModel<TComponent>) {
	const {} = Props;

	const currentRole = Act.Router.getRole();

	useLayoutEffect(() => {
		init();
	}, [currentRole]);

	async function init() {
		await login();
		Act.Router.setRole("USER");
		await Act.Wallet.refreshBalance();
		await Pub.connectWs();

		initDone();
	}

	function login() {
		return Act.User.login({ login: loginA, token: tokenA });
	}

	function initDone() {
		Act.App.initDone();
	}

	return {};
}

export default Model;
