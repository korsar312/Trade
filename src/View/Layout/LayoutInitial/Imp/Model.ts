import type { TModel } from "../../../CreateComponent.tsx";
import type { TComponent } from "../";
import { useLayoutEffect } from "react";

//const loginA = "adm2";
//const tokenA = "8cce413e-7877-4bce-b0b5-9a12c3d5c717";

const loginA = "adm1";
const tokenA = "b7bdbc9d-2e51-4451-894c-7edd25078cfa";

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
