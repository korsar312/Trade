import type { CatalogueInterface } from "../../../Services/ServiceCatalogue/Catalogue.interface.ts";
import type { OrderInterface } from "../../../Services/ServiceOrder/Order.interface.ts";

export const TEST_DATA_LIST_ITEM: CatalogueInterface.TItemMap = {
	// --- Seller A (много товаров) -> разные buyers ---
	item_001: {
		name: "iPhone 15 Pro 256GB",
		desc: "Состояние 9/10, Face ID ок, комплект: коробка+кабель.",
		image: "/Test/img_1.png",
		price: 89990,
		seller: { id: "actor_seller_A", name: "Артём К.", rating: 5 },
		buyer: { id: "actor_buyer_1", name: "Евгений П.", rating: 4 },
		bank: "TINK",
	},
	item_002: {
		name: "AirPods Pro 2 (USB-C)",
		desc: "Оригинал, шумодав работает, без дефектов.",
		image: "/Test/img_2.png",
		price: 18990,
		seller: { id: "actor_seller_A", name: "Артём К.", rating: 5 },
		buyer: { id: "actor_buyer_2", name: "Алина Ж.", rating: 5 },
		bank: "SBER",
	},
	item_003: {
		name: "Apple Watch Series 9 45mm",
		desc: "Без ремонтов, батарея ок, ремешок в комплекте.",
		image: "/Test/img_3.png",
		price: 27990,
		seller: { id: "actor_seller_A", name: "Артём К.", rating: 5 },
		buyer: { id: "actor_buyer_3", name: "Никита Д.", rating: 3 },
		bank: "ALFA",
	},
	item_004: {
		name: "PS5 Slim (дисковод)",
		desc: "Покупалась весной, 1 геймпад, тихая, без перегрева.",
		image: "/Test/img_4.png",
		price: 54990,
		seller: { id: "actor_seller_A", name: "Артём К.", rating: 5 },
		buyer: { id: "actor_buyer_4", name: "Софья Р.", rating: 4 },
		bank: "TINK",
	},

	// --- Buyer X (покупает сразу несколько) <- разные sellers ---
	item_005: {
		name: "MacBook Air M2 13” (8/256)",
		desc: "Аккум 92%, RU/EN, отдам с чехлом.",
		image: "/Test/img_5.png",
		price: 79990,
		seller: { id: "actor_seller_B", name: "Марина С.", rating: 4 },
		buyer: { id: "actor_buyer_X", name: "Роман В.", rating: 5 },
		bank: "SBER",
	},
	item_006: {
		name: "Nintendo Switch OLED",
		desc: "Стики без дрифта, док+чехол, экран без выгорания.",
		image: "/Test/img_1.png",
		price: 27990,
		seller: { id: "actor_seller_C", name: "Павел Л.", rating: 4 },
		buyer: { id: "actor_buyer_X", name: "Роман В.", rating: 5 },
		bank: "ALFA",
	},
	item_007: {
		name: "Dyson V12 Detect Slim",
		desc: "Полный комплект, 2 батареи, обслужен.",
		image: "/Test/img_2.png",
		price: 36990,
		seller: { id: "actor_seller_D", name: "Екатерина И.", rating: 3 },
		buyer: { id: "actor_buyer_X", name: "Роман В.", rating: 5 },
		bank: "TINK",
	},

	// --- Seller Z (низкий рейтинг) и Buyer Z (низкий рейтинг) ---
	item_008: {
		name: "Видеокарта RTX 3080",
		desc: "Есть следы использования, тесты пройдены, кулеры не шумят.",
		image: "/Test/img_3.png",
		price: 45990,
		seller: { id: "actor_seller_Z", name: "Сергей А.", rating: 1 },
		buyer: { id: "actor_buyer_Z", name: "Денис Ф.", rating: 1 },
		bank: "SBER",
	},

	// --- Один buyer покупает несколько у одного seller (комбо-сценарий) ---
	item_009: {
		name: "Монитор 27” 165Hz",
		desc: "Без битых пикселей, кабели в комплекте.",
		image: "/Test/img_4.png",
		price: 21990,
		seller: { id: "actor_seller_E", name: "Кирилл М.", rating: 3 },
		buyer: { id: "actor_buyer_combo", name: "Владимир Ю.", rating: 4 },
		bank: "ALFA",
	},
	item_010: {
		name: "Клавиатура механическая",
		desc: "Свичи тактильные, подсветка работает.",
		image: "/Test/img_5.png",
		price: 5990,
		seller: { id: "actor_seller_E", name: "Кирилл М.", rating: 3 },
		buyer: { id: "actor_buyer_combo", name: "Владимир Ю.", rating: 4 },
		bank: "ALFA",
	},
	item_011: {
		name: "Мышь игровая",
		desc: "Сенсор без срывов, состояние отличное.",
		image: "/Test/img_1.png",
		price: 3490,
		seller: { id: "actor_seller_E", name: "Кирилл М.", rating: 3 },
		buyer: { id: "actor_buyer_combo", name: "Владимир Ю.", rating: 4 },
		bank: "ALFA",
	},

	// --- Перекрёстные покупки (actor одновременно seller и buyer в разных товарах) ---
	item_012: {
		name: "Кофемашина De’Longhi Magnifica S",
		desc: "Регулярная чистка, делает эспрессо/капучино.",
		image: "/Test/img_2.png",
		price: 23990,
		seller: { id: "actor_cross_1", name: "Илья Н.", rating: 4 },
		buyer: { id: "actor_cross_2", name: "Дарья З.", rating: 4 },
		bank: "TINK",
	},
	item_013: {
		name: "Электросамокат",
		desc: "Пробег ~600 км, батарея держит, тормоза обслужены.",
		image: "/Test/img_3.png",
		price: 31990,
		seller: { id: "actor_cross_2", name: "Дарья З.", rating: 4 },
		buyer: { id: "actor_cross_1", name: "Илья Н.", rating: 4 },
		bank: "SBER",
	},

	// --- Набор дешёвых товаров (edge: маленькие цены) ---
	item_014: {
		name: "USB-C кабель 2м",
		desc: "Новый, быстрая зарядка поддерживается.",
		image: "/Test/img_4.png",
		price: 390,
		seller: { id: "actor_seller_misc", name: "Олег Т.", rating: 2 },
		buyer: { id: "actor_buyer_cheap", name: "Саша Х.", rating: 5 },
		bank: "SBER",
	},
	item_015: {
		name: "Чехол силиконовый",
		desc: "Новый, под iPhone 15 Pro.",
		image: "/Test/img_5.png",
		price: 290,
		seller: { id: "actor_seller_misc", name: "Олег Т.", rating: 2 },
		buyer: { id: "actor_buyer_cheap", name: "Саша Х.", rating: 5 },
		bank: "ALFA",
	},
};

export const TEST_DATA_LIST_ORDER: OrderInterface.TOrderMap = {
	item_001: {
		name: "iPhone 15 Pro 256GB",
		desc: "Состояние 9/10, Face ID ок, комплект: коробка+кабель.",
		image: "/Test/img_1.png",
		price: 89990,
		seller: { id: "actor_seller_A", name: "Артём К.", rating: 5 },
		buyer: { id: "actor_buyer_1", name: "Евгений П.", rating: 4 },
		bank: "TINK",
		status: "ACTIVE",
	},
	item_002: {
		name: "AirPods Pro 2 (USB-C)",
		desc: "Оригинал, шумодав работает, без дефектов.",
		image: "/Test/img_2.png",
		price: 18990,
		seller: { id: "actor_seller_A", name: "Артём К.", rating: 5 },
		buyer: { id: "actor_buyer_2", name: "Алина Ж.", rating: 5 },
		bank: "SBER",
		status: "COMPLETE",
	},
	item_003: {
		name: "Apple Watch Series 9 45mm",
		desc: "Без ремонтов, батарея ок, ремешок в комплекте.",
		image: "/Test/img_3.png",
		price: 27990,
		seller: { id: "actor_seller_A", name: "Артём К.", rating: 5 },
		buyer: { id: "actor_buyer_3", name: "Никита Д.", rating: 3 },
		bank: "ALFA",
		status: "CANCEL",
	},
	item_004: {
		name: "PS5 Slim (дисковод)",
		desc: "Покупалась весной, 1 геймпад, тихая, без перегрева.",
		image: "/Test/img_4.png",
		price: 54990,
		seller: { id: "actor_seller_A", name: "Артём К.", rating: 5 },
		buyer: { id: "actor_buyer_4", name: "Софья Р.", rating: 4 },
		bank: "TINK",
		status: "ACTIVE",
	},
};
