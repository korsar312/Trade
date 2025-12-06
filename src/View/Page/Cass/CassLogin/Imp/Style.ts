import Styles from "../../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		${this.mixins.flexGorCenter};
		${this.mixins.flexCol};
		height: 100%;
	`;

	public qr: CSSObject = css`
		aspect-ratio: 1 / 1;
	`;
}

export default new Style();
