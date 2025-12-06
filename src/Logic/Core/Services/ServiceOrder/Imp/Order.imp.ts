import type { OrderInterface as Interface } from "../Order.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";

class OrderImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	//==============================================================================================

	constructor(props: IServiceProps) {
		const store: Interface.Store = {};

		super(props, store);
	}

	//==============================================================================================

	public callWaiter() {
		return this.API.Links.CALL_WAITER();
	}
}

export default OrderImp;
