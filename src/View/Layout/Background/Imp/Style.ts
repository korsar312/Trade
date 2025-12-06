import Styles from "../../../../Styles/Styles.ts";
import { css, type CSSObject } from "@emotion/react";

class Style extends Styles {
	public wrapper: CSSObject = css`
		${this.mixins.fixed}
		bottom: -1px;
		right: -1px;
	`;

	public img: CSSObject = css`
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: left center;
	`;
}

export default new Style();
