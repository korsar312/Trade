import type { UseCasesInterface as Interface } from "../UseCases.interface";
import UseCasesBase from "../UseCases.base";
import type { ListingInterface } from "../../Services/ServiceListing/Listing.interface.ts";
import type { ItemInterface } from "../../Services/ServiceItem/Item.interface.ts";
import type { UserInterface } from "../../Services/ServiceUser/User.interface.ts";

class RequestLot extends UseCasesBase {
	async invoke(params: Interface.TRequestLotReq): Interface.TRequestLotRes {
		const res = await this.inf.Links.GET_ITEM(params);

		const listing: ListingInterface.IListing = {
			id: res.id,
			name: res.name,
			desc: res.desc,
			price: res.price,
			status: res.status,
			sellerId: res.sellerId,
			saleKind: res.saleKind,
		};

		const item: ItemInterface.TItemLink = {
			id: res.id,
			item: { type: res.type, info: res.info } as any,
		};

		const user: UserInterface.TUserMin = {
			id: res.sellerId,
			nickname: res.sellerName,
			like: res.sellerLike,
			dislike: res.sellerDislike,
		};

		this.service.Listing.setListing([listing]);
		this.service.Item.setItems([item]);
		this.service.User.setUserList([user]);
	}
}

export default RequestLot;
