import Styles from "../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		${this.mixins.fixed}
	`;

	public debugBtn: CSSObject = css`
		position: fixed;
		bottom: 15px;
		right: 15px;
	`;
}

export default new Style();
