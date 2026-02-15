import type { InfrastructureLinks } from "../Infrastructure/InfrastructureLinks";
import type { ServiceMessage } from "../Services/ServiceMessage";
import type { ServiceStyle } from "../Services/ServiceStyle";
import type { ServiceRouter } from "../Services/ServiceRouter";
import type { ServiceBasket } from "../Services/ServiceBasket";
import type { ServiceWallet } from "../Services/ServiceWallet";
import type { ServiceSetting } from "../Services/ServiceSetting";
import type { ServicePayment } from "../Services/ServicePayment";
import type { ServiceOrder } from "../Services/ServiceOrder";
import type { ServiceCatalogue } from "../Services/ServiceCatalogue";
import type { ServiceUser } from "../Services/ServiceUser";
import type { ServiceApp } from "../Services/ServiceApp";
import type { InfrastructureStorage } from "../Infrastructure/InfrastructureStorage";

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
