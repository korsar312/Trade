import UseCasesBase from "../UseCases.base";
import type { RestInterface } from "../../Infrastructure/InfrastructureLinks/Rest.interface.ts";
import type { ItemInterface } from "../../Services/ServiceItem/Item.interface.ts";
import type { ListingInterface } from "../../Services/ServiceListing/Listing.interface.ts";

class RequestOrderList extends UseCasesBase {
	async invoke(params: RestInterface.TGetOrderListReq): Promise<void> {
		const res = await this.inf.Links.GET_ORDER_LIST(params);

		const items: ItemInterface.TItemLink[] = [];
		const listing: ListingInterface.IListing[] = [];

		res.forEach((el) => {
			el.buyer;
			el.seller;
			el.deal;
			el.item;
			el.listing;
			el.payment;

			items.push({ item: el.item, listingId: el.listing.id });
			listing.push(el.listing);
		});

		this.service.Item.setItems(items);
		this.service.Listing.setListing(listing);
	}
}

export default RequestOrderList;
