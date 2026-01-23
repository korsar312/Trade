import type { CatalogueInterface } from "./ServiceCatalogue/Catalogue.interface.ts";
import type { SettingInterface } from "./ServiceSetting/Setting.interface.ts";

export namespace PublicInterface {
	const nameValue = {
		CARD_FILTER_NAME: {} as TFilterCard,
	} as const satisfies Record<SettingInterface.ENameStorage, unknown>;

	export type TFilterCard = {
		name: string | null;
		bank: CatalogueInterface.EBank[];
		priseUp: number | null;
		priseDown: number | null;
	};

	export type TStorageVal<T extends SettingInterface.ENameStorage> = { [K in keyof typeof nameValue]: (typeof nameValue)[K] }[T];

	export type TRating = 0 | 1 | 2 | 3 | 4 | 5;
	export type ERole = keyof typeof Role;
	export type ESort = keyof typeof Sort;
}

const Role = {
	ADMIN: "ADMIN",
	USER: "USER",
} as const;

const Sort = {
	TO_UPPER: "TO_UPPER",
	TO_LOWER: "TO_LOWER",
} as const;
