import type { SettingInterface as Interface } from "../Setting.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";

class SettingImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	//==============================================================================================

	constructor(props: IServiceProps) {
		const store: Interface.Store = {};

		super(props, store);
	}

	//==============================================================================================
}

export default SettingImp;
