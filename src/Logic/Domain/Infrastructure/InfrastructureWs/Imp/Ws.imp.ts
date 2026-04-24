import type { WsInterface as Interface } from "../Ws.interface.ts";

class WsImp implements Interface.IAdapter {
	private WsConnect: WebSocket | null = null;
	private Emitter: Interface.TEventBusMap = {};

	private GetEvent<T extends Interface.EEventType>(event: T): Record<string, (props: Interface.TEventProps[T]) => void> {
		const emitters: Record<string, (props: Interface.TEventProps[T]) => void> = this.Emitter[event] ?? {};
		this.Emitter[event] = emitters;

		return emitters;
	}

	private Dispatch<T extends Interface.EEventType>(res: Extract<Interface.TWsRes, { name: T }>): void {
		const handlers = this.Emitter[res.name];
		if (!handlers) return;

		for (const fn of Object.values(handlers)) {
			(fn as (p: Interface.TEventProps[T]) => void)(res.params);
		}
	}

	private WsClose = (): void => {
		this.WsConnect = null;
	};

	private WsMessage = (e: MessageEvent): void => {
		let res: Interface.TWsRes | null = null;

		try {
			res = JSON.parse(typeof e.data === "string" ? e.data : String(e.data));
		} catch {}

		if (res) this.Dispatch(res);
	};

	private WsOpen = (resolve: () => void) => (): void => resolve();

	private WsError =
		(reject: (e: Event) => void) =>
		(e: Event): void =>
			reject(e);

	//==============================================================================================

	constructor(
		private readonly port: number,
		private readonly address: string,
	) {}

	//==============================================================================================

	public connect(authData: Interface.TConnectReq): Promise<void> {
		return new Promise((resolve, reject) => {
			const url = `ws://${this.address}:${this.port}?login=${authData.login}&token=${authData.token}`;
			this.WsConnect = new WebSocket(url);

			this.WsConnect.onopen = this.WsOpen(resolve);
			this.WsConnect.onerror = this.WsError(reject);
			this.WsConnect.onclose = this.WsClose;
			this.WsConnect.onmessage = this.WsMessage;
		});
	}

	public addEvent<T extends Interface.EEventType>(event: T, fn: (props: Interface.TEventProps[T]) => void): string {
		const id = crypto.randomUUID();
		this.GetEvent(event)[id] = fn;

		return id;
	}

	public removeEvent(event: Interface.EEventType, emitterId: string): void {
		const { [emitterId]: _, ...rest } = this.Emitter[event] ?? {};

		if (Object.keys(rest).length) this.Emitter[event] = rest;
		else delete this.Emitter[event];
	}
}

export default WsImp;
