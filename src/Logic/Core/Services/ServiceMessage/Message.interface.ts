import type { CSSObject } from "@emotion/react";

export namespace MessageInterface {
	export interface IAdapter {
		getWord(text: EWordAll, param?: TWordParamBase & { arrStyle?: undefined }): string;
		getWord(text: EWordAll, param: TWordParamBase & { arrStyle?: CSSObject[] }): TWordChunk[];
	}

	type TMapWord = Record<ELang, string>;
	type EAllWord<T extends string> = EWord | T;

	export type TDictionary<T extends string = string> = Record<EAllWord<T>, TMapWord>;

	export type TWordParamBase = { arrReplace?: EWordAll[]; case?: ECase };
	export type TWordParam = (TWordParamBase & { arrStyle?: undefined }) | (TWordParamBase & { arrStyle: CSSObject[] });
	export type TWordChunk = { text: string; style?: CSSObject };

	export type EWordAll = EWord | string | number | undefined;
	export type EWord = keyof typeof Word;
	export type ELang = keyof typeof Lang;
	export type ECase = keyof typeof Case;

	export interface Store {
		dictionary: TDictionary;
		lang: ELang;
	}
}

const Word = {
	NO_RATING: "NO_RATING",
	LINKED_WALLET_BALANCE: "LINKED_WALLET_BALANCE",
	LINK: "LINK",
	LINKED_WALLET_ADDRESS: "LINKED_WALLET_ADDRESS",
	BALANCE: "BALANCE",
	YOUR_BALANCE: "YOUR_BALANCE",
	YOUR_PROFILE: "YOUR_PROFILE",
	WITHDRAW: "WITHDRAW",
	DEPOSIT: "DEPOSIT",
	CREATED: "CREATED",
	ID: "ID",
	NAME: "NAME",
	MY_SALES: "MY_SALES",
	MY_PURCHASES: "MY_PURCHASES",
	ACTIVE: "ACTIVE",
	COMPLETED: "COMPLETED",
	TITLE: "TITLE",
	PRICE: "PRICE",
	SELLER: "SELLER",
	DESCRIPTION: "DESCRIPTION",
	FILL_FIELD: "FILL_FIELD",
	SEARCH_BANK: "SEARCH_BANK",
	CHOOSE_BANK: "CHOOSE_BANK",
	LISTING_PRICE: "LISTING_PRICE",
	MUST_GREAT_ZERO: "MUST_GREAT_ZERO",
	CANCEL: "CANCEL",
	I_CONFIRM: "I_CONFIRM",
	CONFIRM_ACTION: "CONFIRM_ACTION",
	CREATE_LISTING: "CREATE_LISTING",
	CARD_HOLDER_AGE: "CARD_HOLDER_AGE",
	CARD_HOLDER_FULL_NAME: "CARD_HOLDER_FULL_NAME",
	TEXT_AFTER_PAYMENT: "TEXT_AFTER_PAYMENT",
	LISTING_MAIN_DATA: "LISTING_MAIN_DATA",
	LISTING_DESC: "LISTING_DESC",
	LISTING_NAME: "LISTING_NAME",
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
