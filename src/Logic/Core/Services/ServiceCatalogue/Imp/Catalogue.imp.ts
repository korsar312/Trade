import type { CatalogueInterface as Interface } from "../Catalogue.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";

class CatalogueImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private SetGoods(store: Interface.Store, goods: Interface.TItemMap): Interface.Store {
		return { ...store, goods };
	}

	private UpdateGoods(goodsList: Interface.TItemMap, newGoods: Interface.TItemMap): Interface.TItemMap {
		return { ...goodsList, ...newGoods };
	}

	private GetItem(itemList: Interface.TItemMap, itemId: string): Interface.IItem | undefined {
		return itemList[itemId];
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

	public async requestGoods() {
		const res = await this.API.Links.GET_ITEMS([]);

		this.store = this.SetGoods(this.store, res);
	}

	public async requestItemDetail(idList: string[]) {
		const res = await this.API.Links.GET_ITEM_DETAIL(idList);
		const newStore = this.UpdateGoods(this.store.goods, res);

		this.store = this.SetGoods(this.store, newStore);
	}

	public getGoodsIdList() {
		return Object.keys(this.store.goods);
	}

	public getName(itemId: string) {
		const item = this.GetItem(this.store.goods, itemId);
		return item?.name;
	}
	public getPrice(itemId: string) {
		const item = this.GetItem(this.store.goods, itemId);
		return item?.price;
	}
	public getDesc(itemId: string) {
		const item = this.GetItem(this.store.goods, itemId);
		return item?.detail?.desc;
	}
	public getSellerName(itemId: string) {
		const item = this.GetItem(this.store.goods, itemId);
		return item?.sellerName;
	}
	public getSellerId(itemId: string) {
		const item = this.GetItem(this.store.goods, itemId);
		return item?.sellerId;
	}
	public getSellerRating(itemId: string) {
		const item = this.GetItem(this.store.goods, itemId);
		return item && this.GetRating(item.sellerLike, item.sellerDislike);
	}
	public getBank(itemId: string) {
		const item = this.GetItem(this.store.goods, itemId);
		return item?.info.bank;
	}
	public getImage(itemId: string) {
		const item = this.GetItem(this.store.goods, itemId);
		return item?.info.bank || "";
	}
}

export default CatalogueImp;
