export namespace SettingInterface {
	export interface IAdapter {
		getLogo(): string | undefined;
		getName(): string | undefined;
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
