import type { RouterInterface } from "../../Core/Services/ServiceRouter/Router.interface.ts";
import { lazy } from "react";
import { redirect } from "react-router";

export const BasePage = {
	PROFILE: "profile",
	TRADE: "trade",
	ORDER: "order",
	INFO: "info",
} as const;

const createPath = (mainPage: keyof typeof BasePage, path?: string) => `${BasePage[mainPage]}${path ?? ""}`;

export const Path: RouterInterface.TPath = {
	GOODS: createPath("TRADE"),
	ITEM: createPath("TRADE", "/:id?"),

	ORDER_LIST: createPath("ORDER"),
	ORDER: createPath("ORDER", "/:id?"),

	PROFILE: createPath("PROFILE"),
	USER: createPath("PROFILE", "/:id?"),

	INFO: createPath("INFO", "/:id?"),

	ERROR: "*",
};

export const RoutesRole: RouterInterface.TRouterListRole = {
	GOODS: ["USER", "ADM"],
	ITEM: ["USER", "ADM"],
	ORDER_LIST: ["USER", "ADM"],
	ORDER: ["USER", "ADM"],
	PROFILE: ["USER", "ADM"],
	USER: ["USER", "ADM"],
	INFO: ["USER", "ADM"],
	ERROR: ["USER", "ADM"],
};

export const Routes: RouterInterface.TRouterMapList = [
	{ Component: lazy(() => import("./../../../View/Page/PageGoods")), path: "GOODS" },
	{ Component: lazy(() => import("./../../../View/Page/PageItem")), path: "ITEM" },

	{ Component: lazy(() => import("./../../../View/Page/PageProfile")), path: "PROFILE" },
	{ Component: lazy(() => import("./../../../View/Page/PageUser")), path: "USER" },

	{ Component: lazy(() => import("./../../../View/Page/PageOrderList")), path: "ORDER_LIST" },
	{ Component: lazy(() => import("./../../../View/Page/PageOrder")), path: "ORDER" },

	{ Component: lazy(() => import("./../../../View/Page/PageInfo")), path: "INFO" },
	{ loader: () => redirect(Path.GOODS), path: "ERROR" },
];
