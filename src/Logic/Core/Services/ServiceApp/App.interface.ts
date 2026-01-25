import type { PublicInterface } from "../Public.interface.ts";

export namespace AppInterface {
	export interface IAdapter {
		initDone(): void;
		isInit(): boolean;

		getModals(): TModals[];
		addModals<T extends EModalName>(type: T, successFn: (val: TModalPayloadMap<T>) => void): string;
		removeModals(id: string): void;
	}

	export type TModalPayloadMap<T extends EModalName> = PublicInterface.TModalVal<T>;

	export type TModals = { [K in EModalName]: { id: string; type: K; successFn: (val: TModalPayloadMap<K>) => void } }[EModalName];

	export type EModalName = keyof typeof ModalName;

	export interface Store {
		init: boolean;
		modals: TModals[];
	}
}

const ModalName = {
	BANK: "BANK",
	SORT: "SORT",
	PRICE: "PRICE",
	RATING: "RATING",
} as const;
