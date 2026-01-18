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
} as const;
