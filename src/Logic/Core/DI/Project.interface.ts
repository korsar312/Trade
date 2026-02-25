import type { InfrastructureLinks } from "../../Domain/Infrastructure/InfrastructureLinks";
import type { ServiceMessage } from "../../Domain/Services/ServiceMessage";
import type { ServiceStyle } from "../../Domain/Services/ServiceStyle";
import type { ServiceRouter } from "../../Domain/Services/ServiceRouter";
import type { ServiceBasket } from "../../Domain/Services/ServiceBasket";
import type { ServiceWallet } from "../../Domain/Services/ServiceWallet";
import type { ServiceSetting } from "../../Domain/Services/ServiceSetting";
import type { ServicePayment } from "../../Domain/Services/ServicePayment";
import type { ServiceOrder } from "../../Domain/Services/ServiceOrder";
import type { ServiceCatalogue } from "../../Domain/Services/ServiceCatalogue";
import type { ServiceUser } from "../../Domain/Services/ServiceUser";
import type { ServiceApp } from "../../Domain/Services/ServiceApp";
import type { InfrastructureStorage } from "../../Domain/Infrastructure/InfrastructureStorage";

export namespace ProjectInterface {
	export type TModuleInf = {
		Storage: InfrastructureStorage;
		Links: InfrastructureLinks;
	};

	export type TModuleService = {
		Catalogue: ServiceCatalogue;
		Message: ServiceMessage;
		Setting: ServiceSetting;
		Payment: ServicePayment;
		Router: ServiceRouter;
		Basket: ServiceBasket;
		Wallet: ServiceWallet;
		Style: ServiceStyle;
		Order: ServiceOrder;
		User: ServiceUser;
		App: ServiceApp;
	};

	type TDI<M> = <T extends keyof M>(key: T) => M[T];

	export type TServices = TDI<TModuleService>;
	export type TInfrastructure = TDI<TModuleInf>;

	type InvokeOf<T> = T extends { invoke: infer I } ? I : never;

	type ActType<T> = {
		[K in keyof T]: InvokeOf<T[K]>;
	};

	export type TActInf = ActType<TModuleInf>;
	export type TActService = ActType<TModuleService>;
}
