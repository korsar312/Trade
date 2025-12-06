import { createBrowserRouter, type RouteObject } from "react-router";

export namespace RouterInterface {
	export interface IAdapter {
		goTo(page: EPath, state?: Record<string, string>): void;
		goBack(): void;
		getRouteObj(): TRouter;
		getRole(): ERole;
		setRole(role: ERole): void;
		isAccessPage(page: EPath): boolean;
		getCurPage(): EPath;
		redirect(): void;
	}

	export interface Store {
		routes: TRouter;
		routesRole: TRouterListRole;
		role: ERole;
		path: TPath;
		currentPathName: EPath;
	}

	export type EPath = keyof typeof Router;
	export type ERole = keyof typeof RouterRole;
	export type TPath = Record<EPath, string>;
	export type TRouterList = RouteObject[];
	export type TRouterListRole = Partial<Record<EPath, ERole[]>>;
	export type TRouter = ReturnType<typeof createBrowserRouter>;
	export type TRouterFn = TRouter["navigate"];
}

function prefixArray<const T extends readonly string[], const P extends string>(arr: T, prefix: P) {
	return arr.map((k) => `${prefix}${k}`) as {
		[K in T[number]]: `${P}${K}`;
	}[T[number]][];
}

const rawCass = ["LOGIN", "CHOICE_MENU", "MENU"] as const;
const CassRoutes = prefixArray(rawCass, "CASS_");

const rawAdm = ["LOGIN"] as const;
const AdmRoutes = prefixArray(rawAdm, "ADM_");

const rawPub = ["HOME", "OTHER"] as const;
const PubRoutes = prefixArray(rawPub, "");

type TCassPath = (typeof CassRoutes)[number];
type TAdnPath = (typeof AdmRoutes)[number];
type TPubPath = (typeof PubRoutes)[number];

type AllPath = TCassPath | TAdnPath | TPubPath;

const Router = Object.fromEntries(CassRoutes.map((k) => [k, ""])) as {
	[K in AllPath]: string;
};

const RouterRole = {
	PUB: "PUB",
	ADM: "ADM",
	CASS: "CASS",
} as const;
