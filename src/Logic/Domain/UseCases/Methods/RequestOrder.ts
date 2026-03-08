import UseCasesBase from "../UseCases.base";
import type { RestInterface } from "../../Infrastructure/InfrastructureLinks/Rest.interface.ts";

class RequestOrder extends UseCasesBase {
	async invoke(params: RestInterface.TGetOrderReq): Promise<void> {
		const res = await this.inf.Links.GET_ORDER(params);

		this.service.Item.setItems([{ item: res.item, listingId: res.listing.id }]);
		this.service.Listing.setListing([res.listing]);
	}
}

export default RequestOrder;
