export namespace PaymentInterface {
	export interface IAdapter {
		buyLot(lotId: string): Promise<void>;
	}

	export interface Store {}
}
