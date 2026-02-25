import type { PublicInterface } from "../Public.interface.ts";
import type { typesUtils } from "../../../Libs/Util/TypesUtils.ts";

export namespace CatalogueInterface {
	export interface IAdapter {
		requestGoods(params: TReqCatalog): Promise<void>;
		requestItem(id: string, type: ETypeItem): Promise<void>;
		createListing(params: TReqCreate): Promise<string>;

		getGoodsIdList(): string[];

		getName(itemId?: string): string | undefined;
		getDesc(itemId?: string): string | undefined;
		getType(itemId?: string): ETypeItem | undefined;
		getPrice(itemId?: string): number | undefined;
		getSellerName(itemId?: string): string | undefined;
		getSellerId(itemId?: string): string | undefined;
		getSellerRating(itemId?: string): TRating | undefined | null;
		getImage(itemId?: string): string;

		getBank(itemId?: string): EBank | undefined | null;
	}

	interface IReqCatalog {
		limit: number;
		saleKind: ESaleKind;
		cursorId?: string;
		sort?: PublicInterface.ESort;
		sellerId?: string;
		priceUp?: number;
		priceDown?: number;
		findStr?: string;
	}
	export type TReqCatalog = IReqCatalog & typesUtils.DeepPartial<TItemFilter> & Pick<TItemFilter, "type">;

	export type TMain = {
		name: string;
		desc: string;
		price: number;
		saleKind: ESaleKind;
	};

	export type TReqCreate = TMain & TItemAll;

	interface ICatalogEl {
		id: string;
		name: string;
		desc: string;
		price: number;
		status: EStatus;

		sellerName: string;
		sellerId: string;
		sellerLike: number;
		sellerDislike: number;
	}

	export type TItemElAll = ICatalogEl & TItemAll;
	export type TItemElPublic = ICatalogEl & TItemPublic;
	export type TItem = TItemElAll | TItemElPublic;

	export type TRating = PublicInterface.TRating;
	export type TItemMap = Record<string, TItem>;

	/** ================= GOODS ======================= */

	export interface ICardInfoAll {
		bank: EBank;
		age: string;
		name: string;
	}
	type ICardInfoPublic = Omit<ICardInfoAll, "name">;
	type ICardInfoFilter = typesUtils.ReplaceKeyStrict<ICardInfoPublic, "bank", EBank[]>;

	export interface IFreeInfoAll {
		desc: string;
	}
	type IFreeInfoPublic = Omit<IFreeInfoAll, "desc">;
	type IFreeInfoFilter = IFreeInfoPublic;

	type TItemVar<T extends ETypeItem, B> = { type: T; info: B };
	export type TPickItem<T extends ETypeItem> = Extract<TItem, { type: T }>;

	type TItemCard = TItemVar<"CARD", ICardInfoAll>;
	type TItemFree = TItemVar<"FREE", IFreeInfoAll>;

	type TItemCardPublic = TItemVar<"CARD", ICardInfoPublic>;
	type TItemFreePublic = TItemVar<"FREE", IFreeInfoPublic>;

	type TItemCardFilter = TItemVar<"CARD", ICardInfoFilter>;
	type TItemFreeFiler = TItemVar<"FREE", IFreeInfoFilter>;

	export type TItemAll = TItemCard | TItemFree;
	type TItemPublic = TItemCardPublic | TItemFreePublic;
	type TItemFilter = TItemCardFilter | TItemFreeFiler;

	/** ================= ENUMS ======================= */

	export type ETypeItem = keyof typeof CatalogueTypeItem;
	export type EBank = keyof typeof CatalogueBank;
	export type EStatus = keyof typeof CatalogueStatus;
	export type ESaleKind = keyof typeof CatalogueSaleKind;

	/** ================= STORE ======================= */

	export interface Store {
		goods: TItemMap;
	}
}

export const CatalogueBank = {
	ALFA: "ALFA",
	SBER: "SBER",
	TINK: "TINK",
} as const;
export const CatalogueBankArr = Object.keys(CatalogueBank) as CatalogueInterface.EBank[];

export const CatalogueTypeItem = {
	CARD: "CARD",
	FREE: "FREE",
} as const;

export const CatalogueTypeItemArr = Object.keys(CatalogueTypeItem) as CatalogueInterface.ETypeItem[];

const CatalogueStatus = {
	ACTIVE: "ACTIVE",
	FREEZE: "FREEZE",
	ARCHIVED: "ARCHIVED",
} as const;

const CatalogueSaleKind = {
	ONE: "ONE",
	INFINITY: "INFINITY",
} as const;
