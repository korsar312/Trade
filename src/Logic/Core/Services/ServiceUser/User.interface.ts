import type { PublicInterface } from "../Public.interface.ts";

export namespace UserInterface {
	export interface IAdapter {
		login(login: string, token: string): Promise<void>;
		getId(): string;
	}

	export type TUser = {
		id: string;
		name: string;
		login: string;
		role: PublicInterface.ERole;
	};

	export interface Store {
		user?: TUser;
	}
}
