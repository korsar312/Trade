import { PublicInterface } from "../Public.interface.ts";

export namespace UserInterface {
	export interface IAdapter {
		login(data: IAuthData): Promise<void>;
		refreshMyInfo(): Promise<void>;
		setUserList(users: TUserMin[]): void;

		getAuthData(): IAuthData | undefined;

		getId(id?: string): string | undefined;
		getTgId(id?: string): string | undefined | null;
		getName(id?: string): string | undefined;
		getLogin(id?: string): string | undefined;
		getRating(id?: string): TRating | undefined | null;
		getCreatedTime(id?: string): number | undefined;
	}

	export interface IUser {
		id: string;
		nickname: string;
		role: PublicInterface.ERole;
		login: string | undefined;
		telegramId: string | null;
		createdAt: number;
		rating: TRating | null;
		like: number;
		dislike: number;
	}

	export interface IAuthData {
		login: string;
		token: string;
	}

	export type TRating = 0 | 1 | 2 | 3 | 4 | 5;
	export type TUserNeed = Pick<IUser, "id" | "nickname" | "like" | "dislike">;
	export type TUserMin = Partial<Omit<IUser, keyof TUserNeed>> & Pick<IUser, keyof TUserNeed>;
	export type TUserInfoMin = Pick<IUser, "id" | "nickname">;
	export type TUserMap = Record<string, IUser>;

	export interface Store {
		user?: IUser;
		authData?: IAuthData;
		userList: TUserMap;
	}
}
