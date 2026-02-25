import type { RouterInterface as Interface } from "../Router.interface.ts";
import type { PublicInterface } from "../../Public.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";
import { createBrowserRouter, generatePath, type LoaderFunction, redirect } from "react-router";
import type { PageParam } from "../../../../Config/List/Routes.ts";

class RouterImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private Go(
		navFn: Interface.TRouterFn,
		path: Interface.TPath,
		page: Interface.EPath,
		params?: Record<string, string>,
		state?: Record<string, unknown>,
		options?: Interface.TOptions,
	) {
		navFn(generatePath("/" + path[page], params), { replace: Boolean(options?.noHistory), state });
	}

	private SetCurrentRole(store: Interface.Store, role: PublicInterface.ERole): Interface.Store {
		return { ...store, role };
	}

	private SetCurRoute(name: Interface.EPath, params: unknown): void {
		this.store = { ...this.store, currentPath: { ...this.store.currentPath, name, params } };
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
		const path = Object.entries(oldPath).reduce(
			(prev, [key, value]) => ({ ...prev, [key]: `${basePath}${value}` }),
			{} as Interface.TPath,
		);

		const sink = createParamSink();
		const roleSink = createRoleSink();

		const guardedRoutes: Interface.TRouterList = routesSpec.map((el) => {
			const page = el.path;

			const guardedLoader = makeRoleGuardLoader({
				allow: routesRole[page],
				getRole: () => roleSink.get(),
				redirectTo: (pageTo) => path[pageTo],
				goLinkHandler: (params) => {
					sink.pending = { name: page, params };
					sink.set(page, params);
				},
				inner: el.loader,
			});

			return { ...el, path: path[page], loader: guardedLoader };
		});

		const browserRouter = createBrowserRouter(guardedRoutes);

		const matches = browserRouter.state.matches;
		const lastMatches = Number(matches.at(-1)?.route.id);

		const pageName = lastMatches == null ? "ERROR" : routesSpec[lastMatches].path;

		const store: Interface.Store = {
			currentPath: { name: pageName, params: {} },
			routes: browserRouter,
			path,
			routesRole,
			role,
		};

		super(props, store);

		sink.set = (name, params) => this.SetCurRoute(name, params);
		roleSink.get = () => this.getRole();
		if (sink.pending) this.SetCurRoute(sink.pending.name, sink.pending.params);
	}

	//==============================================================================================

	public goTo(page: Interface.EPath, param?: Record<string, string>, options?: Interface.TOptions): void {
		this.Go(this.store.routes.navigate, this.store.path, page, param, undefined, options);
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

	public getCurParam<T extends Interface.EPath>(): Partial<PageParam<T>> {
		return this.store.currentPath.params as Partial<PageParam<T>>;
	}
}

export default RouterImp;

function createParamSink(): Interface.TParamSink {
	return { set: (_name: Interface.EPath, _params: unknown) => {}, pending: undefined };
}

function createRoleSink(): { get: () => PublicInterface.ERole } {
	return { get: () => "USER" };
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
	goLinkHandler: (params: unknown) => void;
	inner?: LoaderFunction;
}): LoaderFunction {
	const { allow, getRole, redirectTo, inner, goLinkHandler } = params;

	return async (args) => {
		if (allow && allow.length > 0) {
			const role = getRole();
			if (!allow.includes(role)) throw redirect(redirectTo(redirectRole(role)));
		}

		goLinkHandler(args.params);
		return inner ? inner(args) : null;
	};
}
