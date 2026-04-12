import type { LinksInterface } from "../../Logic/Domain/Infrastructure/InfrastructureLinks/Links.interface.ts";

export const Links: LinksInterface.TLinks = {
	LOGIN: { link: "/login", http: "post", role: ["USER", "ADMIN"] },
	GET_ITEMS: { link: "/getItems", http: "post", role: ["USER", "ADMIN"] },
	GET_ITEM: { link: "/getItem", http: "get", role: ["USER", "ADMIN"] },
	CREATE_LISTING: { link: "/createListing", http: "post", role: ["USER", "ADMIN"] },
	GET_MY_ACC: { link: "/getMyAcc", http: "get", role: ["USER", "ADMIN"] },
	AWAIT_PAY_DEPOSIT: { link: "/awaitPayDeposit", http: "get", role: ["USER", "ADMIN"] },
	IS_EXIST_DEPOSIT: { link: "/isExistDeposit", http: "get", role: ["USER", "ADMIN"] },
	CREATE_DEPOSIT: { link: "/createDeposit", http: "post", role: ["USER", "ADMIN"] },
	REMOVE_DEPOSIT: { link: "/removeDeposit", http: "post", role: ["USER", "ADMIN"] },
	GET_BALANCE: { link: "/getBalance", http: "get", role: ["USER", "ADMIN"] },
	WITHDRAW_BALANCE: { link: "/withdrawBalance", http: "post", role: ["USER", "ADMIN"] },
	START_BUY_ITEM: { link: "/startBuyImes", http: "get", role: ["USER", "ADMIN"] },
	GET_ORDER_LIST: { link: "/getOrderList", http: "post", role: ["USER", "ADMIN"] },
	GET_ORDER: { link: "/getOrder", http: "post", role: ["USER", "ADMIN"] },
	DEAL_COMPLETE: { link: "/dealComplete", http: "post", role: ["USER", "ADMIN"] },
} as const;
