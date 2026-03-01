import type { typesUtils } from "../../Libs/Util/TypesUtils.ts";
import type { PublicInterface } from "../Services/Public.interface.ts";
import type { ListingInterface } from "../Services/ServiceListing/Listing.interface.ts";
import type { ItemInterface } from "../Services/ServiceItem/Item.interface.ts";

export namespace UseCasesInterface {
	export type IAdapter = {};

	export type TScenarioList = {
		requestCatalog: TScenarioBase<TRequestCatalogReq, TRequestCatalogRes>;
		requestLot: TScenarioBase<TRequestLotReq, TRequestLotRes>;
		createLot: TScenarioBase<TCreateLotReq, TCreateLotRes>;
	};

	export type TScenarioBase<T, R> = {
		invoke(params: T): R;
	};

	interface IReqListing {
		limit: number;
		saleKind: ListingInterface.ESaleKind;
		cursorId?: string;
		sort?: PublicInterface.ESort;
		sellerId?: string;
		priceUp?: number;
		priceDown?: number;
		findStr?: string;
	}

	export type TLotInfoPublic = ListingInterface.IListing & ItemInterface.TItemPublic;
	export type TReqCreate = ListingInterface.TMain & ItemInterface.TItemAll;

	//========================= IN ==============================

	export type TRequestCatalogReq = IReqListing &
		typesUtils.DeepPartial<ItemInterface.TItemFilter> &
		Pick<ItemInterface.TItemFilter, "type">;
	export type TRequestLotReq = { id: string; type: ItemInterface.ETypeItem };
	export type TCreateLotReq = ListingInterface.TMain & ItemInterface.TItemAll;

	//========================= OUT ==============================

	export type TRequestCatalogRes = Promise<void>;
	export type TRequestLotRes = Promise<void>;
	export type TCreateLotRes = Promise<string>;
}
