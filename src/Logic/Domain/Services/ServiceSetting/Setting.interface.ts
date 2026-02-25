import { PublicInterface } from "../Public.interface.ts";

export namespace SettingInterface {
	export interface IAdapter {
		getStorage<T extends ENameStorage>(key: T): TStorageValue<T> | null;
		setStorage<T extends ENameStorage>(key: T, value: TStorageValue<T>): void;
	}

	export type TStorageValue<T extends ENameStorage> = PublicInterface.TStorageVal<T>;

	export type ENameStorage = keyof typeof Name;

	export interface Store {}
}

const Name = {
	CARD_FILTER_NAME: "CARD_FILTER_NAME",
	CARD_SORT_NAME: "CARD_SORT_NAME",
} as const;
