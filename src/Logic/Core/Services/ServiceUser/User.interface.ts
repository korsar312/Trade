export namespace UserInterface {
	export interface IAdapter {
		initUser(): Promise<void>;
		getId(): string;
	}

	export type TUser = {
		id: string;
	};

	export interface Store {
		user?: TUser;
	}
}
