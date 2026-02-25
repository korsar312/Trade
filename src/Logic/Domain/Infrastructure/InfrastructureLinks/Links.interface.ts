import type { CatalogueInterface } from "../../Services/ServiceCatalogue/Catalogue.interface.ts";
import type { UserInterface } from "../../Services/ServiceUser/User.interface.ts";
import type { PublicInterface } from "../../Services/Public.interface.ts";
import type { WalletInterface } from "../../Services/ServiceWallet/Wallet.interface.ts";

export namespace LinksInterface {
	export interface IAdapter {
		LOGIN(login: string, token: string): Promise<UserInterface.IUser>;
		GET_ITEMS(params: CatalogueInterface.TReqCatalog): Promise<CatalogueInterface.TItemElPublic[]>;
		GET_ITEM(id: string, type: CatalogueInterface.ETypeItem): Promise<CatalogueInterface.TItemElPublic>;
		CREATE_LISTING(params: CatalogueInterface.TReqCreate): Promise<string>;
		GET_MY_ACC(): Promise<UserInterface.IUser>;
		WITHDRAWAL_BALANCE(value: number): Promise<number>;
		AWAIT_PAY_DEPOSIT(signal?: AbortSignal): Promise<boolean>;
		IS_EXIST_DEPOSIT(): Promise<WalletInterface.TCheckDeposit>;
		CREATE_DEPOSIT(amount: number): Promise<WalletInterface.TDeposit>;
		REMOVE_DEPOSIT(): Promise<void>;
		GET_BALANCE(): Promise<WalletInterface.TWallet>;
	}

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
	GET: "GET",
	PUT: "PUT",
	POST: "POST",
	DELETE: "DELETE",
} as const;

const Names = {
	LOGIN: "LOGIN",
	GET_ITEMS: "GET_ITEMS",
	GET_ITEM: "GET_ITEM",
	CREATE_LISTING: "CREATE_LISTING",
	GET_MY_ACC: "GET_MY_ACC",
	WITHDRAWAL_BALANCE: "WITHDRAWAL_BALANCE",
	AWAIT_PAY_DEPOSIT: "AWAIT_PAY_DEPOSIT",
	IS_EXIST_DEPOSIT: "IS_EXIST_DEPOSIT",
	CREATE_DEPOSIT: "CREATE_DEPOSIT",
	REMOVE_DEPOSIT: "REMOVE_DEPOSIT",
	GET_BALANCE: "GET_BALANCE",
} as const;
