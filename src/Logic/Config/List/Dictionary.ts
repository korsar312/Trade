import type { MessageInterface } from "../../Core/Services/ServiceMessage/Message.interface.ts";
import type { CatalogueInterface } from "../../Core/Services/ServiceCatalogue/Catalogue.interface.ts";
import { PublicInterface } from "../../Core/Services/Public.interface.ts";

type TOther = CatalogueInterface.EBank | PublicInterface.ESort;

const Dictionary: MessageInterface.TDictionary<TOther> = {
	ENTER_DES_PRICE: { RU: "Введите желаемое значение цены" },
	TO_UPPER: { RU: "В порядке возрастания" },
	TO_LOWER: { RU: "В порядке убывания" },
	BANK_SELECTOR: { RU: "Выбор банка" },
	APPLY: { RU: "Применить" },
	PRODUCTS: { RU: "Товары" },
	PRODUCT: { RU: "Товар" },
	PROFILE: { RU: "Профиль" },
	USER: { RU: "Юзер" },
	ORDERS: { RU: "Заказы" },
	ORDER: { RU: "Заказ" },
	INFO: { RU: "Инфо" },
	BUY: { RU: "Купить" },
	BACK: { RU: "Назад" },
	ALFA: { RU: "Альфа-банк" },
	SBER: { RU: "Сбер-банк" },
	TINK: { RU: "Т-банк" },
	RATING: { RU: "Рейтинг" },
	PRISE_UP: { RU: "Цена до" },
	PRISE_DOWN: { RU: "Цена от" },
	BANK: { RU: "Банк" },
	SORT: { RU: "Сортировка" },
	CATALOG: { RU: "Каталог" },
	ERROR: { RU: "Ошибка" },
	DAY_US_USDT: { RU: "( {{1}} )  дней за {{2}} {{3}}" },
	LOGIN_TO_ADMIN_MENU: { RU: "Войти в админ меню" },
	LOGIN_TO_CASH_DESK: { RU: "Войти в кассу" },
	MENU: { RU: "Меню" },
	PAYMENT: { RU: "Оплата" },
	CART: { RU: "Корзина" },
	GAMES: { RU: "Игры" },
	CALL_WAITER: { RU: "Вызов официанта" },
	LOGIN: { RU: "Логин" },
	PASSWORD: { RU: "Пароль" },
	CASS: { RU: "Касса" },
	ENTER: { RU: "Войти" },
	ADMINISTRATION: { RU: "Администрирование" },
	TABLE_NUMBER: { RU: "Номер столика" },
	TOKEN: { RU: "Токен" },
	QR_TO_SMALL: { RU: "QR слишком мал" },
	CLOSE: { RU: "Закрыть" },
	SEARCHING: { RU: "Поиск..." },
} as const;

export default Dictionary;
