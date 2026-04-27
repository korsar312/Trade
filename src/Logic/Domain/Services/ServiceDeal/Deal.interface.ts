import type { RestInterface } from "../../Infrastructure/InfrastructureLinks/Rest.interface.ts";

export namespace DealInterface {
	export interface IAdapter {
		setDeal(listing: IDeal[]): void;
		getDealIdList(): string[];
		dealComplete(dealId: string): Promise<RestInterface.TDealCompleteRes>;

		getListingId(id?: string): string | undefined;
	}

	export interface IDeal {
		id: string;
		listingId: string;
		sellerId: string;
		buyerId: string;
		status: EDealStatus;
		buyerCancelAt: number | null;
		sellerCancelAt: number | null;
		createdAt: number;
	}

	export type TDealMap = Record<string, IDeal>;

	export type EDealStatus = keyof typeof DealStatus;

	export interface Store {
		deal: TDealMap;
	}
}

export const DealStatus = {
	IN_ACTIVE: "IN_ACTIVE",
	DISPUTE: "DISPUTE",
	COMPLETE: "COMPLETE",
	CANCELLED: "CANCELLED",
} as const;
