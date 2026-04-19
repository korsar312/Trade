import type { TModel } from "../../../CreateComponent.tsx";
import type { TComponent } from "../";
import { useLayoutEffect } from "react";

//const loginA = "adm2";
//const tokenA = "2aeb7e9b-9bed-484d-bb7e-b6d369d66207";

const loginA = "adm1";
const tokenA = "2f47b58a-b530-4b10-acb5-9d6b413ab66e";

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
		return Act.User.login(loginA, tokenA);
	}

	function initDone() {
		Act.App.initDone();
	}

	return {};
}

export default Model;
