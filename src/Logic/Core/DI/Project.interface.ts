import type { InfrastructureLinks } from "../../Domain/Infrastructure/InfrastructureLinks";
import type { ServiceMessage } from "../../Domain/Services/ServiceMessage";
import type { ServiceStyle } from "../../Domain/Services/ServiceStyle";
import type { ServiceRouter } from "../../Domain/Services/ServiceRouter";
import type { ServiceBasket } from "../../Domain/Services/ServiceBasket";
import type { ServiceWallet } from "../../Domain/Services/ServiceWallet";
import type { ServiceSetting } from "../../Domain/Services/ServiceSetting";
import type { ServicePayment } from "../../Domain/Services/ServicePayment";
import type { ServiceUser } from "../../Domain/Services/ServiceUser";
import type { ServiceApp } from "../../Domain/Services/ServiceApp";
import type { InfrastructureStorage } from "../../Domain/Infrastructure/InfrastructureStorage";
import type { ServiceDeal } from "../../Domain/Services/ServiceDeal";
import type { ServiceListing } from "../../Domain/Services/ServiceListing";
import type UseCases from "../../Domain/UseCases/UseCases.ts";
import type { ServiceItem } from "../../Domain/Services/ServiceItem";
import type { UseCasesInterface } from "../../Domain/UseCases/UseCases.interface.ts";

export namespace ProjectInterface {
	export type TModuleInf = {
		Storage: InfrastructureStorage;
		Links: InfrastructureLinks;
	};

	export type TModuleService = {
		Listing: ServiceListing;
		Message: ServiceMessage;
		Setting: ServiceSetting;
		Payment: ServicePayment;
		Router: ServiceRouter;
		Basket: ServiceBasket;
		Wallet: ServiceWallet;
		Style: ServiceStyle;
		Item: ServiceItem;
		Deal: ServiceDeal;
		User: ServiceUser;
		App: ServiceApp;
	};

	export type TModuleUseCases = {
		Public: UseCases;
	};

	type TDI<M> = <T extends keyof M>(key: T) => M[T];

	export type TInfrastructure = TDI<TModuleInf>;
	export type TServices = TDI<TModuleService>;
	export type TUseCases = TDI<TModuleUseCases>;

	type InvokeOf<T> = T extends { invoke: infer I } ? I : never;

	type ActType<T> = {
		[K in keyof T]: InvokeOf<T[K]>;
	};

	export type TActInf = ActType<TModuleInf>;
	export type TActService = ActType<TModuleService>;
	export type TActUseCases = ActType<UseCasesInterface.TScenarioList>;
}
