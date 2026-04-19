import type { PublicInterface } from "../../Services/Public.interface.ts";
import type { RestInterface } from "./Rest.interface.ts";

export namespace LinksInterface {
	export interface IAdapter {
		LOGIN: TRest<RestInterface.TLoginReq, RestInterface.TLoginRes>;
		GET_ITEMS: TRest<RestInterface.TGetItemsReq, RestInterface.TGetItemsRes>;
		GET_ITEM: TRest<RestInterface.TGetItemReq, RestInterface.TGetItemRes>;
		CREATE_LISTING: TRest<RestInterface.TCreateListingReq, RestInterface.TCreateListingRes>;
		GET_MY_ACC: TRest<RestInterface.TGetMyAccReq, RestInterface.TGetMyAccRes>;
		AWAIT_PAY_DEPOSIT: TRest<RestInterface.TAwaitPayDepositReq, RestInterface.TAwaitPayDepositRes>;
		IS_EXIST_DEPOSIT: TRest<RestInterface.TIsExistDepositReq, RestInterface.TIsExistDepositRes>;
		CREATE_DEPOSIT: TRest<RestInterface.TCreateDepositReq, RestInterface.TCreateDepositRes>;
		REMOVE_DEPOSIT: TRest<RestInterface.TRemoveDepositReq, RestInterface.TRemoveDepositRes>;
		GET_BALANCE: TRest<RestInterface.TGetBalanceReq, RestInterface.TGetBalanceRes>;
		WITHDRAW_BALANCE: TRest<RestInterface.TWithdrawBalanceReq, RestInterface.TwWithdrawBalanceRes>;
		START_BUY_ITEM: TRest<RestInterface.TStartBuyItemReq, RestInterface.TStartBuyItemRes>;
		GET_ORDER_LIST: TRest<RestInterface.TGetOrderListReq, RestInterface.TGetOrderListRes>;
		GET_ORDER: TRest<RestInterface.TGetOrderReq, RestInterface.TGetOrderRes>;
		DEAL_COMPLETE: TRest<RestInterface.TDealCompleteReq, RestInterface.TDealCompleteRes>;
		DEAL_CANCEL: TRest<RestInterface.TDealCancelReq, RestInterface.TDealCancelRes>;
		DEAL_SEND_MESSAGE: TRest<RestInterface.TDealSendMessageReq, RestInterface.TDealSendMessageRes>;
	}

	type TRest<P, R> = (param: P) => Promise<R>;

	type TLinksParam = {
		link: string;
		http: EMethod;
		role: PublicInterface.ERole[];
	};

	export type TRequestParam = {
		link: EName;
		param?: Record<string, any>;
		options?: TRequestOptions;
	};

	export type TRequestOptions = {
		signal?: AbortSignal;
	};

	export type TLinks = Record<EName, TLinksParam>;

	export type EMethod = keyof typeof Method;
	export type EName = keyof typeof Names;
}

const Method = {
	get: "get",
	put: "put",
	post: "post",
	delete: "delete",
} as const;

const Names = {
	LOGIN: "LOGIN",
	GET_ITEMS: "GET_ITEMS",
	GET_ITEM: "GET_ITEM",
	CREATE_LISTING: "CREATE_LISTING",
	GET_MY_ACC: "GET_MY_ACC",
	AWAIT_PAY_DEPOSIT: "AWAIT_PAY_DEPOSIT",
	IS_EXIST_DEPOSIT: "IS_EXIST_DEPOSIT",
	CREATE_DEPOSIT: "CREATE_DEPOSIT",
	REMOVE_DEPOSIT: "REMOVE_DEPOSIT",
	GET_BALANCE: "GET_BALANCE",
	WITHDRAW_BALANCE: "WITHDRAW_BALANCE",
	START_BUY_ITEM: "START_BUY_ITEM",
	GET_ORDER_LIST: "GET_ORDER_LIST",
	GET_ORDER: "GET_ORDER",
	DEAL_COMPLETE: "DEAL_COMPLETE",
	DEAL_CANCEL: "DEAL_CANCEL",
	DEAL_SEND_MESSAGE: "DEAL_SEND_MESSAGE",
} as const;
