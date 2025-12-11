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
	export type TRouterMap = Pick<RouteObject, "Component" | "loader"> & { path: EPath };
	export type TRouterMapList = TRouterMap[];
	export type TRouterList = RouteObject[];
	export type TRouterListRole = Record<EPath, ERole[]>;
	export type TRouter = ReturnType<typeof createBrowserRouter>;
	export type TRouterFn = TRouter["navigate"];
}

const RouterRole = {
	ADM: "ADM",
	USER: "USER",
} as const;

const Router = {
	GOODS: "GOODS",
	ITEM: "ITEM",
	PROFILE: "PROFILE",
	USER: "USER",
	ORDER_LIST: "ORDER_LIST",
	ORDER: "ORDER",
	INFO: "INFO",
	ERROR: "ERROR",
} as const;
