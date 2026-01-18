import type { PublicInterface } from "../Public.interface.ts";
import type { typesUtils } from "../../../Libs/Util/TypesUtils.ts";

export namespace CatalogueInterface {
	export interface IAdapter {
		requestGoods(params: TReqCatalog): Promise<void>;
		requestItem(id: string, type: ETypeItem): Promise<void>;

		getGoodsIdList(): string[];

		getName(itemId: string): string | undefined;
		getDesc(itemId: string): string | undefined;
		getType(itemId: string): ETypeItem | undefined;
		getPrice(itemId: string): number | undefined;
		getSellerName(itemId: string): string | undefined;
		getSellerId(itemId: string): string | undefined;
		getSellerRating(itemId: string): TRating | undefined | null;
		getImage(itemId?: string): string;

		getBank(itemId: string): EBank | undefined | null;
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
	export type TReqCatalog = IReqCatalog & typesUtils.DeepPartial<TItemPublic> & Pick<TItemPublic, "type">;

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

	interface ICardInfoAll {
		bank: EBank;
		age: string;
		name: string;
	}
	type ICardInfoPublic = Omit<ICardInfoAll, "name">;

	interface IGuardInfoAll {
		zxc: number;
		cvb: string;
	}
	type IGuardInfoPublic = Omit<IGuardInfoAll, "zxc">;

	type TItemVar<T extends ETypeItem, B> = { type: T; info: B };
	export type TPickItem<T extends ETypeItem> = Extract<TItem, { type: T }>;

	type TItemCard = TItemVar<"CARD", ICardInfoAll>;
	type TItemGuard = TItemVar<"GUARD", IGuardInfoAll>;

	type TItemCardPublic = TItemVar<"CARD", ICardInfoPublic>;
	type TItemGuardPublic = TItemVar<"GUARD", IGuardInfoPublic>;

	type TItemAll = TItemCard | TItemGuard;
	type TItemPublic = TItemCardPublic | TItemGuardPublic;

	/** ================= ENUMS ======================= */

	export type ETypeItem = keyof typeof TypeItem;
	export type EBank = keyof typeof Bank;
	export type EStatus = keyof typeof Status;
	export type ESaleKind = keyof typeof SaleKind;

	/** ================= STORE ======================= */

	export interface Store {
		goods: TItemMap;
	}
}

const Bank = {
	ALFA: "ALFA",
	SBER: "SBER",
	TINK: "TINK",
} as const;

const TypeItem = {
	CARD: "CARD",
	GUARD: "GUARD",
} as const;

const Status = {
	DRAFT: "DRAFT",
	ACTIVE: "ACTIVE",
	RESERVED: "RESERVED",
	SOLD: "SOLD",
	ARCHIVED: "ARCHIVED",
} as const;

const SaleKind = {
	GOODS: "GOODS",
	SERVICE: "SERVICE",
} as const;
