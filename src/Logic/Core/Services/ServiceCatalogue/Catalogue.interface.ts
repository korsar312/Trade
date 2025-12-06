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
		categoryInclude: number;
		tags: string[];
		kKal?: number;
		weight?: number;
		craftTime?: number;
	};

	export type TCategoryMap = Record<string, TCategory>;
	export type TItemMap = Record<string, TItem>;

	export interface Store {
		category: TCategoryMap;
		goods: TItemMap;
	}
}
