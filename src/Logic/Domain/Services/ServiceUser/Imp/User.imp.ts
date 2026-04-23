import type { UserInterface as Interface } from "../User.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";

class UserImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private SetUser(store: Interface.Store, user: Interface.IUser): Interface.Store {
		return { ...store, user };
	}

	private SetAuthData(store: Interface.Store, authData: Interface.IAuthData): Interface.Store {
		return { ...store, authData };
	}

	private SetUserList(store: Interface.Store, userList: Interface.TUserMap): Interface.Store {
		return { ...store, userList };
	}

	private ArrToMap(goods: Interface.TUserMin[]): Interface.TUserMap {
		return goods.reduce((prev, cur) => {
			prev[cur.id] = cur as Interface.IUser;
			return prev;
		}, {} as Interface.TUserMap);
	}

	private GetUser(id?: string): Interface.IUser | undefined {
		return id == null ? this.store.user : this.store.userList[id];
	}

	//==============================================================================================

	constructor(props: IServiceProps) {
		const store: Interface.Store = {
			userList: {},
		};

		super(props, store);
	}

	//==============================================================================================

	public async login(data: Interface.IAuthData) {
		const res = await this.API.Links.LOGIN(data);
		const authStore = this.SetAuthData(this.store, data);

		this.store = this.SetUser(authStore, res);
	}

	public async refreshMyInfo() {
		const res = await this.API.Links.GET_MY_ACC();
		this.store = this.SetUser(this.store, res);
	}

	public setUserList(users: Interface.TUserMin[]): void {
		const normUsers = this.ArrToMap(users);
		this.store = this.SetUserList(this.store, normUsers);
	}

	public getAuthData() {
		return this.store.authData;
	}

	public getId(id?: string) {
		return this.GetUser(id)?.id;
	}

	public getTgId(id?: string) {
		return this.GetUser(id)?.telegramId;
	}

	public getName(id?: string) {
		return this.GetUser(id)?.nickname;
	}

	public getLogin(id?: string) {
		return this.GetUser(id)?.login;
	}

	public getRating(id?: string) {
		const item = this.GetUser(id);
		if (!item) return null;

		const total = item.like + item.dislike;

		return Math.round((item.like / total) * 5) as Interface.TRating;
	}

	public getCreatedTime(id?: string) {
		return this.GetUser(id)?.createdAt;
	}
}

export default UserImp;
