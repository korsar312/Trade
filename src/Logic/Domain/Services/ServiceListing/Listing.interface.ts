export namespace ListingInterface {
	export interface IAdapter {
		setListing(listing: IListing[]): void;
		getListingIdList(): string[];

		getName(id?: string): string | undefined;
		getDesc(id?: string): string | undefined;
		getPrice(id?: string): number | undefined;
		getSellerId(id?: string): string | undefined;
		getImage(id?: string): string;
	}

	export interface IListing {
		id: string;
		name: string;
		desc: string;
		price: number;
		status: EStatus;
		sellerId: string;
		saleKind: ESaleKind;
	}

	export type TMain = Pick<IListing, "name" | "price" | "desc" | "saleKind">;
	export type TListingMap = Record<string, IListing>;

	export type EStatus = keyof typeof ListingStatus;
	export type ESaleKind = keyof typeof ListingSaleKind;

	export interface Store {
		listing: TListingMap;
	}
}

const ListingStatus = {
	ACTIVE: "ACTIVE",
	FREEZE: "FREEZE",
	ARCHIVED: "ARCHIVED",
} as const;

const ListingSaleKind = {
	ONE: "ONE",
	INFINITY: "INFINITY",
} as const;
