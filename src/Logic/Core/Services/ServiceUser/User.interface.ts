import { PublicInterface } from "../Public.interface.ts";

export namespace UserInterface {
	export interface IAdapter {
		login(login: string, token: string): Promise<void>;
		refreshMyInfo(): Promise<void>;

		getId(): string;
		getName(): string;
		getLogin(): string;
		getRating(): PublicInterface.TRating | null;
		getCreatedTime(): number;
	}

	export interface IUser {
		id: string;
		nickname: string;
		login: string;
		createdAt: number;
		rating: PublicInterface.TRating | null;
	}

	export interface Store {
		user?: IUser;
	}
}
