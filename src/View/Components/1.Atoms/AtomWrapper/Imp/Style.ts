import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";
import type { TAtomWrapperPot } from "../index.tsx";
import type { Property } from "csstype";

class Style extends Styles {
	public colControl: CSSObject = css`
		${this.mixins.flexCol};
		gap: ${this.variables.padStandard}px;
		min-height: 0;
	`;

	public rowControl(pos?: TAtomWrapperPot): CSSObject {
		const side = ((): Property.JustifyContent => {
			switch (pos) {
				case "center":
					return "center";
				case "right":
					return "flex-end";
				case "left":
				default:
					return "flex-start";
			}
		})();

		return css`
			${this.mixins.flexCenter};
			justify-content: ${side};
			gap: ${this.variables.padStandard}px;
			width: 100%;
		`;
	}
}

export default new Style();
