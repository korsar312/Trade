import type { StyleInterface } from "../../Core/Services/ServiceStyle/Style.interface.ts";

export const Fonts: StyleInterface.TFontList = {
	// Заголовки
	fullSize: "B_42",
	PageTitle: "B_32", // H1
	SectionTitle: "R_28", // H2
	BlockTitle: "R_24", // H3

	// Подзаголовки / лиды
	SectionDesc: "B_20", // Пояснение под разделом
	BlockLead: "R_20", // Лид в карточках/блоках

	// Внутренние заголовки
	BlockHeading: "S_14", // Заголовок внутри блока/формы/модалки
	ElementHeading: "R_14", // Мини-заголовок элемента (разведён с лейблами)

	// Текст
	BodyMain: "R_16", // Основной текст
	BodySecondary: "R_14", // Второстепенный текст
	BodySmall: "R_12", // Примечания/хинты
	BodyDense: "R_11", // Плотные таблицы/мелкий текст

	// Метки / кнопки
	LabelLarge: "B_16", // Крупные кнопки/таб-лейблы
	LabelMain: "M_14", // Кнопки/табы
	LabelMedium: "S_15", // Инпуты/бейджи
	LabelSmall: "R_15", // Самые мелкие подписи/иконки

	// Подсказки
	Hint: "R_12", // Плейсхолдеры/подсказки в инпутах
};

export const Weights: StyleInterface.TWeightList = {
	B: 700,
	S: 600,
	M: 500,
	R: 400,
};
