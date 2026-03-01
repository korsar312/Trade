import type { typesUtils } from "../../../Libs/Util/TypesUtils.ts";

export namespace ItemInterface {
	export interface IAdapter {
		setItems(items: TItemLink[]): void;

		getType(itemId?: string): ETypeItem | undefined;
		getBank(itemId?: string): EBank | undefined | null;
	}

	export type TItem = TItemAll | TItemPublic;
	export type TItemLink = { id: string; item: TItem };
	export type TItemMap = Record<string, TItemLink>;

	export type TItemAll = TItemCard | TItemFree;
	export type TItemPublic = TItemCardPublic | TItemFreePublic;
	export type TItemFilter = TItemCardFilter | TItemFreeFiler;

	type TItemVar<T extends ETypeItem, B> = { type: T; info: B };
	export type TPickItem<T extends ETypeItem> = Extract<TItem, { type: T }>;

	/** Карта */
	export interface ICardInfoAll {
		bank: EBank;
		age: string;
		name: string;
	}
	type ICardInfoPublic = Omit<ICardInfoAll, "name">;
	type ICardInfoFilter = typesUtils.ReplaceKeyStrict<ICardInfoPublic, "bank", EBank[]>;
	type TItemCard = TItemVar<"CARD", ICardInfoAll>;
	type TItemCardPublic = TItemVar<"CARD", ICardInfoPublic>;
	type TItemCardFilter = TItemVar<"CARD", ICardInfoFilter>;

	/** Свободный лот */
	export interface IFreeInfoAll {
		desc: string;
	}
	type IFreeInfoPublic = Omit<IFreeInfoAll, "desc">;
	type IFreeInfoFilter = IFreeInfoPublic;
	type TItemFree = TItemVar<"FREE", IFreeInfoAll>;
	type TItemFreePublic = TItemVar<"FREE", IFreeInfoPublic>;
	type TItemFreeFiler = TItemVar<"FREE", IFreeInfoFilter>;

	export type ETypeItem = keyof typeof ItemTypeItem;
	export type EBank = keyof typeof ItemBank;

	export interface Store {
		items: TItemMap;
	}
}

export const ItemBank = {
	ALFA: "ALFA",
	SBER: "SBER",
	TINK: "TINK",
} as const;
export const ItemBankArr = Object.keys(ItemBank) as ItemInterface.EBank[];

export const ItemTypeItem = {
	CARD: "CARD",
	FREE: "FREE",
} as const;
export const ItemTypeItemArr = Object.keys(ItemTypeItem) as ItemInterface.ETypeItem[];
