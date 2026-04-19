import UseCasesBase from "../UseCases.base";
import type { RestInterface } from "../../Infrastructure/InfrastructureLinks/Rest.interface.ts";

class RequestOrder extends UseCasesBase {
	async invoke(params: RestInterface.TGetOrderReq): Promise<void> {
		const res = await this.inf.Links.GET_ORDER(params);

		this.service.Item.setItems([{ item: res.item, listingId: res.listing.id }]);
		this.service.Listing.setListing([res.listing]);
		this.service.Deal.setDeal([res.deal]);
		this.service.Chat.setChat([res.chat]);
		this.service.Chat.setMessage(res.message);
	}
}

export default RequestOrder;
