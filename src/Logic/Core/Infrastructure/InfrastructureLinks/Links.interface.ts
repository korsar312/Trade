import type { CatalogueInterface } from "../../Services/ServiceCatalogue/Catalogue.interface.ts";
import type { UserInterface } from "../../Services/ServiceUser/User.interface.ts";
import type { PublicInterface } from "../../Services/Public.interface.ts";

export namespace LinksInterface {
	export interface IAdapter {
		LOGIN(login: string, token: string): Promise<UserInterface.TUser>;
		GET_ITEMS(params: CatalogueInterface.TReqCatalog): Promise<CatalogueInterface.TItemElPublic[]>;
		GET_ITEM(id: string, type: CatalogueInterface.ETypeItem): Promise<CatalogueInterface.TItemElPublic>;
		CREATE_LISTING(params: CatalogueInterface.TReqCreate): Promise<string>;
	}

	type TLinksParam = {
		link: string;
		http: EMethod;
		role: PublicInterface.ERole[];
	};

	export type TResDefault = {
		ok: boolean;
	};

	export type EMethod = keyof typeof Method;
	export type EName = keyof typeof Names;
	export type TLinks = Record<EName, TLinksParam>;

	export type ERequestParam = {
		link: EName;
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
	GET_ITEMS: "GET_ITEMS",
	GET_ITEM: "GET_ITEM",
	CREATE_LISTING: "CREATE_LISTING",
} as const;
