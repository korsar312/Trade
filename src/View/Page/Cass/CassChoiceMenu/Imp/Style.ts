import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		${this.mixins.flexCol};
		gap: ${this.size(4)};
	`;

	public top: CSSObject = css`
		height: 30vh;
	`;

	public bot: CSSObject = css`
		${this.mixins.noScrollBar};
		${this.mixins.flexCenter};
		justify-content: space-between;
		gap: ${this.size(4)};
		flex-wrap: wrap;
		overflow: auto;
		flex: 1;
	`;
}

export default new Style();
