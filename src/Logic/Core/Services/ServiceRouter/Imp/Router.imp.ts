import type { RouterInterface as Interface } from "../Router.interface.ts";
import type { PublicInterface } from "../../Public.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";
import { createBrowserRouter, generatePath, type LoaderFunction, matchPath, redirect } from "react-router";

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

	private setInCurPage(path: Interface.EPath): void {
		this.store = this.setCurPath(this.store, path);
	}

	//==============================================================================================

	constructor(
		props: IServiceProps,
		routesSpec: Interface.TRouterMapList,
		routesRole: Interface.TRouterListRole,
		oldPath: Interface.TPath,
		role: PublicInterface.ERole,
		basePath: string,
	) {
		let getRoleFn: () => PublicInterface.ERole = () => role;
		let setCurPage: (page: Interface.EPath) => void = () => undefined;

		const path = Object.entries(oldPath).reduce(
			(prev, [key, value]) => ({ ...prev, [key]: `${basePath}${value}` }),
			{} as Interface.TPath,
		);

		const guardedRoutes: Interface.TRouterList = routesSpec.map((el) => {
			const page = el.path;

			const guardedLoader = makeRoleGuardLoader({
				allow: routesRole[page],
				getRole: () => getRoleFn(),
				redirectTo: (pageTo) => path[pageTo],
				goLinkHandler: () => setCurPage(page),
				inner: el.loader,
			});

			return {
				...el,
				path: path[page],
				loader: guardedLoader,
			};
		});

		const browserRouter = createBrowserRouter(guardedRoutes);
		const pageName = getPage(browserRouter.state.location.pathname, path);

		const store: Interface.Store = {
			currentPathName: pageName,
			routes: browserRouter,
			path,
			routesRole,
			role,
		};

		super(props, store);

		getRoleFn = () => this.getRole();
		setCurPage = (page: Interface.EPath) => this.setInCurPage(page);
	}

	//==============================================================================================

	goTo(page: Interface.EPath, param?: Record<string, string>): void {
		this.go(this.store.routes.navigate, this.store.path, page, param);
	}

	goBack(): void {
		window.history.back();
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

	getCurPage(): Interface.EPath {
		return this.store.currentPathName;
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

function makeRoleGuardLoader(params: {
	allow: readonly PublicInterface.ERole[] | undefined;
	getRole: () => PublicInterface.ERole;
	redirectTo: (page: Interface.EPath) => string;
	goLinkHandler: () => void;
	inner?: LoaderFunction;
}): LoaderFunction {
	const { allow, getRole, redirectTo, inner, goLinkHandler } = params;

	return async (args) => {
		if (allow && allow.length > 0) {
			const role = getRole();
			if (!allow.includes(role)) throw redirect(redirectTo(redirectRole(role)));
		}

		goLinkHandler();
		return inner ? inner(args) : null;
	};
}
