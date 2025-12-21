export namespace PublicInterface {
	export type TRating = 1 | 2 | 3 | 4 | 5;
	export type EBank = keyof typeof Bank;
}

const Bank = {
	ALFA: "ALFA",
	SBER: "SBER",
	TINK: "TINK",
} as const;
