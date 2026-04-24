import UseCasesBase from "../UseCases.base";

class ConnectWs extends UseCasesBase {
	async invoke(): Promise<void> {
		const authData = this.service.User.getAuthData();
		if (!authData) return;

		await this.inf.Ws.connect(authData);

		this.inf.Ws.addEvent("NEW_DEAL_MESSAGE", this.service.Chat.addMessage);
	}
}

export default ConnectWs;
