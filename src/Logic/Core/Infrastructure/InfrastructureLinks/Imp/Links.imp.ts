import type { LinksInterface as Interface } from "../Links.interface";
import type { CatalogueInterface } from "../../../Services/ServiceCatalogue/Catalogue.interface.ts";
import type { UserInterface } from "../../../Services/ServiceUser/User.interface.ts";

class LinksImp implements Interface.IAdapter {
	private authData: { login: string; token: string } | undefined;

	private async request<T>({ link, param }: Interface.ERequestParam): Promise<T> {
		const curLink = this.links[link];
		const method = curLink.http;
		const url = new URL(curLink.link, "http://" + this.address);

		const headers: Record<string, string> = {
			Accept: "application/json",
			...this.authData,
		};

		const init: RequestInit = { method, headers };

		switch (method) {
			case "GET":
				url.search = new URLSearchParams(param).toString();
				break;
			default:
				headers["Content-Type"] = "application/json";
				init.body = JSON.stringify(param);
				break;
		}

		const res = await fetch(url.toString(), init);
		if (!res.ok) throw new Error(res.status + res.statusText);

		return await res.json();
	}

	//==============================================================================================

	constructor(
		private readonly links: Interface.TLinks,
		private readonly address: string,
	) {}

	//==============================================================================================

	public LOGIN = (login: string, token: string) => {
		const param = { login, token };
		const res = this.request<UserInterface.TUser>({ link: "LOGIN", param });

		res.then(() => {
			this.authData = param;
		});

		return res;
	};
	public GET_ITEMS = (param: CatalogueInterface.TReqCatalog) => {
		return this.request<CatalogueInterface.TItemElPublic[]>({ link: "GET_ITEMS", param });
	};
	public GET_ITEM = (id: string, type: CatalogueInterface.ETypeItem) => {
		return this.request<CatalogueInterface.TItemElPublic>({ link: "GET_ITEM", param: { id, type } });
	};
	public CREATE_LISTING = (param: CatalogueInterface.TReqCreate) => {
		return this.request<Interface.TResDefault>({ link: "GET_ITEM", param });
	};
}

export default LinksImp;
