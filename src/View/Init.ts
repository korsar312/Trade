import type { ProjectInterface } from "../Logic/Core/DI/Project.interface.ts";
import service from "../Logic/Core/DI/Create.services.ts";
import ComponentConstructor from "./CreateComponent.tsx";

export const Act = new Proxy({} as ProjectInterface.TActService, {
	get: (_, prop: keyof ProjectInterface.TModuleService) => service(prop).invoke,
});

export const Component = new ComponentConstructor(Act);
