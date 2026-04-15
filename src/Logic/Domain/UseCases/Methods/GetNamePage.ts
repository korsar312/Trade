import UseCasesBase from "../UseCases.base";
import type { MessageInterface } from "../../Services/ServiceMessage/Message.interface.ts";

class RequestOrder extends UseCasesBase {
	invoke(): string | MessageInterface.EWord {
		const curPageName = this.service.Router.getCurPage();

		const getNamePage = (): string | MessageInterface.EWord => {
			switch (curPageName) {
				case "LISTING_LIST":
					return "MY_LISTING";
				case "LISTING": {
					const param = this.service.Router.getCurParam<"ITEM">();
					const name = this.service.Listing.getName(param?.id);

					return name || "LISTING";
				}
				case "ITEM_LIST":
					return "PRODUCTS";
				case "ITEM": {
					const param = this.service.Router.getCurParam<"ITEM">();
					const name = this.service.Listing.getName(param?.id);

					return name || "PRODUCT";
				}
				case "PROFILE":
					return "PROFILE";
				case "USER":
					return "USER";
				case "DEAL_LIST":
					return "MY_DEALS";
				case "DEAL":
					const param = this.service.Router.getCurParam<"DEAL">();
					const dealId = this.service.Deal.getListingId(param?.id);
					const name = this.service.Listing.getName(dealId);

					return name || "DEAL";
				case "INFO":
					return "INFO";
				case "CREATE_LISTING":
					return "LISTING_CREATE";
				case "ERROR":
					return "ERROR";
			}
		};

		return this.service.Message.getWord(getNamePage());
	}
}

export default RequestOrder;
