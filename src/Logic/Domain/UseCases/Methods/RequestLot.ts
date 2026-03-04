import UseCasesBase from "../UseCases.base";
import type { RestInterface } from "../../Infrastructure/InfrastructureLinks/Rest.interface.ts";

class RequestLot extends UseCasesBase {
	async invoke(params: RestInterface.TGetItemReq): Promise<void> {
		const res = await this.inf.Links.GET_ITEM(params);

		this.addLot([res]);
	}
}

export default RequestLot;
