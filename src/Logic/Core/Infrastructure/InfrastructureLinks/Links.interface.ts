import type { CatalogueInterface } from "../../Services/ServiceCatalogue/Catalogue.interface.ts";
import type { OrderInterface } from "../../Services/ServiceOrder/Order.interface.ts";
import type { UserInterface } from "../../Services/ServiceUser/User.interface.ts";
import type { PublicInterface } from "../../Services/Public.interface.ts";

export namespace LinksInterface {
	export interface IAdapter {
		LOGIN(login: string, token: string): Promise<UserInterface.TUser>;
		GET_ITEMS(id: string[]): Promise<CatalogueInterface.TItemMap>;
		GET_ITEM_DETAIL(id: string[]): Promise<CatalogueInterface.TItemMap>;
		GET_ORDERS(): Promise<OrderInterface.TOrderMap>;
		GET_ORDER_DETAIL(id: string[]): Promise<OrderInterface.TOrderMap>;
	}

	type TLinksParam = {
		link: string;
		http: EMethod;
		role: PublicInterface.ERole[];
	};

	export type EMethod = keyof typeof Method;
	export type EName = keyof typeof Names;
	export type TLinksList = Record<EName, string>;
	export type TLinks = Record<EName, TLinksParam>;

	export type ERequestParam = {
		link: EName;
		method: EMethod;
		param?: Record<string, any>;
	};
}

const Method = {
	GET: "GET",
	PUT: "PUT",
	POST: "POST",
	DELETE: "DELETE",
} as const;

const Names = {
	LOGIN: "LOGIN",
	REGISTER: "REGISTER",
	CREATE_LISTING: "CREATE_LISTING",
	GET_ITEMS: "GET_ITEMS",
	GET_ITEM_DETAIL: "GET_ITEM_DETAIL",
	GET_ORDERS: "GET_ORDERS",
	GET_ORDER_DETAIL: "GET_ORDER_DETAIL",
} as const;
