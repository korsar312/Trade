import DI from "./DI";
import Infrastructure from "./Create.infrastructure";
import { ServiceMessage } from "../../Domain/Services/ServiceMessage";
import MessageImp from "../../Domain/Services/ServiceMessage/Imp/Message.imp.ts";
import type { ProjectInterface } from "./Project.interface.ts";
import { ServiceStyle } from "../../Domain/Services/ServiceStyle";
import StyleImp from "../../Domain/Services/ServiceStyle/Imp/Style.imp.ts";
import Dictionary from "../../Config/List/Dictionary.ts";
import { Colors } from "../../Config/List/Colors.ts";
import { Fonts, Weights } from "../../Config/List/Fonts.ts";
import RouterImp from "../../Domain/Services/ServiceRouter/Imp/Router.imp.ts";
import { ServiceRouter } from "../../Domain/Services/ServiceRouter";
import { Path, Routes, RoutesRole } from "../../Config/List/Routes.ts";
import BasketImp from "../../Domain/Services/ServiceBasket/Imp/Basket.imp.ts";
import { ServiceBasket } from "../../Domain/Services/ServiceBasket";
import SettingImp from "../../Domain/Services/ServiceSetting/Imp/Setting.imp.ts";
import PaymentImp from "../../Domain/Services/ServicePayment/Imp/Payment.imp.ts";
import { ServicePayment } from "../../Domain/Services/ServicePayment";
import { ServiceDeal } from "../../Domain/Services/ServiceDeal";
import DealImp from "../../Domain/Services/ServiceDeal/Imp/Deal.imp.ts";
import type { IServiceProps } from "../../Domain/Services/Service.base.ts";
import { ServiceSetting } from "../../Domain/Services/ServiceSetting";
import { createHmrSingleton } from "./CreateHmrSingleton.ts";
import { Consts } from "../../Config/Consts.ts";
import { ServiceUser } from "../../Domain/Services/ServiceUser";
import UserImp from "../../Domain/Services/ServiceUser/Imp/User.imp.ts";
import AppImp from "../../Domain/Services/ServiceApp/Imp/App.imp.ts";
import { ServiceApp } from "../../Domain/Services/ServiceApp";
import WalletImp from "../../Domain/Services/ServiceWallet/Imp/Wallet.imp.ts";
import { ServiceWallet } from "../../Domain/Services/ServiceWallet";
import ListingImp from "../../Domain/Services/ServiceListing/Imp/Listing.imp.ts";
import { ServiceListing } from "../../Domain/Services/ServiceListing";
import ItemImp from "../../Domain/Services/ServiceItem/Imp/Item.imp.ts";
import { ServiceItem } from "../../Domain/Services/ServiceItem";

function createServices() {
	const inf: IServiceProps = { infrastructure: Infrastructure };

	const messageImp = new MessageImp(inf, Dictionary);
	const message = new ServiceMessage(messageImp);

	const styleImp = new StyleImp(inf, Colors, Fonts, Weights);
	const style = new ServiceStyle(styleImp);

	const routerImp = new RouterImp(inf, Routes, RoutesRole, Path, "USER", Consts.basePath);
	const router = new ServiceRouter(routerImp);

	const basketImp = new BasketImp(inf);
	const basket = new ServiceBasket(basketImp);

	const walletImp = new WalletImp(inf);
	const wallet = new ServiceWallet(walletImp);

	const settingImp = new SettingImp(inf);
	const setting = new ServiceSetting(settingImp);

	const paymentImp = new PaymentImp(inf);
	const payment = new ServicePayment(paymentImp);

	const dealImp = new DealImp(inf);
	const deal = new ServiceDeal(dealImp);

	const listingImp = new ListingImp(inf);
	const listing = new ServiceListing(listingImp);

	const userImp = new UserImp(inf);
	const user = new ServiceUser(userImp);

	const appImp = new AppImp(inf);
	const app = new ServiceApp(appImp);

	const itemImp = new ItemImp(inf);
	const item = new ServiceItem(itemImp);

	const service = new DI<ProjectInterface.TModuleService>();

	service.use("Message", message);
	service.use("Style", style);
	service.use("Router", router);
	service.use("Basket", basket);
	service.use("Wallet", wallet);
	service.use("Setting", setting);
	service.use("Payment", payment);
	service.use("Deal", deal);
	service.use("Listing", listing);
	service.use("User", user);
	service.use("Item", item);
	service.use("App", app);

	return service.get;
}

const services = createHmrSingleton("services", createServices);
export default services;
