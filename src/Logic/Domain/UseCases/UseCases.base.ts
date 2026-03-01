import type { UseCasesInterface as Interface } from "./UseCases.interface";
import type { ProjectInterface } from "../../Core/DI/Project.interface";

export interface IUseCasesProps {
	service: ProjectInterface.TServices;
	inf: ProjectInterface.TInfrastructure;
}

abstract class UseCasesBase implements Interface.TScenarioBase<unknown, unknown> {
	//==============================================================================================

	constructor(private readonly params: IUseCasesProps) {
		this.invoke = this.invoke.bind(this);
	}

	//==============================================================================================

	abstract invoke(params: unknown): unknown;

	public service = new Proxy({} as ProjectInterface.TActService, {
		get: (_, prop: keyof ProjectInterface.TModuleService) => this.params.service(prop).invoke,
	});

	public inf = new Proxy({} as ProjectInterface.TActInf, {
		get: (_, prop: keyof ProjectInterface.TModuleInf) => this.params.inf(prop).invoke,
	});
}

export default UseCasesBase;
