import type { SettingInterface as Interface } from "../Setting.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";

class SettingImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	//==============================================================================================

	constructor(props: IServiceProps) {
		const store: Interface.Store = {};

		super(props, store);
	}

	//==============================================================================================

	public getStorage<T extends Interface.ENameStorage>(key: T): Interface.TStorageValue<T> | null {
		const itemString = this.API.Storage.getLocalData(key);
		if (itemString == null) return null;

		try {
			return JSON.parse(itemString) as Interface.TStorageValue<T>;
		} catch {
			return null;
		}
	}

	public setStorage<T extends Interface.ENameStorage>(key: T, value: Interface.TStorageValue<T>): void {
		this.API.Storage.setLocalData(key, value);
	}
}

export default SettingImp;
