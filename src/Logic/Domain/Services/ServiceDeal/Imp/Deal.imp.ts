import type { DealInterface as Interface } from "../Deal.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";

class DealImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private SetDeal(store: Interface.Store, deal: Interface.TDealMap): Interface.Store {
		return { ...store, deal };
	}

	private ArrToMap(goods: Interface.IDeal[]): Interface.TDealMap {
		return goods.reduce((prev, cur) => {
			prev[cur.id] = cur;
			return prev;
		}, {} as Interface.TDealMap);
	}

	private GetDeal(id?: string): Interface.IDeal | undefined {
		return id == null ? undefined : this.store.deal[id];
	}

	//==============================================================================================

	constructor(props: IServiceProps) {
		const store: Interface.Store = {
			deal: {},
		};

		super(props, store);
	}

	//==============================================================================================

	public setDeal(listing: Interface.IDeal[]) {
		const normGoods = this.ArrToMap(listing);

		this.store = this.SetDeal(this.store, normGoods);
	}

	public getDealIdList() {
		return Object.keys(this.store.deal);
	}

	public getListingId = (id?: string) => this.GetDeal(id)?.listingId;

	public dealComplete(dealId: string) {
		return this.API.Links.DEAL_COMPLETE({ dealId });
	}
}

export default DealImp;
