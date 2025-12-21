import Styles from "../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	private gap = 12;

	public wrapper: CSSObject = css`
		${this.mixins.flexCol};
		gap: ${this.gap}px;
		height: 100%;
	`;

	public content: CSSObject = css`
		${this.mixins.flexCol};
		justify-content: space-between;
		gap: ${this.gap}px;
		overflow: hidden;
	`;

	public imageWrap: CSSObject = css`
		flex: 1;
		min-height: 50px;
		border-radius: ${this.variables.radiusStandard}px;
		overflow: hidden;
	`;

	public detailWrap: CSSObject = css`
		overflow: hidden;
	`;

	public btnWrap: CSSObject = css`
		${this.mixins.flexCenter};
		gap: ${this.gap}px;
	`;
}

export default new Style();
