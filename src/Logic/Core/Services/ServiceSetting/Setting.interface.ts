export namespace SettingInterface {
	export interface IAdapter {
		setInit(isDone: boolean): void;
		getInit(): boolean;
	}

	export interface Store {
		init: boolean;
	}
}
