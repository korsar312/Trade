import type { RouterInterface } from "../../Domain/Services/ServiceRouter/Router.interface.ts";
import { lazy } from "react";
import { redirect } from "react-router";

export type PageParam<K extends keyof typeof Path> = ExtractParams<(typeof Path)[K]>;

const BasePage = {
	CREATE: "create",
	PROFILE: "profile",
	TRADE: "trade",
	DEAL: "deal",
	LISTING: "listing",
	INFO: "info",
} as const;

const ID = "/:id?" as const;
const TYPE = "/:type?" as const;
const ID_TYPE = `${ID}${TYPE}` as const;

export const RouteSpec = {
	LISTING: {
		LISTING_LIST: "",
		LISTING: ID,
	},
	CREATE: {
		CREATE_LISTING: TYPE,
	},
	TRADE: {
		ITEM_LIST: "",
		ITEM: ID_TYPE,
	},
	DEAL: {
		DEAL_LIST: "",
		DEAL: ID,
	},
	PROFILE: {
		PROFILE: "",
		USER: ID,
	},
	INFO: {
		INFO: ID,
	},
} as const satisfies Record<BaseKey, Record<string, string>>;

export const Path = {
	...buildPath(BasePage, RouteSpec),
	ERROR: "*",
} satisfies RouterInterface.TPath;

export const RoutesRole: RouterInterface.TRouterListRole = {
	LISTING_LIST: ["USER", "ADMIN"],
	LISTING: ["USER", "ADMIN"],
	ITEM_LIST: ["USER", "ADMIN"],
	ITEM: ["USER", "ADMIN"],
	DEAL_LIST: ["USER", "ADMIN"],
	DEAL: ["USER", "ADMIN"],
	PROFILE: ["USER", "ADMIN"],
	USER: ["USER", "ADMIN"],
	INFO: ["USER", "ADMIN"],
	CREATE_LISTING: ["USER", "ADMIN"],
	ERROR: ["USER", "ADMIN"],
};

export const Routes: RouterInterface.TRouterMapList = [
	{ Component: lazy(() => import("./../../../View/Page/PageListingList")), path: "LISTING_LIST" },
	{ Component: lazy(() => import("./../../../View/Page/PageListing")), path: "LISTING" },
	{ Component: lazy(() => import("./../../../View/Page/PageItemList")), path: "ITEM_LIST" },
	{ Component: lazy(() => import("./../../../View/Page/PageItem")), path: "ITEM" },
	{ Component: lazy(() => import("./../../../View/Page/PageProfile")), path: "PROFILE" },
	{ Component: lazy(() => import("./../../../View/Page/PageUser")), path: "USER" },
	{ Component: lazy(() => import("./../../../View/Page/PageDealList")), path: "DEAL_LIST" },
	{ Component: lazy(() => import("./../../../View/Page/PageDeal")), path: "DEAL" },
	{ Component: lazy(() => import("./../../../View/Page/PageInfo")), path: "INFO" },
	{ Component: lazy(() => import("./../../../View/Page/PageCreateListing")), path: "CREATE_LISTING" },
	{ loader: () => redirect(Path.ITEM_LIST), path: "ERROR" },
];

//=================================================

function buildPath<Spec extends Record<BaseKey, Record<string, string>>, Base extends Record<BaseKey, string>>(base: Base, spec: Spec) {
	const out: Record<string, string> = {};

	(Object.keys(spec) as Array<keyof Spec & BaseKey>).forEach((b) => {
		const group = spec[b];
		(Object.keys(group) as Array<keyof typeof group & string>).forEach((k) => {
			out[k] = `${base[b]}${group[k]}`;
		});
	});

	return out as BuiltFromSpec<Spec, Base>;
}

type BaseKey = keyof typeof BasePage;
type UnionToIntersection<U> = (U extends unknown ? (x: U) => void : never) extends (x: infer I) => void ? I : never;
type Simplify<T> = { [K in keyof T]: T[K] } & {};
type BuiltFromSpec<Spec extends Record<BaseKey, Record<string, string>>, Base extends Record<BaseKey, string>> = Simplify<
	UnionToIntersection<{ [B in keyof Spec & BaseKey]: { [K in keyof Spec[B] & string]: `${Base[B]}${Spec[B][K]}` } }[keyof Spec & BaseKey]>
>;

type ParamToken<S extends string> = S extends `${infer Name}?` ? { [K in Name]?: string } : { [K in S]: string };
type ExtractParams<PathStr extends string> = PathStr extends `${string}:${infer P}/${infer Rest}`
	? ParamToken<P> & ExtractParams<`/${Rest}`>
	: PathStr extends `${string}:${infer P}`
		? ParamToken<P>
		: {};
