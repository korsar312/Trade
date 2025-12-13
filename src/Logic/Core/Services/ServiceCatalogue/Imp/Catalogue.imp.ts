import type { CatalogueInterface as Interface } from "../Catalogue.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";

class CatalogueImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private setGoods(store: Interface.Store, goods: Interface.TItemMap): Interface.Store {
		return { ...store, goods };
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

	public async initGoods() {
		const res = await this.API.Links.GET_ALL_GOODS();
		this.store = this.setGoods(this.store, res);
	}

	public getGoodsIdList() {
		return Object.keys(this.store.goods);
	}

	public getBank(itemId: string) {
		const item = this.getCurrentItem(this.store.goods, itemId);
		return item.bank;
	}

	public getPrice(itemId: string) {
		const item = this.getCurrentItem(this.store.goods, itemId);
		return item.price;
	}

	public getRating(itemId: string) {
		const item = this.getCurrentItem(this.store.goods, itemId);
		return item.sellerRating;
	}

	public getImage(itemId: string) {
		const item = this.getCurrentItem(this.store.goods, itemId);
		return item.image;
	}

	public getSellerName(itemId: string) {
		const item = this.getCurrentItem(this.store.goods, itemId);
		return item.seller;
	}

	public getSellerId(itemId: string) {
		const item = this.getCurrentItem(this.store.goods, itemId);
		return item.sellerId;
	}
}

export default CatalogueImp;
