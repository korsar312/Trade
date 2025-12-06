import type { RouterInterface } from "../../Core/Services/ServiceRouter/Router.interface.ts";
import { redirect } from "react-router";
import { lazy } from "react";

const PageChoice = lazy(() => import("./../../../View/Page/Pub/PageChoice"));
const AdmLogin = lazy(() => import("./../../../View/Page/Adm/AdmLogin"));
const CassLogin = lazy(() => import("./../../../View/Page/Cass/CassLogin"));
const CassChoiceMenu = lazy(() => import("./../../../View/Page/Cass/CassChoiceMenu"));
const CassMenu = lazy(() => import("./../../../View/Page/Cass/CassMenu"));

const cassPath = "/cass/";
const admPath = "/admin/";

export const Path: RouterInterface.TPath = {
	HOME: "/",
	OTHER: `*`,

	ADM_LOGIN: `${admPath}login`,

	CASS_LOGIN: `${cassPath}login`,
	CASS_CHOICE_MENU: `${cassPath}choice-field`,
	CASS_MENU: `${cassPath}menu/:openBasket?`,
};

export const RoutesRole: RouterInterface.TRouterListRole = {
	CASS_CHOICE_MENU: ["CASS"],
	CASS_MENU: ["CASS"],
};

export const Routes: RouterInterface.TRouterList = [
	{
		path: Path.ADM_LOGIN,
		Component: AdmLogin,
	},
	{
		path: Path.CASS_LOGIN,
		Component: CassLogin,
	},
	{
		path: Path.HOME,
		Component: PageChoice,
	},
	{
		path: Path.OTHER,
		loader: () => redirect(Path.HOME),
	},
	{
		path: Path.CASS_CHOICE_MENU,
		Component: CassChoiceMenu,
	},
	{
		path: Path.CASS_MENU,
		Component: CassMenu,
	},
];
