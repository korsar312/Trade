import services from "./Create.services";
import infrastructure from "./Create.infrastructure";
import UseCases from "../../Domain/UseCases/UseCases";

export default new UseCases(services, infrastructure);
