import { createBrowserRouter, type LoaderFunction, type NonIndexRouteObject, type RouteObject } from "react-router";
import type { PublicInterface } from "../Public.interface.ts";

export namespace RouterInterface {
	export interface IAdapter {
		goTo(page: EPath, state?: Record<string, string>): void;
		goBack(): void;
		getRouteObj(): TRouter;
		getRole(): PublicInterface.ERole;
		setRole(role: PublicInterface.ERole): void;
		getCurPage(): EPath;
	}

	export type TPath = Record<EPath, string>;
	export type TRouterMap = Omit<NonIndexRouteObject, "path" | "loader"> & { path: EPath; loader?: LoaderFunction };
	export type TRouterMapList = TRouterMap[];
	export type TRouterList = RouteObject[];
	export type TRouterListRole = Record<EPath, PublicInterface.ERole[]>;
	export type TRouter = ReturnType<typeof createBrowserRouter>;
	export type TRouterFn = TRouter["navigate"];

	export type EPath = keyof typeof Router;

	export interface Store {
		routes: TRouter;
		routesRole: TRouterListRole;
		role: PublicInterface.ERole;
		path: TPath;
		currentPathName: EPath;
	}
}

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
