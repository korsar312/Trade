import type { LinksInterface as Interface } from "../Links.interface";
import type { RestInterface } from "../Rest.interface.ts";

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
				case "get":
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

	public LOGIN = (param: RestInterface.TLoginReq) => {
		const res = this.request<RestInterface.TLoginRes>({ link: "LOGIN", param });
		res.then(() => (this.authData = param));

		return res;
	};
	public GET_ITEMS = (param: RestInterface.TGetItemsReq) => {
		return this.request<RestInterface.TGetItemsRes>({ link: "GET_ITEMS", param });
	};
	public GET_ITEM = (param: RestInterface.TGetItemReq) => {
		return this.request<RestInterface.TGetItemRes>({ link: "GET_ITEM", param });
	};
	public CREATE_LISTING = (param: RestInterface.TCreateListingReq) => {
		return this.request<RestInterface.TCreateListingRes>({ link: "CREATE_LISTING", param });
	};
	public GET_MY_ACC = (_param: RestInterface.TGetMyAccReq) => {
		return this.request<RestInterface.TGetMyAccRes>({ link: "GET_MY_ACC" });
	};
	public AWAIT_PAY_DEPOSIT = (param: RestInterface.TAwaitPayDepositReq) => {
		return this.request<RestInterface.TAwaitPayDepositRes>({ link: "AWAIT_PAY_DEPOSIT", options: { signal: param.signal } });
	};
	public IS_EXIST_DEPOSIT = (_param: RestInterface.TIsExistDepositReq) => {
		return this.request<RestInterface.TIsExistDepositRes>({ link: "IS_EXIST_DEPOSIT" });
	};
	public CREATE_DEPOSIT = (param: RestInterface.TCreateDepositReq) => {
		return this.request<RestInterface.TCreateDepositRes>({ link: "CREATE_DEPOSIT", param });
	};
	public REMOVE_DEPOSIT = (_param: RestInterface.TRemoveDepositReq) => {
		return this.request<RestInterface.TRemoveDepositRes>({ link: "REMOVE_DEPOSIT" });
	};
	public GET_BALANCE = (_param: RestInterface.TGetBalanceReq) => {
		return this.request<RestInterface.TGetBalanceRes>({ link: "GET_BALANCE" });
	};
	public WITHDRAW_BALANCE = (param: RestInterface.TWithdrawBalanceReq) => {
		return this.request<RestInterface.TwWithdrawBalanceRes>({ link: "WITHDRAW_BALANCE", param });
	};
	public START_BUY_ITEM = (param: RestInterface.TStartBuyItemReq) => {
		return this.request<RestInterface.TStartBuyItemRes>({ link: "START_BUY_ITEM", param });
	};
	public GET_ORDER_LIST = (param: RestInterface.TGetOrderListReq) => {
		return this.request<RestInterface.TGetOrderListRes>({ link: "GET_ORDER_LIST", param });
	};
	public GET_ORDER = (param: RestInterface.TGetOrderReq) => {
		return this.request<RestInterface.TGetOrderRes>({ link: "GET_ORDER", param });
	};
}

export default LinksImp;
