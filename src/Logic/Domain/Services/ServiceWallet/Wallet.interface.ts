export namespace WalletInterface {
	export interface IAdapter {
		checkDeposit(): Promise<TCheckDeposit>;
		createDeposit(amount: number): Promise<TDeposit>;
		awaitPayDeposit(signal?: AbortSignal): Promise<boolean>;
		removeDeposit(): Promise<void>;
		refreshBalance(): Promise<void>;
		getBalance(): number;
		isWithdrawEnoughFunds(amount: number): boolean;
		withdrawBalance(tranche: TTranche): Promise<void>;
		getCashoutFee(): number;
		getServiceFee(): number;
		isAvailableBuy(amount: number): boolean;
		isAvailableWithdraw(amount: number): boolean;
	}

	export type TWallet = {
		balance: number;
		hold: number;
	};

	export type TTranche = {
		address: string;
		amount: number;
	};

	export type TCheckDeposit = TDeposit | null;

	export type TDeposit = {
		address: string;
		amount: string;
		serverTime: number;
		timeEnd: number;
	};

	export interface Store {
		wallet: TWallet;
		cashoutFee: number;
		serviceFee: number;
	}
}
