import UseCasesBase from "../UseCases.base";
import type { RestInterface } from "../../Infrastructure/InfrastructureLinks/Rest.interface.ts";

class CreateLot extends UseCasesBase {
	async invoke(params: RestInterface.TCreateListingReq): Promise<string> {
		return this.inf.Links.CREATE_LISTING(params);
	}
}

export default CreateLot;
