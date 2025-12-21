import type { SettingInterface as Interface } from "../Setting.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";

class SettingImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private getBusinessInfo(store?: Interface.Store): Interface.TBusinessInfo | undefined {
		return store?.businessInfo;
	}

	private getBusinessLogo(Business?: Interface.TBusinessInfo): string | undefined {
		return Business?.logoPath;
	}

	private getBusinessName(Business?: Interface.TBusinessInfo): string | undefined {
		return Business?.name;
	}

	//==============================================================================================

	constructor(props: IServiceProps) {
		const store: Interface.Store = {};

		super(props, store);
	}

	//==============================================================================================

	public getLogo() {
		const info = this.getBusinessInfo(this.store);
		return this.getBusinessLogo(info);
	}

	public getName() {
		const info = this.getBusinessInfo(this.store);
		return this.getBusinessName(info);
	}
}

export default SettingImp;
