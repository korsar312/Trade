import type { UserInterface } from "../../Services/ServiceUser/User.interface.ts";
import type { ChatInterface } from "../../Services/ServiceChat/Chat.interface.ts";

export namespace WsInterface {
	export interface IAdapter {
		connect: (data: TConnectReq) => Promise<void>;
		addEvent: <T extends EEventType>(event: T, fn: (props: TEventProps[T]) => void) => string;
		removeEvent: (event: EEventType, emitterId: string) => void;
	}

	const WsEvent = {
		NEW_DEAL_MESSAGE: {} as ChatInterface.IMessage,
	};

	export type TWsRes<T extends EEventType = EEventType> = T extends EEventType ? { name: T; params: TEventProps[T] } : never;
	export type TEventBusMap = { [T in EEventType]?: Record<string, (props: TEventProps[T]) => void> };
	export type TConnectReq = UserInterface.IAuthData;
	export type TEventProps = typeof WsEvent;

	export type EEventType = keyof typeof WsEvent;
}
