import Styles from "../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		${this.mixins.noScrollBar};
		${this.mixins.flexCol};
		gap: ${this.size(4)};
		height: 100%;
	`;
}

export default new Style();
