export namespace SettingInterface {
	export interface IAdapter {
		initBusiness(): Promise<boolean>;
		getLogo(): string | undefined;
		getName(): string | undefined;
		loginQr(token: string): Promise<boolean>;
		loginAdmin(login: string, password: string): Promise<boolean>;
	}

	export interface Store {
		loginInfo?: TLoginInfo;
		businessInfo?: TBusinessInfo;
	}

	export type TLoginInfo = {
		token: string;
		id: string;
	};

	export type TBusinessInfo = {
		logoPath: string;
		name: string;
	};
}
