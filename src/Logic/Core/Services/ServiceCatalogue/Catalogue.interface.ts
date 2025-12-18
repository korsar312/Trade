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

	export type TItem = PublicInterface.TItem;
	export type TRating = PublicInterface.TRating;
	export type EBank = PublicInterface.EBank;
	export type TItemMap = Record<string, TItem>;

	export interface Store {
		goods: TItemMap;
	}
}
