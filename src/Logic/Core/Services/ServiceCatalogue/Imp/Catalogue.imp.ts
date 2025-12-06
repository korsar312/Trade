import type { CatalogueInterface as Interface } from "../Catalogue.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";

class CatalogueImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private setCategory(store: Interface.Store, category: Interface.TCategoryMap): Interface.Store {
		return { ...store, category };
	}

	private setGoods(store: Interface.Store, goods: Interface.TItemMap): Interface.Store {
		return { ...store, goods };
	}

	private getCurrentItem(itemList: Interface.TItemMap, itemId: string): Interface.TItem {
		const item = itemList[itemId];
		if (!item) throw new Error(`Item with id "${itemId}" not found`);

		return item;
	}

	private getPriceGoods(item: Interface.TItem): number {
		return item.price;
	}

	private getImageGoods(item: Interface.TItem): string {
		return item.image;
	}

	//==============================================================================================

	constructor(props: IServiceProps) {
		const store: Interface.Store = {
			category: {},
			goods: {},
		};

		super(props, store);
	}

	//==============================================================================================

	public async initCategory() {
		const res = await this.API.Links.GET_CATEGORY_LIST();
		this.store = this.setCategory(this.store, res);
	}

	public async initGoods() {
		const res = await this.API.Links.GET_ALL_GOODS();
		this.store = this.setGoods(this.store, res);
	}

	public getCategoryIdList() {
		return Object.keys(this.store.category);
	}

	public getGoodsIdList() {
		return Object.keys(this.store.goods);
	}

	public getPrice(itemId: string) {
		const item = this.getCurrentItem(this.store.goods, itemId);
		return this.getPriceGoods(item);
	}

	public getImage(itemId: string) {
		const item = this.getCurrentItem(this.store.goods, itemId);
		return this.getImageGoods(item);
	}
}

export default CatalogueImp;
