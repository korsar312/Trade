import { PublicInterface } from "../Public.interface.ts";

export namespace UserInterface {
	export interface IAdapter {
		login(login: string, token: string): Promise<void>;
		refreshMyInfo(): Promise<void>;

		getId(): string;
		getTgId(): string | null;
		getName(): string;
		getLogin(): string;
		getRating(): PublicInterface.TRating | null;
		getCreatedTime(): number;
	}

	export interface IUser {
		id: string;
		nickname: string;
		role: PublicInterface.ERole;
		login: string;
		telegramId: string | null;
		createdAt: number;
		rating: PublicInterface.TRating | null;
	}

	export interface Store {
		user?: IUser;
	}
}
