import ServiceProxy from "../../Core/Common/ServiceProxy.ts";

class Service<Implement extends object> extends ServiceProxy<Implement> {}

export default Service;
