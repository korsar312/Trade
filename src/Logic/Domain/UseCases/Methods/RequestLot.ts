import type { UseCasesInterface as Interface } from "../UseCases.interface";
import UseCasesBase from "../UseCases.base";
import type { ListingInterface } from "../../Services/ServiceListing/Listing.interface.ts";
import type { ItemInterface } from "../../Services/ServiceItem/Item.interface.ts";

class RequestLot extends UseCasesBase {
	async invoke(params: Interface.TRequestLotReq): Interface.TRequestLotRes {
		const res = await this.inf.Links.GET_ITEM(params);

		const listing: ListingInterface.IListing = {
			id: res.id,
			name: res.name,
			desc: res.desc,
			price: res.price,
			status: res.status,
			saleKind: res.saleKind,
			sellerName: res.sellerName,
			sellerId: res.sellerId,
			sellerLike: res.sellerLike,
			sellerDislike: res.sellerDislike,
		};

		const item: ItemInterface.TItemLink = {
			id: res.id,
			item: { type: res.type, info: res.info } as any,
		};

		this.service.Listing.setListing([listing]);
		this.service.Item.setItems([item]);
	}
}

export default RequestLot;
