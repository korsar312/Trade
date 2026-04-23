import type { WsInterface as Interface } from "../Ws.interface.ts";

class WsImp implements Interface.IAdapter {
	private wsConnect: WebSocket | null = null;
	private emitter: Array<(params?: unknown) => void> = [];

	//==============================================================================================

	constructor(
		private readonly port: number,
		private readonly address: string,
	) {}

	//==============================================================================================

	public connect(authData: Interface.TConnectReq): Promise<void> {
		return new Promise((resolve, reject) => {
			const url = `ws://${this.address}:${this.port}?login=${authData.login}&token=${authData.token}`;
			this.wsConnect = new WebSocket(url);

			this.wsConnect.onopen = () => resolve();
			this.wsConnect.onerror = (e) => reject(e);

			this.wsConnect.onmessage = (e) => {
				const res = JSON.parse(String(e.data));

				this.emitter.forEach((el) => el(res));
			};
		});
	}

	public addEvent(callback: (params?: unknown) => void) {
		this.emitter.push(callback);
	}

	public removeEvent(callback: (params?: unknown) => void) {
		this.emitter = this.emitter.filter((fn) => fn !== callback);
	}
}

export default WsImp;
