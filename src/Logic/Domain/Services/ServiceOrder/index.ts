import type { OrderInterface as Interface } from "./Order.interface.ts";
import Service from "../Service.ts";

export class ServiceOrder extends Service<Interface.IAdapter> {}
