import type { ProjectInterface } from "./DI/Project.interface.ts";
import service from "./DI/Create.services.ts";

export const Act = new Proxy({} as ProjectInterface.ActType<ProjectInterface.TModuleService>, {
	get: (_, prop: keyof ProjectInterface.TModuleService) => service(prop).invoke
});



