export namespace PublicInterface {
	export type TItem = {
		name: string;
		desc: string;
		image: string;
		price: number;
		seller: TActor;
		buyer: TActor;
		bank: EBank;
	};

	export type TActor = {
		id: string;
		name: string;
		rating: TRating;
	};

	export type TRating = 1 | 2 | 3 | 4 | 5;
	export type EBank = keyof typeof Bank;
}

const Bank = {
	ALFA: "ALFA",
	SBER: "SBER",
	TINK: "TINK",
} as const;
