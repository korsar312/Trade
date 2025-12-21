import type { CatalogueInterface } from "../../Services/ServiceCatalogue/Catalogue.interface.ts";
import type { OrderInterface } from "../../Services/ServiceOrder/Order.interface.ts";
import type { UserInterface } from "../../Services/ServiceUser/User.interface.ts";

export namespace LinksInterface {
	export interface IAdapter {
		LOGIN(token: string): Promise<UserInterface.TUser>;
		GET_GOODS(): Promise<CatalogueInterface.TItemMap>;
		GET_ORDERS(): Promise<OrderInterface.TOrderMap>;
	}

	export type EMethod = keyof typeof Method;
	export type EName = keyof typeof Names;
	export type TLinksList = Record<EName, string>;

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
	GET_GOODS: "GET_GOODS",
	GET_ORDERS: "GET_ORDERS",
} as const;
