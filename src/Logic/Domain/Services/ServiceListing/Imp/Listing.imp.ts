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

	private GetListing(id?: string): Interface.IListing | undefined {
		return id == null ? undefined : this.store.listing[id];
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

	public getName = (id?: string) => this.GetListing(id)?.name;
	public getPrice = (id?: string) => this.GetListing(id)?.price;
	public getDesc = (id?: string) => this.GetListing(id)?.desc;
	public getSellerId = (id?: string) => this.GetListing(id)?.sellerId;

	public getImage(_id?: string) {
		return "SBER";
	}
}

export default ListingImp;
