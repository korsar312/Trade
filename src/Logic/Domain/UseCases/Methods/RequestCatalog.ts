import UseCasesBase from "../UseCases.base";
import type { RestInterface } from "../../Infrastructure/InfrastructureLinks/Rest.interface.ts";

class RequestCatalog extends UseCasesBase {
	async invoke(params: RestInterface.TGetItemsReq): Promise<void> {
		const res = await this.inf.Links.GET_ITEMS(params);

		this.addLot(res);
	}
}

export default RequestCatalog;
