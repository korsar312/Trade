import type { LinksInterface } from "../../Core/Infrastructure/InfrastructureLinks/Links.interface.ts";

export const Links: LinksInterface.TLinks = {
	LOGIN: {
		link: "/login",
		http: "POST",
		role: ["USER", "ADMIN"],
	},
	GET_ITEMS: {
		link: "/getItems",
		http: "POST",
		role: ["USER", "ADMIN"],
	},
	GET_ITEM: {
		link: "/getItem",
		http: "GET",
		role: ["USER", "ADMIN"],
	},
	CREATE_LISTING: {
		link: "/createListing",
		http: "POST",
		role: ["USER", "ADMIN"],
	},
	GET_MY_ACC: {
		link: "/getMyAcc",
		http: "GET",
		role: ["USER", "ADMIN"],
	},
	WITHDRAWAL_BALANCE: {
		link: "/withdraw",
		http: "POST",
		role: ["USER", "ADMIN"],
	},
	REPLENISH_BALANCE: {
		link: "/replenish",
		http: "POST",
		role: ["USER", "ADMIN"],
	},
} as const;
