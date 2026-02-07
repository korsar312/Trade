import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";
import type { TAtomInputText } from "../index.tsx";
import type { StyleInterface } from "../../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";

class Style extends Styles {
	private sidePad = 8;

	public wrapper(font: StyleInterface.EFont, color?: StyleInterface.TColorChoice): CSSObject {
		return css`
			${this.mixins.flexCenter};
			position: relative;
			box-sizing: border-box;
			padding: ${this.sidePad / 2}px ${this.sidePad}px;
			gap: ${this.sidePad / 2}px;
			border: 2px solid ${this.getColor("SECOND_1")};
			background: ${this.getColor(color)};
			border-radius: ${this.variables.radiusStandard / 2}px;
			transition: ${this.variables.fastTransition};
			width: 100%;
			min-height: ${this.sidePad * 3 + this.getFontSize(font)}px;
			height: 100%;

			&:has(input[disabled]) {
				background: ${this.getColor("SECOND_1")};
			}
		`;
	}

	public valid(valid?: boolean): CSSObject {
		const isError = valid === false;
		const isValid = valid === true;

		const borderColor = this.getColor(isError ? "RED_2" : isValid ? "BLUE_1" : "MAIN_3");

		return css`
			border-color: ${borderColor};

			&:has(input[disabled]) {
				border-color: ${this.getColor("BLUE_1")};
			}
		`;
	}

	public inputWrap: CSSObject = css`
		${this.mixins.flexVerCenter}
		position: relative;
		width: 100%;
		height: 100%;
	`;

	public input: CSSObject = css`
		position: relative;
		background: ${this.getColor()};
		outline: none;
		border: none;
		height: calc(100% - ${this.sidePad / 2}px);
		padding: 0;
		width: 100%;
		transition: ${this.variables.fastTransition};

		&::placeholder {
			color: ${this.getColor(undefined)};
		}
	`;

	public place(): CSSObject {
		const topSide = "translate(0, -66%) scale(0.65)";

		return css`
			transform: ${!1 ? topSide : "none"};
			transform-origin: left;
			text-wrap: nowrap;
			position: absolute;
			pointer-events: none;

			&:has(+ input:focus),
			&:has(+ input:not(:placeholder-shown)) {
				transform: ${topSide};
			}
		`;
	}

	public imageWrap: CSSObject = css`
		display: flex;
		gap: 4px;
	`;

	public text(textProp: TAtomInputText): CSSObject {
		return css`
			${this.getFont(textProp.font)};
			color: ${this.getColor(textProp.color)};
		`;
	}
}

export default new Style();
