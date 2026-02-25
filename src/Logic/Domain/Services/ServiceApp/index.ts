import type { AppInterface as Interface } from "./App.interface.ts";
import Service from "../Service.ts";

export class ServiceApp extends Service<Interface.IAdapter> {}
