import type { LinksInterface } from "../../Domain/Infrastructure/InfrastructureLinks/Links.interface.ts";

export const Links: LinksInterface.TLinks = {
	LOGIN: { link: "/login", http: "POST", role: ["USER", "ADMIN"] },
	GET_ITEMS: { link: "/getItems", http: "POST", role: ["USER", "ADMIN"] },
	GET_ITEM: { link: "/getItem", http: "GET", role: ["USER", "ADMIN"] },
	CREATE_LISTING: { link: "/createListing", http: "POST", role: ["USER", "ADMIN"] },
	GET_MY_ACC: { link: "/getMyAcc", http: "GET", role: ["USER", "ADMIN"] },
	WITHDRAWAL_BALANCE: { link: "/withdraw", http: "POST", role: ["USER", "ADMIN"] },
	AWAIT_PAY_DEPOSIT: { link: "/awaitPayDeposit", http: "GET", role: ["USER", "ADMIN"] },
	IS_EXIST_DEPOSIT: { link: "/isExistDeposit", http: "GET", role: ["USER", "ADMIN"] },
	CREATE_DEPOSIT: { link: "/createDeposit", http: "POST", role: ["USER", "ADMIN"] },
	REMOVE_DEPOSIT: { link: "/removeDeposit", http: "POST", role: ["USER", "ADMIN"] },
	GET_BALANCE: { link: "/getBalance", http: "GET", role: ["USER", "ADMIN"] },
} as const;
