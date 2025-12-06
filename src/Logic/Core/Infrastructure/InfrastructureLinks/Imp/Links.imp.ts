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
	public GET_CATEGORY_LIST() {
		const res: CatalogueInterface.TCategoryMap = {
			catalog_1: {},
			catalog_2: {},
			catalog_3: {},
			catalog_4: {},
		};
		return this.request<CatalogueInterface.TCategoryMap>({ link: "GET_CATEGORY_LIST", method: "GET" }, res);
	}
	public GET_ALL_GOODS() {
		const res: CatalogueInterface.TItemMap = {
			goods_1: { image: "/Test/img_1.png", price: 4666, categoryInclude: 1, tags: [] },
			goods_2: { image: "/Test/img_2.png", price: 4521, categoryInclude: 1, tags: [] },
			goods_3: { image: "/Test/img_3.png", price: 4234, categoryInclude: 1, tags: [] },
			goods_4: { image: "/Test/img_4.png", price: 43436, categoryInclude: 1, tags: [] },
			goods_5: { image: "/Test/img_5.png", price: 5354, categoryInclude: 1, tags: [] },
			goods_6: { image: "/Test/img_1.png", price: 4534, categoryInclude: 1, tags: [] },
			goods_7: { image: "/Test/img_2.png", price: 1244, categoryInclude: 1, tags: [] },
			goods_8: { image: "/Test/img_3.png", price: 5434, categoryInclude: 1, tags: [] },
		};
		return this.request<CatalogueInterface.TItemMap>({ link: "GET_ALL_GOODS", method: "GET" }, res);
	}
	public GET_PRODUCT_TEXT() {
		const res: MessageInterface.TGoodsInfo = {
			goods_1: { dict: { RU: "SD" }, name: { RU: "SD" } },
			goods_2: { dict: { RU: "SD" }, name: { RU: "SD" } },
			goods_3: { dict: { RU: "SD" }, name: { RU: "SD" } },
			goods_4: { dict: { RU: "SD" }, name: { RU: "SD" } },
			goods_5: { dict: { RU: "SD" }, name: { RU: "SD" } },
			goods_6: { dict: { RU: "SD" }, name: { RU: "SD" } },
			goods_7: { dict: { RU: "SD" }, name: { RU: "SD" } },
			goods_8: { dict: { RU: "SD" }, name: { RU: "SD" } },
			catalog_1: { name: { RU: "SD" } },
			catalog_2: { name: { RU: "SD" } },
			catalog_3: { name: { RU: "SD" } },
			catalog_4: { name: { RU: "SD" } },
		};

		return this.request<MessageInterface.TGoodsInfo>({ link: "GET_ALL_GOODS", method: "GET" }, res);
	}
}

export default LinksImp;
