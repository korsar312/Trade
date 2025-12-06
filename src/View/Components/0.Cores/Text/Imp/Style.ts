import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";
import type { StyleInterface } from "../../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";
import type { TTextPos } from "../index.tsx";

class Style extends Styles {
	public wrapper: CSSObject = css`
		text-align: center;
		transition: ${this.variables.fastTransition};
		white-space: pre-line;
	`;

	public param(pos?: TTextPos, font?: StyleInterface.EFont, color?: StyleInterface.TColorChoice, opacity?: number): CSSObject {
		return css`
			${this.getFont(font || "BodyMain")};
			color: ${this.getColor(color || "SECOND_1", opacity)};
			text-align: ${pos};
		`;
	}
}

export default new Style();
