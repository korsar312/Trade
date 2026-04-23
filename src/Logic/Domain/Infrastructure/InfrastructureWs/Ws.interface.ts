import type { UserInterface } from "../../Services/ServiceUser/User.interface.ts";

export namespace WsInterface {
	export interface IAdapter {
		connect: (data: TConnectReq) => Promise<void>;
		addEvent: (callback: (params?: unknown) => void) => void;
		removeEvent: (callback: (params?: unknown) => void) => void;
	}

	export type TConnectReq = UserInterface.IAuthData;
}
