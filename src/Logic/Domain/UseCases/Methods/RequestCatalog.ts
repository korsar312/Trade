import type { UseCasesInterface as Interface } from "../UseCases.interface";
import UseCasesBase from "../UseCases.base";
import type { ListingInterface } from "../../Services/ServiceListing/Listing.interface.ts";
import type { ItemInterface } from "../../Services/ServiceItem/Item.interface.ts";

class RequestCatalog extends UseCasesBase {
	async invoke(params: Interface.TRequestCatalogReq): Interface.TRequestCatalogRes {
		const res = await this.inf.Links.GET_ITEMS(params);

		const listing: ListingInterface.IListing[] = res.map((el) => ({
			id: el.id,
			name: el.name,
			desc: el.desc,
			price: el.price,
			status: el.status,
			saleKind: el.saleKind,
			sellerName: el.sellerName,
			sellerId: el.sellerId,
			sellerLike: el.sellerLike,
			sellerDislike: el.sellerDislike,
		}));

		const item: ItemInterface.TItemLink[] = res.map((el) => ({
			id: el.id,
			item: { type: el.type, info: el.info } as any,
		}));

		this.service.Listing.setListing(listing);
		this.service.Item.setItems(item);
	}
}

export default RequestCatalog;
