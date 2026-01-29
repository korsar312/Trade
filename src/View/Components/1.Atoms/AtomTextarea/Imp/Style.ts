import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";
import type { TAtomTextareaText } from "../index.tsx";
import type { StyleInterface } from "../../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";

class Style extends Styles {
	private sidePad = 8;

	public wrapper(color?: StyleInterface.TColorChoice): CSSObject {
		return css`
			position: relative;
			box-sizing: border-box;
			padding: ${this.sidePad * 1.2}px ${this.sidePad}px;
			border: 2px solid ${this.getColor("SECOND_1")};
			background: ${this.getColor(color)};
			border-radius: ${this.variables.radiusStandard / 2}px;
			transition: ${this.variables.fastTransition};
			overflow: hidden;

			&:has(input[disabled]) {
				background: ${this.getColor("SECOND_1")};
			}
		`;
	}

	public valid(valid?: boolean): CSSObject {
		const isError = valid === false;
		const isValid = valid === true;

		const borderColor = this.getColor(isError ? "RED_1" : isValid ? "BLUE_1" : "MAIN_3");

		return css`
			border-color: ${borderColor};

			&:has(input[disabled]) {
				border-color: ${this.getColor("BLUE_1")};
			}
		`;
	}

	public input: CSSObject = css`
		background: ${this.getColor()};
		outline: none;
		border: none;
		padding: 0;
		width: 100%;
		height: 100px;
		resize: vertical;

		&::-webkit-scrollbar-track {
			margin-bottom: 10px;
		}

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

			&:has(+ textarea:focus),
			&:has(+ textarea:not(:placeholder-shown)) {
				transform: ${topSide};
			}
		`;
	}

	public text(textProp: TAtomTextareaText): CSSObject {
		return css`
			${this.getFont(textProp.font)};
			color: ${this.getColor(textProp.color)};
		`;
	}
}

export default new Style();
