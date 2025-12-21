export namespace UserInterface {
	export interface IAdapter {
		login(token: string): Promise<TUser>;
		getId(): string;
	}

	export type TUser = {
		id: string;
	};

	export interface Store {
		user?: TUser;
	}
}
