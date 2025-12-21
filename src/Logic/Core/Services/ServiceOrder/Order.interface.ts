import type { PublicInterface } from "../Public.interface.ts";

export namespace OrderInterface {
	export interface IAdapter {
		requestOrders(): Promise<void>;
		requestOrderDetail(idList: string[]): Promise<void>;

		getOrderIdList(): string[];

		getName(orderId: string): string | undefined;
		getDesc(orderId: string): string | undefined;
		getBank(orderId: string): EBank | undefined;
		getPrice(orderId: string): number | undefined;
		getImage(orderId: string): string | undefined;
		getSellerName(orderId: string): string | undefined;
		getSellerId(orderId: string): string | undefined;
	}

	export type TOrder = {
		name: string;
		image: string;
		price: number;
		info: PublicInterface.TInfoItem | TInfoConcat;
	};

	type TInfoConcat = PublicInterface.TInfoItem & TDetailOrderTypeCard;

	type TDetailOrderTypeCard = {
		chat: string[];
		dateStart: string;
		seller: TActor;
		buyer: TActor;
		deliveryStatus: string;
		status: EStatus;
	};

	export type TActor = {
		id: string;
		name: string;
	};

	export type TRating = PublicInterface.TRating;
	export type EBank = PublicInterface.EBank;
	export type EStatus = keyof typeof Status;
	export type TOrderMap = Record<string, TOrder>;
	export type TDetailMap = Record<string, TOrder>;

	export interface Store {
		orders: TOrderMap;
	}

	export interface Store {}
}

const Status = {
	COMPLETE: "COMPLETE",
	ACTIVE: "ACTIVE",
	CANCEL: "CANCEL",
} as const;
