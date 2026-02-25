import { type WalletInterface as Interface } from "../Wallet.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";

class WalletImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private SetBalance(store: Interface.Store, wallet: Interface.TWallet): Interface.Store {
		return { ...store, wallet };
	}

	private IsEnoughFunds(amount: number): boolean {
		return this.store.wallet.balance < amount;
	}

	//==============================================================================================

	constructor(
		props: IServiceProps,
		private readonly cashoutFee: number,
	) {
		const store: Interface.Store = {
			wallet: {
				balance: 0,
				hold: 0,
			},
		};

		super(props, store);
	}

	//==============================================================================================

	public async checkDeposit(): Promise<Interface.TCheckDeposit> {
		return await this.API.Links.IS_EXIST_DEPOSIT();
	}

	public async createDeposit(amount: number): Promise<Interface.TDeposit> {
		return await this.API.Links.CREATE_DEPOSIT(amount);
	}

	public async removeDeposit(): Promise<void> {
		return await this.API.Links.REMOVE_DEPOSIT();
	}

	public async awaitPayDeposit(signal?: AbortSignal): Promise<boolean> {
		const isSuccess = await this.API.Links.AWAIT_PAY_DEPOSIT(signal);
		await this.refreshBalance();

		return isSuccess;
	}

	public async withdrawBalance(tranche: Interface.TTranche): Promise<void> {
		await this.API.Links.WITHDRAW_BALANCE(tranche);
		await this.refreshBalance();
	}

	public async refreshBalance(): Promise<void> {
		const balance = await this.API.Links.GET_BALANCE();
		this.store = this.SetBalance(this.store, balance);
	}

	public isWithdrawEnoughFunds(amount: number): boolean {
		return this.IsEnoughFunds(amount + this.getWithdrawFee());
	}

	public getWithdrawFee(): number {
		return this.cashoutFee;
	}

	public getBalance(): Interface.TWallet {
		return this.store.wallet;
	}
}

export default WalletImp;
