import DI from "./DI";
import Infrastructure from "./Create.infrastructure";
import { ServiceMessage } from "../Services/ServiceMessage";
import MessageImp from "../Services/ServiceMessage/Imp/Message.imp.ts";
import type { ProjectInterface } from "./Project.interface.ts";
import { ServiceStyle } from "../Services/ServiceStyle";
import StyleImp from "../Services/ServiceStyle/Imp/Style.imp.ts";
import Dictionary from "../../Config/List/Dictionary.ts";
import { Colors } from "../../Config/List/Colors.ts";
import { Fonts, Weights } from "../../Config/List/Fonts.ts";
import RouterImp from "../Services/ServiceRouter/Imp/Router.imp.ts";
import { ServiceRouter } from "../Services/ServiceRouter";
import { Path, Routes, RoutesRole } from "../../Config/List/Routes.ts";
import BasketImp from "../Services/ServiceBasket/Imp/Basket.imp.ts";
import { ServiceBasket } from "../Services/ServiceBasket";
import SettingImp from "../Services/ServiceSetting/Imp/Setting.imp.ts";
import PaymentImp from "../Services/ServicePayment/Imp/Payment.imp.ts";
import { ServicePayment } from "../Services/ServicePayment";
import { ServiceOrder } from "../Services/ServiceOrder";
import OrderImp from "../Services/ServiceOrder/Imp/Order.imp.ts";
import type { IServiceProps } from "../Services/Service.base.ts";
import { ServiceSetting } from "../Services/ServiceSetting";
import CatalogueImp from "../Services/ServiceCatalogue/Imp/Catalogue.imp.ts";
import { ServiceCatalogue } from "../Services/ServiceCatalogue";
import { createHmrSingleton } from "./CreateHmrSingleton.ts";

function createServices() {
	const inf: IServiceProps = { infrastructure: Infrastructure };

	const messageImp = new MessageImp(inf, Dictionary);
	const message = new ServiceMessage(messageImp);

	const styleImp = new StyleImp(inf, Colors, Fonts, Weights);
	const style = new ServiceStyle(styleImp);

	const routerImp = new RouterImp(inf, Routes, RoutesRole, Path, "CASS");
	const router = new ServiceRouter(routerImp);

	const basketImp = new BasketImp(inf);
	const basket = new ServiceBasket(basketImp);

	const settingImp = new SettingImp(inf);
	const setting = new ServiceSetting(settingImp);

	const paymentImp = new PaymentImp(inf);
	const payment = new ServicePayment(paymentImp);

	const orderImp = new OrderImp(inf);
	const order = new ServiceOrder(orderImp);

	const catalogueImp = new CatalogueImp(inf);
	const catalogue = new ServiceCatalogue(catalogueImp);

	const service = new DI<ProjectInterface.TModuleService>();

	service.use("Message", message);
	service.use("Style", style);
	service.use("Router", router);
	service.use("Basket", basket);
	service.use("Setting", setting);
	service.use("Payment", payment);
	service.use("Order", order);
	service.use("Catalogue", catalogue);

	return service.get;
}

const services = createHmrSingleton("services", createServices);
export default services;
