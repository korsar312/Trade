import type { RestInterface } from "../Infrastructure/InfrastructureLinks/Rest.interface.ts";
import type { MessageInterface } from "../Services/ServiceMessage/Message.interface.ts";

export namespace UseCasesInterface {
	export type IAdapter = {};

	export type TScenarioList = {
		requestCatalog: TScenarioBase<RestInterface.TGetItemsReq, Promise<void>>;
		requestLot: TScenarioBase<RestInterface.TGetItemReq, Promise<void>>;
		createLot: TScenarioBase<RestInterface.TCreateListingReq, Promise<string>>;
		requestOrderList: TScenarioBase<RestInterface.TGetOrderListReq, Promise<void>>;
		requestOrder: TScenarioBase<RestInterface.TGetOrderReq, Promise<void>>;

		getNamePage: TScenarioBase<void, string | MessageInterface.EWord>;
	};

	export type TScenarioBase<T, R> = {
		invoke(params: T): R;
	};
}
