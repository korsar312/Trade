export namespace WalletInterface {
	export interface IAdapter {
		getBalance(): number;
		withdrawal(value: number): Promise<void>;
		replenish(value: number): Promise<void>;
	}

	export interface Store {
		balance: number;
	}
}
