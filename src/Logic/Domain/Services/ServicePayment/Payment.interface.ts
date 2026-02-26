export namespace PaymentInterface {
	export interface IAdapter {
		buyLot(lotId: string): Promise<string>;
	}

	export interface Store {}
}
