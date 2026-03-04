import UseCasesBase from "../UseCases.base";
import type { RestInterface } from "../../Infrastructure/InfrastructureLinks/Rest.interface.ts";

class RequestOrderList extends UseCasesBase {
	async invoke(params: RestInterface.TGetOrderListReq): Promise<void> {
		const res = await this.inf.Links.GET_ORDER_LIST(params);
		res;
		//this.addLot(res);
	}
}

export default RequestOrderList;
