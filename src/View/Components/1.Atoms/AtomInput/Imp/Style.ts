import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";
import type { TAtomInputText } from "../index.tsx";

class Style extends Styles {
	public wrapper: CSSObject = css`
		${this.mixins.flexCenter};
		position: relative;
		box-sizing: border-box;
		padding: 8px 16px;
		gap: 12px;
		border: 2px solid ${this.getColor("SECOND_1")};
		border-radius: 12px;
		transition: ${this.variables.fastTransition};
		width: 100%;

		&:has(input[disabled]) {
			background: ${this.getColor("SECOND_1")};
		}
	`;

	public valid(valid?: boolean): CSSObject {
		const isError = valid === false;
		const isValid = valid === true;

		const borderColor = this.getColor(isError ? "MAIN_4" : isValid ? "MAIN_4" : "MAIN_3");
		const bgColor = this.getColor(isError ? "MAIN_2" : undefined);

		return css`
			border-color: ${borderColor};
			background: ${bgColor};

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

	public inputContent: CSSObject = css`
		position: absolute;
		left: 0;
	`;

	public input: CSSObject = css`
		background: ${this.getColor()};
		outline: none;
		border: none;
		height: calc(100% - 4px);
		padding: 0;
		width: 100%;

		&::placeholder {
			color: ${this.getColor(undefined)};
		}
	`;

	public place(): CSSObject {
		const topSide = "translate(0, -66%) scale(0.65)";

		return css`
			display: inline-block;
			transform: ${!1 ? topSide : "none"};
			transform-origin: left;

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
