export namespace UserInterface {
	export interface IAdapter {
		login(login: string, token: string): Promise<void>;
		refreshMyInfo(): Promise<void>;

		getId(): string;
		getName(): string;
		getLogin(): string;
		getCreatedTime(): number;
	}

	export interface IUser {
		id: string;
		nickname: string;
		login: string;
		createdAt: number;
	}

	export interface Store {
		user?: IUser;
	}
}
