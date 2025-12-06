import type { StyleInterface as Interface } from "../Style.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";
import { css, type CSSObject } from "@emotion/react";
import { BP } from "../../../../Config/List/Consts.ts";

class StyleImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private hex2rgba(hex: Interface.TColorHEXFormat, opacity: number): Interface.TColorRGBFormat {
		const RGB = hex.match(/\w\w/g)?.map((x) => parseInt(x, 16));

		return `rgba(${RGB},${opacity})`;
	}

	private getHexColor(store: Interface.Store, theme: Interface.ETheme, color: Interface.EColor): Interface.TColorHEXFormat {
		return store.color[theme][color];
	}

	private getStoreFont(store: Interface.Store, font: Interface.EFont): CSSObject | undefined {
		return store.font[font];
	}

	private createNewFontObj(font: Interface.EFont, fontObj: Interface.TFontList, weightObj: Interface.TWeightList): CSSObject {
		const token = fontObj[font];
		const [w, size] = token.split("_") as [Interface.EWeight, `${number}`];

		const fontMajor = css`
			font-family: Cascadia, serif;
			font-weight: ${weightObj[w]};
		`;

		function setSize(size: string, modify: number = 1) {
			return `${Number(size) * modify}px`;
		}

		return css`
			${fontMajor};

			@media (min-width: ${BP.xs}px) {
				font-size: ${setSize(size, 0.8)};
			}
			@media (min-width: ${BP.sm}px) {
				font-size: ${setSize(size, 1.5)};
			}
			@media (min-width: ${BP.md}px) {
				font-size: ${setSize(size, 1.5)};
			}
			@media (min-width: ${BP.xl}px) {
				font-size: ${setSize(size, 1.5)};
			}
			@media (min-width: ${BP.lg}px) {
				font-size: ${setSize(size, 1.7)};
			}
		`;
	}

	private saveNewFontObj(name: Interface.EFont, newFont: CSSObject): Interface.Store {
		const font = { ...this.store.font, [name]: newFont };

		return { ...this.store, font };
	}

	//==============================================================================================

	constructor(props: IServiceProps, color: Interface.TColor, fontList: Interface.TFontList, weightList: Interface.TWeightList) {
		const store: Interface.Store = {
			color,
			font: {},
			fontProp: { fontList, weightList },
			theme: "DARK",
		};

		super(props, store);
	}

	//==============================================================================================

	getColor(color?: Interface.TColorChoice, opacity: number = 1): string {
		if (color === undefined) return "transparent";
		const hex = this.getHexColor(this.store, this.store.theme, color);

		return this.hex2rgba(hex, opacity);
	}

	getFont(font: Interface.EFont): CSSObject {
		const storeFont = this.getStoreFont(this.store, font);
		if (storeFont) return storeFont;

		const newFont = this.createNewFontObj(font, this.store.fontProp.fontList, this.store.fontProp.weightList);
		this.store = this.saveNewFontObj(font, newFont);

		return newFont;
	}

	getSize(size: number): string {
		return `${size ** 2}px`;
	}

	getTheme(): Interface.ETheme {
		return this.store.theme;
	}
}

export default StyleImp;
