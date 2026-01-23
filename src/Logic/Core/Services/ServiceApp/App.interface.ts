import type { CatalogueInterface } from "../ServiceCatalogue/Catalogue.interface.ts";

export namespace AppInterface {
	export interface IAdapter {
		initDone(): void;
		isInit(): boolean;

		getModals(): TModals[];
		addModals<T extends EModalName>(type: T, successFn: (val: TModalPayloadMap[T]) => void): string;
		removeModals(id: string): void;
	}

	const ModalPayload = {
		BANK: null as unknown as CatalogueInterface.EBank[],
	} as const satisfies Record<EModalName, unknown>;

	export type TModalPayloadMap = {
		[K in keyof typeof ModalPayload]: (typeof ModalPayload)[K];
	};

	export type TModals<T extends EModalName = EModalName> = {
		id: string;
		type: T;
		successFn: (val: TModalPayloadMap[T]) => void;
	};

	export type EModalName = keyof typeof ModalName;

	export interface Store {
		init: boolean;
		modals: TModals[];
	}
}

const ModalName = {
	BANK: "BANK",
} as const;
