import type { PublicInterface } from "../Public.interface.ts";

export namespace CatalogueInterface {
	export interface IAdapter {
		requestGoods(): Promise<void>;
		requestItemDetail(idList: string[]): Promise<void>;

		getGoodsIdList(): string[];

		getName(itemId: string): string | undefined;
		getDesc(itemId: string): string | undefined;
		getBank(itemId: string): EBank | undefined;
		getPrice(itemId: string): number | undefined;
		getRating(itemId: string): TRating | undefined;
		getImage(itemId: string): string | undefined;
		getSellerName(itemId: string): string | undefined;
		getSellerId(itemId: string): string | undefined;
	}

	export type TItem = {
		name: string;
		image: string;
		price: number;
		rating: TRating;
		sellerName: string;
		sellerId: string;
		info: TInfo;
	};

	type TItemType = { type: ETypeItem };
	type TInfo = TInfoVar;

	type TInfoVar = TItemTypeCard | TDetailItemTypeCard;
	export interface TItemTypeCard extends TItemType {
		type: "CARD";
		bank: EBank;
	}
	export interface TDetailItemTypeCard extends TItemTypeCard {
		desc: string;
		sellerId: string;
	}

	export type ETypeItem = keyof typeof TypeItem;
	export type TRating = PublicInterface.TRating;
	export type EBank = PublicInterface.EBank;
	export type TItemMap = Record<string, TItem>;

	export interface Store {
		goods: TItemMap;
	}
}

const TypeItem = {
	CARD: "CARD",
} as const;
