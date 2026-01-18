export namespace PublicInterface {
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
