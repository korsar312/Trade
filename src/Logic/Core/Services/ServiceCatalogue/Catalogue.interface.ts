import type { PublicInterface } from "../Public.interface.ts";

export namespace CatalogueInterface {
	export interface IAdapter {
		requestGoods(): Promise<void>;
		requestItemDetail(idList: string[]): Promise<void>;

		getGoodsIdList(): string[];

		getName(itemId: string): string | undefined;
		getPrice(itemId: string): number | undefined;
		getDesc(itemId: string): string | undefined;
		getSellerName(itemId: string): string | undefined;
		getSellerId(itemId: string): string | undefined;
		getSellerRating(itemId: string): TRating | undefined | null;
		getImage(itemId: string): string;

		getBank(itemId: string): PublicInterface.EBank | undefined;
	}

	export interface IItem {
		name: string;
		price: number;

		sellerName: string;
		sellerId: string;
		sellerLike: number;
		sellerDislike: number;

		itemType: PublicInterface.ETypeItem;
		info: PublicInterface.TInfoItem;
		detail?: TDetailItem;
	}

	export type TDetailItem = {
		desc: string;
	};

	export type TRating = PublicInterface.TRating;
	export type EBank = PublicInterface.EBank;
	export type TItemMap = Record<string, IItem>;

	export interface Store {
		goods: TItemMap;
	}
}
