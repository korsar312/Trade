export namespace PaymentInterface {
	export interface IAdapter {
		buyLot(lotId: string): Promise<void>;
	}

	export interface IPayment {
		id: string;
		dealId: string;
		status: EPaymentStatus;
		price: number;
		fee: number;
		createdAt: number;
		updatedAt: number;
	}

	export type EPaymentStatus = keyof typeof PaymentStatus;

	export interface Store {}
}

const PaymentStatus = {
	ESCROW: "ESCROW",
	RELEASED: "RELEASED",
	REFUNDED: "REFUNDED",
	CANCEL: "CANCEL",
} as const;
