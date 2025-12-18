import type { UserInterface as Interface } from "../User.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";

class UserImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private setUser(store: Interface.Store, user: Interface.TUser): Interface.Store {
		return { ...store, user };
	}

	//==============================================================================================

	constructor(props: IServiceProps) {
		const store: Interface.Store = {};

		super(props, store);
	}

	//==============================================================================================

	public async initUser() {
		const res = await this.API.Links.GET_USER();
		this.store = this.setUser(this.store, res);
	}

	public getId() {
		if (!this.store.user) throw new Error("no auth");
		return this.store.user.id;
	}
}

export default UserImp;
