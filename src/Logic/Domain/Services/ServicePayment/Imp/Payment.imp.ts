import type { PaymentInterface as Interface } from "../Payment.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";

class PaymentImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	//==============================================================================================

	constructor(props: IServiceProps) {
		const store: Interface.Store = {};

		super(props, store);
	}

	//==============================================================================================
}

export default PaymentImp;
