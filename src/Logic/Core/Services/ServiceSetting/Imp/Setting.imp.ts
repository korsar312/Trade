import type { SettingInterface as Interface } from "../Setting.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";

class SettingImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private SetInit(store: Interface.Store, init: boolean): Interface.Store {
		return { ...store, init };
	}

	//==============================================================================================

	constructor(props: IServiceProps) {
		const store: Interface.Store = { init: false };

		super(props, store);
	}

	//==============================================================================================

	public initDone() {
		this.store = this.SetInit(this.store, true);
	}

	public isInit() {
		return this.store.init;
	}
}

export default SettingImp;
