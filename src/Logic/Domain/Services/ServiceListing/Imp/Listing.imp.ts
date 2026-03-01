import type { ListingInterface as Interface } from "../Listing.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";

class ListingImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private SetGoods(store: Interface.Store, listing: Interface.TListingMap): Interface.Store {
		return { ...store, listing };
	}

	private ArrToMap(goods: Interface.IListing[]): Interface.TListingMap {
		return goods.reduce((prev, cur) => {
			prev[cur.id] = cur;
			return prev;
		}, {} as Interface.TListingMap);
	}

	private GetItem(itemId?: string): Interface.IListing | undefined {
		return itemId == null ? undefined : this.store.listing[itemId];
	}

	private GetRating(like: number, dislike: number): Interface.TRating | null {
		const total = like + dislike;
		if (!total) return null;

		return Math.round((like / total) * 5) as Interface.TRating;
	}

	//==============================================================================================

	constructor(props: IServiceProps) {
		const store: Interface.Store = {
			listing: {},
		};

		super(props, store);
	}

	//==============================================================================================

	public setListing(listing: Interface.IListing[]) {
		const normGoods = this.ArrToMap(listing);

		this.store = this.SetGoods(this.store, normGoods);
	}

	public getListingIdList() {
		return Object.keys(this.store.listing);
	}

	public getName = (id?: string) => this.GetItem(id)?.name;
	public getPrice = (id?: string) => this.GetItem(id)?.price;
	public getDesc = (id?: string) => this.GetItem(id)?.desc;

	public getSellerName = (id?: string) => this.GetItem(id)?.sellerName;
	public getSellerId = (id?: string) => this.GetItem(id)?.sellerId;
	public getSellerRating(id?: string) {
		const item = this.GetItem(id);
		return item && this.GetRating(item.sellerLike, item.sellerDislike);
	}
	public getImage(_id?: string) {
		return "SBER";
	}
}

export default ListingImp;
