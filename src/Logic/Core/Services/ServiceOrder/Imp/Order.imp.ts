import type { OrderInterface as Interface } from "../Order.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";

class OrderImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	//==============================================================================================

	constructor(props: IServiceProps) {
		const store: Interface.Store = {
			orders: {},
		};

		super(props, store);
	}

	//==============================================================================================
}

export default OrderImp;
