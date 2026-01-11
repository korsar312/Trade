import type { RouterInterface as Interface } from "../Router.interface.ts";
import type { PublicInterface } from "../../Public.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";
import { createBrowserRouter, generatePath, matchPath } from "react-router";

class RouterImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private async go(
		navFn: Interface.TRouterFn,
		path: Interface.TPath,
		page: Interface.EPath,
		params?: Record<string, string>,
		state?: Record<string, unknown>,
		replace: boolean = false,
	) {
		await navFn(generatePath("/" + path[page], params), { replace, state });
	}

	private setCurrentRole(store: Interface.Store, role: PublicInterface.ERole): Interface.Store {
		return { ...store, role };
	}

	private setCurPath(store: Interface.Store, currentPathName: Interface.EPath): Interface.Store {
		return { ...store, currentPathName };
	}

	//==============================================================================================

	constructor(
		props: IServiceProps,
		oldRoutes: Interface.TRouterMapList,
		routesRole: Interface.TRouterListRole,
		oldPath: Interface.TPath,
		role: PublicInterface.ERole,
		basePath: string,
	) {
		const path = Object.entries(oldPath).reduce(
			(prev, [key, value]) => ({ ...prev, [key]: `${basePath}${value}` }),
			{} as Interface.TPath,
		);

		const routes: Interface.TRouterList = oldRoutes.map((el) => ({ ...el, path: path[el.path] }));

		const browserRouter = createBrowserRouter(routes);
		const pageName = getPage(browserRouter.state.location.pathname, path);
		const isAccess = isAccessRoute(role, pageName, routesRole);

		if (!isAccess) {
		}

		const store: Interface.Store = {
			currentPathName: getPage(browserRouter.state.location.pathname, path),
			routes: browserRouter,
			path,
			routesRole,
			role,
		};

		super(props, store);

		browserRouter.subscribe((page) => {
			this.setInCurPage(page.location.pathname);
			this.redirect();
		});
	}

	//==============================================================================================

	goTo(page: Interface.EPath, param?: Record<string, string>): void {
		this.go(this.store.routes.navigate, this.store.path, page, param);
	}

	goBack(): void {
		window.history.back();
	}

	setInCurPage(path: string): void {
		const pageName = getPage(path, this.store.path);
		console.log(pageName);

		this.store = this.setCurPath(this.store, pageName);
	}

	getRouteObj(): Interface.TRouter {
		return this.store.routes;
	}

	getRole(): PublicInterface.ERole {
		return this.store.role;
	}

	setRole(role: PublicInterface.ERole): void {
		this.store = this.setCurrentRole(this.store, role);
	}

	isAccessPage(page: Interface.EPath): boolean {
		return isAccessRoute(this.getRole(), page, this.store.routesRole);
	}

	getCurPage(): Interface.EPath {
		return this.store.currentPathName;
	}

	redirect(): void {
		const isAccessPage = isAccessRoute(this.getRole(), this.store.currentPathName, this.store.routesRole);
		if (!isAccessPage) this.goTo(redirectRole(this.store.role));
	}
}

export default RouterImp;

function getPage(pathname: string, pathObj: Interface.TPath): Interface.EPath {
	const cleanPath = pathname.split(/[?#]/)[0];
	const entries = Object.entries(pathObj) as [Interface.EPath, string][];

	for (const [key, pattern] of entries) {
		if (pattern !== "*" && matchPath({ path: pattern, end: true }, cleanPath)) return key;
	}

	for (const [key, pattern] of entries) {
		if (pattern === "*" && matchPath({ path: pattern, end: true }, cleanPath)) return key;
	}

	return "ERROR";
}

function redirectRole(role: PublicInterface.ERole): Interface.EPath {
	switch (role) {
		default:
			return "GOODS";
	}
}

function isAccessRoute(currentRole: PublicInterface.ERole, page: Interface.EPath, routeRole: Interface.TRouterListRole): boolean {
	if (page === "ERROR") return false;
	if (!routeRole[page]) return true;

	return routeRole[page].includes(currentRole);
}
