import Styles from "../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		${this.mixins.noScrollBar};
		border-radius: ${this.variables.radiusStandard}px;
		height: 100%;
	`;

	public content: CSSObject = css`
		${this.mixins.flexCol};
		gap: 12px;
	`;
}

export default new Style();
