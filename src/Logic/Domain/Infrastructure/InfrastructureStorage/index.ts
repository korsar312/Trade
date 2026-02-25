import type { StorageInterface as Interface } from "./Storage.interface.ts";
import InfrastructureBase from "../Infrastructure.base";

export class InfrastructureStorage extends InfrastructureBase<Interface.IAdapter> {}
