export namespace UserInterface {
	export interface IAdapter {
		login(login: string, token: string): Promise<TUser>;
		getId(): string;
	}

	export type TUser = {
		id: string;
	};

	export interface Store {
		user?: TUser;
	}
}
