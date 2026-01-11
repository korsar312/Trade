export namespace PublicInterface {
	export type TInfoItem = TInfoVar;
	interface IItemType {
		type: ETypeItem;
	}

	type TInfoVar = TItemTypeCard | TDetailItemTypeCard;
	interface TItemTypeCard extends IItemType {
		type: "CARD";
		bank: EBank;
	}
	export interface TDetailItemTypeCard extends TItemTypeCard {
		desc: string;
	}

	export type TRating = 0 | 1 | 2 | 3 | 4 | 5;
	export type ERole = keyof typeof RouterRole;
	export type EBank = keyof typeof Bank;
	export type ETypeItem = keyof typeof TypeItem;
}

const Bank = {
	ALFA: "ALFA",
	SBER: "SBER",
	TINK: "TINK",
} as const;

const TypeItem = {
	CARD: "CARD",
} as const;

const RouterRole = {
	ADMIN: "ADMIN",
	USER: "USER",
} as const;
