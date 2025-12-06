import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		${this.mixins.flexGorCenter};
		${this.mixins.flexCol};
		height: 100%;
		width: 100%;
	`;
}

export default new Style();
