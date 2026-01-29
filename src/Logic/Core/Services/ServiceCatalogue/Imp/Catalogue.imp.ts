import type { CatalogueInterface as Interface } from "../Catalogue.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";

class CatalogueImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private SetGoods(store: Interface.Store, goods: Interface.TItemMap): Interface.Store {
		return { ...store, goods };
	}

	private ArrToMap(goods: Interface.TItem[]): Interface.TItemMap {
		return goods.reduce((prev, cur) => {
			prev[cur.id] = cur;
			return prev;
		}, {} as Interface.TItemMap);
	}

	private GetItem(itemList: Interface.TItemMap, itemId?: string): Interface.TItem | undefined {
		return itemId == null ? undefined : itemList[itemId];
	}

	private IsPickItem<T extends Interface.ETypeItem>(item?: Interface.TItem, type?: T): item is Interface.TPickItem<T> {
		return item?.type === type;
	}

	private GetRating(like: number, dislike: number): Interface.TRating | null {
		const total = like + dislike;
		if (!total) return null;

		return Math.round((like / total) * 5) as Interface.TRating;
	}

	//==============================================================================================

	constructor(props: IServiceProps) {
		const store: Interface.Store = {
			goods: {},
		};

		super(props, store);
	}

	//==============================================================================================

	public async requestGoods(param: Interface.TReqCatalog) {
		const res = await this.API.Links.GET_ITEMS(param);
		const normGoods = this.ArrToMap(res);

		this.store = this.SetGoods(this.store, normGoods);
	}

	public async requestItem(id: string, type: Interface.ETypeItem) {
		const res = await this.API.Links.GET_ITEM(id, type);
		const normGoods = this.ArrToMap([res]);

		this.store = this.SetGoods(this.store, normGoods);
	}

	public async createListing(params: Interface.TReqCreate) {
		return void this.API.Links.CREATE_LISTING(params);
	}

	public getGoodsIdList() {
		return Object.keys(this.store.goods);
	}

	public getName(itemId?: string) {
		const item = this.GetItem(this.store.goods, itemId);
		return item?.name;
	}
	public getPrice(itemId?: string) {
		const item = this.GetItem(this.store.goods, itemId);
		return item?.price;
	}
	public getType(itemId?: string) {
		const item = this.GetItem(this.store.goods, itemId);
		return item?.type;
	}
	public getDesc(itemId?: string) {
		const item = this.GetItem(this.store.goods, itemId);
		return item?.desc;
	}
	public getSellerName(itemId?: string) {
		const item = this.GetItem(this.store.goods, itemId);
		return item?.sellerName;
	}
	public getSellerId(itemId?: string) {
		const item = this.GetItem(this.store.goods, itemId);
		return item?.sellerId;
	}
	public getSellerRating(itemId?: string) {
		const item = this.GetItem(this.store.goods, itemId);
		return item && this.GetRating(item.sellerLike, item.sellerDislike);
	}
	public getBank(itemId?: string) {
		const item = this.GetItem(this.store.goods, itemId);
		if (this.IsPickItem(item, "CARD")) return item.info.bank;

		return null;
	}
	public getImage(itemId?: string) {
		const item = this.GetItem(this.store.goods, itemId);

		if (this.IsPickItem(item, "CARD")) return item.info.bank;
		if (this.IsPickItem(item, "GUARD")) return "item.info.bank";

		return "";
	}
}

export default CatalogueImp;
