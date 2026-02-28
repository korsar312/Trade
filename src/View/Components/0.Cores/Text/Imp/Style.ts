import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";
import type { StyleInterface } from "../../../../../Logic/Domain/Services/ServiceStyle/Style.interface.ts";
import type { TTextPos } from "../index.tsx";

class Style extends Styles {
	public wrapper: CSSObject = css`
		text-align: center;
		transition: ${this.variables.fastTransition};
		white-space: pre-line;
		width: 100%;
	`;

	public param(
		pos?: TTextPos,
		font?: StyleInterface.EFont,
		color?: StyleInterface.TColorChoice,
		opacity?: number,
		isBreakLine?: Boolean,
	): CSSObject {
		return css`
			${this.getFont(font || "BodyMain")};
			color: ${this.getColor(color || "SECOND_1", opacity)};
			text-align: ${pos};
			overflow-wrap: ${isBreakLine ? "anywhere" : "initial"};
		`;
	}
}

export default new Style();
