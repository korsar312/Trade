import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css``;

	public chatEl(side?: "left" | "right"): CSSObject {
		return css`
			display: flex;
			flex-direction: column;
			align-items: ${side === "right" ? "flex-end" : "flex-start"};
		`;
	}

	public text: CSSObject = css`
		display: inline;
		box-sizing: border-box;
		max-width: 90%;
	`;
}

export default new Style();
