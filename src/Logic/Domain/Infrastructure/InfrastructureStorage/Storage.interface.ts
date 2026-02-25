export namespace StorageInterface {
	export interface IAdapter {
		setLocalData(key: string, data: unknown): void;
		getLocalData(key: string): string | null;
		clearLocalData(key: string): void;
	}
}
