import type { LinksInterface } from "../../Core/Infrastructure/InfrastructureLinks/Links.interface.ts";

export const Links: LinksInterface.TLinks = {
	LOGIN: {
		link: "/login",
		http: "POST",
		role: ["USER", "ADMIN"],
	},
	REGISTER: {
		link: "/register",
		http: "POST",
		role: ["USER", "ADMIN"],
	},
	CREATE_LISTING: {
		link: "/createListing",
		http: "POST",
		role: ["USER", "ADMIN"],
	},
	GET_ITEMS: {
		link: "/getItems",
		http: "POST",
		role: ["USER", "ADMIN"],
	},
	GET_ITEM_DETAIL: {
		link: "/getItemDetail",
		http: "GET",
		role: ["USER", "ADMIN"],
	},
	GET_ORDERS: {
		link: "/getOrders",
		http: "GET",
		role: ["USER", "ADMIN"],
	},
	GET_ORDER_DETAIL: {
		link: "/getOrderDetail",
		http: "GET",
		role: ["USER", "ADMIN"],
	},
} as const;
