import type { OrderInterface as Interface } from "../Order.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";

class OrderImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private setGoods(store: Interface.Store, orders: Interface.TOrderMap): Interface.Store {
		return { ...store, orders };
	}

	private updateGoods(goodsList: Interface.TOrderMap, newGoods: Interface.TOrderMap): Interface.TOrderMap {
		return { ...goodsList, ...newGoods };
	}

	private getCurrentOrder(orderList: Interface.TOrderMap, orderId: string): Interface.TOrder | undefined {
		return orderList[orderId];
	}

	//==============================================================================================

	constructor(props: IServiceProps) {
		const store: Interface.Store = {
			orders: {},
		};

		super(props, store);
	}

	//==============================================================================================

	public async requestOrders() {
		const res = await this.API.Links.GET_ORDERS();

		this.store = this.setGoods(this.store, res);
	}

	public async requestOrderDetail(idList: string[]) {
		const res = await this.API.Links.GET_ORDER_DETAIL(idList);
		const newStore = this.updateGoods(this.store.orders, res);

		this.store = this.setGoods(this.store, newStore);
	}

	public getOrderIdList() {
		return Object.keys(this.store.orders);
	}

	public getName(orderId: string) {
		const order = this.getCurrentOrder(this.store.orders, orderId);
		return order?.name;
	}

	public getDesc(orderId: string) {
		const order = this.getCurrentOrder(this.store.orders, orderId);
		if (order && "desc" in order.info) return order.info.desc;

		return undefined;
	}

	public getBank(orderId: string) {
		const order = this.getCurrentOrder(this.store.orders, orderId);
		if (order && "bank" in order.info) return order.info.bank;

		return undefined;
	}

	public getPrice(orderId: string) {
		const order = this.getCurrentOrder(this.store.orders, orderId);
		return order?.price;
	}

	public getImage(orderId: string) {
		const order = this.getCurrentOrder(this.store.orders, orderId);
		return order?.image;
	}

	public getSellerName(orderId: string) {
		const order = this.getCurrentOrder(this.store.orders, orderId);
		if (order && "seller" in order.info) return order.info.seller.name;

		return undefined;
	}

	public getSellerId(orderId: string) {
		const order = this.getCurrentOrder(this.store.orders, orderId);
		if (order && "seller" in order.info) return order.info.seller.id;

		return undefined;
	}
}

export default OrderImp;
