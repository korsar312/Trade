export namespace CatalogueInterface {
	export interface IAdapter {
		initGoods(): Promise<void>;
		getGoodsIdList(): string[];
		getBank(itemId: string): EBank;
		getPrice(itemId: string): number;
		getImage(itemId: string): string;
	}

	export type TItem = {
		image: string;
		price: number;
		bank: EBank;
	};

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
