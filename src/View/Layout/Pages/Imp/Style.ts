import Styles from "../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	private width = 500;

	public wrapper: CSSObject = css`
		${this.mixins.fixed};
		${this.mixins.flexCenter};
	`;

	public page: CSSObject = css`
		width: ${this.width}px;
		max-width: ${this.width}px;
		height: 100%;
	`;
}

export default new Style();
