import type { StyleInterface } from "../../Domain/Services/ServiceStyle/Style.interface.ts";

export const Fonts: StyleInterface.TFontList = {
	BlockHeading: "S_14", // Заголовок внутри блока/формы/модалки
	ElementHeading: "R_14", // Мини-заголовок элемента (разведён с лейблами)
	BodyMain: "R_17", // Основной текст
	LabelMedium: "S_15", // Инпуты/бейджи
};

export const Weights: StyleInterface.TWeightList = {
	B: 700,
	S: 600,
	M: 500,
	R: 400,
};
