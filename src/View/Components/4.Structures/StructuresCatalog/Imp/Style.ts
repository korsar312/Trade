import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		${this.mixins.flexCol};
		height: 100%;
		gap: 12px;
	`;

	public btnRow: CSSObject = css`
		${this.mixins.noScrollBar};
		${this.mixins.flexGorCenter};
		justify-content: flex-start;
		width: 100%;
		gap: 12px;
	`;

	public catalogWrap: CSSObject = css`
		border-radius: ${this.variables.radiusStandard}px;
		${this.mixins.noScrollBar};
		flex: 1;
	`;
}

export default new Style();
