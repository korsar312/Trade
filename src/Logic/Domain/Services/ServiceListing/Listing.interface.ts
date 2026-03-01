import type { PublicInterface } from "../Public.interface.ts";

export namespace ListingInterface {
	export interface IAdapter {
		setListing(listing: IListing[]): void;
		getListingIdList(): string[];

		getName(itemId?: string): string | undefined;
		getDesc(itemId?: string): string | undefined;
		getPrice(itemId?: string): number | undefined;
		getSellerName(itemId?: string): string | undefined;
		getSellerId(itemId?: string): string | undefined;
		getSellerRating(itemId?: string): TRating | undefined | null;
		getImage(itemId?: string): string;
	}

	export interface IListing {
		id: string;
		name: string;
		desc: string;
		price: number;
		status: EStatus;
		saleKind: ESaleKind;

		sellerName: string;
		sellerId: string;
		sellerLike: number;
		sellerDislike: number;
	}

	export type TMain = Pick<IListing, "name" | "price" | "desc" | "saleKind">;
	export type TRating = PublicInterface.TRating;
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
