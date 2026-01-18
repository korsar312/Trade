import Styles from "../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	private width = 500;

	public wrapper: CSSObject = css`
		${this.mixins.fixed};
		${this.mixins.flexCenter};
	`;

	public content: CSSObject = css`
		${this.mixins.flexCol};
		max-width: ${this.width}px;
		min-width: 0;
		width: ${this.width}px;
		height: 100%;
		gap: 12px;
	`;

	public page: CSSObject = css`
		overflow: hidden;
		flex: 1;
	`;
}

export default new Style();
