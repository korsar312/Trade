import type { RouterInterface as Interface } from "../Router.interface.ts";
import type { PublicInterface } from "../../Public.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";
import { createBrowserRouter, generatePath, type LoaderFunction, matchPath, redirect } from "react-router";
import type { PageParam } from "../../../../Config/List/Routes.ts";

class RouterImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private Go(
		navFn: Interface.TRouterFn,
		path: Interface.TPath,
		page: Interface.EPath,
		params?: Record<string, string>,
		state?: Record<string, unknown>,
		replace: boolean = false,
	) {
		navFn(generatePath("/" + path[page], params), { replace, state });
	}

	private SetCurrentRole(store: Interface.Store, role: PublicInterface.ERole): Interface.Store {
		return { ...store, role };
	}

	private SetCurParam(store: Interface.Store, currentPathParam: unknown): Interface.Store {
		return { ...store, currentPath: { ...store.currentPath, params: currentPathParam } };
	}

	private SetCurPath(store: Interface.Store, currentPathName: Interface.EPath): Interface.Store {
		return { ...store, currentPath: { ...store.currentPath, name: currentPathName } };
	}

	private SetInCurPage(path: Interface.EPath): void {
		this.store = this.SetCurPath(this.store, path);
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
			currentPath: { name: pageName, params: {} },
			routes: browserRouter,
			path,
			routesRole,
			role,
		};

		super(props, store);

		getRoleFn = () => this.getRole();
		setCurPage = (page: Interface.EPath) => this.SetInCurPage(page);
	}

	//==============================================================================================

	public goTo(page: Interface.EPath, param?: Record<string, string>): void {
		this.Go(this.store.routes.navigate, this.store.path, page, param);
		this.store = this.SetCurParam(this.store, param);
	}

	public goBack(): void {
		window.history.back();
	}

	public getRouteObj(): Interface.TRouter {
		return this.store.routes;
	}

	public getRole(): PublicInterface.ERole {
		return this.store.role;
	}

	public setRole(role: PublicInterface.ERole): void {
		this.store = this.SetCurrentRole(this.store, role);
	}

	public getCurPage(): Interface.EPath {
		return this.store.currentPath.name;
	}

	public getCurParam<T extends Interface.EPath>(): PageParam<T> {
		return this.store.currentPath.params as PageParam<T>;
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
