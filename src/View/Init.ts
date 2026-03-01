import type { ProjectInterface } from "../Logic/Core/DI/Project.interface.ts";
import service from "../Logic/Core/DI/Create.services.ts";
import useCases from "../Logic/Core/DI/Create.useCases.ts";
import ComponentConstructor from "./CreateComponent.tsx";
import type { UseCasesInterface } from "../Logic/Domain/UseCases/UseCases.interface.ts";

type TActService = ProjectInterface.TActService;

type TPublic = {
	[K in keyof UseCasesInterface.TScenarioList]: UseCasesInterface.TScenarioList[K]["invoke"];
};

type TActUseCases = { Public: TPublic };
export type TAct = TActService & TActUseCases;

const ActPublic = new Proxy({} as TPublic, {
	get: (_target, prop: keyof TPublic) => {
		return useCases.scenarioList[prop].invoke as TPublic[typeof prop];
	},
});

export const Act = new Proxy({} as TAct, {
	get: (_target, prop: keyof TAct) => {
		if (prop === "Public") return ActPublic as TAct["Public"];
		return service(prop as any).invoke as TAct[typeof prop];
	},
});

export const Component = new ComponentConstructor(Act);
