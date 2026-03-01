import type { DealInterface as Interface } from "../Deal.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";

class DealImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	//==============================================================================================

	constructor(props: IServiceProps) {
		const store: Interface.Store = {
			orders: {},
		};

		super(props, store);
	}

	//==============================================================================================
}

export default DealImp;
