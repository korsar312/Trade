import type { CatalogueInterface } from "./ServiceCatalogue/Catalogue.interface.ts";
import type { SettingInterface } from "./ServiceSetting/Setting.interface.ts";
import type { AppInterface } from "./ServiceApp/App.interface.ts";

export namespace PublicInterface {
	const nameValue = {
		CARD_FILTER_NAME: {} as TFilterCard,
		CARD_SORT_NAME: {} as ESort,
	} as const satisfies Record<SettingInterface.ENameStorage, unknown>;

	export type TFilterCard = {
		name: string | null;
		bank: CatalogueInterface.EBank[];
		priseUp: number | null;
		priseDown: number | null;
		rating: TRating | null;
	};

	export type TStorageVal<T extends SettingInterface.ENameStorage> = { [K in keyof typeof nameValue]: (typeof nameValue)[K] }[T];

	const ModalValue = {
		BANK: {} as CatalogueInterface.EBank[],
		SORT: {} as ESort,
		PRICE: {} as number | null,
		RATING: {} as TRating | null,
		TYPE_ITEM: {} as CatalogueInterface.ETypeItem,
	} as const satisfies Record<AppInterface.EModalName, unknown>;

	export type TModalVal<T extends AppInterface.EModalName> = { [K in keyof typeof ModalValue]: (typeof ModalValue)[K] }[T];

	export type TRating = 0 | 1 | 2 | 3 | 4 | 5;
	export type ERole = keyof typeof PublicRole;
	export type ESort = keyof typeof PublicSort;
}

export const PublicRole = {
	ADMIN: "ADMIN",
	USER: "USER",
} as const;

export const PublicSort = {
	TO_UPPER: "TO_UPPER",
	TO_LOWER: "TO_LOWER",
} as const;
