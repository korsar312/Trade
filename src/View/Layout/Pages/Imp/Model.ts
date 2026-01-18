import type { IComponent } from "../index";
import type { MessageInterface } from "../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";
import { Act } from "../../../../Logic/Core";

function Model(props: IComponent) {
	const {} = props;

	const router = Act.Router.getRouteObj();
	const name = Act.Router.getCurPage();

	document.title = Act.Message.getWord(getNamePage());

	function getNamePage(): string | MessageInterface.EWord {
		switch (name) {
			case "GOODS":
				return "PRODUCTS";
			case "ITEM":
				const { id } = Act.Router.getCurParam<"ITEM">();
				const name = Act.Catalogue.getName(id);

				return name || "PRODUCT";
			case "PROFILE":
				return "PROFILE";
			case "USER":
				return "USER";
			case "ORDER_LIST":
				return "ORDERS";
			case "ORDER":
				return "ORDER";
			case "INFO":
				return "INFO";
			case "ERROR":
				return "ERROR";
		}
	}

	return { router };
}

export default Model;
