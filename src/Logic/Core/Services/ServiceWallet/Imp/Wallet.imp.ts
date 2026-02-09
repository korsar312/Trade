import type { WalletInterface as Interface } from "../Wallet.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";

class WalletImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private SetBalance(store: Interface.Store, balance: number): Interface.Store {
		return { ...store, balance };
	}

	//==============================================================================================

	constructor(props: IServiceProps) {
		const store: Interface.Store = {
			balance: 0,
		};

		super(props, store);
	}

	//==============================================================================================

	public getBalance() {
		return this.store.balance;
	}

	public async withdrawal(value: number) {
		this.API.Links.WITHDRAWAL_BALANCE(value).then((res) => this.SetBalance(this.store, res));
	}

	public async replenish(value: number) {
		this.API.Links.REPLENISH_BALANCE(value).then((res) => this.SetBalance(this.store, res));
	}
}

export default WalletImp;
