import type { UseCasesInterface as Interface } from "./UseCases.interface";
import type { ProjectInterface } from "../../Core/DI/Project.interface";
import RequestCatalog from "./Methods/RequestCatalog.ts";
import RequestLot from "./Methods/RequestLot.ts";
import CreateLot from "./Methods/CreateLot.ts";

class UseCases implements Interface.IAdapter {
	public scenarioList: Interface.TScenarioList;

	constructor(service: ProjectInterface.TServices, inf: ProjectInterface.TInfrastructure) {
		this.scenarioList = {
			requestCatalog: new RequestCatalog({ service, inf }),
			requestLot: new RequestLot({ service, inf }),
			createLot: new CreateLot({ service, inf }),
		};
	}
}

export default UseCases;
