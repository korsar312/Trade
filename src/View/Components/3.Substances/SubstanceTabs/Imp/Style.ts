import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		${this.mixins.flexCol};
		gap: 12px;
		width: 100%;
		height: 100%;
	`;
}

export default new Style();
