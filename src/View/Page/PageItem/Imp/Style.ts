import Styles from "../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	private gap = 12;

	public wrapper: CSSObject = css`
		${this.mixins.flexCol};
		gap: ${this.gap}px;
		height: 100%;
	`;

	public imageWrap: CSSObject = css`
		border-radius: ${this.variables.radiusStandard}px;
		overflow: hidden;
	`;

	public detailWrap: CSSObject = css`
		flex: 1;
		overflow: hidden;
	`;

	public btnWrap: CSSObject = css`
		${this.mixins.flexCenter};
		gap: ${this.gap}px;
	`;
}

export default new Style();
