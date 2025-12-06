import type { RouterInterface } from "../../Core/Services/ServiceRouter/Router.interface.ts";
import { redirect } from "react-router";
import { lazy } from "react";

const PageGoods = lazy(() => import("./../../../View/Page/PageGoods"));
const PageProfile = lazy(() => import("./../../../View/Page/PageProfile"));

export const Path: RouterInterface.TPath = {
	GOODS: "/",
	PROFILE: `/profile`,
	ERROR: `*`,
};

export const RoutesRole: RouterInterface.TRouterListRole = {
	GOODS: ["USER", "ADM"],
	PROFILE: ["USER", "ADM"],
};

export const Routes: RouterInterface.TRouterList = [
	{
		path: Path.GOODS,
		Component: PageGoods,
	},
	{
		path: Path.PROFILE,
		Component: PageProfile,
	},
	{
		path: Path.ERROR,
		loader: () => redirect(Path.GOODS),
	},
];
