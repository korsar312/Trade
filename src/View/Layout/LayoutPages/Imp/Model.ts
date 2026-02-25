import type { TModel } from "../../../CreateComponent.tsx";
import type { TComponent } from "../";
import type { MessageInterface } from "../../../../Logic/Domain/Services/ServiceMessage/Message.interface.ts";

function Model({ Props, Act }: TModel<TComponent>) {
	const {} = Props;

	const isInit = Act.App.isInit();

	const router = Act.Router.getRouteObj();
	const name = Act.Router.getCurPage();

	document.title = Act.Message.getWord(getNamePage());

	function getNamePage(): string | MessageInterface.EWord {
		switch (name) {
			case "GOODS":
				return "PRODUCTS";
			case "ITEM":
				const param = Act.Router.getCurParam<"ITEM">();
				const name = Act.Catalogue.getName(param?.id);

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
			case "CREATE_LISTING":
				return "LISTING_CREATE";
			case "ERROR":
				return "ERROR";
		}
	}

	return { router, isInit };
}

export default Model;
