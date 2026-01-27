export namespace MessageInterface {
	export interface IAdapter {
		getWord(text: EWordAll, param?: TWordParam): string;
	}

	export interface Store {
		dictionary: TDictionary;
		lang: ELang;
	}

	export type EWord = keyof typeof Word;
	export type ELang = keyof typeof Lang;
	export type ECase = keyof typeof Case;

	type TMapWord = Record<ELang, string>;
	type EAllWord<T extends string> = EWord | T;

	export type TDictionary<T extends string = string> = Record<EAllWord<T>, TMapWord>;
	export type EWordAll = EWord | string | number | undefined;

	export type TWordParam = { arrReplace?: EWordAll[]; case?: ECase };
}

const Word = {
	LISTING_CREATE: "LISTING_CREATE",
	SELECT_RATING_QTY: "SELECT_RATING_QTY",
	SELECT_LISTING_TYPE: "SELECT_LISTING_TYPE",
	SELECT_SORT_TYPE: "SELECT_SORT_TYPE",
	ENTER_DES_PRICE: "ENTER_DES_PRICE",
	BANK_SELECTOR: "BANK_SELECTOR",
	APPLY: "APPLY",
	PRODUCTS: "PRODUCTS",
	PRODUCT: "PRODUCT",
	PROFILE: "PROFILE",
	USER: "USER",
	ORDERS: "ORDERS",
	ORDER: "ORDER",
	INFO: "INFO",
	BUY: "BUY",
	BACK: "BACK",
	RATING: "RATING",
	PRISE_UP: "PRISE_UP",
	PRISE_DOWN: "PRISE_DOWN",
	BANK: "BANK",
	SORT: "SORT",
	CATALOG: "CATALOG",
	ERROR: "ERROR",
	DAY_US_USDT: "DAY_US_USDT",
	LOGIN_TO_ADMIN_MENU: "LOGIN_TO_ADMIN_MENU",
	LOGIN_TO_CASH_DESK: "LOGIN_TO_CASH_DESK",
	MENU: "MENU",
	PAYMENT: "PAYMENT",
	CART: "CART",
	GAMES: "GAMES",
	CALL_WAITER: "CALL_WAITER",
	LOGIN: "LOGIN",
	PASSWORD: "PASSWORD",
	CASS: "CASS",
	ENTER: "ENTER",
	ADMINISTRATION: "ADMINISTRATION",
	TABLE_NUMBER: "TABLE_NUMBER",
	TOKEN: "TOKEN",
	QR_TO_SMALL: "QR_TO_SMALL",
	CLOSE: "CLOSE",
	SEARCHING: "SEARCHING",
} as const;

const Lang = {
	RU: "RU",
} as const;

const Case = {
	CAPITAL: "CAPITAL",
	SMALL: "SMALL",
} as const;
