import Styles from "../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		${this.mixins.flexCol};
		gap: ${this.variables.padStandard}px;
		height: 100%;
	`;

	public content: CSSObject = css`
		overflow: hidden;
		flex: 1;
	`;

	public imageWrap: CSSObject = css`
		min-height: 10vh;
		border-radius: ${this.variables.radiusStandard}px;
		overflow: hidden;
		flex: 1;
	`;

	public detailWrap: CSSObject = css`
		${this.mixins.noScrollBar};
		border-radius: ${this.variables.radiusStandard}px;
	`;
}

export default new Style();
