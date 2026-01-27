import type { StyleInterface as Interface } from "../Style.interface.ts";
import ServiceBase, { type IServiceProps } from "../../Service.base.ts";
import { css, type CSSObject } from "@emotion/react";

class StyleImp extends ServiceBase<Interface.Store> implements Interface.IAdapter {
	private Hex2rgba(hex: Interface.TColorHEXFormat, opacity: number): Interface.TColorRGBFormat {
		const RGB = hex.match(/\w\w/g)?.map((x) => parseInt(x, 16));

		return `rgba(${RGB},${opacity})`;
	}

	private GetHexColor(store: Interface.Store, theme: Interface.ETheme, color: Interface.EColor): Interface.TColorHEXFormat {
		return store.color[theme][color];
	}

	private GetStoreFont(store: Interface.Store, font: Interface.EFont): CSSObject | undefined {
		return store.font[font];
	}

	private CreateNewFontObj(font: Interface.EFont, fontObj: Interface.TFontList, weightObj: Interface.TWeightList): CSSObject {
		const token = fontObj[font];
		const [w, size] = token.split("_") as [Interface.EWeight, `${number}`];

		const fontMajor = css`
			font-family: Cascadia, serif;
			font-weight: ${weightObj[w]};
		`;

		return css`
			${fontMajor};
			font-size: ${Number(size)}px;
		`;
	}

	private GetSizeFont(font: Interface.EFont, fontObj: Interface.TFontList): number {
		const token = fontObj[font];
		const [_w, size] = token.split("_") as [Interface.EWeight, `${number}`];

		return Number(size);
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

	public getColor(color?: Interface.TColorChoice, opacity: number = 1): string {
		if (color === undefined) return "transparent";
		const hex = this.GetHexColor(this.store, this.store.theme, color);

		return this.Hex2rgba(hex, opacity);
	}

	public getFont(font: Interface.EFont): CSSObject {
		const storeFont = this.GetStoreFont(this.store, font);
		if (storeFont) return storeFont;

		const newFont = this.CreateNewFontObj(font, this.store.fontProp.fontList, this.store.fontProp.weightList);
		this.store = this.saveNewFontObj(font, newFont);

		return newFont;
	}

	public getFontSize(font: Interface.EFont): number {
		return this.GetSizeFont(font, this.store.fontProp.fontList);
	}

	public getSize(size: number): string {
		return `${size ** 2}px`;
	}

	public getTheme(): Interface.ETheme {
		return this.store.theme;
	}
}

export default StyleImp;
