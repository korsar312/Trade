import type { BasketInterface as Interface } from "../Basket.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";

class BasketImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	//==============================================================================================

	constructor(props: IServiceProps) {
		const store: Interface.Store = {};

		super(props, store);
	}

	//==============================================================================================
}

export default BasketImp;
