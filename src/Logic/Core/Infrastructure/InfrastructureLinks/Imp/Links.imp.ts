import type { LinksInterface as Interface } from "../Links.interface";
import type { SettingInterface } from "../../../Services/ServiceSetting/Setting.interface.ts";
import type { CatalogueInterface } from "../../../Services/ServiceCatalogue/Catalogue.interface.ts";
import type { MessageInterface } from "../../../Services/ServiceMessage/Message.interface.ts";

class LinksImp implements Interface.IAdapter {
	private readonly links: Interface.TLinksList;

	private async request<T>(param: Interface.ERequestParam, returnTest: T): Promise<T> {
		param;
		this.links;

		await new Promise((resolve) => setTimeout(() => resolve(""), 1000));

		return returnTest;
	}

	//==============================================================================================

	constructor(links: Interface.TLinksList) {
		this.links = links;
	}

	//==============================================================================================

	public GET_PAYMENT_QR() {
		return this.request<string>({ link: "GET_PAYMENT_QR", method: "GET" }, "ссылка");
	}
	public GET_PAYMENT_STATUS(id: string) {
		return this.request<boolean>({ link: "GET_PAYMENT_STATUS", method: "GET", param: { id } }, true);
	}
	public CANCEL_PAYMENT() {
		return this.request<string>({ link: "CANCEL_PAYMENT", method: "GET" }, "ссылка");
	}
	public SPLIT_BILL() {
		return this.request<string>({ link: "SPLIT_BILL", method: "GET" }, "ссылка");
	}
	public GET_MENU() {
		return this.request<string>({ link: "GET_MENU", method: "GET" }, "ссылка");
	}
	public CALL_WAITER() {
		return this.request({ link: "CALL_WAITER", method: "GET" }, void 0);
	}
	public QR_ENTER(token: string) {
		const res: SettingInterface.TLoginInfo = { id: "fgh", token: "zxc" };
		return this.request<SettingInterface.TLoginInfo>({ link: "LOGIN", method: "GET", param: { token } }, res);
	}
	public LOGIN(login: string, password: string) {
		const res: SettingInterface.TLoginInfo = { id: "fgh", token: "zxc" };
		return this.request<SettingInterface.TLoginInfo>({ link: "LOGIN", method: "GET", param: { login, password } }, res);
	}
	public LOGOFF() {
		return this.request<string>({ link: "LOGOFF", method: "GET" }, "ссылка");
	}
	public GET_BUSINESS_INFO() {
		const res: SettingInterface.TBusinessInfo = { logoPath: "/Test/fav.jpg", name: "Попарим" };
		return this.request<SettingInterface.TBusinessInfo>({ link: "GET_BUSINESS_INFO", method: "GET" }, res);
	}
	public SEND_ORDER() {
		return this.request<string>({ link: "SEND_ORDER", method: "GET" }, "ссылка");
	}
	public GET_ALL_GOODS() {
		const res: CatalogueInterface.TItemMap = {
			goods_1: { image: "/Test/img_1.png", price: 4666, bank: "TINK" },
			goods_2: { image: "/Test/img_2.png", price: 4521, bank: "TINK" },
			goods_3: { image: "/Test/img_3.png", price: 4234, bank: "SBER" },
			goods_4: { image: "/Test/img_4.png", price: 4343, bank: "ALFA" },
			goods_5: { image: "/Test/img_5.png", price: 5354, bank: "ALFA" },
			goods_6: { image: "/Test/img_1.png", price: 4534, bank: "ALFA" },
			goods_7: { image: "/Test/img_2.png", price: 1244, bank: "SBER" },
			goods_8: { image: "/Test/img_3.png", price: 5434, bank: "TINK" },
		};
		return this.request<CatalogueInterface.TItemMap>({ link: "GET_ALL_GOODS", method: "GET" }, res);
	}
	public GET_PRODUCT_TEXT() {
		const res: MessageInterface.TGoodsInfo = {
			goods_1: { dict: { RU: "Продаю Т-банк. Дроп 14 лет" }, name: { RU: "Тиньк" } },
			goods_2: { dict: { RU: "Продаю тинькоф." }, name: { RU: "Т-банк" } },
			goods_3: { dict: { RU: "Толкаю сбер. Дроп 25 лет с кредитом" }, name: { RU: "Сбер" } },
			goods_4: { dict: { RU: "Отдам Т-банк. Дроп сидит" }, name: { RU: "Альфа" } },
			goods_5: { dict: { RU: "Продаю Т-банк. Дроп 24 лет" }, name: { RU: "Альфа банк" } },
			goods_6: { dict: { RU: "Продаю Т-банк. Дроп 54 лет" }, name: { RU: "АльфаБанк" } },
			goods_7: { dict: { RU: "Продаю Т-банк. Дроп 15 годов" }, name: { RU: "Сбербанк" } },
			goods_8: { dict: { RU: "Продаю Т-банк. Дроп 12 лет" }, name: { RU: "Т=банк" } },
		};

		return this.request<MessageInterface.TGoodsInfo>({ link: "GET_ALL_GOODS", method: "GET" }, res);
	}
}

export default LinksImp;
