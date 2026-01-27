import { createBrowserRouter, type LoaderFunction, type NonIndexRouteObject, type RouteObject } from "react-router";
import type { PublicInterface } from "../Public.interface.ts";
import type { PageParam } from "../../../Config/List/Routes.ts";

export namespace RouterInterface {
	export interface IAdapter {
		goTo(page: EPath, state?: Record<string, string>, options?: TOptions): void;
		goBack(): void;
		getRouteObj(): TRouter;
		getRole(): PublicInterface.ERole;
		setRole(role: PublicInterface.ERole): void;
		getCurPage(): EPath;
		getCurParam<T extends EPath>(): Partial<PageParam<T>>;
	}

	export type TPath = Record<EPath, string>;
	export type TRouterMap = Omit<NonIndexRouteObject, "path" | "loader"> & { path: EPath; loader?: LoaderFunction };
	export type TRouterMapList = TRouterMap[];
	export type TRouterList = RouteObject[];
	export type TRouterListRole = Record<EPath, PublicInterface.ERole[]>;
	export type TRouter = ReturnType<typeof createBrowserRouter>;
	export type TRouterFn = TRouter["navigate"];
	export type TCurPage = { name: EPath; params: unknown };

	export type EPath = keyof typeof Router;

	export type TParamSink = {
		set: (name: EPath, params: unknown) => void;
		pending?: { name: EPath; params: unknown };
	};

	export type TOptions = {
		noHistory?: boolean;
	};

	export interface Store {
		routes: TRouter;
		routesRole: TRouterListRole;
		role: PublicInterface.ERole;
		path: TPath;
		currentPath: TCurPage;
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
	CREATE_LISTING: "CREATE_LISTING",
	ERROR: "ERROR",
} as const;
