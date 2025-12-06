import DI from "./DI";
import LinksImp from "../Infrastructure/InfrastructureLinks/Imp/Links.imp";
import { InfrastructureLinks } from "../Infrastructure/InfrastructureLinks";
import type { ProjectInterface } from "./Project.interface.ts";
import { Links } from "../../Config/List/Links.ts";
import { createHmrSingleton } from "./CreateHmrSingleton.ts";

function createInfrastructure() {
	const linksImps = new LinksImp(Links);
	const links = new InfrastructureLinks(linksImps);

	const infrastructure = new DI<ProjectInterface.TModuleInf>();

	infrastructure.use("Links", links);

	return infrastructure.get;
}

const infrastructure = createHmrSingleton("infrastructure", createInfrastructure);
export default infrastructure;
