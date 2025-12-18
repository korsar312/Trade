import type { OrderInterface as Interface } from "../Order.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";

class OrderImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private setGoods(store: Interface.Store, orders: Interface.TOrderMap): Interface.Store {
		return { ...store, orders };
	}

	private getCurrentItem(itemList: Interface.TOrderMap, itemId: string): Interface.TOrder {
		const item = itemList[itemId];
		if (!item) throw new Error(`Item with id "${itemId}" not found`);

		return item;
	}

	//==============================================================================================

	constructor(props: IServiceProps) {
		const store: Interface.Store = {
			orders: {},
			ordersDetail: {},
		};

		super(props, store);
	}

	//==============================================================================================

	public async initOrders() {
		const res = await this.API.Links.GET_ALL_ORDERS();
		this.store = this.setGoods(this.store, res);
	}

	public getOrderIdList() {
		return Object.keys(this.store.orders);
	}

	public isActiveOrder(itemId: string) {
		const item = this.getCurrentItem(this.store.orders, itemId);
		return item.status === "ACTIVE";
	}

	public isSellUser(itemId: string, userId: string) {
		const item = this.getCurrentItem(this.store.orders, itemId);
		return item.seller.id === userId;
	}

	public isBuyUser(itemId: string, userId: string) {
		const item = this.getCurrentItem(this.store.orders, itemId);
		return item.buyer.id === userId;
	}

	public getName(itemId: string) {
		const item = this.getCurrentItem(this.store.orders, itemId);
		return item.name;
	}

	public getDesc(itemId: string) {
		const item = this.getCurrentItem(this.store.orders, itemId);
		return item.desc;
	}

	public getBank(itemId: string) {
		const item = this.getCurrentItem(this.store.orders, itemId);
		return item.bank;
	}

	public getPrice(itemId: string) {
		const item = this.getCurrentItem(this.store.orders, itemId);
		return item.price;
	}

	public getRating(itemId: string) {
		const item = this.getCurrentItem(this.store.orders, itemId);
		return item.seller.rating;
	}

	public getImage(itemId: string) {
		const item = this.getCurrentItem(this.store.orders, itemId);
		return item.image;
	}

	public getSellerName(itemId: string) {
		const item = this.getCurrentItem(this.store.orders, itemId);
		return item.seller.name;
	}

	public getSellerId(itemId: string) {
		const item = this.getCurrentItem(this.store.orders, itemId);
		return item.seller.id;
	}
}

export default OrderImp;
