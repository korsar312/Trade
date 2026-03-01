import type { LinksInterface as Interface } from "../Links.interface";
import type { CatalogueInterface } from "../../../Services/ServiceCatalogue/Catalogue.interface.ts";
import type { UserInterface } from "../../../Services/ServiceUser/User.interface.ts";
import type { WalletInterface } from "../../../Services/ServiceWallet/Wallet.interface.ts";

class LinksImp implements Interface.IAdapter {
	private authData: { login: string; token: string } | undefined;

	private async request<T = void>({ link, param, options }: Interface.TRequestParam): Promise<T> {
		const curLink = this.links[link];
		const method = curLink.http;
		const url = new URL(curLink.link, "http://" + this.address);

		const headers: Record<string, string> = {
			Accept: "application/json",
			...this.authData,
		};

		const init: RequestInit = { method, headers, signal: options?.signal };

		if (param !== undefined) {
			switch (method) {
				case "GET":
					url.search = new URLSearchParams(param).toString();
					break;
				default:
					headers["Content-Type"] = "application/json";
					init.body = JSON.stringify(param);
					break;
			}
		}

		const res = await fetch(url.toString(), init);
		if (!res.ok) throw new Error(res.status + res.statusText);

		return await res.json();
	}
	//==============================================================================================

	constructor(
		private readonly links: Interface.TLinks,
		private readonly address: string,
	) {}

	//==============================================================================================

	public LOGIN = (login: string, token: string) => {
		const param = { login, token };
		const res = this.request<UserInterface.IUser>({ link: "LOGIN", param });

		res.then(() => (this.authData = param));

		return res;
	};
	public GET_ITEMS = (param: CatalogueInterface.TReqCatalog) => {
		return this.request<CatalogueInterface.TItemElPublic[]>({ link: "GET_ITEMS", param });
	};
	public GET_ITEM = (id: string, type: CatalogueInterface.ETypeItem) => {
		return this.request<CatalogueInterface.TItemElPublic>({ link: "GET_ITEM", param: { id, type } });
	};
	public CREATE_LISTING = (param: CatalogueInterface.TReqCreate) => {
		return this.request<string>({ link: "CREATE_LISTING", param });
	};
	public GET_MY_ACC = () => {
		return this.request<UserInterface.IUser>({ link: "GET_MY_ACC" });
	};
	public AWAIT_PAY_DEPOSIT = (signal?: AbortSignal) => {
		return this.request<boolean>({ link: "AWAIT_PAY_DEPOSIT", options: { signal } });
	};
	public IS_EXIST_DEPOSIT = () => {
		return this.request<WalletInterface.TCheckDeposit>({ link: "IS_EXIST_DEPOSIT" });
	};
	public CREATE_DEPOSIT = (amount: number) => {
		return this.request<WalletInterface.TDeposit>({ link: "CREATE_DEPOSIT", param: { amount } });
	};
	public REMOVE_DEPOSIT = () => {
		return this.request({ link: "REMOVE_DEPOSIT" });
	};
	public GET_BALANCE = () => {
		return this.request<WalletInterface.TWallet>({ link: "GET_BALANCE" });
	};
	public WITHDRAW_BALANCE = (param: WalletInterface.TTranche) => {
		return this.request({ link: "WITHDRAW_BALANCE", param });
	};
	public START_BUY_ITEM = (listingId: string) => {
		return this.request({ link: "START_BUY_ITEM", param: { listingId } });
	};
}

export default LinksImp;
