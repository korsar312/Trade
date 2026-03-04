export namespace DealInterface {
	export interface IAdapter {}

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

	export type EDealStatus = keyof typeof DealStatus;

	export interface Store {}
}

export const DealStatus = {
	IN_ACTIVE: "IN_ACTIVE",
	COMPLETE: "COMPLETE",
	CANCELLED: "CANCELLED",
} as const;
