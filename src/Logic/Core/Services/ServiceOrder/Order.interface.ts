export namespace OrderInterface {
	export interface IAdapter {
		callWaiter(): Promise<void>;
	}

	export interface Store {}
}
