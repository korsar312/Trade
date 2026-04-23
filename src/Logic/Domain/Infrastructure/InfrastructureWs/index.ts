import type { WsInterface as Interface } from "./Ws.interface.ts";
import InfrastructureBase from "../Infrastructure.base";

export class InfrastructureWs extends InfrastructureBase<Interface.IAdapter> {}
