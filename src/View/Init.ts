import type { ProjectInterface } from "../Logic/Core/DI/Project.interface.ts";
import service from "../Logic/Core/DI/Create.services.ts";
import useCases from "../Logic/Core/DI/Create.useCases.ts";
import ComponentConstructor from "./CreateComponent.tsx";
import type { UseCasesInterface } from "../Logic/Domain/UseCases/UseCases.interface.ts";

type TPublic = { [K in keyof UseCasesInterface.TScenarioList]: UseCasesInterface.TScenarioList[K]["invoke"] };

export const Pub = new Proxy({} as TPublic, {
	get: (_target, prop: keyof TPublic) => {
		return useCases.scenarioList[prop].invoke as TPublic[typeof prop];
	},
});

export const Act = new Proxy({} as ProjectInterface.TActService, {
	get: (_target, prop: keyof ProjectInterface.TActService) => {
		return service(prop as any).invoke as ProjectInterface.TActService[typeof prop];
	},
});

export const Component = new ComponentConstructor({ Act, Pub });
