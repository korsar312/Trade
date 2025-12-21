import type { PublicInterface } from "../Public.interface.ts";

export namespace OrderInterface {
	export interface IAdapter {
		initOrders(): Promise<void>;
		getOrderIdList(): string[];

		isActiveOrder(itemId: string): boolean;
		isSellUser(itemId: string, userId: string): boolean;
		isBuyUser(itemId: string, userId: string): boolean;

		getName(itemId: string): string;
		getDesc(itemId: string): string;
		getBank(itemId: string): EBank;
		getPrice(itemId: string): number;
		getRating(itemId: string): TRating;
		getImage(itemId: string): string;
		getSellerName(itemId: string): string;
		getSellerId(itemId: string): string;
	}

	export type TOrder = {
		name: string;
		image: string;
		price: number;
		seller: TActor;
		bank: EBank;
	};

	export type TOrderDetail = TOrder & {
		chat: string[];
		desc: string;
		dateStart: string;
		buyer: TActor;
		deliveryStatus: string;
	};

	export type TActor = {
		id: string;
		name: string;
		rating: TRating;
	};

	export type TRating = PublicInterface.TRating;
	export type EBank = PublicInterface.EBank;
	export type EStatus = keyof typeof Status;
	export type TOrderMap = Record<string, TOrder>;
	export type TDetailMap = Record<string, TOrderDetail>;

	export interface Store {
		orders: TOrderMap;
		ordersDetail: TDetailMap;
	}

	export interface Store {}
}

const Status = {
	COMPLETE: "COMPLETE",
	ACTIVE: "ACTIVE",
	CANCEL: "CANCEL",
} as const;
