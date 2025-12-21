import type { PublicInterface } from "../Public.interface.ts";

export namespace CatalogueInterface {
	export interface IAdapter {
		initGoods(): Promise<void>;
		getGoodsIdList(): string[];

		getName(itemId: string): string;
		getDesc(itemId: string): string;
		getBank(itemId: string): EBank;
		getPrice(itemId: string): number;
		getRating(itemId: string): TRating;
		getImage(itemId: string): string;
		getSellerName(itemId: string): string;
		getSellerId(itemId: string): string;
	}

	export type TItem = {
		name: string;
		image: string;
		price: number;
		rating: TRating;
		sellerName: string;
		info: TInfo;
	};

	type TItemType = {
		type: ETypeItem;
	};

	export type TInfo = TInfoVar;

	type TInfoVar = TItemTypeCard | TDetailItemTypeCard;
	export interface TItemTypeCard extends TItemType {
		type: "CARD";
		bank: EBank;
	}
	export interface TDetailItemTypeCard extends TItemTypeCard {
		desc: string;
		sellerId: string;
		sellerName: string;
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
