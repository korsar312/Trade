export namespace CatalogueInterface {
	export interface IAdapter {
		initCategory(): Promise<void>;
		initGoods(): Promise<void>;
		getCategoryIdList(): string[];
		getGoodsIdList(): string[];
		getPrice(itemId: string): number;
		getImage(itemId: string): string;
	}

	export type TCategory = {};

	export type TItem = {
		image: string;
		price: number;
		bank: EBank;
	};

	export type EBank = keyof typeof Bank;
	export type TCategoryMap = Record<string, TCategory>;
	export type TItemMap = Record<string, TItem>;

	export interface Store {
		category: TCategoryMap;
		goods: TItemMap;
	}
}

const Bank = {
	ALFA: "ALFA",
	SBER: "SBER",
	TINK: "TINK",
} as const;
