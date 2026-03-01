import type { UseCasesInterface as Interface } from "../UseCases.interface";
import UseCasesBase from "../UseCases.base";

class CreateLot extends UseCasesBase {
	async invoke(params: Interface.TCreateLotReq): Interface.TCreateLotRes {
		return this.inf.Links.CREATE_LISTING(params);
	}
}

export default CreateLot;
