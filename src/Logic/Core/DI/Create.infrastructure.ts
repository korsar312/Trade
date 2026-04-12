import DI from "./DI";
import LinksImp from "../../Domain/Infrastructure/InfrastructureLinks/Imp/Links.imp";
import { InfrastructureLinks } from "../../Domain/Infrastructure/InfrastructureLinks";
import type { ProjectInterface } from "./Project.interface.ts";
import { createHmrSingleton } from "./CreateHmrSingleton.ts";
import StorageImp from "../../Domain/Infrastructure/InfrastructureStorage/Imp/Storage.imp.ts";
import { InfrastructureStorage } from "../../Domain/Infrastructure/InfrastructureStorage";
import { Links } from "../../../Config/List/Links.ts";
import { Consts } from "../../../Config/Consts.ts";

function createInfrastructure() {
	const storageImps = new StorageImp();
	const storage = new InfrastructureStorage(storageImps);

	const linksImps = new LinksImp(Links, Consts.baseUrl);
	const links = new InfrastructureLinks(linksImps);

	const infrastructure = new DI<ProjectInterface.TModuleInf>();

	infrastructure.use("Storage", storage);
	infrastructure.use("Links", links);

	return infrastructure.get;
}

const infrastructure = createHmrSingleton("infrastructure", createInfrastructure);
export default infrastructure;
