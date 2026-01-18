export namespace SettingInterface {
	export interface IAdapter {
		initDone(): void;
		isInit(): boolean;
	}

	export interface Store {
		init: boolean;
	}
}
