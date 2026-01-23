export namespace SettingInterface {
	export interface IAdapter {}

	export type EName = keyof typeof Name;

	export interface Store {}
}

const Name = {
	CARD_FILTER_NAME: "CARD_FILTER_NAME",
} as const;
