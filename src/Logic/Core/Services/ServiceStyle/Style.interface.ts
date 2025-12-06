import type { CSSObject } from "@emotion/react";

export namespace StyleInterface {
	export interface IAdapter {
		getColor(color?: TColorChoice, opacity?: number): string;
		getFont(font: EFont): CSSObject;
		getSize(size: number): string;
		getTheme(): ETheme;
	}

	export interface Store {
		color: TColor;
		font: Partial<TFont>;
		fontProp: {
			fontList: TFontList;
			weightList: TWeightList;
		};
		theme: ETheme;
	}

	export type EFont = keyof typeof Font;

	export type EWeight = keyof typeof Weight;
	export type TWeightList = Record<EWeight, number>;

	type TFont = Record<EFont, CSSObject>;
	type TFontToken = `${EWeight}_${number}`;
	export type TFontList = Record<EFont, TFontToken>;

	export type EColor = keyof typeof Color;
	export type ETheme = keyof typeof Theme;

	export type TColor = Record<ETheme, Record<EColor, TColorHEXFormat>>;

	export type TColorRGBFormat = `rgba(${string},${number})`;
	export type TColorHEXFormat = `#${string}`;

	export type TColorChoice = EColor | undefined;
}

const Font = {
	fullSize: "fullSize",
	PageTitle: "PageTitle",
	SectionTitle: "SectionTitle",
	BlockTitle: "BlockTitle",
	SectionDesc: "SectionDesc",
	BlockLead: "BlockLead",
	BlockHeading: "BlockHeading",
	ElementHeading: "ElementHeading",
	BodyMain: "BodyMain",
	BodySecondary: "BodySecondary",
	BodySmall: "BodySmall",
	BodyDense: "BodyDense",
	LabelLarge: "LabelLarge",
	LabelMain: "LabelMain",
	LabelMedium: "LabelMedium",
	LabelSmall: "LabelSmall",
	Hint: "Hint",
} as const;

const Weight = {
	B: "B",
	S: "S",
	M: "M",
	R: "R",
} as const;

const Color = {
	MAIN_1: "MAIN_1",
	MAIN_2: "MAIN_2",
	MAIN_3: "MAIN_3",
	MAIN_4: "MAIN_4",

	SECOND_1: "SECOND_1",

	BLUE_1: "BLUE_1",
	BLUE_2: "BLUE_2",
	BLUE_3: "BLUE_3",

	RED_1: "RED_1",
} as const;

const Theme = {
	DARK: "DARK",
} as const;
