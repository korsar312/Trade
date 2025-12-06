import type { SettingInterface as Interface } from "../Setting.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";

class SettingImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private setLogInfo(store: Interface.Store, loginInfo: Interface.TLoginInfo): Interface.Store {
		return { ...store, loginInfo };
	}

	private setBusinessInfo(store: Interface.Store, businessInfo: Interface.TBusinessInfo): Interface.Store {
		return { ...store, businessInfo };
	}

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

	async initBusiness(): Promise<boolean> {
		try {
			const res = await this.API.Links.GET_BUSINESS_INFO();
			this.store = this.setBusinessInfo(this.store, res);

			return true;
		} catch {
			return false;
		}
	}

	async loginAdmin(login: string, password: string): Promise<boolean> {
		try {
			const res = await this.API.Links.LOGIN(login, password);
			this.setLogInfo(this.store, res);

			return true;
		} catch {
			return false;
		}
	}

	async loginQr(token: string): Promise<boolean> {
		try {
			const res = await this.API.Links.QR_ENTER(token);
			this.setLogInfo(this.store, res);

			return true;
		} catch {
			return false;
		}
	}

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
