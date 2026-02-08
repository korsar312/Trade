import type { UserInterface as Interface } from "../User.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";

class UserImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private setUser(store: Interface.Store, user: Interface.IUser): Interface.Store {
		return { ...store, user };
	}

	//==============================================================================================

	constructor(props: IServiceProps) {
		const store: Interface.Store = {};

		super(props, store);
	}

	//==============================================================================================

	public async login(login: string, token: string) {
		const res = await this.API.Links.LOGIN(login, token);
		this.store = this.setUser(this.store, res);
	}

	public async refreshMyInfo() {
		const res = await this.API.Links.GET_MY_ACC();
		this.store = this.setUser(this.store, res);
	}

	public getId() {
		if (!this.store.user) throw new Error("no auth");
		return this.store.user.id;
	}

	public getName() {
		if (!this.store.user) throw new Error("no auth");
		return this.store.user.nickname;
	}

	public getLogin() {
		if (!this.store.user) throw new Error("no auth");
		return this.store.user.login;
	}

	public getCreatedTime() {
		if (!this.store.user) throw new Error("no auth");
		return this.store.user.createdAt;
	}
}

export default UserImp;
