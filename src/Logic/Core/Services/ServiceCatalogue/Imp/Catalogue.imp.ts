import type { CatalogueInterface as Interface } from "../Catalogue.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";

class CatalogueImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private setGoods(store: Interface.Store, goods: Interface.TItemMap): Interface.Store {
		return { ...store, goods };
	}

	private updateGoods(goodsList: Interface.TItemMap, newGoods: Interface.TItemMap): Interface.TItemMap {
		return { ...goodsList, ...newGoods };
	}

	private getCurrentItem(itemList: Interface.TItemMap, itemId: string): Interface.TItem {
		const item = itemList[itemId];
		if (!item) throw new Error(`Item with id "${itemId}" not found`);

		return item;
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
		const res = await this.API.Links.GET_GOODS();
		this.store = this.setGoods(this.store, res);
	}

	public async requestItemDetail(idList: string[]) {
		const res = await this.API.Links.GET_ITEM_DETAIL(idList);
		const newStore = this.updateGoods(this.store.goods, res);
		this.store = this.setGoods(this.store, newStore);
	}

	public getGoodsIdList() {
		return Object.keys(this.store.goods);
	}

	public getBank(itemId: string) {
		const item = this.getCurrentItem(this.store.goods, itemId);
		return item.info.bank;
	}

	public getName(itemId: string) {
		const item = this.getCurrentItem(this.store.goods, itemId);
		return item.name;
	}

	public getDesc(itemId: string) {
		const item = this.getCurrentItem(this.store.goods, itemId);
		return item.sellerName;
	}

	public getPrice(itemId: string) {
		const item = this.getCurrentItem(this.store.goods, itemId);
		return item.price;
	}

	public getRating(itemId: string) {
		const item = this.getCurrentItem(this.store.goods, itemId);
		return item.rating;
	}

	public getImage(itemId: string) {
		const item = this.getCurrentItem(this.store.goods, itemId);
		return item.image;
	}

	public getSellerName(itemId: string) {
		const item = this.getCurrentItem(this.store.goods, itemId);
		return item.name;
	}

	public getSellerId(itemId: string) {
		const item = this.getCurrentItem(this.store.goods, itemId);
		return item.sellerName;
	}
}

export default CatalogueImp;
