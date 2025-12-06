import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";
import type { EAtomButtonColor } from "../index.tsx";

class Style extends Styles {
	public wrapper(isFullWidth?: boolean, isFullHeight?: boolean): CSSObject {
		return css`
			${this.mixins.flexCenter};
			position: relative;
			transition: ${this.variables.fastTransition};
			width: ${isFullWidth ? "100%" : "auto"};
			height: ${isFullHeight ? "100% !important" : "auto"};
			gap: 4px;
			cursor: pointer;
			overflow: hidden;
			flex-shrink: 0;

			&:active {
				opacity: 0.8;
			}

			&[disabled] {
				opacity: 0.3;
			}
		`;
	}

	public icon: CSSObject = css`
		${this.mixins.flexCenter};
		gap: 4px;
	`;

	public textCont: CSSObject = css`
		flex: 1;
	`;

	public color(color?: EAtomButtonColor): CSSObject {
		const isOpacity = color === "SECOND_1";

		return css`
			border: 1px solid ${this.getColor(isOpacity ? "SECOND_1" : undefined)};
			background: ${this.getColor(isOpacity ? undefined : color)};
		`;
	}
}

export default new Style();
