export namespace CatalogueInterface {
	export interface IAdapter {
		initGoods(): Promise<void>;
		getGoodsIdList(): string[];
		getBank(itemId: string): EBank;
		getPrice(itemId: string): number;
		getRating(itemId: string): TRating;
		getImage(itemId: string): string;
		getSellerName(itemId: string): string;
		getSellerId(itemId: string): string;
	}

	export type TItem = {
		image: string;
		price: number;
		seller: string;
		sellerId: string;
		sellerRating: TRating;
		bank: EBank;
	};

	export type TRating = 1 | 2 | 3 | 4 | 5;
	export type EBank = keyof typeof Bank;
	export type TItemMap = Record<string, TItem>;

	export interface Store {
		goods: TItemMap;
	}
}

const Bank = {
	ALFA: "ALFA",
	SBER: "SBER",
	TINK: "TINK",
} as const;
