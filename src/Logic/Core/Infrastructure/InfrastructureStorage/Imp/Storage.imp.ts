import type { StorageInterface as Interface } from "../Storage.interface.ts";

class StorageImp implements Interface.IAdapter {
	//==============================================================================================

	constructor() {}

	//==============================================================================================

	public setLocalData(key: string, data: unknown): void {
		localStorage.setItem(key, JSON.stringify(data));
	}

	public getLocalData(key: string): string | null {
		return localStorage.getItem(key);
	}

	public clearLocalData(key: string): void {
		localStorage.removeItem(key);
	}
}

export default StorageImp;
