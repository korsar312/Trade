import type { IComponent } from "../index";
import { Act } from "../../../../../Logic/Core";
import type { RouterInterface } from "../../../../../Logic/Core/Services/ServiceRouter/Router.interface.ts";
import type { MessageInterface } from "../../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";

type TBtnList = {
	click: () => void;
	name: MessageInterface.EWord;
};

function Model(props: IComponent) {
	const {} = props;

	const btnList: TBtnList[] = [
		{
			click: goAdmLogin,
			name: "LOGIN_TO_ADMIN_MENU",
		},
		{
			click: goCassLogin,
			name: "LOGIN_TO_CASH_DESK",
		},
	];

	function goLink(path: RouterInterface.EPath) {
		Act.Router.goTo(path);
	}

	function goAdmLogin() {
		goLink("ADM_LOGIN");
	}

	function goCassLogin() {
		goLink("CASS_LOGIN");
	}

	return { btnList };
}

export default Model;
