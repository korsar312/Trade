import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		height: 100%;
		${this.mixins.flexCol};
	`;

	public chat: CSSObject = css`
		${this.mixins.noScrollBar};
		padding: ${this.variables.radiusStandard}px 0;
		border-radius: ${this.variables.radiusStandard}px;
		flex: 1;
	`;
}

export default new Style();
